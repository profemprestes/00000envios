import { NextRequest, NextResponse } from "next/server";

// Caché en memoria para Place Details (TTL 1 hora, las coordenadas de un lugar no cambian)
const detailsCache = new Map<string, { data: unknown; expiresAt: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000;

export async function GET(request: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { status: "REQUEST_DENIED", error_message: "Falta NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en el servidor." },
      { status: 500 }
    );
  }

  const placeId = request.nextUrl.searchParams.get("place_id");
  const sessionToken = request.nextUrl.searchParams.get("sessiontoken");

  if (!placeId) {
    return NextResponse.json(
      { status: "INVALID_REQUEST", error_message: "Falta place_id." },
      { status: 400 }
    );
  }

  const cached = detailsCache.get(placeId);
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json(cached.data);
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("key", apiKey);
  url.searchParams.set("language", "es");
  // Field Masking mínimo para Basic Data tier (geometry/location, formatted_address)
  url.searchParams.set("fields", "geometry/location,formatted_address");
  if (sessionToken) {
    url.searchParams.set("sessiontoken", sessionToken);
  }

  try {
    const res = await fetch(url.toString());
    const data = await res.json();

    if (data.status === "OK") {
      if (detailsCache.size > 300) {
        const now = Date.now();
        for (const [k, v] of detailsCache.entries()) {
          if (v.expiresAt <= now) detailsCache.delete(k);
        }
      }
      detailsCache.set(placeId, { data, expiresAt: Date.now() + CACHE_TTL_MS });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("[/api/places/details]", error);
    return NextResponse.json(
      { status: "UNKNOWN_ERROR", error_message: "No se pudo consultar el detalle del lugar." },
      { status: 502 }
    );
  }
}

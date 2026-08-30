import { NextRequest, NextResponse } from "next/server";

// Sesgo geográfico: centro aproximado de Mar del Plata, radio 30 km.
// Mantiene las sugerencias relevantes a la zona de cobertura real del servicio.
const MDQ_LOCATION_BIAS = "circle:30000@-38.0055,-57.5426";

// Caché en memoria para búsquedas idénticas (TTL 10 minutos)
const cache = new Map<string, { data: unknown; expiresAt: number }>();
const CACHE_TTL_MS = 10 * 60 * 1000;

export async function GET(request: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { status: "REQUEST_DENIED", error_message: "Falta NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en el servidor." },
      { status: 500 }
    );
  }

  const input = request.nextUrl.searchParams.get("input")?.trim() || "";
  const sessionToken = request.nextUrl.searchParams.get("sessiontoken");

  // Requerir al menos 4 caracteres para evitar disparar consultas prematuras
  if (input.length < 4) {
    return NextResponse.json({ status: "OK", predictions: [] });
  }

  const cacheKey = input.toLowerCase();
  const cached = cache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json(cached.data);
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/autocomplete/json");
  url.searchParams.set("input", input);
  url.searchParams.set("key", apiKey);
  url.searchParams.set("language", "es");
  url.searchParams.set("components", "country:ar");
  url.searchParams.set("locationbias", MDQ_LOCATION_BIAS);
  if (sessionToken) {
    url.searchParams.set("sessiontoken", sessionToken);
  }

  try {
    const res = await fetch(url.toString());
    const data = await res.json();

    if (data.status === "OK") {
      // Guardar en caché y limpiar entradas vencidas si supera 200 items
      if (cache.size > 200) {
        const now = Date.now();
        for (const [k, v] of cache.entries()) {
          if (v.expiresAt <= now) cache.delete(k);
        }
      }
      cache.set(cacheKey, { data, expiresAt: Date.now() + CACHE_TTL_MS });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("[/api/places/autocomplete]", error);
    return NextResponse.json(
      { status: "UNKNOWN_ERROR", error_message: "No se pudo consultar Google Places." },
      { status: 502 }
    );
  }
}

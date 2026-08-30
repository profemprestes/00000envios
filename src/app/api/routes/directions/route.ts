import { NextRequest, NextResponse } from "next/server";

// Caché en memoria para cálculos de ruta (TTL 30 minutos)
const directionsCache = new Map<string, { data: unknown; expiresAt: number }>();
const CACHE_TTL_MS = 30 * 60 * 1000;

export async function GET(request: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { status: "REQUEST_DENIED", error_message: "Falta NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en el servidor." },
      { status: 500 }
    );
  }

  const origin = request.nextUrl.searchParams.get("origin");
  const destination = request.nextUrl.searchParams.get("destination");
  if (!origin || !destination) {
    return NextResponse.json(
      { status: "INVALID_REQUEST", error_message: "Faltan origin y/o destination." },
      { status: 400 }
    );
  }

  // Clave de caché normalizada (redondeando coordenadas a 4 decimales ~11 metros para maximizar hits)
  const formatCoord = (coordStr: string) => {
    const parts = coordStr.split(",");
    if (parts.length === 2) {
      const lat = parseFloat(parts[0]).toFixed(4);
      const lng = parseFloat(parts[1]).toFixed(4);
      return `${lat},${lng}`;
    }
    return coordStr;
  };

  const cacheKey = `${formatCoord(origin)}->${formatCoord(destination)}`;
  const cached = directionsCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json(cached.data);
  }

  const url = new URL("https://maps.googleapis.com/maps/api/directions/json");
  url.searchParams.set("origin", origin);
  url.searchParams.set("destination", destination);
  url.searchParams.set("key", apiKey);
  url.searchParams.set("mode", "driving");
  url.searchParams.set("region", "ar");
  url.searchParams.set("language", "es");

  try {
    const res = await fetch(url.toString());
    const data = await res.json();

    if (data.status === "OK") {
      if (directionsCache.size > 200) {
        const now = Date.now();
        for (const [k, v] of directionsCache.entries()) {
          if (v.expiresAt <= now) directionsCache.delete(k);
        }
      }
      directionsCache.set(cacheKey, { data, expiresAt: Date.now() + CACHE_TTL_MS });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("[/api/routes/directions]", error);
    return NextResponse.json(
      { status: "UNKNOWN_ERROR", error_message: "No se pudo calcular la ruta con Google Directions." },
      { status: 502 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

// Sesgo geográfico: centro aproximado de Mar del Plata, radio 30 km.
// Mantiene las sugerencias relevantes a la zona de cobertura real del servicio.
const MDQ_LOCATION_BIAS = "circle:30000@-38.0055,-57.5426";

export async function GET(request: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { status: "REQUEST_DENIED", error_message: "Falta NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en el servidor." },
      { status: 500 }
    );
  }

  const input = request.nextUrl.searchParams.get("input");
  if (!input || input.trim().length < 3) {
    return NextResponse.json({ status: "OK", predictions: [] });
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/autocomplete/json");
  url.searchParams.set("input", input);
  url.searchParams.set("key", apiKey);
  url.searchParams.set("language", "es");
  url.searchParams.set("components", "country:ar");
  url.searchParams.set("locationbias", MDQ_LOCATION_BIAS);

  try {
    const res = await fetch(url.toString());
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("[/api/places/autocomplete]", error);
    return NextResponse.json(
      { status: "UNKNOWN_ERROR", error_message: "No se pudo consultar Google Places." },
      { status: 502 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

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
    return NextResponse.json(data);
  } catch (error) {
    console.error("[/api/routes/directions]", error);
    return NextResponse.json(
      { status: "UNKNOWN_ERROR", error_message: "No se pudo calcular la ruta con Google Directions." },
      { status: 502 }
    );
  }
}

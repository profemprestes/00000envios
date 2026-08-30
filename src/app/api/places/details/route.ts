import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { status: "REQUEST_DENIED", error_message: "Falta NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en el servidor." },
      { status: 500 }
    );
  }

  const placeId = request.nextUrl.searchParams.get("place_id");
  if (!placeId) {
    return NextResponse.json(
      { status: "INVALID_REQUEST", error_message: "Falta place_id." },
      { status: 400 }
    );
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("key", apiKey);
  url.searchParams.set("language", "es");
  url.searchParams.set("fields", "geometry,formatted_address");

  try {
    const res = await fetch(url.toString());
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("[/api/places/details]", error);
    return NextResponse.json(
      { status: "UNKNOWN_ERROR", error_message: "No se pudo consultar el detalle del lugar." },
      { status: 502 }
    );
  }
}

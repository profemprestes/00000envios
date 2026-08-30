'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Coordinate {
  lat: number;
  lng: number;
}

interface DynamicRouteMapProps {
  origin: Coordinate | null;
  destination: Coordinate | null;
  /** Viene de useGoogleRoute (decodePolyline) como [lng, lat], no [lat, lng]. */
  routeCoords: [number, number][];
}

// Centro por defecto: Mar del Plata (Friuli 1972, base operativa).
const MDQ_CENTER: [number, number] = [-38.0055, -57.5426];

function pin(color: string) {
  return L.divIcon({
    className: "",
    html: `<svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.27 21.73 0 14 0z" fill="${color}"/>
      <circle cx="14" cy="14" r="5.5" fill="white"/>
    </svg>`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
  });
}

const originIcon = pin("#FFF12E");
const destinationIcon = pin("#0950F6");

/** Reencuadra el mapa cuando cambian origen/destino/ruta (MapContainer no lo hace solo). */
function FitBounds({ origin, destination, routeLatLng }: { origin: Coordinate | null; destination: Coordinate | null; routeLatLng: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    const points: [number, number][] = [...routeLatLng];
    if (origin) points.push([origin.lat, origin.lng]);
    if (destination) points.push([destination.lat, destination.lng]);

    if (points.length === 0) {
      map.setView(MDQ_CENTER, 13);
      return;
    }
    if (points.length === 1) {
      map.setView(points[0], 15);
      return;
    }
    map.fitBounds(L.latLngBounds(points), { padding: [32, 32] });
  }, [map, origin, destination, routeLatLng]);

  return null;
}

export default function DynamicRouteMap({ origin, destination, routeCoords }: DynamicRouteMapProps) {
  // routeCoords llega como [lng, lat]; Leaflet espera [lat, lng].
  const routeLatLng: [number, number][] = routeCoords.map(([lng, lat]) => [lat, lng]);

  return (
    <MapContainer
      center={origin ? [origin.lat, origin.lng] : MDQ_CENTER}
      zoom={13}
      className="w-full h-full min-h-[260px]"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {origin && <Marker position={[origin.lat, origin.lng]} icon={originIcon} />}
      {destination && <Marker position={[destination.lat, destination.lng]} icon={destinationIcon} />}
      {routeLatLng.length > 1 && (
        <Polyline positions={routeLatLng} pathOptions={{ color: "#FFF12E", weight: 4, opacity: 0.9 }} />
      )}

      <FitBounds origin={origin} destination={destination} routeLatLng={routeLatLng} />
    </MapContainer>
  );
}

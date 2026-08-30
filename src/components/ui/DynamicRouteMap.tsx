'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap, ZoomControl } from 'react-leaflet';
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

// Custom HTML Pins con badges premium y micro-animación de radar
function createCustomPin(label: string, color: string, badgeBg: string, textColor: string) {
  return L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center; cursor: pointer;">
        <!-- Badge flotante -->
        <div style="
          background: ${badgeBg};
          color: ${textColor};
          font-family: 'Geist Mono', monospace, sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
          border: 1.5px solid ${color};
          white-space: nowrap;
          margin-bottom: 4px;
        ">
          ${label}
        </div>
        
        <!-- Pin icon con halo de radar -->
        <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
          <div style="
            position: absolute;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: ${color};
            opacity: 0.35;
            animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          "></div>
          <div style="
            position: relative;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #052c87;
            border: 2.5px solid ${color};
            box-shadow: 0 2px 8px rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="width: 8px; height: 8px; border-radius: 50%; background: ${color};"></div>
          </div>
        </div>
      </div>
    `,
    iconSize: [80, 60],
    iconAnchor: [40, 52],
  });
}

const originPin = createCustomPin('ORIGEN', '#FFF12E', '#06349e', '#FFF12E');
const destinationPin = createCustomPin('DESTINO', '#38BDF8', '#052c87', '#FFFFFF');

/** Reencuadra el mapa suavemente cuando cambian origen/destino/ruta */
function FitBounds({ origin, destination, routeLatLng }: { origin: Coordinate | null; destination: Coordinate | null; routeLatLng: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    const points: [number, number][] = [...routeLatLng];
    if (origin) points.push([origin.lat, origin.lng]);
    if (destination) points.push([destination.lat, destination.lng]);

    if (points.length === 0) {
      map.setView(MDQ_CENTER, 13, { animate: true });
      return;
    }
    if (points.length === 1) {
      map.setView(points[0], 14, { animate: true });
      return;
    }
    map.fitBounds(L.latLngBounds(points), {
      padding: [48, 48],
      maxZoom: 16,
      animate: true,
    });
  }, [map, origin, destination, routeLatLng]);

  return null;
}

export default function DynamicRouteMap({ origin, destination, routeCoords }: DynamicRouteMapProps) {
  // routeCoords llega como [lng, lat]; Leaflet espera [lat, lng].
  const routeLatLng: [number, number][] = routeCoords.map(([lng, lat]) => [lat, lng]);

  return (
    <div className="relative w-full h-full min-h-[300px] select-none">
      <style jsx global>{`
        .leaflet-container {
          width: 100% !important;
          height: 100% !important;
          background: #0f172a !important;
          font-family: inherit;
        }
        .leaflet-tile {
          filter: brightness(0.95) contrast(1.08) saturate(1.1) !important;
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35) !important;
          border-radius: 12px !important;
          overflow: hidden;
        }
        .leaflet-control-zoom a {
          background-color: #06349e !important;
          color: #ffffff !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
          width: 32px !important;
          height: 32px !important;
          line-height: 32px !important;
          transition: background 0.2s;
        }
        .leaflet-control-zoom a:hover {
          background-color: #0950F6 !important;
          color: #FFF12E !important;
        }
        .leaflet-control-attribution {
          background: rgba(5, 44, 135, 0.75) !important;
          color: rgba(255, 255, 255, 0.6) !important;
          font-size: 9px !important;
          backdrop-filter: blur(4px);
          border-top-left-radius: 6px;
        }
        .leaflet-control-attribution a {
          color: #FFF12E !important;
        }
      `}</style>

      <MapContainer
        center={origin ? [origin.lat, origin.lng] : MDQ_CENTER}
        zoom={13}
        zoomControl={false}
        className="w-full h-full"
        scrollWheelZoom={false}
      >
        {/* Capa de mapa: OpenStreetMap estándar libre y 100% público (sin API Key) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        <ZoomControl position="bottomright" />

        {/* Trazado de ruta con doble capa (Halo + Línea principal para efecto glow de alta visibilidad) */}
        {routeLatLng.length > 1 && (
          <>
            {/* Halo / Glow externo de la ruta */}
            <Polyline
              positions={routeLatLng}
              pathOptions={{
                color: '#0950F6',
                weight: 8,
                opacity: 0.35,
                lineCap: 'round',
                lineJoin: 'round',
              }}
            />
            {/* Línea viva interior */}
            <Polyline
              positions={routeLatLng}
              pathOptions={{
                color: '#0950F6',
                weight: 4,
                opacity: 0.95,
                lineCap: 'round',
                lineJoin: 'round',
              }}
            />
          </>
        )}

        {origin && <Marker position={[origin.lat, origin.lng]} icon={originPin} />}
        {destination && <Marker position={[destination.lat, destination.lng]} icon={destinationPin} />}

        <FitBounds origin={origin} destination={destination} routeLatLng={routeLatLng} />
      </MapContainer>
    </div>
  );
}


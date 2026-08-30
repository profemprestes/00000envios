'use client';

import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AddressAutocomplete from '../../ui/AddressAutocomplete';
import dynamic from 'next/dynamic';
import { useGoogleRoute, type Coordinate } from '@/src/hooks/useGoogleRoute';
import { type PriceRangeProp } from '@/src/lib/pricing';
import { calculateQuoteAction, type QuoteState } from '@/src/actions/quote';
import { useActionState } from 'react';

// Leaflet toca `window` al evaluar el módulo; sin ssr:false, next build lo
// ejecuta durante el prerender en el servidor y rompe con "window is not defined".
const DynamicRouteMap = dynamic(() => import('../../ui/DynamicRouteMap'), { ssr: false });

const inputClass =
  'w-full bg-brand-blue/5 border border-brand-blue/15 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:border-brand-blue rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-blue placeholder:text-brand-blue/40 font-sans';

export default function CotizadorLowCostForm({ priceRanges = [] }: { priceRanges?: PriceRangeProp[] }) {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [producto, setProducto] = useState('');
  const [origenCoords, setOrigenCoords] = useState<Coordinate | null>(null);
  const [destinoCoords, setDestinoCoords] = useState<Coordinate | null>(null);
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);

  const [isCalculating, setIsCalculating] = useState(false);
  const [, startTransition] = useTransition();
  const [calculated, setCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    distancia: number;
    tiempo: number;
    precio: number | 'consultar';
  } | null>(null);

  const { fetchRoute } = useGoogleRoute();

  const initialState: QuoteState = { success: false, price: null, error: null };
  useActionState(calculateQuoteAction, initialState);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      if (!origenCoords || !destinoCoords) {
        setError('Por favor, elegí direcciones válidas de la lista de sugerencias.');
        return;
      }

      setIsCalculating(true);
      setCalculated(false);
      setError(null);

      const route = await fetchRoute(origenCoords, destinoCoords);

      if (!route) {
        setError('No se pudo calcular la ruta. Por favor, intentá de nuevo más tarde.');
        setIsCalculating(false);
        return;
      }

      setRouteCoords(route.routeCoords);

      const formData = new FormData();
      formData.append('distanceKm', route.distanceKm.toString());
      formData.append('serviceType', 'LOW_COST');
      formData.append('priceRanges', JSON.stringify(priceRanges));

      const actionResult = await calculateQuoteAction(initialState, formData);

      if (!actionResult.success) {
        setError(actionResult.error || 'Error al calcular precio');
        setIsCalculating(false);
        return;
      }
      const price = actionResult.price!;

      setResult({
        distancia: route.distanceKm,
        tiempo: route.durationMin,
        precio: price,
      });
      setCalculated(true);
      setIsCalculating(false);
    });
  };

  const getWhatsAppLink = () => {
    if (!result) return '#';
    const priceText = result.precio === 'consultar' ? 'A convenir (Excede rango estándar)' : `$${result.precio.toLocaleString('es-AR')}`;
    const text = `¡Hola Envíos DosRuedas! Quiero coordinar un Envío Low Cost calculado en la web:
👤 *Nombre:* ${nombre}\n📞 *Teléfono:* ${telefono}\n📦 *Producto:* ${producto}\n📍 *Origen:* ${origen}
🏁 *Destino:* ${destino}
📏 *Distancia:* ${result.distancia} km
💵 *Tarifa Low Cost:* ${priceText}`;
    return `https://wa.me/542236602699?text=${encodeURIComponent(text)}`;
  };

  const getDeliveryETA = (minutes: number): string => {
    if (minutes <= 60) return 'Hoy (Mismo Día)';
    if (minutes <= 180) return `En ${Math.ceil(minutes / 60)} hs (Mismo Día)`;
    return `${Math.ceil(minutes / 60)} hs`;
  };

  return (
    <div id="cotizador-lowcost-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Panel de formulario y resultados */}
      <div className="lg:col-span-7 flex flex-col justify-between rounded-[32px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl">
        <div className="bg-brand-white p-6 sm:p-8 rounded-[24px] flex flex-col justify-between h-full">
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 bg-brand-yellow/15 text-brand-blue rounded-full text-xs font-subheading font-bold tracking-wider uppercase">
                Programado y Económico
              </span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue mt-3">
                Calculá tu Envío Low Cost
              </h2>
              <p className="text-brand-blue/60 text-sm font-sans mt-1">
                Ingresá las direcciones de origen y destino en Mar del Plata para obtener una estimación de costo y tiempo inmediato.
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-4">
              {/* Input Origen */}
              <div className="space-y-1.5">
                <label htmlFor="origen-input" className="text-xs font-bold text-brand-blue/70 uppercase tracking-wider block font-sans">
                  Dirección de Origen
                </label>
                <AddressAutocomplete
                  id="origen-input"
                  placeholder="Ej: Av. Colón 1234, Mar del Plata"
                  value={origen}
                  onChange={setOrigen}
                  onSelectCoordinate={setOrigenCoords}
                  required
                  className={inputClass}
                />
              </div>

              {/* Input Destino */}
              <div className="space-y-1.5">
                <label htmlFor="destino-input" className="text-xs font-bold text-brand-blue/70 uppercase tracking-wider block font-sans">
                  Dirección de Destino
                </label>
                <AddressAutocomplete
                  id="destino-input"
                  placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                  value={destino}
                  onChange={setDestino}
                  onSelectCoordinate={setDestinoCoords}
                  required
                  className={inputClass}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="nombre-input" className="text-xs font-bold text-brand-blue/70 uppercase tracking-wider block font-sans">
                  Nombre
                </label>
                <input
                  id="nombre-input"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className={inputClass}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="telefono-input" className="text-xs font-bold text-brand-blue/70 uppercase tracking-wider block font-sans">
                  Teléfono
                </label>
                <input
                  id="telefono-input"
                  type="tel"
                  placeholder="Tu teléfono de contacto"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  className={inputClass}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="producto-input" className="text-xs font-bold text-brand-blue/70 uppercase tracking-wider block font-sans">
                  Tipo de producto a trasladar
                </label>
                <input
                  id="producto-input"
                  type="text"
                  placeholder="Ej: Documentos, Paquete pequeño..."
                  value={producto}
                  onChange={(e) => setProducto(e.target.value)}
                  required
                  className={inputClass}
                />
              </div>

              {error && (
                <div className="bg-brand-yellow/10 border border-brand-yellow/40 text-brand-blue text-xs px-4 py-3 rounded-xl flex items-center gap-2 font-sans">
                  <i className="ph-fill ph-warning-circle text-base shrink-0"></i>
                  <span>{error}</span>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                type="submit"
                disabled={isCalculating || !origen.trim() || !destino.trim() || !nombre.trim() || !telefono.trim() || !producto.trim()}
                className="w-full bg-brand-blue hover:bg-brand-blue-hover text-brand-white font-subheading tracking-wider uppercase text-base py-4 rounded-full shadow-md transition-all flex items-center justify-between cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-6"
              >
                {isCalculating ? (
                  <>
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Calculando Ruta...</span>
                    </div>
                    <span className="h-7 w-7 rounded-full bg-brand-white/20 flex items-center justify-center shrink-0">
                      <i className="ph-fill ph-calculator text-sm"></i>
                    </span>
                  </>
                ) : (
                  <>
                    <span>Calcular Ruta y Precio</span>
                    <span className="h-7 w-7 rounded-full bg-brand-white/20 flex items-center justify-center shrink-0">
                      <i className="ph-fill ph-calculator text-sm"></i>
                    </span>
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* Resultado dinámico */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {calculated && result && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="rounded-2xl p-2 bg-brand-blue/5 border border-brand-blue/15 w-full"
                >
                  <div className="bg-brand-white p-5 rounded-xl space-y-4 text-brand-blue">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-brand-blue/5 p-3 rounded-2xl border border-brand-blue/10">
                        <span className="block text-[10px] font-subheading font-bold text-brand-blue/60 uppercase tracking-wider">
                          DISTANCIA
                        </span>
                        <span className="text-xl font-mono text-brand-blue font-bold">
                          {result.distancia} km
                        </span>
                      </div>
                      <div className="bg-brand-blue/5 p-3 rounded-2xl border border-brand-blue/10">
                        <span className="block text-[10px] font-subheading font-bold text-brand-blue/60 uppercase tracking-wider">
                          ENTREGA ESTIMADA
                        </span>
                        <span className="text-lg font-mono text-brand-blue font-bold">
                          {getDeliveryETA(result.tiempo)}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-brand-blue/15 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                      <div>
                        <span className="block text-[10px] font-subheading font-bold text-brand-blue/60 uppercase tracking-wider">
                          TARIFA ESTIMADA LOWCOST
                        </span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          {result.precio === 'consultar' ? (
                            <span className="text-lg font-subheading text-brand-blue uppercase tracking-wider">
                              A Consultar
                            </span>
                          ) : (
                            <>
                              <span className="font-mono font-bold tracking-tighter text-5xl text-brand-blue">
                                ${result.precio.toLocaleString('es-AR')}
                              </span>
                              <span className="text-[10px] text-brand-blue/50 font-mono">ARS</span>
                            </>
                          )}
                        </div>
                      </div>

                      {result.precio === 'consultar' ? (
                        <motion.a
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                          href="/contacto"
                          className="w-full sm:w-auto inline-flex items-center justify-between gap-3 bg-brand-blue hover:bg-brand-blue-hover text-brand-white font-subheading text-sm tracking-wider uppercase px-5 py-3 rounded-full shadow transition-all"
                        >
                          <span>Pedir Cotización Especial</span>
                          <span className="h-7 w-7 rounded-full bg-brand-white/20 flex items-center justify-center shrink-0">
                            <i className="ph-fill ph-warning-circle text-sm"></i>
                          </span>
                        </motion.a>
                      ) : (
                        <motion.a
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-between gap-3 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue font-subheading text-sm tracking-wider uppercase px-5 py-3 rounded-full shadow-glow-yellow transition-all"
                        >
                          <span>Pedir por WhatsApp</span>
                          <span className="h-7 w-7 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                            <i className="ph-fill ph-check-circle text-sm"></i>
                          </span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Panel de mapa interactivo real */}
      <div className="lg:col-span-5 min-h-[350px] lg:min-h-full rounded-[32px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl">
        <div className="bg-brand-blue-deep p-6 rounded-[24px] flex flex-col justify-between h-full relative overflow-hidden text-brand-white">
          {/* Overlay de grilla decorativa */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Header del mapa */}
          <div className="relative z-10 flex justify-between items-center border-b border-brand-white/15 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow animate-ping" />
              <span className="text-xs font-mono text-brand-yellow uppercase tracking-widest font-semibold">
                Ruteador MDQ Activo
              </span>
            </div>
            <span className="text-[10px] font-mono text-brand-white/60">
              Real-time Routing
            </span>
          </div>

          {/* Mapa Leaflet dinámico */}
          <div className="relative flex-grow min-h-[260px] rounded-2xl overflow-hidden border border-brand-white/10 shadow-inner z-10">
            <DynamicRouteMap
              origin={origenCoords}
              destination={destinoCoords}
              routeCoords={routeCoords}
            />
          </div>

          {/* Detalles al pie del mapa */}
          <div className="relative z-10 text-[10px] font-mono text-brand-white/60 space-y-1.5 border-t border-brand-white/15 pt-4 mt-4">
            <div className="flex justify-between">
              <span>Servicio:</span>
              <span className="text-brand-yellow font-bold uppercase">Envío Low Cost</span>
            </div>
            <div className="flex justify-between">
              <span>Rango Operativo:</span>
              <span className="text-brand-white">Mar del Plata Ruteo Diario</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

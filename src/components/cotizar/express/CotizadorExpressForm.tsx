'use client';

import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bike, Calculator, CheckCircle2, AlertTriangle } from 'lucide-react';
import AddressAutocomplete from '../../ui/AddressAutocomplete';
import dynamic from 'next/dynamic';
import { useGoogleRoute, type Coordinate } from '@/src/hooks/useGoogleRoute';
import { type PriceRangeProp } from '@/src/lib/pricing';
import { calculateQuoteAction, type QuoteState } from '@/src/actions/quote';
import { useActionState } from 'react';

// Leaflet toca `window` al evaluar el módulo; sin ssr:false, next build lo
// ejecuta durante el prerender en el servidor y rompe con "window is not defined".
const DynamicRouteMap = dynamic(() => import('../../ui/DynamicRouteMap'), { ssr: false });


export default function CotizadorExpressForm({ priceRanges = [] }: { priceRanges?: PriceRangeProp[] }) {
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
      // El hook ya registró el error en su estado interno; lo propagamos
      setError('No se pudo calcular la ruta. Por favor, intentá de nuevo más tarde.');
      setIsCalculating(false);
      return;
    }

    setRouteCoords(route.routeCoords);

    const formData = new FormData();
    formData.append('distanceKm', route.distanceKm.toString());
    formData.append('serviceType', 'EXPRESS');
    formData.append('priceRanges', JSON.stringify(priceRanges));

    // Instead of using formAction directly here (which expects native form submission),
    // we'll call the server action directly for simplicity since it's a Server Action.
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
    const text = `¡Hola Envíos DosRuedas! Quiero coordinar un Envío Express calculado en la web:
👤 *Nombre:* ${nombre}\n📞 *Teléfono:* ${telefono}\n📦 *Producto:* ${producto}\n📍 *Origen:* ${origen}
🏁 *Destino:* ${destino}
📏 *Distancia:* ${result.distancia} km
💵 *Tarifa Express:* ${priceText}`;
    return `https://wa.me/542236602699?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="cotizador-express-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Form Input & Results Panel */}
      <div className="lg:col-span-7 flex flex-col justify-between double-bezel-outer bg-brand-blue-50/80 shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300">
        <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 flex flex-col justify-between h-full">
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-subheading tracking-wider uppercase">
                Cotización Al Instante
              </span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-[0.02em] text-brand-blue mt-3">
                Calculá tu Envío Express
              </h2>
              <p className="text-brand-blue-400 text-sm font-sans mt-1">
                Ingresá las direcciones de origen y destino en Mar del Plata para obtener una estimación de costo y tiempo inmediato.
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-4">
              {/* Input Origen */}
              <div className="space-y-1.5">
                <label htmlFor="origen-input" className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider block font-sans">
                  Dirección de Origen
                </label>
                <AddressAutocomplete
                  id="origen-input"
                  placeholder="Ej: Av. Colón 1234, Mar del Plata"
                  value={origen}
                  onChange={setOrigen}
                  onSelectCoordinate={setOrigenCoords}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-700 border-brand-blue-700/30 rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-ink placeholder:text-brand-blue-300 font-sans"
                />
              </div>

              {/* Input Destino */}
              <div className="space-y-1.5">
                <label htmlFor="destino-input" className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider block font-sans">
                  Dirección de Destino
                </label>
                <AddressAutocomplete
                  id="destino-input"
                  placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                  value={destino}
                  onChange={setDestino}
                  onSelectCoordinate={setDestinoCoords}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-700 border-brand-blue-700/30 rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-ink placeholder:text-brand-blue-300 font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="nombre-input" className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider block font-sans">
                  Nombre
                </label>
                <input
                  id="nombre-input"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-700 border-brand-blue-700/30 rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-ink placeholder:text-brand-blue-300 font-sans"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="telefono-input" className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider block font-sans">
                  Teléfono
                </label>
                <input
                  id="telefono-input"
                  type="tel"
                  placeholder="Tu teléfono de contacto"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-700 border-brand-blue-700/30 rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-ink placeholder:text-brand-blue-300 font-sans"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="producto-input" className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider block font-sans">
                  Tipo de producto a trasladar
                </label>
                <input
                  id="producto-input"
                  type="text"
                  placeholder="Ej: Documentos, Paquete pequeño..."
                  value={producto}
                  onChange={(e) => setProducto(e.target.value)}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-700 border-brand-blue-700/30 rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-ink placeholder:text-brand-blue-300 font-sans"
                />
              </div>

              {error && (
                <div className="bg-brand-white-50 text-brand-blue-500 text-xs px-4 py-3 rounded-xl flex items-center gap-2 font-sans">
                  <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isCalculating || !origen.trim() || !destino.trim() || !nombre.trim() || !telefono.trim() || !producto.trim()}
                className="w-full cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading font-bold tracking-wider uppercase text-base py-3.5 px-6 rounded-full shadow-accent-sm hover:shadow-cta-glow transition-all flex items-center justify-between cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-12"
              >
                {isCalculating ? (
                  <>
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-brand-blue-900" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Calculando Tarifa Express...</span>
                    </div>
                    <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      <Calculator className="h-4 w-4" />
                    </span>
                  </>
                ) : (
                  <>
                    <span>Calcular Ruta y Precio Express</span>
                    <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      <Calculator className="h-4 w-4" />
                    </span>
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* Dynamic Results Display */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              {calculated && result && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-200 p-2 rounded-2xl shadow-elevated w-full"
                >
                  <div className="double-bezel-inner bg-white p-5 rounded-xl border border-brand-blue-100/50 space-y-4 text-brand-blue-700">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-brand-blue-50/80 p-3 rounded-xl border border-brand-blue-100">
                        <span className="block text-[10px] font-subheading font-bold text-brand-blue-600 uppercase tracking-wider">
                          DISTANCIA REAL
                        </span>
                        <span className="text-xl font-mono text-brand-blue-700 font-bold tabular-nums">
                          {result.distancia} km
                        </span>
                      </div>
                      <div className="bg-brand-blue-50/80 p-3 rounded-xl border border-brand-blue-100">
                        <span className="block text-[10px] font-subheading font-bold text-brand-blue-600 uppercase tracking-wider">
                          DEMORA ESTIMADA
                        </span>
                        <span className="text-xl font-mono text-brand-blue-700 font-bold tabular-nums">
                          {result.tiempo} min
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-brand-blue-100 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div>
                        <span className="block text-[10px] font-subheading font-bold text-brand-blue-600 uppercase tracking-wider">
                          TARIFA ESTIMADA EXPRESS
                        </span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          {result.precio === 'consultar' ? (
                            <span className="text-lg font-subheading text-brand-blue-700 uppercase tracking-wider">
                              A Consultar
                            </span>
                          ) : (
                            <>
                              <span className="font-mono font-bold tracking-tight text-4xl sm:text-5xl text-brand-blue-700 tabular-nums">
                                ${result.precio.toLocaleString('es-AR')}
                              </span>
                              <span className="text-xs text-brand-blue-500 font-mono font-bold">ARS</span>
                            </>
                          )}
                        </div>
                      </div>

                      {result.precio === 'consultar' ? (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href="/contacto"
                          className="w-full sm:w-auto inline-flex items-center justify-between bg-brand-blue-700 hover:bg-brand-blue-800 text-white font-subheading text-sm tracking-wider uppercase px-5 py-3 rounded-full shadow transition-all min-h-11"
                        >
                          <span>Pedir Cotización Especial</span>
                          <span className="cta-nested-icon bg-white/20 text-white h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-3">
                            <AlertTriangle className="h-4 w-4" />
                          </span>
                        </motion.a>
                      ) : (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-between bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading font-bold text-sm tracking-wider uppercase px-5 py-3 rounded-full shadow-accent-sm transition-all min-h-11"
                        >
                          <span>Pedir por WhatsApp</span>
                          <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-3">
                            <CheckCircle2 className="h-4 w-4" />
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

      {/* Real Interactive Map Panel */}
      <div className="lg:col-span-5 min-h-95 lg:min-h-full rounded-3xl p-2 bg-brand-blue/10 border border-brand-blue/20 shadow-xl">
        <div className="bg-brand-blue-deep p-6 rounded-[22px] flex flex-col justify-between h-full relative overflow-hidden text-brand-white">
          {/* Header Map */}
          <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow animate-ping" />
              <span className="text-xs font-mono text-brand-yellow uppercase tracking-widest font-semibold">
                Ruteador MDQ Activo
              </span>
            </div>
            <span className="text-[10px] font-mono text-brand-white/70">
              Live Transit · Mar del Plata
            </span>
          </div>

          {/* Leaflet Map Loader */}
          <div className="relative grow min-h-70 rounded-2xl overflow-hidden border border-white/10 shadow-inner z-10">
            <DynamicRouteMap
              origin={origenCoords}
              destination={destinoCoords}
              routeCoords={routeCoords}
            />
          </div>

          {/* Footer map details */}
          <div className="relative z-10 text-[10px] font-mono text-brand-white/70 space-y-1.5 border-t border-white/10 pt-4 mt-4">
            <div className="flex justify-between">
              <span>Servicio:</span>
              <span className="text-brand-yellow font-bold uppercase">Envío Express 2H</span>
            </div>
            <div className="flex justify-between">
              <span>Rango Operativo:</span>
              <span className="text-white">Mar del Plata Urbano</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { motion, AnimatePresence } from 'motion/react';

export default function EmprendedoresHero() {
  const [activeTab, setActiveTab] = useState<'solucion' | 'proceso'>('solucion');

  return (
    <section
      id="emprendedores-hero"
      className="relative w-full overflow-hidden bg-brand-blue text-brand-white min-h-[80vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-brand-white/15"
    >
      {/* Fondo procedural vectorial */}
      <HeroProceduralBackground variant="3pl" />

      {/* Marca de agua tipográfica de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[16vw] leading-none text-brand-white/[0.03] tracking-tighter whitespace-nowrap">
          LOGÍSTICA 3PL MDQ
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna izquierda: copy y CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading font-bold uppercase tracking-widest bg-brand-blue-deep/80 backdrop-blur-md border border-brand-yellow/30 text-brand-yellow shadow-md"
            >
              <i className="ph-bold ph-warehouse text-base shrink-0" />
              <span>PAQUETERÍA E-COMMERCE Y LOGÍSTICA 3PL · FRIULI 1972 MDQ</span>
            </motion.div>

            {/* Título monumental */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-display uppercase tracking-tight leading-[0.9] text-brand-white">
              <span className="block">PAQUETERÍA Y</span>
              <span className="block text-brand-yellow drop-shadow-[0_2px_16px_rgba(255,241,46,0.35)]">
                ENVÍOS E-COMMERCE
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl text-brand-white/80 mt-1">
                LOGÍSTICA 3PL EN MAR DEL PLATA
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-brand-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed pl-4 border-l-2 border-brand-yellow font-light">
              Solución en paquetería e-commerce, envíos e-commerce y logística 3PL en Mar del Plata. Ofrecemos E-Commerce Same Day desde nuestro depósito en Friuli 1972 con picking QR, E-Commerce Next Day (24hs), Opción DropOFF (-20% OFF) y Contrareembolso sin cargo extra.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/contacto"
                id="emprendedores-hero-cta-plan"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-yellow px-7 py-3.5 font-subheading text-sm uppercase tracking-wider text-brand-blue shadow-glow-yellow transition-all hover:bg-brand-yellow-hover cursor-pointer w-full sm:w-auto min-h-12"
              >
                <span>Solicitar Plan Corporativo</span>
                <i className="ph-bold ph-arrow-right text-lg shrink-0" />
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="emprendedores-hero-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-brand-white/30 bg-brand-white/10 px-7 py-3.5 font-subheading text-sm uppercase tracking-wider text-brand-white transition-all hover:bg-brand-white/20 cursor-pointer w-full sm:w-auto min-h-12"
              >
                <i className="ph-bold ph-phone text-lg shrink-0" />
                <span>Agendar Asesoría 3PL</span>
              </a>
            </div>

            {/* Chips de datos clave */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-brand-white/10 border border-brand-white/15 text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow tabular-nums">
                  Same Day
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-white/70">
                  Stock Friuli 1972
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-brand-white/10 border border-brand-white/15 text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow tabular-nums">
                  -20% OFF
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-white/70">
                  Opción DropOFF
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-brand-white/10 border border-brand-white/15 text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow tabular-nums">
                  $0 Comis.
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-white/70">
                  Contrareembolso Gratis
                </span>
              </div>
            </div>
          </div>

          {/* Columna derecha: mini comparador interactivo (card en fondo claro, DESIGN.md 4.2) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="rounded-2xl bg-white border border-brand-blue/20 shadow-xl p-5 sm:p-7 text-brand-blue space-y-5 relative overflow-hidden">
              {/* Encabezado con badge de estado */}
              <div className="flex items-center justify-between border-b border-brand-blue/15 pb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow" />
                  </span>
                  <span className="font-subheading text-xs uppercase tracking-wider font-bold text-brand-blue">
                    HUB LOGÍSTICO FRIULI 1972
                  </span>
                </div>
                <span className="font-mono text-xs font-bold bg-brand-blue/5 text-brand-blue px-2.5 py-1 rounded-lg border border-brand-blue/15">
                  3PL ACTIVO
                </span>
              </div>

              {/* Tabs segmentados */}
              <div className="grid grid-cols-2 p-1 bg-brand-blue/5 rounded-xl border border-brand-blue/15">
                <button
                  type="button"
                  onClick={() => setActiveTab('solucion')}
                  className={`py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-all min-h-11 cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === 'solucion'
                      ? 'bg-brand-blue text-brand-yellow shadow-sm'
                      : 'text-brand-blue hover:bg-brand-canvas'
                  }`}
                >
                  <i className="ph-bold ph-sparkle text-sm shrink-0" />
                  <span>Modalidades</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('proceso')}
                  className={`py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-all min-h-11 cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === 'proceso'
                      ? 'bg-brand-blue text-brand-yellow shadow-sm'
                      : 'text-brand-blue hover:bg-brand-canvas'
                  }`}
                >
                  <i className="ph-bold ph-cube text-sm shrink-0" />
                  <span>Flujo Operativo</span>
                </button>
              </div>

              {/* Contenido de la pestaña */}
              <div className="min-h-[190px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'solucion' ? (
                    <motion.div
                      key="solucion"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue/5 border border-brand-blue/15">
                        <i className="ph-bold ph-check-circle text-lg text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue">
                            E-Commerce Same Day
                          </p>
                          <p className="text-[11px] text-brand-blue/70 font-sans leading-snug">
                            Stock guardado en Friuli 1972; al vender, sale empaquetado inmediatamente con picking QR.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue/5 border border-brand-blue/15">
                        <i className="ph-bold ph-package text-lg text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue">
                            Opción DropOFF (-20% OFF)
                          </p>
                          <p className="text-[11px] text-brand-blue/70 font-sans leading-snug">
                            Traé tus envíos a Friuli 1972 y obtené un 20% de descuento en la tarifa.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue/5 border border-brand-blue/15">
                        <i className="ph-bold ph-shield-check text-lg text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue">
                            Contrareembolso Sin Cargo Extra
                          </p>
                          <p className="text-[11px] text-brand-blue/70 font-sans leading-snug">
                            Cobramos a tu cliente en destino sin comisiones extra sobre la venta.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="proceso"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="p-3 rounded-xl bg-brand-blue/5 border border-brand-blue/15 space-y-1">
                        <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue">
                          <span>1. Recepción en Friuli 1972</span>
                          <span className="text-brand-blue/80 font-mono">Ingreso</span>
                        </div>
                        <p className="text-[11px] text-brand-blue/70 font-sans">
                          Recibimos tu stock en nuestro depósito central o via DropOFF con 20% OFF.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-brand-blue/5 border border-brand-blue/15 space-y-1">
                        <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue">
                          <span>2. Picking por QR & Packing</span>
                          <span className="text-brand-blue/80 font-mono">Picking</span>
                        </div>
                        <p className="text-[11px] text-brand-blue/70 font-sans">
                          Armado y etiquetado inmediato al registrarse la venta en tu e-commerce.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-brand-blue/5 border border-brand-blue/15 space-y-1">
                        <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue">
                          <span>3. Entrega Same Day / 24hs</span>
                          <span className="text-brand-blue/80 font-mono">Despacho</span>
                        </div>
                        <p className="text-[11px] text-brand-blue/70 font-sans">
                          Distribución en Mar del Plata con cobro contrareembolso opcional sin cargo.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Franja de confianza */}
              <div className="pt-3 border-t border-brand-blue/15 flex items-center justify-between text-[11px] font-subheading uppercase tracking-wider text-brand-blue/70 font-bold">
                <span className="flex items-center gap-1">
                  <i className="ph-bold ph-map-pin text-sm text-brand-yellow" />
                  Depósito Friuli 1972 MDQ
                </span>
                <span className="text-brand-blue font-mono text-xs">Atención B2B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

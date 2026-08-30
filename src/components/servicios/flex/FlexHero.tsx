'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { motion, AnimatePresence } from 'motion/react';

export default function FlexHero() {
  const [activeTab, setActiveTab] = useState<'ventajas' | 'integracion'>('ventajas');

  return (
    <section
      id="flex-hero"
      className="relative w-full overflow-hidden bg-brand-blue text-brand-white min-h-[80vh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-brand-white/15"
    >
      {/* Fondo procedural vectorial */}
      <HeroProceduralBackground variant="flex" />

      {/* Marca de agua tipográfica de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[16vw] leading-none text-brand-white/[0.03] tracking-tighter whitespace-nowrap">
          LOGÍSTICA FLEX
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
              <i className="ph-bold ph-medal text-base shrink-0" />
              <span>ENVÍOS FLEX Y REPARTO MERCADOLIBRE · MDQ 2026</span>
            </motion.div>

            {/* Título monumental */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-display uppercase tracking-tight leading-[0.9] text-brand-white">
              <span className="block">ENVÍOS FLEX Y</span>
              <span className="block text-brand-yellow drop-shadow-[0_2px_16px_rgba(255,241,46,0.35)]">
                REPARTO MERCADOLIBRE
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl text-brand-white/80 mt-1">
                LOGÍSTICA FLEX CON 100% CUMPLIMIENTO
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-brand-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed pl-4 border-l-2 border-brand-yellow font-light">
              Líderes en envíos flex, reparto MercadoLibre y logística flex en Mar del Plata. SLA real con 100% de entregas en el día antes de las 20:00 hs para proteger la reputación de MercadoLíder. Horario de corte 15:00 hs y múltiples retiros diarios sin mínimos de paquetes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/cotizar/lowcost"
                id="flex-hero-cta-activar"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-yellow px-7 py-3.5 font-subheading text-sm uppercase tracking-wider text-brand-blue shadow-glow-yellow transition-all hover:bg-brand-yellow-hover cursor-pointer w-full sm:w-auto min-h-12"
              >
                <span>Activar Envíos Flex</span>
                <i className="ph-bold ph-arrow-right text-lg shrink-0" />
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="flex-hero-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-brand-white/30 bg-brand-white/10 px-7 py-3.5 font-subheading text-sm uppercase tracking-wider text-brand-white transition-all hover:bg-brand-white/20 cursor-pointer w-full sm:w-auto min-h-12"
              >
                <i className="ph-bold ph-phone text-lg shrink-0" />
                <span>Contactar Asesor Flex</span>
              </a>
            </div>

            {/* Chips de datos clave */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              <div className="p-2.5 sm:p-3 rounded-xl bg-brand-white/10 border border-brand-white/15 text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow tabular-nums">
                  15:00 hs
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-white/70">
                  Horario de Corte
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-brand-white/10 border border-brand-white/15 text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow tabular-nums">
                  100%
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-white/70">
                  Entregas en el Día
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-brand-white/10 border border-brand-white/15 text-center">
                <span className="block font-display text-xl sm:text-2xl text-brand-yellow tabular-nums">
                  Sin Mínimos
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-white/70">
                  Retiros Múltiples
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
                    INTEGRACIÓN LOGÍSTICA FLEX
                  </span>
                </div>
                <span className="font-mono text-xs font-bold bg-brand-blue/5 text-brand-blue px-2.5 py-1 rounded-lg border border-brand-blue/15">
                  SLA 100%
                </span>
              </div>

              {/* Tabs segmentados */}
              <div className="grid grid-cols-2 p-1 bg-brand-blue/5 rounded-xl border border-brand-blue/15">
                <button
                  type="button"
                  onClick={() => setActiveTab('ventajas')}
                  className={`py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-all min-h-11 cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === 'ventajas'
                      ? 'bg-brand-blue text-brand-yellow shadow-sm'
                      : 'text-brand-blue hover:bg-brand-canvas'
                  }`}
                >
                  <i className="ph-bold ph-sparkle text-sm shrink-0" />
                  <span>Ventajas MercadoLíder</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('integracion')}
                  className={`py-2 px-3 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-all min-h-11 cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === 'integracion'
                      ? 'bg-brand-blue text-brand-yellow shadow-sm'
                      : 'text-brand-blue hover:bg-brand-canvas'
                  }`}
                >
                  <i className="ph-bold ph-qr-code text-sm shrink-0" />
                  <span>Proceso QR</span>
                </button>
              </div>

              {/* Contenido de la pestaña */}
              <div className="min-h-[190px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'ventajas' ? (
                    <motion.div
                      key="ventajas"
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
                            Corte a las 15:00 hs
                          </p>
                          <p className="text-[11px] text-brand-blue/70 font-sans leading-snug">
                            Procesamos tus envíos flex recibidos hasta las 15:00 hs con entregas aseguradas antes de las 20:00 hs.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue/5 border border-brand-blue/15">
                        <i className="ph-bold ph-shield-check text-lg text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue">
                            Protección de Reputación
                          </p>
                          <p className="text-[11px] text-brand-blue/70 font-sans leading-snug">
                            100% de entregas en el día para mantener tu reputación y medalla de MercadoLíder impecable.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-2.5 rounded-xl bg-brand-blue/5 border border-brand-blue/15">
                        <i className="ph-bold ph-lightning text-lg text-brand-yellow shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold font-subheading uppercase tracking-wide text-brand-blue">
                            Sin Mínimos y Múltiples Retiros
                          </p>
                          <p className="text-[11px] text-brand-blue/70 font-sans leading-snug">
                            Retiramos en tu local cuantas veces sea necesario en el día sin mínimo de paquetes.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="integracion"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="p-3 rounded-xl bg-brand-blue/5 border border-brand-blue/15 space-y-1">
                        <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue">
                          <span>1. Imprimís tus etiquetas Flex</span>
                          <span className="text-brand-blue/80 font-mono">Paso 1</span>
                        </div>
                        <p className="text-[11px] text-brand-blue/70 font-sans">
                          Generás las etiquetas de MercadoLibre con código QR habitual.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-brand-blue/5 border border-brand-blue/15 space-y-1">
                        <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue">
                          <span>2. Escaneo en mano</span>
                          <span className="text-brand-blue/80 font-mono">Paso 2</span>
                        </div>
                        <p className="text-[11px] text-brand-blue/70 font-sans">
                          Nuestro cadete escanea el paquete con la app oficial al retirar en tu dirección.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-brand-blue/5 border border-brand-blue/15 space-y-1">
                        <div className="flex justify-between items-center text-xs font-subheading uppercase font-bold text-brand-blue">
                          <span>3. Entrega Same-Day</span>
                          <span className="text-brand-blue/80 font-mono">Paso 3</span>
                        </div>
                        <p className="text-[11px] text-brand-blue/70 font-sans">
                          Entrega final antes de las 20:00 hs asegurando tu reputación.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Franja de confianza */}
              <div className="pt-3 border-t border-brand-blue/15 flex items-center justify-between text-[11px] font-subheading uppercase tracking-wider text-brand-blue/70 font-bold">
                <span>Reparto MercadoLibre MDQ</span>
                <span className="text-brand-blue font-mono text-xs">Corte 15:00 hs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

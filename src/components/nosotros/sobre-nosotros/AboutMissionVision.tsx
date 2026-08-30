'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function AboutMissionVision() {
  return (
    <section
      id="about-mission-vision"
      className="py-20 sm:py-28 bg-brand-canvas relative overflow-hidden border-y border-brand-blue/15"
    >
      {/* Luces sutiles de fondo sobre canvas */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-sm">
              PROPÓSITO Y FUTURO
            </span>
          </div>

          <h2 className="text-brand-blue text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            MISIÓN, VISIÓN E <span className="text-brand-yellow bg-brand-blue px-3 py-0.5 rounded-lg inline-block">INNOVACIÓN</span>
          </h2>

          <p className="text-brand-blue/80 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Hacia dónde vamos y cuáles son las convicciones profundas que guían cada entrega y ruteo diario en Mar del Plata.
          </p>

          <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Grilla Asimétrica Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Card 1: Nuestra Misión (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-8 rounded-[28px] p-6 sm:p-8 bg-brand-white border border-brand-blue/20 shadow-lg hover:shadow-xl hover:border-brand-blue/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-2xl">
                <i className="ph-bold ph-target"></i>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue leading-tight">
                NUESTRA MISIÓN
              </h3>

              <p className="text-sm sm:text-base text-brand-blue/85 font-sans leading-relaxed">
                Simplificar la logística de última milla local en Mar del Plata, conectando comercios, emprendedores y usuarios con soluciones de entrega ultra rápidas, transparentes y seguras.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-blue/10 flex items-center gap-2 text-xs font-mono font-bold text-brand-blue">
              <i className="ph-bold ph-seal-check text-brand-blue text-base"></i>
              <span>SELLO DE CALIDAD DOSRUEDAS MDQ</span>
            </div>
          </motion.div>

          {/* Card 2: Nuestra Visión (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:col-span-4 rounded-[28px] p-6 sm:p-8 bg-brand-white border border-brand-blue/20 shadow-lg hover:shadow-xl hover:border-brand-blue/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-2xl">
                <i className="ph-bold ph-eye"></i>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue leading-tight">
                NUESTRA VISIÓN
              </h3>

              <p className="text-sm text-brand-blue/85 font-sans leading-relaxed">
                Consolidar la red de última milla y mensajería más confiable y elegida de Mar del Plata, incorporando tecnología continua y flota propia.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-blue/10 flex items-center gap-2 text-xs font-mono font-bold text-brand-blue">
              <i className="ph-bold ph-sparkle text-brand-blue text-base"></i>
              <span>VISIÓN DE FUTURO 2026</span>
            </div>
          </motion.div>

          {/* Card 3: Innovación Constante (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="lg:col-span-12 rounded-[28px] p-6 sm:p-8 bg-brand-blue text-brand-white border border-brand-white/20 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center text-xl shrink-0">
                  <i className="ph-bold ph-rocket-launch"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-white leading-none">
                  INNOVACIÓN CONSTANTE
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-white/90 font-sans leading-relaxed font-light">
                Trabajamos constantemente en optimizaciones de ruteo y coordinación digital para brindar reportes transparentes y despachos inmediatos a cada cliente.
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-yellow text-brand-blue font-subheading font-bold text-sm uppercase tracking-wider shadow-glow-yellow">
                <span>TECNOLOGÍA PROPIA</span>
                <i className="ph-bold ph-cpu text-base"></i>
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
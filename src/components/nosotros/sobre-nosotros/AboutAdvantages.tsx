'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function AboutAdvantages() {
  return (
    <section
      id="about-advantages"
      className="py-20 sm:py-28 bg-brand-blue text-brand-white relative overflow-hidden border-b border-brand-white/15"
    >
      {/* Luces sutiles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-md">
              DIFERENCIAL COMPETITIVO
            </span>
          </div>

          <h2 className="text-brand-white text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            POR QUÉ <span className="text-brand-yellow">ELEGIRNOS</span>
          </h2>

          <p className="text-brand-white/85 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            En un mercado saturado de aplicaciones genéricas y envíos automatizados sin rostro, decidimos ir por el camino de la excelencia territorial y atención humana directa en Mar del Plata.
          </p>

          <div className="h-1 w-20 bg-brand-yellow mx-auto rounded-full mt-4" />
        </div>

        {/* Grilla Bento Asimétrica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Card 1: Soporte Humano 24/7 (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-[28px] p-6 sm:p-8 bg-brand-blue-deep/90 border border-brand-white/20 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-social-whatsapp text-brand-blue-deep flex items-center justify-center text-2xl shadow-glow-wa">
                <i className="ph-fill ph-whatsapp-logo"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-white leading-tight">
                Soporte Humano Directo
              </h3>
              <p className="text-sm sm:text-base text-brand-white/85 font-sans leading-relaxed font-light">
                Damos la cara frente a cualquier consulta. Contamos con atención personalizada e inmediata por WhatsApp para coordinar despachos, resolver dudas y dar seguimiento en tiempo real.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-white/10 flex items-center gap-2 text-xs font-mono font-bold text-social-whatsapp">
              <i className="ph-fill ph-check-circle text-base"></i>
              <span>CANAL DIRECTO WHATSAPP: +54 223 660-2699</span>
            </div>
          </motion.div>

          {/* Card 2: Flota Propia (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-5 rounded-[28px] p-6 sm:p-8 bg-brand-blue-deep/90 border border-brand-white/20 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow text-brand-blue flex items-center justify-center text-2xl shadow-glow-yellow">
                <i className="ph-bold ph-moped"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-white leading-tight">
                Flota Propia Capacitada
              </h3>
              <p className="text-sm sm:text-base text-brand-white/85 font-sans leading-relaxed font-light">
                Controlamos meticulosamente cada etapa de la entrega con repartidores propios, identificados y capacitados en el mapa de Mar del Plata.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-white/10 flex items-center gap-2 text-xs font-mono font-bold text-brand-yellow">
              <i className="ph-bold ph-map-pin text-base"></i>
              <span>COBERTURA TOTAL MAR DEL PLATA</span>
            </div>
          </motion.div>

          {/* Card 3: Entregas Confiables (12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="lg:col-span-12 rounded-[28px] p-6 sm:p-8 bg-brand-blue-deep/90 border border-brand-white/20 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-blue text-brand-yellow border border-brand-white/15 flex items-center justify-center text-xl shrink-0">
                  <i className="ph-bold ph-shield-check"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-white leading-none">
                  Entregas Confiables en Tiempo y Forma
                </h3>
              </div>
              <p className="text-sm sm:text-base text-brand-white/85 font-sans leading-relaxed font-light">
                Tu negocio depende de la puntualidad y el buen trato del paquete. Nos aseguramos de realizar cada entrega en el horario pactado y con custodia responsable del producto.
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-yellow text-brand-blue font-subheading font-bold text-sm uppercase tracking-wider shadow-glow-yellow">
                <span>100% CONFIABLE</span>
                <i className="ph-bold ph-check-fat text-base"></i>
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

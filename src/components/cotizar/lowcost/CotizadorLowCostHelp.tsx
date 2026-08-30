'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function CotizadorLowCostHelp() {
  return (
    <div id="cotizador-lowcost-help" className="rounded-[32px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl mt-12">
      <div className="bg-brand-white rounded-[24px] p-6 sm:p-10 text-brand-blue relative overflow-hidden">
        {/* Gradientes decorativos de marca */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,color-mix(in_srgb,var(--color-brand-yellow)_25%,transparent),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,color-mix(in_srgb,var(--color-brand-blue)_15%,transparent),transparent_40%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-subheading font-bold tracking-wider uppercase inline-flex items-center gap-1.5">
              <i className="ph-fill ph-question text-base shrink-0"></i>
              ¿Dudas o Envíos Especiales?
            </span>
            <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue">
              ¿Tenés una cuenta corporativa?
            </h3>
            <p className="text-brand-blue/70 text-sm sm:text-base leading-relaxed font-sans">
              Accedé a facturación semanal, quincenal o mensual. Factura tipo C disponible y resúmenes de los envíos realizados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center shrink-0">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              href="/contacto"
              className="inline-flex items-center justify-between gap-3 bg-brand-blue hover:bg-brand-blue-hover text-brand-white font-subheading tracking-wider text-sm uppercase px-6 py-3.5 rounded-full shadow-md transition-all"
            >
              <span>Formulario de Contacto</span>
              <span className="h-7 w-7 rounded-full bg-brand-white/15 flex items-center justify-center shrink-0">
                <i className="ph-fill ph-envelope-simple text-sm"></i>
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              href="tel:+542236602699"
              className="inline-flex items-center justify-between gap-3 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue font-subheading tracking-wider text-sm uppercase px-6 py-3.5 rounded-full shadow-glow-yellow transition-all"
            >
              <span>Llamanos: <span className="font-mono">223-660-2699</span></span>
              <span className="h-7 w-7 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                <i className="ph-fill ph-phone-call text-sm"></i>
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

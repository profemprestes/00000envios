'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function AboutValues() {
  const values = [
    {
      title: 'Transparencia Total',
      desc: 'Comunicación clara, tarifas sin sorpresas y confirmación honesta en cada entrega.',
      icon: 'ph-bold ph-handshake',
    },
    {
      title: 'Cuidado del Paquete',
      desc: 'Manipulación profesional y segura para garantizar que cada bulto llegue en impecables condiciones.',
      icon: 'ph-bold ph-shield-check',
    },
    {
      title: 'Innovación y Ruteo',
      desc: 'Optimización de recorridos urbanos y coordinación ágil adaptada al movimiento comercial de MDQ.',
      icon: 'ph-bold ph-lightning',
    },
  ];

  return (
    <section
      id="about-values"
      className="py-20 sm:py-28 bg-brand-canvas relative overflow-hidden border-y border-brand-blue/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-sm">
              FILOSOFÍA OPERATIVA
            </span>
          </div>

          <h2 className="text-brand-blue text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            NUESTROS <span className="text-brand-yellow bg-brand-blue px-3 py-0.5 rounded-lg inline-block">VALORES</span>
          </h2>

          <p className="text-brand-blue/80 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Los pilares estratégicos e innegociables que sostienen nuestra operativa diaria y nos permiten ser tu partner de absoluta confianza.
          </p>

          <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Grilla Asimétrica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Valor Principal Destacado (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 rounded-[28px] p-6 sm:p-10 bg-brand-white border border-brand-blue/20 shadow-lg hover:shadow-xl hover:border-brand-blue/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-3xl">
                <i className="ph-bold ph-shield-check"></i>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-blue leading-tight">
                  Cuidado del Paquete
                </h3>
                <p className="text-base sm:text-lg text-brand-blue/85 font-sans leading-relaxed">
                  Manipulación profesional y segura para garantizar que cada bulto, sobre o caja llegue en impecables condiciones a las manos de tu cliente.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-blue/10 flex items-center gap-2 text-xs font-mono font-bold text-brand-blue">
              <i className="ph-bold ph-check text-brand-blue text-base"></i>
              <span>COMPROMISO DE CUSTODIA RESPONSABLE</span>
            </div>
          </motion.div>

          {/* Columna con los otros 2 valores (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {values
              .filter((v) => v.title !== 'Cuidado del Paquete')
              .map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
                  className="rounded-[28px] p-6 bg-brand-white border border-brand-blue/20 shadow-lg hover:shadow-xl hover:border-brand-blue/40 transition-all flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-2xl">
                      <i className={val.icon}></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue">
                      {val.title}
                    </h3>
                    <p className="text-sm text-brand-blue/85 font-sans leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function FlexFeatures() {
  const features = [
    {
      title: 'Recolección gratis',
      desc: 'Retiramos tus paquetes sin costo adicional directamente por tu local o depósito.',
      icon: 'ph-truck',
    },
    {
      title: 'Entrega en el día antes de 20hs',
      desc: 'Garantizamos que tus clientes reciban sus compras el mismo día antes de las 20:00 hs.',
      icon: 'ph-clock',
    },
    {
      title: 'Tarifas LowCost',
      desc: 'Tarifas competitivas súper económicas para cuidar la rentabilidad de cada una de tus ventas.',
      icon: 'ph-coins',
    },
    {
      title: 'Horario de corte: 15hs',
      desc: 'Recibimos y procesamos tus despachos del día hasta las 15:00 hs de manera garantizada.',
      icon: 'ph-clock',
    },
  ];

  return (
    <section
      id="flex-features"
      className="py-24 bg-brand-canvas relative z-10 overflow-hidden border-t-4 border-brand-blue-deep"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Columna de encabezado (izquierda) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue-deep)]">
              MERCADOLIBRE EXPERTS
            </span>

            <h2 className="text-brand-blue text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none border-l-4 border-brand-yellow pl-4">
              DOMINÁ TUS VENTAS
              <br />
              <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
                <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                  CON ENVÍOS FLEX
                </span>
              </span>
            </h2>

            <p className="text-brand-blue/80 text-base leading-relaxed font-sans">
              Somos el aliado estratégico definitivo para vendedores de MercadoLibre en Mar del Plata. Optimizamos tus Envíos Same-Day Mar del Plata para que vos solo te preocupes por publicar, atender clientes y vender más de lo que imaginás.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-sm text-brand-blue font-bold uppercase tracking-wider font-subheading">
              <i className="ph-fill ph-truck text-xl text-brand-yellow shrink-0" />
              <span>COBERTURA TOTAL EN MAR DEL PLATA</span>
            </div>
          </div>

          {/* Grilla de tarjetas (fondo claro, DESIGN.md 4.2) */}
          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {features.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6 rounded-2xl bg-white border border-brand-blue/20 shadow-lg hover:border-brand-blue hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="p-6 flex flex-col md:flex-row gap-5 items-start h-full">
                  <div className="p-3 bg-brand-blue text-brand-yellow rounded-2xl shrink-0 border border-brand-blue-deep shadow-md group-hover:scale-105 transition-transform duration-300">
                    <i className={`ph-bold ${feat.icon} text-xl shrink-0`} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xl font-display uppercase tracking-wider text-brand-blue leading-tight group-hover:text-brand-blue-deep transition-colors duration-300">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-brand-blue/75 font-sans leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}

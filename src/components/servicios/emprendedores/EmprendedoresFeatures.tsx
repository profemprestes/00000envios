'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function EmprendedoresFeatures() {
  const features = [
    {
      title: 'E-Commerce Same Day (Friuli 1972)',
      desc: 'Guardamos tu stock en nuestro depósito central de Friuli 1972. Al vender, tu producto sale inmediatamente empaquetado con picking por código QR.',
      icon: 'ph-warehouse',
    },
    {
      title: 'Opción DropOFF (-20% OFF)',
      desc: 'Acercá tus paquetes directamente a nuestro depósito en Friuli 1972 y obtené un 20% de descuento automático en la tarifa final de envío.',
      icon: 'ph-tag',
    },
    {
      title: 'Contrareembolso Sin Cargo Extra',
      desc: 'Realizamos cobro contra entrega en destino sin ningún tipo de comisión ni recargo adicional por gestión de cobranza.',
      icon: 'ph-receipt',
    },
  ];

  const stats = [
    { value: 'SAME DAY', label: 'Picking por QR', icon: 'ph-chart-bar' },
    { value: '-20% OFF', label: 'Opción DropOFF', icon: 'ph-tag' },
    { value: 'SIN CARGO', label: 'Contrareembolso', icon: 'ph-clock' },
  ];

  return (
    <section
      id="emprendedores-features"
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
              SOLUCIONES PAQUETERÍA E-COMMERCE
            </span>

            <h2 className="text-brand-blue text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none border-l-4 border-brand-yellow pl-4">
              LOGÍSTICA 3PL
              <br />
              <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
                <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                  E-COMMERCE
                </span>
              </span>
            </h2>

            <p className="text-brand-blue/80 text-base leading-relaxed font-sans">
              Especialistas en paquetería e-commerce y logística 3PL en Mar del Plata. Almacenamos tus productos pequeños o medianos en Friuli 1972, realizamos picking por QR y despachamos en el día o 24hs con la tarifa más competitiva.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-sm text-brand-blue font-bold uppercase tracking-wider font-subheading">
              <i className="ph-fill ph-bank text-xl text-brand-yellow shrink-0" />
              <span>PAQUETERÍA Y LOGÍSTICA B2B MAR DEL PLATA</span>
            </div>
          </div>

          {/* Grilla asimétrica de tarjetas (fondo claro, DESIGN.md 4.2) */}
          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {features.map((feat, idx) => {
              const spanClass = idx === 0
                ? 'lg:col-span-12'
                : idx === 1
                  ? 'lg:col-span-7'
                  : 'lg:col-span-5';

              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`${spanClass} rounded-2xl bg-white border border-brand-blue/20 shadow-lg hover:border-brand-blue hover:shadow-xl transition-all duration-300 flex flex-col group`}
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
              );
            })}
          </div>

        </div>

        {/* Panel de estadísticas */}
        <div className="mt-20 border-t-2 border-brand-blue/15 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white border-2 border-brand-blue p-6 rounded-3xl shadow-[4px_4px_0px_var(--color-brand-blue)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_var(--color-brand-blue)] transition-all duration-300 flex items-center gap-5 justify-center sm:justify-start"
              >
                <div className="p-3.5 bg-brand-yellow text-brand-blue rounded-2xl shrink-0 border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue-deep)]">
                  <i className={`ph-bold ${stat.icon} text-2xl shrink-0`} />
                </div>
                <div className="text-left">
                  <span className="block text-3xl font-display uppercase tracking-tight text-brand-blue leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="block text-xs uppercase tracking-wider font-subheading text-brand-blue/75 font-bold">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}

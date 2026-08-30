'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function FlexBenefits() {
  const benefits = [
    {
      title: 'Corte 15:00 hs',
      desc: 'Despachá tus ventas hasta las 15:00 hs para entrega garantizada en el mismo día. Más tiempo de ventas online.',
      icon: 'ph-clock',
    },
    {
      title: 'Reputación Intacta',
      desc: 'Cumplimos con rigor tus acuerdos de nivel de servicio (SLAs) para que mantengas tu estatus de MercadoLíder sin sobresaltos.',
      icon: 'ph-medal',
    },
    {
      title: 'Devoluciones sin cargo',
      desc: 'Si el comprador rechaza el producto en el domicilio por cualquier causa, la devolución a tu local es totalmente sin cargo.',
      icon: 'ph-arrow-clockwise',
    },
    {
      title: 'Cobertura MDP',
      desc: 'Cubrimos absolutamente todas las zonas de entrega habilitadas por MercadoLibre Flex en la ciudad de Mar del Plata.',
      icon: 'ph-compass',
    },
    {
      title: 'Choferes Calificados',
      desc: 'Contamos con personal altamente capacitado para brindar la mejor experiencia de entrega y atención a tus clientes finales.',
      icon: 'ph-users',
    },
  ];

  return (
    <section
      id="flex-benefits"
      className="py-24 bg-brand-canvas relative z-10 overflow-hidden border-t-4 border-b-4 border-brand-blue-deep"
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

        {/* Bloque de encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue-deep)] font-bold">
            SOCIOS ESTRATÉGICOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-blue flex justify-center flex-wrap gap-x-3">
            <span>BENEFICIOS PARA</span>
            <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
              <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                VENDEDORES
              </span>
            </span>
          </h2>
          <p className="text-brand-blue/80 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            La solución definitiva para llevar tu tienda o e-commerce de MercadoLibre al siguiente nivel de competitividad.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Grilla de beneficios (fondo claro, DESIGN.md 4.2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {benefits.map((benefit, idx) => {
            const spanClass = idx === 0 || idx === 1 ? 'lg:col-span-6' : 'lg:col-span-4';

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`${spanClass} rounded-2xl bg-white border border-brand-blue/20 shadow-lg hover:border-brand-blue hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group`}
              >
                <div className="p-8 h-full space-y-5">
                  <div className="p-3 bg-brand-blue text-brand-yellow rounded-2xl w-fit border-2 border-brand-blue-deep shadow-[2px_2px_0px_var(--color-brand-yellow)]">
                    <i className={`ph-bold ${benefit.icon} text-2xl shrink-0`} />
                  </div>

                  <h3 className="text-xl font-display uppercase tracking-wide text-brand-blue font-bold leading-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-brand-blue/75 font-sans leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}

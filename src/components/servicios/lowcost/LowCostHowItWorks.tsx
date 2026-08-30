'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function LowCostHowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Solicitud',
      desc: 'Nos solicitás el envío por WhatsApp.',
      icon: 'ph-chat-circle',
    },
    {
      number: '02',
      title: 'Retiro',
      desc: 'Retiramos el paquete por tu local o depósito en el transcurso del día.',
      icon: 'ph-truck',
    },
    {
      number: '03',
      title: 'Entrega',
      desc: 'Entregamos de forma segura en manos de tu destinatario.',
      icon: 'ph-check-square',
    },
  ];

  return (
    <section
      id="lowcost-how-it-works"
      className="py-24 bg-brand-blue relative overflow-hidden border-t-4 border-b-4 border-brand-blue-deep"
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
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue-deep)] font-bold">
            PASO A PASO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-white border-l-4 border-brand-yellow pl-4 inline-block">
            ¿CÓMO FUNCIONA?
          </h2>
          <p className="text-brand-white/85 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Un proceso simple, transparente y diseñado milimétricamente para maximizar tu productividad logística.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Grilla de pasos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

          {/* Línea conectora en desktop */}
          <div className="absolute top-[2.4rem] left-12 right-12 h-1 bg-brand-white/20 hidden lg:block -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 relative flex flex-col group"
            >
              <div className="rounded-2xl bg-white border border-brand-blue/20 shadow-lg hover:border-brand-blue hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col items-center text-center">
                {/* Número de paso flotante */}
                <span className="absolute -top-3.5 -left-3.5 bg-brand-yellow text-brand-blue font-bold font-mono text-xs tracking-widest px-3 py-1 rounded-full border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue)]">
                  {step.number}
                </span>

                {/* Ícono circular */}
                <div className="h-16 w-16 bg-brand-blue text-brand-yellow border-2 border-brand-blue rounded-2xl flex items-center justify-center mb-5 shadow-[2px_2px_0px_var(--color-brand-blue)] group-hover:scale-105 transition-transform duration-300">
                  <i className={`ph-bold ${step.icon} text-2xl shrink-0`} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-display uppercase tracking-wider text-brand-blue font-bold leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-blue/75 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}

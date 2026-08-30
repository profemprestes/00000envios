'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function NetworksBenefits() {
  const benefits = [
    {
      title: 'Promociones Relámpago',
      desc: 'Accedé a tarifas preferenciales y descuentos especiales comunicados exclusivamente a través de nuestras redes sociales.',
      icon: 'ph-bold ph-tag',
      colSpan: 'lg:col-span-7',
    },
    {
      title: 'Actualizaciones de Servicio',
      desc: 'Enterate primero de la incorporación de nuevos servicios urbanos, ampliación de zonas y modificaciones de horarios por feriados o clima.',
      icon: 'ph-bold ph-bell-ringing',
      colSpan: 'lg:col-span-5',
    },
    {
      title: 'Comunidad de Comercios',
      desc: 'Formá parte de la red de emprendedores y negocios de Mar del Plata que confían en nosotros todos los días.',
      icon: 'ph-bold ph-users-three',
      colSpan: 'lg:col-span-5',
    },
    {
      title: 'Contacto y Soporte Ágil',
      desc: 'Obtené respuestas inmediatas y asesoramiento personalizado a través de mensajes directos por WhatsApp e Instagram.',
      icon: 'ph-bold ph-chat-circle-dots',
      colSpan: 'lg:col-span-7',
    },
  ];

  return (
    <section
      id="networks-benefits"
      className="py-20 sm:py-28 bg-brand-blue text-brand-white relative z-10 overflow-hidden border-b border-brand-white/15"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
        }}
      >
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-md">
              VALORES DE COMUNIDAD
            </span>
          </div>

          <h2 className="text-brand-white text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            BENEFICIOS DE <span className="text-brand-yellow">FORMAR PARTE</span>
          </h2>

          <p className="text-brand-white/85 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-light">
            Descubrí por qué comerciantes, marcas locales y vecinos nos eligen y siguen activamente en nuestras plataformas digitales.
          </p>

          <div className="h-1 w-20 bg-brand-yellow mx-auto rounded-full mt-4" />
        </div>

        {/* Grilla Asimétrica de Beneficios */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${benefit.colSpan} rounded-card-lg p-6 sm:p-8 bg-brand-blue-deep/90 border border-brand-white/20 shadow-xl flex flex-col justify-between min-h-55`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-blue text-brand-yellow border border-brand-white/15 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                  <i className={benefit.icon}></i>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-white leading-tight">
                  {benefit.title}
                </h3>

                <p className="text-sm sm:text-base text-brand-white/85 font-sans font-light leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-white/10 flex items-center gap-2 text-xs font-mono font-bold text-brand-yellow">
                <i className="ph-fill ph-check-circle text-base text-brand-yellow"></i>
                <span>BENEFICIO COMUNITARIO OFICIAL</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
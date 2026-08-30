'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function AboutTimeline() {
  const milestones = [
    {
      year: '2019',
      title: 'Lanzamiento Inicial',
      desc: 'Iniciamos operaciones en Mar del Plata con flota motorizada y foco en comercios de cercanía.',
      icon: 'ph-bold ph-compass',
    },
    {
      year: '2021',
      title: 'Nuevos Servicios',
      desc: 'Lanzamos soluciones segmentadas: LowCost, Plan Emprendedores y logística para E-Commerce.',
      icon: 'ph-bold ph-trend-up',
    },
    {
      year: '2023',
      title: 'Consolidación Local',
      desc: 'Nos consolidamos como uno de los principales servicios de mensajería urbana y paquetería de MDQ.',
      icon: 'ph-bold ph-trophy',
    },
    {
      year: '2025',
      title: 'Envíos Flex Pioneros',
      desc: 'Pioneros en integración de Envíos Flex en el día para Mercado Libre y tiendas online en la ciudad.',
      icon: 'ph-bold ph-lightning',
    },
    {
      year: '2025',
      title: 'Depósito Central',
      desc: 'Mudanza a nuestro centro operativo en Friuli 1972 e incorporación de paneles de seguimiento.',
      icon: 'ph-bold ph-buildings',
    },
    {
      year: '2026',
      title: 'Cobertura Integral MDQ',
      desc: 'Cobertura completa de última milla, Flex y logística con flota propia y capacitada.',
      icon: 'ph-bold ph-moped',
    },
  ];

  return (
    <section
      id="about-timeline"
      className="py-20 sm:py-28 bg-brand-blue text-brand-white relative overflow-hidden border-b border-brand-white/15"
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
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-md">
              TRAYECTORIA Y EVOLUCIÓN
            </span>
          </div>

          <h2 className="text-brand-white text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            NUESTRA <span className="text-brand-yellow">HISTORIA</span>
          </h2>

          <p className="text-brand-white/85 font-sans text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
            Más de 7 años revolucionando la mensajería y la logística de última milla en Mar del Plata.
          </p>

          <div className="h-1 w-20 bg-brand-yellow mx-auto rounded-full mt-4" />
        </div>

        {/* Línea de Tiempo */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea central vertical */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-brand-white/20 hidden md:block" />

          <div className="space-y-10 md:space-y-12">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={`${milestone.year}-${milestone.title}`}
                  className={`relative flex flex-col md:flex-row items-start md:items-center md:justify-between group/card ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Pin central */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1.5 md:top-auto w-10 h-10 rounded-full bg-brand-yellow text-brand-blue shadow-glow-yellow border-2 border-brand-blue flex items-center justify-center z-10 text-lg transition-transform duration-300 group-hover/card:scale-110">
                    <i className={milestone.icon}></i>
                  </div>

                  {/* Espaciador */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                  {/* Tarjeta de hito */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="w-full md:w-[45%] rounded-[24px] p-6 sm:p-7 bg-brand-blue-deep/90 border border-brand-white/20 shadow-xl pl-16 md:pl-7 hover:border-brand-yellow/50 transition-all"
                  >
                    <span className="inline-block text-3xl sm:text-4xl font-display text-brand-yellow mb-1 leading-none">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-white leading-tight mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-white/85 font-sans font-light leading-relaxed">
                      {milestone.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
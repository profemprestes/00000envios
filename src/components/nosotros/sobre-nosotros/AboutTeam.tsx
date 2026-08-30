'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function AboutTeam() {
  const teamStats = [
    {
      number: '3',
      role: 'Equipo Directivo',
      desc: 'Liderazgo operativo comprometido con la excelencia logística y la atención cercana en Mar del Plata.',
      icon: 'ph-bold ph-shield-check',
    },
    {
      number: '+20',
      role: 'Repartidores en Calle',
      desc: 'Flota propia y capacitada que conoce cada barrio y rincón de la ciudad para entregas rápidas.',
      icon: 'ph-bold ph-moped',
    },
    {
      number: '5',
      role: 'Atención al Cliente',
      desc: 'Soporte personalizado vía WhatsApp para resolver consultas, cotizaciones y seguimiento.',
      icon: 'ph-bold ph-headset',
    },
    {
      number: '4',
      role: 'Coordinación y Logística',
      desc: 'Especialistas que organizan los ruteos y la salida ágil de paquetes desde la base Friuli 1972.',
      icon: 'ph-bold ph-path',
    },
  ];

  return (
    <section
      id="about-team"
      className="py-20 sm:py-28 bg-brand-canvas relative overflow-hidden border-t border-brand-blue/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-sm">
              FUERZA HUMANA
            </span>
          </div>

          <h2 className="text-brand-blue text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            NUESTRO EQUIPO <span className="text-brand-yellow bg-brand-blue px-3 py-0.5 rounded-lg inline-block">DE CALLE</span>
          </h2>

          <p className="text-brand-blue/80 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Contamos con más de 20 repartidores y un equipo operativo coordinado para cumplir con cada entrega en tiempo y forma.
          </p>

          <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Grilla del Equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamStats.map((member, idx) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-[28px] p-6 sm:p-7 bg-brand-white border border-brand-blue/20 shadow-lg hover:shadow-xl hover:border-brand-blue/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="block font-display text-5xl sm:text-6xl text-brand-blue leading-none mb-3">
                  {member.number}
                </span>

                <h3 className="text-xl font-display uppercase tracking-tight text-brand-blue leading-tight mb-2 min-h-[32px] flex items-center">
                  {member.role}
                </h3>

                <p className="text-xs sm:text-sm text-brand-blue/85 font-sans leading-relaxed">
                  {member.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-blue/10 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-blue/70">
                  DosRuedas Staff
                </span>
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center text-lg">
                  <i className={member.icon}></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function NetworksHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="networks-hero"
      className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue text-brand-white border-b border-brand-white/15"
    >
      {/* Luces y ambientación */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue-deep/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Columna Izquierda: Copy Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">

            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
                <i className="ph-fill ph-share-network text-sm text-brand-blue"></i>
                COMUNIDAD DIGITAL
              </span>
            </motion.div>

            {/* Título Principal Display */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.98] text-brand-white flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              <span>COMUNIDAD EN</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow align-middle shrink-0 shadow-md">
                <Image
                  src="/cards/hero_express.webp"
                  alt="Comunidad en movimiento"
                  fill={true}
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow">MOVIMIENTO</span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-brand-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light border-l-2 border-brand-yellow pl-4 text-left"
            >
              Seguinos en nuestras redes oficiales y enterate al toque de todas las novedades operativas, promociones y el día a día de nuestros repartidores en Mar del Plata.
            </motion.p>

            {/* Callout Panel */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-5 sm:p-6 bg-brand-blue-deep/90 border border-brand-white/20 shadow-xl max-w-xl mx-auto lg:mx-0 text-left space-y-3"
            >
              <div className="flex items-center gap-2">
                <i className="ph-fill ph-sparkle text-brand-yellow text-lg"></i>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">
                  ¡Sumate a la conversación!
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-white/85 leading-relaxed font-sans font-light">
                Compartimos información del tránsito en MDQ, sorteos periódicos para comerciantes y tips de embalaje para potenciar las ventas de tu negocio.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-2 flex justify-center lg:justify-start">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300"
              >
                <span>Escribinos al WhatsApp</span>
                <i className="ph-bold ph-arrow-up-right text-base"></i>
              </a>
            </motion.div>

          </div>

          {/* Columna Derecha: Tarjeta Canales Oficiales */}
          <div className="lg:col-span-5 relative hidden lg:block h-[400px]">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="rounded-[28px] p-6 sm:p-8 bg-brand-blue-deep/95 border border-brand-white/20 shadow-2xl space-y-6 text-brand-white relative overflow-hidden">
                <i className="ph-fill ph-users-three absolute -right-6 -bottom-6 text-[12rem] text-brand-white/[0.03] pointer-events-none"></i>

                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-12 h-12 bg-brand-blue text-brand-yellow border border-brand-white/15 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                    <i className="ph-bold ph-broadcast"></i>
                  </div>
                  <div>
                    <h4 className="text-2xl font-display uppercase tracking-tight text-brand-white leading-none">
                      CANALES OFICIALES
                    </h4>
                    <p className="text-xs text-brand-yellow font-mono tracking-widest uppercase mt-1">
                      CONEXIÓN INMEDIATA MDQ
                    </p>
                  </div>
                </div>

                <p className="text-sm text-brand-white/85 font-sans leading-relaxed font-light relative z-10">
                  Nuestras redes sociales son el canal directo para resolver dudas rápidas, ver el recorrido de los envíos en Mar del Plata y sumarte a la red más ágil.
                </p>

                <div className="pt-4 border-t border-brand-white/15 flex justify-between items-center text-xs relative z-10">
                  <span className="font-mono text-brand-yellow text-xs tracking-wider">@enviosdosruedas</span>
                  <a
                    href="#networks-channels"
                    className="font-subheading text-brand-white hover:text-brand-yellow flex items-center gap-1 text-sm tracking-wider uppercase transition-colors"
                  >
                    <span>VER CANALES</span>
                    <i className="ph-bold ph-arrow-down text-sm"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

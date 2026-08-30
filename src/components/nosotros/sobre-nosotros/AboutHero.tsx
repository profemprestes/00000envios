'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function AboutHero() {
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
      id="about-hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue text-brand-white border-b border-brand-white/15"
    >
      {/* Luces y ambientación con tokens de la marca */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue-deep/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Columna Izquierda: Copy y Propuesta de Valor */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">

            {/* Badge de Identidad */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
                <i className="ph-fill ph-medal text-sm text-brand-blue"></i>
                NUESTRA IDENTIDAD
              </span>
            </motion.div>

            {/* Título Principal Display con Cápsula de Marca */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.98] text-brand-white flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              <span>LÍDERES EN</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow align-middle shrink-0 shadow-md">
                <Image
                  src="/cards/hero_express.webp"
                  alt="Reparto Mar del Plata"
                  fill={true}
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-cover"
                />
              </span>
              <span className="text-brand-yellow">ÚLTIMA MILLA</span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-brand-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light border-l-2 border-brand-yellow pl-4 text-left"
            >
              Nuestra historia comenzó con una simple meta: hacer los envíos locales más eficientes, rápidos y confiables en Mar del Plata.
            </motion.p>

            {/* Tarjeta de Misión destacada */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-5 sm:p-6 bg-brand-blue-deep/90 border border-brand-white/20 shadow-xl max-w-xl mx-auto lg:mx-0 text-left space-y-3"
            >
              <div className="flex items-center gap-2">
                <i className="ph-fill ph-sparkle text-brand-yellow text-lg"></i>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-yellow">
                  Nuestra Misión 2026
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-white/85 leading-relaxed font-sans font-light">
                Conectamos personas y negocios en Mar del Plata mediante un servicio motorizado rápido, seguro y 100% propio. Impulsamos tu crecimiento local reduciendo tus costos operativos.
              </p>
            </motion.div>

            {/* CTA de contacto directo */}
            <motion.div variants={itemVariants} className="pt-2 flex justify-center lg:justify-start">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300"
              >
                <span>Hablar por WhatsApp</span>
                <i className="ph-bold ph-arrow-up-right text-base"></i>
              </a>
            </motion.div>

          </div>

          {/* Columna Derecha: Tarjeta Reviews */}
          <div className="lg:col-span-5 relative hidden lg:block h-100">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="rounded-card-lg p-6 sm:p-8 bg-brand-blue-deep/95 border border-brand-white/20 shadow-2xl space-y-6 text-brand-white relative overflow-hidden">
                <i className="ph-fill ph-shield-check absolute -right-6 -bottom-6 text-[12rem] text-brand-white/3 pointer-events-none"></i>

                <div className="flex items-center justify-between pt-1 relative z-10">
                  <div className="flex items-center gap-1 text-brand-yellow text-lg">
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                  </div>
                  <span className="text-xs font-mono font-bold bg-brand-yellow text-brand-blue px-3 py-1 rounded-full uppercase tracking-wider">
                    5.0 / 5 GOOGLE
                  </span>
                </div>

                <div className="relative z-10">
                  <h4 className="text-3xl font-display uppercase tracking-tight text-brand-white leading-none">
                    GOOGLE REVIEWS
                  </h4>
                  <p className="text-xs text-brand-yellow font-mono tracking-widest uppercase mt-1">
                    CONFIANZA LOCAL COMPROBADA
                  </p>
                </div>

                <p className="text-sm text-brand-white/85 font-sans leading-relaxed font-light relative z-10">
                  Nuestros clientes avalan la excelencia operativa. Flota propia y coordinada con base operativa central en Mar del Plata (Friuli 1972).
                </p>

                <div className="pt-4 border-t border-brand-white/15 flex justify-between items-center text-xs relative z-10">
                  <span className="font-subheading text-brand-white font-bold flex items-center gap-1.5 text-sm tracking-wider uppercase">
                    <i className="ph-bold ph-shield-check text-brand-yellow text-base"></i>
                    FLOTA PROPIA
                  </span>
                  <span className="font-mono text-brand-yellow flex items-center gap-1 text-xs tracking-wider uppercase">
                    <i className="ph-fill ph-map-pin text-brand-yellow"></i>
                    MAR DEL PLATA
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';

export default function ExpressHero() {
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
      }
    },
  };

  return (
    <section
      id="express-hero"
      className="relative w-full overflow-hidden bg-brand-blue text-brand-white min-h-[80vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-brand-white/15"
    >
      {/* Fondo procedural vectorial */}
      <HeroProceduralBackground variant="express" />

      {/* Marca de agua tipográfica de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[16vw] leading-none text-brand-white/[0.03] tracking-tighter whitespace-nowrap">
          ENVÍOS EXPRESS MDQ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Columna de copy principal */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">

            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-4 py-1.5 rounded-full text-sm font-subheading uppercase tracking-widest bg-brand-yellow text-brand-blue border-2 border-brand-blue flex items-center gap-1.5 shadow-[2px_2px_0px_var(--color-brand-blue)] font-bold">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-blue-deep animate-pulse shrink-0" />
                Disponible en Mar del Plata
              </span>
            </motion.div>

            {/* Título con tipografía inline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-3"
            >
              <span>ENVÍOS</span>
              <span className="relative inline-block w-16 h-10 sm:w-20 sm:h-12 rounded-full overflow-hidden border-2 border-brand-yellow align-middle shrink-0 shadow-[2px_2px_0px_var(--color-brand-blue)]">
                <Image
                  src="/cards/hero_express.webp"
                  alt="Envíos Express"
                  fill={true}
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-cover object-top"
                />
              </span>
              <span className="text-brand-yellow font-bold">EXPRESS - ENTREGA INMEDIATA</span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-white/85"
            >
              Prioridad total. Tu paquete entregado en el día si es solicitado antes de 15hs.
            </motion.p>

            {/* Botones CTA */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/cotizar/express"
                id="express-hero-cta-cotizar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-yellow px-7 py-3.5 font-subheading text-sm uppercase tracking-wider text-brand-blue shadow-glow-yellow transition-all hover:bg-brand-yellow-hover cursor-pointer"
              >
                <span>Cotizá tu Envío Express</span>
                <i className="ph-bold ph-arrow-right text-lg shrink-0" />
              </Link>

              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                id="express-hero-cta-whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-brand-white/30 bg-brand-white/10 px-7 py-3.5 font-subheading text-sm uppercase tracking-wider text-brand-white transition-all hover:bg-brand-white/20 cursor-pointer"
              >
                <i className="ph-bold ph-phone text-lg shrink-0" />
                <span>Hablar por WhatsApp</span>
              </a>
            </motion.div>

            {/* Línea de estadísticas destacadas */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t-2 border-brand-white/15 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-white/10 rounded-xl text-brand-yellow border border-brand-white/20">
                  <i className="ph-bold ph-clock text-xl shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-white/70 leading-none mb-1">Entregas en</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-brand-white">Menos de 2 Horas</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-white/10 rounded-xl text-brand-yellow border border-brand-white/20">
                  <i className="ph-bold ph-shield-check text-xl shrink-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand-white/70 leading-none mb-1">Despacho con</p>
                  <p className="text-sm font-subheading uppercase font-semibold text-brand-white">Custodia Digital</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Columna de gráficos */}
          <div className="lg:col-span-5 relative hidden lg:block h-112.5">
            {/* Tarjeta 1: Mapa / Rastreo (card en fondo azul, DESIGN.md 4.2) */}
            <motion.div
              className="absolute top-8 right-4 w-[80%] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
            >
              <div className="rounded-2xl bg-brand-blue-deep/90 border border-brand-white/20 shadow-xl p-4 transition-all duration-500 hover:border-brand-white/30 w-full">
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-3.5 bg-brand-blue border border-brand-white/10">
                  <Image
                    src="/card_mapa.webp"
                    alt="Mapa de Cobertura de Mar del Plata"
                    fill={true}
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-brand-blue text-brand-yellow border border-brand-yellow px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-widest font-mono">
                    MAPA EN VIVO
                  </div>
                </div>
                <div className="flex items-center justify-between text-brand-white">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider block">Rango de Entrega</span>
                    <span className="text-[10px] text-brand-white/60 font-sans block mt-0.5">Asignación prioritaria directa</span>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-lg bg-brand-white/10 text-brand-white border border-brand-white/20 font-bold uppercase font-mono tracking-wider">
                    Activo
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Tarjeta 2: Mensajero en ruta */}
            <motion.div
              className="absolute bottom-8 left-0 w-[75%] z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }}
              whileHover={{ scale: 1.02, zIndex: 40 }}
            >
              <div className="rounded-2xl bg-brand-blue-deep border border-brand-white/15 shadow-xl p-5 text-brand-white transition-all duration-500 hover:border-brand-white/25 w-full">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-yellow text-brand-blue border border-brand-blue">
                    <i className="ph-fill ph-moped text-xl animate-pulse shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow leading-none mb-1">MOTO MENSAJERO</h4>
                    <p className="text-sm font-subheading uppercase font-semibold text-brand-white leading-tight">MATIAS CEJAS</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between border-b border-brand-white/10 pb-1.5">
                    <span className="text-brand-white/70 font-sans">Velocidad Promedio</span>
                    <span className="font-semibold font-mono">Tránsito optimizado</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-white/70 font-sans">Tiempo Estimado</span>
                    <span className="font-semibold text-brand-yellow font-mono"> 120 Minutos</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Badge flotante */}
            <motion.div
              className="absolute top-1/2 left-1/4 -translate-y-1/2 z-40"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.8 } }}
            >
              <div className="px-4 py-2 bg-brand-yellow text-brand-blue border-2 border-brand-blue font-bold rounded-full text-xs font-subheading tracking-wider uppercase shadow-[3px_3px_0px_var(--color-brand-blue)] flex items-center gap-1.5">
                <i className="ph-fill ph-lightning text-base animate-bounce shrink-0" />
                Entrega Inmediata
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

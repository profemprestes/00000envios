'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

const SIMULATED_TRIPS = [
  { origen: "Centro de Distribución", destino: "Zona Güemes", distancia: 4.2 },
  { origen: "Av. Constitución 5500", destino: "Plaza Mitre", distancia: 5.8 },
  { origen: "Puerto Mar del Plata", destino: "Plaza Colón", distancia: 8.5 },
  { origen: "Terminal Ferroautomotora", destino: "B° Stella Maris", distancia: 3.7 },
  { origen: "La Perla (Av. Libertad)", destino: "Punta Mogotes", distancia: 11.2 },
  { origen: "Paseo Aldrey", destino: "Zona San Juan", distancia: 2.8 },
  { origen: "B° Constituyentes", destino: "Hospital Privado Comunidad", distancia: 4.9 },
];

export default function CotizadorLowCostHero() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Trip simulation state
  const [trip, setTrip] = useState({ origen: "Centro de Distribución", destino: "Zona Güemes", distancia: 4.2 });

  useEffect(() => {
    // Select a random trip on mount to avoid SSR hydration mismatch
    const randomIndex = Math.floor(Math.random() * SIMULATED_TRIPS.length);
    setTimeout(() => setTrip(SIMULATED_TRIPS[randomIndex]), 0);
  }, []);

  // Calcula la tarifa LowCost según rangos reales de la BD
  // Rangos fijos hasta 10 km; por encima se cobra $700 por km entero excedente (sin prorrateo)
  const distanceKm = trip.distancia;
  function calcLowCostPrice(d: number): number {
    if (d <= 3) return 3000;
    if (d <= 5) return 4000;
    if (d <= 7) return 5300;
    if (d <= 10) return 7000;
    // Más de 10 km: base 7000 + $700 por cada km entero que exceda los 10 km
    return 7000 + Math.ceil(d - 10) * 700;
  }
  const price = calcLowCostPrice(distanceKm);

  // Motion values for smooth 3D mouse tracking spring animations
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalized mouse position between -0.5 and 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 90,
        damping: 18,
      }
    },
  };

  return (
    <section
      id="cotizador-lowcost-hero"
      className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-brand-blue text-brand-white border-b border-brand-white/15"
    >
      {/* Luces y ambientación */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue-deep/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Columna Izquierda: Título y Descripción */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">

            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
                <i className="ph-fill ph-shopping-bag-open text-sm text-brand-blue"></i>
                Servicio Económico y Programado
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.98] text-brand-white flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2"
            >
              <span>COTIZÁ TU</span>
              <span className="text-brand-yellow">ENVÍO</span>
              <span>LOWCOST</span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl font-sans text-brand-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light border-l-2 border-brand-yellow pl-4 text-left"
            >
              Eficiencia y rentabilidad. Calculá tu envío con entrega garantizada en el día si es solicitado antes de 13hs.
            </motion.p>

            {/* Indicadores de Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left font-sans text-xs"
            >
              <div className="flex items-center gap-2 text-brand-white/85 bg-brand-white/10 border border-brand-white/20 rounded-2xl p-3 hover:border-brand-yellow/40 transition-colors">
                <i className="ph-fill ph-percent text-brand-yellow text-base shrink-0"></i>
                <span>Hasta 40% de Ahorro</span>
              </div>
              <div className="flex items-center gap-2 text-brand-white/85 bg-brand-white/10 border border-brand-white/20 rounded-2xl p-3 hover:border-brand-yellow/40 transition-colors">
                <i className="ph-fill ph-motorcycle text-brand-yellow text-base shrink-0"></i>
                <span>Entrega Same-Day</span>
              </div>
              <div className="flex items-center gap-2 text-brand-white/85 bg-brand-white/10 border border-brand-white/20 rounded-2xl p-3 hover:border-brand-yellow/40 transition-colors">
                <i className="ph-fill ph-shield-check text-brand-yellow text-base shrink-0"></i>
                <span>Tarifa Plana PyME</span>
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha: Tarjeta 3D flotante */}
          <div className="lg:col-span-5 relative hidden lg:block h-[380px]" style={{ perspective: '1000px' }}>
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] z-20 cursor-pointer"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
            >
              {/* Tarjeta doble bisel: bisel translúcido + ticket blanco */}
              <div className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl transition-all duration-300">
                <div className="bg-brand-white rounded-[20px] p-6 sm:p-8 text-brand-blue">
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between border-b border-brand-blue/15 pb-4">
                      <div>
                        <h4 className="text-xl font-subheading uppercase text-brand-blue tracking-wider">
                          CÁLCULO AUTOMÁTICO
                        </h4>
                        <p className="text-[10px] text-brand-blue/70 font-subheading tracking-wider uppercase mt-0.5">SISTEMA LOWCOST BATCH</p>
                      </div>
                      <i className="ph-fill ph-calculator text-2xl text-brand-blue shrink-0 animate-pulse"></i>
                    </div>

                    {/* Simulación del calculador */}
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center py-1 border-b border-brand-blue/10">
                        <span className="font-subheading font-bold uppercase tracking-wider text-[10px] text-brand-blue/60">ORIGEN</span>
                        <span className="text-brand-blue font-semibold font-sans truncate max-w-[150px] inline-block align-middle">{trip.origen}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-brand-blue/10">
                        <span className="font-subheading font-bold uppercase tracking-wider text-[10px] text-brand-blue/60">DESTINO</span>
                        <span className="text-brand-blue font-semibold font-sans truncate max-w-[150px] inline-block align-middle">{trip.destino}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-brand-blue/10">
                        <span className="font-subheading font-bold uppercase tracking-wider text-[10px] text-brand-blue/60">DISTANCIA</span>
                        <span className="text-brand-blue font-bold font-mono">{trip.distancia} km</span>
                      </div>
                      <div className="flex justify-between items-center py-1 text-sm pt-2 border-t border-brand-blue/15">
                        <span className="font-subheading font-bold text-brand-blue tracking-wide">TARIFA FINAL</span>
                        <span className="text-brand-blue font-bold text-lg font-mono">${price.toLocaleString('es-AR')} ARS</span>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-center">
                      <span className="px-3 py-1 bg-brand-yellow/15 border border-brand-yellow text-brand-blue rounded-xl text-[10px] font-subheading tracking-wider uppercase">
                        ENTREGA INCLUIDA EN EL DÍA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export default function VisionSection() {
  return (
    <section id="vision-mar-del-plata" className="py-20 sm:py-28 bg-brand-canvas text-brand-blue relative overflow-hidden w-full border-t border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Columna Izquierda: Visión y Pilares Operativos */}
          <Reveal className="lg:col-span-6 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-blue text-brand-yellow shadow-md border border-brand-blue">
                <i className="ph-fill ph-handshake text-sm text-brand-yellow"></i> PARTNER LOGÍSTICO ESPECIALIZADO
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95] flex flex-col items-start gap-1 text-brand-blue">
              <span>Conectamos Mar del Plata</span>
              <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
                <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                  DE PUNTA A PUNTA
                </span>
              </span>
            </h2>

            <p className="text-brand-blue/85 text-base sm:text-lg leading-relaxed font-sans font-medium">
              Nos especializamos en la distribución de última milla para e-commerce locales y comercios de la ciudad. Aseguramos que tus paquetes lleguen a tiempo con flota propia y tarifas 100% transparentes.
            </p>

            <div className="space-y-4 pt-2">
              {/* Feature 1: Puntualidad */}
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-brand-blue/20 hover:border-brand-blue shadow-sm transition-all group hover:shadow-md">
                <div className="p-3 bg-brand-blue text-brand-yellow rounded-xl shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <i className="ph-fill ph-clock text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-subheading uppercase tracking-wider text-brand-blue leading-none mb-1.5 font-bold group-hover:text-brand-blue-deep transition-colors">
                    Entregas a Tiempo Garantizadas
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-blue/75 font-sans leading-relaxed">
                    Optimizamos cada recorrido mediante ruteo dinámico urbano en todo el Partido de General Pueyrredón.
                  </p>
                </div>
              </div>

              {/* Feature 2: Seguridad */}
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-brand-blue/20 hover:border-brand-blue shadow-sm transition-all group hover:shadow-md">
                <div className="p-3 bg-brand-blue text-brand-yellow rounded-xl shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <i className="ph-fill ph-shield-check text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-subheading uppercase tracking-wider text-brand-blue leading-none mb-1.5 font-bold group-hover:text-brand-blue-deep transition-colors">
                    Custodia y Protección Total
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-blue/75 font-sans leading-relaxed">
                    Cero paquetes extraviados. Trazabilidad punto a punto con aviso de entrega y rendición inmediata de dinero.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Columna Derecha: Bento Grid Asimétrico de Métricas */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Bento Card Principal: +50k Envíos (Full Width) */}
            <Reveal delay={0} className="sm:col-span-2 p-8 rounded-[30px] bg-brand-blue text-brand-white border border-brand-white/20 shadow-2xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
              <i className="ph-fill ph-motorcycle absolute -right-6 -bottom-6 text-[13rem] text-brand-white/[0.05] pointer-events-none group-hover:scale-105 transition-transform duration-500"></i>
              
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-yellow text-brand-blue rounded-2xl shadow-glow-yellow">
                    <i className="ph-fill ph-package text-2xl"></i>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg bg-brand-blue-deep border border-brand-white/20 text-brand-yellow font-bold">
                    TRAYECTORIA MDQ
                  </span>
                </div>

                <div>
                  <h3 className="text-6xl sm:text-7xl lg:text-8xl font-mono tracking-tighter font-extrabold uppercase leading-none text-brand-white tabular-nums mb-2">
                    +50K
                  </h3>
                  <p className="text-sm font-sans uppercase tracking-wider text-brand-yellow font-bold">
                    Envíos y entregas realizadas con éxito
                  </p>
                  <p className="text-xs text-brand-white/80 font-sans font-light mt-1">
                    Respaldando el crecimiento de comercios y emprendimientos marplatenses.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Bento Card 2: 0 Paquetes Extraviados */}
            <Reveal delay={0.08} className="p-6 rounded-[26px] bg-white border border-brand-blue/20 shadow-md hover:-translate-y-1 hover:border-brand-blue transition-transform duration-300 flex flex-col justify-between min-h-[190px]">
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-xl bg-brand-blue text-brand-yellow shadow-sm">
                  <i className="ph-fill ph-shield-check text-xl"></i>
                </div>
                <span className="text-[9px] font-mono text-brand-blue/70 uppercase tracking-widest font-bold">SEGURIDAD</span>
              </div>
              <div className="pt-4">
                <h4 className="text-5xl font-mono font-bold tracking-tighter text-brand-blue leading-none mb-1 tabular-nums">
                  0
                </h4>
                <p className="text-xs text-brand-blue uppercase tracking-wider font-subheading font-bold">
                  Paquetes extraviados
                </p>
                <p className="text-[11px] text-brand-blue/70 font-sans mt-0.5 font-medium">
                  Compromiso y custodia real
                </p>
              </div>
            </Reveal>

            {/* Bento Card 3: +100 Comercios y Emprendedores */}
            <Reveal delay={0.16} className="p-6 rounded-[26px] bg-white border border-brand-blue/20 shadow-md hover:-translate-y-1 hover:border-brand-blue transition-transform duration-300 flex flex-col justify-between min-h-[190px]">
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-xl bg-brand-yellow text-brand-blue shadow-sm">
                  <i className="ph-fill ph-users-three text-xl"></i>
                </div>
                <span className="text-[9px] font-mono text-brand-blue/70 uppercase tracking-widest font-bold">COMUNIDAD</span>
              </div>
              <div className="pt-4">
                <h4 className="text-5xl font-mono font-bold tracking-tighter text-brand-blue leading-none mb-1 tabular-nums">
                  +100
                </h4>
                <p className="text-xs text-brand-blue uppercase tracking-wider font-subheading font-bold">
                  Marcas que confían
                </p>
                <p className="text-[11px] text-brand-blue/70 font-sans mt-0.5 font-medium">
                  Cuentas activas en MDQ
                </p>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}

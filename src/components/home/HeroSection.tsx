'use client';

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function HeroSection() {
  return (
    <section
      id="hero-animado"
      className="relative w-full overflow-hidden bg-brand-blue min-h-[90vh] flex items-center pt-24 pb-16"
    >
      {/* Marca de Agua de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[14vw] leading-none text-brand-white/[0.05] tracking-tighter whitespace-nowrap">
          ENVÍOS DOS RUEDAS
        </span>
      </div>

      {/* Contenedor Principal del Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrativa & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Badge Superior */}
            <Reveal mode="mount" className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
                <i className="ph-fill ph-sparkle text-sm"></i>
                Tu Solución Confiable en Mar del Plata
              </span>
            </Reveal>

            {/* Título Principal */}
            <Reveal mode="mount" delay={0.08} as="div">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tight leading-[0.98] flex flex-col items-center lg:items-start gap-1">
                <span className="text-brand-white">Mensajería y Logística</span>
                <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
                  <span className="relative z-10 bg-brand-yellow text-brand-blue px-3 py-0.5 inline-block font-display font-black rounded-lg">
                    E-Commerce
                  </span>
                </span>
                <span className="text-brand-white">en Mar del Plata</span>
              </h1>
            </Reveal>

            {/* Descripción */}
            <Reveal mode="mount" delay={0.16}>
              <p className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-white/95 font-light">
                Somos tu partner estratégico en mensajería urbana, envíos en el día y delivery de última milla. Flota propia de motos, cero tercerización y respuesta inmediata.
              </p>
            </Reveal>

            {/* Acciones */}
            <Reveal mode="mount" delay={0.24} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 min-h-[52px] bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 w-full sm:w-auto text-base"
              >
                <span className="truncate">Cotizá Express</span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-brand-blue/15 text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-yellow group-hover:translate-x-1 transition-all duration-200">
                  <i className="ph ph-arrow-right text-base"></i>
                </span>
              </a>

              <Link
                href="#contacto"
                className="group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 min-h-[52px] bg-brand-white/10 hover:bg-brand-white/20 text-brand-white border border-brand-white/30 hover:border-brand-white transition-all duration-300 w-full sm:w-auto text-base"
              >
                <span className="truncate">Contactar Base</span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-brand-white/20 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-200">
                  <i className="ph ph-arrow-right text-base"></i>
                </span>
              </Link>
            </Reveal>

            {/* Métricas de Confianza */}
            <Reveal mode="mount" delay={0.32} className="pt-4 flex flex-wrap justify-center lg:justify-start gap-6 text-brand-white">
              <div className="flex items-center gap-2 font-subheading text-xs uppercase tracking-wider">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow/20 border border-brand-yellow/50 flex items-center justify-center text-brand-yellow">
                  <i className="ph-fill ph-package"></i>
                </div>
                <span>+50k Envíos</span>
              </div>

              <div className="flex items-center gap-2 font-subheading text-xs uppercase tracking-wider">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow/20 border border-brand-yellow/50 flex items-center justify-center text-brand-yellow">
                  <i className="ph-fill ph-map-pin"></i>
                </div>
                <span>Cobertura Total MDQ</span>
              </div>

              <div className="flex items-center gap-2 font-subheading text-xs uppercase tracking-wider">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow/20 border border-brand-yellow/50 flex items-center justify-center text-brand-yellow">
                  <i className="ph-fill ph-lightning"></i>
                </div>
                <span>Entregas Same-Day</span>
              </div>
            </Reveal>

          </div>

          {/* Tarjeta Terminal Interactiva */}
          <Reveal mode="mount" delay={0.2} y={32} className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[440px] group transition-transform duration-500 hover:-translate-y-1">
              <div className="bg-brand-blue border border-brand-white/25 p-3 sm:p-4 rounded-3xl shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-brand-blue/80 border border-brand-white/20 p-5 sm:p-6 flex flex-col items-center">
                  
                  {/* Barra de Estado en Vivo */}
                  <div className="w-full flex items-center justify-between gap-2 mb-4 bg-brand-blue border border-brand-white/20 px-3.5 py-1.5 rounded-full">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow"></span>
                      </span>
                      <span className="font-subheading text-[11px] uppercase tracking-widest text-brand-yellow font-bold">
                        Ruteo Activo · MDQ
                      </span>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-brand-white bg-brand-white/10 px-2.5 py-0.5 rounded-md border border-brand-white/20">
                      Friuli 1972
                    </span>
                  </div>

                  {/* Imagen / Mapa Logístico con Fallback y Recursos 3D */}
                  <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] flex items-center justify-center my-2">
                    <img
                      src="/recursos_envios/pin_mapa.png"
                      alt="Envíos DosRuedas - Mapa Logístico"
                      className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://www.enviosdosruedas.com/card_mapa.webp";
                      }}
                    />
                  </div>

                  {/* Mini Tarjetas de Características */}
                  <div className="w-full grid grid-cols-2 gap-2.5 mt-3">
                    <div className="bg-brand-white/10 border border-brand-white/20 p-2.5 rounded-xl flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-brand-yellow text-brand-blue shrink-0">
                        <i className="ph-fill ph-lightning text-base"></i>
                      </div>
                      <div>
                        <p className="font-subheading text-xs font-bold uppercase text-brand-white leading-tight">
                          Envíos Same-Day
                        </p>
                        <p className="font-sans text-[10px] text-brand-white/80">
                          Entrega en el Día
                        </p>
                      </div>
                    </div>

                    <div className="bg-brand-white/10 border border-brand-white/20 p-2.5 rounded-xl flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-brand-white/20 text-brand-yellow shrink-0">
                        <i className="ph-fill ph-shield-check text-base"></i>
                      </div>
                      <div>
                        <p className="font-subheading text-xs font-bold uppercase text-brand-white leading-tight">
                          Flota Propia
                        </p>
                        <p className="font-sans text-[10px] text-brand-white/80">
                          Cero Tercerización
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Borde de Acento Inferior Amarillo Eléctrico */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-yellow"></div>
    </section>
  );
}

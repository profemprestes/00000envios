'use client';

import React from "react";

export default function CarruselRedes() {
  return (
    <section
      id="carrusel-redes"
      className="py-20 sm:py-28 bg-brand-blue border-y border-brand-white/15 relative overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3.5">
          <div>
            <span className="inline-block px-5 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-md">
              NUESTRA COMUNIDAD DIGITAL
            </span>
          </div>

          <h2 className="text-brand-white text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            SEGUÍ NUESTRO <span className="text-brand-yellow">MOVIMIENTO</span>
          </h2>

          <p className="text-brand-white text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto font-normal opacity-95">
            Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.
          </p>

          <div className="h-1 w-20 bg-brand-yellow mx-auto rounded-full mt-4"></div>
        </div>

        {/* Grid de 3 Tarjetas de Redes Sociales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">

          {/* CARD 1: FACEBOOK */}
          <article className="group relative rounded-[28px] p-6 sm:p-7 bg-[#052c87]/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:-translate-y-1">
            <i className="ph-fill ph-facebook-logo absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.04] pointer-events-none"></i>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase font-mono border border-blue-400/40 text-blue-300 bg-blue-500/10">
                  FACEBOOK OFICIAL
                </span>

                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1877F2] text-white shadow-glow-fb transition-transform duration-300 group-hover:scale-110">
                  <i className="ph-fill ph-facebook-logo text-2xl"></i>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-none text-brand-white">
                  FACEBOOK
                </h3>
                <p className="font-sans text-sm font-semibold mt-1 text-[#5ea4ff]">
                  Envíos DosRuedas
                </p>
              </div>

              <p className="font-sans text-sm leading-relaxed text-brand-white/85 font-light pt-1">
                Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href="https://www.facebook.com/enviosdosruedas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-glow-fb group/btn"
              >
                <span>SEGUIR COMUNIDAD</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                  <i className="ph-bold ph-arrow-up-right text-sm text-white"></i>
                </span>
              </a>
            </div>
          </article>

          {/* CARD 2: INSTAGRAM */}
          <article className="group relative rounded-[28px] p-6 sm:p-7 bg-[#052c87]/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:-translate-y-1">
            <i className="ph-fill ph-instagram-logo absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.04] pointer-events-none"></i>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase font-mono border border-rose-400/40 text-rose-300 bg-rose-500/10">
                  INSTAGRAM MDQ
                </span>

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-tr from-[#f97316] via-[#e11d48] to-[#9333ea] text-white shadow-glow-ig transition-transform duration-300 group-hover:scale-110">
                  <i className="ph-fill ph-instagram-logo text-2xl"></i>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-none text-brand-white">
                  INSTAGRAM
                </h3>
                <p className="font-sans text-sm font-semibold mt-1 text-[#ff4d6d]">
                  @enviosdosruedas
                </p>
              </div>

              <p className="font-sans text-sm leading-relaxed text-brand-white/85 font-light pt-1">
                Mirá el detrás de escena de nuestros repartidores y la flota recorriendo las calles de MDQ.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href="https://www.instagram.com/enviosdosruedas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 bg-gradient-to-r from-[#9b2c8a] via-[#e11d48] to-[#f97316] hover:opacity-95 text-white shadow-glow-ig group/btn"
              >
                <span>VER CONTENIDO</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                  <i className="ph-bold ph-arrow-up-right text-sm text-white"></i>
                </span>
              </a>
            </div>
          </article>

          {/* CARD 3: WHATSAPP */}
          <article className="group relative rounded-[28px] p-6 sm:p-7 bg-[#052c87]/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:-translate-y-1">
            <i className="ph-fill ph-whatsapp-logo absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.04] pointer-events-none"></i>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase font-mono border border-emerald-400/40 text-emerald-300 bg-emerald-500/10">
                  WHATSAPP DIRECTO
                </span>

                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-glow-wa transition-transform duration-300 group-hover:scale-110">
                  <i className="ph-fill ph-whatsapp-logo text-2xl"></i>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-none text-brand-white">
                  WHATSAPP
                </h3>
                <p className="font-mono text-sm font-semibold mt-1 text-[#25D366]">
                  +54 223 660-2699
                </p>
              </div>

              <p className="font-sans text-sm leading-relaxed text-brand-white/85 font-light pt-1">
                Escribinos directamente para consultas de precios, despachos o soporte logístico inmediato.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 bg-[#25D366] hover:bg-[#20bd5a] text-brand-blue shadow-glow-wa group/btn font-black"
              >
                <span>INICIAR CHAT</span>
                <span className="w-7 h-7 rounded-full bg-brand-blue/15 flex items-center justify-center shrink-0 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                  <i className="ph-bold ph-arrow-up-right text-sm text-brand-blue"></i>
                </span>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

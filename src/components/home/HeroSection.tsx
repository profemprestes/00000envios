import React from "react";

export default function HeroSection() {
  return (
    <section id="hero-animado" className="relative py-16 sm:py-24 bg-brand-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest bg-brand-yellow text-brand-blue uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
              RUTEO ACTIVO · MAR DEL PLATA
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-none text-white">
              Logística & Mensajería <br />
              <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
                <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                  URBANA INMEDIATA
                </span>
              </span>
            </h1>
            <p className="text-white/85 text-base sm:text-lg max-w-xl font-sans">
              Entregas en el día para e-commerce, trámites y paquetería en toda la ciudad con trazabilidad directa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue font-subheading font-bold uppercase tracking-wider text-sm shadow-glow-yellow transition-all"
              >
                Cotizá tu envío al toque
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-6 rounded-3xl bg-[#052c87] border border-white/20 shadow-2xl text-white">
              <h3 className="font-display text-2xl uppercase tracking-tight text-brand-yellow">Base Operativa Friuli</h3>
              <p className="text-xs font-mono text-white/70 mt-1">Friuli 1972 · Mar del Plata</p>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs font-mono">ESTADO: EN SERVICIO</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">100% OPERATIVO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

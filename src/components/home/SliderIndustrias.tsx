import React from "react";

export default function SliderIndustrias() {
  return (
    <section id="slider-industrias" className="py-20 sm:py-28 bg-[#f8fafc] text-brand-blue border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-blue text-brand-yellow">
            SOLUCIONES POR SECTOR
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-brand-blue flex flex-wrap items-center justify-center gap-3">
            <span>Soluciones Especiales</span>
            <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
              <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                PARA CADA INDUSTRIA
              </span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

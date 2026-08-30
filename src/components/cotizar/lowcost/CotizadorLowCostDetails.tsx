'use client';

import React from 'react';

const FEATURES = [
  {
    icon: 'ph-map-trifold',
    title: 'Visualización en Mapa',
    desc: 'Observá la ruta exacta que tomará tu envío en un mapa interactivo diseñado a medida.',
  },
  {
    icon: 'ph-lightning',
    title: 'Cálculo Preciso',
    desc: 'Obtené estimaciones de distancia y tiempo basadas en datos de tráfico y ruteo diario actualizados.',
  },
  {
    icon: 'ph-check-circle',
    title: 'Confirmación Fácil',
    desc: 'Una vez cotizado, podés proceder a confirmar tu envío con pocos clics a través de WhatsApp.',
  },
];

export default function CotizadorLowCostDetails() {
  return (
    <div id="cotizador-lowcost-details" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-12">
      {/* Columna 1: Beneficios */}
      <div className="lg:col-span-7 rounded-[32px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl">
        <div className="p-6 sm:p-8 rounded-[24px] bg-brand-white space-y-6">
          <h3 className="text-xl font-subheading uppercase tracking-wider text-brand-blue border-b border-brand-blue/15 pb-3">
            Beneficios del Cotizador
          </h3>
          <div className="space-y-5">
            {FEATURES.map((feat, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0">
                  <i className={`ph-fill ${feat.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="font-subheading text-brand-blue text-sm uppercase tracking-wide font-bold">
                    {feat.title}
                  </h4>
                  <p className="text-brand-blue/70 text-xs sm:text-sm font-sans mt-1 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Columna 2: Tarifas y garantía */}
      <div className="lg:col-span-5 rounded-[32px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl">
        <div className="p-6 sm:p-8 rounded-[24px] bg-brand-white space-y-6">
          <h3 className="text-xl font-subheading uppercase tracking-wider text-brand-blue border-b border-brand-blue/15 pb-3">
            Envíos LowCost
          </h3>
          <div className="space-y-4 text-xs sm:text-sm text-brand-blue/85 font-sans leading-relaxed">
            <p>
              Entregas en el día si es solicitado antes de <span className="font-mono text-brand-blue font-bold">13hs</span>, o al día siguiente para los solicitados luego de <span className="font-mono text-brand-blue font-bold">13hs</span>.
            </p>

            <div className="bg-brand-yellow/10 border border-brand-yellow/40 rounded-2xl p-4 mt-6">
              <h4 className="font-subheading text-brand-blue text-sm tracking-wider uppercase font-bold flex items-center gap-1.5 mb-1.5">
                <i className="ph-fill ph-shield-check text-brand-blue text-base shrink-0"></i>
                Garantía de Entrega
              </h4>
              <p className="text-xs text-brand-blue/75">
                Tus paquetes viajan seguros. Optimizamos y agrupamos los recorridos diarios para ofrecerte la tarifa más económica del mercado local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

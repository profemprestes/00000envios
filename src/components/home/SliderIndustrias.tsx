'use client';

import React, { useState } from "react";

interface Industry {
  title: string;
  badge: string;
  subtitle: string;
  desc: string;
  icon: string;
  sla: string;
  benefits: string[];
  cta: string;
}

const INDUSTRIES: Industry[] = [
  {
    title: "E-Commerce & Tiendas Online",
    badge: "MÁXIMA VELOCIDAD",
    subtitle: "Envíos Flex Same-Day & Next-Day",
    desc: "Retiramos tus ventas online y las entregamos en la misma jornada en todo Mar del Plata. Integración directa para Mercado Libre Flex y tiendas independientes con reputación garantizada.",
    icon: "ph-shopping-bag",
    sla: "SLA: Entregas en el día",
    benefits: ["Rendición en el acto", "Seguimiento WhatsApp", "Cero suspensiones Flex"],
    cta: "Consultar Plan E-Commerce"
  },
  {
    title: "Repuestos & Talleres Mecánicos",
    badge: "ENTREGA CRÍTICA",
    subtitle: "Cadetería Urgente para el Sector Automotor",
    desc: "Despacho prioritario de autopartes, repuestos y herramientas hacia talleres, concesionarios y lubricentros de la ciudad sin demoras que frenen tus reparaciones.",
    icon: "ph-wrench",
    sla: "SLA: Prioridad Express",
    benefits: ["Hasta 10 kg por moto", "Entregas puerta a puerta", "Cobro contrareembolso"],
    cta: "Cotizar Envío Urgente"
  },
  {
    title: "Moda, Calzado & Indumentaria",
    badge: "LOGÍSTICA INVERSA",
    subtitle: "Showrooms, Locales & E-Shops",
    desc: "Distribución ágil con servicio de logística inversa para cambios de talle y devoluciones sin fricción para tus clientas. Cuidado riguroso del empaque.",
    icon: "ph-t-shirt",
    sla: "SLA: LowCost o Express",
    benefits: ["Gestión de cambios en puerta", "Tarifas agrupadas LowCost", "Bolsas y cajas protegidas"],
    cta: "Ver Tarifas Indumentaria"
  },
  {
    title: "Trámites & Gestiones Corporativas",
    badge: "MÁXIMA SEGURIDAD",
    subtitle: "Cadetería Administrativa y Cobranzas",
    desc: "Gestión segura de contratos, facturas, firmas de documentos y depósitos bancarios o cobros en efectivo con rendición inmediata y comprobante digital.",
    icon: "ph-file-text",
    sla: "SLA: Custodia Certificada",
    benefits: ["Firma en conformidad", "Depósitos bancarios", "Mensajeros de confianza"],
    cta: "Solicitar Cadetería"
  },
  {
    title: "Insumos Médicos & Gastronómicos",
    badge: "PUNTUALIDAD RIGUROSA",
    subtitle: "Envíos Programados para Comercios",
    desc: "Abastecimiento de insumos descartables, ópticas, laboratorios, cafeterías y locales gastronómicos que requieren cumplimiento horario riguroso.",
    icon: "ph-first-aid",
    sla: "SLA: Horarios Programados",
    benefits: ["Franjas pactadas de entrega", "Depósito central Friuli 1972", "Atención personalizada"],
    cta: "Conocer Plan Comercios"
  },
  {
    title: "Encomiendas & Distribución 3PL",
    badge: "LOGÍSTICA INTEGRAL",
    subtitle: "Almacenamiento, Picking y Despacho",
    desc: "Guardamos tu stock en nuestro centro logístico de Chauvín, preparamos tus pedidos apenas entra la venta y despachamos sin que tengas que ocuparte del empaque.",
    icon: "ph-warehouse",
    sla: "SLA: Fulfillment Total",
    benefits: ["Depósito seguro en MDQ", "Picking & Packing pro", "Control de stock diario"],
    cta: "Ver Servicio 3PL"
  }
];

export default function SliderIndustrias() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length);
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % INDUSTRIES.length);
  };

  const current = INDUSTRIES[currentIdx];

  return (
    <section id="slider-industrias" className="py-20 sm:py-28 bg-[#f8fafc] text-brand-blue relative overflow-hidden w-full border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Controles del Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-blue text-brand-yellow shadow-md border border-brand-blue">
              <i className="ph-fill ph-sparkle text-sm text-brand-yellow"></i> LOGÍSTICA A MEDIDA DE TU RUBRO · MDQ 2026
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95] flex flex-col items-start gap-1 text-brand-blue">
              <span>Soluciones Especiales</span>
              <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
                <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                  PARA CADA INDUSTRIA
                </span>
              </span>
            </h2>
            <p className="text-brand-blue/85 font-sans text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
              Adaptamos nuestra flota propia de motos a la dinámica de tu sector comercial. Seleccioná tu rubro y conocé nuestra propuesta operativa.
            </p>
          </div>

          {/* Controles de Navegación */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3">
            <div className="font-mono text-xs font-bold text-brand-blue bg-white px-3.5 py-2 rounded-full border border-brand-blue/30 shadow-sm mr-1">
              <span className="text-brand-blue text-sm font-extrabold">{currentIdx + 1}</span> / {INDUSTRIES.length}
            </div>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Industria anterior"
              className="h-11 w-11 rounded-xl border border-brand-blue/30 bg-white text-brand-blue hover:bg-brand-blue hover:text-brand-yellow flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
            >
              <i className="ph-bold ph-caret-left text-lg"></i>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Siguiente industria"
              className="h-11 w-11 rounded-xl bg-brand-blue text-brand-yellow hover:bg-brand-blue-hover flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md font-bold"
            >
              <i className="ph-bold ph-caret-right text-lg"></i>
            </button>
          </div>
        </div>

        {/* Pestañas Interactivas de Rubros */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" role="tablist">
          {INDUSTRIES.map((ind, idx) => {
            const isActive = idx === currentIdx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                className={`px-4 py-2.5 rounded-full font-subheading text-xs uppercase tracking-wider font-bold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                  isActive
                    ? "bg-brand-blue text-brand-yellow border-brand-blue shadow-md scale-105"
                    : "bg-white text-brand-blue border-brand-blue/25 hover:bg-brand-yellow/20 hover:border-brand-blue shadow-sm"
                }`}
              >
                <i className={`ph-fill ${ind.icon} text-base ${isActive ? "text-brand-yellow" : "text-brand-blue"}`}></i>
                <span>{ind.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Card Principal */}
        <div className="rounded-[32px] p-2 sm:p-3 bg-brand-blue border border-brand-white/20 shadow-2xl">
          <div className="p-6 sm:p-10 lg:p-12 rounded-[24px] bg-[#052c87] border border-brand-white/15 relative overflow-hidden text-brand-white">
            <i className={`ph-fill ${current.icon} absolute right-4 bottom-4 text-[18rem] text-brand-white/[0.04] pointer-events-none transition-all duration-500`}></i>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-brand-yellow text-brand-blue flex items-center justify-center shadow-glow-yellow border-2 border-brand-yellow transition-transform duration-300 hover:scale-105">
                  <i className={`ph-fill ${current.icon} text-5xl sm:text-6xl`}></i>
                </div>
                <div className="px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-brand-white/15 text-brand-yellow border border-brand-white/20 flex items-center gap-2">
                  <i className="ph-fill ph-clock"></i>
                  <span>{current.sla}</span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5 text-left">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue">
                      {current.badge}
                    </span>
                    <span className="text-xs font-subheading uppercase tracking-wider font-bold text-brand-yellow">
                      {current.subtitle}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-none text-brand-white">
                    {current.title}
                  </h3>
                </div>

                <p className="font-sans text-sm sm:text-base lg:text-lg leading-relaxed text-brand-white/90 font-light max-w-2xl">
                  {current.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {current.benefits.map((b, i) => (
                    <div key={i} className="p-3 rounded-xl bg-brand-white/10 border border-brand-white/15 flex items-center gap-2 text-xs font-sans text-brand-white">
                      <i className="ph-fill ph-check-circle text-brand-yellow text-base shrink-0"></i>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/542236602699"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-subheading text-sm uppercase tracking-wider font-bold bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 group"
                  >
                    <span>{current.cta}</span>
                    <span className="w-6 h-6 rounded-full bg-brand-blue/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <i className="ph-bold ph-arrow-right text-xs text-brand-blue"></i>
                    </span>
                  </a>
                  <a href="#contacto" className="font-subheading text-xs sm:text-sm uppercase tracking-wider font-bold text-brand-white/80 hover:text-brand-yellow underline-offset-4 hover:underline py-2 transition-colors">
                    Cuenta Corriente Comercial →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

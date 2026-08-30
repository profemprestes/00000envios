'use client';

import React, { useState } from "react";

type ServiceKey = "express" | "lowcost" | "flex" | "3pl";

interface ServiceData {
  title: string;
  badge: string;
  icon: string;
  summary: string;
  features: string[];
  time: string;
  price: string;
  weight: string;
}

const SERVICES_DATA: Record<ServiceKey, ServiceData> = {
  express: {
    title: "Envíos Express Inmediatos",
    badge: "URGENTE · COBERTURA TOTAL MDQ",
    icon: "ph-lightning",
    summary: "Servicio de mensajería urbana punto a punto en moto. Asignación inmediata de un repartidor exclusivo para documentos, trámites bancarios y encomiendas que no pueden esperar.",
    features: [
      "Tarifa base transparente calculada por distancia.",
      "Entrega garantizada puerta a puerta en tiempo récord (30-90 min).",
      "Notificación automática y rendición por WhatsApp."
    ],
    time: "30-90 min",
    price: "$3.700 Base",
    weight: "Hasta 10 kg"
  },
  lowcost: {
    title: "Envíos LowCost para PyMEs",
    badge: "ECONÓMICO · TODO GRAL. PUEYRREDÓN",
    icon: "ph-tag",
    summary: "La alternativa más rentable para comercios y e-commerce locales. Agrupamos los despachos en franjas horarias diarias fijas para reducir costos sin perder velocidad.",
    features: [
      "Tarifa plana reducida para envíos diarios.",
      "Retiro a domicilio en tu local o taller comercial.",
      "Dos franjas de entrega coordinadas durante el día."
    ],
    time: "En el día",
    price: "$3.000 Base",
    weight: "Hasta 15 kg"
  },
  flex: {
    title: "Mercado Envíos Flex Oficial",
    badge: "OFICIAL MELI · CORTE 15HS",
    icon: "ph-package",
    summary: "Socio logístico habilitado para Mercado Libre Flex en Mar del Plata y Batán. Cumplimiento estricto del SLA para mantener tu medalla de MercadoLíder.",
    features: [
      "Retiros bonificados según volumen diario.",
      "Entregas en el día antes de las 20:00 hs.",
      "Escaneo de etiquetas y sincronización de entregas."
    ],
    time: "Mismo día",
    price: "Tarifa Flex",
    weight: "Apto Moto/Auto"
  },
  '3pl': {
    title: "Logística 3PL & Centro de Distribución",
    badge: "LOGÍSTICA INTEGRAL · FRIULI 1972",
    icon: "ph-warehouse",
    summary: "Guardamos tu stock en nuestro centro logístico de Chauvín, preparamos tus paquetes (picking & packing) apenas se realiza la venta y despachamos de inmediato.",
    features: [
      "Control de inventario diario con trazabilidad digital.",
      "Embalaje y preparación profesional con insumos de alta seguridad.",
      "Despacho Same-Day para ventas por tienda online y redes."
    ],
    time: "Stock 24 hs",
    price: "Planes a Medida",
    weight: "Sin límite"
  }
};

export default function ServicesOverview() {
  const [activeModalKey, setActiveModalKey] = useState<ServiceKey | null>(null);

  const activeService = activeModalKey ? SERVICES_DATA[activeModalKey] : null;

  return (
    <section id="servicios-overview" className="py-20 sm:py-28 bg-brand-blue relative overflow-hidden w-full border-t border-brand-white/15">
      {/* Resplandores ambientales */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-brand-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-brand-white/20 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
              <i className="ph-fill ph-lightning text-sm"></i> NUESTROS SERVICIOS CLAVE
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-brand-white">
              SOLUCIONES LOGÍSTICAS <br />
              <span className="text-brand-yellow underline decoration-brand-white/40 underline-offset-8">A TU MEDIDA</span>
            </h2>
          </div>
        </div>

        {/* Grid de 4 Tarjetas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          {/* SERVICIO 1: EXPRESS */}
          <article className="group relative rounded-[28px] p-6 bg-[#052c87]/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow/60">
            <i className="ph-fill ph-lightning absolute -right-6 -bottom-6 text-[13rem] text-brand-white/[0.04] pointer-events-none group-hover:scale-105 transition-transform duration-500"></i>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-md">
                  <i className="ph-fill ph-lightning text-2xl"></i>
                </div>
                <span className="text-[10px] font-bold font-mono tracking-widest px-3 py-1 rounded-full uppercase bg-brand-yellow text-brand-blue border border-brand-yellow">
                  URGENTE
                </span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono font-bold text-brand-yellow uppercase tracking-wider block">COBERTURA TOTAL MDQ</span>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none text-brand-white group-hover:text-brand-yellow transition-colors mt-1">
                  ENVÍOS EXPRESS
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-white/85 font-light">
                Mensajería urbana inmediata con repartidor exclusivo asignado para trámites, encomiendas y despacho prioritario.
              </p>
            </div>

            <div className="relative z-10 pt-4 space-y-4">
              <div className="grid grid-cols-3 gap-1.5 p-2 bg-brand-white/10 rounded-2xl border border-brand-white/15 text-center">
                <div className="p-1">
                  <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">30-90 min</div>
                  <div className="font-mono text-[9px] text-brand-white/70">TIEMPO</div>
                </div>
                <div className="p-1 border-x border-brand-white/15">
                  <div className="font-subheading text-xs font-bold text-brand-white uppercase">$3.700</div>
                  <div className="font-mono text-[9px] text-brand-white/70">BASE</div>
                </div>
                <div className="p-1">
                  <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">10 kg</div>
                  <div className="font-mono text-[9px] text-brand-white/70">MÁXIMO</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalKey("express")}
                className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-full bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 group/btn"
              >
                <span>Ficha Técnica</span>
                <span className="w-6 h-6 rounded-full bg-brand-blue/15 flex items-center justify-center shrink-0 ml-1 group-hover/btn:translate-x-1 transition-transform">
                  <i className="ph-bold ph-arrow-right text-xs text-brand-blue"></i>
                </span>
              </button>
            </div>
          </article>

          {/* SERVICIO 2: LOWCOST */}
          <article className="group relative rounded-[28px] p-6 bg-[#052c87]/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow/60">
            <i className="ph-fill ph-tag absolute -right-6 -bottom-6 text-[13rem] text-brand-white/[0.04] pointer-events-none group-hover:scale-105 transition-transform duration-500"></i>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-brand-white/20 text-brand-yellow rounded-xl shadow-md border border-brand-white/20">
                  <i className="ph-fill ph-tag text-2xl"></i>
                </div>
                <span className="text-[10px] font-bold font-mono tracking-widest px-3 py-1 rounded-full uppercase bg-brand-white/15 text-brand-white border border-brand-white/30">
                  ECONÓMICO
                </span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono font-bold text-brand-yellow uppercase tracking-wider block">GRAL. PUEYRREDÓN</span>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none text-brand-white group-hover:text-brand-yellow transition-colors mt-1">
                  ENVÍOS LOWCOST
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-white/85 font-light">
                Envíos agrupados en rutas inteligentes diarias para PyMEs y comercios con la tarifa más competitiva de la ciudad.
              </p>
            </div>

            <div className="relative z-10 pt-4 space-y-4">
              <div className="grid grid-cols-3 gap-1.5 p-2 bg-brand-white/10 rounded-2xl border border-brand-white/15 text-center">
                <div className="p-1">
                  <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">En el día</div>
                  <div className="font-mono text-[9px] text-brand-white/70">TIEMPO</div>
                </div>
                <div className="p-1 border-x border-brand-white/15">
                  <div className="font-subheading text-xs font-bold text-brand-white uppercase">$3.000</div>
                  <div className="font-mono text-[9px] text-brand-white/70">BASE</div>
                </div>
                <div className="p-1">
                  <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">15 kg</div>
                  <div className="font-mono text-[9px] text-brand-white/70">MÁXIMO</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalKey("lowcost")}
                className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-full bg-brand-white/15 text-brand-white hover:bg-brand-yellow hover:text-brand-blue border border-brand-white/20 transition-all duration-300 group/btn"
              >
                <span>Ficha Técnica</span>
                <span className="w-6 h-6 rounded-full bg-brand-white/20 group-hover/btn:bg-brand-blue/15 flex items-center justify-center shrink-0 ml-1 group-hover/btn:translate-x-1 transition-transform">
                  <i className="ph-bold ph-arrow-right text-xs"></i>
                </span>
              </button>
            </div>
          </article>

          {/* SERVICIO 3: FLEX */}
          <article className="group relative rounded-[28px] p-6 bg-[#052c87]/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow/60">
            <i className="ph-fill ph-package absolute -right-6 -bottom-6 text-[13rem] text-brand-white/[0.04] pointer-events-none group-hover:scale-105 transition-transform duration-500"></i>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-brand-yellow text-brand-blue rounded-xl shadow-md">
                  <i className="ph-fill ph-package text-2xl"></i>
                </div>
                <span className="text-[10px] font-bold font-mono tracking-widest px-3 py-1 rounded-full uppercase bg-brand-yellow text-brand-blue border border-brand-yellow">
                  OFICIAL MELI
                </span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono font-bold text-brand-yellow uppercase tracking-wider block">CORTE EXTENDIDO 15HS</span>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none text-brand-white group-hover:text-brand-yellow transition-colors mt-1">
                  MERCADO FLEX
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-white/85 font-light">
                Socio logístico homologado para tus ventas con entrega Same-Day. Retiro bonificado en tu local y reputación blindada.
              </p>
            </div>

            <div className="relative z-10 pt-4 space-y-4">
              <div className="grid grid-cols-3 gap-1.5 p-2 bg-brand-white/10 rounded-2xl border border-brand-white/15 text-center">
                <div className="p-1">
                  <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">Mismo día</div>
                  <div className="font-mono text-[9px] text-brand-white/70">TIEMPO</div>
                </div>
                <div className="p-1 border-x border-brand-white/15">
                  <div className="font-subheading text-xs font-bold text-brand-white uppercase">Flex</div>
                  <div className="font-mono text-[9px] text-brand-white/70">OFICIAL</div>
                </div>
                <div className="p-1">
                  <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">Flota</div>
                  <div className="font-mono text-[9px] text-brand-white/70">MOTO/AUTO</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalKey("flex")}
                className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-full bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 group/btn"
              >
                <span>Ficha Técnica</span>
                <span className="w-6 h-6 rounded-full bg-brand-blue/15 flex items-center justify-center shrink-0 ml-1 group-hover/btn:translate-x-1 transition-transform">
                  <i className="ph-bold ph-arrow-right text-xs text-brand-blue"></i>
                </span>
              </button>
            </div>
          </article>

          {/* SERVICIO 4: 3PL */}
          <article className="group relative rounded-[28px] p-6 bg-[#052c87]/90 border border-brand-white/20 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow/60">
            <i className="ph-fill ph-warehouse absolute -right-6 -bottom-6 text-[13rem] text-brand-white/[0.04] pointer-events-none group-hover:scale-105 transition-transform duration-500"></i>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-brand-white/20 text-brand-yellow rounded-xl shadow-md border border-brand-white/20">
                  <i className="ph-fill ph-warehouse text-2xl"></i>
                </div>
                <span className="text-[10px] font-bold font-mono tracking-widest px-3 py-1 rounded-full uppercase bg-brand-white/15 text-brand-white border border-brand-white/30">
                  FULFILLMENT
                </span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono font-bold text-brand-yellow uppercase tracking-wider block">DEPÓSITO FRIULI 1972</span>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none text-brand-white group-hover:text-brand-yellow transition-colors mt-1">
                  LOGÍSTICA 3PL
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-white/85 font-light">
                Almacenamiento de mercadería, picking con código de barras, empaque seguro y distribución integral para marcas.
              </p>
            </div>

            <div className="relative z-10 pt-4 space-y-4">
              <div className="grid grid-cols-3 gap-1.5 p-2 bg-brand-white/10 rounded-2xl border border-brand-white/15 text-center">
                <div className="p-1">
                  <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">24 hs</div>
                  <div className="font-mono text-[9px] text-brand-white/70">STOCK</div>
                </div>
                <div className="p-1 border-x border-brand-white/15">
                  <div className="font-subheading text-xs font-bold text-brand-white uppercase">A Medida</div>
                  <div className="font-mono text-[9px] text-brand-white/70">PLANES</div>
                </div>
                <div className="p-1">
                  <div className="font-subheading text-xs font-bold text-brand-yellow uppercase">Seguro</div>
                  <div className="font-mono text-[9px] text-brand-white/70">CUSTODIA</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalKey("3pl")}
                className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-full bg-brand-white/15 text-brand-white hover:bg-brand-yellow hover:text-brand-blue border border-brand-white/20 transition-all duration-300 group/btn"
              >
                <span>Ficha Técnica</span>
                <span className="w-6 h-6 rounded-full bg-brand-white/20 group-hover/btn:bg-brand-blue/15 flex items-center justify-center shrink-0 ml-1 group-hover/btn:translate-x-1 transition-transform">
                  <i className="ph-bold ph-arrow-right text-xs"></i>
                </span>
              </button>
            </div>
          </article>

        </div>
      </div>

      {/* MODAL INTERACTIVO DE FICHA TÉCNICA */}
      {activeService && (
        <div
          className="fixed inset-0 z-50 bg-[#02184d]/85 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalKey(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-brand-blue border border-brand-white/25 rounded-3xl shadow-2xl p-6 sm:p-8 text-brand-white space-y-6 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              type="button"
              onClick={() => setActiveModalKey(null)}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-white/15 hover:bg-brand-yellow hover:text-brand-blue transition-colors"
            >
              <i className="ph-bold ph-x text-lg"></i>
            </button>

            {/* Encabezado del Modal */}
            <div className="flex items-center gap-4 text-left">
              <div className="p-3.5 bg-brand-yellow text-brand-blue rounded-2xl shadow-md text-2xl">
                <i className={`ph-fill ${activeService.icon}`}></i>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-yellow uppercase tracking-widest block">
                  {activeService.badge}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-brand-white">
                  {activeService.title}
                </h3>
              </div>
            </div>

            {/* Resumen y Beneficios */}
            <div className="p-5 bg-brand-white/10 rounded-2xl border border-brand-white/15 space-y-4 text-left">
              <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-white/90 font-light">
                {activeService.summary}
              </p>
              <div className="space-y-2 pt-2 border-t border-brand-white/15">
                <span className="text-xs font-subheading font-bold uppercase text-brand-yellow tracking-wider block">
                  Beneficios Operativos:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-white/90">
                  {activeService.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i className="ph-fill ph-check-circle text-brand-yellow text-base shrink-0 mt-0.5"></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fila de Estadísticas */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-brand-white/10 border border-brand-white/20 p-3 rounded-xl">
                <span className="text-lg font-bold font-subheading text-brand-yellow block truncate">
                  {activeService.time}
                </span>
                <span className="text-[10px] text-brand-white/70 font-mono uppercase tracking-wider">Tiempos</span>
              </div>
              <div className="bg-brand-white/10 border border-brand-white/20 p-3 rounded-xl">
                <span className="text-lg font-bold font-subheading text-brand-white block truncate">
                  {activeService.price}
                </span>
                <span className="text-[10px] text-brand-white/70 font-mono uppercase tracking-wider">Tarifa</span>
              </div>
              <div className="bg-brand-white/10 border border-brand-white/20 p-3 rounded-xl">
                <span className="text-lg font-bold font-subheading text-brand-yellow block truncate">
                  {activeService.weight}
                </span>
                <span className="text-[10px] text-brand-white/70 font-mono uppercase tracking-wider">Capacidad</span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="pt-2 flex justify-between items-center gap-4">
              <button
                type="button"
                onClick={() => setActiveModalKey(null)}
                className="text-xs text-brand-white/70 hover:text-brand-white underline uppercase font-bold tracking-wider"
              >
                Volver
              </button>
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-6 py-3 text-xs bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all"
              >
                <span>Cotizar por WhatsApp</span>
                <i className="ph ph-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

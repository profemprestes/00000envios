'use client';

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const LOCAL_BRANDS = [
  "TOY PIOLA JUGUETERÍA",
  "AMA & POLA",
  "DROPIX 3D",
  "EL CÓNDOR",
  "STARCEL",
  "URBANCOW",
  "CATALINA INDUMENTARIA",
  "ENVASES 3G"
];

export default function EmprendedoresHome() {
  return (
    <section id="emprendedores-mdq" className="py-20 sm:py-28 bg-brand-blue relative overflow-hidden w-full border-t border-brand-white/15">
      {/* Resplandores ambientales */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-white/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header de Sección Editorial */}
        <Reveal className="max-w-4xl mb-16 space-y-4 text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
            <i className="ph-fill ph-storefront text-sm"></i> SOCIO ESTRATÉGICO LOCAL
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9] text-brand-white">
            POTENCIAMOS TU <span className="inline-block px-4 py-1 bg-brand-yellow text-brand-blue rounded-2xl mx-1 transform -rotate-1 font-display font-black shadow-glow-yellow">MARCA</span> EN MAR DEL PLATA
          </h2>

          <p className="text-brand-white/90 font-sans text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            Si vendés online o en showroom, necesitás un socio logístico que responda al toque. Creamos soluciones a medida con tarifas transparentes y recolección programada a domicilio.
          </p>

          <div className="h-1 w-20 bg-brand-yellow rounded-full mt-4"></div>
        </Reveal>

        {/* Asymmetric Bento Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Bento Card 1: Logística E-Commerce (7 cols) */}
          <Reveal delay={0} className="lg:col-span-7 rounded-[32px] p-2 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-[24px] bg-brand-blue border border-brand-white/15 h-full flex flex-col justify-between space-y-6 relative overflow-hidden">
              <i className="ph-fill ph-shopping-bag absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.03] pointer-events-none"></i>
              
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-yellow text-brand-blue rounded-2xl shadow-glow-yellow">
                    <i className="ph-fill ph-shopping-bag text-2xl"></i>
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest bg-brand-yellow text-brand-blue px-3 py-1.5 rounded-lg uppercase">
                    PLAN PYMES & TIENDAS
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-white">
                      Logística para Tiendas Online
                    </h3>
                    <p className="text-brand-white/85 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      Gestión de última milla pensada para emprendimientos y comercios en expansión. Optimizamos tus costos de envío con retiros pactados y atención directa.
                    </p>
                  </div>
                  <div className="hidden sm:flex shrink-0 w-24 h-24 items-center justify-center">
                    <img
                      src="/recursos_envios/moto_envios_3d.png"
                      alt="Moto Envíos 3D"
                      className="w-full h-full object-contain filter drop-shadow-xl transform hover:scale-110 transition-transform"
                    />
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-brand-white">
                    <i className="ph-fill ph-shield-check text-brand-yellow text-base shrink-0 mt-0.5"></i>
                    <span>Soporte operativo y comercial dedicado vía WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-brand-white">
                    <i className="ph-fill ph-shield-check text-brand-yellow text-base shrink-0 mt-0.5"></i>
                    <span>Entregas con cobro contrareembolso y rendición en el día.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-brand-white">
                    <i className="ph-fill ph-shield-check text-brand-yellow text-base shrink-0 mt-0.5"></i>
                    <span>Rastreo transparente de pedidos para tus clientes.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-brand-white/15 relative z-10 flex justify-end">
                <a
                  href="https://wa.me/542236602699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-6 py-3 text-xs bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all group"
                >
                  <span>Solicitar Plan PyME</span>
                  <span className="w-5 h-5 rounded-full bg-brand-blue/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <i className="ph-bold ph-arrow-right text-xs"></i>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Bento Card 2: Corporativo & Cuenta Corriente (5 cols) */}
          <Reveal delay={0.1} className="lg:col-span-5 rounded-[32px] p-2 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-[24px] bg-brand-blue border border-brand-white/15 h-full flex flex-col justify-between space-y-6 relative overflow-hidden">
              <i className="ph-fill ph-buildings absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.03] pointer-events-none"></i>
              
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-white/20 text-brand-yellow rounded-2xl shadow-md border border-brand-white/20">
                    <i className="ph-fill ph-buildings text-2xl"></i>
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest bg-brand-white/15 text-brand-white px-3 py-1.5 rounded-lg uppercase border border-brand-white/20">
                    CORPORATIVO
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-brand-white">
                    Cuentas Comerciales
                  </h3>
                  <p className="text-brand-white/85 text-xs sm:text-sm leading-relaxed font-sans font-light">
                    Facturación mensual unificada, ruteos prioritarios y convenios especiales para distribuidoras, fábricas y empresas con volumen recurrente.
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-brand-white">
                    <i className="ph-fill ph-check-circle text-brand-yellow text-base shrink-0 mt-0.5"></i>
                    <span>Facturas A / B con liquidación quincenal o mensual.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-brand-white">
                    <i className="ph-fill ph-check-circle text-brand-yellow text-base shrink-0 mt-0.5"></i>
                    <span>Canal de despacho directo y prioritario en base central.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-brand-white/15 relative z-10 flex justify-end">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-6 py-3 text-xs bg-brand-white/15 text-brand-white hover:bg-brand-yellow hover:text-brand-blue border border-brand-white/20 transition-all group"
                >
                  <span>Abrir Cuenta Comercial</span>
                  <span className="w-5 h-5 rounded-full bg-brand-white/20 group-hover:bg-brand-blue/15 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <i className="ph-bold ph-arrow-right text-xs"></i>
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Marquee de Marcas y Comercios Locales */}
        <div className="mt-20 pt-12 border-t border-brand-white/20">
          <p className="text-center font-subheading text-xs uppercase tracking-widest text-brand-yellow mb-8">
            Marcas y comercios locales que confían en nuestra logística
          </p>

          <div className="relative w-full overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-14 w-max animate-logos-scroll">
              {[0, 1].map((rep) => (
                <div key={rep} className="flex gap-14 items-center shrink-0" aria-hidden={rep === 1}>
                  {LOCAL_BRANDS.map((brand, i) => (
                    <span key={i} className="font-display text-2xl tracking-wider text-brand-white/80 uppercase hover:text-brand-yellow transition-colors whitespace-nowrap">
                      {brand}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

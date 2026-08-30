'use client';

import React from "react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contacto"
      className="bg-brand-blue text-brand-white border-t border-brand-white/20 relative overflow-hidden w-full"
    >
      <div className="h-1.5 bg-brand-yellow w-full shadow-md"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 relative z-10">

        {/* Columnas Principales del Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 items-start">

          {/* Identidad */}
          <div className="lg:col-span-5 space-y-5">
            <Link className="flex items-center gap-3 group w-fit focus:outline-none" href="#hero-animado">
              <div className="relative w-11 h-11 bg-brand-yellow p-1 rounded-xl border border-brand-yellow shrink-0 flex items-center justify-center overflow-hidden shadow-glow-yellow">
                <span className="font-display font-black text-2xl text-brand-blue leading-none">2R</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl sm:text-3xl tracking-tight uppercase text-brand-white">
                  Envíos <span className="text-brand-yellow">DosRuedas</span>
                </span>
                <span className="text-[10px] font-mono text-brand-white/80 tracking-widest uppercase mt-0.5">
                  Tu solución confiable · Mar del Plata
                </span>
              </div>
            </Link>

            <p className="text-brand-white/90 text-sm leading-relaxed max-w-sm font-light">
              Con más de 7 años de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para comercios con flota propia y compromiso humano.
            </p>

            <div className="space-y-2 pt-2">
              <span className="block text-xs font-bold text-brand-yellow uppercase tracking-widest font-subheading">
                Canales Oficiales
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="h-9 w-9 rounded-xl bg-brand-white/15 hover:bg-brand-yellow text-brand-white hover:text-brand-blue flex items-center justify-center transition-all border border-brand-white/20"
                  title="Instagram"
                  aria-label="Instagram Oficial"
                  href="https://www.instagram.com/enviosdosruedas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-fill ph-instagram-logo text-lg"></i>
                </a>
                <a
                  className="h-9 w-9 rounded-xl bg-brand-white/15 hover:bg-brand-yellow text-brand-white hover:text-brand-blue flex items-center justify-center transition-all border border-brand-white/20"
                  title="Facebook"
                  aria-label="Facebook Oficial"
                  href="https://www.facebook.com/enviosdosruedas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-fill ph-facebook-logo text-lg"></i>
                </a>
                <a
                  className="h-9 w-9 rounded-xl bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue flex items-center justify-center transition-all"
                  title="WhatsApp Directo"
                  aria-label="WhatsApp Directo"
                  href="https://wa.me/542236602699"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-fill ph-whatsapp-logo text-lg"></i>
                </a>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-white/15 border border-brand-white/20 text-xs text-brand-white font-mono">
                  <i className="ph-fill ph-shield-check text-brand-yellow"></i>
                  <span>Partner 3PL Verificado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-subheading text-lg tracking-wider text-brand-yellow uppercase border-b border-brand-white/20 pb-2 font-bold">
              Servicios y Soluciones
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link
                  className="text-brand-white hover:text-brand-yellow flex items-center justify-between group transition-all duration-200"
                  href="#servicios-overview"
                >
                  <div className="flex items-center gap-2">
                    <i className="ph-fill ph-lightning text-brand-yellow"></i>
                    <span>Envíos Express Inmediatos</span>
                  </div>
                  <i className="ph ph-caret-right text-xs opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="text-brand-white hover:text-brand-yellow flex items-center justify-between group transition-all duration-200"
                  href="#servicios-overview"
                >
                  <div className="flex items-center gap-2">
                    <i className="ph-fill ph-tag text-brand-yellow"></i>
                    <span>Envíos LowCost Diarios</span>
                  </div>
                  <i className="ph ph-caret-right text-xs opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="text-brand-white hover:text-brand-yellow flex items-center justify-between group transition-all duration-200"
                  href="#servicios-overview"
                >
                  <div className="flex items-center gap-2">
                    <i className="ph-fill ph-package text-brand-yellow"></i>
                    <span>Mercado Envíos Flex</span>
                  </div>
                  <i className="ph ph-caret-right text-xs opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="text-brand-white hover:text-brand-yellow flex items-center justify-between group transition-all duration-200"
                  href="#servicios-overview"
                >
                  <div className="flex items-center gap-2">
                    <i className="ph-fill ph-warehouse text-brand-yellow"></i>
                    <span>E-Commerce & Logística 3PL</span>
                  </div>
                  <i className="ph ph-caret-right text-xs opacity-0 group-hover:opacity-100 transition-opacity text-brand-yellow"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Base Central y Horarios */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-subheading text-lg tracking-wider text-brand-yellow uppercase border-b border-brand-white/20 pb-2 font-bold">
              Base de Operaciones MDQ
            </h4>

            <div className="space-y-3 text-xs text-brand-white font-sans">
              <div className="flex gap-3 items-start bg-brand-white/10 p-3 rounded-xl border border-brand-white/20">
                <div className="p-1.5 bg-brand-white/20 rounded-lg shrink-0 text-brand-yellow">
                  <i className="ph-fill ph-map-pin text-base"></i>
                </div>
                <div>
                  <p className="font-bold text-brand-white uppercase font-subheading tracking-wider">Centro de Distribución</p>
                  <p className="text-[13px] text-brand-white/90 mt-0.5">Friuli 1972, Mar del Plata</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-brand-white/10 p-3 rounded-xl border border-brand-white/20">
                <div className="p-1.5 bg-brand-white/20 rounded-lg shrink-0 text-brand-yellow">
                  <i className="ph-fill ph-phone text-base"></i>
                </div>
                <div>
                  <p className="font-bold text-brand-white uppercase font-subheading tracking-wider">Línea Directa y WhatsApp</p>
                  <a href="tel:+542236602699" className="font-mono text-[13px] font-bold text-brand-yellow hover:underline block mt-0.5">
                    +54 223 660-2699
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-brand-white/10 p-3 rounded-xl border border-brand-white/20">
                <div className="p-1.5 bg-brand-white/20 rounded-lg shrink-0 text-brand-yellow">
                  <i className="ph-fill ph-clock text-base"></i>
                </div>
                <div className="w-full space-y-1">
                  <p className="font-bold text-white uppercase font-subheading tracking-wider">Horarios de Despacho</p>
                  <div className="text-[12px] space-y-0.5">
                    <div className="flex justify-between items-center">
                      <span>Lunes a Viernes:</span>
                      <span className="font-mono font-bold text-brand-yellow">09:00 - 18:00 hs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sábados:</span>
                      <span className="font-mono font-bold text-brand-yellow">10:00 - 15:00 hs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divisor con Botón Volver Arriba */}
        <div className="border-t border-brand-white/20 my-8 relative">
          <button
            type="button"
            onClick={scrollToTop}
            className="absolute -top-4 right-4 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue p-2 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Volver al inicio"
            aria-label="Volver arriba"
          >
            <i className="ph-bold ph-arrow-up text-sm"></i>
          </button>
        </div>

        {/* Copyright & Legales */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-white/80 font-sans">
          <p>© 2026 Envíos DosRuedas · Mar del Plata, Argentina.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link className="hover:text-brand-yellow transition-colors" href="#hero-animado">Inicio</Link>
            <Link className="hover:text-brand-yellow transition-colors" href="#servicios-overview">Servicios</Link>
            <Link className="hover:text-brand-yellow transition-colors" href="#carrusel-redes">Comunidad</Link>
            <Link className="hover:text-brand-yellow transition-colors" href="#contacto">Contacto</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

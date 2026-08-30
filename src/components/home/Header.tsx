'use client';

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 bg-brand-blue/95 backdrop-blur-md py-3.5 border-b border-brand-white/20 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logotipo Oficial */}
          <Link
            href="#hero-animado"
            className="flex items-center gap-3 group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          >
            <div className="relative w-11 h-11 shrink-0 bg-brand-blue border border-brand-yellow rounded-xl p-1 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shadow-glow-yellow">
              <img
                src="/logo.webp"
                alt="Logo Envíos DosRuedas"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                  (e.target as HTMLElement).parentElement!.innerHTML = '<span class="font-display font-black text-2xl text-brand-yellow leading-none">2R</span>';
                }}
              />
            </div>

            <span className="font-display text-2xl sm:text-3xl tracking-tight leading-none uppercase flex flex-row items-center gap-1.5">
              <span className="text-brand-white">Envíos</span>
              <span className="text-brand-yellow">DosRuedas</span>
            </span>
          </Link>

          {/* Menú Desktop */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            <Link
              href="#hero-animado"
              className="px-3.5 py-2 text-base font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 text-brand-yellow bg-brand-white/10 hover:bg-brand-white/20"
            >
              <i className="ph-fill ph-house text-brand-yellow text-lg"></i>
              Inicio
            </Link>

            {/* Dropdown Servicios */}
            <div className="relative dropdown-container" ref={servicesRef}>
              <button
                type="button"
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setAboutOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className="px-3.5 py-2 text-base font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 text-brand-white hover:text-brand-yellow hover:bg-brand-white/10"
              >
                <i className="ph-fill ph-motorcycle text-brand-yellow text-lg"></i>
                Servicios
                <i className={`ph ph-caret-down dropdown-arrow text-xs transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}></i>
              </button>

              {servicesOpen && (
                <div
                  className="dropdown-panel show-state absolute top-full left-0 mt-2 w-72 bg-brand-blue border border-brand-white/25 rounded-2xl shadow-2xl p-2 z-50"
                >
                  <Link
                    href="#servicios-overview"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-white/15 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-brand-yellow text-brand-blue">
                      <i className="ph-fill ph-lightning text-lg"></i>
                    </div>
                    <div>
                      <div className="font-subheading uppercase text-brand-white group-hover:text-brand-yellow text-sm">
                        Envíos Express
                      </div>
                      <div className="font-sans text-xs text-brand-white/80">Entregas en 30-90 min</div>
                    </div>
                  </Link>

                  <Link
                    href="#servicios-overview"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-white/15 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-brand-white/20 text-brand-white">
                      <i className="ph-fill ph-tag text-lg"></i>
                    </div>
                    <div>
                      <div className="font-subheading uppercase text-brand-white group-hover:text-brand-yellow text-sm">
                        Envíos LowCost
                      </div>
                      <div className="font-sans text-xs text-brand-white/80">Envíos en el día para PyMEs</div>
                    </div>
                  </Link>

                  <Link
                    href="#servicios-overview"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-white/15 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-brand-yellow text-brand-blue">
                      <i className="ph-fill ph-package text-lg"></i>
                    </div>
                    <div>
                      <div className="font-subheading uppercase text-brand-white group-hover:text-brand-yellow text-sm">
                        MercadoLibre Flex
                      </div>
                      <div className="font-sans text-xs text-brand-white/80">Socio logístico oficial</div>
                    </div>
                  </Link>

                  <Link
                    href="#servicios-overview"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-white/15 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-brand-white/20 text-brand-yellow">
                      <i className="ph-fill ph-warehouse text-lg"></i>
                    </div>
                    <div>
                      <div className="font-subheading uppercase text-brand-white group-hover:text-brand-yellow text-sm">
                        3PL & Depósito
                      </div>
                      <div className="font-sans text-xs text-brand-white/80">Picking, packing y guarda</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown Nosotros */}
            <div className="relative dropdown-container" ref={aboutRef}>
              <button
                type="button"
                onClick={() => {
                  setAboutOpen(!aboutOpen);
                  setServicesOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                className="px-3.5 py-2 text-base font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 text-brand-white hover:text-brand-yellow hover:bg-brand-white/10"
              >
                <i className="ph-fill ph-info text-brand-yellow text-lg"></i>
                Nosotros
                <i className={`ph ph-caret-down dropdown-arrow text-xs transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}></i>
              </button>

              {aboutOpen && (
                <div
                  className="dropdown-panel show-state absolute top-full left-0 mt-2 w-64 bg-brand-blue border border-brand-white/25 rounded-2xl shadow-2xl p-2 z-50"
                >
                  <Link
                    href="#vision-mar-del-plata"
                    onClick={() => setAboutOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-white/15 transition-colors group"
                  >
                    <i className="ph-fill ph-shield-check text-xl text-brand-yellow"></i>
                    <div>
                      <div className="font-subheading uppercase text-brand-white group-hover:text-brand-yellow text-sm">
                        Nuestra Flota
                      </div>
                      <div className="font-sans text-xs text-brand-white/80">100% propia en MDQ</div>
                    </div>
                  </Link>

                  <Link
                    href="#carrusel-redes"
                    onClick={() => setAboutOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-white/15 transition-colors group"
                  >
                    <i className="ph-fill ph-star text-xl text-brand-yellow"></i>
                    <div>
                      <div className="font-subheading uppercase text-brand-white group-hover:text-brand-yellow text-sm">
                        Comunidad MDQ
                      </div>
                      <div className="font-sans text-xs text-brand-white/80">Redes y reputación</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#contacto"
              className="px-3.5 py-2 text-base font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 text-brand-white hover:text-brand-yellow hover:bg-brand-white/10"
            >
              <i className="ph-fill ph-envelope text-brand-yellow text-lg"></i>
              Contacto
            </Link>
          </nav>

          {/* CTA Directo Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+542236602699"
              className="flex items-center gap-2 text-brand-white hover:text-brand-yellow transition-colors font-mono text-xs font-semibold"
            >
              <i className="ph-fill ph-phone text-brand-yellow text-base"></i>
              223 660-2699
            </a>

            <a
              href="https://wa.me/542236602699"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full font-subheading uppercase tracking-wider font-bold px-5 py-2.5 text-xs bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300"
            >
              <span>Cotizá tu envío</span>
              <span className="w-6 h-6 rounded-full flex items-center justify-center bg-brand-blue/15 text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-yellow transition-all">
                <i className="ph ph-arrow-right text-xs"></i>
              </span>
            </a>
          </div>

          {/* Botones Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+542236602699"
              className="p-2 rounded-xl bg-brand-white/15 text-brand-yellow hover:bg-brand-white/25 active:scale-95 transition-all"
              aria-label="Llamar por teléfono"
            >
              <i className="ph-fill ph-phone text-xl"></i>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-brand-white/15 text-brand-white hover:text-brand-yellow active:scale-95 transition-all"
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
            >
              <i className={`ph ${mobileMenuOpen ? "ph-x" : "ph-list"} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Menú Desplegable Mobile */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="menu-open lg:hidden border-t border-brand-white/20 bg-brand-blue mt-3 pt-3 rounded-2xl px-3 space-y-2 shadow-2xl"
          >
            <Link
              href="#hero-animado"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl font-subheading text-base uppercase text-brand-yellow bg-brand-white/15"
            >
              <i className="ph-fill ph-house text-lg"></i>
              Inicio
            </Link>

            <div className="space-y-1 pl-2 border-l border-brand-white/20 my-1">
              <p className="font-subheading text-xs uppercase text-brand-yellow px-2 pt-1 tracking-wider">
                Servicios principales
              </p>
              <Link
                href="#servicios-overview"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 px-3 rounded-lg font-sans text-sm text-brand-white hover:bg-brand-white/15"
              >
                <i className="ph-fill ph-lightning text-brand-yellow"></i> Envíos Express
              </Link>
              <Link
                href="#servicios-overview"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 px-3 rounded-lg font-sans text-sm text-brand-white hover:bg-brand-white/15"
              >
                <i className="ph-fill ph-tag text-brand-yellow"></i> Envíos LowCost
              </Link>
              <Link
                href="#servicios-overview"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 px-3 rounded-lg font-sans text-sm text-brand-white hover:bg-brand-white/15"
              >
                <i className="ph-fill ph-package text-brand-yellow"></i> Mercado Envíos Flex
              </Link>
              <Link
                href="#servicios-overview"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 px-3 rounded-lg font-sans text-sm text-brand-white hover:bg-brand-white/15"
              >
                <i className="ph-fill ph-warehouse text-brand-yellow"></i> Logística 3PL
              </Link>
            </div>

            <Link
              href="#slider-industrias"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl font-subheading text-sm uppercase text-brand-white hover:bg-brand-white/15"
            >
              <i className="ph-fill ph-buildings text-brand-yellow text-lg"></i> Industrias
            </Link>

            <Link
              href="#emprendedores-mdq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl font-subheading text-sm uppercase text-brand-white hover:bg-brand-white/15"
            >
              <i className="ph-fill ph-storefront text-brand-yellow text-lg"></i> PyMEs
            </Link>

            <Link
              href="#carrusel-redes"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl font-subheading text-sm uppercase text-brand-white hover:bg-brand-white/15"
            >
              <i className="ph-fill ph-users-three text-brand-yellow text-lg"></i> Comunidad Digital
            </Link>

            <Link
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-2.5 px-3 rounded-xl font-subheading text-sm uppercase text-brand-white hover:bg-brand-white/15"
            >
              <i className="ph-fill ph-envelope text-brand-yellow text-lg"></i> Contacto
            </Link>

            <div className="pt-2 pb-2">
              <a
                href="https://wa.me/542236602699"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-yellow text-brand-blue font-subheading uppercase tracking-wider text-xs font-bold shadow-lg"
              >
                <i className="ph-fill ph-whatsapp-logo text-xl"></i> Pedir envío por WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

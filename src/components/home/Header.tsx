'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-brand-blue/95 backdrop-blur-md border-b border-white/20"
      suppressHydrationWarning
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        suppressHydrationWarning
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center font-subheading font-bold text-xl shadow-glow-yellow">
            2R
          </div>
          <span className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            ENVÍOS <span className="text-brand-yellow">DOSRUEDAS</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-subheading uppercase tracking-wider text-xs font-bold text-white/90">
          <Link href="#servicios" className="hover:text-brand-yellow transition-colors">Servicios</Link>
          <Link href="#vision-mar-del-plata" className="hover:text-brand-yellow transition-colors">Métricas</Link>
          <Link href="#slider-industrias" className="hover:text-brand-yellow transition-colors">Industrias</Link>
          <Link href="#emprendedores-mdq" className="hover:text-brand-yellow transition-colors">PyMEs</Link>
          <Link href="#carrusel-redes" className="hover:text-brand-yellow transition-colors">Comunidad</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/542236602699"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue font-subheading font-bold uppercase text-xs tracking-wider shadow-glow-yellow transition-all"
          >
            Cotizá Express
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-brand-yellow text-2xl"
          aria-label="Abrir menú"
        >
          <i className={menuOpen ? "ph-bold ph-x" : "ph-bold ph-list"}></i>
        </button>
      </div>
    </header>
  );
}

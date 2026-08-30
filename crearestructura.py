#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script generador de estructura Next.js 15+ App Router para Envíos DosRuedas.
Crea la arquitectura src/, app/, components/, hooks/, lib/, types/ y archivos de configuración
alineados con DESIGN.md y Tailwind CSS v4.
"""

import os
import sys

# Definición de archivos y sus contenidos
FILES = {
    # 1. Next.js Config
    "next.config.ts": """import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
""",

    # 2. TypeScript Next Environment Types
    "next-env.d.ts": """/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.
""",

    # 3. Tailwind CSS Config (Compatibilidad y Tokens Semánticos)
    "tailwind.config.ts": """import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0950F6",
          "blue-dark": "#06349e",
          "blue-deep": "#052c87",
          yellow: "#FFF12E",
          "yellow-hover": "#E8DC24",
          white: "#FFFFFF",
          canvas: "#F8FAFC",
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        subheading: ['"Anton"', "sans-serif"],
        sans: ['"Outfit"', "sans-serif"],
        mono: ['"Geist Mono"', "monospace"],
      },
      boxShadow: {
        "glow-yellow": "0 0 35px rgba(255, 241, 46, 0.45)",
        "glow-wa": "0 0 25px rgba(37, 211, 102, 0.75)",
        "glow-fb": "0 0 25px rgba(24, 119, 242, 0.75)",
        "glow-ig": "0 0 25px rgba(225, 48, 108, 0.75)",
      },
    },
  },
  plugins: [],
};

export default config;
""",

    # 4. ESLint Config Moderno (Flat Config)
    "eslint.config.mjs": """import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
""",

    # 5. README.md
    "README.md": """# Envíos DosRuedas · Web Portal (Next.js 15 App Router)

Plataforma oficial de mensajería, paquetería e-commerce y logística de última milla en Mar del Plata.

## 🚀 Tecnologías
- **Framework**: Next.js 15+ (App Router con Server & Client Components)
- **Lenguaje**: TypeScript (Strict Mode)
- **Estilos**: Tailwind CSS con sistema semántico de diseño bimodal (`DESIGN.md`)
- **Iconos**: Phosphor Icons (`@phosphor-icons/react`)
- **Tipografías**: Bebas Neue, Anton, Outfit, Geist Mono

## 📂 Arquitectura de Directorios
```
src/
├── app/
│   ├── globals.css         # Tokens @theme Tailwind + variables de marca
│   ├── layout.tsx          # Root Layout con metadata y fuentes
│   ├── page.tsx            # Landing Page principal
│   └── loading.tsx         # Boundary de carga
├── components/
│   ├── ui/                 # Componentes atómicos (Botones, Badges, Modales)
│   └── home/               # Secciones de la Landing (Hero, Visión, Servicios, etc.)
├── hooks/                  # Custom React Hooks
├── lib/                    # Utilidades y configuración de clientes
└── types/                  # Tipos TypeScript compartidos
```

## 🛠️ Comandos de Desarrollo
```bash
# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Ejecutar linter
pnpm lint
```
""",

    # 6. Global CSS con @theme Tailwind y variables semánticas
    "src/app/globals.css": """@import "tailwindcss";

@layer base {
  :root {
    --brand-blue: #0950F6;
    --brand-blue-dark: #06349e;
    --brand-blue-deep: #052c87;
    --brand-yellow: #FFF12E;
    --brand-yellow-hover: #E8DC24;
    --brand-white: #FFFFFF;
    --brand-canvas: #F8FAFC;
  }

  body {
    background-color: var(--brand-blue);
    color: var(--brand-white);
    font-family: "Outfit", sans-serif;
    overflow-x: hidden;
    selection-background-color: var(--brand-yellow);
    selection-color: var(--brand-blue);
  }

  ::selection {
    background-color: #FFF12E;
    color: #0950F6;
  }
}

/* Tipografías Utilitarias */
.font-display {
  font-family: "Bebas Neue", sans-serif;
}

.font-subheading {
  font-family: "Anton", sans-serif;
}

.font-sans {
  font-family: "Outfit", sans-serif;
}

.font-mono {
  font-family: "Geist Mono", monospace;
}

/* Sombras Glow */
.shadow-glow-yellow {
  box-shadow: 0 0 35px rgba(255, 241, 46, 0.45);
}

.shadow-glow-wa {
  box-shadow: 0 0 25px rgba(37, 211, 102, 0.75);
}

.shadow-glow-fb {
  box-shadow: 0 0 25px rgba(24, 119, 242, 0.75);
}

.shadow-glow-ig {
  box-shadow: 0 0 25px rgba(225, 48, 108, 0.75);
}
""",

    # 7. Root Layout
    "src/app/layout.tsx": """import type { Metadata } from "next";
import { Bebas_Neue, Anton, Outfit } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Envíos DosRuedas · Mensajería y Logística Mar del Plata",
  description: "Servicio líder de cadetería, e-commerce, logística express y última milla en Mar del Plata.",
  keywords: ["envíos", "mensajería", "logística", "mar del plata", "delivery", "e-commerce"],
  authors: [{ name: "Envíos DosRuedas" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${anton.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css"
        />
      </head>
      <body className="bg-brand-blue text-brand-white antialiased">
        {children}
      </body>
    </html>
  );
}
""",

    # 8. Main Page (Landing)
    "src/app/page.tsx": """import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import VisionSection from "@/components/home/VisionSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import SliderIndustrias from "@/components/home/SliderIndustrias";
import EmprendedoresHome from "@/components/home/EmprendedoresHome";
import CarruselRedes from "@/components/home/CarruselRedes";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      <Header />
      <HeroSection />
      <VisionSection />
      <ServicesOverview />
      <SliderIndustrias />
      <EmprendedoresHome />
      <CarruselRedes />
      <Footer />
    </main>
  );
}
""",

    # 9. Loading Boundary
    "src/app/loading.tsx": """export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-brand-blue">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-brand-yellow/30 border-t-brand-yellow animate-spin" />
        <span className="font-subheading uppercase tracking-widest text-brand-yellow text-sm">
          Cargando Envíos DosRuedas...
        </span>
      </div>
    </div>
  );
}
""",

    # 10. UI Components
    "src/components/ui/Button.tsx": """import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-subheading uppercase font-bold tracking-wider rounded-full transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue shadow-glow-yellow",
    secondary:
      "bg-brand-blue hover:bg-brand-blue-dark text-brand-yellow border border-brand-blue shadow-md",
    outline:
      "bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
""",

    # 11. Home Components (Placeholders funcionales modulares)
    "src/components/home/Header.tsx": """'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-blue/95 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
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
""",

    "src/components/home/HeroSection.tsx": """import React from "react";

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
""",

    "src/components/home/VisionSection.tsx": """import React from "react";

export default function VisionSection() {
  return (
    <section id="vision-mar-del-plata" className="py-20 sm:py-28 bg-[#f8fafc] text-brand-blue border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-blue text-brand-yellow">
            MÉTRICAS & CONFIABILIDAD
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-brand-blue flex flex-wrap items-center justify-center gap-3">
            <span>Conectamos Mar del Plata</span>
            <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
              <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                DE PUNTA A PUNTA
              </span>
            </span>
          </h2>
          <p className="text-brand-blue/85 text-base font-sans">
            Más de 50.000 entregas realizadas con tasa de extravío cero en Mar del Plata y zona.
          </p>
        </div>
      </div>
    </section>
  );
}
""",

    "src/components/home/ServicesOverview.tsx": """import React from "react";

export default function ServicesOverview() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue">
            NUESTRAS SOLUCIONES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white">
            SERVICIOS LOGÍSTICOS A MEDIDA
          </h2>
        </div>
      </div>
    </section>
  );
}
""",

    "src/components/home/SliderIndustrias.tsx": """import React from "react";

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
""",

    "src/components/home/EmprendedoresHome.tsx": """import React from "react";

export default function EmprendedoresHome() {
  return (
    <section id="emprendedores-mdq" className="py-20 sm:py-28 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue">
            PYMES & EMPRENDEDORES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white">
            IMPULSÁ TUS VENTAS ONLINE EN MDQ
          </h2>
        </div>
      </div>
    </section>
  );
}
""",

    "src/components/home/CarruselRedes.tsx": """import React from "react";

export default function CarruselRedes() {
  return (
    <section id="carrusel-redes" className="py-20 sm:py-28 bg-[#f8fafc] text-brand-blue border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-blue text-brand-yellow">
            NUESTRA COMUNIDAD DIGITAL
          </span>
          <h2 className="text-brand-blue text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight flex flex-wrap items-center justify-center gap-3">
            <span>Seguí Nuestro</span>
            <span className="relative inline-block bg-brand-blue px-3 py-1 my-1 transform -rotate-1 rounded-xl border border-brand-yellow/60 shadow-xl">
              <span className="relative z-10 bg-brand-yellow text-brand-blue px-3.5 py-0.5 inline-block font-display font-black rounded-lg">
                MOVIMIENTO
              </span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
""",

    "src/components/home/Footer.tsx": """import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-blue text-white border-t border-white/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-tight text-brand-yellow">
              ENVÍOS DOSRUEDAS
            </h3>
            <p className="text-xs font-sans text-white/80 leading-relaxed">
              Soluciones integrales de logística urbana, mensajería y última milla en Mar del Plata.
            </p>
          </div>
          <div>
            <h4 className="font-subheading uppercase text-sm font-bold tracking-wider text-brand-yellow mb-3">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs font-sans text-white/80">
              <li>Mensajería Express</li>
              <li>Mercado Envíos Flex</li>
              <li>Logística Corporativa</li>
              <li>Cobranzas y Trámites</li>
            </ul>
          </div>
          <div>
            <h4 className="font-subheading uppercase text-sm font-bold tracking-wider text-brand-yellow mb-3">
              Contacto
            </h4>
            <ul className="space-y-2 text-xs font-mono text-white/80">
              <li>WhatsApp: +54 223 660-2699</li>
              <li>Base: Friuli 1972, MDQ</li>
              <li>Horario: Lun a Sáb 8:00 a 20:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-subheading uppercase text-sm font-bold tracking-wider text-brand-yellow mb-3">
              Canales
            </h4>
            <div className="flex gap-3 text-xl text-brand-yellow">
              <a href="https://www.facebook.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="ph-fill ph-facebook-logo"></i>
              </a>
              <a href="https://www.instagram.com/enviosdosruedas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="ph-fill ph-instagram-logo"></i>
              </a>
              <a href="https://wa.me/542236602699" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="ph-fill ph-whatsapp-logo"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs font-mono text-white/60">
          © {new Date().getFullYear()} Envíos DosRuedas · Todos los derechos reservados · Mar del Plata, Argentina.
        </div>
      </div>
    </footer>
  );
}
""",

    # 12. Library / Utils
    "src/lib/utils.ts": """export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
""",

    # 13. TypeScript Types
    "src/types/index.ts": """export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  ctaUrl: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}
""",

    # 14. Custom Hook Sample
    "src/hooks/useScrollSpy.ts": """import { useState, useEffect } from "react";

export function useScrollSpy(elementIds: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (const id of elementIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementIds, offset]);

  return activeId;
}
"""
}

def create_structure():
    print("🚀 Generando estructura de proyecto Next.js 15+ App Router para Envíos DosRuedas...")
    created_count = 0

    for filepath, content in FILES.items():
        # Crear carpetas contenedoras si no existen
        dir_name = os.path.dirname(filepath)
        if dir_name and not os.path.exists(dir_name):
            os.makedirs(dir_name, exist_ok=True)
            print(f"📁 Directorio creado: {dir_name}/")

        # Escribir archivo con codificación UTF-8
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
            print(f"  ✅ Archivo generado: {filepath}")
            created_count += 1

    print(f"\\n✨ ¡Estructura creada exitosamente! ({created_count} archivos generados).")
    print("\\n👉 Siguientes pasos recomendados:")
    print("  1. pnpm add next@latest react@latest react-dom@latest")
    print("  2. pnpm add -D typescript @types/node @types/react @types/react-dom tailwindcss @tailwindcss/postcss postcss autoprefixer eslint eslint-config-next @phosphor-icons/react")
    print("  3. pnpm dev")

if __name__ == "__main__":
    create_structure()

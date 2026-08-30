# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es

Landing page single-page de **Envíos DosRuedas** (mensajería/última milla, Mar del Plata, 2026). Next.js 16 App Router + React 19 + Tailwind v4 + TypeScript 7 + pnpm 11. Sin base de datos, sin API routes, sin tests. Todo el contenido vive en 8 componentes de sección bajo `src/components/home/`.

> El `CLAUDE.md` del workspace padre (`../CLAUDE.md`) también se carga en cada sesión. Sus reglas de paleta (`#0636A5`), tarifas, Prisma, OSRM y tests describen a `00enviosdosruedas/`, **no a este proyecto**. Acá mandan este archivo y `DESIGN.md`.

## Comandos

| Acción | Comando | Estado |
|---|---|---|
| Dev | `pnpm dev` (Turbopack; en Windows si no recarga: `pnpm dev --webpack`) | ✅ |
| Build | `pnpm build` | ✅ |
| Typecheck | `pnpm exec tsc --noEmit` | ✅ verificado |
| Lint | `pnpm lint` | ❌ **roto** — `next lint` no existe en Next 16 y falta `@eslint/eslintrc`. Para arreglar: `pnpm add -D @eslint/eslintrc` y cambiar el script a `"lint": "eslint src"`. |

Sólo `pnpm`. Definition of Done mientras lint esté roto: `pnpm exec tsc --noEmit` + `pnpm build`.

## Arquitectura (lo no obvio)

- **`src/app/page.tsx`** es `'use client'` con gate `isMounted`: en SSR devuelve un `<main>` vacío y recién en cliente monta las secciones. Consecuencia: el HTML servido no tiene contenido (afecta SEO). Es una decisión existente, no la revirtás sin pedirlo.
- **Orden de secciones y alternancia de fondo** (regla de diseño, no la rompas al insertar una sección nueva):
  `Header` → `HeroSection#hero-animado` (azul) → `VisionSection#vision-mar-del-plata` (canvas) → `ServicesOverview#servicios-overview` (azul) → `SliderIndustrias#slider-industrias` (canvas) → `EmprendedoresHome#emprendedores-mdq` (azul) → `CarruselRedes#carrusel-redes` (canvas) → `Footer#contacto` (azul).
- Cada sección es **autocontenida**: `'use client'`, sin props, datos inline (arrays de servicios/industrias/métricas dentro del mismo archivo). No hay estado compartido ni context.
- **Iconos**: Phosphor **Web CSS** importado desde unpkg en `globals.css` → se usan como `<i className="ph-bold ph-truck" />` (pesos: `ph`, `ph-bold`, `ph-fill`). `@phosphor-icons/react` está instalado pero **no se usa**; no mezcles ambos.
- **Fuentes**: `next/font/google` en `layout.tsx` expone `--font-bebas/--font-anton/--font-outfit/--font-mono`, que `@theme` mapea a `font-display / font-subheading / font-sans / font-mono`.
- `docs/*.html` son los **prototipos estáticos** de los que se portaron los componentes (1:1 por sección). Son referencia, no código vivo.

## Tokens y estilo

- **Fuente de verdad: el bloque `@theme` en `src/app/globals.css`.** `tailwind.config.ts` existe pero **no se carga** (no hay `@config` en el CSS): editarlo no tiene efecto. Si agregás un token, va en `@theme`.
- Tokens disponibles: `brand-blue | brand-blue-deep (#052c87) | brand-blue-dark | brand-blue-hover | brand-yellow | brand-yellow-hover | brand-white | brand-canvas (#F8FAFC)`, `social-facebook/instagram/whatsapp`, `shadow-glow-yellow/wa/fb/ig`, `rounded-card-lg`.
- Usá tokens, no hex arbitrario: `bg-brand-blue-deep` en vez de `bg-[#052c87]` (los ~25 hex inline que quedan en `CarruselRedes`, `VisionSection`, `ServicesOverview` son deuda, no patrón a copiar).
- Reglas duras de `DESIGN.md` (leelo entero sólo si diseñás un componente nuevo): **nada de texto negro** ni `slate-*/gray-*`; secciones azules → texto `brand-white`, secciones canvas → texto `brand-blue`; títulos display `font-display uppercase` con la "cápsula rotada" (`-rotate-1` azul + interior amarillo); **sin emojis** (sólo Phosphor); **no inventar métricas**.
- Copy en **voseo rioplatense** ("Cotizá", "Enviá", "Contactanos"). Datos reales: WhatsApp `+54 223 660-2699` / `wa.me/542236602699`, sede `Friuli 1972`, dominio `enviosdosruedas.com`.

## Módulos compartidos existentes (reusar antes de crear)

`src/components/ui/Button.tsx` (variants primary/secondary/outline), `src/hooks/useScrollSpy.ts`, `src/lib/utils.ts` (`cn`), `src/types/index.ts` (`ServiceItem`, `MetricItem`). Hoy **ningún componente los importa** — las secciones repiten sus clases inline. Si tocás una sección, preferí importarlos.

## Dependencias instaladas pero sin uso en `src/`

`@genkit-ai/*`, `@radix-ui/*` (28 paquetes), `motion`, `next-themes`, `lucide-react`, `@hookform/resolvers`, `@phosphor-icons/react`. No asumas que están cableadas; no agregues código que dependa de ellas sin que se pida.

## Presupuesto de contexto — qué NO leer

Este repo tiene ~250 KB de HTML de prototipos y 70+ archivos de skills. Para no quemar tokens:

| Evitá | Motivo | Alternativa |
|---|---|---|
| `docs/index.html` (124 KB) | landing completa ensamblada | leé sólo el `docs/<seccion>.html` que estés portando, y sólo si el `.tsx` no alcanza |
| `.agents/skills/**` | skills de Stitch instalados por `skills-lock.json` | no son código del proyecto |
| `.stitch/DESIGN.md` | copia byte a byte de `./DESIGN.md` | leé `./DESIGN.md` |
| `crearestructura.py` (26 KB) | scaffold one-shot ya ejecutado; su `tailwind.config.ts` y `globals.css` están desactualizados | el estado real es `src/` |
| `pnpm-lock.yaml`, `skills-lock.json`, `public/recursos_envios/` | lockfiles / PNG originales | — |
| Los 8 componentes a la vez (~1.900 líneas) | — | `grep -n 'id="<seccion>"'` y leé sólo el archivo que vas a modificar |

## Gotchas

- `.vscode/settings.json` (sin trackear) silencia el warning `unknownAtRules` de `@theme`/`@import "tailwindcss"`. No es un error.
- `README.md` dice "Next.js 15": está desactualizado, es 16.
- `tsconfig` excluye `.agents`, `.claude`, `.stitch` — no los incluyas al agregar paths.
- Alias `@/*` → `./src/*`.
- `next.config.ts` sólo permite imágenes remotas de `images.unsplash.com`.

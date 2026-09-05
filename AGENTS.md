# AGENTS.md

Directrices e instrucciones para los agentes que trabajen en el repositorio **00000envios** (Landing Page y Plataforma Envíos DosRuedas).

---

## 🏛️ Estructura Base Obligatoria para Nuevas Páginas

Cada vez que se solicite crear una nueva página (por ejemplo en `src/app/**/page.tsx` o subrutas de servicios/contacto/nosotros), **debe utilizarse como plantilla base obligatoria**:

📄 **Referencia:** [`docs/plantilla-pagina.example.tsx`](docs/plantilla-pagina.example.tsx)

### Estructura secuencial requerida:
1. **Imports y Metadata de Next.js**:
   ```tsx
   import type { Metadata } from "next";
   import Header from "@/components/home/Header";
   import Footer from "@/components/home/Footer";
   import CarruselRedes from "@/components/home/CarruselRedes";

   export const metadata: Metadata = {
     title: "Título de la Página · Envíos DosRuedas",
     description: "Descripción optimizada para SEO en Mar del Plata.",
   };
   ```
2. **Header Global**: Componente `<Header />` en la parte superior.
3. **Hero de la Página**: Siempre debe tener un Hero inicial temático con su badge superior, título `font-display uppercase`, descripción en voseo y botón/CTA a WhatsApp (`+54 223 660-2699`).
4. **Secciones Específicas**: Aquí se insertan los componentes particulares del servicio o contenido solicitado (Features, Precios, Calculadoras, Preguntas Frecuentes, etc.).
5. **Carrusel de Redes**: `<CarruselRedes />` incluido antes del Footer.
6. **Footer Global**: Componente `<Footer />` al final.

---

## 🎨 Reglas de Estilo y Sistema de Diseño (DESIGN.md)

- **Colores:** Usar tokens de Tailwind v4 definidos en `@theme` en `src/app/globals.css` (`brand-blue`, `brand-blue-deep`, `brand-yellow`, `brand-white`, `brand-canvas`, etc.). Nunca usar texto negro ni grises arbitrarios.
- **Tipografías:** `font-display` (Bebas/Anton), `font-subheading` (Outfit Bold/Black), `font-sans` (Outfit), `font-mono`.
- **Iconografía:** Phosphor Web CSS (`<i className="ph-bold ph-..." />`).
- **Copy:** Voseo rioplatense (MDQ). Datos reales: WhatsApp `+54 223 660-2699`, base `Friuli 1972`.

---

## 🧩 Skills Portables (multi-IDE)

Además de este `AGENTS.md`, el repo tiene [`agent-skills/`](agent-skills/): instrucciones de skill en markdown plano (rol + objetivo + procedimiento), sin sintaxis propietaria de Claude Code, pensadas para funcionar igual en opencode, Antigravity, Cursor, Windsurf, Copilot Chat o cualquier agente con acceso a archivos y shell. Si el pedido del usuario matchea el disparador de alguna, seguila en vez de improvisar el procedimiento desde cero.

- [`agent-skills/extraccion-html-estatica.md`](agent-skills/extraccion-html-estatica.md) — Convertir una página (ej. `src/app/page.tsx`) y sus componentes en un único HTML autocontenido (ej. `docs/index.html`).
- [`agent-skills/extraccion-prototipos.md`](agent-skills/extraccion-prototipos.md) — Convertir una página (ej. `src/app/contacto/page.tsx`) en un prototipo HTML autónomo en `docs/prototipos/` listo para servidor local.

Ver [`agent-skills/README.md`](agent-skills/README.md) para la convención de formato y cómo la lee cada IDE en particular.

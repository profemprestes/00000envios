---
name: extraccion-prototipos
description: Extracción estática de páginas y componentes React/Next.js hacia prototipos HTML autónomos de alta fidelidad dentro de docs/prototipos/.
---

# Extracción de Prototipos Estáticos (docs/prototipos)

Esta skill guía a los agentes en la conversión precisa y autónoma de páginas Next.js (`src/app/**/page.tsx`) y su árbol completo de componentes hacia prototipos estáticos `.html` listos para ser servidos localmente en `docs/prototipos/`.

## Cuándo activar esta skill

- El usuario solicita: "generá el prototipo estático de `<ruta>` en `docs/prototipos/`", "extraé la pantalla de `<página>` a HTML", "creá la versión estática de la vista para previsualización", o cuando se añade una nueva página en Next.js y se requiere su gemelo estático.

## Principios y Rol

- **Rol**: Desarrollador Frontend Senior y Arquitecto UI/UX Experto.
- **Fidelidad**: Producir HTML y CSS que repliquen exactamente el diseño, copy, microinteracciones, modales, pestañas y animaciones del código fuente original.

---

## Procedimiento de Extracción Paso a Paso

### 1. Análisis Topológico de la Página Fuente
1. Abrir y leer la página objetivo (ej. `src/app/contacto/page.tsx` o `src/app/nosotros/sobre-nosotros/page.tsx`).
2. Listar la secuencia exacta de componentes importados en el JSX (Header, Hero, Formularios, Bento Grids, Sliders, Footer, etc.).
3. No alterar el orden de las secciones.

### 2. Inspección Recursiva de Componentes
1. Leer cada componente en `src/components/**/`.
2. Extraer todo el copy real, badges, iconos Phosphor (`<i class="ph-fill ph-..." />`), datos de contacto (`Friuli 1972`, `+54 223 660-2699`), métricas y microtextos.
3. Identificar estados de React (`useState`, `useEffect`, modales, sliders, toggles) para traducirlos a JavaScript Vanilla nativo.

### 3. Configuración de Tailwind CSS CDN y Tokens de Marca
Configurar el bloque inline de Tailwind en el `<head>` del HTML con la paleta de color bimodal y tipografías:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'brand-blue': '#0950F6',
          'brand-blue-deep': '#052C87',
          'brand-navy': '#052C87',
          'brand-yellow': '#FFF12E',
          'brand-yellow-hover': '#FFF44A',
          'brand-canvas': '#F8FAFC',
          'brand-white': '#FFFFFF',
          'social-facebook': '#1877F2',
          'social-whatsapp': '#25D366',
        },
        fontFamily: {
          sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
          display: ['Anton', 'sans-serif'],
          subheading: ['"Bebas Neue"', 'sans-serif'],
          mono: ['"Geist Mono"', 'monospace'],
        },
        boxShadow: {
          'glow-yellow': '0 0 25px rgba(255, 241, 46, 0.40)',
          'glow-yellow-lg': '0 0 50px rgba(255, 241, 46, 0.55)',
          'glow-blue': '0 0 25px rgba(9, 80, 246, 0.30)',
          'glow-fb': '0 0 25px rgba(24, 119, 242, 0.50)',
          'glow-ig': '0 0 25px rgba(225, 48, 108, 0.50)',
          'glow-wa': '0 0 25px rgba(37, 211, 102, 0.50)',
          'antigravity-deep': '0 30px 60px -15px rgba(9, 80, 246, 0.35), 0 0 50px -10px rgba(255, 241, 46, 0.20)',
        }
      }
    }
  }
</script>
```

### 4. Fuentes e Iconografía
Incluir siempre en el `<head>`:
- Google Fonts: `Anton`, `Bebas Neue`, `Outfit`, `Geist Mono`.
- Phosphor Icons CDN: `@phosphor-icons/web@2.1.1` en variantes `regular`, `bold` y `fill`.

### 5. Resolución de Rutas de Servidor Local y Assets
- **Enlaces entre pantallas en prototipos**: Usar rutas de servidor `/prototipos/<nombre>.html` (ej. `/prototipos/index.html`, `/prototipos/contacto.html`).
- **Recursos e Imágenes**: Usar rutas absolutas `/logo.webp`, `/recursos_envios/...` correspondientes a la carpeta `public/`.
- **Destino de guardado**: `docs/prototipos/<nombre-pantalla>.html` (crear el directorio si no existe).

### 6. Fondo 3D / WebGL Interactivo
Si la página original o el layout incluye fondos de partículas, ruteo dinámico o canvas, integrar Three.js por CDN (`cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`) y renderizar el sistema de partículas interactivas en un canvas de fondo con ID único.

### 7. Traducción Interactiva a Vanilla JS
- **Menú Mobile**: Toggle con cambio de icono hamburguesa/cruz y cierre al clickear enlaces.
- **Dropdowns Desktop**: Apertura por click y cierre al hacer click afuera (`handleClickOutside`).
- **Formularios**: Validación de inputs requeridos, formateo de mensaje y redirección dinámica a `https://wa.me/542236602699?text=...`.
- **Sliders y Tabs**: Paginación con transiciones fluidas de opacidad y botones previo/siguiente.
- **Modales**: Apertura, cierre por backdrop y tecla `Escape`.
- **Scroll to top**: `window.scrollTo({ top: 0, behavior: 'smooth' })`.

---

## Reglas Obligatorias

1. **Sin código truncado**: Nunca dejar comentarios como `<!-- resto del código aquí -->` ni truncar secciones.
2. **Copy real del repo**: Prohibido el uso de "Lorem Ipsum" o datos inventados.
3. **Rotación de títulos**: Respetar siempre el estilo de acento de marca `-rotate-1` en palabras destacadas.
4. **Standalone**: El archivo generado debe ser 100% autónomo y funcionar directamente al ser servido por un servidor estático local o Live Server.

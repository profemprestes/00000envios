# Sistema de Diseño: Envíos DosRuedas
**Enfoque de Color:** Modo Claro Exclusivo (Clean & Crisp Light UI)
**Framework CSS:** Tailwind CSS v4 / Next.js
**Tipografía:** Inter / Geist Sans (Interfaz) + JetBrains Mono (Tracking / Números de Guía)

---

## 1. Filosofía Visual y Principios

1. **Light-First & Always Light:** La interfaz está pensada exclusivamente para entornos diurnos y de alta visibilidad en calle y oficina. No existen clases `dark:` ni conmutadores de tema nocturno.
2. **Claridad Operativa:** Fondos blancos y grises tenues con contraste óptimo (WCAG AA/AAA) para lectura rápida de tarifas, cotizaciones y estados de envíos.
3. **Identidad Logística Ágil:** Combinación de tonos amarillos/ámbar energéticos (velocidad en dos ruedas), azul/verde esmeralda para confirmación de entrega y neutrales balanceados.

---

## 2. Paleta de Colores (Design Tokens)

### 2.1 Superficies y Fondos
| Token | Clase Tailwind | Valor Hex | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Canvas Base** | `bg-white` | `#FFFFFF` | Fondo principal de la aplicación y tarjetas |
| **Canvas Sutil** | `bg-slate-50` | `#F8FAFC` | Fondo de página, secciones alternadas y sidebars |
| **Superficie Neutra** | `bg-slate-100` | `#F1F5F9` | Inputs deshabilitados, badges neutros, chips |
| **Borde Estándar** | `border-slate-200`| `#E2E8F0` | Divisores, bordes de tarjetas y tablas |
| **Borde Activo** | `border-slate-300`| `#CBD5E1` | Focus states secundarios, hover en inputs |

### 2.2 Textos y Jerarquía Tipográfica
| Token | Clase Tailwind | Valor Hex | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Texto Primario** | `text-slate-900` | `#0F172A` | Títulos principales, precios destacados y guías |
| **Texto Secundario** | `text-slate-600` | `#475569` | Descripciones, subtítulos y labels |
| **Texto Terciario** | `text-slate-400` | `#94A3B8` | Placeholders, textos auxiliares y timestamps |

### 2.3 Colores de Marca y Acento
| Propósito | Clase Tailwind | Valor Hex | Uso |
| :--- | :--- | :--- | :--- |
| **Primario (Brand)** | `bg-amber-500` / `text-amber-950` | `#F59E0B` | Botones de acción principal (CTA), cadete, envíos express |
| **Primario Hover** | `bg-amber-600` | `#D97706` | Hover de botones primarios |
| **Primario Suave** | `bg-amber-50` / `text-amber-800` | `#FFFBEB` | Alertas informativas de cadetería, badges activos |
| **Éxito (Entregado)** | `bg-emerald-600` / `bg-emerald-50` | `#059669` | Estado "Entregado", pago confirmed |
| **En Tránsito** | `bg-blue-600` / `bg-blue-50` | `#2563EB` | Envíos en camino, tracking en vivo |
| **Alerta / Retraso** | `bg-rose-600` / `bg-rose-50` | `#E11D48` | Cancelaciones, dirección no encontrada |

---

## 3. Componentes Base en Modo Claro

### 3.1 Botones (Buttons)

```html
<!-- Botón Primario (CTA de Cotización / Enviar) -->
<button class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-slate-900 bg-amber-400 hover:bg-amber-500 active:bg-amber-600 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-white">
  Cotizar Envío Inmediato
</button>

<!-- Botón Secundario / Outline -->
<button class="inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all">
  Ver Historial de Envíos
</button>
```

### 3.2 Tarjetas (Cards & Bento Grid)

```html
<!-- Card de Servicio / Tarifa -->
<div class="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
  <div class="flex items-center justify-between mb-4">
    <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
      Reparto Express
    </span>
    <span class="text-2xl font-bold text-slate-900">$350</span>
  </div>
  <h3 class="text-base font-semibold text-slate-900 mb-1">Cadetería Local Inmediata</h3>
  <p class="text-sm text-slate-600">Entregas punto a punto en menos de 45 minutos.</p>
</div>
```

### 3.3 Formularios y Cotizador (Inputs & Selects)

```html
<div class="space-y-1.5">
  <label class="block text-sm font-medium text-slate-700">Dirección de Retiro</label>
  <div class="relative">
    <input
      type="text"
      placeholder="Ej: Av. Colón 1234"
      class="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors shadow-sm"
    />
  </div>
</div>
```

### 3.4 Badges de Estado Logístico

```html
<!-- En Preparación -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
  En Preparación
</span>

<!-- En Tránsito -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
  <span class="w-1.5 h-1.5 mr-1.5 rounded-full bg-blue-500 animate-pulse"></span>
  En Camino
</span>

<!-- Entregado -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
  Entregado
</span>
```

---

## 4. Estructura de Sombras y Elevaciones (Light Elevations)

* **Nivel 1 (Subtle / Cards):** `shadow-sm` (`0 1px 2px 0 rgb(0 0 0 / 0.05)`)
* **Nivel 2 (Hover / Menús desplegables):** `shadow-md` (`0 4px 6px -1px rgb(0 0 0 / 0.08)`)
* **Nivel 3 (Modales / Cotizador Flotante):** `shadow-xl shadow-slate-200/50 border border-slate-100`

---

## 5. Reglas de Implementación en Código

1. **Prohibido el prefijo `dark:`** en todos los componentes React / Next.js y plantillas HTML.
2. Todo fondo neutro de contenedor debe resolver a `bg-white` o `bg-slate-50`.
3. Todos los bordes deben mantener una opacidad clara de `border-slate-200` o `border-slate-100`.
4. Los contrastes de tipografía deben conservar siempre el escalón `text-slate-900` para títulos y `text-slate-600` para cuerpos de texto.

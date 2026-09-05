# Design System: Envíos DosRuedas · Mensajería y Logística Urbana E-Commerce

**Project ID:** `envios-dosruedas-mdp`
**Scope:** `docs/prototipos`

---

## 1. Visual Theme & Atmosphere

- **Mood & Vibe:** High-velocity, industrial-modern, dependable, and distinctly urban. The interface projects immediate responsiveness, speed, and logistical precision designed for local commerce, online stores (MercadoLibre Flex), and urban courier delivery in Mar del Plata.
- **Density & Geometry:** Balanced medium-to-high information density with generous breathing room. Strong geometric structures characterized by double-layered curved containers, angled velocity badges (-1° / 1° rotation), and subtle glowing neon halos that convey rapid movement.
- **Depth & Elevation Philosophy:** Multi-layered elevation built on rich atmospheric blue foundations (`#0950F6`) with frosted translucent glass frames (`backdrop-blur-md`, `border-brand-white/20`), intense diffused neon yellow glow halos (`shadow-glow-yellow`), and deep ambient elevation shadows (`0 30px 60px -15px rgba(9, 80, 246, 0.35)`).

---

## 2. Color Palette & Roles

| Descriptive Name                      | Hex Code                                                  | Functional Role                                                                                                       |
| :------------------------------------ | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **Electric Speed Blue**               | `#0950F6`                                                 | Primary brand canvas, hero section backgrounds, active brand borders, and key interactive highlights.                 |
| **Deep Midnight Navy**                | `#052C87`                                                 | Deep contrast background, container fills for dark cards, dropdown surfaces, and scrollbar track.                     |
| **High-Voltage Neon Yellow**          | `#FFF12E`                                                 | Primary accent color, high-conversion CTAs, active status badges, icon containers, and text selection fill.           |
| **Electric Sun Gold Hover**           | `#FFF44A`                                                 | Interactive hover state for primary yellow buttons, active chips, and energetic halo glows.                           |
| **Pure Optical White**                | `#FFFFFF`                                                 | Primary body typography on dark backgrounds, solid card interiors, calculator surfaces, and high-contrast containers. |
| **Slate Surface Light Canvas**        | `#F8FAFC`                                                 | Light secondary canvas fill for alternative sections, data displays, and form backgrounds.                            |
| **Frosted Glass White (Translucent)** | `rgba(255, 255, 255, 0.10)` – `rgba(255, 255, 255, 0.25)` | Glassmorphic outer framing, secondary button backgrounds, subtle divider lines, and navigation pills.                 |
| **Social WhatsApp Green**             | `#25D366`                                                 | Direct support buttons, instant chat floating widgets, and messaging glow accents.                                    |
| **Social Facebook Blue**              | `#1877F2`                                                 | Social media link badges and reputation channel highlights.                                                           |

---

## 3. Typography Rules

- **Display Headings (`font-display`):**
  - **Font Family:** `Anton`, sans-serif.
  - **Role:** Hero titles, major section headlines, and high-impact slogan statements.
  - **Styling:** Uppercase, tight letter spacing (`tracking-tight` / `tracking-tighter`), ultra-condensed leading (`leading-[0.98]` or `leading-none`), heavy visual weight.
- **Subheadings & Action Labels (`font-subheading`):**
  - **Font Family:** `"Bebas Neue"`, sans-serif.
  - **Role:** Navigation links, section badge chips, button labels, category tags, and feature titles.
  - **Styling:** Uppercase, expanded letter spacing (`tracking-wider` / `tracking-widest`), bold structural character.
- **Body Text & Interface (`font-sans`):**
  - **Font Family:** `Outfit`, system-ui, -apple-system, sans-serif.
  - **Role:** Paragraphs, descriptive copy, form inputs, tooltips, and informational text.
  - **Styling:** Sentence case, weights ranging from Light (300) to Regular (400) and SemiBold (600), relaxed line height (`leading-relaxed`).
- **Data, Counters & Metrics (`font-mono`):**
  - **Font Family:** `"Geist Mono"`, monospace.
  - **Role:** Price tags (`$3.700`), numeric metrics (`+50K`), distance values (`4.2 km`), timestamps, and phone numbers.
  - **Styling:** Tabular numbers (`tabular-nums`), medium (500) to extra bold (800) weights, tight numerical alignment.

---

## 4. Component Stylings

### Buttons & Interactive Controls

- **Primary Conversion CTA:**
  - **Shape:** Pill-shaped (`rounded-full`), minimum height of 52px on primary hero actions (`min-h-[52px]`).
  - **Colors:** High-Voltage Neon Yellow background (`#FFF12E`) with Electric Speed Blue text (`#0950F6`).
  - **Details:** Includes an integrated trailing circular icon badge (`bg-brand-blue/15 text-brand-blue`), transitioning to inverted state and shifting right (`group-hover:translate-x-1`) on hover with an intense neon halo glow (`shadow-glow-yellow`).
- **Secondary / Glass Button:**
  - **Shape:** Pill-shaped (`rounded-full`), translucent frosted glass background (`bg-brand-white/10`).
  - **Colors:** Pure Optical White text (`#FFFFFF`) with a semi-opaque white border (`border-brand-white/30`).
  - **Hover Behavior:** Deepens opacity (`bg-brand-white/20`), illuminates border (`border-brand-white`), and shifts trailing circular icon.
- **Navigation & Mobile Action Items:**
  - **Shape:** Subtly rounded corners (`rounded-xl` to `rounded-2xl`).
  - **Colors:** Translucent glass surface (`bg-brand-white/15`) with quick active tactile scale response (`active:scale-95`).

### Cards & Structural Containers

- **Double-Layered Glass Containers (Signature Card):**
  - **Outer Shell:** Generously rounded (`rounded-[28px]` or `rounded-[30px]`), frosted glass styling (`bg-brand-white/10`), 1px translucent border (`border-brand-white/20`), heavy atmospheric drop shadow (`shadow-2xl`).
  - **Inner Core:** Nested inner container with refined curvature (`rounded-[20px]`), filled with crisp Pure Optical White (`#FFFFFF`) for calculators/forms, or Deep Midnight Navy (`#052C87`) for dark metric cards.
- **Service & Feature Bento Cards:**
  - **Shape:** Generously rounded (`rounded-[28px]`).
  - **Styling:** Deep Navy glass backdrop (`bg-brand-blue-deep/90`) accented with oversized background watermark icons (`text-brand-white/[0.04]`), 3-column metric mini-grids (`p-2 bg-brand-white/10 rounded-2xl`), and lift-on-hover physics (`hover:-translate-y-1.5 hover:border-brand-yellow/60`).
- **Dropdowns & Popovers:**
  - **Shape:** Smooth rounded corners (`rounded-2xl`).
  - **Styling:** Solid Electric Blue (`#0950F6`) with frosted border (`border-brand-white/25`), deep layered shadow (`shadow-2xl`), and high-contrast row items with subtle hover pills (`hover:bg-brand-white/15`).

### Inputs, Forms & Calculators

- **Form Inputs:**
  - **Shape:** Subtly rounded corners (`rounded-xl`), standardized 44px height (`h-11`).
  - **Styling:** Pure Optical White background with a 2px subtle blue border stroke (`border-2 border-brand-blue/20`).
  - **Focus State:** Electric Blue highlight ring (`focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:border-brand-blue`).
  - **Typography & Placeholders:** Dark Blue text with subdued placeholder tone (`placeholder:text-brand-blue/40`), accompanied by uppercase Bebas Neue bold field labels and Phosphor icon prefixes.
- **Badges & Status Chips:**
  - **Shape:** Pill-shaped (`rounded-full`), padded (`px-4 py-1.5`).
  - **Styling:** High-Voltage Neon Yellow background with Electric Blue bold text and glowing halo border (`border border-brand-yellow shadow-glow-yellow`), or Deep Midnight Navy pill with yellow outline and blinking live status indicator.

---

## 5. Layout Principles

- **Grid & Container Strategy:**
  - **Standard Max Width:** Centered container at `max-w-7xl` (1280px) with responsive horizontal gutter padding (`px-4 sm:px-6 lg:px-8`).
  - **Hero & Calculator Splits:** Asymmetric 12-column desktop grid layout (`grid-cols-1 lg:grid-cols-12`) with a 7-column narrative/form column paired with a 5-column interactive preview or 3D terminal card.
  - **Service Grids:** Responsive 1 to 4 column layout (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) with consistent 24px gap spacing (`gap-6`).
- **Whitespace & Vertical Rhythm:**
  - **Section Breathing Room:** Generous vertical section padding (`py-16 sm:py-24 lg:py-28`) balanced against compact component interior rhythm (`p-4` to `p-8`).
  - **Dividers:** Thin translucent horizontal separator lines (`border-t border-brand-white/20`).
- **Dynamic Angular Accents:**
  - **Velocity Rotation:** Intentional 1-degree rotation wrappers (`-rotate-1` and `rotate-1`) applied to hero badges and sticker pills to inject urban agility, motion, and dynamism.

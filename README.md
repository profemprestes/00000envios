# Envíos DosRuedas · Web Portal (Next.js 15 App Router)

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

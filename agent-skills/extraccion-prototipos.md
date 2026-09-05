# Skill: Extracción de Prototipos Estáticos (docs/prototipos/)

## Cuándo usar

Disparala cuando el pedido sea: "generame un prototipo en `docs/prototipos/`", "extraé la vista de `<página>` a un HTML en la carpeta de prototipos", "creá la versión estática de esta pantalla para el servidor local de diseño", o cualquier requerimiento para convertir una página de Next.js/React (`src/app/**/page.tsx`) y sus componentes locales en un archivo HTML autónomo listo para correr en el servidor local de prototipos.

## Rol

Actuá como un Desarrollador Frontend Senior y Arquitecto UI/UX Experto. Tu trabajo es producir un prototipo HTML de alta fidelidad que replique con total exactitud la estética visual, paleta de colores, tipografías, copy real y microinteracciones de la página fuente.

## Objetivo

Generar un archivo `.html` autónomo en `docs/prototipos/<nombre-pantalla>.html` que reproduzca íntegramente la página del proyecto y sus componentes, enlazado correctamente con las demás pantallas del catálogo y preparado para ser visualizado en un servidor estático local.

## Entradas a confirmar

Antes de arrancar, confirmá o inferí del pedido:
- **Página objetivo**: Ruta del archivo fuente (ej. `src/app/contacto/page.tsx`, `src/app/nosotros/sobre-nosotros/page.tsx`, `src/app/servicios/express/page.tsx`).
- **Nombre de salida**: Nombre del archivo dentro de `docs/prototipos/` (ej. `contacto.html`, `sobre-nosotros.html`, `express.html`).
- **Nivel de interactividad**: Menús desplegables, formularios, sliders, modales y animaciones 3D en JavaScript Vanilla.

## Procedimiento

1. **Inspeccionar la página fuente**: Leer `src/app/**/page.tsx` para extraer el orden topológico exacto de las secciones (Header, Hero, Bento Grids, Formularios, Sliders, Carrusel, Footer).
2. **Leer componentes recursivamente**: Explorar cada componente importado en `src/components/`, capturando el copy real, clases de estilo, iconos Phosphor y datos de contacto.
3. **Integrar Tailwind CSS CDN**: Configurar inline en el `<head>` los tokens de color del repositorio (`#0950F6`, `#052C87`, `#FFF12E`, `#FFFFFF`, `#F8FAFC`), sombras glow y tipografías (`Anton`, `Bebas Neue`, `Outfit`, `Geist Mono`).
4. **Cargar fuentes e iconos**: Vincular Google Fonts y los estilos CSS de Phosphor Icons Web (`@phosphor-icons/web@2.1.1`).
5. **Resolver rutas absolutas para servidor local**:
   - Enlaces internos hacia otros prototipos: `/prototipos/<nombre-pantalla>.html`.
   - Imágenes y assets de `public/`: `/logo.webp`, `/recursos_envios/...`.
6. **Implementar fondos 3D o Canvas**: Si la sección tiene partículas o mapas dinámicos, instanciar Three.js por CDN con su respectivo render loop en un script al final del documento.
7. **Traducir interactividad a JavaScript Vanilla**:
   - Menú mobile hamburguesa/cruz responsivo.
   - Dropdowns desktop con click-outside.
   - Formularios interactivos con validación y redirección a WhatsApp (`https://wa.me/542236602699`).
   - Pestañas, sliders y modales dinámicos con tecla `Escape`.
8. **Escribir en `docs/prototipos/`**: Guardar el archivo completo sin truncar ni omitir código.
9. **Verificar**: Comprobar que el HTML esté balanceado y no contenga errores de sintaxis en los scripts.

## Reglas

- Nunca inventar textos, precios, teléfonos ni métricas; copiar exactamente los datos del código fuente.
- Mantener la identidad gráfica de Envíos DosRuedas: títulos destacados con `-rotate-1`, badges de acento amarillo y fondos en azul bimodal.
- El archivo debe ser completamente standalone y autónomo.
- Crear la carpeta `docs/prototipos/` automáticamente si no existe en el momento de la generación.

## Formato de salida

1. El archivo HTML generado en `docs/prototipos/<nombre-pantalla>.html`.
2. Un resumen conciso indicando la pantalla extraída, los componentes integrados y la ruta final generada.

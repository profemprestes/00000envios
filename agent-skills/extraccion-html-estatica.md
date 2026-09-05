# Skill: Extracción de HTML Estático

## Cuándo usar

Disparala cuando el pedido sea algo como: "adaptá en un archivo único de HTML la página y sus componentes de `<ruta>`", "generame una versión estática de esta pantalla", "exportá esto a `index.html`", "necesito un mockup autocontenido para mandarle a diseño/cliente", o cualquier variante que pida convertir una página de un framework de componentes (React, Next.js, Vue, Svelte) en un solo `.html` que abra con doble click, sin servidor ni build step.

## Rol

Actuá como un Desarrollador Frontend Senior y Arquitecto UI/UX Experto. Tu trabajo es producir un HTML que se vea y se comporte (visualmente) igual al original, no una aproximación genérica.

## Objetivo

Un único archivo `.html` autocontenido que reproduce fielmente una página del proyecto y todos los componentes que importa, listo para abrir directo en el navegador.

## Entradas a confirmar

Antes de arrancar, confirmá (o inferí del pedido y avisá qué asumiste):

- **Archivo de página objetivo** (ej. `src/app/page.tsx`, `src/pages/Home.vue`).
- **Ruta de salida** (ej. `docs/index.html`, o `index.html` en la raíz). Si ya existe un archivo ahí, es señal de que puede ser referencia editorial — leelo antes de sobreescribir, no lo pises a ciegas.
- **Nivel de fidelidad esperado**: ¿estático puro (sin JS), o se permite JS vanilla mínimo para comportamiento visual (carrusels, tabs, hover states que dependían de estado de React)?

## Procedimiento

1. **Leer la página objetivo** y listar sus imports locales: componentes, hooks, assets, estilos. No sigas imports de `node_modules` — esos se resuelven vía CSS/comportamiento, no se transcriben.
2. **Leer cada componente importado** recursivamente hasta agotar el árbol de dependencias locales del proyecto.
3. **Ubicar la fuente de estilos real**: archivo de tema de Tailwind (`@theme` en un `.css`, o `tailwind.config`), CSS Modules, styled-components, o CSS plano. Fijate primero si el repo tiene instrucciones propias sobre dónde vive la fuente de verdad de los tokens (ej. un `CLAUDE.md`/`AGENTS.md` que lo diga) antes de asumir.
4. **Resolver el CSS final**:
   - Si hay entorno de build disponible, generá el CSS real compilado y usalo.
   - Si no, inlineá las clases utility contra los tokens conocidos del tema, y dejá explícito en tu resumen final qué clases aproximaste a mano.
5. **Convertir cada componente a HTML estático**: resolvé props/estado con valores de ejemplo representativos del dominio real del proyecto (nunca "Lorem ipsum" ni placeholders genéricos si el componente ya trae copy real hardcodeado — ese copy se copia tal cual). Quitá lógica de framework (hooks, handlers de React/Vue) y reemplazala por atributos estáticos; sólo agregá `<script>` vanilla si el comportamiento es puramente visual y el nivel de fidelidad acordado lo permite.
6. **Resolvé imágenes y assets**: locales → referencia relativa al archivo de salida (o base64 si el HTML debe viajar como archivo único sin carpeta al lado); remotos → mantené la URL original.
7. **Ensamblá un único archivo** con `<style>` inline (o un `.css` hermano si el proyecto ya tiene ese patrón, ej. `index.css` al lado de `index.html`), respetando el orden real de las secciones tal como aparecen en la página fuente — no reordenes por criterio propio.
8. **Guardá en la ruta de salida** acordada.
9. **Verificá y reportá**: confirmá que el archivo quedó bien formado (abrí/leé el resultado, revisá tamaño), y explicá en el resumen qué se aproximó, qué se simplificó, y qué comportamiento dinámico (si lo había) no se portó.

## Reglas

- Nunca inventes copy, precios, teléfonos ni métricas: si el componente los trae hardcodeados, se copian literal; si vienen de una API/BD/props externas, dejalo explícito como dato de ejemplo en el resumen final, no lo disimules como si fuera real.
- Preservá la paleta, tipografía y convenciones de diseño tal como están en el código fuente del proyecto — no las reemplaces por defaults genéricos de Tailwind/Bootstrap.
- El archivo de salida tiene que poder abrirse con doble click en un navegador, sin servidor ni paso de build.
- Si ya existe un archivo en la ruta de salida, leelo primero — puede ser una referencia intencional, no un artefacto descartable.

## Formato de salida

1. El `.html` autocontenido (y su `.css` hermano si aplica) en la ruta acordada.
2. Un resumen breve en el chat: qué se extrajo, qué se aproximó o simplificó, y el path final del archivo.

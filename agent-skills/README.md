# Skills portables (multi-IDE)

Esta carpeta guarda **skills en markdown plano**, sin la sintaxis de `SKILL.md` de Claude Code (sin frontmatter YAML propietario, sin llamadas a herramientas específicas de una app). La idea es que el mismo archivo sirva como instrucción para *cualquier* agente de código con acceso a archivos y shell: Claude Code, opencode, Antigravity (Google), Cursor, Windsurf, Copilot Chat, etc.

## Por qué así

Un `SKILL.md` de Claude Code depende de convenciones propias (carga progresiva por `description`, herramientas como `Read`/`Edit`/`Bash` invocadas por nombre). Eso no es portable: otro IDE no sabe qué es un "SKILL.md" ni cómo dispararlo. Lo que sí es portable es un **rol + objetivo + procedimiento** escrito en prosa/pasos que cualquier modelo con herramientas de archivo pueda seguir, sin importar cómo ese IDE en particular decida invocarlo.

## Cómo se conecta cada IDE

| Herramienta | Cómo la usa |
|---|---|
| **Claude Code** | `AGENTS.md` no se autocarga como skill, pero está en el repo — podés pedir "usá `agent-skills/<archivo>.md`" o pegarlo como prompt. Si querés carga automática por trigger, hay que envolverlo en un `SKILL.md` real (no es este archivo). |
| **opencode** | Lee `AGENTS.md` automáticamente en cada sesión. La sección de este README enlazada desde `AGENTS.md` alcanza para que opencode sepa que existen y cuándo usarlas. |
| **Antigravity (Google)** | No tengo confirmado el nombre exacto de su archivo de reglas/contexto persistente al día de hoy — revisá su documentación. Como fallback universal, pegá el contenido del `.md` de la skill en su panel de "custom instructions" / system prompt del agente. |
| **Cursor / Windsurf / Copilot** | Pegá el contenido como `.cursorrules` / `.windsurfrules` / instrucciones custom, o simplemente copialo al chat cuando quieras invocar esa skill puntual. |

## Convención de cada archivo

Cada skill acá sigue esta forma fija:

1. **Cuándo usar** — frases/disparadores que indican que esta skill aplica.
2. **Rol** — la persona que el agente debe adoptar.
3. **Objetivo** — qué entrega al final.
4. **Entradas a confirmar** — qué datos necesita del usuario o del repo antes de arrancar.
5. **Procedimiento** — pasos numerados, sin asumir un tool-call específico (habla de "leer", "listar", "escribir", no de `Read`/`Grep`).
6. **Reglas** — restricciones duras (no inventar datos, preservar convenciones del repo, etc.).
7. **Formato de salida** — qué archivo(s) y qué resumen debe devolver.

## Skills disponibles

- [`extraccion-html-estatica.md`](extraccion-html-estatica.md) — Convierte una página de React/Next/Vue (y los componentes que importa) en un único archivo HTML autocontenido, para preview, handoff de diseño o prototipado sin build step.
- [`extraccion-prototipos.md`](extraccion-prototipos.md) — Convierte una página de Next.js (`src/app/**/page.tsx`) en un prototipo HTML autónomo de alta fidelidad listo para servidor local dentro de `docs/prototipos/`.

Para agregar una nueva, copiá la estructura de arriba y sumala a esta lista y a la sección correspondiente de `AGENTS.md`.

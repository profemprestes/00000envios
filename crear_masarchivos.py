"""Script para automatizar la creación de páginas y componentes en Next.js (TypeScript / App Router).

Crea las rutas de páginas y los directorios de componentes solicitados
con plantillas base funcionales y tipadas.
"""

from pathlib import Path


def create_structure() -> None:
    # Definición de archivos y sus contenidos iniciales por defecto
    files_to_create: dict[str, str] = {
        "src/app/servicios/envios-express/page.tsx": (
            "export default function EnviosExpressPage() {\n"
            "  return (\n"
            '    <main className="container mx-auto px-4 py-8">\n'
            '      <h1 className="text-3xl font-bold mb-4">Envíos Express</h1>\n'
            "      <p>Información y contratación de nuestro servicio de envíos express en el día.</p>\n"
            "    </main>\n"
            "  );\n"
            "}\n"
        ),
        "src/app/servicios/envios-lowcost/page.tsx": (
            "export default function EnviosLowcostPage() {\n"
            "  return (\n"
            '    <main className="container mx-auto px-4 py-8">\n'
            '      <h1 className="text-3xl font-bold mb-4">Envíos Low Cost</h1>\n'
            "      <p>La mejor tarifa para envíos programados y económicos.</p>\n"
            "    </main>\n"
            "  );\n"
            "}\n"
        ),
        "src/app/servicios/enviosflex/page.tsx": (
            "export default function EnviosFlexPage() {\n"
            "  return (\n"
            '    <main className="container mx-auto px-4 py-8">\n'
            '      <h1 className="text-3xl font-bold mb-4">Envíos Flex</h1>\n'
            "      <p>Soluciones logísticas integradas para Mercado Libre y e-commerce.</p>\n"
            "    </main>\n"
            "  );\n"
            "}\n"
        ),
        "src/app/servicios/plan-emprendedores/page.tsx": (
            "export default function PlanEmprendedoresPage() {\n"
            "  return (\n"
            '    <main className="container mx-auto px-4 py-8">\n'
            '      <h1 className="text-3xl font-bold mb-4">Plan Emprendedores</h1>\n'
            "      <p>Tarifas y beneficios exclusivos para emprendimientos en crecimiento.</p>\n"
            "    </main>\n"
            "  );\n"
            "}\n"
        ),
        "src/app/contacto/page.tsx": (
            "export default function ContactoPage() {\n"
            "  return (\n"
            '    <main className="container mx-auto px-4 py-8">\n'
            '      <h1 className="text-3xl font-bold mb-4">Contacto</h1>\n'
            "      <p>Comunícate con nuestro equipo de atención y soporte.</p>\n"
            "    </main>\n"
            "  );\n"
            "}\n"
        ),
    }

    # Directorios de componentes solicitados (se crean con un index.ts y componente base)
    component_directories: list[tuple[str, str, str]] = [
        ("src/components/servicios/emprendedores", "EmprendedoresSection", "Sección y componentes para Plan Emprendedores"),
        ("src/components/servicios/express", "ExpressSection", "Sección y componentes para Envíos Express"),
        ("src/components/servicios/flex", "FlexSection", "Sección y componentes para Envíos Flex"),
        ("src/components/servicios/lowcost", "LowcostSection", "Sección y componentes para Envíos Low Cost"),
    ]

    base_path = Path.cwd()
    print(f"🚀 Iniciando creación de estructura en: {base_path}\n")

    # 1. Crear directorios de componentes con archivos base
    for dir_rel, comp_name, desc in component_directories:
        dir_path = base_path / dir_rel
        dir_path.mkdir(parents=True, exist_ok=True)
        print(f"📁 Directorio verificado/creado: {dir_rel}")

        comp_file = dir_path / f"{comp_name}.tsx"
        if not comp_file.exists():
            comp_file.write_text(
                f"export function {comp_name}() {{\n"
                f"  return (\n"
                f'    <section className="py-6">\n'
                f'      <h2 className="text-2xl font-semibold">{comp_name}</h2>\n'
                f"      <p>{desc}</p>\n"
                f"    </section>\n"
                f"  );\n"
                f"}}\n",
                encoding="utf-8",
            )
            print(f"  ✨ Creado componente: {dir_rel}/{comp_name}.tsx")

        index_file = dir_path / "index.ts"
        if not index_file.exists():
            index_file.write_text(
                f"export * from './{comp_name}';\n",
                encoding="utf-8",
            )
            print(f"  ✨ Creado export: {dir_rel}/index.ts")

    # 2. Crear páginas solicitadas
    for file_rel, content in files_to_create.items():
        file_path = base_path / file_rel
        file_path.parent.mkdir(parents=True, exist_ok=True)
        if not file_path.exists():
            file_path.write_text(content, encoding="utf-8")
            print(f"📄 Creada página: {file_rel}")
        else:
            print(f"⚠️ El archivo ya existe (omitido): {file_rel}")

    print("\n✅ Proceso completado con éxito.")


if __name__ == "__main__":
    create_structure()

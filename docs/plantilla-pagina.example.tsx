import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import CarruselRedes from "@/components/home/CarruselRedes";

// 1. Metadatos SEO y OpenGraph de la página
export const metadata: Metadata = {
  title: "Título de la Página · Envíos DosRuedas",
  description: "Descripción optimizada para SEO y buscadores de la página en Mar del Plata.",
};

// 2. Componente de Hero base/modular para esta página
function PageHero() {
  return (
    <section className="relative w-full pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden bg-brand-blue text-white">
      {/* Luces y degradados de ambientación de fondo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Badge de categoría / estado */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
            <i className="ph-fill ph-sparkle text-sm"></i>
            Categoría / Servicio
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.98] text-brand-white max-w-4xl mx-auto">
          Título Principal de la <span className="text-brand-yellow">Página</span>
        </h1>

        {/* Subtítulo o Descripción */}
        <p className="text-base sm:text-lg font-sans leading-relaxed text-brand-white/90 font-light max-w-2xl mx-auto">
          Descripción clara y directa sobre el servicio, beneficio o contenido que se presenta en esta sección.
        </p>

        {/* Llamados a la Acción (CTAs) */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://wa.me/542236602699"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300"
          >
            <span>Consultar por WhatsApp</span>
            <i className="ph ph-arrow-up-right text-base"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

// 3. Estructura principal de la Página (Server Component con soporte para secciones dinámicas)
export default function PlantillaPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      {/* Header global de navegación */}
      <Header />

      {/* Hero principal de la página */}
      <PageHero />

      {/* ========================================================================= */}
      {/* SECCIONES ESPECÍFICAS DE LA PÁGINA (Agregar componentes aquí según pedido) */}
      {/* Ejemplos: <FeaturesSection />, <PricingSection />, <FAQSection />, etc.     */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-16 bg-brand-blue-deep/50 border-t border-brand-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-brand-blue-deep/90 border border-brand-white/15 text-center text-brand-white space-y-4">
            <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">
              Sección Específica
            </h2>
            <p className="text-brand-white/80 max-w-xl mx-auto text-sm sm:text-base">
              Aquí se integran los componentes y módulos específicos según los requerimientos de la página.
            </p>
          </div>
        </div>
      </section>

      {/* Carrusel de Redes Sociales */}
      <CarruselRedes />

      {/* Footer global */}
      <Footer />
    </main>
  );
}

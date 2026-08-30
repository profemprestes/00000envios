import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes · Envíos DosRuedas Mar del Plata",
  description: "Respuestas a las dudas más comunes sobre mensajería, envíos express, LowCost y logística 3PL en Mar del Plata.",
};

export default function PreguntasFrecuentesPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      <Header />

      <section className="relative flex-1 flex items-center pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
            <i className="ph-fill ph-question text-sm"></i>
            Preguntas Frecuentes
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.98] text-brand-white">
            Dudas comunes sobre el servicio
          </h1>

          <p className="text-base sm:text-lg font-sans leading-relaxed text-brand-white/90 font-light">
            Esta sección está en construcción. Si tenés una consulta puntual sobre tarifas, tiempos o cobertura, escribinos directo por WhatsApp.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/542236602699?text=Hola!%20Tengo%20una%20consulta%20sobre%20el%20servicio."
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

      <Footer />
    </main>
  );
}

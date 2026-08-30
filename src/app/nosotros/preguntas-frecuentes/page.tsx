import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import CarruselRedes from "@/components/home/CarruselRedes";
import {
  FaqHero,
  FaqAccordion,
  FaqCta,
} from "@/components/nosotros/preguntas-frecuentes";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes · Envíos DosRuedas Mar del Plata",
  description:
    "Respuestas a las dudas más comunes sobre mensajería, envíos express, LowCost, Mercado Libre Flex y pagos en Mar del Plata.",
};

export default function PreguntasFrecuentesPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      {/* Header Global */}
      <Header />

      {/* Hero Principal: Centro de Respuestas */}
      <FaqHero />

      {/* Acordeón Interactivo con Filtros por Categoría */}
      <FaqAccordion />

      {/* CTA de Soporte Directo */}
      <FaqCta />

      {/* Carrusel de Redes y Comunidad */}
      <CarruselRedes />

      {/* Footer Global */}
      <Footer />
    </main>
  );
}

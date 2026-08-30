import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import CarruselRedes from "@/components/home/CarruselRedes";
import {
  AboutHero,
  AboutMissionVision,
  AboutAdvantages,
  AboutValues,
  AboutTimeline,
  AboutTeam,
} from "@/components/nosotros/sobre-nosotros";

export const metadata: Metadata = {
  title: "Sobre Nosotros · Envíos DosRuedas Mar del Plata",
  description:
    "Conocé a Envíos DosRuedas: más de 7 años de trayectoria, flota propia, mensajería y logística de última milla en Mar del Plata.",
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      {/* Header Global */}
      <Header />

      {/* Hero Principal: Quiénes Somos / Identidad */}
      <AboutHero />

      {/* Misión, Visión e Innovación */}
      <AboutMissionVision />

      {/* Diferencial Competitivo / Ventajas */}
      <AboutAdvantages />

      {/* Filosofía Operativa y Valores */}
      <AboutValues />

      {/* Historia y Línea de Tiempo */}
      <AboutTimeline />

      {/* Equipo de Calle y Fuerza Humana */}
      <AboutTeam />

      {/* Carrusel de Comunidad Digital / Redes */}
      <CarruselRedes />

      {/* Footer Global */}
      <Footer />
    </main>
  );
}

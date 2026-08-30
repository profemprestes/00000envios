import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import CarruselRedes from "@/components/home/CarruselRedes";
import {
  NetworksHero,
  NetworksChannels,
  NetworksBenefits,
  RecentPosts,
  NewsletterSubscribe,
} from "@/components/nosotros/nuestras-redes";

export const metadata: Metadata = {
  title: "Nuestras Redes · Envíos DosRuedas Mar del Plata",
  description:
    "Seguí a Envíos DosRuedas en Instagram, Facebook y WhatsApp para enterarte de novedades operativas, promociones y comunidad logística en Mar del Plata.",
};

export default function NuestrasRedesPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      {/* Header Global */}
      <Header />

      {/* Hero Principal: Comunidad en Línea */}
      <NetworksHero />

      {/* Canales Oficiales: WhatsApp, Instagram y Facebook */}
      <NetworksChannels />

      {/* Beneficios de Formar Parte */}
      <NetworksBenefits />

      {/* Publicaciones Recientes */}
      <RecentPosts />

      {/* Suscripción a Newsletter Exclusivo */}
      <NewsletterSubscribe />

      {/* Carrusel de Redes Global */}
      <CarruselRedes />

      {/* Footer Global */}
      <Footer />
    </main>
  );
}

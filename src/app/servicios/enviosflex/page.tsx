import type { Metadata } from 'next';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import CarruselRedes from '@/components/home/CarruselRedes';
import FlexHero from '@/src/components/servicios/flex/FlexHero';
import FlexFeatures from '@/src/components/servicios/flex/FlexFeatures';
import FlexHowItWorks from '@/src/components/servicios/flex/FlexHowItWorks';
import FlexBenefits from '@/src/components/servicios/flex/FlexBenefits';
import FlexRequirements from '@/src/components/servicios/flex/FlexRequirements';
import FlexPricing from '@/src/components/servicios/flex/FlexPricing';

export const metadata: Metadata = {
  title: 'Envíos Flex Mercado Libre en Mar del Plata · Envíos DosRuedas',
  description: 'Logística oficial para Mercado Libre Envíos Flex en Mar del Plata. Cobertura total, entregas en el día y 100% de cumplimiento para mantener tu reputación verde.',
  alternates: {
    canonical: 'https://www.enviosdosruedas.com/servicios/enviosflex',
  },
};

export default function EnviosFlexPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      {/* Header Global */}
      <Header />

      {/* Hero Específico de Flex */}
      <FlexHero />

      {/* Características y Cumplimiento */}
      <FlexFeatures />

      {/* Cómo Funciona */}
      <FlexHowItWorks />

      {/* Beneficios para Vendedores ML */}
      <FlexBenefits />

      {/* Requisitos y Pautas Operativas */}
      <FlexRequirements />

      {/* Tarifario y Escala */}
      <FlexPricing />

      {/* Carrusel de Comunidad Digital / Redes */}
      <CarruselRedes />

      {/* Footer Global */}
      <Footer />
    </main>
  );
}


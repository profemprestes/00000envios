import type { Metadata } from 'next';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import CarruselRedes from '@/components/home/CarruselRedes';
import LowCostHero from '@/src/components/servicios/lowcost/LowCostHero';
import LowCostFeatures from '@/src/components/servicios/lowcost/LowCostFeatures';
import LowCostHowItWorks from '@/src/components/servicios/lowcost/LowCostHowItWorks';
import LowCostBenefits from '@/src/components/servicios/lowcost/LowCostBenefits';
import LowCostPricing from '@/src/components/servicios/lowcost/LowCostPricing';

export const metadata: Metadata = {
  title: 'Envíos LowCost en Mar del Plata · Envíos DosRuedas',
  description: 'Tarifas económicas y programadas para tus entregas en Mar del Plata. Ruteo eficiente y entrega garantizada en el día.',
  alternates: {
    canonical: 'https://www.enviosdosruedas.com/servicios/envios-lowcost',
  },
};

export default function EnviosLowcostPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      {/* Header Global */}
      <Header />

      {/* Hero Específico de LowCost */}
      <LowCostHero />

      {/* Características del Servicio */}
      <LowCostFeatures />

      {/* Cómo Funciona el Ruteo */}
      <LowCostHowItWorks />

      {/* Beneficios Clave */}
      <LowCostBenefits />

      {/* Tarifario por Zonas */}
      <LowCostPricing />

      {/* Carrusel de Comunidad Digital / Redes */}
      <CarruselRedes />

      {/* Footer Global */}
      <Footer />
    </main>
  );
}


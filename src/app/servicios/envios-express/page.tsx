import type { Metadata } from 'next';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import CarruselRedes from '@/components/home/CarruselRedes';
import ExpressHero from '@/components/servicios/express/ExpressHero';
import ExpressFeatures from '@/components/servicios/express/ExpressFeatures';
import ExpressUseCases from '@/components/servicios/express/ExpressUseCases';
import ExpressPricing from '@/components/servicios/express/ExpressPricing';

export const metadata: Metadata = {
  title: 'Envíos Express en Mar del Plata · Envíos DosRuedas',
  description: 'Servicio prioritario de cadetería y mensajería express en Mar del Plata. Entregas en el día en menos de 2 horas con seguimiento.',
  alternates: {
    canonical: 'https://www.enviosdosruedas.com/servicios/envios-express',
  },
};

export default function EnviosExpressPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      {/* Header Global */}
      <Header />

      {/* Hero Específico de Express */}
      <ExpressHero />

      {/* Características y Soluciones */}
      <ExpressFeatures />

      {/* Casos de Uso y Aplicaciones */}
      <ExpressUseCases />

      {/* Tarifas y Zonas Express */}
      <ExpressPricing />

      {/* Carrusel de Comunidad Digital / Redes */}
      <CarruselRedes />

      {/* Footer Global */}
      <Footer />
    </main>
  );
}


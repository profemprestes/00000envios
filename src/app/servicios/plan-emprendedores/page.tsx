import type { Metadata } from 'next';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
import CarruselRedes from '@/components/home/CarruselRedes';
import EmprendedoresHero from '@/src/components/servicios/emprendedores/EmprendedoresHero';
import EmprendedoresFeatures from '@/src/components/servicios/emprendedores/EmprendedoresFeatures';
import EmprendedoresBenefits from '@/src/components/servicios/emprendedores/EmprendedoresBenefits';
import EmprendedoresPricing from '@/src/components/servicios/emprendedores/EmprendedoresPricing';

export const metadata: Metadata = {
  title: 'Plan Emprendedores y Logística 3PL en Mar del Plata · Envíos DosRuedas',
  description: 'Logística 3PL, almacenamiento, picking por QR y distribución Same Day para e-commerce y emprendedores en Mar del Plata. Base central en Friuli 1972.',
  alternates: {
    canonical: 'https://www.enviosdosruedas.com/servicios/plan-emprendedores',
  },
};

export default function PlanEmprendedoresPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      {/* Header Global */}
      <Header />

      {/* Hero Específico de Emprendedores y 3PL */}
      <EmprendedoresHero />

      {/* Soluciones E-Commerce & 3PL */}
      <EmprendedoresFeatures />

      {/* Beneficios y Ventajas Clave */}
      <EmprendedoresBenefits />

      {/* Planes y Tarifas Especiales */}
      <EmprendedoresPricing />

      {/* Carrusel de Comunidad Digital / Redes */}
      <CarruselRedes />

      {/* Footer Global */}
      <Footer />
    </main>
  );
}


import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import ContactoHero from "@/components/contacto/ContactoHero";
import PlanForm from "@/components/contacto/PlanForm";
import BaseOperativa from "@/components/contacto/BaseOperativa";
import CarruselRedes from "@/components/home/CarruselRedes";

export const metadata: Metadata = {
  title: "Contacto · Envíos DosRuedas Mar del Plata",
  description: "Hablá con Envíos DosRuedas por WhatsApp, teléfono o cuentas comerciales. Pedí un plan a medida para tu comercio en Mar del Plata.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      <Header />
      <ContactoHero />
      <PlanForm />
      <BaseOperativa />
      <CarruselRedes />
      <Footer />
    </main>
  );
}

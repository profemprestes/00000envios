import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import VisionSection from "@/components/home/VisionSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import SliderIndustrias from "@/components/home/SliderIndustrias";
import EmprendedoresHome from "@/components/home/EmprendedoresHome";
import CarruselRedes from "@/components/home/CarruselRedes";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue"
      suppressHydrationWarning
    >
      <Header />
      <HeroSection />
      <VisionSection />
      <ServicesOverview />
      <SliderIndustrias />
      <EmprendedoresHome />
      <CarruselRedes />
      <Footer />
    </main>
  );
}

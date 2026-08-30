'use client';

import React, { useState, useEffect } from "react";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import VisionSection from "@/components/home/VisionSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import SliderIndustrias from "@/components/home/SliderIndustrias";
import EmprendedoresHome from "@/components/home/EmprendedoresHome";
import CarruselRedes from "@/components/home/CarruselRedes";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue"
      suppressHydrationWarning
    >
      {mounted ? (
        <>
          <Header />
          <HeroSection />
          <VisionSection />
          <ServicesOverview />
          <SliderIndustrias />
          <EmprendedoresHome />
          <CarruselRedes />
          <Footer />
        </>
      ) : (
        <div className="min-h-screen bg-brand-blue" />
      )}
    </main>
  );
}

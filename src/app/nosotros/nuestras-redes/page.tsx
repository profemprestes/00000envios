import type { Metadata } from "next";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Nuestras Redes · Envíos DosRuedas Mar del Plata",
  description: "Seguí a Envíos DosRuedas en Instagram, Facebook y WhatsApp para novedades operativas en Mar del Plata.",
};

const REDES = [
  {
    href: "https://www.instagram.com/enviosdosruedas/",
    icon: "ph-fill ph-instagram-logo",
    style: "bg-gradient-to-tr from-[#f97316] via-[#e11d48] to-[#9333ea]",
    label: "Instagram",
    handle: "@enviosdosruedas",
  },
  {
    href: "https://www.facebook.com/enviosdosruedas",
    icon: "ph-fill ph-facebook-logo",
    style: "bg-social-facebook",
    label: "Facebook",
    handle: "Envíos DosRuedas",
  },
  {
    href: "https://wa.me/542236602699",
    icon: "ph-fill ph-whatsapp-logo",
    style: "bg-social-whatsapp",
    label: "WhatsApp",
    handle: "+54 223 660-2699",
  },
];

export default function NuestrasRedesPage() {
  return (
    <main className="min-h-screen flex flex-col w-full overflow-x-hidden bg-brand-blue">
      <Header />

      <section className="relative flex-1 flex items-center pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
              <i className="ph-fill ph-share-network text-sm"></i>
              Nuestras Redes
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.98] text-brand-white">
              Seguí nuestro movimiento
            </h1>

            <p className="text-base sm:text-lg font-sans leading-relaxed text-brand-white/90 font-light">
              Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {REDES.map((red) => (
              <li key={red.label}>
                <a
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-brand-white/10 border border-brand-white/15 hover:bg-brand-white/15 hover:border-brand-white/25 transition-all"
                >
                  <span className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform ${red.style}`}>
                    <i className={red.icon}></i>
                  </span>
                  <span className="font-subheading uppercase text-sm font-bold text-brand-white">{red.label}</span>
                  <span className="font-mono text-xs text-brand-yellow">{red.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}

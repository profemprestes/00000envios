import Link from "next/link";

const CHANNELS = [
  {
    href: "https://wa.me/542236602699?text=Hola!%20Quiero%20solicitar%20una%20cotizaci%C3%B3n%20para%20mis%20env%C3%ADos.",
    icon: "ph-fill ph-whatsapp-logo",
    iconStyle: "bg-brand-yellow text-brand-blue",
    title: "WhatsApp comercial",
    value: "+54 223 660-2699",
    help: "Cotizaciones y consultas en el día",
    external: true,
  },
  {
    href: "tel:+542236602699",
    icon: "ph ph-phone",
    iconStyle: "bg-brand-white/20 text-brand-yellow",
    title: "Llamada de coordinación",
    value: "223 660-2699",
    help: "Hablás directo con un coordinador logístico",
    external: false,
  },
  {
    href: "mailto:matiascejas@enviosdosruedas.com",
    icon: "ph ph-envelope-simple",
    iconStyle: "bg-brand-white/20 text-brand-yellow",
    title: "Cuentas comerciales",
    value: "matiascejas@enviosdosruedas.com",
    help: "Envianos tu base de envíos para un plan B2B",
    external: false,
  },
];

export default function ContactoHero() {
  return (
    <section
      id="hero-contacto"
      className="relative w-full overflow-hidden bg-brand-blue min-h-[85vh] flex items-center pt-24 pb-16"
    >
      {/* Marca de Agua de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[14vw] leading-none text-brand-white/[0.05] tracking-tighter whitespace-nowrap">
          CONTACTO
        </span>
      </div>

      {/* Resplandores ambientales */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[420px] h-[420px] bg-brand-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Narrativa & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
                <i className="ph ph-map-pin text-sm"></i>
                Mar del Plata 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.98]">
              <span className="text-brand-white">¿Hablamos</span>{" "}
              <span className="relative inline-block bg-brand-yellow text-brand-blue px-4 py-1 mx-1 rounded-2xl transform -rotate-1 font-display font-black shadow-glow-yellow">
                ahora
              </span>
              <span className="text-brand-white">?</span>
            </h1>

            <p className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-white/95 font-light">
              Elegí el canal que mejor se adapte al ritmo de tu e-commerce. Te respondemos en el día.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://wa.me/542236602699?text=Hola!%20Escribo%20desde%20la%20secci%C3%B3n%20de%20contacto."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 min-h-[52px] bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 w-full sm:w-auto text-base"
              >
                <span className="truncate">Hablar por WhatsApp</span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-brand-blue/15 text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-yellow group-hover:translate-x-1 transition-all duration-200">
                  <i className="ph ph-arrow-up-right text-base"></i>
                </span>
              </a>

              <Link
                href="#plan"
                className="font-subheading text-sm uppercase tracking-wider font-bold text-brand-white/80 hover:text-brand-yellow underline-offset-4 hover:underline py-2 transition-colors inline-flex items-center gap-2"
              >
                Pedí un plan a medida
                <i className="ph ph-arrow-down text-sm"></i>
              </Link>
            </div>
          </div>

          {/* Bezel de Canales de Contacto */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[440px]">
              <div className="bg-brand-blue border border-brand-white/25 p-3 sm:p-4 rounded-3xl shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden bg-brand-blue/80 border border-brand-white/20 p-4 sm:p-5 space-y-4">

                  {/* Barra de Estado en Vivo */}
                  <div className="w-full flex items-center justify-between gap-2 bg-brand-blue border border-brand-white/20 px-3.5 py-1.5 rounded-full">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow"></span>
                      </span>
                      <span className="font-subheading text-[11px] uppercase tracking-widest text-brand-yellow font-bold">
                        Ruteo Activo · MDQ
                      </span>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-brand-white bg-brand-white/10 px-2.5 py-0.5 rounded-md border border-brand-white/20">
                      Friuli 1972
                    </span>
                  </div>

                  {/* Lista de Canales */}
                  <ul className="space-y-2.5" aria-label="Canales de contacto">
                    {CHANNELS.map((ch) => (
                      <li key={ch.title}>
                        <a
                          href={ch.href}
                          {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="group/ch flex items-center gap-3 p-3 rounded-2xl bg-brand-white/10 border border-brand-white/15 hover:bg-brand-white/15 hover:border-brand-white/25 transition-all"
                        >
                          <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl ${ch.iconStyle}`}>
                            <i className={ch.icon}></i>
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block font-subheading text-sm font-bold uppercase text-brand-white leading-tight">
                              {ch.title}
                            </span>
                            <span className="block font-mono text-xs text-brand-yellow truncate">
                              {ch.value}
                            </span>
                            <span className="block font-sans text-[11px] text-brand-white/70 leading-snug mt-0.5">
                              {ch.help}
                            </span>
                          </span>
                          <i className="ph ph-arrow-up-right text-brand-white/60 group-hover/ch:text-brand-yellow group-hover/ch:translate-x-0.5 group-hover/ch:-translate-y-0.5 transition-transform shrink-0"></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Borde de Acento Inferior Amarillo */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-yellow"></div>
    </section>
  );
}

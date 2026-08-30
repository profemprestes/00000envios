export default function BaseOperativa() {
  return (
    <section id="base" className="py-20 sm:py-28 bg-brand-blue relative overflow-hidden w-full border-t border-brand-white/15">
      {/* Resplandor ambiental */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none text-brand-white">
            Base de Operaciones MDQ
          </h2>
          <p className="text-brand-white/90 font-sans text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            Centro de distribución y atención presencial en Friuli 1972. Podés retirar cargas o coordinar tu cuenta comercial en persona.
          </p>
          <div className="h-1 w-20 bg-brand-yellow rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Mapa */}
          <div className="lg:col-span-7 rounded-[28px] overflow-hidden border border-brand-white/20 shadow-2xl min-h-[320px] lg:min-h-[420px]">
            <iframe
              src="https://www.google.com/maps?q=Friuli+1972,+Mar+del+Plata,+Buenos+Aires,+Argentina&z=15&output=embed"
              title="Mapa de la base de operaciones de Envíos DosRuedas en Friuli 1972, Mar del Plata"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[320px] lg:min-h-[420px] border-0"
            />
          </div>

          {/* Tarjeta de Dirección y Contacto */}
          <div className="lg:col-span-5 rounded-[32px] p-2 bg-brand-blue-deep/90 border border-brand-white/20 shadow-2xl flex flex-col">
            <address className="p-6 sm:p-7 rounded-[24px] bg-brand-blue border border-brand-white/15 h-full flex flex-col justify-center gap-3 not-italic">

              <div className="flex gap-3 items-start bg-brand-white/10 p-3.5 rounded-xl border border-brand-white/15">
                <span className="p-1.5 bg-brand-white/20 rounded-lg shrink-0 text-brand-yellow">
                  <i className="ph ph-map-pin text-base"></i>
                </span>
                <span className="text-xs sm:text-sm">
                  <span className="block font-subheading uppercase text-brand-yellow text-xs font-bold mb-0.5">Centro de distribución</span>
                  <span className="block text-brand-white font-light">Friuli 1972, Mar del Plata</span>
                  <span className="block text-brand-white/70 text-[11px]">Partido de General Pueyrredón</span>
                </span>
              </div>

              <a
                href="tel:+542236602699"
                className="flex gap-3 items-start bg-brand-white/10 hover:bg-brand-white/15 p-3.5 rounded-xl border border-brand-white/15 transition-colors"
              >
                <span className="p-1.5 bg-brand-white/20 rounded-lg shrink-0 text-brand-yellow">
                  <i className="ph ph-phone text-base"></i>
                </span>
                <span className="text-xs sm:text-sm">
                  <span className="block font-subheading uppercase text-brand-yellow text-xs font-bold mb-0.5">Línea directa y WhatsApp</span>
                  <span className="block text-brand-white font-mono text-sm font-bold">+54 223 660-2699</span>
                </span>
              </a>

              <a
                href="mailto:matiascejas@enviosdosruedas.com"
                className="flex gap-3 items-start bg-brand-white/10 hover:bg-brand-white/15 p-3.5 rounded-xl border border-brand-white/15 transition-colors"
              >
                <span className="p-1.5 bg-brand-white/20 rounded-lg shrink-0 text-brand-yellow">
                  <i className="ph ph-envelope-simple text-base"></i>
                </span>
                <span className="text-xs sm:text-sm min-w-0">
                  <span className="block font-subheading uppercase text-brand-yellow text-xs font-bold mb-0.5">Atención comercial</span>
                  <span className="block text-brand-white break-all">matiascejas@enviosdosruedas.com</span>
                </span>
              </a>

              <div className="flex gap-3 items-start bg-brand-white/10 p-3.5 rounded-xl border border-brand-white/15">
                <span className="p-1.5 bg-brand-white/20 rounded-lg shrink-0 text-brand-yellow">
                  <i className="ph ph-clock text-base"></i>
                </span>
                <span className="w-full text-xs sm:text-sm">
                  <span className="block font-subheading uppercase text-brand-yellow text-xs font-bold mb-1">Horarios de despacho (base central)</span>
                  <span className="flex justify-between items-center text-brand-white/90">
                    <span>Lunes a viernes</span>
                    <span className="font-mono text-brand-yellow font-bold">09:00 - 18:00 hs</span>
                  </span>
                  <span className="flex justify-between items-center text-brand-white/90">
                    <span>Sábados</span>
                    <span className="font-mono text-brand-yellow font-bold">10:00 - 15:00 hs</span>
                  </span>
                </span>
              </div>

            </address>
          </div>

        </div>
      </div>
    </section>
  );
}

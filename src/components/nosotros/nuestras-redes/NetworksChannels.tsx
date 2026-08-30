'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function NetworksChannels() {
  return (
    <section
      id="networks-channels"
      className="py-20 sm:py-28 bg-brand-canvas relative z-10 border-b border-brand-blue/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-sm">
              CONEXIÓN SOCIAL
            </span>
          </div>

          <h2 className="text-brand-blue text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            CANALES <span className="text-brand-yellow bg-brand-blue px-3 py-0.5 rounded-lg inline-block">OFICIALES</span>
          </h2>

          <p className="text-brand-blue/80 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Conectate al instante con nuestras plataformas oficiales y formá parte de la mayor comunidad logística de Mar del Plata.
          </p>

          <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Grilla Asimétrica de Canales */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* WhatsApp: 12 columnas (Canal Principal de Comunicación) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12 rounded-[28px] p-6 sm:p-8 bg-brand-white border border-brand-blue/20 shadow-lg hover:shadow-xl hover:border-brand-blue/40 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-social-whatsapp text-brand-white flex items-center justify-center text-2xl shrink-0 shadow-glow-wa">
                  <i className="ph-fill ph-whatsapp-logo"></i>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue leading-none">
                    WHATSAPP DIRECTO
                  </h3>
                  <span className="text-xs font-mono font-bold text-social-whatsapp mt-1 block">
                    +54 223 660-2699 · ATENCIÓN INMEDIATA
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-brand-blue/85 font-sans leading-relaxed">
                Atención personalizada y sin demoras por WhatsApp. El canal más ágil para cotizaciones instantáneas, retiros urgentes, envíos Flex y seguimiento directo.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href="https://wa.me/542236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-social-whatsapp text-brand-blue-deep hover:bg-[#20bd5a] shadow-glow-wa transition-all duration-300 font-black"
              >
                <span>CHATEÁ AHORA</span>
                <i className="ph-bold ph-arrow-up-right text-base"></i>
              </a>
            </div>
          </motion.div>

          {/* Instagram: 6 columnas */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 rounded-[28px] p-6 sm:p-8 bg-brand-white border border-brand-blue/20 shadow-lg hover:shadow-xl hover:border-brand-blue/40 transition-all flex flex-col justify-between min-h-[320px]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f97316] via-[#e11d48] to-[#9333ea] text-white flex items-center justify-center text-2xl shadow-glow-ig">
                  <i className="ph-fill ph-instagram-logo"></i>
                </div>
                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                  @enviosdosruedas
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue leading-none">
                  INSTAGRAM
                </h3>
                <p className="text-sm text-brand-blue/85 font-sans leading-relaxed mt-2">
                  Mirá nuestro día a día, historias en calle de la flota, novedades de logística urbana y contenido especial para comerciantes.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-blue/10">
              <a
                href="https://instagram.com/enviosdosruedas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 bg-gradient-to-r from-[#9b2c8a] via-[#e11d48] to-[#f97316] hover:opacity-95 text-white shadow-glow-ig"
              >
                <span>SEGUIR EN INSTAGRAM</span>
                <i className="ph-bold ph-arrow-up-right text-base"></i>
              </a>
            </div>
          </motion.div>

          {/* Facebook: 6 columnas */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 rounded-[28px] p-6 sm:p-8 bg-brand-white border border-brand-blue/20 shadow-lg hover:shadow-xl hover:border-brand-blue/40 transition-all flex flex-col justify-between min-h-[320px]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-social-facebook text-white flex items-center justify-center text-2xl shadow-glow-fb">
                  <i className="ph-fill ph-facebook-logo"></i>
                </div>
                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                  Envíos DosRuedas
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue leading-none">
                  FACEBOOK
                </h3>
                <p className="text-sm text-brand-blue/85 font-sans leading-relaxed mt-2">
                  Sumate a nuestra comunidad comercial en Facebook para enterarte de comunicados operativos, novedades de tarifas y servicios.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-blue/10">
              <a
                href="https://facebook.com/enviosdosruedas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between font-subheading font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 bg-social-facebook hover:bg-[#166fe5] text-white shadow-glow-fb"
              >
                <span>SEGUIR EN FACEBOOK</span>
                <i className="ph-bold ph-arrow-up-right text-base"></i>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
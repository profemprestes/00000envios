'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function FaqCta() {
  return (
    <section
      id="faq-cta"
      className="py-20 sm:py-28 bg-brand-blue text-brand-white relative overflow-hidden border-t border-brand-white/15"
    >
      {/* Luces y ambientación */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue-deep/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="rounded-[32px] p-8 sm:p-12 bg-brand-blue-deep/95 border border-brand-white/20 shadow-2xl text-center relative overflow-hidden max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
          }}
        >
          {/* Marca de agua decorativa */}
          <i className="ph-fill ph-chat-circle-dots absolute -right-6 -bottom-6 text-[14rem] text-brand-white/[0.03] pointer-events-none"></i>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10 flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
              <i className="ph-fill ph-headset text-sm"></i>
              SOPORTE HUMANO EN MAR DEL PLATA
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-white leading-none">
              ¿NO ENCONTRASTE LO QUE <span className="text-brand-yellow">BUSCABAS?</span>
            </h3>

            <p className="text-sm sm:text-base text-brand-white/85 leading-relaxed font-sans font-light max-w-xl">
              No te preocupes. Nuestro equipo de coordinación está disponible por WhatsApp para responder tus dudas y cotizar tu servicio en el momento.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full">
              <a
                href="https://wa.me/542236602699?text=Hola,%20tengo%20una%20consulta%20que%20no%20encontr%C3%A9%20en%20las%20FAQ"
                target="_blank"
                rel="noopener noreferrer"
                id="faq-cta-whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300"
              >
                <span>Hablar por WhatsApp</span>
                <i className="ph-bold ph-arrow-up-right text-base"></i>
              </a>

              <Link
                href="/contacto"
                id="faq-cta-contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 bg-brand-white/10 hover:bg-brand-white/20 text-brand-white border border-brand-white/20 transition-all duration-300"
              >
                <span>Página de Contacto</span>
                <i className="ph-bold ph-arrow-right text-base"></i>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
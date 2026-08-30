'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section
      id="newsletter-subscribe"
      className="py-20 sm:py-28 bg-brand-blue text-brand-white relative overflow-hidden border-t border-brand-white/15"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue-deep/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-6 flex flex-col items-center">

          <div className="w-14 h-14 bg-brand-yellow text-brand-blue rounded-3xl flex items-center justify-center text-3xl shadow-glow-yellow">
            <i className="ph-fill ph-envelope-simple"></i>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow font-subheading block">
              COMUNIDAD LOGÍSTICA
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-brand-white leading-none">
              NEWSLETTER <span className="text-brand-yellow">EXCLUSIVO</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-white/85 font-sans leading-relaxed max-w-lg mx-auto font-light">
              Recibí promociones relámpago, novedades operativas de calle, beneficios corporativos y noticias logísticas de Mar del Plata directamente en tu correo.
            </p>
          </div>

          {/* Formulario / Mensaje de Éxito */}
          <div className="w-full rounded-[28px] p-6 sm:p-8 bg-brand-blue-deep/95 border border-brand-white/20 shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="newsletter-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-brand-white text-brand-blue placeholder:text-brand-blue/50 font-sans text-sm rounded-full px-6 py-4 border border-brand-white/20 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-4 bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 shrink-0 cursor-pointer"
                  >
                    <span>Unirme Ahora</span>
                    <i className="ph-bold ph-arrow-right text-base"></i>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  className="py-4 text-center space-y-3 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-social-whatsapp text-brand-white rounded-full flex items-center justify-center text-2xl shadow-glow-wa">
                    <i className="ph-bold ph-check"></i>
                  </div>
                  <h3 className="text-2xl font-display uppercase tracking-tight text-brand-white">
                    ¡Suscripción Exitosa!
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-white/85 font-sans font-light max-w-sm mx-auto">
                    Ya formás parte de la lista comunitaria. Preparate para recibir las mejores novedades y beneficios de entrega en MDQ.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Disclaimer */}
          <div className="flex items-center justify-center gap-2 text-xs text-brand-white/70 font-sans pt-1">
            <i className="ph-fill ph-shield-check text-brand-yellow text-sm"></i>
            <span>Tus datos están protegidos. Podés darte de baja en cualquier momento.</span>
          </div>

        </div>
      </div>
    </section>
  );
}

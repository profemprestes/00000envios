'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ExpressUseCases() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const cases = [
    {
      title: 'Envíos de documentación',
      desc: 'Contratos, documentos legales, certificados y papeles críticos que no pueden esperar.',
      examples: ['Documentos notariales y escrituras', 'Contratos comerciales firmados', 'Certificados médicos y habilitaciones'],
      icon: 'ph-file-text',
      badge: 'LEGAL & TRÁMITES',
    },
    {
      title: 'Envío de insumos',
      desc: 'Distribución rápida de repuestos, insumos médicos y todo tipo de suministros comerciales.',
      examples: ['Repuestos y piezas críticas de maquinaria', 'Insumos y productos de stock', 'Suministros médicos urgentes'],
      icon: 'ph-package',
      badge: 'INSUMOS & REPUES.',
    },
    {
      title: 'Entregas con necesidades de horarios',
      desc: 'Envíos que requieren entregas sumamente precisas dentro de un rango de tiempo restringido.',
      examples: ['Entregas con turnos específicos', 'Desayunos, meriendas y catering', 'Entregas coordinadas en obra'],
      icon: 'ph-clock',
      badge: 'HORARIOS ESTRICTOS',
    },
  ];

  const toggleTab = (idx: number) => {
    setActiveTab(activeTab === idx ? null : idx);
  };

  return (
    <section
      id="express-use-cases"
      className="py-24 bg-brand-blue relative z-10 overflow-hidden border-t-4 border-brand-blue-deep"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-white/10 blur-3xl -z-10 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl -z-10 -translate-y-1/2" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >

        {/* Segmento de encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue-deep)] font-bold">
            CASOS DE USO
          </span>
          <h2 className="text-brand-white text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight border-l-4 border-brand-yellow pl-4 inline-block">
            ¿CUÁNDO NECESITÁS EXPRESS?
          </h2>
          <p className="text-brand-white/85 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Situaciones cotidianas y corporativas donde cada minuto cuenta y la rapidez es fundamental.
          </p>
          <div className="h-2 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Grilla de casos de uso con acordeón */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cases.map((useCase, idx) => {
            const isOpen = activeTab === idx;

            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-4 rounded-2xl transition-all duration-300 flex flex-col group"
              >
                <div className={`rounded-2xl p-6 sm:p-7 space-y-6 h-full flex flex-col justify-between text-left border transition-all duration-300 ${
                  isOpen
                    ? 'bg-brand-blue-deep/95 text-brand-white border-brand-yellow shadow-xl'
                    : 'bg-white text-brand-blue border-brand-blue/20 shadow-lg hover:border-brand-blue hover:shadow-xl'
                }`}>
                  {/* Encabezado: ícono y badge */}
                  <div className="flex justify-between items-center">
                    <div className="p-3 rounded-2xl w-fit border-2 border-brand-blue bg-brand-yellow text-brand-blue shadow-[2px_2px_0px_var(--color-brand-blue-deep)]">
                      <i className={`ph-bold ${useCase.icon} text-xl shrink-0`} />
                    </div>
                    <span className={`text-[10px] font-subheading uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      isOpen ? 'bg-brand-white/15 text-brand-yellow border-brand-yellow/40' : 'bg-brand-blue/10 text-brand-blue border-brand-blue/20'
                    }`}>
                      {useCase.badge}
                    </span>
                  </div>

                  {/* Título y descripción */}
                  <div className="space-y-2">
                    <h3 className={`text-2xl font-display uppercase tracking-wide leading-none ${isOpen ? 'text-brand-white' : 'text-brand-blue'}`}>
                      {useCase.title}
                    </h3>
                    <p className={`text-sm font-sans leading-relaxed ${isOpen ? 'text-brand-white/75' : 'text-brand-blue/75'}`}>
                      {useCase.desc}
                    </p>
                  </div>

                  {/* Botón de despliegue de ejemplos */}
                  <button
                    onClick={() => toggleTab(idx)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase font-subheading flex items-center justify-between px-3.5 border-2 transition-all cursor-pointer ${
                      isOpen
                        ? 'bg-brand-blue text-brand-yellow border-brand-yellow hover:bg-brand-blue-deep'
                        : 'bg-white text-brand-blue border-brand-blue/20 hover:bg-brand-canvas'
                    }`}
                  >
                    <span>Ver Ejemplos</span>
                    <i className={`ph-bold ph-caret-down text-lg shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-yellow' : 'text-brand-blue'}`} />
                  </button>

                  {/* Lista de ejemplos desplegable */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 pt-4 border-t-2 border-brand-white/20">
                          <p className="text-[10px] font-bold tracking-widest text-brand-yellow uppercase">DESPACHOS HABITUALES</p>
                          <ul className="space-y-2.5">
                            {useCase.examples.map((ex, exIdx) => (
                              <motion.li
                                key={ex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: exIdx * 0.08 }}
                                className="flex items-start gap-2 text-xs text-brand-white/75 font-sans"
                              >
                                <i className="ph-bold ph-check-circle text-base text-brand-yellow shrink-0 mt-0.5" />
                                <span className="leading-tight">{ex}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}

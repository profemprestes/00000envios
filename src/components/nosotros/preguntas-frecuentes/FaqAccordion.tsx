'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategories {
  [key: string]: {
    label: string;
    icon: string;
    items: FaqItem[];
  };
}

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>('envios');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories: FaqCategories = {
    envios: {
      label: 'Preguntas sobre Envíos',
      icon: 'ph-bold ph-moped',
      items: [
        {
          question: '¿Qué tipo de envíos realizan en Mar del Plata?',
          answer:
            'Realizamos todo tipo de mensajería y distribución local: Envíos Express (prioritarios en el acto), Envíos LowCost (económicos programados), Plan Emprendedores y entregas de Mercado Libre Flex en el mismo día.',
        },
        {
          question: '¿Cuáles son las zonas y barrios de cobertura?',
          answer:
            'Ofrecemos cobertura total dentro del ejido urbano de Mar del Plata, con base operativa en Friuli 1972 y ruteos estratégicos hacia todas las zonas comerciales y residenciales.',
        },
        {
          question: '¿Cuáles son los límites de tamaño y peso permitidos?',
          answer:
            'Transportamos paquetes ligeros de hasta 5 kg con medidas máximas de 40x40x30 cm. Esto preserva la agilidad del tránsito en moto y garantiza la seguridad vial. Bultos que excedan estas dimensiones pueden cotizarse de forma personalizada.',
        },
        {
          question: '¿Cómo funciona el servicio de Mercado Libre Flex?',
          answer:
            'Retiramos tus paquetes en tu local o domicilio y los entregamos en el mismo día (Same-Day) a tus compradores en Mar del Plata, cuidando tu reputación con entrega 100% garantizada.',
        },
      ],
    },
    pagos: {
      label: 'Preguntas sobre Pagos y Facturación',
      icon: 'ph-bold ph-credit-card',
      items: [
        {
          question: '¿Cómo se abonan y liquidan los servicios?',
          answer:
            'Aceptamos transferencias bancarias, efectivo y cobros periódicos semanales, quincenales o mensuales para comercios habituales y cuentas corrientes. Emitimos factura.',
        },
        {
          question: '¿Realizan cobranzas a contrarreembolso?',
          answer:
            'Sí, efectuamos cobranzas contraentrega en el domicilio del comprador en Mar del Plata, rindiendo el dinero recaudado de forma segura y veloz según el acuerdo comercial.',
        },
        {
          question: '¿Hay planes o descuentos para emprendedores?',
          answer:
            'Sí, nuestro Plan Emprendedores está pensado para proyectos con volumen de envíos frecuente, ofreciendo tarifas preferenciales y soporte prioritario por WhatsApp.',
        },
      ],
    },
  };

  const handleCategoryChange = (catKey: string) => {
    setActiveCategory(catKey);
    setExpandedIndex(0);
  };

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq-accordion"
      className="py-20 sm:py-28 bg-brand-canvas relative overflow-hidden border-b border-brand-blue/15"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-sm">
              PREGUNTAS FRECUENTES
            </span>
          </div>

          <h2 className="text-brand-blue text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            RESOLVÉ TUS <span className="text-brand-yellow bg-brand-blue px-3 py-0.5 rounded-lg inline-block">DUDAS</span>
          </h2>

          <p className="text-brand-blue/80 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Seleccioná una categoría para ver respuestas claras sobre nuestra operativa diaria.
          </p>

          <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Selector de Categorías (Pills) */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {Object.keys(categories).map((catKey) => {
            const cat = categories[catKey];
            const isActive = activeCategory === catKey;

            return (
              <motion.button
                key={catKey}
                onClick={() => handleCategoryChange(catKey)}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-brand-blue text-brand-yellow border-brand-blue shadow-md'
                    : 'bg-brand-white text-brand-blue border-brand-blue/20 hover:border-brand-blue/40'
                }`}
              >
                <i className={`${cat.icon} text-base sm:text-lg ${isActive ? 'text-brand-yellow' : 'text-brand-blue'}`}></i>
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Acordeón de Preguntas */}
        <div className="rounded-[28px] p-6 sm:p-8 bg-brand-white border border-brand-blue/20 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="divide-y divide-brand-blue/10"
            >
              {categories[activeCategory].items.map((item, idx) => {
                const isExpanded = expandedIndex === idx;

                return (
                  <div key={item.question} className="py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group py-1"
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-base transition-colors ${
                            isExpanded ? 'bg-brand-blue text-brand-yellow' : 'bg-brand-blue/10 text-brand-blue'
                          }`}
                        >
                          <i className="ph-bold ph-question"></i>
                        </div>
                        <h3
                          className={`text-base sm:text-lg font-display uppercase tracking-tight transition-colors ${
                            isExpanded ? 'text-brand-blue' : 'text-brand-blue/90 group-hover:text-brand-blue'
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 bg-brand-yellow text-brand-blue' : 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-yellow'
                        }`}
                      >
                        <i className="ph-bold ph-caret-down text-sm"></i>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="pl-12.5 pr-4 pt-3 pb-1 text-sm sm:text-base text-brand-blue/85 font-sans leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

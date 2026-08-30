'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function RecentPosts() {
  const posts = [
    {
      platform: 'Facebook',
      platformIcon: 'ph-fill ph-facebook-logo',
      platformColor: 'text-[#1877F2]',
      date: '21 Jun',
      image: '/cards/hero_express.webp',
      alt: 'Publicación de Facebook - Solución para tus envíos',
      text: '📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀 ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Confianza y responsabilidad son nuestros pilares de cada día.',
      likes: 12,
      comments: 10,
      url: 'https://www.facebook.com/enviosdosruedas',
    },
    {
      platform: 'Instagram',
      platformIcon: 'ph-fill ph-instagram-logo',
      platformColor: 'text-[#E1306C]',
      date: '21 Jun',
      image: '/cards/card_flex.webp',
      alt: 'Publicación de Instagram - Servicio confiable en Mar del Plata',
      text: '📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀 ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Te ofrecemos un servicio confiable y seguimiento ágil.',
      likes: 14,
      comments: 2,
      url: 'https://www.instagram.com/enviosdosruedas/',
    },
    {
      platform: 'Facebook',
      platformIcon: 'ph-fill ph-facebook-logo',
      platformColor: 'text-[#1877F2]',
      date: '21 Jun',
      image: '/cards/card_lowcost.webp',
      alt: 'Publicación de Facebook - Confianza y responsabilidad',
      text: 'Para vos, que vendés en Mar del Plata y hacés envíos... ¿Buscás una mensajería con repartidores propios que cuide tus paquetes como vos?',
      likes: 19,
      comments: 7,
      url: 'https://www.facebook.com/enviosdosruedas',
    },
    {
      platform: 'Instagram',
      platformIcon: 'ph-fill ph-instagram-logo',
      platformColor: 'text-[#E1306C]',
      date: '21 Jun',
      image: '/cards/card_emprendedores.webp',
      alt: 'Publicación de Instagram - Pilares fundamentales',
      text: 'En Envíos DosRuedas, nuestro servicio se construye sobre tres pilares fundamentales: Responsabilidad, Eficiencia y Confianza en cada kilómetro.',
      likes: 24,
      comments: 4,
      url: 'https://www.instagram.com/enviosdosruedas/',
    },
    {
      platform: 'Instagram',
      platformIcon: 'ph-fill ph-instagram-logo',
      platformColor: 'text-[#E1306C]',
      date: '21 Jun',
      image: '/cards/hero_express.webp',
      alt: 'Publicación de Instagram - Tu confianza es nuestro motor',
      text: 'En cada envío, nos das tu confianza. Con cada entrega, te demostramos por qué vale la pena. En Envíos DosRuedas la responsabilidad es nuestro motor.',
      likes: 31,
      comments: 6,
      url: 'https://www.instagram.com/enviosdosruedas/',
    },
  ];

  return (
    <section
      id="recent-posts"
      className="py-20 sm:py-28 bg-brand-canvas relative overflow-hidden border-b border-brand-blue/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-bold tracking-widest font-subheading uppercase shadow-sm">
              EN VIVO
            </span>
          </div>

          <h2 className="text-brand-blue text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none">
            PUBLICACIONES <span className="text-brand-yellow bg-brand-blue px-3 py-0.5 rounded-lg inline-block">RECIENTES</span>
          </h2>

          <p className="text-brand-blue/80 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Lo que está pasando ahora mismo en nuestros canales oficiales. Seguinos para no perderte nada.
          </p>

          <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Grilla Bento de 5 publicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {posts.map((post, idx) => {
            const isFeatured = idx === 0;

            return (
              <motion.div
                key={`${post.url}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-[28px] bg-brand-white border border-brand-blue/20 shadow-lg hover:shadow-xl hover:border-brand-blue/40 overflow-hidden flex flex-col justify-between transition-all ${
                  isFeatured ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4'
                }`}
              >
                <div className={`flex flex-col justify-between h-full ${isFeatured ? 'md:flex-row' : ''}`}>

                  {/* Imagen */}
                  <div
                    className={`relative w-full overflow-hidden bg-brand-blue/5 border-b border-brand-blue/10 ${
                      isFeatured ? 'md:w-1/2 h-64 md:h-full min-h-[280px] md:border-b-0 md:border-r' : 'h-56'
                    }`}
                  >
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {isFeatured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-brand-yellow text-brand-blue text-xs font-subheading uppercase tracking-widest rounded-lg font-bold shadow-md">
                          DESTACADO
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Detalle */}
                  <div className={`flex flex-col justify-between p-6 ${isFeatured ? 'md:w-1/2 md:p-8' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-brand-blue/10 pb-3">
                        <div>
                          <h4 className="text-sm font-subheading uppercase tracking-wider text-brand-blue font-bold leading-none">
                            Envíos DosRuedas
                          </h4>
                          <span className="text-[11px] font-mono text-brand-blue/60 mt-1 block">
                            {post.date} · Mar del Plata
                          </span>
                        </div>

                        <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-lg">
                          <i className={`${post.platformIcon} ${post.platformColor}`}></i>
                        </div>
                      </div>

                      <p className="text-sm text-brand-blue/85 font-sans leading-relaxed line-clamp-3">
                        {post.text}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brand-blue/10 flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4 text-xs font-mono font-bold text-brand-blue/70">
                        <span className="flex items-center gap-1">
                          <i className="ph-fill ph-heart text-sm text-rose-500"></i>
                          <span>{post.likes}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="ph-fill ph-chat-circle text-sm text-brand-blue"></i>
                          <span>{post.comments}</span>
                        </span>
                      </div>

                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-subheading uppercase tracking-wider font-bold px-4 py-2 rounded-full bg-brand-blue text-brand-yellow hover:bg-brand-blue-hover transition-colors"
                      >
                        <span>Ver post</span>
                        <i className="ph-bold ph-arrow-up-right text-xs"></i>
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

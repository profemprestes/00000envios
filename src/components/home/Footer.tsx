import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-blue text-white border-t border-white/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl uppercase tracking-tight text-brand-yellow">
              ENVÍOS DOSRUEDAS
            </h3>
            <p className="text-xs font-sans text-white/80 leading-relaxed">
              Soluciones integrales de logística urbana, mensajería y última milla en Mar del Plata.
            </p>
          </div>
          <div>
            <h4 className="font-subheading uppercase text-sm font-bold tracking-wider text-brand-yellow mb-3">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs font-sans text-white/80">
              <li>Mensajería Express</li>
              <li>Mercado Envíos Flex</li>
              <li>Logística Corporativa</li>
              <li>Cobranzas y Trámites</li>
            </ul>
          </div>
          <div>
            <h4 className="font-subheading uppercase text-sm font-bold tracking-wider text-brand-yellow mb-3">
              Contacto
            </h4>
            <ul className="space-y-2 text-xs font-mono text-white/80">
              <li>WhatsApp: +54 223 660-2699</li>
              <li>Base: Friuli 1972, MDQ</li>
              <li>Horario: Lun a Sáb 8:00 a 20:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-subheading uppercase text-sm font-bold tracking-wider text-brand-yellow mb-3">
              Canales
            </h4>
            <div className="flex gap-3 text-xl text-brand-yellow">
              <a href="https://www.facebook.com/enviosdosruedas" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="ph-fill ph-facebook-logo"></i>
              </a>
              <a href="https://www.instagram.com/enviosdosruedas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="ph-fill ph-instagram-logo"></i>
              </a>
              <a href="https://wa.me/542236602699" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="ph-fill ph-whatsapp-logo"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs font-mono text-white/60">
          © 2026 Envíos DosRuedas · Todos los derechos reservados · Mar del Plata, Argentina.
        </div>
      </div>
    </footer>
  );
}

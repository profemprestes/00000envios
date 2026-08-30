'use client';

import { useState, type FormEvent } from "react";

type FormState = {
  nombre: string;
  telefono: string;
  volumen: string;
  modalidad: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_STATE: FormState = {
  nombre: "",
  telefono: "",
  volumen: "",
  modalidad: "",
};

function validate(data: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (data.nombre.trim().length < 2) {
    errors.nombre = "Escribí tu nombre o el de tu comercio.";
  }
  if (data.telefono.replace(/\D/g, "").length < 8) {
    errors.telefono = "Ingresá un número con al menos 8 dígitos.";
  }
  if (!data.volumen) {
    errors.volumen = "Elegí un volumen aproximado.";
  }
  if (!data.modalidad) {
    errors.modalidad = "Elegí la modalidad que más usás.";
  }

  return errors;
}

export default function PlanForm() {
  const [data, setData] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fieldErrors = validate(data);

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setStatus({ type: "error", text: "Revisá los campos marcados antes de enviar." });
      return;
    }

    const mensaje = [
      "Hola! Quiero pedir un plan a medida.",
      `Comercio: ${data.nombre}`,
      `Teléfono: ${data.telefono}`,
      `Volumen mensual: ${data.volumen}`,
      `Modalidad: ${data.modalidad}`,
    ].join("\n");

    window.open(
      `https://wa.me/542236602699?text=${encodeURIComponent(mensaje)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setStatus({ type: "success", text: "Se abrió WhatsApp con tu pedido. Te respondemos en el día." });
  }

  return (
    <section id="plan" className="py-20 sm:py-28 bg-brand-canvas relative overflow-hidden w-full border-t border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[32px] p-2 bg-white border border-brand-blue/20 shadow-2xl">
          <div className="p-6 sm:p-10 lg:p-12 rounded-[24px] bg-white grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Copy */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-[0.95] text-brand-blue">
                Pedí un plan a medida
              </h2>
              <p className="text-brand-blue/85 text-sm sm:text-base leading-relaxed font-sans font-medium">
                Si despachás a diario en Mar del Plata o vendés online, armamos un esquema con tarifas fijas, retiros programados y cuenta corriente mensual.
              </p>
              <div className="h-1 w-20 bg-brand-yellow rounded-full"></div>

              <ul className="space-y-2.5 pt-2">
                <li className="flex items-start gap-2 text-sm text-brand-blue">
                  <i className="ph-fill ph-check-circle text-brand-blue text-base shrink-0 mt-0.5"></i>
                  <span>Tarifas por volumen, sin costo de apertura de cuenta.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-brand-blue">
                  <i className="ph-fill ph-check-circle text-brand-blue text-base shrink-0 mt-0.5"></i>
                  <span>Retiros programados en tu local.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-brand-blue">
                  <i className="ph-fill ph-check-circle text-brand-blue text-base shrink-0 mt-0.5"></i>
                  <span>Cobertura en todo Mar del Plata y Batán.</span>
                </li>
              </ul>
            </div>

            {/* Formulario */}
            <form className="lg:col-span-7 space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="plan-nombre" className="block text-xs font-subheading font-bold uppercase tracking-wider text-brand-blue">
                    Nombre o comercio
                  </label>
                  <div className="relative">
                    <i className="ph ph-storefront absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-blue/50 text-lg"></i>
                    <input
                      id="plan-nombre"
                      name="nombre"
                      type="text"
                      autoComplete="organization"
                      placeholder="Tienda Güemes"
                      value={data.nombre}
                      onChange={(e) => updateField("nombre", e.target.value)}
                      aria-invalid={Boolean(errors.nombre)}
                      aria-describedby={errors.nombre ? "plan-nombre-error" : undefined}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-brand-blue/20 bg-white text-brand-blue placeholder:text-brand-blue/60 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus:border-brand-blue transition-colors"
                    />
                  </div>
                  {errors.nombre && (
                    <p id="plan-nombre-error" className="flex items-center gap-1.5 text-xs text-rose-600">
                      <i className="ph-fill ph-warning-circle"></i>
                      {errors.nombre}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="plan-telefono" className="block text-xs font-subheading font-bold uppercase tracking-wider text-brand-blue">
                    WhatsApp o teléfono
                  </label>
                  <div className="relative">
                    <i className="ph ph-phone absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-blue/50 text-lg"></i>
                    <input
                      id="plan-telefono"
                      name="telefono"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="223 660-2699"
                      value={data.telefono}
                      onChange={(e) => updateField("telefono", e.target.value)}
                      aria-invalid={Boolean(errors.telefono)}
                      aria-describedby={errors.telefono ? "plan-telefono-error" : "plan-telefono-help"}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-brand-blue/20 bg-white text-brand-blue placeholder:text-brand-blue/60 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus:border-brand-blue transition-colors"
                    />
                  </div>
                  {errors.telefono ? (
                    <p id="plan-telefono-error" className="flex items-center gap-1.5 text-xs text-rose-600">
                      <i className="ph-fill ph-warning-circle"></i>
                      {errors.telefono}
                    </p>
                  ) : (
                    <p id="plan-telefono-help" className="text-xs text-brand-blue/60">
                      Te escribimos por WhatsApp a este número.
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="plan-volumen" className="block text-xs font-subheading font-bold uppercase tracking-wider text-brand-blue">
                    Volumen mensual
                  </label>
                  <div className="relative">
                    <i className="ph ph-package absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-blue/50 text-lg z-10"></i>
                    <select
                      id="plan-volumen"
                      name="volumen"
                      value={data.volumen}
                      onChange={(e) => updateField("volumen", e.target.value)}
                      aria-invalid={Boolean(errors.volumen)}
                      aria-describedby={errors.volumen ? "plan-volumen-error" : undefined}
                      className="w-full appearance-none pl-11 pr-9 py-3 rounded-xl border border-brand-blue/20 bg-white text-brand-blue text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus:border-brand-blue transition-colors"
                    >
                      <option value="">Seleccioná una opción</option>
                      <option value="20 a 50 envíos">20 a 50 envíos</option>
                      <option value="50 a 200 envíos">50 a 200 envíos</option>
                      <option value="200 a 500 envíos">200 a 500 envíos</option>
                      <option value="Más de 500 envíos">Más de 500 envíos (gran cuenta)</option>
                    </select>
                    <i className="ph ph-caret-down absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-blue/50 text-sm pointer-events-none"></i>
                  </div>
                  {errors.volumen && (
                    <p id="plan-volumen-error" className="flex items-center gap-1.5 text-xs text-rose-600">
                      <i className="ph-fill ph-warning-circle"></i>
                      {errors.volumen}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="plan-modalidad" className="block text-xs font-subheading font-bold uppercase tracking-wider text-brand-blue">
                    Modalidad
                  </label>
                  <div className="relative">
                    <i className="ph ph-motorcycle absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-blue/50 text-lg z-10"></i>
                    <select
                      id="plan-modalidad"
                      name="modalidad"
                      value={data.modalidad}
                      onChange={(e) => updateField("modalidad", e.target.value)}
                      aria-invalid={Boolean(errors.modalidad)}
                      aria-describedby={errors.modalidad ? "plan-modalidad-error" : undefined}
                      className="w-full appearance-none pl-11 pr-9 py-3 rounded-xl border border-brand-blue/20 bg-white text-brand-blue text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus:border-brand-blue transition-colors"
                    >
                      <option value="">Seleccioná una opción</option>
                      <option value="Envíos Express">Envíos Express</option>
                      <option value="Envíos LowCost">Envíos LowCost</option>
                      <option value="Mercado Libre Flex">Mercado Libre Flex</option>
                      <option value="Fulfillment 3PL">Fulfillment 3PL</option>
                    </select>
                    <i className="ph ph-caret-down absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-blue/50 text-sm pointer-events-none"></i>
                  </div>
                  {errors.modalidad && (
                    <p id="plan-modalidad-error" className="flex items-center gap-1.5 text-xs text-rose-600">
                      <i className="ph-fill ph-warning-circle"></i>
                      {errors.modalidad}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 min-h-[52px] bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300"
              >
                <span>Pedir plan y tarifas</span>
                <i className="ph ph-paper-plane-tilt text-base"></i>
              </button>

              <p role="status" aria-live="polite" className={`text-xs font-sans text-center ${status?.type === "error" ? "text-rose-600" : "text-brand-blue/70"}`}>
                {status?.text ?? ""}
              </p>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

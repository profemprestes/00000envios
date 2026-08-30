export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-brand-blue">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-brand-yellow/30 border-t-brand-yellow animate-spin" />
        <span className="font-subheading uppercase tracking-widest text-brand-yellow text-sm">
          Cargando Envíos DosRuedas...
        </span>
      </div>
    </div>
  );
}

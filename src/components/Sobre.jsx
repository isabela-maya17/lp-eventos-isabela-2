import { eventoData } from "../data/evento";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-6 max-w-4xl mx-auto text-center" aria-labelledby="sobre-titulo">
      <h2 id="sobre-titulo" className="text-3xl font-bold text-slate-900 mb-6">Sobre o Evento</h2>
      <p className="text-lg leading-relaxed text-slate-600 mb-10 max-w-3xl mx-auto">
        {eventoData.sobre}
      </p>
      
      {/* Grid de indicadores numéricos */}
      <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
        {eventoData.numeros.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="block text-2xl sm:text-3xl font-black text-brand-leaf">{item.qtd}</span>
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
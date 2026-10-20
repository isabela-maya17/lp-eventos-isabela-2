import { eventoData } from "../data/evento";

export default function Programacao() {
  return (
    <section id="programacao" className="py-16 px-6 max-w-3xl mx-auto" aria-labelledby="prog-titulo">
      <h2 id="prog-titulo" className="text-3xl font-bold text-slate-900 text-center mb-10">Programação</h2>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
        {eventoData.programacao.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
            <div className="flex items-center gap-4">
              <span className="font-bold text-brand-tomato min-w-[50px]">{item.horario}</span>
              <span className="text-slate-800 font-medium">{item.atividade}</span>
            </div>
            <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-sm self-start sm:self-center">
              {item.dia}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
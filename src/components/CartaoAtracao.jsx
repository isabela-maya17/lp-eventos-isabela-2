export default function CartaoAtracao({ nome, especialidade, descricao }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">{nome}</h3>
        <span className="text-sm font-medium text-brand-leaf block mb-3">{especialidade}</span>
        <p className="text-slate-500 text-sm leading-relaxed">{descricao}</p>
      </div>
    </div>
  );
}
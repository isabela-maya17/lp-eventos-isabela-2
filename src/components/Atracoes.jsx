import { eventoData } from "../data/evento";
import CartaoAtracao from "./CartaoAtracao";

export default function Atracoes() {
  return (
    <section id="atracoes" className="py-16 px-6 max-w-5xl mx-auto" aria-labelledby="atr-titulo">
      <h2 id="atr-titulo" className="text-3xl font-bold text-slate-900 text-center mb-2">Atrações Confirmadas</h2>
      <p className="text-center text-slate-500 mb-10 text-sm sm:text-base">Profissionais e produtores que farão parte do festival.</p>
      <div className="grid sm:grid-cols-2 gap-6">
        {eventoData.atracoes.map((item, index) => (
          <CartaoAtracao key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
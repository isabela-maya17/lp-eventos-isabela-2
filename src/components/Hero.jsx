import { eventoData } from "../data/evento"; // ESSA LINHA RESOLVE O ERRO!

export default function Hero() {
  return (
    <section className="bg-brand-tomato text-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Festival Sabores da Alta Paulista
        </h1>
        <p className="text-lg sm:text-xl text-red-100 max-w-2xl mx-auto font-medium">
          {eventoData.slogan}
        </p>
        <p className="text-sm sm:text-base text-red-200 font-medium">
          {eventoData.data} · {eventoData.local}
        </p>
        <div className="pt-4">
          <a href="#ingressos" className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-3 rounded-lg shadow-sm transition-all transform hover:scale-[1.02]">
            Garantir minha vaga
          </a>
        </div>
      </div>
    </section>
  );
}
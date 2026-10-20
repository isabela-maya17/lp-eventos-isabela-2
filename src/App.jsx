import Cabecalho from "./components/Cabecalho";
import Inscricao from "./components/Inscricao";
import PerguntasFrequentes from "./components/PerguntasFrequentes";

export default function App() {
  return (
    <div className="bg-[#fefce8] min-h-screen text-slate-900 font-sans">
      <Cabecalho />
      <main className="space-y-4">
        {/* Suas outras seções estáticas ou de dados das etapas 3 e 4 entram aqui */}
        <Inscricao />
        <PerguntasFrequentes />
      </main>
    </div>
  );
}
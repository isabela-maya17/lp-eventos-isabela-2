import { useState } from "react";

export default function PerguntasFrequentes() {
  // Array contendo estritamente as perguntas fornecidas no briefing do Tema D
  const faqDados = [
    { q: "Aceita cartão?", a: "Sim, todas as barracas aceitam cartão e Pix." },
    { q: "Tem opção vegetariana?", a: "Sim, pelo menos cinco barracas têm pratos sem carne." },
    { q: "Posso levar meu cachorro?", a: "Pode, desde que na coleira." }
  ];

  // Estado começa como null (nenhuma pergunta expandida de início)
  const [abertoIdx, setAbertoIdx] = useState(null);

  const gerenciarClique = (index) => {
    // Se o índice clicado for igual ao que já está aberto, define como null (fecha tudo)
    // Caso contrário, define o novo índice clicado para abrir a resposta correta
    setAbertoIdx(abertoIdx === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-2xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold text-tomate text-center mb-6">Perguntas Frequentes</h2>
      <div className="space-y-3">
        
        {faqDados.map((item, index) => (
          <div key={index} className="bg-white rounded-md border border-slate-200 overflow-hidden shadow-2xs">
            {/* Linha clicável/Botão da pergunta */}
            <button
              type="button"
              onClick={() => gerenciarClique(index)}
              className="w-full text-left p-4 font-semibold text-slate-700 bg-slate-50/50 flex justify-between items-center text-sm sm:text-base cursor-pointer"
            >
              <span>{item.q}</span>
              <span className="text-tomate font-bold text-xs">{abertoIdx === index ? "▲" : "▼"}</span>
            </button>
            
            {/* Exibição condicional da resposta correspondente */}
            {abertoIdx === index && (
              <div className="p-4 bg-white border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
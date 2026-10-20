import { useState } from "react";

export default function Inscricao() {
  // Valores dos ingressos retirados diretamente do briefing do Tema D
  const tiposDeIngresso = [
    { nome: "Aula-show com degustação", preco: 25 },
    { nome: "Passaporte de aulas-show", preco: 90 }
  ];

  // --- ESTADOS DO FORMULÁRIO ---
  const [nome, setNome] = useState("");
  const [ingressoIdx, setIngressoIdx] = useState(0); // Padrão: Primeiro item (Aula-show - R$25)
  const [quantidade, setQuantidade] = useState(1);   // Passo 4: Campo de quantidade
  const [erroNome, setErroNome] = useState("");     // Passo 3: Texto de erro de validação
  const [confirmado, setConfirmado] = useState(false);

  // --- CÁLCULO DO TOTAL (Passo 4) ---
  const precoUnitario = tiposDeIngresso[ingressoIdx].preco;
  const valorTotal = precoUnitario * quantidade;

  // --- SUBMIT E VALIDAÇÃO (Passo 3) ---
  const tratarEnvio = (e) => {
    e.preventDefault(); // Bloqueia o recarregamento automático do navegador

    // Validação: .trim() descarta espaços vazios antes e depois das letras digitadas
    if (nome.trim().length < 3) {
      setErroNome("O nome deve conter pelo menos 3 letras.");
      setConfirmado(false); // Não mostra a janela de sucesso
    } else {
      setErroNome(""); // Remove o erro caso o campo seja corrigido
      setConfirmado(true); // Autoriza a exibição da mensagem de sucesso
    }
  };

  return (
    <section id="inscricao" className="max-w-md mx-auto py-12 px-6 scroll-mt-16">
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs">
        <h2 className="text-2xl font-bold text-tomate mb-6">Comprar Ingressos</h2>
        
        <form onSubmit={tratarEnvio} className="space-y-4">
          {/* Campo de Texto - Nome */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Nome Completo:</label>
            <input 
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border border-slate-300 rounded-sm px-3 py-2 text-sm focus:outline-2 focus:outline-tomate text-slate-800"
              placeholder="Digite seu nome completo"
            />
            {/* Mensagem Condicional do Passo 3 */}
            {erroNome && <p className="text-red-600 text-xs font-bold mt-1">⚠️ {erroNome}</p>}
          </div>

          {/* Campo de Seleção - Tipo do Ingresso */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Escolha a Atividade:</label>
            <select
              value={ingressoIdx}
              onChange={(e) => setIngressoIdx(Number(e.target.value))}
              className="w-full border border-slate-300 bg-white rounded-sm px-3 py-2 text-sm focus:outline-2 focus:outline-tomate text-slate-800"
            >
              {tiposDeIngresso.map((ing, idx) => (
                <option key={idx} value={idx}>{ing.nome} — R$ {ing.preco},00</option>
              ))}
            </select>
          </div>

          {/* Campo Numérico - Quantidade (Passo 4) */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Quantidade:</label>
            <input 
              type="number"
              min="1"
              value={quantidade}
              // Garante que valores nulos, strings ou negativos sejam forçados a retornar para o mínimo de 1
              onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full border border-slate-300 rounded-sm px-3 py-2 text-sm focus:outline-2 focus:outline-tomate text-slate-800"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-folha text-white font-bold py-2.5 rounded-sm text-sm hover:opacity-95 cursor-pointer transition-opacity"
          >
            Confirmar Inscrição
          </button>
        </form>

        {/* Janela de Confirmação com o Totalizador do Pedido (Passo 4) */}
        {confirmado && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-900 rounded-md text-sm space-y-1">
            <h3 className="font-bold text-base text-green-800 mb-1">✓ Inscrição Confirmada!</h3>
            <p>Titular: <strong>{nome}</strong></p>
            <p>Pedido: {quantidade}x {tiposDeIngresso[ingressoIdx].nome}</p>
            <p className="text-base pt-1 border-t border-green-200 mt-2 font-bold text-green-950">
              Valor Total: R$ {valorTotal.toFixed(2).replace(".", ",")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
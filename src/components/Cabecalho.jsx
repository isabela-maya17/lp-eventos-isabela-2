import { useState } from "react";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-white text-slate-800 sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <a href="#" className="text-xl font-bold text-brand-tomato tracking-tight hover:opacity-85">
            Festival Sabores da Alta Paulista
          </a>
          {/* Botão de Menu visível apenas no Mobile */}
          <button 
            onClick={() => setMenuAberto(!menuAberto)}
            className="sm:hidden text-slate-600 focus:outline-2 focus:outline-brand-tomato p-1 rounded-sm text-sm font-bold cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {menuAberto ? "Fechar ✕" : "Menu ☰"}
          </button>
        </div>

        {/* Links: Mostra sempre no desktop (sm:flex), no mobile depende do state */}
        <nav aria-label="Navegação principal" className={`${menuAberto ? "block" : "hidden"} sm:block w-full sm:w-auto`}>
          <ul className="flex flex-col sm:flex-row text-center sm:text-left gap-4 sm:gap-6 text-sm font-semibold text-slate-600 mt-4 sm:mt-0">
            <li><a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-brand-tomato block py-1">Sobre</a></li>
            <li><a href="#programacao" onClick={() => setMenuAberto(false)} className="hover:text-brand-tomato block py-1">Programação</a></li>
            <li><a href="#atracoes" onClick={() => setMenuAberto(false)} className="hover:text-brand-tomato block py-1">Atrações</a></li>
            <li><a href="#ingressos" onClick={() => setMenuAberto(false)} className="hover:text-brand-tomato block py-1">Inscrição</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
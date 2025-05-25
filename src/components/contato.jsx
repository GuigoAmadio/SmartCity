import React, { useState } from "react";

export default function ContatoSection({ id, irParaCheckout }) {
  return (
    <section id={id} className="bg-slate-900 text-white pb-16 px-4 text-center">
      <h2 className="text-[3vh] font-bold mb-4">
        Se precisar falar comigo, aqui esta meu email:
      </h2>
      <p className="text-[3vh] mb-4 text-lime-500 font-bold">
        vendas1.0suporte1.0@gmail.com
      </p>
      <button
        onClick={() => {
          irParaCheckout("Contato", "main,biologico,sociologico,pratico");
        }}
        className="border-2 border-dashed border-red-400 hover:scale-105 shadow-lg shadow-yellow-500 h-12 w-72 mt-6 bg-white text-black rounded-lg text-[2vh] font-bold hover:bg-lime-400 hover:text-white transition"
      >
        🔥 QUERO SER FODA 🔥
      </button>
    </section>
  );
}

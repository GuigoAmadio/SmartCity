import React from "react";

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center px-4">
      {/* Título central */}
      <h1 className="text-white font-extrabold text-5xl mb-16 tracking-wider">
        Tomorrow Eye
      </h1>

      {/* Caixa de chat simulada */}
      <div className="w-full max-w-4xl bg-[#1E1E1E] rounded-xl shadow-lg flex flex-col h-[70vh] p-6 overflow-y-auto space-y-4 border border-[#2A2A2A]">
        {/* Mensagem exemplo */}
        <div className="bg-[#2A2A2A] text-white p-4 rounded-lg self-start max-w-[75%]">
          Olá! Como posso te ajudar hoje?
        </div>

        <div className="bg-[#333333] text-white p-4 rounded-lg self-end max-w-[75%]">
          Me explique o funcionamento do projeto.
        </div>

        <div className="bg-[#2A2A2A] text-white p-4 rounded-lg self-start max-w-[75%]">
          Claro! O projeto é estruturado para atender prefeituras e empresas,
          criando soluções urbanas inteligentes e sustentáveis...
        </div>
      </div>

      {/* Campo de input centralizado */}
      <div className="w-full max-w-4xl mt-10 flex flex-col items-center">
        <input
          type="text"
          placeholder="Digite sua pergunta..."
          className="w-full px-6 py-4 rounded-full bg-[#1E1E1E] text-white border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#444444] transition"
        />
        <div className="flex space-x-4 mt-4">
          <button className="px-6 py-2 rounded-full bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] transition">
            Nova conversa
          </button>
          <button className="px-6 py-2 rounded-full bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] transition">
            Configurações
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

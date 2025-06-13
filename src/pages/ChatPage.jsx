import React, { useState } from "react";
import {
  PaperClipIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSend = () => {
    if (message.trim() === "" && !file) return;
    console.log("Mensagem enviada:", message);
    if (file) console.log("Arquivo enviado:", file.name);
    setMessage("");
    setFile(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) setFile(e.target.files[0]);
  };

  return (
    <div
      className="fixed inset-0 flex flex-col justify-between px-4 py-8"
      style={{
        background: "linear-gradient(180deg, #121212 0%, #101010 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Luzes suaves de fundo */}
      <div className="absolute w-72 h-72 bg-pink-300 rounded-full opacity-10 -top-20 -left-32 blur-3xl pointer-events-none"></div>
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full opacity-10 -bottom-10 -right-32 blur-3xl pointer-events-none"></div>

      {/* Título */}
      <h1 className="text-white font-extrabold text-5xl tracking-wider text-center mt-20">
        Tomorrow Eye
      </h1>

      {/* Espaçamento central flexível */}
      <div className="flex-1"></div>

      {/* Caixa de input centralizada */}
      <div className="w-2/3 mx-auto">
        <div className="p-[1px] rounded-xl bg-gradient-to-tr from-pink-400 to-blue-400">
          <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl p-4 flex flex-col space-y-3 transition-all">
            <textarea
              rows={3}
              placeholder="O que deseja saber?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-white focus:outline-none resize-none overflow-hidden placeholder:text-gray-400"
            />

            {/* Ícones abaixo */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <label className="cursor-pointer">
                  <PaperClipIcon className="w-6 h-6 text-white hover:scale-110 transition" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <FaceSmileIcon className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition" />
              </div>

              <div className="flex space-x-4">
                <MicrophoneIcon className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition" />
                <PaperAirplaneIcon
                  className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition rotate-45"
                  onClick={handleSend}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botões de controle */}
      <div className="flex justify-center gap-8 mt-10">
        <div className="p-[1px] rounded-full bg-gradient-to-tr from-pink-400 to-blue-400">
          <button className="px-8 py-2 rounded-full bg-[#1E1E1E] text-white font-medium">
            Nova conversa
          </button>
        </div>
        <button className="px-8 py-2 rounded-full bg-[#2A2A2A] text-white font-medium hover:bg-[#3A3A3A] transition">
          Configurações
        </button>
      </div>
    </div>
  );
};

export default ChatPage;

import React, { useState, useEffect } from "react";

import ofertaAzul from "../assets/ofertaAzul.webp";
import ebookBiologico from "../assets/ebookBiologico.webp";
import ebookSocial from "../assets/ebookSocial.webp";
import ebookTecnicas from "../assets/ebookTecnicas.webp";
import ebookPrincipal from "../assets/ebookPrincipal.webp";

export default function OfertasSection({ id, irParaCheckout }) {
  const generateBolas = () => {
    return Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 30}px`,
      opacity: Math.random() * 0.2 + 0.3,
    }));
  };

  const [bolas, setBolas] = useState([]);

  useEffect(() => {
    setBolas(generateBolas());
  }, []);
  return (
    <div id={id}>
      <section className="relative bg-slate-900 text-white flex flex-col md:flex-row md:px-16 py-20 items-center gap-20">
        {/* Bolinhas Pequenas de Fundo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {bolas.map((bola, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-2xl bg-neutral-950"
              style={{
                width: bola.size,
                height: bola.size,
                top: bola.top,
                left: bola.left,
              }}
            ></div>
          ))}
        </div>
        <div className="z-10 bg-zinc-900 relative text-center py-5 px-2 w-3/4 rounded-xl shadow-xl shadow-lime-800 border border-lime-900 flex flex-col items-center ">
          <div
            className="absolute -top-7 left-1/4 
          flex items-center bg-white shadow-2xl rounded-full
          p-2 w-40 justify-center border border-gray-400 animate-pulse"
          >
            <img src={ofertaAzul} alt="" className="size-8" />
            <p className="font-bold text-cyan-500 text-xl">OFERTA</p>
          </div>

          <h1 className="my-4 font-black text-lime-500 text-[3vh]">
            TRANSFORME SUA VIDA
          </h1>
          <h1 className="font-black mt-5">Como ser sociável</h1>
          <p className="text-lime-500 text-[4vh] font-black mb-5">R$16,80</p>
          <div className="text-start my-5">
            <p className="mt-2 px-4">✔️ Eu vou mudar a sua vida.</p>
          </div>
          <button
            onClick={() => {
              irParaCheckout(
                "OfertasTerceira",
                "main,biologico,sociologico,pratico"
              );
            }}
            className="mb-4 hover:scale-105 shadow-lg shadow-lime-800 h-12 w-1/2 border border-lime-700 mt-6 bg-lime-500 text-white rounded-lg text-[2vh] font-bold hover:bg-lime-950 hover:text-white transition"
          >
            Comprar agora
          </button>
        </div>
      </section>
      <section className="bg-slate-900 text-white py-10 px-4 text-center flex flex-col items-center">
        <h2 className="text-[4vh] font-bold text-brown-700">
          PRECOS PROMOCIONAIS
        </h2>
        <h2 className="text-[4vh] font-bold mb-6 text-lime-900">
          POR TEMPO LIMITADO!
        </h2>
        <p className="font-semibold texl-md w-80">
          Voce esta a uma decisao de mudar completamente a sua vida por apenas:
        </p>

        <h1 className="text-[6vh] font-extrabold text-neutral-400 mt-2">
          3 x de <span className="font-black text-lime-900">R$5,60</span>
        </h1>
        <h2>
          OU por R$ 16,80 <span className="text-lime-500">a vista</span>
        </h2>
        <button
          onClick={() => {
            irParaCheckout("OfertasFinal");
          }}
          className="animate-bounce shadow-xl shadow-lime-800 rounded-2xl w-80 h-14 text-[3vh] font-bold text-white hover:bg-lime-800 transition hover:scale-105 bg-lime-900 mt-12 mb-20"
        >
          Quero conhecer
        </button>
      </section>
    </div>
  );
}

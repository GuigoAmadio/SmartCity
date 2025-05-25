import React, { useState } from "react";

import capaLivro from "../assets/capaAA.png";

export default function HeroSection({ id, irParaCheckout }) {
  return (
    <section
      id={id}
      className="text-white relative bg-slate-900 min-h-screen flex flex-col items-center text-center px-4 py-10"
    >
      <h1 className="mt-12 text-[4vh] md:text-[5vh] font-bold">
        Eu NAO VOU mentir para voce.<br></br>
      </h1>
      <p className="text-[3vh] w-3/4 md:w-1/2 font-bold">
        <span className="text-lime-600 font-extrabold">
          Talvez eu nao seja ninguem, voce TEM que saber disso.
        </span>{" "}
        mas eh <span className="text-lime-600">INEXPLICAVEL</span> a atencao que
        eu chamo, em QUALQUER lugar que eu vou.
      </p>
      <div className="relative flex justify-center items-center h-auto my-20">
        {/* Glow / Aura */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-lime-800 to-emerald-600 opacity-40 blur-2xl z-10"></div>

        {/* Ovo central (na frente) */}
        <img
          src={capaLivro}
          alt="Ovo central"
          className="relative z-20 w-[200px] md:w-[400px]"
        />
      </div>
      <div>
        <p className="font-bold text-2xl text-lime-500">CONTINUE LENDO⬇️</p>
        <img src="" alt="" />
      </div>
    </section>
  );
}

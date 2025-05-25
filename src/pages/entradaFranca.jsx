import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  registrarLog,
  enviarLogs,
  obterSalvarParametrosUrl,
} from "../utils/utils";
import { LazyLandingPage } from "../App"; // Importa para fazer o preload

// Carregue o componente da LandingPage de forma assíncrona

export default function Quiz() {
  const navigate = useNavigate();
  const enviandoBeacon = useRef(false);

  function handleUnload() {
    if (enviandoBeacon.current) return;
    enviandoBeacon.current = true;

    enviarLogs("entradaFranca", "landingPage", "checkout");
  }

  useEffect(() => {
    // Verifica se os parâmetros já foram salvos dentro da chave "quiz"
    const dadosQuiz = JSON.parse(sessionStorage.getItem("entradaFranca")) || {};

    if (dadosQuiz.parametrosEntrada) {
      console.log("⚠️ Parâmetros já salvos anteriormente.");
      return;
    }

    // Se não estiverem salvos, captura e salva
    obterSalvarParametrosUrl("entradaFranca");
  }, []);

  const irParaLandingPage = () => {
    LazyLandingPage.preload();

    registrarLog("entradaFranca", "Foi para landinaPage", {
      mensagem: "Usuário foi pra etapa 2 do funil",
    });

    navigate("/landingPage");
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        console.log("🔄 Página ficou oculta, registrando logs.");
        handleUnload();
      }
    };

    // Adiciona os eventos de saída e mudança de visibilidade
    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("pagehide", handleUnload);
    window.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("pagehide", handleUnload);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-800 flex flex-col items-center justify-start pt-20 gap-10 p-6">
      <div className="bg-emerald-800 text-lime-500 font-extrabold text-lg md:text-xl px-6 py-2 rounded-full mb-8 shadow-md border border-lime-500">
        👍 Aproveita o lancamento! 🎈
      </div>

      <div className="text-center space-y-8 max-w-xl">
        <h1 className="text-3xl font-bold text-zinc-200">
          <span className="text-lime-500">É o seguinte</span>, EU fiz esse site,
          EU fiz esse livro.
          <br /> E eu realmente acredito que ele pode mudar a sua vida,
          <span className="text-lime-500"> PORTANTO</span> se voce entrar no meu
          site, e nao ver o valor no meu produto, NAO eh um QUIZ que vai te
          fazer mudar de ideia
        </h1>
        <p className="text-gray-300 text-lg font-medium">
          Sabendo disso, quero te preparar, porque eu realmente posso mudar a
          sua vida, e se voce decidir vir de maos dadas comigo, vou cuidar de
          voce como uma mae.
        </p>
        <button
          onClick={irParaLandingPage}
          className="animate-bounce w-72 px-8 py-3 bg-lime-600 text-white font-medium text-lg rounded-full shadow-xl shadow-lime-800 hover:bg-lime-800 transition"
        >
          Vem comigo
        </button>
      </div>
    </div>
  );
}

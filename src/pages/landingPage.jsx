import React, { useEffect, useRef, useState } from "react";
import OfertasSection from "../components/ofertas";
import HeroSection from "../components/hero";
import BeneficiosSection from "../components/beneficios";
import ReceitasSection from "../components/receitas";
import ContatoSection from "../components/contato";
import { registrarLog, enviarLogs } from "../utils/utils";

export default function LandingPage() {
  const [tempoRestante, setTempoRestante] = useState(1 * 37 * 60); // 37 minutos
  const inicio = useRef(Date.now());
  const ultimaSessao = useRef("Desconhecida");
  const indoProCheckout = useRef(false);
  const enviandoBeacon = useRef(false);

  const irParaCheckout = (origem, produtos) => {
    const tempoTotal = Math.floor((Date.now() - inicio.current) / 1000);

    indoProCheckout.current = true;
    sessionStorage.setItem("jaFoiProCheckout", "true");
    console.log("indoProCheckout ja foi editado para TRUE");
    registrarLog("landingPage", "Cliques", {
      mensagem: "Usuário clicou para ir ao checkout",
      origem,
      produtos,
      tempoTotal,
    });

    window.location.href = `/checkout?produtos=${encodeURIComponent(
      produtos
    )}&origem=${encodeURIComponent(origem)}`;
  };

  useEffect(() => {
    // Verifica se o usuário já foi para o checkout e voltou
    if (sessionStorage.getItem("jaFoiProCheckout") === "true") {
      console.log("🟢 Retorno detectado: Usuário voltou do checkout.");
      indoProCheckout.current = false;
    } else {
      console.log("⚠️ Primeira visita ou não foi para o checkout ainda.");
    }
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      if (enviandoBeacon.current) return;
      enviandoBeacon.current = true;

      const tempoTotal = Math.floor((Date.now() - inicio.current) / 1000);
      const jaFoiProCheckout =
        sessionStorage.getItem("jaFoiProCheckout") === "true";

      // Verifica se está indo para o checkout
      if (indoProCheckout.current) return;

      // Verifica se o usuário foi ao checkout e voltou
      if (jaFoiProCheckout) {
        registrarLog("landingPage", "Saida", {
          mensagem: "Usuário foi ao checkout e voltou, mas saiu",
          ultimaSessao: ultimaSessao.current,
          tempoTotal,
        });
        enviarLogs("quiz", "landingPage", "checkout");
        console.log("Usuário foi ao checkout e voltou, log registrado.");
      } else {
        // Usuário saiu sem ir ao checkout
        registrarLog("landingPage", "Saida", {
          mensagem: "Usuário saiu sem ir ao checkout",
          ultimaSessao: ultimaSessao.current,
          tempoTotal,
        });
        enviarLogs("quiz", "landingPage");
        console.log("Usuário saiu sem ir ao checkout, log registrado.");
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        handleUnload();
      }
    };

    // Eventos para garantir compatibilidade com todos os dispositivos
    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("pagehide", handleUnload);
    window.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("pagehide", handleUnload);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const secoes = [
      { id: "hero", nome: "Hero" },
      { id: "beneficios", nome: "Benefícios" },
      { id: "receitas", nome: "Receitas" },
      { id: "ofertas", nome: "Ofertas" },
      { id: "contato", nome: "Contato" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const s = secoes.find((secao) => secao.id === entry.target.id);
            if (s) ultimaSessao.current = s.nome;
          }
        });
      },
      { threshold: 0.3 }
    );

    secoes.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dadosQuiz = JSON.parse(sessionStorage.getItem("landingPage")) || {};

    if (dadosQuiz.Entrada) {
      console.log("⚠️ Parâmetros já salvos anteriormente.");
      return;
    }
    // ✅ Registro de entrada na landing page
    registrarLog("landingPage", "Entrada", {
      mensagem: "Novo visitante na landing page 👀🎉",
    });
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatarTempo = (segundos) => {
    const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const s = String(segundos % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="font-sans text-brown-800 bg-white overflow-hidden">
      <div className="fixed top-0 w-full z-50 bg-lime-100 border-b border-lime-300 shadow text-sm md:text-base text-lime-600 py-2 px-4 font-medium flex justify-center items-center gap-5">
        <span className="font-bold text-black w-1/4 text-center">
          👍 Aproveita o lancamento
        </span>
        <span className="font-bold text-center">Promoção válida por:</span>
        <span className="px-3 py-1 rounded-full bg-white text-black font-bold shadow-sm text-center">
          ⏳ {formatarTempo(tempoRestante)}
        </span>
      </div>

      <HeroSection id="hero" irParaCheckout={irParaCheckout} />
      <BeneficiosSection id="beneficios" />
      <ReceitasSection id="receitas" />
      <OfertasSection id="ofertas" irParaCheckout={irParaCheckout} />
      <ContatoSection id="contato" irParaCheckout={irParaCheckout} />
    </div>
  );
}

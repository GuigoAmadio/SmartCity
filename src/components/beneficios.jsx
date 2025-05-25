import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import caixaMarcada from "../assets/caixaMarcada.webp";
import sslCertificado from "../assets/sslCertificado.jpg";
import garantia3anos from "../assets/garantia3anos.jpeg";
import compraSegura from "../assets/compraSegura2.jpeg";

export default function BeneficiosSection({ id }) {
  // Configuração para que os textos apareçam mais cedo
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative text-white bg-gradient-to-b from-[#0f172b] via-[#120b45] to-[#1b1f42] font-medium text-center flex flex-col items-center justify-around py-20 overflow-hidden"
    >
      {/* Subtítulo com Animação */}
      <motion.h1
        className="text-[3vh] font-bold w-3/4 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        Eu <span className="text-lime-500">NAO SEI</span> como te convencer. Nao
        tem como eu te provar, alem do que estou escrevendo. Mas saiba que estou
        digitando da forma mais <span className="text-lime-500">AUTENTICA</span>{" "}
        que eu consigo.
      </motion.h1>
      <motion.h1
        className="text-[3vh] font-bold w-3/4 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        Quero que NOTE, que eu estou{" "}
        <span className="text-lime-500">tentando</span> fazer voce{" "}
        <span className="text-lime-500">SENTIR</span> o meu esforco, para voce
        entender, o quao <span className="text-lime-500">FODA</span> eu sou.
      </motion.h1>
      <motion.h1
        className="text-[3vh] font-bold w-3/4 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        Sim! O livro <span className="text-lime-500">É curto</span>, voce tera
        ao todo <span className="text-lime-500">20 paginas de leitura</span>.{" "}
        <br /> A leitura, eh dessa mesma forma,{" "}
        <span className="text-lime-500">direta e BRUTAL.</span>
      </motion.h1>

      <motion.h1
        className="text-[3vh] font-bold w-3/4 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        Eu REDIGI, <span className="text-lime-500">CADA PALAVRA</span>, desse
        livro. E nele esta um <span className="text-lime-500">MISTURADO</span>{" "}
        de ideias, experiencias e conviccoes que eu adiquiri com a vida.
      </motion.h1>
      <motion.h1
        className="text-[3vh] font-bold w-3/4 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        E eu te <span className="text-lime-500">GARANTO</span> que se voce der
        uma chance pra mim, voce <span className="text-lime-500">NAO VAI</span>{" "}
        se arrepender. Eu vou <span className="text-lime-500">EXPLODIR</span> a
        sua cabeca com conhecimento
      </motion.h1>

      <motion.div
        className="flex flex-col items-center gap-5 text-black w-3/4 bg-white h-auto p-3 rounded-xl shadow-lg shadow-lime-500 mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h1 className="text-3xl">
          SIM! <br />
          <span className="text-lime-500 font-extrabold text-nowrap">
            G-A-R-A-N-T-I-A <br /> ETERNA
          </span>
        </h1>
        <h2 className="text-xl w-3/4 text-center font-bold">
          Como eu <span className="text-lime-500">JA</span> disse,{" "}
          <span className="text-lime-500">sou eu mesmo quem fez o site</span>,
          eu mesmo que{" "}
          <span className="text-lime-500">configurei a area de pagameto</span>,
          entao se voce COMPRAR E NAO GOSTAR, se voce sentiu que o dinheiro nao
          valeu a pena e/ou foi desperdicado, envia um email para{" "}
          <span className="text-sky-400">
            {" "}
            vendas1.0suporte1.0 <br />
            @gmail.com
          </span>
          .
        </h2>
        <h3 className="w-3/4 text-xl font-bold">
          No email me envie SEU{" "}
          <span className="text-sky-400"> NOME, TELEFONE E CPF</span>, escreva
          que quer o estorno da compra, e dentro de um dia eu farei para voce!
        </h3>
        <div className="flex items-center justify-around">
          <img src={sslCertificado} alt="" className="size-20" />
          <img src={garantia3anos} alt="" className="size-20" />
          <img src={compraSegura} alt="" className="size-20" />
        </div>
      </motion.div>
      <motion.h2
        className="mt-10 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Afinal, sobre o que eu escrevo no livro?
      </motion.h2>

      {/* Lista com Animação e Barra Horizontal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-start text-black flex flex-col justify-around rounded-2xl gap-4 bg-white px-5 py-6 mx-16"
      >
        {[
          "Como corrigir o corpo, a voz e o olhar a seu favor.",
          "Te apresento uma poderosa filosofia de vida.",
          "Desenho uma MAPA para a confiança.",
          "Mostro um poder oculto da respiração.",
          "Como gerir a sua disposição.",
          "O impacto da alimentação na sua vida.",
          "Avisos e conselhos para as pessoas que te seguirão na vida",
        ].map((texto, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <img src={caixaMarcada} alt="" className="size-6" />
              <p className="text-xs">{texto}</p>
            </div>
            {index < 7 && (
              <hr className="w-full rounded-full border-neutral-300 opacity-70" />
            )}
          </motion.div>
        ))}
      </motion.div>
      <h1 className="text-[3vh] mt-10 font-bold text-nowrap">
        ⬆️ LEIA ISSO SEU PREGUISOCO ⬆️
      </h1>
    </section>
  );
}

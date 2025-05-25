import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import ResumoCompra from "../components/ResumoCompra";
import bau_checkout from "../assets/bau_checkout.png";
import { enviarEventoPixel, registrarLog, enviarLogs } from "../utils/utils";

export default function Checkout() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const produtoPrincipal = {
    sku: "MANUAL-001",
    name: "Manual da Seducao",
    soft_descriptor: "Manual",
  };

  const [form, setForm] = useState({
    email: "",
    celular: "",
    cpf: "",
    pagamento: "pix",
  });

  const inicio = useRef(Date.now());
  const [orderID, setOrderID] = useState("");
  const [pagamentoStatus, setPagamentoStatus] = useState(null); // null | "loading" | "success" | "erro"
  const [qrCodeData, setQrCodeData] = useState(null);
  const [ultimoPix, setUltimoPix] = useState(0); // timestamp do último Pix gerado
  const logEnviado = useRef(false);

  useEffect(() => {
    // COMECANDO LOGS MEUS
    //
    const dadosQuiz = JSON.parse(sessionStorage.getItem("checkout")) || {};

    if (dadosQuiz.Entrada) {
      console.log("⚠️ Parâmetros já salvos anteriormente.");
      return;
    }
    const origem = queryParams.get("origem") || "desconhecida";

    registrarLog("checkout", "Entrada", {
      mensagem: "Usuário entrou na página de checkout",
      origem,
    });

    console.log("refistrei entrada no checkout.");
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      if (logEnviado.current) return;
      logEnviado.current = true;

      const tempoTotal = Math.floor((Date.now() - inicio.current) / 1000);
      console.log("🚪 Usuário está saindo do checkout.");

      registrarLog("checkout", "Saida", {
        mensagem: "Usuário saiu do checkout",
        tempoTotal,
      });
      enviarLogs("quiz", "landingPage", "checkout");
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
    // ✅ Evita envio duplicado para o Pixel
    if (sessionStorage.getItem("pixelEnviado")) return;
    sessionStorage.setItem("pixelEnviado", "true");

    // ✅ Configuração e disparo do Pixel
    const pixelScript = document.createElement("script");
    pixelScript.async = true;
    pixelScript.defer = true;
    pixelScript.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
    window.pixelId = "68103089634d3f0bac4be54a";
    document.head.appendChild(pixelScript);

    enviarEventoPixel("ViewContent", 16.8, "social");
  }, []);

  const validarCampos = () => {
    const { email, celular, cpf, pagamento } = form;
    if (!email || !celular || !cpf) {
      alert("Preencha todos os campos obrigatórios.");
      return false;
    }

    if (pagamento === "cartao") {
      const campos = [
        "cardNumber",
        "expMonth",
        "expYear",
        "cvv",
        "cardholderName",
      ];
      for (const id of campos) {
        const el = document.getElementById(id);
        if (!el || !el.value.trim()) {
          alert("Preencha todos os dados do cartão.");
          return false;
        }
      }
    }

    return true;
  };

  const gerarTokenCartao = async () => {
    const resposta = await fetch(
      "https://us-central1-stripepay-3c918.cloudfunctions.net/api/tokenizarCartao",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: document.getElementById("cardholderName")?.value,
          number: document.getElementById("cardNumber")?.value,
          cvv: document.getElementById("cvv")?.value,
          month: Number(document.getElementById("expMonth")?.value),
          year: Number(document.getElementById("expYear")?.value),
        }),
      }
    );

    const dados = await resposta.json();
    if (!dados.data.token) {
      throw new Error("Token não gerado eis o motivo:", dados.error);
    }

    return dados.data.token;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarCampos()) return;

    enviarEventoPixel("InitiateCheckout", 16.8, "social");

    // Bloquear múltiplas gerações de Pix por 2 minutos
    if (form.pagamento === "pix") {
      const agora = Date.now();
      const doisMinutos = 2 * 60 * 1000;

      if (agora - ultimoPix < doisMinutos) {
        const restante = Math.ceil((doisMinutos - (agora - ultimoPix)) / 1000);
        alert(`Aguarde ${restante} segundos antes de gerar um novo QR Code.`);
        return;
      }

      setUltimoPix(agora);
    }

    setPagamentoStatus("loading");

    try {
      let token = null;
      if (form.pagamento === "cartao") {
        token = await gerarTokenCartao();
      }

      const resposta = await fetch(
        "https://us-central1-stripepay-3c918.cloudfunctions.net/api/realizarPagamento",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            cvv: document.getElementById("cvv")?.value,
            produtos: "social",
            token,
            total: "16.8",
            product: produtoPrincipal,
          }),
        }
      );
      const json = await resposta.json();
      setOrderID(json.orderId);

      const processarSucesso = () => {
        setPagamentoStatus("success");
        window.history.replaceState({}, "", "?status=sucesso");
        enviarEventoPixel("Purchase", "16,8", "social");
      };

      if (form.pagamento === "pix" && json?.data?.pix_qrcode) {
        // Armazena QR code e inicia verificação de pagamento
        setQrCodeData({
          base64: json.data.pix_qrcode,
          emv: json.data.pix_emv,
          vencimento: json.data.pix_expiration_date,
        });

        const MAX_TEMPO = 10 * 60 * 1000; // 10 minutos
        const INTERVALO = 5000; // 5 segundos
        let tentativas = 0;
        const maxTentativas = MAX_TEMPO / INTERVALO;

        const loop = setInterval(async () => {
          tentativas++;

          try {
            const resposta = await fetch(
              "https://us-central1-stripepay-3c918.cloudfunctions.net/verificarPagamento",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  id: json.orderId,
                }),
              }
            );

            const resposta2 = await resposta.json();

            if (resposta2.status === "aprovado") {
              clearInterval(loop);
              processarSucesso();
            } else if (tentativas >= maxTentativas) {
              clearInterval(loop);
              alert("❌ Pagamento via Pix não foi confirmado em 10 minutos.");
              setPagamentoStatus("erro");
            }
          } catch (erro) {
            console.error("Erro ao verificar Pix:", erro);
          }
        }, INTERVALO);

        // Fazer requisicao de checkagem para meu banco de dados.
      } else if (json.status === "aprovado") {
        processarSucesso();
      } else {
        alert("Erro no pagamento. Tente novamente.");
        setPagamentoStatus("erro");
      }
    } catch (err) {
      console.error("Erro:", err);
      alert("Erro ao processar o pagamento.");
      setPagamentoStatus("erro");
    }
  };

  if (pagamentoStatus === "success") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-10">
        <h1 className="text-2xl font-bold text-green-700">
          ✅ Pagamento Aprovado!
        </h1>
        <p className="mt-2 font-medium">
          Seu eBook já foi enviado para o e-mail <strong>{form.email}</strong>.
        </p>
        <p className="mt-2 font-medium">
          Guarde este Id caso precise falar conosco: <br /> {orderID}
        </p>
        <p className="mt-2 text-gray-500">Obrigado por comprar com a gente!</p>
      </div>
    );
  }
  if (pagamentoStatus === "erro") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-10">
        <h1 className="text-2xl font-bold text-green-700">
          Algo deu errado🚫!
        </h1>
        <p className="mt-2 font-medium">
          O pagamento nao foi bem concluido, tente novamente.
        </p>
        <button
          onClick={() => setPagamentoStatus(null)} // 👈 reseta o status aqui
          className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col lg:flex-row gap-10 min-h-screen bg-orange-950 p-4 md:p-10 z-20">
      <div className="relative flex flex-col items-center">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r -left-16 -top-10 from-red-700 to-amber-700 opacity-70 blur-2xl z-10"></div>
        <img
          src={bau_checkout}
          alt=""
          className="relative h-auto size-52 z-20 "
        />
        <h1 className="font-bold text-white text-2xl mx-2 text-center z-20 relative">
          Nem todos têm acesso ao que está aqui... Mas você está a um passo de
          descobrir.
        </h1>
      </div>
      <div className="flex flex-col gap-6 w-full lg:w-2/3 z-20 pt-8">
        <ResumoCompra
          selecionados={[
            {
              id: "social",
              nome: "Como Ser Sociável?",
              precoOriginal: 28.9,
            },
          ]}
          totalOriginal={28.9}
          totalAtual={16.8}
          descontoTotal={12.1}
        />
      </div>
      <CheckoutForm
        qrCodeData={qrCodeData}
        orderID={orderID}
        loading={pagamentoStatus === "loading"}
        onSubmit={handleSubmit}
        pagamento={form.pagamento}
        form={form}
        setForm={setForm}
      />
    </div>
  );
}

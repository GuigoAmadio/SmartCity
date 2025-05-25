// CheckoutForm.js
import React, { useState } from "react";
import garantia from "../assets/garantia30dias.png";
import seguro from "../assets/seguro.png";
import masterCard from "../assets/masterCard.png";
import visa from "../assets/visa.jpeg";
import hipercard from "../assets/hipercard.png";
import pix_logo from "../assets/pix_logo.png";
import pix_logo2 from "../assets/pix_logo2.webp";
import american from "../assets/american.png";

export default function CheckoutForm({
  form,
  setForm,
  pagamento,
  onSubmit,
  loading,
  qrCodeData,
  orderID,
}) {
  const [copiado, setCopiado] = useState(false);

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(qrCodeData.emv);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar Pix:", err);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="bg-orange-900 text-white p-6 rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Finalizando Compra</h1>
      <h1 className="text-lg font-semibold pt-4">
        Preencha as informacoes abaixo:
      </h1>
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Seu e-mail"
        className="input w-full"
        required
      />
      <input
        name="celular"
        type="tel"
        value={form.celular}
        onChange={handleChange}
        placeholder="Celular com DDD"
        className="input w-full"
        required
      />
      <input
        name="cpf"
        type="text"
        value={form.cpf}
        onChange={handleChange}
        placeholder="CPF"
        className="input w-full"
        required
      />
      <p className="text-lg pt-5 font-semibold">
        Selecione o metodo de pagamento:
      </p>
      <div className="flex gap-4">
        {["pix", "cartao"].map((tipo) => (
          <button
            key={tipo}
            type="button"
            onClick={() => setForm((prev) => ({ ...prev, pagamento: tipo }))}
            className={`flex-1 p-3 rounded border ${
              form.pagamento === tipo
                ? "bg-orange-400 text-white"
                : "bg-white text-black"
            }`}
          >
            {tipo === "pix" ? "PIX" : "Cartão"}
          </button>
        ))}
      </div>
      {form.pagamento === "cartao" && (
        <div className="space-y-2 pt-4">
          <input
            id="cardNumber"
            placeholder="Número do cartão"
            className="input w-full"
          />
          <div className="flex gap-2">
            <input id="expMonth" placeholder="Mês" className="input w-1/3" />
            <input id="expYear" placeholder="Ano" className="input w-1/3" />
            <input id="cvv" placeholder="CVV" className="input w-1/3" />
          </div>
          <input
            id="cardholderName"
            placeholder="Nome no cartão"
            className="input w-full"
          />
        </div>
      )}
      {form.pagamento === "pix" && (
        <div className="mt-4 p-4 border-2 border-dashed border-lime-500 text-sm rounded-md space-y-4">
          <p className="text-lg font-bold">
            ✅ Clique em "Finalizar Pagamento"
          </p>
          <p className="text-lg font-bold">✅ Aguarde o qrCode ser gerado</p>
          <p className="text-lg font-bold">✅ Leia o qrCode ou copie o link</p>
          <p className="text-lg font-bold">✅ Pague pelo seu banco</p>
          <p className="text-lg font-bold">✅ Liberação imediata</p>
        </div>
      )}

      <button
        type="button"
        onClick={onSubmit}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 bg-lime-500 text-white py-3 rounded font-semibold shadow-lg shadow-lime-300 ${
          loading ? "opacity-80 cursor-not-allowed" : "hover:bg-lime-600"
        }`}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
              />
            </svg>
            Aguarde, gerando pagamento...
          </>
        ) : (
          "Finalizar Pagamento"
        )}
      </button>

      {pagamento === "pix" && qrCodeData?.base64 && (
        <div className="mt-4 space-y-2 border border-green-700 rounded-lg p-4">
          <p className="text-sm">✅ Pagamento gerado via Pix</p>
          <img
            src={`data:image/png;base64,${qrCodeData.base64}`}
            alt="QR Code PIX"
            className="mx-auto max-w-xs border rounded-md"
          />
          <button
            onClick={copiarPix}
            className="text-xs break-words text-center w-full p-2 border border-lime-500 rounded bg-lime-400 hover:bg-lime-500 transition"
          >
            {copiado
              ? "✅ Copiado para a área de transferência!"
              : "Copiar Pix"}
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
            Válido até:{" "}
            {new Date(qrCodeData.vencimento).toLocaleString("pt-BR")}
          </p>
          <p className="animate-pulse text-md font-bold text-center text-neutral-400 mt-4">
            Verifique o seu e-mail após o pagamento. Assim que confirmarmos seu
            pagamento, enviaremos sua compra.
          </p>
          <p className="text-md font-bold text-center text-white mt-4">
            Caso haja algum problema, fale conosco sobre o pedido:{" "}
            <span className="text-orange-400">{orderID}</span>.
          </p>
        </div>
      )}

      <div className="flex flex-col items-center text-center pt-8">
        <div className="flex items-center">
          <h2 className="font-extrabold text-xl text-orange-400">
            Manual Secreto da Sedução
          </h2>
        </div>
        <div className="flex items-center mt-2">
          <img src={seguro} alt="" className="size-3 mr-2" />
          <h3 className="text-orange-400 text-lg font-bold">
            Compra 100% segura!
          </h3>
        </div>
        <div className="flex items-center justify-around my-4 w-full">
          <img src={pix_logo} alt="" className="size-8 rounded-md w-auto" />
          <img src={masterCard} alt="" className="size-8 rounded-md w-auto" />
          <img src={visa} alt="" className="size-8 rounded-md w-auto" />
          <img src={american} alt="" className="size-8 rounded-md w-auto" />
          <img src={hipercard} alt="" className="size-8 rounded-md w-auto" />
        </div>
        <p className="text-neutral-200 text-sm my-3">
          Este pagamento está sendo processado com segurança pela AppMax
        </p>
        <img src={garantia} alt="" className="size-40 my-5" />
        <p className="text-xs mb-2">
          Este site é protegido pelo reCAPTCHA do Google
        </p>
        <p className="text-xs">
          <span className="font-bold">Política de privacidade</span> e{" "}
          <span className="font-bold">Termos de serviço</span>
        </p>
      </div>
    </form>
  );
}

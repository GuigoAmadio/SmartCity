// src/components/ResumoCompra.js
import React from "react";

export default function ResumoCompra({
  selecionados,
  totalOriginal,
  totalAtual,
  descontoTotal,
}) {
  return (
    <section className="flex flex-col gap-2 justify-start items-center rounded-xl px-4 py-10 bg-orange-900 text-white shadow-md my-10 lg:my-0">
      <h1 className="font-bold text-2xl">Resumo da compra</h1>

      <div className="px-10 my-10 flex flex-col text-start w-full border-2 border-dotted border-neutral-100 rounded-lg py-5">
        <p className="font-medium">Itens:</p>
        <div className="flex flex-col gap-5">
          {selecionados.map((item) => (
            <div>
              <div
                className="flex justify-between gap-4 items-center"
                key={item.id}
              >
                <p className="font-bold text-lime-500">{item.nome}</p>
                <p className="font-medium">R${item.precoOriginal.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between w-full px-10">
        <p className="font-medium">Total:</p>
        <p>R${totalOriginal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between w-full px-10">
        <p className="font-medium">Descontos:</p>
        <p className="font-medium">R${descontoTotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between w-full px-10">
        <p className="font-medium">Taxa de entrega:</p>
        <p>R$0,00</p>
      </div>

      <div className="flex justify-between w-full px-10 mt-4">
        <p className="font-medium">Total a ser pago:</p>
        <p className="font-bold text-lime-500 text-lg">
          R${totalAtual.toFixed(2)}
        </p>
      </div>
    </section>
  );
}

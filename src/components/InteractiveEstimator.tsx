"use client";

import React, { useState } from "react";
import { MessageSquare, Calculator, Flame } from "lucide-react";

export default function InteractiveEstimator() {
  const [songCount, setSongCount] = useState(1);
  const [copiedText, setCopiedText] = useState("");

  // Pricing Logic
  const unitPrice = songCount >= 5 ? 10 : 15;
  const totalPrice = songCount * unitPrice;
  
  // Savings compared to paying R$15 per song
  const standardPrice = songCount * 15;
  const savings = standardPrice - totalPrice;

  // Real details
  const whatsappNumber = "5515991908930"; 
  const messageText = `Olá Lions Karaokê! Quero solicitar o pedido VIP Express de ${songCount} ${
    songCount === 1 ? "música" : "músicas"
  } remasterizada(s).`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <section id="estimator" className="py-12 px-4 border-t border-white/5 bg-zinc-950/40 relative">
      {/* Subtle purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase text-gradient-gold">
            Calcular Meu Pedido
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Ajuste a quantidade e veja o desconto progressivo automático.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="h-5 w-5 text-brand-gold" />
            <h3 className="text-base font-bold text-white">Simulador de Pedido VIP</h3>
          </div>

          {/* Slider Controls */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-zinc-400 font-semibold">Quantidade de Músicas:</span>
              <span className="text-lg font-black text-brand-gold bg-brand-gold/10 px-3 py-0.5 rounded-lg border border-brand-gold/20">
                {songCount} {songCount === 1 ? "música" : "músicas"}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={songCount}
              onChange={(e) => setSongCount(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-gold focus:outline-none"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-medium mt-1">
              <span>1 música</span>
              <span>5 músicas (Combo R$ 10/un)</span>
              <span>20 músicas</span>
            </div>
          </div>

          {/* Pricing Details Block */}
          <div className="bg-black/30 rounded-2xl p-4 border border-white/5 mb-6 flex flex-col gap-3">
            {/* Price Per Unit */}
            <div className="flex justify-between items-center text-xs text-zinc-400">
              <span>Preço por música:</span>
              <span className="font-bold text-white">
                {songCount >= 5 ? (
                  <span className="flex items-center gap-1.5">
                    <span className="line-through text-zinc-500">R$ 15,00</span>
                    <span className="text-brand-gold font-extrabold text-sm">R$ 10,00</span>
                  </span>
                ) : (
                  <span>R$ 15,00</span>
                )}
              </span>
            </div>

            {/* Savings Indicator */}
            {songCount >= 5 ? (
              <div className="flex justify-between items-center text-xs text-emerald-400">
                <span className="flex items-center gap-1">
                  <Flame className="h-3.5 w-3.5 fill-emerald-400/20" />
                  Combo VIP Ativado!
                </span>
                <span className="font-bold">
                  Economia de R$ {savings.toFixed(2)}
                </span>
              </div>
            ) : (
              <div className="text-[11px] text-zinc-500 flex items-center gap-1.5 py-0.5 bg-white/5 px-2.5 rounded-lg border border-white/5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-ping" />
                <span>Adicione mais {5 - songCount} {5 - songCount === 1 ? "música" : "músicas"} para liberar R$ 10/un!</span>
              </div>
            )}

            <hr className="border-white/5 my-1" />

            {/* Total Price */}
            <div className="flex justify-between items-end">
              <span className="text-sm font-bold text-white">Total do Pedido:</span>
              <span className="text-2xl font-black text-brand-gold">
                R$ {totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Copiar Chave Pix Box */}
          <div className="mb-6 flex flex-col gap-2.5 bg-white/5 rounded-2xl p-4 border border-white/5 text-xs text-zinc-300">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-zinc-500">Forma de Pagamento (PIX):</span>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-xl border border-white/5">
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-500 font-extrabold uppercase">PIX (E-mail)</span>
                  <span className="font-mono text-zinc-200 text-xs mt-0.5">layoncosta.digital@gmail.com</span>
                </div>
                <button
                  onClick={() => copyToClipboard("layoncosta.digital@gmail.com", "email")}
                  className="px-2.5 py-1.5 rounded-lg bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/20 font-bold text-[10px] cursor-pointer transition select-none"
                >
                  {copiedText === "email" ? "Copiado!" : "Copiar"}
                </button>
              </div>

              <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-xl border border-white/5">
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-500 font-extrabold uppercase">PIX (Celular)</span>
                  <span className="font-mono text-zinc-200 text-xs mt-0.5">15991908930</span>
                </div>
                <button
                  onClick={() => copyToClipboard("15991908930", "phone")}
                  className="px-2.5 py-1.5 rounded-lg bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/20 font-bold text-[10px] cursor-pointer transition select-none"
                >
                  {copiedText === "phone" ? "Copiado!" : "Copiar"}
                </button>
              </div>
            </div>
          </div>

          {/* Exclusive Playlist Bonus Callout */}
          <div className="mb-6 flex gap-3 bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-2xl text-xs leading-relaxed text-zinc-300">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-gold text-sm select-none">
              🎁
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-extrabold text-brand-gold uppercase text-[10px] tracking-wider">
                Playlist VIP no YouTube inclusa!
              </span>
              <p className="text-[11px] text-zinc-300 leading-normal">
                Ao fazer o seu pedido, nós criamos uma <strong>playlist oficial no canal</strong> com o seu nome. 
                Todos os playbacks que você pedir ficarão salvos no canal e na sua playlist exclusiva para você dar play direto na TV da festa!
              </p>
            </div>
          </div>

          {/* Dynamic WhatsApp CTA button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-4 px-6 font-extrabold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition duration-300 text-sm cursor-pointer border border-emerald-400/20"
          >
            <MessageSquare className="h-4 w-4 fill-white text-white" />
            <span>Fazer Pedido de {songCount} {songCount === 1 ? "Música" : "Músicas"} via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

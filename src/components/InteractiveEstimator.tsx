"use client";

import React, { useState } from "react";
import { Calculator, Flame } from "lucide-react";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.216 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
  } para o canal.`;
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

          {/* Quick Direct Order Alert */}
          <div className="mb-6 bg-white/5 border border-white/5 p-3.5 rounded-2xl text-xs text-zinc-300 flex items-center justify-between gap-3">
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="font-extrabold text-white">Prefere pedir direto?</span>
              <p className="text-[10px] text-zinc-400 truncate">Pule a simulação e peça pelo WhatsApp.</p>
            </div>
            <a
              href="https://wa.me/5515991908930?text=Ol%C3%A1%20Lions%20Karaok%C3%AA!%20Prefiro%20fazer%20meu%20pedido%20direto%20sem%20simular.%20Como%20fa%C3%A7o?"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn px-4 py-2 shrink-0 bg-brand-gold hover:bg-yellow-500 text-black font-extrabold text-[10px] rounded-xl transition cursor-pointer select-none"
            >
              Pedir Direto
            </a>
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-zinc-500 font-extrabold uppercase">PIX (E-mail)</span>
                  <span className="font-mono text-zinc-200 text-xs mt-0.5 break-all select-all">layoncosta.digital@gmail.com</span>
                </div>
                <button
                  onClick={() => copyToClipboard("layoncosta.digital@gmail.com", "email")}
                  className="w-full sm:w-auto px-3.5 py-2 shrink-0 rounded-lg bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/20 font-bold text-[10px] cursor-pointer transition select-none text-center"
                >
                  {copiedText === "email" ? "Copiado!" : "Copiar Chave"}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] text-zinc-500 font-extrabold uppercase">PIX (Celular)</span>
                  <span className="font-mono text-zinc-200 text-xs mt-0.5 break-all select-all">15991908930</span>
                </div>
                <button
                  onClick={() => copyToClipboard("15991908930", "phone")}
                  className="w-full sm:w-auto px-3.5 py-2 shrink-0 rounded-lg bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/20 font-bold text-[10px] cursor-pointer transition select-none text-center"
                >
                  {copiedText === "phone" ? "Copiado!" : "Copiar Chave"}
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
            className="shimmer-btn flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-500 py-4.5 px-8 font-black uppercase tracking-wider text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-xs sm:text-sm cursor-pointer border border-emerald-400/20"
          >
            <WhatsappIcon className="h-5 w-5 shrink-0" />
            <span>Enviar Pedido via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

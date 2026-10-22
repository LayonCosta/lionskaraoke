"use client";

import React, { useState } from "react";
import { Heart, Copy, Check, X, Sparkles } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedValues = [
  { label: "R$ 2,00", subtitle: "Um Café ☕", popular: false },
  { label: "R$ 5,00", subtitle: "Um Chopp 🍻", popular: false },
  { label: "R$ 10,00", subtitle: "Incentivo VIP", popular: true },
  { label: "Livre", subtitle: "Qualquer Valor 💖", popular: false },
];

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [copied, setCopied] = useState(false);
  const pixKey = "f17a79b0-60f0-4eec-9e09-0d3fb8c50c02";

  if (!isOpen) return null;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Container do Modal */}
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Faixa Superior Temática */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-5 py-4 text-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/90 text-rose-500 flex items-center justify-center shadow-xs shrink-0">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            </div>
            <div>
              <h3 className="text-sm font-black tracking-tight leading-tight">
                Apoie o Lions Karaokê
              </h3>
              <p className="text-[11px] font-bold text-slate-900/80">
                Ajude a manter os karaokês 4K grátis no YouTube
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-5">
          <p className="text-xs text-slate-600 leading-relaxed text-center mb-4">
            Gosta de cantar com a família e amigos? Sua contribuição de <strong>qualquer valor via Pix</strong> ajuda nos custos de produção, instrumentais de estúdio e sincronização 4K!
          </p>

          {/* Sugestões Ilustrativas de Apoio (Vitrine de Valores) */}
          <div className="mb-2">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 text-center mb-2">
              Sugestões de Apoio ao Canal:
            </span>
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {suggestedValues.map((item) => (
                <div
                  key={item.label}
                  className={`p-2 rounded-xl text-center relative flex flex-col justify-between transition-all select-none ${
                    item.popular
                      ? "bg-amber-50 border-2 border-amber-500 ring-2 ring-amber-500/20 shadow-sm"
                      : "bg-slate-50/80 border border-slate-200"
                  }`}
                >
                  {/* Tag Discreta e Elegante */}
                  {item.popular && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-[7px] font-extrabold uppercase tracking-tight px-1.5 py-0.5 rounded-full whitespace-nowrap shadow-xs border border-amber-300">
                      Popular ⭐
                    </span>
                  )}
                  <div className={`text-xs font-black ${item.popular ? "text-amber-900 mt-1" : "text-slate-800"}`}>
                    {item.label}
                  </div>
                  <div className="text-[9px] text-slate-500 mt-0.5 leading-tight">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 text-center mt-2">
              Copie a chave abaixo e digite o valor que desejar no app do seu banco.
            </p>
          </div>

          {/* Caixa da Chave Pix com Copiar */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 my-4">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1.5">
              <span>Chave Pix (Nubank):</span>
              <span className="text-slate-700 font-semibold">Pague por qualquer banco</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200">
              <span className="font-mono text-xs font-bold text-slate-900 truncate flex-1">
                {pixKey}
              </span>
              <button
                type="button"
                onClick={handleCopyPix}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                  copied
                    ? "bg-emerald-600 text-white"
                    : "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-xs"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[10px] text-slate-400 mt-2 text-center">
              Titular: <strong>Layon Costa</strong> • Banco: Nubank
            </p>
          </div>

          {/* Botão de Ação Principal Limpo e Bonito (Sem chave embutida no texto) */}
          <button
            type="button"
            onClick={handleCopyPix}
            className={`w-full py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-[0.99] ${
              copied
                ? "bg-emerald-600 text-white"
                : "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Chave Pix Copiada com Sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Chave Pix</span>
              </>
            )}
          </button>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Qualquer valor incentiva muito o canal. Gratidão! ❤️</span>
          </div>
        </div>
      </div>
    </div>
  );
}

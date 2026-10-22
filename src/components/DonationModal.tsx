"use client";

import React, { useState } from "react";
import { Heart, Copy, Check, X, Coffee, Sparkles, MessageCircle } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedValues = [
  { label: "R$ 2,00", subtitle: "Um Cafézinho ☕" },
  { label: "R$ 5,00", subtitle: "Um Chopp 🍻" },
  { label: "R$ 10,00", subtitle: "Incentivo VIP ⭐" },
  { label: "Outro", subtitle: "Qualquer valor" },
];

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [copied, setCopied] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("R$ 5,00");
  const pixKey = "f17a79b0-60f0-4eec-9e09-0d3fb8c50c02";

  if (!isOpen) return null;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendWhatsAppNotice = () => {
    const text = encodeURIComponent(
      `Olá Lions Karaokê! Enviei um Pix de apoio (${selectedValue}) para incentivar o canal a continuar produzindo karaokês 4K gratuitos para Smart TV. Parabéns pelo trabalho!`
    );
    window.open(`https://wa.me/5511950749119?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Container do Modal */}
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Faixa Superior Temática */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-5 py-4 text-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/90 text-amber-600 flex items-center justify-center shadow-xs">
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
            Gosta de cantar com a família e amigos? Sua contribuição voluntária de <strong>qualquer valor</strong> ajuda nos custos de produção, instrumentais de estúdio e sincronização 4K!
          </p>

          {/* Sugestões Rápidas de Valor */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {suggestedValues.map((item) => {
              const isSelected = selectedValue === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setSelectedValue(item.label)}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? "border-amber-500 bg-amber-50/80 ring-2 ring-amber-500/20 text-amber-900 font-bold shadow-xs"
                      : "border-slate-200 hover:border-slate-300 bg-slate-50/60 text-slate-700"
                  }`}
                >
                  <div className="text-xs font-black">{item.label}</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">{item.subtitle}</div>
                </button>
              );
            })}
          </div>

          {/* Caixa da Chave Pix com 1-Click Copy */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 mb-4">
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

          {/* Botões de Ação */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleCopyPix}
              className={`w-full py-3 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer ${
                copied
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-500 hover:bg-emerald-600 text-white"
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
                  <span>Copiar Chave Pix ({pixKey})</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleSendWhatsAppNotice}
              className="w-full py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Avisar no WhatsApp após o envio (Opcional)</span>
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Muito obrigado por apoiar o canal! ❤️</span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { Heart, Copy, Check, X, Sparkles } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedValues = [
  { label: "R$ 2,00", subtitle: "Um café ☕", popular: false },
  { label: "R$ 5,00", subtitle: "Um chopp 🍻", popular: false },
  { label: "R$ 10,00", subtitle: "Incentivo VIP", popular: true },
  { label: "Livre", subtitle: "Qualquer valor 💖", popular: false },
];

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [copied, setCopied] = useState(false);
  const pixKey = "f17a79b0-60f0-4eec-9e09-0d3fb8c50c02";

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-[2px] backdrop-blur-sm"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-title"
        className="my-auto w-full max-w-md overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl sm:rounded-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-center justify-between gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-4 py-3 text-slate-950 sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-rose-500">
              <Heart className="h-4 w-4 fill-rose-500" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2 id="donation-title" className="text-sm font-black leading-tight">Apoie o Lions Karaokê</h2>
              <p className="mt-0.5 text-[11px] font-medium leading-snug text-slate-900/80">Ajude a manter os karaokês grátis no YouTube</p>
            </div>
          </div>
          <button type="button" onClick={onClose} aria-label="Fechar janela de apoio" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/10 hover:bg-black/20">
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="max-h-[calc(100dvh-5.25rem)] overflow-y-auto p-4 sm:p-5">
          <p className="mb-3 text-center text-xs leading-relaxed text-slate-600">
            Sua contribuição via Pix ajuda nos custos de produção e mantém os karaokês disponíveis para todos.
          </p>

          <div>
            <h3 className="mb-2 text-center text-[10px] font-bold uppercase tracking-wide text-slate-500">Sugestões de apoio</h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {suggestedValues.map((item) => (
                <li key={item.label} className={`flex min-h-[66px] min-w-0 flex-col items-center justify-center rounded-lg border px-2 py-2 text-center ${item.popular ? "border-amber-400 bg-amber-50" : "border-slate-200 bg-slate-50"}`}>
                  {item.popular && <span className="mb-1 rounded-md bg-amber-400 px-1.5 py-0.5 text-[8px] font-black uppercase leading-none text-amber-950">Mais escolhido</span>}
                  <span className="text-xs font-extrabold leading-tight text-slate-900">{item.label}</span>
                  <span className="mt-0.5 text-[10px] leading-tight text-slate-500">{item.subtitle}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-center text-[10px] leading-snug text-slate-500">Escolha o valor no aplicativo do seu banco.</p>
          </div>

          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 text-[10px] font-semibold text-slate-600">
              <span>Chave Pix (Nubank)</span>
              <span className="text-slate-500">Aceita em qualquer banco</span>
            </div>
            <div className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
              <code className="min-w-0 flex-1 truncate text-[11px] font-bold text-slate-900 sm:text-xs">{pixKey}</code>
              <button type="button" onClick={handleCopyPix} className={`inline-flex min-h-9 shrink-0 items-center justify-center gap-1 rounded-lg px-3 text-xs font-extrabold ${copied ? "bg-emerald-600 text-white" : "bg-amber-500 text-slate-950 hover:bg-amber-600"}`}>
                {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                {copied ? "Copiada" : "Copiar"}
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-500">Titular: <strong>Layon Costa</strong> · Nubank</p>
          </div>

          <p role="status" aria-live="polite" className="mt-3 flex items-center justify-center gap-1.5 border-t border-slate-100 pt-3 text-center text-[11px] leading-snug text-slate-500">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden="true" />
            {copied ? "Chave Pix copiada. Obrigado pelo apoio!" : "Qualquer valor incentiva muito o canal. Gratidão! ❤️"}
          </p>
        </div>
      </section>
    </div>
  );
}

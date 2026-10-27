"use client";

import React, { useState } from "react";
import { Heart, X } from "lucide-react";
import DonationModal from "@/components/DonationModal";

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  if (!isVisible) {
    return (
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
      />
    );
  }

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-slate-950 text-white text-xs py-2 px-3 sm:px-4 shadow-md border-b border-amber-500/30">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          {/* Lado Esquerdo: Selo de Apoio + Frase */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/20 px-2 py-0.5 text-[10px] font-black text-rose-300 border border-rose-500/30 shrink-0">
              <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
              APOIAR
            </span>
            <p className="text-slate-200 truncate text-[11px] sm:text-xs font-medium">
              Gosta dos nossos karaokês grátis? Ajude o canal com qualquer valor via Pix!
            </p>
          </div>

          {/* Lado Direito: Botão de Doação + Fechar */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsDonationOpen(true)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black text-[11px] shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <Heart className="w-3 h-3 fill-slate-950" />
              <span>Apoiar no Pix</span>
            </button>

            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Fechar anúncio"
              className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Doação Interativo */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
      />
    </>
  );
}

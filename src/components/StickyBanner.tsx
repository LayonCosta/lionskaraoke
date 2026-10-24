"use client";

import React, { useState } from "react";
import { Heart, X } from "lucide-react";
import DonationModal from "@/components/DonationModal";

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  if (!isVisible) {
    return <DonationModal isOpen={isDonationOpen} onClose={() => setIsDonationOpen(false)} />;
  }

  return (
    <>
      <div className="w-full border-b border-amber-500/30 bg-slate-950 px-3 py-2 text-white shadow-md">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium leading-tight text-slate-100">
              Gosta dos nossos karaokês grátis? Ajude o canal com qualquer valor via Pix!
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsDonationOpen(true)}
              className="inline-flex min-h-7 items-center gap-1 rounded-md bg-amber-500 px-2 text-[10px] font-black text-slate-950 transition-colors hover:bg-amber-400 whitespace-nowrap cursor-pointer"
            >
              <Heart className="h-3 w-3 fill-slate-950" aria-hidden="true" />
              Apoiar no Pix
            </button>
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Fechar anúncio"
              className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
      <DonationModal isOpen={isDonationOpen} onClose={() => setIsDonationOpen(false)} />
    </>
  );
}

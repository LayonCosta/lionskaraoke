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
      <div className="sticky top-0 z-50 w-full border-b border-amber-500/30 bg-slate-950 px-2 py-2 text-white shadow-md sm:px-3">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-2 sm:gap-3">
          <div className="hidden shrink-0 items-center justify-center rounded-full bg-rose-500/15 p-2 sm:flex">
            <Heart className="h-4 w-4 fill-rose-400 text-rose-400" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold leading-snug text-slate-100 sm:text-sm">
              Gosta dos nossos karaokês grátis? Ajude o canal com qualquer valor via Pix!
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="hidden shrink-0 items-center gap-1 rounded-md border border-rose-500/30 bg-rose-500/20 px-2 py-1 text-[10px] font-black text-rose-300 sm:inline-flex">
              <Heart className="h-3 w-3 fill-rose-500 text-rose-500" aria-hidden="true" />
              APOIAR
            </span>

            <div className="flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsDonationOpen(true)}
                className="inline-flex min-h-8 items-center gap-1 rounded-md bg-amber-500 px-2.5 text-[11px] font-black text-slate-950 transition-colors hover:bg-amber-400"
              >
                <Heart className="h-3 w-3 fill-slate-950" aria-hidden="true" />
                Apoiar no Pix
              </button>
              <button
                type="button"
                onClick={() => setIsVisible(false)}
                aria-label="Fechar anúncio"
                className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <DonationModal isOpen={isDonationOpen} onClose={() => setIsDonationOpen(false)} />
    </>
  );
}

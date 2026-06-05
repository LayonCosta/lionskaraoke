"use client";

import React from "react";
import { Flame } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md px-4 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/avatar.jpg" 
            alt="Lions Karaokê Avatar" 
            className="h-9 w-9 rounded-full object-cover border border-brand-gold/40 shadow-sm shadow-brand-gold/10" 
          />
          <span className="font-extrabold tracking-wider text-white text-base">
            LIONS <span className="text-brand-gold font-medium">KARAOKÊ</span>
          </span>
        </div>

        {/* VIP Live Badge */}
        <div className="flex items-center gap-1.5 rounded-full bg-brand-gold/10 px-3 py-1 border border-brand-gold/30 text-xs font-semibold text-brand-gold shadow-sm animate-pulse-slow">
          <Flame className="h-3.5 w-3.5 fill-brand-gold" />
          <span>VIP EXPRESS</span>
        </div>
      </div>
    </header>
  );
}

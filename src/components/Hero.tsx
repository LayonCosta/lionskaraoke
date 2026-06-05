"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const handleCtaClick = () => {
    const el = document.getElementById("estimator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-12 px-4 md:py-20">
      {/* Background glow effects */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-xl text-center flex flex-col items-center gap-6">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 pl-1.5 pr-3.5 py-1 text-xs text-zinc-300 font-medium select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/avatar.jpg" 
            alt="Lions Karaokê Avatar" 
            className="h-5.5 w-5.5 rounded-full object-cover border border-brand-gold/30" 
          />
          <span className="text-zinc-400 font-bold">@lionskaraoke</span>
          <span className="h-1 w-1 rounded-full bg-zinc-600" />
          <span className="text-brand-gold font-semibold flex items-center gap-0.5">
            Canal Oficial
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
          Cante sua Música na Festa <br className="hidden sm:inline" />
          <span className="text-gradient-gold font-black">Sem Esperar na Fila!</span>
        </h1>

        {/* Description */}
        <p className="text-sm leading-relaxed text-zinc-400 max-w-md">
          Não aguenta mais esperar horas pelo seu playback? Nós produzimos e remasterizamos sua música em até <strong>48 horas</strong> com prioridade máxima.
        </p>

        {/* Hero Actions */}
        <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={handleCtaClick}
            className="shimmer-btn group relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-gold to-yellow-500 py-3.5 px-6 font-bold text-black shadow-lg shadow-brand-gold/25 hover:from-yellow-400 hover:to-brand-gold transition duration-300 cursor-pointer w-full sm:w-auto overflow-hidden border border-brand-gold-light/20 gold-glow-hover"
          >
            <span>Pedir Minha Música VIP</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById("examples");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3.5 px-6 font-semibold text-white hover:bg-white/10 hover:border-white/20 transition duration-300 cursor-pointer w-full sm:w-auto"
          >
            <Play className="h-3.5 w-3.5 fill-white" />
            <span>Ouvir Exemplos</span>
          </button>
        </div>

        {/* Extra trust highlights */}
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span>Entrega Expressa &lt; 48h</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span>Remasterização Exclusiva</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span>Playlist Personalizada de Bônus</span>
          </div>
        </div>
      </div>
    </section>
  );
}

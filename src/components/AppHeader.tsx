"use client";

import React from "react";

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function AppHeader() {
  return (
    <header className="w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="w-full mx-auto px-[2px] py-2.5 flex items-center justify-between">
        {/* Brand identity */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/avatar.jpg" 
            alt="Lions Karaokê" 
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-amber-500 shadow-sm shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 leading-tight">
              Lions <span className="text-amber-600 font-bold">Karaokê</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block shrink-0" />
              Fila de Produção Ativa
            </span>
          </div>
        </div>

        {/* YouTube Channel Pill Button (Totalmente mobile-friendly) */}
        <a
          href="https://www.youtube.com/@LionsKaraoke"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs shadow-sm shadow-red-600/25 transition-all whitespace-nowrap shrink-0"
        >
          <YoutubeIcon className="w-4 h-4 fill-white" />
          <span>Canal YouTube</span>
        </a>
      </div>
    </header>
  );
}

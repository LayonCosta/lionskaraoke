"use client";

import React, { useState } from "react";
import { Play, Star, Sparkles } from "lucide-react";

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507A3.003 3.003 0 0 0 .502 6.164C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface KaraokeVideo {
  id: string;
  title: string;
  artist: string;
  description: string;
  viewsBadge?: string;
}

export default function VideoShowcase() {
  const videos: KaraokeVideo[] = [
    {
      id: "6D1VoN4KhuA",
      title: "Naquela Mesa",
      artist: "Nelson Gonçalves",
      description: "O maior sucesso do canal!",
      viewsBadge: "🔥 +2 Milhões de Views",
    },
    {
      id: "3gizIC-Lppw",
      title: "Na Sua Estante",
      artist: "Pitty",
      description: "Vídeo com Letra & Playback Limpo",
    },
    {
      id: "I244kBbMGcw",
      title: "Retalhos de Cetim",
      artist: "Benito Di Paula",
      description: "Remasterização de Samba Clássico",
    },
    {
      id: "vdkCDdnMeNU",
      title: "Mundo Bita Fundo do Mar",
      artist: "Karaokê Infantil",
      description: "Vídeo Infantil 4K Smart TV",
    },
    {
      id: "f5LgrMmER2s",
      title: "Gamei",
      artist: "Exaltasamba",
      description: "Pagode Clássico em 4K Smart TV",
    },
    {
      id: "9M1e7RfpsAI",
      title: "Mulheres",
      artist: "Martinho da Vila",
      description: "Samba de Raiz Masterizado",
    },
    {
      id: "K8_QPjy0BBw",
      title: "Que Se Chama Amor",
      artist: "Só Pra Contrariar",
      description: "Samba/Pagode Anos 90",
    },
  ];

  const [activeVideo, setActiveVideo] = useState<KaraokeVideo>(videos[0]);

  return (
    <section id="examples" className="py-12 px-4 bg-zinc-950/60 border-t border-white/5 relative">
      {/* Light glow */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase text-gradient-gold flex items-center justify-center gap-1.5">
            <Sparkles className="h-5 w-5 text-brand-gold fill-brand-gold/10" />
            Exemplos de Karaokê
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Veja e ouça a qualidade profissional dos vídeos do nosso canal.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="glass-panel rounded-3xl p-4 border border-white/10 shadow-2xl mb-6">
          {/* Responsive Iframe Container */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/5 shadow-inner">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>

          {/* Video Description Callout */}
          <div className="mt-4 flex items-start justify-between gap-4 px-1">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-extrabold text-brand-gold tracking-wide uppercase">
                  {activeVideo.artist}
                </span>
                {activeVideo.viewsBadge && (
                  <span className="text-[9px] font-black bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse-slow">
                    {activeVideo.viewsBadge}
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-white mt-1">
                {activeVideo.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                {activeVideo.description}
              </p>
            </div>
            
            {/* Quick Channel Link */}
            <a
              href="https://youtube.com/@LionsKaraoke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 hover:bg-red-600/20 transition cursor-pointer"
            >
              <YoutubeIcon className="h-4.5 w-4.5 fill-red-500" />
            </a>
          </div>
        </div>

        {/* Video Selector Grid */}
        <div className="flex flex-col gap-2.5">
          <span className="text-[10px] font-extrabold uppercase text-zinc-500 tracking-wider px-1">
            Selecione para reproduzir:
          </span>
          <div className="grid grid-cols-1 gap-1.5">
            {videos.map((vid) => {
              const isActive = activeVideo.id === vid.id;
              return (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideo(vid)}
                  className={`flex items-center justify-between text-left p-3 rounded-xl border transition cursor-pointer select-none text-xs ${
                    isActive
                      ? "bg-brand-gold/10 border-brand-gold/30 text-white"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10 text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                      isActive ? "bg-brand-gold text-black" : "bg-white/5 border border-white/10 text-zinc-400"
                    }`}>
                      {isActive ? (
                        <Star className="h-3 w-3 fill-black text-black" />
                      ) : (
                        <Play className="h-3 w-3 fill-zinc-400 text-zinc-400 translate-x-0.5" />
                      )}
                    </div>
                    <div>
                      <span className="font-bold block text-zinc-200">
                        {vid.title} - <span className="font-medium text-zinc-400">{vid.artist}</span>
                      </span>
                    </div>
                  </div>
                  {vid.viewsBadge && (
                    <span className="text-[8px] font-extrabold text-brand-gold border border-brand-gold/20 px-1.5 py-0.5 rounded-md bg-brand-gold/5 uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

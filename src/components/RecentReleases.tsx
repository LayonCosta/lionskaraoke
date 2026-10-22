"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, ExternalLink, Music } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  artist: string;
  genre: string;
  url: string;
}

const videoList: VideoItem[] = [
  {
    id: "QrolHLqCiD4",
    title: "Página de Amigos",
    artist: "Chitãozinho & Xororó",
    genre: "Sertanejo",
    url: "https://youtu.be/QrolHLqCiD4",
  },
  {
    id: "6D1VoN4KhuA",
    title: "Naquela Mesa",
    artist: "Nelson Gonçalves",
    genre: "Serenata",
    url: "https://youtu.be/6D1VoN4KhuA",
  },
  {
    id: "I244kBbMGcw",
    title: "Retalhos de Cetim",
    artist: "Benito Di Paula",
    genre: "Samba",
    url: "https://youtu.be/I244kBbMGcw",
  },
  {
    id: "-TqQXnLezrg",
    title: "Vou Começar Tudo de Novo",
    artist: "Reginaldo Rossi",
    genre: "Brega",
    url: "https://www.youtube.com/watch?v=-TqQXnLezrg",
  },
  {
    id: "_1vpsDbKEIY",
    title: "Convite de Casamento",
    artist: "Karametade",
    genre: "Pagode",
    url: "https://www.youtube.com/watch?v=_1vpsDbKEIY",
  },
  {
    id: "6svCQJHu77U",
    title: "Viajar Pelo Safari",
    artist: "Mundo Bita",
    genre: "Infantil",
    url: "https://www.youtube.com/watch?v=6svCQJHu77U",
  },
];

export default function RecentReleases() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videoList[0]);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Envia comando para a API do YouTube iframe via postMessage
  const sendPlayerCommand = (func: string, args: unknown[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func,
          args,
        }),
        "*"
      );
    }
  };

  const handleStartPlay = () => {
    setHasStarted(true);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (!hasStarted) {
      handleStartPlay();
      return;
    }

    if (isPlaying) {
      sendPlayerCommand("pauseVideo");
      setIsPlaying(false);
    } else {
      sendPlayerCommand("playVideo");
      setIsPlaying(true);
    }
  };

  const handleRestart = () => {
    if (!hasStarted) {
      handleStartPlay();
      return;
    }
    sendPlayerCommand("seekTo", [0, true]);
    sendPlayerCommand("playVideo");
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (isMuted) {
      sendPlayerCommand("unMute");
      setIsMuted(false);
    } else {
      sendPlayerCommand("mute");
      setIsMuted(true);
    }
  };

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setHasStarted(true);
    setIsPlaying(true);
  };

  // Sincroniza estado de reprodução recebido do YouTube
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === "string") {
          const data = JSON.parse(event.data);
          if (data.event === "onStateChange") {
            // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
            if (data.info === 1) setIsPlaying(true);
            if (data.info === 2 || data.info === 0) setIsPlaying(false);
          }
        }
      } catch {
        // Ignora mensagens não JSON
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="lancamentos" className="w-full mt-5 px-0">
      {/* Header da Seção 100% Otimizado para Mobile */}
      <div className="mb-3 px-1 flex flex-col gap-1">
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
          <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
            <h2 className="text-sm sm:text-lg font-bold text-slate-900 tracking-tight">
              Qualidade dos Karaokês
            </h2>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200/80 whitespace-nowrap shrink-0">
              <Sparkles className="w-3 h-3 text-amber-600" />
              Smart TV 4K
            </span>
          </div>

          <a
            href="https://www.youtube.com/@LionsKaraoke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors shrink-0 flex items-center gap-1 whitespace-nowrap"
          >
            <span>Ver Canal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <p className="text-xs text-slate-500">
          Dê o play e confira a sincronização da letra e o resultado do áudio.
        </p>
      </div>

      {/* Card do Player Principal */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-md p-3 sm:p-4 mb-4 overflow-hidden">
        {/* Janela de Vídeo 16:9 */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-950 shadow-inner border border-slate-200">
          {hasStarted ? (
            <>
              {/* Tarja Superior Blindada (Cobre o título e links do YouTube) */}
              <div className="absolute top-0 inset-x-0 h-9 bg-gradient-to-b from-black/90 via-black/60 to-transparent z-20 flex items-center justify-between px-3 text-white pointer-events-auto select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-black tracking-wide text-amber-400">
                    LIONS KARAOKÊ
                  </span>
                  <span className="text-[10px] text-slate-300 font-semibold">• 4K SMART TV</span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded border border-white/20 text-white">
                  Áudio tratado
                </span>
              </div>

              {/* YouTube IFrame com controles nativos ocultos */}
              <iframe
                ref={iframeRef}
                id="lions-player-iframe"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?enablejsapi=1&autoplay=1&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full border-0 pointer-events-none select-none"
              />

              {/* Camada Transparente de Controle (Bloqueia qualquer menu do YouTube e ativa Play/Pause no toque) */}
              <div
                onClick={togglePlayPause}
                title="Toque para Reproduzir ou Pausar"
                className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center group"
              >
                {/* Overlay quando o vídeo estiver pausado */}
                {!isPlaying && (
                  <div className="bg-slate-950/80 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/20 shadow-2xl flex items-center gap-3 transition-transform animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg shrink-0">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                        Vídeo Pausado
                      </p>
                      <p className="text-slate-300 text-[11px] whitespace-nowrap">
                        Toque para continuar
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Capa Inicial com Botão Play Perfeitamente Centralizado */
            <div
              onClick={handleStartPlay}
              className="relative w-full h-full cursor-pointer group select-none overflow-hidden"
            >
              {/* Imagem de Fundo (Absolute para não alterar o fluxo de centralização) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`}
                alt={activeVideo.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 group-hover:from-black/75 transition-colors" />

              {/* Botão Play no Centro Exato */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 z-10 pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-slate-950 shadow-[0_0_35px_rgba(245,158,11,0.7)] border-4 border-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(245,158,11,0.9)] transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-amber-500 text-amber-500 ml-1" />
                </div>
                <span className="px-3.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/20 shadow-lg group-hover:border-amber-400 transition-colors whitespace-nowrap">
                  Assistir Demonstração 4K
                </span>
              </div>

              {/* Barra inferior fixa */}
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs drop-shadow z-10">
                <span className="font-bold truncate pr-2">
                  {activeVideo.title} - {activeVideo.artist}
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase shrink-0 whitespace-nowrap">
                  {activeVideo.genre}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Barra de Controles Dedicada (Play/Pause, Reiniciar, Volume) */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          {/* Informações da Música Ativa */}
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                {activeVideo.title}
              </h3>
            </div>
            <p className="text-[11px] text-slate-500 truncate ml-3.5">
              {activeVideo.artist} • <span className="font-semibold text-slate-700">{activeVideo.genre}</span>
            </p>
          </div>

          {/* Botões de Ação Direta */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Botão de Play / Pause Principal */}
            <button
              type="button"
              onClick={togglePlayPause}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer whitespace-nowrap ${
                isPlaying
                  ? "bg-amber-500 hover:bg-amber-600 text-slate-950"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{hasStarted ? "Continuar" : "Tocar Vídeo"}</span>
                </>
              )}
            </button>

            {/* Reiniciar do início */}
            {hasStarted && (
              <button
                type="button"
                onClick={handleRestart}
                title="Reiniciar música do início"
                className="p-1.5 sm:px-2.5 sm:py-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reiniciar</span>
              </button>
            )}

            {/* Mudo / Volume */}
            {hasStarted && (
              <button
                type="button"
                onClick={toggleMute}
                title={isMuted ? "Ativar som" : "Silenciar"}
                className="p-1.5 sm:p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5 text-red-500" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grade de Músicas com Cards Encorpados, Belos e Proporcionais */}
      <div className="mb-2.5 px-1">
        <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
          <Music className="w-3.5 h-3.5 text-amber-600" />
          Selecione Outras Demonstrações do Canal:
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {videoList.map((video) => {
          const isSelected = video.id === activeVideo.id;
          return (
            <div
              key={video.id}
              onClick={() => handleSelectVideo(video)}
              className={`group flex min-h-[88px] items-center gap-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer shadow-sm select-none ${
                isSelected
                  ? "bg-gradient-to-r from-amber-50 to-white border-amber-500 ring-1 ring-amber-500/25 shadow-md"
                  : "bg-white border-slate-200 hover:border-amber-300 hover:shadow-md hover:bg-amber-50/20"
              }`}
            >
              {/* Miniatura 16:9 Encorpada (112px x 63px - perfeita para mobile) */}
              <div className="relative w-28 sm:w-32 shrink-0 aspect-video rounded-md overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <span className="absolute top-1 left-1 px-1.5 py-0.5 bg-black/80 text-[8px] font-black text-amber-300 rounded shadow-xs">
                  4K
                </span>

                <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-110 ${
                      isSelected
                        ? "bg-amber-500 text-slate-950"
                        : "bg-black/60 text-white"
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Informações da Música com Hierarquia Perfeita */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-900 truncate group-hover:text-amber-600 transition-colors leading-snug">
                  {video.title}
                </p>
                <p className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                  {video.artist}
                </p>

                <div className="flex items-center justify-between gap-1 mt-2">
                  <span className="max-w-[calc(100%-2rem)] truncate px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/60 whitespace-nowrap">
                    {video.genre}
                  </span>

                  {isSelected ? (
                    <div className="flex shrink-0 items-center gap-1 px-1.5 py-1 rounded-md bg-amber-100 text-amber-800 font-extrabold text-[9px] sm:text-[10px] whitespace-nowrap">
                      <span className="flex items-end gap-0.5 h-3">
                        <span className="w-0.5 h-3 bg-amber-700 animate-pulse rounded-full" />
                        <span className="w-0.5 h-2 bg-amber-700 animate-pulse delay-75 rounded-full" />
                        <span className="w-0.5 h-2.5 bg-amber-700 animate-pulse delay-150 rounded-full" />
                      </span>
                      <span>Tocando</span>
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-amber-500 text-slate-600 group-hover:text-slate-950 flex items-center justify-center transition-colors shadow-xs">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

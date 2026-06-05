"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Music, Sparkles } from "lucide-react";

export default function AudioShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRemastered, setIsRemastered] = useState(true);
  const [progress, setProgress] = useState(35);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Simulate audio player progress bar
  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 300);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  // Generate mock equalizer bars
  const renderEqualizer = () => {
    const barCount = 28;
    const bars = [];
    for (let i = 0; i < barCount; i++) {
      // Create random/semi-random heights
      const baseHeight = 12 + Math.sin(i * 0.5) * 10 + Math.cos(i * 0.3) * 8;
      // Remastered has taller, more dynamic wave bars
      const multiplier = isRemastered ? 1.5 : 0.8;
      const height = Math.min(Math.max(baseHeight * multiplier, 6), 40);

      // Animation speed changes depending on play state and mode
      let animDuration = "1.2s";
      if (isPlaying) {
        animDuration = isRemastered ? `${0.4 + (i % 3) * 0.1}s` : `${0.8 + (i % 3) * 0.2}s`;
      }

      bars.push(
        <div
          key={i}
          className={`w-1 rounded-full transition-all duration-300 ${
            isRemastered
              ? "bg-gradient-to-t from-brand-gold to-yellow-300"
              : "bg-zinc-600"
          }`}
          style={{
            height: isPlaying ? undefined : `${height}px`,
            animationName: isPlaying ? "bounce" : "none",
            animationDuration: animDuration,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            animationDelay: `${i * 0.03}s`,
            transformOrigin: "bottom",
            // Fallback height if not playing
            minHeight: "4px",
            ...({ "--bounce-height": `${height}px` } as React.CSSProperties),
          }}
        />
      );
    }
    return bars;
  };

  return (
    <section id="demo" className="py-12 px-4 bg-zinc-950/60 border-t border-white/5 relative">
      {/* Wave animation style definition */}
      <style jsx global>{`
        @keyframes bounce {
          0%, 100% {
            transform: scaleY(0.3);
          }
          50% {
            transform: scaleY(1.2);
          }
        }
      `}</style>

      <div className="mx-auto max-w-xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase text-gradient-gold">
            Demonstração de Áudio
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Compare e sinta a diferença na potência do som do churrasco!
          </p>
        </div>

        {/* Interactive Showcase Card */}
        <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle logo bg */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <Music className="h-48 w-48 text-white" />
          </div>

          {/* Quality Toggle buttons */}
          <div className="grid grid-cols-2 gap-2 bg-black/40 rounded-xl p-1 mb-6 border border-white/5">
            <button
              onClick={() => setIsRemastered(false)}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition duration-200 cursor-pointer ${
                !isRemastered
                  ? "bg-zinc-800 text-zinc-300 shadow-md"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Playback Comum
            </button>
            <button
              onClick={() => setIsRemastered(true)}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition duration-200 cursor-pointer ${
                isRemastered
                  ? "bg-gradient-to-r from-brand-gold to-yellow-500 text-black shadow-lg shadow-brand-gold/15 font-black"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Sparkles className="h-3 w-3 fill-black text-black" />
              Lions Remastered
            </button>
          </div>

          {/* Track details */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-brand-gold">
                Demonstração de Qualidade
              </span>
              <h4 className="text-base font-bold text-white mt-0.5">
                Roberto Carlos - Detalhes
              </h4>
              <p className="text-xs text-zinc-400">
                {isRemastered ? "✨ Masterizado & Tom Ajustado" : "⚠️ Versão Original Compactada"}
              </p>
            </div>
            
            {/* Status indicator */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <Music className={`h-5 w-5 ${isRemastered ? "text-brand-gold" : "text-zinc-400"}`} />
            </div>
          </div>

          {/* Equalizer Visualizer */}
          <div className="h-16 flex items-end justify-between px-2 gap-0.5 bg-black/25 rounded-2xl p-4 border border-white/5 mb-6">
            {renderEqualizer()}
          </div>

          {/* Audio Controls */}
          <div className="flex flex-col gap-4">
            {/* Progress bar */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-zinc-500 font-medium">0:45</span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-gold focus:outline-none"
              />
              <span className="text-[10px] text-zinc-500 font-medium">3:24</span>
            </div>

            {/* Play/Pause & Mode specific label */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <Volume2 className="h-4 w-4 text-zinc-500" />
                <span>Modo {isRemastered ? "Estúdio VIP" : "Simples"}</span>
              </div>

              <button
                onClick={togglePlay}
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                  isPlaying
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-brand-gold text-black hover:bg-yellow-500 hover:scale-105 shadow-md shadow-brand-gold/15"
                }`}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 fill-black" />
                ) : (
                  <Play className="h-5 w-5 fill-black translate-x-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

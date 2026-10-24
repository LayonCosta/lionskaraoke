import React from "react";
import { ExternalLink } from "lucide-react";

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

export default function AppFooter() {
  return (
    <footer className="w-full mx-auto mt-8 mb-8 px-[2px] text-center">
      <div className="pt-8 border-t border-slate-200">
        <p className="text-xs font-bold text-slate-800 tracking-tight">
          Lions Karaokê • Produções Musicais & Playbacks VIP Express
        </p>

        <p className="text-[11px] text-slate-500 mt-1 max-w-md mx-auto leading-relaxed">
          Os karaokês são preparados com ferramentas de remoção vocal. O resultado pode variar conforme a gravação original; confira as demonstrações do canal antes de pedir.
        </p>

        <div className="mt-4 flex justify-center text-xs font-medium text-slate-500">
          <a
            href="https://www.youtube.com/@LionsKaraoke"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition-colors hover:border-red-200 hover:text-red-600"
          >
            <YoutubeIcon className="w-3.5 h-3.5 text-red-600" />
            Canal Oficial no YouTube
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>

        <p className="text-[10px] text-slate-400 mt-6">
          © {new Date().getFullYear()} Lions Karaokê. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

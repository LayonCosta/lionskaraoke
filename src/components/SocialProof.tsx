import React from "react";
import { Users, Eye, Play } from "lucide-react";

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

export default function SocialProof() {
  const stats = [
    {
      icon: <Users className="h-4 w-4 text-brand-gold" />,
      value: "14.300+",
      label: "Cantores Inscritos",
    },
    {
      icon: <Eye className="h-4 w-4 text-brand-gold" />,
      value: "133.000+",
      label: "Visualizações / Mês",
    },
    {
      icon: <Play className="h-4 w-4 text-brand-gold" />,
      value: "4.500h+",
      label: "Tempo de Exibição",
    },
  ];

  return (
    <section className="px-4 py-6 bg-black/60 border-y border-white/5 relative z-10">
      <div className="mx-auto max-w-xl flex items-center justify-around gap-2 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              {stat.icon}
              <span className="text-base font-extrabold text-white">
                {stat.value}
              </span>
            </div>
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
        
        {/* YouTube Link Indicator */}
        <div className="hidden sm:flex flex-col items-center gap-1 border-l border-white/10 pl-6">
          <div className="flex items-center gap-1 text-red-500 font-bold text-xs">
            <YoutubeIcon className="h-4 w-4 fill-red-500" />
            <span>Canal Oficial</span>
          </div>
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Lions Karaokê</span>
        </div>
      </div>
    </section>
  );
}

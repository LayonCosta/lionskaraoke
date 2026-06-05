import React from "react";
import { Zap, Disc, ListMusic } from "lucide-react";

export default function FeatureVip() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-brand-gold" />,
      title: "Entrega Expressa em 48h",
      description: "Esqueça as esperas intermináveis. Pediu o seu playback, nossa equipe foca na sua produção e publica o vídeo no canal oficial do YouTube em tempo recorde.",
    },
    {
      icon: <Disc className="h-6 w-6 text-brand-purple" />,
      title: "Áudio Masterizado de Estúdio",
      description: "Isolamento profissional de vocais, equalização premium e masterização de alta definição para a sua voz brilhar em qualquer caixa de som.",
    },
    {
      icon: <ListMusic className="h-6 w-6 text-emerald-400" />,
      title: "Playlist no YouTube Exclusiva",
      description: "Ao realizar o seu pedido, organizamos tudo em uma playlist exclusiva no YouTube com o seu próprio nome para facilitar a reprodução direta na TV.",
    },
  ];

  return (
    <section id="benefits" className="py-12 px-4 border-t border-white/5 bg-zinc-950/40">
      <div className="mx-auto max-w-xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase text-gradient-gold">
            Vantagens VIP Lions
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Muito mais que um playback simples. Um pacote completo para sua festa.
          </p>
        </div>

        {/* Feature List/Cards */}
        <div className="grid gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-panel flex flex-col sm:flex-row gap-4 p-5 rounded-2xl hover:bg-zinc-900/80 transition duration-300 border border-white/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

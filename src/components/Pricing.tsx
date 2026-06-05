import React from "react";
import { Check, Flame, Star, MessageSquare } from "lucide-react";

export default function Pricing() {
  const whatsappNumber = "5515991908930"; // Real phone number
  
  const getWhatsappUrl = (packName: string) => {
    const message = `Olá Lions Karaokê! Gostaria de saber mais e solicitar o ${packName} VIP Express.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-12 px-4 border-t border-white/5 bg-zinc-950/60 relative">
      <div className="mx-auto max-w-xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase text-gradient-gold">
            Nossos Planos
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Escolha o plano ideal para animar o seu churrasco.
          </p>
        </div>

        {/* Pricing Cards Stack */}
        <div className="grid gap-6">
          {/* Plan 1: Single Song */}
          <div className="glass-panel rounded-3xl p-6 border border-white/5 hover:border-white/10 relative flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Música Avulsa</h3>
                  <p className="text-xs text-zinc-400">Ideal para pedidos rápidos e urgentes</p>
                </div>
                <span className="text-xs font-semibold bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-1 rounded-full">
                  Prioritário
                </span>
              </div>

              {/* Pricing */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">R$ 15</span>
                <span className="text-xs text-zinc-500">/ por música</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Entrega Expressa em até 48 horas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Qualidade de estúdio (Isolamento vocal)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Ajuste de tom personalizado</span>
                </li>
                <li className="flex items-center gap-2 opacity-50">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Playlist no YouTube (A partir de 3 músicas)</span>
                </li>
              </ul>
            </div>

            <a
              href={getWhatsappUrl("Plano Música Avulsa")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3.5 px-4 font-bold text-white hover:bg-white/10 hover:border-white/20 transition duration-300 text-xs cursor-pointer"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Pedir Música Avulsa</span>
            </a>
          </div>

          {/* Plan 2: Promo Combo (Featured) */}
          <div className="glass-panel rounded-3xl p-6 border-2 border-brand-gold/60 relative flex flex-col justify-between shadow-xl shadow-brand-gold/5 bg-zinc-900/40">
            {/* Ribbon/Badge */}
            <div className="absolute -top-3.5 right-6 flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-gold to-yellow-500 px-3 py-1 border border-brand-gold-light/20 text-[10px] font-black text-black uppercase tracking-wider shadow-md">
              <Star className="h-3 w-3 fill-black text-black" />
              <span>Mais Vendido</span>
            </div>

            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-extrabold text-white flex items-center gap-1.5">
                    Combo VIP
                    <Flame className="h-4 w-4 fill-brand-gold text-brand-gold animate-pulse-slow" />
                  </h3>
                  <p className="text-xs text-zinc-400">Pacote promocional para festas</p>
                </div>
                <span className="text-[10px] font-extrabold bg-brand-gold/10 border border-brand-gold/30 text-brand-gold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Super Desconto
                </span>
              </div>

              {/* Pricing */}
              <div className="mb-2 flex items-baseline gap-1.5">
                <span className="text-4xl font-black text-brand-gold">R$ 10</span>
                <span className="text-xs text-zinc-300 font-medium">/ por música</span>
              </div>
              <p className="text-[10px] text-zinc-500 mb-6 font-medium">Válido para pedidos acima de 5 músicas</p>

              {/* Features List */}
              <ul className="space-y-3 mb-6 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span className="font-semibold text-white">Playlist no YouTube Exclusiva (Com seu nome)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Entrega prioritária escalonada em até 48h</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Masterização de estúdio completa em todas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Suporte VIP WhatsApp direto com o técnico</span>
                </li>
              </ul>
            </div>

            <a
              href={getWhatsappUrl("Combo VIP Promocional")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-gold to-yellow-500 py-3.5 px-4 font-black text-black hover:from-yellow-400 hover:to-brand-gold transition duration-300 text-xs cursor-pointer border border-brand-gold-light/20 gold-glow-hover"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-black text-black" />
              <span>Pedir Combo VIP (Promoção)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

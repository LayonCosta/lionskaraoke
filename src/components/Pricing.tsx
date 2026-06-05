import React from "react";
import { Check, Flame, Star } from "lucide-react";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.216 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
                  <span>Postagem no canal em até 48 horas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Qualidade de estúdio (Isolamento vocal)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Masterização profissional de áudio</span>
                </li>
                <li className="flex items-center gap-2 opacity-50">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Playlist no YouTube (Bônus com seu nome)</span>
                </li>
              </ul>
            </div>

            <a
              href={getWhatsappUrl("Plano Música Avulsa")}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3.5 px-4 font-bold text-white hover:bg-white/10 hover:border-white/20 transition duration-300 text-xs cursor-pointer"
            >
              <WhatsappIcon className="h-4 w-4" />
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
                  <span>Postagem prioritária no canal em até 48h</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Masterização de estúdio completa em todas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Aviso de publicação direto no WhatsApp</span>
                </li>
              </ul>
            </div>

            <a
              href={getWhatsappUrl("Combo VIP Promocional")}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-gold to-yellow-500 py-3.5 px-4 font-black text-black hover:from-yellow-400 hover:to-brand-gold transition duration-300 text-xs cursor-pointer border border-brand-gold-light/20 gold-glow-hover"
            >
              <WhatsappIcon className="h-4 w-4 fill-black text-black" />
              <span>Pedir Combo VIP (Promoção)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { CheckSquare, CreditCard, Tv } from "lucide-react";

const steps = [
  { title: "Informe a música", desc: "Preencha música e artista no pedido.", icon: CheckSquare },
  { title: "Pague via Pix", desc: "Envie o comprovante pelo WhatsApp.", icon: CreditCard },
  { title: "Receba em até 48h", desc: "Publicamos no canal e criamos sua playlist.", icon: Tv },
];

export default function HowItWorks() {
  return (
    <section className="w-full mt-4 px-0">
      <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 mb-2.5">
          <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            Como funciona o pedido VIP
          </h2>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 whitespace-nowrap">
            3 passos
          </span>
        </div>
        <ol className="divide-y divide-slate-100">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="flex items-center gap-3 py-2.5 first:pt-1 last:pb-1">
                <span className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {idx + 1}. {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

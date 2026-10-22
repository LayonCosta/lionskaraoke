import React from "react";
import { CheckSquare, CreditCard, Tv } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Informe a Música",
    desc: "Preencha o nome da música e o cantor no formulário acima.",
    icon: CheckSquare,
  },
  {
    step: "2",
    title: "Pagamento via Pix",
    desc: "Pague com segurança e envie o comprovante no WhatsApp.",
    icon: CreditCard,
  },
  {
    step: "3",
    title: "Entrega em até 48h",
    desc: "Seu karaokê entra no canal em 4K com playlist no seu nome.",
    icon: Tv,
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full max-w-xl mx-auto mt-7 px-2 sm:px-0">
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3.5">
          <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            Como Funciona o Pedido VIP
          </h2>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            3 Passos Simples
          </span>
        </div>

        {/* Lista Horizontal de Passos (Design Otimizado 100% Mobile) */}
        <div className="flex flex-col gap-2.5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-colors"
              >
                {/* Badge do Número / Ícone no lado esquerdo */}
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {item.step}
                </div>

                {/* Conteúdo alinhado no lado direito */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

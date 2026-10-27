"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Qual o prazo de entrega da música?",
    a: "Os pedidos VIP Express têm prioridade máxima de produção e são publicados no canal em até 48 horas úteis após a confirmação do Pix.",
  },
  {
    q: "Como recebo a minha música?",
    a: "Publicamos o karaokê no YouTube em vídeo de até 4K e criamos uma playlist com o nome escolhido por você. O áudio é preparado com ferramentas de remoção vocal, e o resultado pode variar conforme a gravação original.",
  },
  {
    q: "Posso pedir qualquer cantor ou gênero musical?",
    a: "Sim! Produzimos sertanejo, samba, pagode, MPB, pop, rock, gospel e internacionais. Se a música existir oficialmente gravada, nós produzimos.",
  },
  {
    q: "Vocês alteram o tom da música (mais agudo ou mais grave)?",
    a: "Sim! No formulário de pedido você pode escolher o tom ideal para sua voz (semitons acima/abaixo ou adaptação para voz masculina/feminina) sem nenhum custo extra. Mantemos a qualidade e o andamento originais.",
  },
  {
    q: "Como funciona o desconto no combo de 5 músicas?",
    a: "Ao escolher 5 músicas ou mais, o valor unitário cai de R$ 15,00 para apenas R$ 10,00 por música (economia imediata de R$ 25,00 no pacote de 5).",
  },
];

export default function QuickFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="duvidas" className="w-full mt-4 px-0">
      <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm">
        <h2 className="text-base font-bold text-slate-900 tracking-tight mb-4">
          Dúvidas Frequentes
        </h2>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-3 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-slate-800 hover:text-amber-700 transition-colors py-1 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 ml-2 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed pl-1 pr-4">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

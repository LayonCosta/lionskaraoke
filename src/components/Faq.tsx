"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const faqs: FaqItem[] = [
    {
      question: "Como recebo minhas músicas?",
      answer: "O seu playback personalizado será produzido e postado diretamente no canal do YouTube do Lions Karaokê. Assim que o vídeo estiver no ar, nós enviamos o link de acesso direto no seu WhatsApp para você cantar na sua TV!",
    },
    {
      question: "Qual o prazo exato de entrega?",
      answer: "O prazo de produção é de no máximo 48 horas úteis após a confirmação do pedido. Como o seu pedido é classificado como VIP Express, ele passa na frente de todas as produções regulares do canal.",
    },
    {
      question: "Como funciona a Playlist no YouTube de bônus?",
      answer: "Ao fechar o Combo VIP, nós criamos e atualizamos uma playlist no canal Lions Karaokê contendo as músicas solicitadas com o título personalizado (Ex: 'Karaokê VIP do [Seu Nome]'). Assim, você pode tocar as músicas diretamente na TV do seu churrasco.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 px-4 border-t border-white/5 bg-zinc-950/40">
      <div className="mx-auto max-w-xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase text-gradient-gold">
            Dúvidas Frequentes
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Tudo o que você precisa saber sobre o serviço VIP.
          </p>
        </div>

        {/* Faq Items Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-bold text-white text-xs sm:text-sm cursor-pointer select-none"
                >
                  <span className="pr-4 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-brand-gold shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-zinc-500 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-zinc-500 shrink-0" />
                  )}
                </button>
                
                {/* Expandable Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden bg-black/10`}
                >
                  <p className="p-5 text-xs text-zinc-400 leading-relaxed">
                    {faq.answer}
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

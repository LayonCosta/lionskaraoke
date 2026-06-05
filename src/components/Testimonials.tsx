import React from "react";
import { MessageSquare, Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Mariana Silva",
      role: "Fã de MPB / Cantora de Chácara",
      comment: "Pedi o playback de Benito Di Paula pro aniversário do meu pai. Em menos de 24h o arquivo tava no meu WhatsApp, com o tom certinho pra voz dele. Foi o sucesso da festa!",
      rating: 5,
    },
    {
      name: "Rodrigo Mendonça",
      role: "Organiza Churrascos de Fim de Semana",
      comment: "A gente sempre usa os playbacks do Lions na TV do churrasco, mas a fila pra cantar era enorme. Com o Combo VIP pedi 5 músicas expressas e agora a galera canta sem parar na hora!",
      rating: 5,
    },
    {
      name: "Thiago Furtado",
      role: "Vocalista de Banda de Garagem",
      comment: "A remasterização e o isolamento vocal são nota 10. Dá pra ouvir os instrumentos com clareza na caixa de som grande. A playlist no YouTube com meu nome facilitou demais na TV.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-12 px-4 border-t border-white/5 bg-zinc-950/40 relative">
      <div className="mx-auto max-w-xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase text-gradient-gold flex items-center justify-center gap-1.5">
            <MessageSquare className="h-5 w-5 text-brand-gold" />
            Quem já canta VIP
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Confira o feedback real dos cantores que garantiram a fila expressa.
          </p>
        </div>

        {/* Testimonials List */}
        <div className="flex flex-col gap-5">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/5 relative hover:bg-zinc-900/60 transition duration-300"
            >
              {/* Quote Mark background */}
              <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                <Quote className="h-10 w-10 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-2">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-xs text-zinc-300 leading-relaxed italic mb-4">
                &quot;{test.comment}&quot;
              </p>

              {/* Author Details */}
              <div className="flex items-center gap-2.5 border-t border-white/5 pt-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs border border-brand-gold/30">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    {test.name}
                  </h4>
                  <span className="text-[10px] text-zinc-500 block">
                    {test.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

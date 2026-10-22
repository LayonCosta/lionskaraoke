import { ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-zinc-950/80 text-zinc-500">
      <div className="mx-auto max-w-xl flex flex-col items-center gap-6 text-center">
        {/* Brand */}
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/avatar.jpg" 
            alt="Lions Karaokê Avatar" 
            className="h-7 w-7 rounded-full object-cover border border-brand-gold/30" 
          />
          <span className="font-extrabold tracking-wider text-zinc-300 text-sm">
            LIONS <span className="text-brand-gold font-medium">KARAOKÊ</span>
          </span>
        </div>

        {/* Security badge */}
        <div className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-[10px] text-zinc-400 font-semibold shadow-inner">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Pagamento Seguro via PIX</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-400">
          <a
            href="https://youtube.com/@LionsKaraoke"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-gold transition duration-200"
          >
            Canal no YouTube
          </a>
          <span className="text-zinc-700">|</span>
          <a href="#benefits" className="hover:text-brand-gold transition duration-200">
            Benefícios VIP
          </a>
          <span className="text-zinc-700">|</span>
          <a href="#estimator" className="hover:text-brand-gold transition duration-200">
            Calcular Preço
          </a>
        </div>

        {/* Real Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-x-6 text-[11px] text-zinc-400 bg-white/5 border border-white/5 px-5 py-3 rounded-2xl w-full max-w-[280px] sm:max-w-none">
          <span>Telegram: <a href="https://t.me/layoncosta" target="_blank" rel="noopener noreferrer" className="text-brand-gold font-bold hover:underline">@layoncosta</a></span>
          <span>WhatsApp: <a href="https://wa.me/5511950749119" target="_blank" rel="noopener noreferrer" className="text-brand-gold font-bold hover:underline">(11) 95074-9119</a></span>
          <span>E-mail: <a href="mailto:layoncosta.digital@gmail.com" className="text-brand-gold font-bold hover:underline">layoncosta.digital@gmail.com</a></span>
        </div>

        <hr className="w-full border-white/5" />

        {/* Disclaimers & Copyright */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] text-zinc-600 leading-normal max-w-xs sm:max-w-none">
            © {currentYear} Lions Karaokê. Todos os direitos reservados. <br />
            Desenvolvido para entrega expressa de playbacks instrumentais.
          </p>
          <p className="text-[9px] text-zinc-700 leading-normal max-w-xs sm:max-w-none">
            Este site não é afiliado ao YouTube ou ao Google Inc. As marcas registradas pertencem aos seus respectivos proprietários.
          </p>
        </div>
      </div>
    </footer>
  );
}

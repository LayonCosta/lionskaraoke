"use client";

import React, { useState, useRef } from "react";
import { Music, Mic, User, Copy, Check, Clock, ShieldCheck, Sparkles, AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";

// Ícone Oficial do WhatsApp em SVG limpo (sem emoji)
const WhatsappIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.216 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function OrderAppCard() {
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [songCount, setSongCount] = useState(1);
  const [copiedPix, setCopiedPix] = useState(false);
  const [currentStep, setCurrentStep] = useState<"form" | "payment">("form");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const songInputRef = useRef<HTMLInputElement>(null);
  const artistInputRef = useRef<HTMLInputElement>(null);

  const pixKey = "f17a79b0-60f0-4eec-9e09-0d3fb8c50c02";
  const whatsappNumber = "5511950749119";

  // Preço progressivo
  const unitPrice = songCount >= 5 ? 10 : 15;
  const totalPrice = songCount * unitPrice;
  const savings = songCount >= 5 ? songCount * 15 - totalPrice : 0;

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 2500);
    } catch {
      setCopiedPix(false);
    }
  };

  const handleAdvanceToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!songName.trim()) {
      setErrorMessage("Por favor, preencha o nome da música acima.");
      songInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => songInputRef.current?.focus(), 300);
      return;
    }

    if (!artistName.trim()) {
      setErrorMessage("Por favor, preencha o cantor ou banda acima.");
      artistInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => artistInputRef.current?.focus(), 300);
      return;
    }

    setCurrentStep("payment");
    setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const buildWhatsappUrl = () => {
    const musicText = songName.trim() ? songName.trim() : "A definir";
    const artistText = artistName.trim() ? artistName.trim() : "A definir";
    const nameText = customerName.trim() ? customerName.trim() : "Cliente Lions";

    const msg = [
      "Olá Lions Karaokê! Acabei de fazer o Pix para meu pedido VIP Express:",
      "",
      `*Música:* ${musicText}`,
      `*Cantor/Artista:* ${artistText}`,
      `*Nome para a Playlist:* ${nameText}`,
      `*Quantidade:* ${songCount} ${songCount === 1 ? "música" : "músicas"}`,
      `*Valor Pago:* R$ ${totalPrice},00`,
      "",
      `*Chave Pix Nubank:* ${pixKey} (Layon Costa)`,
      "📎 *SEGUE MEU COMPROVANTE DO PIX EM ANEXO:*"
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div ref={cardRef} id="pedido" className="w-full bg-white rounded-lg border border-slate-200 shadow-md p-4 sm:p-6 transition-all">
      {/* ============================================================== */}
      {/* PASSO 1: DADOS DA MÚSICA                                       */}
      {/* ============================================================== */}
      {currentStep === "form" && (
        <form onSubmit={handleAdvanceToPayment}>
          {/* Card Header */}
          <div className="border-b border-slate-100 pb-5 mb-6">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h1 className="min-w-0 flex-1 whitespace-nowrap text-[clamp(14px,4vw,18px)] font-extrabold leading-tight tracking-tight text-slate-900">
                Fazer Pedido de Karaokê
              </h1>
              <span className="shrink-0 whitespace-nowrap rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-800">
                VIP 48h
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Preencha os dados da música desejada para receber no canal Lions Karaokê.
            </p>
          </div>

          {/* Alerta de Validação com Rolagem Suave */}
          {errorMessage && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Formulário Direto */}
          <div className="space-y-4 mb-6">
            {/* Campo Música */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Nome da Música *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Music className="w-4 h-4" />
                </div>
                <input
                  ref={songInputRef}
                  type="text"
                  value={songName}
                  onChange={(e) => {
                    setSongName(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="Ex: Página de Amigos, Fogão de Lenha, Evidências..."
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 ${
                    errorMessage && !songName.trim()
                      ? "border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20"
                      : "border-slate-200 bg-slate-50/50 focus:border-amber-500 focus:ring-amber-500/20"
                  }`}
                />
              </div>
            </div>

            {/* Campo Cantor */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Cantor ou Banda *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mic className="w-4 h-4" />
                </div>
                <input
                  ref={artistInputRef}
                  type="text"
                  value={artistName}
                  onChange={(e) => {
                    setArtistName(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="Ex: Chitãozinho & Xororó, Benito di Paula..."
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 ${
                    errorMessage && !artistName.trim()
                      ? "border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-red-500/20"
                      : "border-slate-200 bg-slate-50/50 focus:border-amber-500 focus:ring-amber-500/20"
                  }`}
                />
              </div>
            </div>

            {/* Campo Nome do Solicitante */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Seu Nome (Para a Playlist no YouTube)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Como quer ser identificado no canal"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Seletor de Pacotes */}
          <div className="mb-5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Selecione o Pacote
            </label>
            <div className="grid grid-cols-2 gap-3 mb-3 pt-1.5">
              <button
                type="button"
                onClick={() => setSongCount(1)}
                className={`min-w-0 rounded-lg border p-3 pt-4 text-left transition-colors flex flex-col justify-between ${
                  songCount === 1
                    ? "border-amber-500 bg-amber-50/70 ring-1 ring-amber-500/20 shadow-sm"
                    : "border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50/30"
                }`}
              >
                <div>
                  <span className="block whitespace-nowrap text-xs font-extrabold leading-tight text-slate-900">1 Música</span>
                  <span className="mt-1 block whitespace-nowrap text-[10px] leading-tight text-slate-500">Avulsa Express</span>
                </div>
                <span className="mt-2.5 block border-t border-slate-200/80 pt-2 text-base font-black leading-none text-slate-900">R$ 15,00</span>
              </button>

              <div className="relative min-w-0">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded-full bg-amber-500 px-2 py-0.5 text-[7.5px] sm:text-[8px] font-black uppercase tracking-wider text-slate-950 shadow-xs border border-amber-600/40 pointer-events-none">
                  Mais econômico · 5 músicas
                </span>
                <button
                  type="button"
                  onClick={() => setSongCount(5)}
                  className={`h-full w-full min-w-0 rounded-lg border p-3 pt-4 text-left transition-colors flex flex-col justify-between ${
                    songCount === 5
                      ? "border-amber-500 bg-amber-50/70 ring-1 ring-amber-500/20 shadow-sm"
                      : "border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50/30"
                  }`}
                >
                  <div>
                    <span className="block whitespace-nowrap text-xs font-extrabold leading-tight text-slate-900">Combo 5 músicas</span>
                    <span className="mt-1 flex min-w-0 items-center gap-1 text-[8px] font-semibold leading-tight">
                      <span className="shrink-0 rounded-sm bg-amber-100 px-1 py-0.5 font-extrabold text-amber-900">R$ 10/un.</span>
                      <span className="min-w-0 truncate text-emerald-700">Poupe R$ 25</span>
                    </span>
                  </div>
                  <span className="mt-2.5 block border-t border-slate-200/80 pt-2 text-base font-black leading-none text-slate-900">R$ 50,00</span>
                </button>
              </div>
            </div>

            {/* Ajuste Fino de Quantidade */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-xs font-medium text-slate-600">Outra quantidade:</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSongCount((prev) => Math.max(1, prev - 1))}
                  disabled={songCount <= 1}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 transition-colors flex items-center justify-center"
                >
                  -
                </button>
                <span className="font-extrabold text-sm text-slate-900 min-w-[32px] text-center">
                  {songCount}
                </span>
                <button
                  type="button"
                  onClick={() => setSongCount((prev) => prev + 1)}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-100 transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 sm:p-4 mb-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 mb-3">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                Total do Pedido
              </span>
              <div className="text-right">
                <span className="text-xl font-black text-slate-900">
                  R$ {totalPrice},00
                </span>
                {savings > 0 && (
                  <span className="block text-[11px] text-emerald-600 font-bold">
                    Desconto de R$ {savings},00 aplicado
                  </span>
                )}
              </div>
            </div>

            {/* Garantias rápidas */}
            <div className="grid grid-cols-2 gap-1 text-[9px] leading-tight text-slate-600">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 shrink-0 text-amber-600" />
                <span className="whitespace-nowrap">Entrega em até 48 horas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 shrink-0 text-emerald-600" />
                <span className="whitespace-nowrap">Áudio tratado</span>
              </div>
            </div>
          </div>

          {/* Botão para Avançar para a Tela de Pagamento (A Barreira) */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm py-3.5 px-4 rounded-md whitespace-nowrap shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer"
          >
            <span>Avançar para Pagamento Pix (R$ {totalPrice},00)</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>

          <p className="mt-2 whitespace-nowrap text-center text-[10px] font-medium leading-tight text-slate-500">
            Passo 1 de 2: Informe a música para ver a chave Pix e finalizar.
          </p>
        </form>
      )}

      {/* ============================================================== */}
      {/* PASSO 2: A BARREIRA DO PIX NUBANK (TAXA ZERO)                   */}
      {/* ============================================================== */}
      {currentStep === "payment" && (
        <div className="animate-fadeIn">
          {/* Botão Voltar */}
          <button
            type="button"
            onClick={() => setCurrentStep("form")}
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors mb-3 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar e alterar música</span>
          </button>

          {/* Header do Pagamento */}
          <div className="border-b border-slate-100 pb-4 mb-4 text-center">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 mb-1.5">
              <Sparkles className="w-3 h-3 text-amber-600" />
              Passo 2 de 2: Pagamento do Pedido
            </span>
            <div className="text-2xl font-black text-slate-900 leading-tight">
              R$ {totalPrice},00
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5 truncate">
              {songName} • {artistName} {customerName ? `(${customerName})` : ""}
            </p>
          </div>

          {/* Caixa da Chave Pix Nubank */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 sm:p-4 mb-4 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700 uppercase tracking-wide">
                Chave Pix (Nubank):
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Favorecido: <b>Layon Costa</b>
              </span>
            </div>

            <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
              <code className="text-xs sm:text-sm font-bold font-mono text-slate-800 flex-1 truncate select-all px-1">
                {pixKey}
              </code>
              <button
                type="button"
                onClick={handleCopyPix}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  copiedPix
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                {copiedPix ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Chave</span>
                  </>
                )}
              </button>
            </div>

            {copiedPix && (
              <p className="text-[10px] text-emerald-700 font-bold leading-tight">
                ✓ Chave copiada! Abra o app do seu banco e faça o Pix de R$ {totalPrice},00.
              </p>
            )}
          </div>

          {/* Instruções Rápidas */}
          <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-[11px] text-amber-900 space-y-1 mb-4">
            <span className="font-extrabold block text-amber-950">
              Instruções para liberação:
            </span>
            <div className="flex items-start gap-1.5">
              <span className="font-bold text-amber-800">1.</span>
              <span>Copie a chave Pix acima e transfira <b>R$ {totalPrice},00</b>.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="font-bold text-amber-800">2.</span>
              <span>Clique no botão verde abaixo para <b>enviar o comprovante no WhatsApp</b>.</span>
            </div>
          </div>

          {/* Botão Oficial do WhatsApp com Aviso de Comprovante */}
          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCopyPix}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3 px-4 rounded-md whitespace-nowrap shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer"
          >
            <WhatsappIcon className="w-5 h-5 text-white shrink-0" />
            <span>Já Fiz o Pix! Enviar Comprovante</span>
          </a>

          <p className="mt-2 whitespace-nowrap text-center text-[10px] font-medium leading-tight text-slate-500">
            Seu pedido entra na fila prioritária de produção assim que enviar o comprovante!
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Music,
  Mic,
  User,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  QrCode,
  Loader2,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

// Ícone Oficial do WhatsApp em SVG limpo
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

interface PixPaymentInfo {
  paymentId: number | string;
  totalPrice: number;
  qrCode: string;
  qrCodeBase64: string;
}

export default function OrderAppCard() {
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [songCount, setSongCount] = useState(1);

  // Estados do Fluxo
  const [currentStep, setCurrentStep] = useState<"form" | "pix" | "approved">("form");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCheckingManual, setIsCheckingManual] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [paymentData, setPaymentData] = useState<PixPaymentInfo | null>(null);
  const [copiedPix, setCopiedPix] = useState(false);

  const whatsappNumber = "5511950749119";
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  // Preço progressivo
  const unitPrice = songCount >= 5 ? 10 : 15;
  const totalPrice = songCount * unitPrice;
  const savings = songCount >= 5 ? songCount * 15 - totalPrice : 0;

  // Limpeza de polling quando desmontar ou mudar de tela
  useEffect(() => {
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, []);

  // Polling automático para detecção instantânea do pagamento
  useEffect(() => {
    if (currentStep === "pix" && paymentData?.paymentId) {
      const checkStatus = async () => {
        try {
          const res = await fetch(`/api/pix/status?id=${paymentData.paymentId}`);
          if (!res.ok) return;
          const data = await res.json();

          if (data.isApproved) {
            if (pollingRef.current) clearInterval(pollingRef.current);
            setCurrentStep("approved");
          }
        } catch {
          // Erro de rede silencioso no polling
        }
      };

      // Dispara verificação a cada 2.5 segundos
      pollingRef.current = setInterval(checkStatus, 2500);

      return () => {
        if (pollingRef.current) clearInterval(pollingRef.current);
      };
    }
  }, [currentStep, paymentData]);

  // Gerar cobrança Pix no Mercado Pago
  const handleGeneratePix = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!songName.trim()) {
      setErrorMessage("Por favor, digite o nome da música que você quer.");
      return;
    }

    if (!artistName.trim()) {
      setErrorMessage("Por favor, digite o cantor ou banda da música.");
      return;
    }

    setIsGenerating(true);

    try {
      const response = await fetch("/api/pix/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          songName: songName.trim(),
          artistName: artistName.trim(),
          customerName: customerName.trim(),
          songCount,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Não foi possível gerar o Pix. Tente novamente.");
      }

      setPaymentData({
        paymentId: data.paymentId,
        totalPrice: data.totalPrice,
        qrCode: data.qrCode,
        qrCodeBase64: data.qrCodeBase64,
      });

      setCurrentStep("pix");
    } catch (err: any) {
      setErrorMessage(err.message || "Erro de conexão ao gerar o Pix.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Copiar código Pix Copia e Cola
  const handleCopyPix = async () => {
    if (!paymentData?.qrCode) return;
    try {
      await navigator.clipboard.writeText(paymentData.qrCode);
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 3000);
    } catch {
      setCopiedPix(false);
    }
  };

  // Checar status manualmente se o usuário quiser clicar
  const handleManualCheck = async () => {
    if (!paymentData?.paymentId) return;
    setIsCheckingManual(true);
    try {
      const res = await fetch(`/api/pix/status?id=${paymentData.paymentId}`);
      const data = await res.json();
      if (data.isApproved) {
        setCurrentStep("approved");
      } else {
        alert("O pagamento ainda não foi identificado pelo banco. Aguarde alguns instantes!");
      }
    } catch {
      alert("Erro ao checar status. Tente novamente em alguns segundos.");
    } finally {
      setIsCheckingManual(false);
    }
  };

  // Montar link do WhatsApp após aprovação do pagamento
  const buildApprovedWhatsappUrl = () => {
    const musicText = songName.trim() || "A definir";
    const artistText = artistName.trim() || "A definir";
    const nameText = customerName.trim() || "Cliente Lions";
    const pId = paymentData?.paymentId || "CONFIRMADO";

    const msg = [
      "Olá Lions Karaokê! Acabei de realizar o pagamento do meu pedido VIP Express:",
      "",
      `*STATUS:* PAGO E APROVADO PELO MERCADO PAGO`,
      `*ID da Transação:* #${pId}`,
      `*Música:* ${musicText}`,
      `*Cantor/Artista:* ${artistText}`,
      `*Nome para a Playlist:* ${nameText}`,
      `*Quantidade:* ${songCount} ${songCount === 1 ? "música" : "músicas"}`,
      `*Valor Pago:* R$ ${totalPrice},00`,
      "",
      "Meu pedido já está confirmado! Aguardo a postagem prioritária no canal."
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div id="pedido" className="w-full max-w-xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-8 transition-all">
      {/* ============================================================== */}
      {/* ETAPA 1: FORMULÁRIO DE PEDIDO                                  */}
      {/* ============================================================== */}
      {currentStep === "form" && (
        <form onSubmit={handleGeneratePix}>
          {/* Card Header */}
          <div className="border-b border-slate-100 pb-5 mb-6">
            <div className="flex items-center justify-between gap-3 mb-1">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Fazer Pedido de Karaokê
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                VIP 48h
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Preencha os dados da música desejada para receber no canal Lions Karaokê.
            </p>
          </div>

          {/* Erro Geral */}
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Campos do Formulário */}
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
                  type="text"
                  value={songName}
                  onChange={(e) => setSongName(e.target.value)}
                  placeholder="Ex: Pra não pensar em você, Nuvem de Lágrimas..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400"
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
                  type="text"
                  value={artistName}
                  onChange={(e) => setArtistName(e.target.value)}
                  placeholder="Ex: Zezé Di Camargo e Luciano, Chitãozinho..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400"
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
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Seletor de Pacotes */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Selecione o Pacote
            </label>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {/* Opção 1 Música */}
              <button
                type="button"
                onClick={() => setSongCount(1)}
                className={`p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between min-h-[92px] ${
                  songCount === 1
                    ? "border-amber-500 bg-amber-50/60 ring-2 ring-amber-500/15 shadow-sm"
                    : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
              >
                <div>
                  <div className="font-bold text-sm text-slate-900 leading-tight">1 Música</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Avulsa Express</div>
                </div>
                <div className="text-base font-extrabold text-slate-900 mt-2.5 pt-1.5 border-t border-slate-100">
                  R$ 15,00
                </div>
              </button>

              {/* Opção 5 Músicas */}
              <button
                type="button"
                onClick={() => setSongCount(5)}
                className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between min-h-[92px] ${
                  songCount === 5
                    ? "border-amber-500 bg-amber-50/60 ring-2 ring-amber-500/15 shadow-sm"
                    : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
              >
                <span className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[9px] font-black uppercase px-2 py-0.5 rounded-bl">
                  R$ 10 cada
                </span>
                <div>
                  <div className="font-bold text-sm text-slate-900 leading-tight">Combo 5 Músicas</div>
                  <div className="text-[11px] text-emerald-600 font-bold mt-0.5">Economize R$ 25,00</div>
                </div>
                <div className="text-base font-extrabold text-slate-900 mt-2.5 pt-1.5 border-t border-slate-100">
                  R$ 50,00
                </div>
              </button>
            </div>

            {/* Ajuste Fino de Quantidade */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
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

          {/* Resumo do Pedido e Botão para Gerar Pix */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide block">
                  Total do Pedido
                </span>
                <span className="text-xs text-slate-400">
                  Pagamento instantâneo via Pix
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-slate-900">
                  R$ {totalPrice},00
                </span>
                {savings > 0 && (
                  <span className="block text-[11px] text-emerald-600 font-bold">
                    Desconto de R$ {savings},00 aplicado
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3.5 pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Entrega em até 48 horas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Áudio profissional 48 kHz</span>
              </div>
            </div>
          </div>

          {/* Botão de Avançar para Pagamento */}
          <button
            type="submit"
            disabled={isGenerating}
            className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer disabled:opacity-60"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Gerando Chave Pix Oficial...</span>
              </>
            ) : (
              <>
                <QrCode className="w-5 h-5" />
                <span>Pagar com Pix Oficial (R$ {totalPrice},00)</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </>
            )}
          </button>

          <p className="text-center text-[11px] text-slate-400 mt-3 font-medium">
            Ambiente seguro processado pelo Mercado Pago. O pedido é confirmado na hora.
          </p>
        </form>
      )}

      {/* ============================================================== */}
      {/* ETAPA 2: TELA DO PIX (A BARREIRA DE PAGAMENTO)                 */}
      {/* ============================================================== */}
      {currentStep === "pix" && paymentData && (
        <div className="animate-fadeIn">
          {/* Botão Voltar */}
          <button
            type="button"
            onClick={() => setCurrentStep("form")}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar e alterar música</span>
          </button>

          {/* Header da Tela de Pagamento */}
          <div className="text-center pb-4 mb-4 border-b border-slate-100">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Aguardando Pagamento Pix
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              R$ {paymentData.totalPrice},00
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {songName} ({artistName})
            </p>
          </div>

          {/* QR Code Imagem do Mercado Pago */}
          <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200 mb-5">
            {paymentData.qrCodeBase64 ? (
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <img
                  src={`data:image/png;base64,${paymentData.qrCodeBase64}`}
                  alt="QR Code Pix Mercado Pago"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                />
              </div>
            ) : (
              <div className="w-48 h-48 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-xs">
                QR Code Indisponível
              </div>
            )}
            <span className="text-[11px] text-slate-500 font-medium mt-2">
              Aponte a câmera do celular no app do seu banco
            </span>
          </div>

          {/* Chave Pix Copia e Cola */}
          <div className="space-y-2 mb-5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
              Pix Copia e Cola (Para celular)
            </label>
            <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-200">
              <input
                type="text"
                readOnly
                value={paymentData.qrCode}
                className="w-full text-xs font-mono bg-transparent text-slate-700 outline-none truncate px-1 select-all"
              />
              <button
                type="button"
                onClick={handleCopyPix}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-extrabold transition-all shrink-0 cursor-pointer ${
                  copiedPix
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                }`}
              >
                {copiedPix ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Pix</span>
                  </>
                )}
              </button>
            </div>
            {copiedPix && (
              <p className="text-[11px] text-emerald-600 font-bold">
                Código copiado! Abra o aplicativo do seu banco, escolha "Pix Copia e Cola" e confirme.
              </p>
            )}
          </div>

          {/* Caixa de Monitoramento Automático em Tempo Real */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 mb-5">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0 mt-0.5">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
            <div className="flex-1 text-xs">
              <span className="font-extrabold text-amber-900 block">
                Monitorando pagamento em tempo real...
              </span>
              <span className="text-amber-800 text-[11px] leading-relaxed">
                Assim que você transferir no seu banco, o sistema reconhece automaticamente em menos de 3 segundos e libera seu pedido!
              </span>
            </div>
          </div>

          {/* Botão de Checagem Manual de Suporte */}
          <button
            type="button"
            onClick={handleManualCheck}
            disabled={isCheckingManual}
            className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isCheckingManual ? "animate-spin" : ""}`} />
            <span>{isCheckingManual ? "Verificando com o banco..." : "Já fiz o Pix, verificar agora"}</span>
          </button>
        </div>
      )}

      {/* ============================================================== */}
      {/* ETAPA 3: PAGAMENTO APROVADO! (LIBERAÇÃO DO WHATSAPP)            */}
      {/* ============================================================== */}
      {currentStep === "approved" && (
        <div className="text-center py-4 animate-fadeIn">
          {/* Ícone de Sucesso */}
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300 shadow-sm animate-bounce">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2 uppercase tracking-wider">
            Pagamento Aprovado
          </span>

          <h2 className="text-2xl font-black text-slate-900 mb-1">
            Pedido Confirmado!
          </h2>
          <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
            Recebemos seu Pix de <b>R$ {totalPrice},00</b> com sucesso via Mercado Pago! Sua música já está garantida na fila de produção VIP.
          </p>

          {/* Resumo do Pedido Aprovado */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-1.5 mb-6">
            <div className="flex justify-between text-slate-500">
              <span>ID do Pagamento:</span>
              <span className="font-mono font-bold text-slate-800">#{paymentData?.paymentId}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Música:</span>
              <span className="font-bold text-slate-900">{songName}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Cantor/Banda:</span>
              <span className="font-bold text-slate-900">{artistName}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Status:</span>
              <span className="font-extrabold text-emerald-600">CONFIRMADO (VIP 48H)</span>
            </div>
          </div>

          {/* Botão Oficial do WhatsApp com os dados aprovados */}
          <a
            href={buildApprovedWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-base py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.99] cursor-pointer"
          >
            <WhatsappIcon className="w-6 h-6 text-white shrink-0" />
            <span>Notificar Equipe no WhatsApp</span>
          </a>

          <p className="text-[11px] text-slate-400 mt-3 font-medium">
            Clique acima para avisar a equipe que seu pedido já está pago e entrar na produção hoje!
          </p>
        </div>
      )}
    </div>
  );
}

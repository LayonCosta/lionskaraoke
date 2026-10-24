import StickyBanner from "@/components/StickyBanner";
import AppHeader from "@/components/AppHeader";
import OrderAppCard from "@/components/OrderAppCard";
import RecentReleases from "@/components/RecentReleases";
import HowItWorks from "@/components/HowItWorks";
import QuickFaq from "@/components/QuickFaq";
import AppFooter from "@/components/AppFooter";
import AppBottomNav from "@/components/AppBottomNav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* 1. Sticky Top Banner (Google Stick / PUB / Destaque Oficial) */}
      <StickyBanner />

      {/* 2. App Header com Logo e Status da Produção */}
      <AppHeader />

      {/* 3. Main Container (Estilo Aplicativo Mobile-First) */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
        {/* Card Principal de Pedidos (O coração do site) */}
        <OrderAppCard />

        {/* Últimos Lançamentos Entregues no Canal */}
        <RecentReleases />

        {/* Como Funciona em 3 Passos */}
        <HowItWorks />

        {/* Dúvidas Frequentes */}
        <QuickFaq />
      </main>

      {/* 4. Rodapé Limpo */}
      <AppFooter />

      {/* 5. Barra Inferior Fixa de Navegação do App (Mobile) */}
      <AppBottomNav />
    </div>
  );
}

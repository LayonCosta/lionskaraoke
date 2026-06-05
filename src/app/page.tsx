import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import FeatureVip from "@/components/FeatureVip";
import AudioShowcase from "@/components/AudioShowcase";
import InteractiveEstimator from "@/components/InteractiveEstimator";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lions Karaokê | Playbacks VIP Express",
  description: "Cante sua música sem esperar na fila! Produção e remasterização de playbacks premium em até 48 horas.",
  openGraph: {
    title: "Lions Karaokê | Playbacks VIP Express",
    description: "Cante sua música favorita sem esperar na fila de pedidos da festa! Remasterização premium em até 48 horas.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050506] font-sans antialiased text-zinc-100">
      {/* Sticky Header */}
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero Hook Section */}
        <Hero />

        {/* Real YouTube Channel Stats Bar */}
        <SocialProof />

        {/* Premium Value Props Grid */}
        <FeatureVip />

        {/* Before / After Audio Quality Showcase */}
        <AudioShowcase />

        {/* Real-time Order Price Calculator */}
        <InteractiveEstimator />

        {/* Pricing Cards */}
        <Pricing />

        {/* FAQ Accordion Section */}
        <Faq />
      </main>

      {/* Footer & Disclaimers */}
      <Footer />
    </div>
  );
}

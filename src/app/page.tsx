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
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900 font-sans pb-20">
      <StickyBanner />
      <AppHeader />
      <main className="flex-1 w-full px-3 py-3 flex flex-col items-stretch gap-2.5">
        <OrderAppCard />
        <RecentReleases />
        <HowItWorks />
        <QuickFaq />
      </main>
      <AppFooter />
      <AppBottomNav />
    </div>
  );
}

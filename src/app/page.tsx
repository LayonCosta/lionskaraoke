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
    <div className="mx-auto flex min-h-screen w-[calc(100%-4px)] max-w-none flex-col bg-slate-50 text-slate-900 font-sans">
      <StickyBanner />
      <AppHeader />
      <main className="flex-1 w-full px-0 py-3 sm:py-5 flex flex-col items-stretch gap-1">
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

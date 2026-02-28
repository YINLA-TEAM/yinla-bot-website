import HeroSection from "@/components/app/heroSection";
import FeatureSection from "@/components/app/featureSection";

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-[#0B0F19]">
      <HeroSection />
      <FeatureSection />
    </div>
  );
}

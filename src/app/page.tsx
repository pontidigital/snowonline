import HeroSection from "@/components/home/HeroSection";
import RegionSelector from "@/components/home/RegionSelector";
import DestinationHighlights from "@/components/home/DestinationHighlights";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";
import ChatWidget from "@/components/chat/ChatWidget";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RegionSelector />
      <DestinationHighlights />
      <StatsSection />
      <CTASection />
      <ChatWidget />
    </>
  );
}

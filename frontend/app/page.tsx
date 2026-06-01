import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSummary from "@/components/ServicesSummary";
import PricingSection from "@/components/PricingSection";
import ContactStripCTA from "@/components/ContactStripCTA";
import FAQSection from "@/components/FAQSection";
import CoverageSection from "@/components/CoverageSection";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main id="inicio">
      <HeroSection />
      <StatsSection />
      <ServicesSummary />
      <PricingSection />
      <ContactStripCTA />
      <FAQSection />
      <CoverageSection />
      <AboutUs />
      <ContactSection />
    </main>
  );
}

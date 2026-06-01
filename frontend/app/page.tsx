import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutUs from "@/components/AboutUs";
import ServicesSummary from "@/components/ServicesSummary";
import PricingSection from "@/components/PricingSection";
import CoverageSection from "@/components/CoverageSection";
import FAQSection from "@/components/FAQSection";
import ContactStripCTA from "@/components/ContactStripCTA";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main id="inicio">
      <HeroSection />        {/* oscuro */}
      <StatsSection />       {/* claro  */}
      <AboutUs />            {/* claro muted */}
      <ServicesSummary />    {/* claro  */}
      <PricingSection />     {/* claro muted */}
      <CoverageSection />    {/* claro  */}
      <FAQSection />         {/* claro muted */}
      <ContactStripCTA />    {/* oscuro */}
      <ContactSection />     {/* claro  */}
    </main>
  );
}

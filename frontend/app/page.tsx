import HeroSection from "@/components/HeroSection";
import ServicesSummary from "@/components/ServicesSummary";
import ContactStripCTA from "@/components/ContactStripCTA";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main id="inicio">
      <HeroSection />
      <ServicesSummary />
      <ContactStripCTA />
      <AboutUs />
      <ContactSection />
    </main>
  );
}

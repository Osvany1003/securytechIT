import HeroSection from "@/components/HeroSection";
import ServicesSummary from "@/components/ServicesSummary";
import TrustBadge from "@/components/TrustBadge";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main id="inicio">
      <HeroSection />
      <ServicesSummary />
      <TrustBadge />
      <AboutUs />
      <ContactSection />
    </main>
  );
}

import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { TrustSection } from "@/components/trust-section/TrustSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { JourneySection } from "@/components/journey/JourneySection";
import { AccessibilitySection } from "@/components/accessibility/AccessibilitySection";
import { SecuritySection } from "@/components/security-section/SecuritySection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <JourneySection />
        <AccessibilitySection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
}

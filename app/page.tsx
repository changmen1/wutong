import { AdvantagesSection } from "@/components/site/advantages-section";
import { AnimatedBackground } from "@/components/site/animated-background";
import { FaqSection } from "@/components/site/faq-section";
import { FloatingContact } from "@/components/site/floating-contact";
import { HeroSection } from "@/components/site/hero-section";
import { ProcessSection } from "@/components/site/process-section";
import { ResultsSection } from "@/components/site/results-section";
import { ServicesSection } from "@/components/site/services-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TestimonialsSection } from "@/components/site/testimonials-section";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <AdvantagesSection />
          <ResultsSection />
          <TestimonialsSection />
          <FaqSection />
        </main>
        <FloatingContact />
        <SiteFooter />
      </div>
    </>
  );
}

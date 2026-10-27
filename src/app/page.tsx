import { Header } from "@/components/sites/customgpt-ai/Header";
import { HeroSection } from "@/components/sites/customgpt-ai/HeroSection";
import { MarqueeSection } from "@/components/sites/customgpt-ai/MarqueeSection";
import { AISolutionsSection } from "@/components/sites/customgpt-ai/AISolutionsSection";
import { TestimonialsSection } from "@/components/sites/customgpt-ai/TestimonialsSection";
import { StepsSection } from "@/components/sites/customgpt-ai/StepsSection";
import { PricingSection } from "@/components/sites/customgpt-ai/PricingSection";
import { SecuritySection } from "@/components/sites/customgpt-ai/SecuritySection";
import { FAQSection } from "@/components/sites/customgpt-ai/FAQSection";
import { CTABanner } from "@/components/sites/customgpt-ai/CTABanner";
import { Footer } from "@/components/sites/customgpt-ai/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="cgpt-main">
        <HeroSection />
        <MarqueeSection />
        <AISolutionsSection />
        <TestimonialsSection />
        <StepsSection />
        <PricingSection />
        <SecuritySection />
        <FAQSection />
      </main>
      <CTABanner />
      <Footer />
    </>
  );
}

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { DivisionPanels } from '@/components/DivisionPanels';
import { WhyChoose } from '@/components/WhyChoose';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FinalCTA } from '@/components/FinalCTA';

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <Hero />
        <About />
        <DivisionPanels />
        <WhyChoose />
        <PortfolioGallery />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

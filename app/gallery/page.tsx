import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { FinalCTA } from '@/components/FinalCTA';
import { GalleryHero } from '@/components/GalleryHero';

export const metadata = {
  title: 'Gallery | VASMA',
  description:
    'Browse our portfolio of creative projects and exceptional work across all divisions.',
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />

      <main className="pt-32">

        {/* HERO (NOW SIMPLE) */}
        <GalleryHero />

        <PortfolioGallery />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
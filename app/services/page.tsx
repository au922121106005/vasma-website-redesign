import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { DivisionPanels } from '@/components/DivisionPanels';
import { FinalCTA } from '@/components/FinalCTA';
import { DIVISIONS } from '@/lib/constants';

export const metadata = {
  title: 'Services | VASMA',
  description: 'Explore our comprehensive creative services across Digitx, Events, and Studio divisions.',
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center">
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-8">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Comprehensive creative solutions tailored to elevate your brand across digital innovation, unforgettable events, and professional production.
            </p>
          </div>
        </div>

        <DivisionPanels />

        {/* Detailed Services */}
        {/* Detailed Services */}
<section className="py-24 bg-background">
  <div className="max-w-6xl mx-auto px-6 space-y-24">

    {DIVISIONS.map((division, idx) => (
      <div
        key={division.id}
        className="relative"
      >
        {/* SECTION CARD */}
        <div className="group relative p-10 md:p-14 rounded-3xl border border-border bg-background shadow-sm hover:shadow-xl transition-all duration-500">
          
          {/* HEADER */}
          <div className="mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
              {division.name}
            </h2>

            <p className="text-base text-accent font-medium uppercase tracking-wide mb-4">
              {division.tagline}
            </p>

            <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
              {division.description}
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {division.services.map((service, sIdx) => (
              <div
                key={sIdx}
                className="group/service flex items-center justify-between px-5 py-4 rounded-xl border border-border/50 bg-white/30 hover:bg-accent/5 hover:border-accent/30 transition-all duration-300"
              >
                <p className="font-medium text-foreground group-hover/service:translate-x-1 transition-transform duration-300">
                  {service}
                </p>

                {/* small arrow indicator */}
                {/* <span className="text-foreground/30 group-hover/service:text-accent group-hover/service:translate-x-1 transition-all duration-300">
                  →
                </span> */}
              </div>
            ))}
          </div>
        </div>

        {/* divider glow between sections */}
        {idx !== DIVISIONS.length - 1 && (
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mt-20" />
        )}
      </div>
    ))}
  </div>
</section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

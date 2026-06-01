import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Team } from '@/components/Team';
import { FinalCTA } from '@/components/FinalCTA';
import { About } from '@/components/About';

export const metadata = {
  title: 'About | VASMA',
  description:
    'Learn about VASMA - our story, mission, and the three divisions of creative excellence.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="pt-32">
        {/* Hero Section (clean + minimal) */}
        <div className="max-w-6xl mx-auto px-6 mb-24">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            About Us
          </h1>

          <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
            A creative studio building brands, experiences, and stories that
            leave a lasting impact.
          </p>
        </div>

        {/* Story / Main About Section */}
        <About />

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-16 text-center">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Excellence',
                  description:
                    'We pursue perfection in every project, setting the highest standards for quality, creativity, and innovation.',
                },
                {
                  title: 'Collaboration',
                  description:
                    'We believe in close partnerships with our clients, understanding their vision deeply and delivering solutions that exceed expectations.',
                },
                {
                  title: 'Impact',
                  description:
                    'We create work that matters—work that drives results, engages audiences, and transforms brands.',
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Team />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
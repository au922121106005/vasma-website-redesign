import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export const metadata = {
  title: 'Contact | VASMA',
  description: "Get in touch with VASMA. We'd love to hear about your next project.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="pt-32 pb-24">

        {/* HERO SECTION */}
        <div className="max-w-6xl mx-auto px-6 mb-24">

          <p className="uppercase tracking-[0.3em] text-accent text-sm mb-4">
            Contact
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight max-w-4xl">
            Let’s Build Something Meaningful Together
          </h1>

          <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed mb-16">
            Have a project in mind? We’d love to collaborate and bring your vision to life through design, events, and storytelling.
          </p>

          {/* CONTACT INFO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* EMAIL */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:border-accent/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-accent" />
                <h3 className="text-sm uppercase tracking-wide text-foreground">
                  Email
                </h3>
              </div>

              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="text-lg text-foreground/80 hover:text-accent transition"
              >
                {COMPANY.contact.email}
              </a>
            </div>

            {/* PHONE */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:border-accent/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-accent" />
                <h3 className="text-sm uppercase tracking-wide text-foreground">
                  Phone
                </h3>
              </div>

              <a
                href={`tel:${COMPANY.contact.phone}`}
                className="text-lg text-foreground/80 hover:text-accent transition"
              >
                {COMPANY.contact.phone}
              </a>
            </div>

            {/* LOCATION */}
            <div className="p-6 rounded-2xl border border-border bg-background hover:border-accent/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-accent" />
                <h3 className="text-sm uppercase tracking-wide text-foreground">
                  Location
                </h3>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {COMPANY.location.city}, {COMPANY.location.country}
              </p>
            </div>

          </div>
        </div>

        {/* FORM */}
        <div className="max-w-4xl mx-auto px-6">
          <ContactForm />
        </div>

      </main>

      <Footer />
    </>
  );
}
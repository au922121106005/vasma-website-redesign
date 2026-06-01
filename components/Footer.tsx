'use client';

import Link from 'next/link';
import { COMPANY, NAV_ITEMS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              {COMPANY.name}
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              A creative ecosystem of three divisions serving brands across digital, events, and production.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-foreground mb-4 uppercase tracking-wide text-sm">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="font-medium text-foreground mb-4 uppercase tracking-wide text-sm">
              Divisions
            </h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="/services" className="hover:text-foreground transition-colors duration-300">VASMA DIGITX</a></li>
              <li><a href="/services" className="hover:text-foreground transition-colors duration-300">VASMA EVENTS</a></li>
              <li><a href="/services" className="hover:text-foreground transition-colors duration-300">VASMA STUDIO</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-4 uppercase tracking-wide text-sm">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-foreground/60">
              <p>
                <a href={`tel:${COMPANY.contact.phone}`} className="hover:text-foreground transition-colors duration-300">
                  {COMPANY.contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-foreground transition-colors duration-300">
                  {COMPANY.contact.email}
                </a>
              </p>
              <p className="mt-4 text-xs leading-relaxed">
                {COMPANY.location.address}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
          <p>&copy; {currentYear} {COMPANY.fullName}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

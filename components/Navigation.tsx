'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { NAV_ITEMS, COMPANY } from '@/lib/constants';

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        backgroundColor: isScrolled ? 'rgba(248, 245, 240, 0.98)' : 'rgba(248, 245, 240, 0.95)',
        boxShadow: isScrolled
          ? '0 1px 3px rgba(0,0,0,0.08)'
          : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="text-2xl font-serif font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-300"
          >
            {COMPANY.name}
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-12"
        >
          {NAV_ITEMS.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
            >
              <Link
                href={item.href}
                className="relative text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase group"
              >
                {item.label}
                {/* Animated underline */}
                <motion.span
                  animate={{
                    scaleX: pathname === item.href ? 1 : 0,
                    opacity: pathname === item.href ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
                />
                {/* Hover underline */}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="text-xs tracking-widest px-6 py-2.5 bg-primary text-primary-foreground hover:bg-accent transition-colors duration-300 uppercase font-medium inline-block"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

'use client';

import { motion } from 'framer-motion';

export function GalleryHero() {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-20">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl"
      >
        Selected Work That Defines Our Creative Identity
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed"
      >
        A curated collection of branding, digital experiences, and production work crafted across VASMA’s three creative divisions.
      </motion.p>

    </div>
  );
}
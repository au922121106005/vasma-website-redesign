'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function FinalCTA() {
  return (
    <section className="relative py-32 bg-foreground text-background overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/95" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, accent 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Animated headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.23, 1, 0.32, 1],
          }}
          viewport={{ once: true, margin: '-100px' }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          Let&apos;s Create Something Remarkable Together.
        </motion.h2>

        {/* Animated subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.23, 1, 0.32, 1],
          }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-lg text-background/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Whether you need a digital transformation, an unforgettable event, or world-class production—we&apos;re ready to bring your vision to life.
        </motion.p>

        {/* Animated button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.23, 1, 0.32, 1],
          }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-accent text-white font-medium uppercase tracking-wide text-sm hover:bg-accent/90 transition-colors duration-300 relative overflow-hidden group"
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                Contact VASMA
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating elements for visual interest */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        />
      </div>
    </section>
  );
}

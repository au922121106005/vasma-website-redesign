'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { COMPANY } from '@/lib/constants';
import { heroHeadlineVariants, subtitleVariants, buttonHoverVariants } from '@/lib/animations';

export function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effects for different image layers
  const yEvents = useTransform(scrollY, [0, 400], [0, 80]);
  const yDigitx = useTransform(scrollY, [0, 400], [0, -60]);
  const yStudio = useTransform(scrollY, [0, 400], [0, 100]);

  // Scale effect for heading as user scrolls
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-12 bg-background overflow-hidden">
      {/* Editorial Collage Background */}

      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 blur-[140px] rounded-full" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Additional Editorial Image - Top Left */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
            rotate: -1,
          }}
          className="absolute top-16 left-10 w-72 h-96 md:w-[350px] md:h-[420px] z-0 hidden md:block"        >
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/20 opacity-80">
            <Image
              src="/images/vasma-studio.jpg"
              alt="VASMA Branding"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Events Image - Top Right */}
        <motion.div
          style={{ y: yEvents }}
          animate={{
            y: [0, -15, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 md:w-[500px] md:h-[500px] -mr-32 -mt-20 hidden md:block"
        >
          <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden">
            <Image
              src="/images/vasma-events.png"
              alt="VASMA Events - Premium Wedding Photography"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-black/10 to-transparent" />
          </div>
        </motion.div>

        {/* Digitx Image - Bottom Left */}
        <motion.div
          style={{ y: yDigitx }}
          animate={{
            y: [0, 20, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-80 h-80 md:w-[450px] md:h-[450px] -ml-24 -mb-12 hidden md:block"
        >
          <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden">
            <Image
              src="/images/vasma-digitx.png"
              alt="VASMA Digitx - Digital Design & Branding"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
          </div>
        </motion.div>

        {/* Studio Image - Center Right Back */}
        <motion.div
          style={{ y: yStudio }}
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-72 h-96 md:w-[380px] md:h-[420px] -mr-16 hidden md:block "
        >
          <div className="relative w-full h-full rounded-lg shadow-xl overflow-hidden ring-1 ring-white/20 z-0">
            <Image
              src="/images/vasma-branding.jpg"
              alt="VASMA Studio - Professional Production"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          </div>
        </motion.div>

        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/45 to-background/20" />        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/10" />
      </div>

      {/* Content Layer */}
      <div className="relative max-w-6xl mx-auto px-6 text-center z-20">
        {/* Main Headline with scroll animation */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroHeadlineVariants}
          style={{ scale, opacity }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 md:mb-8 text-foreground"
        >
          ONE BRAND.
          <br />
          THREE CREATIVE
          <br />
          ECOSYSTEMS.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
          className="text-base sm:text-lg md:text-xl text-foreground/100 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-serif-alt px-4"
        >
          {COMPANY.description}
        </motion.p>

        {/* CTA Buttons with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.div
            variants={buttonHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase hover:bg-accent transition-colors duration-300"
            >
              Explore Our Services
            </Link>
          </motion.div>
          <motion.div
            variants={buttonHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-foreground text-foreground text-sm font-medium tracking-wide uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Start A Project
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-12 h-px bg-accent mx-auto mb-12 origin-center"
        />

        {/* Division Labels - Minimal Typography */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
        >

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03
            }}
            className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold tracking-wide">
              VASMA DIGITX
            </h3>
            <p className="text-sm text-foreground/60 mt-3">
              Branding • Marketing • Web Development
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03
            }}
            className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold tracking-wide">
              VASMA EVENTS
            </h3>
            <p className="text-sm text-foreground/60 mt-3">
              Weddings • Corporate • Live Experiences
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.03
            }}
            className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold tracking-wide">
              VASMA STUDIO
            </h3>
            <p className="text-sm text-foreground/60 mt-3">
              Production • Photography • Content Creation
            </p>
          </motion.div>

        </motion.div>


      </div>
    </section>
  );
}

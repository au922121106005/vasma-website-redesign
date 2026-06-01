'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { COMPANY, STATS } from '@/lib/constants';

export function About() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">

        {/* MAIN SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* LEFT */}
          <div className="space-y-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-accent text-sm mb-3">
                ABOUT VASMA
              </p>

              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
                We Help Brands Create Meaningful Experiences.
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-foreground/70 leading-relaxed font-serif-alt"
            >
              {COMPANY.description}{' '}
              We specialise in digital innovation, unforgettable events, and storytelling that creates emotional impact.
            </motion.p>

            {/* TAGS (IMPROVED INTERACTION) */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['Branding', 'Events', 'Production', 'Digital Growth'].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{
                    scale: 1.06,
                    y: -2,
                  }}
                  className="px-5 py-2 rounded-full bg-accent/10 text-accent text-sm cursor-pointer transition-all hover:bg-accent/20"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE (UPGRADED) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/images/vasma-branding.jpg"
              alt="VASMA Branding"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* subtle border glow */}
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
          </motion.div>
        </motion.div>

        {/* STATS SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border"
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + idx * 0.1,
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="py-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4 + idx * 0.1,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2"
              >
                {stat.value}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                className="text-sm text-foreground/60 uppercase tracking-wide"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-16 text-center"
        >
          Client Stories
        </motion.h2>

        <div className="bg-white p-12 md:p-16 rounded-3xl border border-border/50 shadow-xl overflow-hidden">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Quote */}
              <div className="text-6xl text-accent mb-6">
                "
              </div>

              <p className="font-serif-alt text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                {TESTIMONIALS[current].quote}
              </p>

              <div className="flex items-center justify-between flex-col md:flex-row gap-8">

                {/* Author */}
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="font-bold text-accent">
                        {TESTIMONIALS[current].author.charAt(0)}
                      </span>
                    </div>

                    <p className="font-medium text-foreground">
                      {TESTIMONIALS[current].author}
                    </p>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                      <span
                        key={i}
                        className="text-accent"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dots */}
                <div className="flex gap-3">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === current
                          ? 'bg-accent scale-125'
                          : 'bg-foreground/20'
                      }`}
                    />
                  ))}
                </div>

              </div>
            </motion.div>

          </AnimatePresence>

        </div>

        <div className="text-center mt-8 text-sm text-foreground/60">
          {current + 1} / {TESTIMONIALS.length}
        </div>

      </div>
    </section>
  );
}
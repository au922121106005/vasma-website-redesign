'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { DIVISIONS } from '@/lib/constants';

export function DivisionPanels() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Three Specialized Divisions. <br />
            One Unified Vision.
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            From digital growth to unforgettable events and premium visual production, VASMA brings every creative discipline under one roof.
          </p>
        </motion.div>

        {/* Grid of three immersive panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {DIVISIONS.map((division, idx) => (
            <motion.div
              key={division.id}
              whileHover={{
                y: -8,
                scale: 1.03
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true, margin: '-100px' }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden bg-white cursor-pointer rounded-sm"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={
                    idx === 0
                      ? "/images/digitximage.jpg"
                      : idx === 1
                        ? "/images/event.jpg"
                        : "/images/studio.jpg"
                  }
                  alt={division.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/55" />
              </div>

              {/* Parallax background effect */}
              <motion.div
                animate={{
                  y: hoveredIndex === idx ? -20 : 0,
                  scale: hoveredIndex === idx ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 opacity-40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              </motion.div>

              {/* Content container */}
              <motion.div
                animate={{
                  height: hoveredIndex === idx ? '100%' : 'auto',
                }}
                className="relative h-96 md:h-full flex flex-col justify-between p-8 md:p-12"
              >
                {/* Top - Division Name and tagline */}
                <motion.div
                  animate={{
                    y: hoveredIndex === idx ? 0 : 0,
                    opacity: 1,
                  }}
                >
                  <motion.h3
                    animate={{
                      fontSize: hoveredIndex === idx ? '2rem' : '1.875rem',
                    }}
                    className="font-serif font-bold text-white mb-2"
                  >
                    {division.name}
                  </motion.h3>
                  <motion.p
                    animate={{
                      color: hoveredIndex === idx ? '#C9A66B' : '#C9A66B80',
                      letterSpacing: hoveredIndex === idx ? '0.15em' : '0.1em',
                    }}
                    className="text-sm font-medium uppercase tracking-wider"
                  >
                    {division.tagline}
                  </motion.p>
                </motion.div>

                {/* Bottom - Description and Services */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-white/80 mb-4 leading-relaxed max-w-xs">
                    {division.description}
                  </p>

                  {/* Animated services list */}
                  <motion.div
                    animate={{
                      maxHeight: hoveredIndex === idx ? '200px' : '80px',
                      opacity: hoveredIndex === idx ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden space-y-2"
                  >
                    {division.services.map((service, sIdx) => (
                      <motion.p
                        key={sIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: hoveredIndex === idx ? 1 : 0.5,
                          x: hoveredIndex === idx ? 0 : -5,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: hoveredIndex === idx ? sIdx * 0.05 : 0,
                        }}
                        className="text-sm text-white"
                      >
                        → {service}
                      </motion.p>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Animated border on hover */}
              <motion.div
                animate={{
                  borderColor: hoveredIndex === idx ? '#C9A66B' : '#C9A66B00',
                }}
                className="absolute inset-0 border border-accent/30 pointer-events-none rounded-sm"
              />

              {/* Shine effect on hover */}
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 0.1, x: 100 }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
}

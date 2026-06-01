'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function PortfolioGallery() {
  const portfolioItems = [
    {
      image: '/images/event.jpg',
      title: 'VASMA Events',
    },
    {
      image: '/images/digitximage.jpg',
      title: 'VASMA DigitX',
    },
    {
      image: '/images/studio.jpg',
      title: 'VASMA Studio',
    },
    {
      image: '/images/vasma-branding.jpg',
      title: 'Brand Strategy',
    },
  ];

  return (
    <section className="py-16 bg-background overflow-hidden">

      {/* subtle section label */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="uppercase tracking-[0.3em] text-accent text-sm">
          Featured Work
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-6 w-max px-6"
        >
          {[...portfolioItems, ...portfolioItems].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              transition={{ duration: 0.3 }}
              className="relative w-[340px] h-[460px] rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer group shadow-md hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* title */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
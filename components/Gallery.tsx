'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Digital Campaign',
    category: 'Digitx',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    id: 2,
    title: 'Brand Event',
    category: 'Events',
    color: 'from-purple-500/20 to-purple-500/5',
  },
  {
    id: 3,
    title: 'Studio Production',
    category: 'Studio',
    color: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    id: 4,
    title: 'Web Design',
    category: 'Digitx',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    id: 5,
    title: 'Corporate Event',
    category: 'Events',
    color: 'from-purple-500/20 to-purple-500/5',
  },
  {
    id: 6,
    title: 'Motion Design',
    category: 'Studio',
    color: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    id: 7,
    title: 'App Interface',
    category: 'Digitx',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    id: 8,
    title: 'Product Launch',
    category: 'Events',
    color: 'from-purple-500/20 to-purple-500/5',
  },
];

export function Gallery() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Showcase of our most impactful projects and creative works
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative bg-gradient-to-br ${item.color} border border-border rounded-xl overflow-hidden h-64 cursor-pointer`}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card/50 to-card/20">
                <div className="text-center">
                  <div className="text-5xl mb-4">📸</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.category}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">{item.category}</p>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { TEAM } from '@/lib/constants';

export function Team() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Exceptional talents united by a passion for creative excellence and innovative thinking.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="text-center group"
            >
              {/* AVATAR */}
              <div className="relative w-52 h-52 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-500">
                
                {/* subtle glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-accent/10 to-transparent transition-opacity duration-500" />

                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  👤
                </div>
              </div>

              {/* NAME */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>

              {/* ROLE */}
              <p className="text-sm text-accent font-medium uppercase tracking-wide mb-3">
                {member.role}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-foreground/60 leading-relaxed px-2">
                Bringing expertise and creativity to every project.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
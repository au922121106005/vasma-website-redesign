'use client';

import Image from 'next/image';
import { WHY_CHOOSE } from '@/lib/constants';

export function WhyChoose() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-16 text-center">
          Why Choose VASMA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {WHY_CHOOSE.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src={
                    idx === 0
                      ? '/images/active-listening.png'
                      : idx === 1
                        ? '/images/quality.png'
                        : '/images/message.png'
                  }
                  alt={item.title}
                  width={70}
                  height={70}
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

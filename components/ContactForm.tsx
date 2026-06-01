'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-24">
      <div className="max-w-2xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.3em] text-accent text-sm mb-4">
            Start a Project
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Tell Us Your Vision
          </h2>

          <p className="text-lg text-foreground/60 max-w-xl mx-auto">
            We’ll shape your idea into a brand, experience, or story that stands out.
          </p>
        </motion.div>

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="mb-8 p-5 rounded-xl border border-green-500/30 bg-green-500/10 text-green-400">
            Thanks! We’ll get back to you soon.
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* NAME + EMAIL */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <input
                {...register('name')}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">Name required</p>}
            </div>

            <div>
              <input
                {...register('email')}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">Valid email required</p>}
            </div>

          </div>

          {/* COMPANY + SERVICE */}
          <div className="grid md:grid-cols-2 gap-6">

            <input
              {...register('company')}
              placeholder="Company (optional)"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition"
            />

            <select
              {...register('service')}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition"
            >
              <option value="">Select Service</option>
              <option value="digitx">Digitx</option>
              <option value="events">Events</option>
              <option value="studio">Studio</option>
            </select>

          </div>

          {/* MESSAGE */}
          <textarea
            {...register('message')}
            rows={6}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent outline-none transition resize-none"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-accent text-white font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </div>
    </section>
  );
}
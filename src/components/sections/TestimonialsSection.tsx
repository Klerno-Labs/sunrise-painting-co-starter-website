"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionContainer } from "../layout/SectionContainer";

const testimonials = [
  {
    name: "Maria L.",
    role: "Homeowner",
    content: "We hired Sunrise for our entire home interior and they did an incredible job. Clean, professional, and finished ahead of schedule. Highly recommend!",
  },
  {
    name: "James T.",
    role: "Business Owner",
    content: "Carlos and his crew repainted our office building exterior in 3 days. The attention to detail was impressive.",
  },
  {
    name: "Ashley R.",
    role: "Homeowner",
    content: "Best cabinet refinishing in Houston! Our kitchen looks brand new. Worth every penny.",
  },
];

export function TestimonialsSection() {
  return (
    <SectionContainer className="bg-surface">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          What Our Clients Say
        </h2>
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-lg text-text-body">Rated 5 stars by our happy customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-xl border border-border-light shadow-card relative"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-border-light opacity-50" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-text-body leading-relaxed mb-6 italic">
              "{testimonial.content}"
            </p>
            <div>
              <p className="font-bold text-primary">{testimonial.name}</p>
              <p className="text-sm text-text-muted">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
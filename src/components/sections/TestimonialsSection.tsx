import React from "react";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/site";

const testimonials = [
  {
    name: "Maria L.",
    role: "Homeowner, Katy",
    content: "We hired Sunrise for our entire home interior and they did an incredible job. Clean, professional, and finished ahead of schedule. Highly recommend!",
    rating: 5
  },
  {
    name: "James T.",
    role: "Business Owner, Houston",
    content: "Carlos and his crew repainted our office building exterior in 3 days. The attention to detail was impressive.",
    rating: 5
  },
  {
    name: "Ashley R.",
    role: "Homeowner, Sugar Land",
    content: "Best cabinet refinishing in Houston! Our kitchen looks brand new. Worth every penny.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-text-body text-lg">
            Don&apos;t just take our word for it. Here is what your neighbors are saying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              <div className="flex text-accent mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-text-body italic mb-6 relative z-10">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-text-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
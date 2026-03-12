import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Maria L.",
    role: "Homeowner, Katy",
    text: "We hired Sunrise for our entire home interior and they did an incredible job. Clean, professional, and finished ahead of schedule. Highly recommend!",
    rating: 5
  },
  {
    name: "James T.",
    role: "Business Owner, Sugar Land",
    text: "Carlos and his crew repainted our office building exterior in 3 days. The attention to detail was impressive.",
    rating: 5
  },
  {
    name: "Ashley R.",
    role: "Homeowner, The Woodlands",
    text: "Best cabinet refinishing in Houston! Our kitchen looks brand new. Worth every penny.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-4xl text-primary mb-4">What Our Neighbors Say</h2>
          <p className="text-lg text-gray-600">
            We take pride in every project. But don&apos;t just take our word for it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-xl shadow-card hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic relative">"{review.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
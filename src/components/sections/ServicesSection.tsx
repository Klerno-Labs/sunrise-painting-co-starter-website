"use client";

import { motion } from "framer-motion";
import { Paintbrush, Home, Hammer, Wrench } from "lucide-react";
import { SectionContainer } from "../layout/SectionContainer";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Interior Painting",
    description: "Professional interior painting services. We protect your furniture and floors, leaving your home looking fresh and clean.",
    price: "$2.50-$4.00/sq ft",
    icon: <Paintbrush className="w-6 h-6" />,
  },
  {
    title: "Exterior Painting",
    description: "Enhance your home's curb appeal with our durable exterior painting solutions, perfect for Houston's weather.",
    price: "$3.00-$5.00/sq ft",
    icon: <Home className="w-6 h-6" />,
  },
  {
    title: "Cabinet Refinishing",
    description: "Give your kitchen a makeover without the cost of replacement. We stain, paint, and refinish to look brand new.",
    price: "$3,500-$8,000",
    icon: <Hammer className="w-6 h-6" />,
  },
  {
    title: "Drywall Repair",
    description: "From small holes to water damage, our expert team seamlessly repairs and textures your drywall.",
    price: "$200-$800",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    title: "Color Consultation",
    description: "Not sure which shade to pick? Our experts help you choose the perfect palette for your space.",
    price: "Free",
    icon: <Paintbrush className="w-6 h-6" />,
  },
  {
    title: "Popcorn Ceiling Removal",
    description: "Modernize your home by removing outdated popcorn ceilings and replacing them with a smooth finish.",
    price: "$1.50-$3.00/sq ft",
    icon: <Wrench className="w-6 h-6" />,
  },
];

export function ServicesSection() {
  return (
    <SectionContainer id="services" className="bg-surface">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Our Services
        </h2>
        <p className="text-lg text-text-body">
          Comprehensive painting and home improvement services tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group bg-white p-8 rounded-xl border border-border-light shadow-card hover:-translate-y-1 hover:shadow-hover transition-all duration-300 flex flex-col h-full"
            )}
          >
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-3">
              {service.title}
            </h3>
            <p className="text-text-body leading-relaxed mb-6 flex-grow">
              {service.description}
            </p>
            <div className="pt-4 border-t border-border-light flex items-center justify-between">
              <span className="text-sm font-bold text-accent">
                Starting at {service.price}
              </span>
              <a
                href="/contact"
                className="text-sm font-semibold text-primary hover:text-secondary transition-colors"
              >
                Learn More &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
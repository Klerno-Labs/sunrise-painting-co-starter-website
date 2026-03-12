import React from "react";
import { Paintbrush, Home, Hammer, FileText, Palette, Wand2 } from "lucide-react";
import { images } from "@/config/images";
import Link from "next/link";

const services = [
  {
    title: "Interior Painting",
    price: "$2.50-$4.00/sq ft",
    description: "Transform your living spaces with smooth, durable finishes and clean lines. We protect your furniture and ensure minimal dust.",
    icon: <Home className="w-6 h-6" />,
    image: "service-1"
  },
  {
    title: "Exterior Painting",
    price: "$3.00-$5.00/sq ft",
    description: "Protect your home from the Houston elements with high-quality weather-resistant paints and thorough surface preparation.",
    icon: <Paintbrush className="w-6 h-6" />,
    image: "service-2"
  },
  {
    title: "Cabinet Refinishing",
    price: "$3,500-$8,000",
    description: "Give your kitchen a facelift for a fraction of the cost of replacement. Professional spraying and hand-finishing techniques.",
    icon: <Palette className="w-6 h-6" />,
    image: "service-3"
  },
  {
    title: "Drywall Repair",
    price: "$200-$800",
    description: "From small nail holes to large water damage repairs, we seamless patch and texture your walls to look brand new.",
    icon: <Hammer className="w-6 h-6" />,
    image: "gallery-1"
  },
  {
    title: "Color Consultation",
    price: "Free",
    description: "Not sure which shade of white? Our experts help you navigate the latest trends to find the perfect palette for your home.",
    icon: <FileText className="w-6 h-6" />,
    image: "gallery-2"
  },
  {
    title: "Popcorn Ceiling Removal",
    price: "$1.50-$3.00/sq ft",
    description: "Modernize your home by removing outdated popcorn texture and applying a smooth, modern finish.",
    icon: <Wand2 className="w-6 h-6" />,
    image: "gallery-3"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-text-body text-lg">
            Comprehensive painting solutions tailored to your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-border-light p-6 shadow-sm hover:-translate-y-1 hover:shadow-hover transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{service.title}</h3>
              <p className="text-accent font-semibold text-sm mb-3">{service.price}</p>
              <p className="text-text-body text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <Link href="/contact" className="text-primary font-semibold text-sm hover:text-secondary flex items-center">
                Get Quote <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
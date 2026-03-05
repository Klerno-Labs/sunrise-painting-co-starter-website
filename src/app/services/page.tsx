import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { Paintbrush2, ShieldCheck, Sparkles, Hammer, Sun, Layers } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Services | Sunrise Painting Co.",
  description: "Professional painting services in Houston including Interior, Exterior, Cabinet Refinishing, and Drywall Repair. Licensed & Insured.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Interior Painting",
      price: "$2.50 - $4.00 / sq ft",
      desc: "We treat your home like our own. Using drop cloths, careful taping, and premium paints to ensure a flawless finish on walls, trim, and ceilings.",
      icon: <Paintbrush2 className="w-8 h-8" />,
      img: "gallery-2",
      features: ["Color Consultation", "Ceiling Painting", "Trim & Crown Molding", "Wallpaper Removal"],
    },
    {
      title: "Exterior Painting",
      price: "$3.00 - $5.00 / sq ft",
      desc: "Protect your investment from Houston's harsh weather. We power wash, scrape, sand, and prime every surface to ensure long-lasting results.",
      icon: <ShieldCheck className="w-8 h-8" />,
      img: "service-1",
      features: ["Power Washing", "Staining & Sealing", "Wood Rot Repair", "Deck & Fence Painting"],
    },
    {
      title: "Cabinet Refinishing",
      price: "$3,500 - $8,000",
      desc: "Update your kitchen for a fraction of the replacement cost. We spray finish cabinets in your home for a factory-quality look.",
      icon: <Sparkles className="w-8 h-8" />,
      img: "service-2",
      features: ["Cabinet Cleaning", "Hardware Replacement", "Color Change", "Low-VOC Finishes"],
    },
    {
      title: "Drywall Repair",
      price: "$200 - $800",
      desc: "From small nail holes to large water damage patches, our expert tapers make walls look brand new again.",
      icon: <Hammer className="w-8 h-8" />,
      img: "gallery-3",
      features: ["Texture Matching", "Crack Repair", "Water Damage Restoration", "Corner Bead Repair"],
    },
    {
      title: "Popcorn Ceiling Removal",
      price: "$1.50 - $3.00 / sq ft",
      desc: "Modernize your home by removing outdated popcorn texture. We scrape, sand, and re-finish your ceilings smoothly.",
      icon: <Layers className="w-8 h-8" />,
      img: "hero-alt",
      features: ["Clean Plastic Containment", "Skimming", "Re-texturing", "Painting"],
    },
    {
      title: "Color Consultation",
      price: "Free with estimate",
      desc: "Not sure which shade of white or bold accent color to choose? Our experts bring samples to your home to help you decide.",
      icon: <Sun className="w-8 h-8" />,
      img: "gallery-1",
      features: ["Sample Boards", "Lighting Analysis", "Trend Guidance", "Coordination with Decor"],
    },
  ];

  return (
    <>
      <section className="bg-primary pt-32 pb-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Professional Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            High-quality craftsmanship for every corner of your home.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={`relative rounded-2xl overflow-hidden shadow-xl h-[400px] ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image
                    src={images[service.img as keyof typeof images].src}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className={`${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-2">{service.title}</h2>
                  <p className="text-accent font-bold text-lg mb-4">{service.price}</p>
                  <p className="text-text-body text-lg mb-8 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mb-8">
                    <p className="font-bold text-primary mb-3">Includes:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-text-body">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="primary" asChild>
                    <Link href="/contact">Get Quote for {service.title}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-border-light">
        <div className="container text-center max-w-3xl">
           <h2 className="text-3xl font-bold text-primary mb-6">Need a Custom Service?</h2>
           <p className="text-lg text-text-body mb-8">
             Don't see what you're looking for? We handle all types of residential and commercial painting projects.
           </p>
           <Button variant="cta" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
           </Button>
        </div>
      </section>
    </>
  );
}
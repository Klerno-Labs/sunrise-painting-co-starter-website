import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { CheckCircle, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Our painting services including interior, exterior, cabinets, and drywall repair.",
  openGraph: {
    title: "Services",
    description: "Our painting services including interior, exterior, cabinets, and drywall repair.",
    images: [images["service-1"].src]
  }
};

const services = [
  {
    id: "interior",
    title: "Interior Painting",
    price: "$2.50-$4.00/sq ft",
    description: "We treat your home like our own. Our interior process includes furniture moving, hole patching, texture matching, and meticulous cut-in lines.",
    image: images["service-2"],
    features: ["Ceiling & Walls", "Trim & Crown Molding", "Cabinet Painting", "Eco-Friendly Options"]
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    price: "$3.00-$5.00/sq ft",
    description: "Houston weather is tough on homes. We use premium weather-resistant paints and thorough prep work (power washing, scraping, priming) to ensure longevity.",
    image: images["service-1"],
    features: ["Power Washing", "Stain Removal", "Stucco & Wood Siding", "Garage Doors"]
  },
  {
    id: "cabinets",
    title: "Cabinet Refinishing",
    price: "$3,500-$8,000",
    description: "Update your kitchen for a fraction of the cost of replacement. We offer professional spray finishes that look factory-new.",
    image: images["gallery-2"],
    features: ["Spray Finish", "New Hardware Install", "Color Change", "Latte & Glaze Effects"]
  },
  {
    id: "drywall",
    title: "Drywall Repair",
    price: "$200-$800",
    description: "From small nail holes to large water damage patches, our repair work is invisible. We match existing textures perfectly.",
    image: images.about,
    features: ["Texture Matching", "Water Damage Repair", "Door Knob Holes", "Tape & Bed"]
  },
  {
    id: "consultation",
    title: "Color Consultation",
    price: "Free",
    description: "Choosing the right color is hard. Our color experts bring large sample boards to your home to help you visualize the final result.",
    image: images["gallery-1"],
    features: ["Large Sample Boards", "Lighting Analysis", "Trend Advice", "Coordination"]
  },
  {
    id: "popcorn",
    title: "Popcorn Ceiling Removal",
    price: "$1.50-$3.00/sq ft",
    description: "Modernize your home by removing that dated popcorn texture. We scrape, smooth, and refinish your ceiling to a modern look.",
    image: images["gallery-3"],
    features: ["Scraping & Removal", "Skim Coating", "Smooth Finish", "Minimal Mess"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20">
        <div className="max-w-[1320px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive painting solutions tailored to the unique needs of Houston homeowners.
          </p>
        </div>
      </section>

      <SectionContainer className="bg-white">
        <div className="space-y-20">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-card">
                <Image 
                  src={service.image.src}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                   <span className="text-secondary font-bold text-lg">{service.price}</span>
                   <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                   <span className="text-sm text-text_muted flex items-center gap-1">
                     <Clock size={14} /> Typical Lead Time: 3-7 Days
                   </span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                <p className="text-lg text-text_body mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-text_body">
                      <CheckCircle size={18} className="text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button>Get Quote for {service.title}</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[1320px] mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Sunrise Painting?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                 <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-4">
                    <Shield size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                 <p className="text-text_body text-sm">Full liability and workers comp coverage for your peace of mind.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                 <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-4">
                    <CheckCircle size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-2">2-Year Warranty</h3>
                 <p className="text-text_body text-sm">We stand behind our work with a comprehensive labor warranty.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                 <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-4">
                    <Clock size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-2">On-Time Completion</h3>
                 <p className="text-text_body text-sm">We respect your time. Projects are completed within the agreed schedule.</p>
              </div>
           </div>
        </div>
      </section>
    </>
  );
}
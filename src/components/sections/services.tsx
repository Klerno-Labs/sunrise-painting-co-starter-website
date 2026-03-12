import Image from "next/image";
import Link from "next/link";
import { Brush, Layers, Home, ClipboardCheck, PaintBucket, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Brush size={32} />,
    title: &quot;Interior Painting",
    price: "$2.50 - $4.00/sq ft",
    desc: "Transform your living spaces with clean lines, premium paints, and zero mess.",
    link: "/contact?service=interior"
  },
  {
    icon: <Home size={32} />,
    title: &quot;Exterior Painting",
    price: "$3.00 - $5.00/sq ft",
    desc: "Protect your home from Texas weather with our weather-resistant exterior systems.",
    link: "/contact?service=exterior"
  },
  {
    icon: <Layers size={32} />,
    title: &quot;Cabinet Refinishing",
    price: "$3,500 - $8,000",
    desc: "Give your kitchen a luxury makeover without the cost of full replacement.",
    link: "/contact?service=cabinets"
  },
  {
    icon: <Hammer size={32} />,
    title: &quot;Drywall Repair",
    price: "$200 - $800",
    desc: "Seamless patches and texture matching for holes, water damage, and cracks.",
    link: "/contact?service=drywall"
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: &quot;Color Consultation",
    price: "Free",
    desc: "Not sure which shade? We bring experts to help you pick the perfect palette.",
    link: "/contact?service=consultation"
  },
  {
    icon: <PaintBucket size={32} />,
    title: &quot;Popcorn Removal",
    price: "$1.50 - $3.00/sq ft",
    desc: "Modernize your ceilings with professional scraping and refinishing.",
    link: "/contact?service=popcorn"
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-4xl text-primary mb-4">Our Premium Services</h2>
          <p className="text-lg text-gray-600">
            From minor touch-ups to whole-home renovations, Sunrise Painting Co. delivers excellence in every stroke.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-hover transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-accent font-bold mb-3 text-sm">{service.price}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
              <Link href={service.link} className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                Get Quote <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Button variant="outline" size="lg" className="rounded-full px-8">
             View Full Service Details
           </Button>
        </div>
      </div>
    </section>
  );
}
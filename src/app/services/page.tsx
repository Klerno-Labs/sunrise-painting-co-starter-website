import { Metadata } from "next";
import { Brush, Home, Layers, Hammer, ClipboardCheck, PaintBucket, Star, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Services | Sunrise Painting Co.",
  description: "Detailed list of our painting and home improvement services.",
};

const SERVICES_DETAIL = [
  {
    title: "Interior Painting",
    icon: <Brush size={32} />,
    image: "gallery-1",
    price: "Starting at $2.50/sq ft",
    description: "We treat your home with the utmost respect. Our interior process includes meticulous furniture protection, flooring covers, and patching of imperfections. We use low-VOC paints for your family's safety.",
    features: ["Wall & Ceiling Painting", "Trim & Crown Molding", "Wallpaper Removal", "Eco-Friendly Paints"]
  },
  {
    title: "Exterior Painting",
    icon: <Home size={32} />,
    image: "service-1",
    price: "Starting at $3.00/sq ft",
    description: "Houston weather can be tough on exteriors. We use premium elastomeric and weather-resistant coatings to protect your investment. Proper power washing and scraping ensures adhesion.",
    features: ["Power Washing", "Stucco & Wood Siding", "Deck Staining", "Weatherproofing"]
  },
  {
    title: "Cabinet Refinishing",
    icon: <Layers size={32} />,
    image: "hero-alt",
    price: "$3,500 - $8,000 avg",
    description: "Update your kitchen without the mess of demolition. We spray-finish cabinets on-site or off-site for a factory-smooth finish that looks brand new at a fraction of the cost.",
    features: ["Color Change", "Door Replacement", "Hardware Upgrade", "Clear Coat Finish"]
  },
  {
    title: "Drywall Repair",
    icon: <Hammer size={32} />,
    image: "service-3",
    price: "$200 - $800 per area",
    description: "From nail pops to large water damage patches, our drywall experts make invisible repairs. We match existing texture perfectly to leave no trace of damage.",
    features: ["Texture Matching", "Crack Repair", "Water Damage Restoration", "Corner Bead Repair"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive painting solutions tailored to the unique needs of Houston homes.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES_DETAIL.map((service, idx) => (
            <div key={idx} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image 
                  src={images[service.image as keyof typeof images].src} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                  {service.icon}
                </div>
                <h2 className="font-heading font-bold text-3xl text-primary mb-2">{service.title}</h2>
                <p className="text-accent font-bold text-lg mb-6">{service.price}</p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Star size={14} className="text-secondary fill-secondary" />
                      {feature}
                    </div>
                  ))}
                </div>
                <a href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-light transition-colors">
                  Get a Quote for {service.title}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-24 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="font-heading font-bold text-2xl text-primary mb-8 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <ClipboardCheck className="text-secondary mb-4" size={28} />
              <h4 className="font-bold text-lg mb-2">Color Consultation</h4>
              <p className="text-sm text-gray-600 mb-4">Free expert advice to help you choose the perfect colors.</p>
              <p className="text-accent font-bold">Free</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <PaintBucket className="text-secondary mb-4" size={28} />
              <h4 className="font-bold text-lg mb-2">Popcorn Ceiling Removal</h4>
              <p className="text-sm text-gray-600 mb-4">Modernize your home with expert ceiling scraping.</p>
              <p className="text-accent font-bold">$1.50 - $3.00/sq ft</p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm">
              <ShieldCheck className="text-secondary mb-4" size={28} />
              <h4 className="font-bold text-lg mb-2">Commercial Services</h4>
              <p className="text-sm text-gray-600 mb-4">Reliable painting for offices, retail, and industrial spaces.</p>
              <p className="text-accent font-bold">Custom Quote</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
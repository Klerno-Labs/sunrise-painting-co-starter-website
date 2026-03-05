import { Metadata } from "next";
import Image from "next/image";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Gallery | Sunrise Painting Co.",
  description: "View our portfolio of residential and commercial painting projects.",
};

const GALLERY_ITEMS = [
  { key: "gallery-1", title: "Modern Living Room" },
  { key: "gallery-2", title: "Exterior Restoration" },
  { key: "gallery-3", title: "Kitchen Cabinet Refinish" },
  { key: "gallery-4", title: "Office Makeover" },
  { key: "hero-alt", title: "Detail Work" },
  { key: "service-1", title: "Commercial Exterior" },
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">Our Work</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our recent projects across Houston. Every picture tells a story of preparation, precision, and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.key} className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-md">
              <Image 
                src={images[item.key as keyof typeof images].src} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
                <p className="text-gray-300 text-sm">Houston, TX</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 rounded-xl p-8 border border-gray-100">
          <h3 className="font-bold text-xl text-primary mb-2">Ready to start your project?</h3>
          <p className="text-gray-600 mb-6">Get a free quote based on the style you see here.</p>
          <a href="/contact" className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-accent-dark transition-colors inline-block">
            Get Free Estimate
          </a>
        </div>
      </div>
    </div>
  );
}
import { Metadata } from "next";
import Image from "next/image";
import { images } from "@/config/images";
import { CheckCircle2, Users, Award } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us | Sunrise Painting Co.",
  description: "Learn more about Sunrise Painting Co., our history, and our values.",
};

const VALUES = [
  {
    title: "Integrity",
    desc: "We provide honest quotes and stick to them. No hidden fees, no surprises."
  },
  {
    title: "Quality",
    desc: "We never cut corners. From prep work to the final coat, we aim for perfection."
  },
  {
    title: "Respect",
    desc: "We treat your home as if it were our own. Clean, tidy, and polite interaction guaranteed."
  }
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image 
          src={images["about"].src} 
          alt="Team working" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">More Than Just Painters</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            A family tradition of excellence serving Houston since 2012.
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="font-heading font-bold text-3xl text-primary mb-6">The Sunrise Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2012, Sunrise Painting Co. began with a simple mission: bring quality, reliability, and integrity to the home improvement industry in Houston. 
              </p>
              <p>
                As a family-owned business, we understand that your home is your most valuable asset. When you invite us in, you&apos;re not just getting a paint job; you&apos;re getting a partner dedicated to enhancing your living space.
              </p>
              <p>
                Over the years, we&apos;ve grown from a two-person crew to a team of certified professionals, but our core values haven&apos;t changed. We still believe in a firm handshake, a fair price, and a job done right the first time.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <p className="font-heading font-bold text-4xl text-secondary mb-1">12+</p>
                <p className="text-sm font-semibold text-gray-500">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-heading font-bold text-4xl text-secondary mb-1">1k+</p>
                <p className="text-sm font-semibold text-gray-500">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="font-heading font-bold text-4xl text-secondary mb-1">100%</p>
                <p className="text-sm font-semibold text-gray-500">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image 
                src={images["service-3"].src} 
                alt="Founder" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full -z-10" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="font-heading font-bold text-3xl text-primary mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary mx-auto mb-6">
                  <Award size={32} />
                </div>
                <h3 className="font-bold text-xl text-primary mb-3">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-primary rounded-2xl p-8 md:p-16 text-white">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Process</h2>
            <p className="opacity-80 text-lg">How we ensure a smooth experience from start to finish.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Consultation", desc: "Free estimate and color consultation." },
              { title: "Preparation", desc: "Furniture protection, sanding, and patching." },
              { title: "Painting", desc: "Professional application with premium paints." },
              { title: "Inspection", desc: "Final walkthrough and touch-ups." }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold text-xl mb-4 border-4 border-primary">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-sm opacity-70">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] border-t border-dashed border-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
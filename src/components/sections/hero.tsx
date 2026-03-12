import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";
import SmartEstimateForm from "@/components/smart-estimate-form";
import { CheckCircle, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-[80px] min-h-[90vh] flex items-center bg-gray-50 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Left */}
          <div className="space-y-8 z-10 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
              <Star size={16} fill="currentColor" />
              <span>Rated 5.0 by Houston Homeowners</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.1] tracking-tight">
              Premium Painting for <span className="text-secondary">Houston Homes.</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Licensed, insured, and family-owned since 2012. We specialize in transforming interiors and exteriors with precision, cleanliness, and superior craftsmanship.
            </p>

            <ul className="space-y-3 max-w-md">
              {[
                &quot;Free detailed estimates",
                "Licensed & Insured (BBB A+ Rated)",
                "Strict clean-up guarantee"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get a Free Quote
              </Link>
              <Link href="/gallery" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all">
                View Our Work
              </Link>
            </div>
          </div>

          {/* Form Right (Desktop Visual Balance) */}
          <div className="relative lg:pl-8 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">100% Satisfaction</p>
                    <p className="text-sm text-gray-600">We don&apos;t stop until you love it.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
      
      {/* Mobile Only Image (Stacked below) */}
      <div className="lg:hidden mt-12 px-4">
        <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Floating Form on Desktop (Absolute positioned or in grid - here we put it in grid for better flow, but prompt requested split visual. 
          Let&apos;s adjust: The prompt asked for Left (40%) Content, Right (60%) Visual. 
          My Grid above is balanced. Let&apos;s put the form INSIDE the visual area on desktop or as an overlay. */}
    </section>
  );
}
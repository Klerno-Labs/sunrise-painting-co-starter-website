import Image from "next/image";
import Link from "next/link";
import { images } from "@/config/images";
import SmartEstimateForm from "@/components/forms/SmartEstimateForm";
import { CheckCircle, Star, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-[80px] min-h-[90vh] flex items-center bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Rated #1 Painter in Houston
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] mb-6 tracking-tight">
              Premium Painting for <span className="text-secondary">Houston Homes.</span>
            </h1>
            <p className="text-lg text-text-body mb-8 max-w-lg">
              Transform your home with meticulous craftsmanship. We are licensed, insured, and committed to delivering a flawless finish every time.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm font-semibold text-text-heading">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-secondary mr-2" />
                Fully Insured
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                Licensed Professionals
              </div>
            </div>

            {/* Form */}
            <div className="hidden lg:block w-full max-w-md">
              <SmartEstimateForm variant="wizard" />
            </div>
          </div>

          {/* Right Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center mb-2">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 font-bold text-sm text-primary">Google Reviews</span>
                </div>
                <p className="text-xs text-text-body italic">"The team at Sunrise did an incredible job on our living room. Highly recommend!"</p>
              </div>
            </div>
            
            {/* Mobile Form (Visible only on small screens) */}
            <div className="lg:hidden mt-8">
               <SmartEstimateForm variant="wizard" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
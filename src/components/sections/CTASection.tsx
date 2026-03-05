import React from "react";
import Image from "next/image";
import { images } from "@/config/images";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.cta.src}
          alt={images.cta.alt}
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Home?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Get a free, no-obligation estimate today. We respond to all inquiries within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-lg">
            Get Your Free Quote
          </Link>
          <a href="tel:7135558291" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
            Call (713) 555-8291
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
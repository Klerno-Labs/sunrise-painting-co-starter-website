"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SmartEstimateForm } from "@/components/forms/SmartEstimateForm";
import { images } from "@/config/images";
import { ShieldCheck, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-[70px] min-h-[90vh] flex items-center bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Serving Houston Since 2012
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-[1.1] tracking-tight">
              Premium Painting for <span className="text-secondary">Houston Homes.</span>
            </h1>
            
            <p className="text-lg text-text-body leading-relaxed max-w-lg">
              Transform your space with our licensed, insured, and A+ rated team. 
              From interiors to exteriors, we deliver flawless finishes that last.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#services">Explore Services</a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-border-light">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-text-heading">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-text-heading">5-Star Rated</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Image & Form Wrapper */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images["hero"].src}
                alt={images["hero"].alt}
                width={images["hero"].width}
                height={images["hero"].height}
                className="object-cover w-full h-[500px] lg:h-[600px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
              {/* Floating Form Card */}
              <div className="absolute -bottom-8 -left-4 lg:left-0 w-full max-w-md p-4">
                <SmartEstimateForm variant="wizard" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
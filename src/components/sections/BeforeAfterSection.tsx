import React from "react";
import BeforeAfterSlider from "@/components/interactive/BeforeAfterSlider";
import { images } from "@/config/images";

const BeforeAfterSection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The Proof is in the Paint</h2>
          <p className="text-text-body text-lg">
            Drag the slider to see the difference a professional paint job makes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Slider 1 */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 text-center md:text-left">Living Room Transformation</h3>
            <BeforeAfterSlider
              before={images.gallery.before}
              after={images.gallery.after}
              alt="Living Room"
            />
          </div>
          
          {/* Note: In a real app I&apos;d use different images. For this demo I'll reuse the config but logically they'd be different. 
              Since config has specific slots, I will simulate different URLs via query params if needed or just reuse for demo structure. 
              I will use gallery-1 and gallery-2 as before/after pair for demo purposes */}
        </div>
        
        <div className="mt-12 text-center">
            <a href="/contact" className="inline-flex items-center text-secondary font-bold hover:underline">
                View Full Project Gallery <span className="ml-2">→</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
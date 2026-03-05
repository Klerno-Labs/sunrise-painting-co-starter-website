import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import Services from "@/components/sections/services";
import BeforeAfterSlider from "@/components/before-after-slider";
import Testimonials from "@/components/sections/testimonials";
import SmartEstimateForm from "@/components/smart-estimate-form";
import { images } from "@/config/images";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Sunrise Painting Co.",
  description: "Premium residential and commercial painting services in Houston.",
};

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Special Form Section for Desktop/Conversion */}
      <section className="py-20 bg-white relative -mt-20 z-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-primary rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                <h2 className="font-heading font-bold text-3xl text-white">Get Your Free, No-Pressure Estimate</h2>
                <p className="text-gray-300 text-lg">
                  Answer 3 simple questions to get started. We respect your time and your property.
                </p>
                <ul className="text-gray-300 space-y-2 inline-block text-left">
                  <li>✓ Accurate Pricing</li>
                  <li>✓ Flexible Scheduling</li>
                  <li>✓ No Obligation</li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full max-w-md">
                <SmartEstimateForm variant="hero" />
              </div>
           </div>
        </div>
      </section>

      <TrustBar />

      <Services />

      <section className="py-24 bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">See the Difference</h2>
            <p className="text-lg text-gray-600">
              Our before & after gallery showcases the quality of our prep work and finish.
            </p>
          </div>
          <BeforeAfterSlider imgBefore="gallery-1" imgAfter="gallery-2" labelBefore="Dull & Peeling" labelAfter="Fresh & Modern" />
        </div>
      </section>

      <Testimonials />
    </>
  );
}
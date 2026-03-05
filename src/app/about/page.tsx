import { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { FAQSection } from "@/components/sections/FAQSection"; // Reusing for Values/Process steps essentially
import { AccordionItem } from "@/components/interactive/AccordionItem";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Sunrise Painting Co., our history, values, and service areas.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Our Story
            </h2>
            <p className="text-lg text-text-body leading-relaxed mb-4">
              Founded in 2012, Sunrise Painting Co. began with a simple mission: to provide Houston homeowners with a painting experience they could actually trust. 
              Too often, we heard stories of missed deadlines, hidden costs, and poor cleanup.
            </p>
            <p className="text-lg text-text-body leading-relaxed mb-4">
              As a family-owned business, we treat every home as if it were our own. From the initial consultation to the final walkthrough, our focus is on quality craftsmanship and clear communication.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Today, we are proud to be A+ rated with the BBB and the go-to choice for residents in Houston, Katy, Sugar Land, and The Woodlands.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            {/* Placeholder for team/founder image */}
             <img 
               src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop" 
               alt="Sunrise Painting Team" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-text-body">How we ensure a flawless finish every time.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "1. Consultation",
                detail: "We discuss your vision, colors, and budget. We provide a detailed written estimate."
              },
              {
                step: "2. Preparation",
                detail: "Furniture is moved, floors are protected, and surfaces are cleaned and sanded."
              },
              {
                step: "3. Painting",
                detail: "We apply premium paints using industry-leading techniques for a smooth finish."
              },
              {
                step: "4. Inspection",
                detail: "We walk through the project with you to ensure every detail meets your standards."
              }
            ].map((item, i) => (
              <AccordionItem key={i} title={item.step} isOpen={i === 0}>
                {item.detail}
              </AccordionItem>
            ))}
          </div>
        </div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
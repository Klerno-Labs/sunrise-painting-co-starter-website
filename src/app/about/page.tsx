import { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import SectionContainer from "@/components/layout/SectionContainer";
import AccordionItem from "@/components/interactive/AccordionItem";
import Image from "next/image";
import { images } from "@/config/images";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Sunrise Painting Co., our history, values, and service area in Houston.",
};

const processSteps = [
  {
    title: "1. Consultation",
    content: "We start with a detailed consultation to understand your vision, provide color advice, and give you an accurate estimate."
  },
  {
    title: "2. Preparation",
    content: "Our team meticulously protects your furniture, floors, and fixtures. We sand, caulk, and prime surfaces to ensure paint adheres perfectly."
  },
  {
    title: "3. Painting",
    content: "We apply premium paints using industry-leading techniques. We cut in clean lines and apply even coats for a flawless finish."
  },
  {
    title: "4. Inspection",
    content: "Once the job is done, we walk through the project with you to ensure every detail meets our high standards and your satisfaction."
  }
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      
      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-text-body mb-4 leading-relaxed">
              Founded in 2012, Sunrise Painting Co. began with a simple mission: to provide Houston homeowners with a painting service they could actually trust. We noticed that too many contractors were unreliable, messy, or produced inconsistent results.
            </p>
            <p className="text-text-body mb-4 leading-relaxed">
              Over the last decade, we have grown from a two-person crew to a team of dedicated professionals serving the Greater Houston area. Despite our growth, we have never lost sight of our core values: integrity, quality, and respect for your home.
            </p>
            <p className="text-text-body leading-relaxed">
              We are not just painters; we are your partners in home improvement. We treat every home as if it were our own, ensuring clean job sites and clear communication from start to finish.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Years Serving Houston</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Process</h2>
          <div>
            {processSteps.map((step, index) => (
              <AccordionItem key={index} title={step.title}>
                {step.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Service Area</h2>
          <p className="text-text-body max-w-2xl mx-auto mb-8">
            We are proud to serve homeowners and businesses throughout the Greater Houston metropolitan area.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm font-semibold text-text-body">
            <div className="p-4 bg-gray-50 rounded">Houston</div>
            <div className="p-4 bg-gray-50 rounded">Katy</div>
            <div className="p-4 bg-gray-50 rounded">Sugar Land</div>
            <div className="p-4 bg-gray-50 rounded">The Woodlands</div>
            <div className="p-4 bg-gray-50 rounded">Cypress</div>
            <div className="p-4 bg-gray-50 rounded">Pearland</div>
            <div className="p-4 bg-gray-50 rounded">Spring</div>
            <div className="p-4 bg-gray-50 rounded">Memorial</div>
          </div>
        </div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
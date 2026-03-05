import { Metadata } from "next";
import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { AccordionItem } from "@/components/ui/accordion-item"; // Assuming reusable accordion
import { images } from "@/config/images";
import { CheckCircle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sunrise Painting Co., our history, values, and service areas in Houston.",
  openGraph: {
    title: "About Us",
    description: "Learn about Sunrise Painting Co., our history, values, and service areas in Houston.",
    images: [images.about.src]
  }
};

const processSteps = [
  {
    title: "1. Consultation & Estimate",
    content: "We visit your home (or provide a virtual estimate) to understand your vision, assess the scope, and provide a detailed written proposal."
  },
  {
    title: "2. Preparation",
    content: "This is the most important part. We protect floors and furniture, repair holes, sand surfaces, and tape edges for clean lines."
  },
  {
    title: "3. Painting",
    content: "We apply premium paints using industry-best techniques. We maintain a clean work environment throughout the process."
  },
  {
    title: "4. Inspection",
    content: "We walk through the project with you to ensure every detail meets our high standards and your complete satisfaction."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image 
          src={images.about.src} 
          alt="Sunrise Painting Co. Team" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">More Than Just Painters</h1>
          <p className="text-xl text-blue-100">
            A family-owned business dedicated to improving homes in Houston since 2012.
          </p>
        </div>
      </section>

      {/* Story */}
      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-lg text-text_body mb-4">
                Sunrise Painting Co. was founded with a simple mission: to provide Houston homeowners with a painting experience they could actually enjoy.
              </p>
              <p className="text-text_body mb-6">
                Too many contractors were showing up late, leaving messes, or cutting corners on prep. We knew there was a better way. Over the last decade, we've grown from a single truck to a team of 20+ professionals, but our core values haven't changed.
              </p>
              <p className="text-text_body mb-8">
                We treat every home like it's our own. That means showing up on time, communicating clearly, and staying until the job is done right.
              </p>
              <div className="flex gap-8">
                 <div>
                    <div className="text-4xl font-bold text-secondary mb-1">12+</div>
                    <div className="text-sm text-text_muted font-semibold uppercase">Years Experience</div>
                 </div>
                 <div>
                    <div className="text-4xl font-bold text-secondary mb-1">2,000+</div>
                    <div className="text-sm text-text_muted font-semibold uppercase">Projects Completed</div>
                 </div>
                 <div>
                    <div className="text-4xl font-bold text-secondary mb-1">100%</div>
                    <div className="text-sm text-text_muted font-semibold uppercase">Satisfaction</div>
                 </div>
              </div>
           </div>
           <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-card">
              <Image src={images["gallery-3"].src} alt="Our process" fill className="object-cover" />
           </div>
        </div>
      </SectionContainer>

      {/* Process */}
      <SectionContainer className="bg-gray-50">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h2 className="text-3xl font-bold text-primary mb-4">Our Process</h2>
           <p className="text-text_body">A proven system for consistent, high-quality results.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
           {processSteps.map((step, idx) => (
              <AccordionItem key={idx} title={step.title} defaultOpen={idx === 0}>
                 <p className="text-text_body leading-relaxed pl-4 border-l-2 border-secondary ml-1">
                    {step.content}
                 </p>
              </AccordionItem>
           ))}
        </div>
      </SectionContainer>

      {/* Service Area */}
      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-primary mb-6">Proudly Serving Greater Houston</h2>
              <p className="text-text_body mb-6">
                 Based in West Houston, we are centrally located to serve the entire metropolitan area. Our crews are familiar with the specific architectural styles and weather challenges in these communities.
              </p>
              <ul className="space-y-3 mb-8">
                 {["Houston (Inside the Loop, Heights, River Oaks)", "Katy", "Sugar Land", "The Woodlands", "Cypress", "Pearland"].map((area) => (
                    <li key={area} className="flex items-center gap-3 text-text_body font-medium">
                       <CheckCircle size={20} className="text-secondary" />
                       {area}
                    </li>
                 ))}
              </ul>
              <Link href="/contact">
                 <Button>Check Your Service Area</Button>
              </Link>
           </div>
           <div className="order-1 md:order-2 bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden">
              {/* Simple CSS Map Placeholder Representation */}
              <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
              <div className="relative z-10 text-center">
                 <Users size={64} className="text-primary mx-auto mb-4 opacity-50" />
                 <p className="text-text_muted font-semibold">Interactive Map Coming Soon</p>
                 <p className="text-sm text-text_muted">Currently serving a 30 mile radius from 77098</p>
              </div>
           </div>
        </div>
      </SectionContainer>
    </>
  );
}
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { SmartEstimateForm } from "@/components/forms/smart-estimate-form";
import { BeforeAfterSlider } from "@/components/sections/before-after-slider";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional painting services in Houston. Interior, exterior, cabinet refinishing and more.",
  openGraph: {
    title: "Home",
    description: "Professional painting services in Houston. Interior, exterior, cabinet refinishing and more.",
    images: [images.hero.src]
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-[70px] min-h-[90vh] flex items-center bg-gray-50">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6">
              <Shield size={16} /> Licensed & Insured • A+ BBB Rating
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-[1.1] mb-6">
              Premium Painting for <span className="text-secondary">Houston Homes</span>
            </h1>
            <p className="text-lg text-text_body mb-8 leading-relaxed max-w-xl">
              Transform your space with the craftsmanship of Sunrise Painting Co. 
              Serving Houston, Katy, Sugar Land, and The Woodlands since 2012.
            </p>
            
            <div className="hidden lg:block">
               <SmartEstimateForm variant="wizard" />
            </div>

            <div className="flex items-center gap-4 mt-8 lg:hidden">
               <Link href="/contact" className="flex-1">
                  <Button size="lg" className="w-full">Get Free Quote</Button>
               </Link>
               <a href="tel:7135558291" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full border-accent text-accent hover:bg-accent hover:text-white">Call Now</Button>
               </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                width={images.hero.width}
                height={images.hero.height}
                priority
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating Badges */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="font-bold text-primary">5.0 Rating</span>
                </div>
                <p className="text-sm text-text_body">"Finished ahead of schedule and incredibly clean!"</p>
                <p className="text-xs text-text_muted mt-1 font-semibold">- Maria L., Houston</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-border_light py-8">
        <div className="max-w-[1320px] mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-text_muted uppercase tracking-widest mb-6">Trusted Partners & Certifications</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using text placeholders for logos to avoid external dependency issues in static export, styled to look like logos */}
             <span className="text-2xl font-heading font-bold text-gray-400 hover:text-primary transition-colors">BBB</span>
             <span className="text-2xl font-heading font-bold text-gray-400 hover:text-primary transition-colors">PPA</span>
             <span className="text-2xl font-heading font-bold text-gray-400 hover:text-primary transition-colors">Sherwin Williams</span>
             <span className="text-2xl font-heading font-bold text-gray-400 hover:text-primary transition-colors">Benjamin Moore</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <SectionContainer className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-text_body">
            From interior makeovers to exterior protection, we deliver perfection on every surface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Interior Painting",
              price: "$2.50-$4.00/sq ft",
              description: "Revitalize your living spaces with clean lines, minimal mess, and premium colors.",
              icon: <span className="text-2xl">🖌️</span>
              image: images["service-2"]
            },
            {
              title: "Exterior Painting",
              price: "$3.00-$5.00/sq ft",
              description: "Protect your home from the harsh Texas elements with our durable exterior coatings.",
              icon: <span className="text-2xl">🏠</span>,
              image: images["service-1"]
            },
            {
              title: "Cabinet Refinishing",
              price: "$3,500-$8,000",
              description: "Give your kitchen a brand-new look without the cost of full replacement.",
              icon: <span className="text-2xl">🚰</span>,
              image: images["gallery-2"]
            },
            {
              title: "Drywall Repair",
              price: "$200-$800",
              description: "Seamless patches and texture matching for holes, water damage, and cracks.",
              icon: <span className="text-2xl">🧱</span>,
              image: images.about
            },
            {
              title: "Color Consultation",
              price: "Free",
              description: "Not sure which shade to choose? Our experts help you find the perfect palette.",
              icon: <span className="text-2xl">🎨</span>,
              image: images.hero
            },
            {
              title: "Popcorn Removal",
              price: "$1.50-$3.00/sq ft",
              description: "Modernize your ceilings by removing outdated texture and refinishing.",
              icon: <span className="text-2xl">☁️</span>,
              image: images["gallery-1"]
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-xl border border-border_light shadow-card hover:shadow-hover overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                 <Image 
                   src={service.image.src}
                   alt={service.title}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4 text-secondary">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-text_muted font-semibold mb-3">{service.price}</p>
                <p className="text-text_body text-sm mb-6 flex-1">{service.description}</p>
                <Link href="/contact" className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Get Quote <span className="text-secondary">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Before/After Gallery */}
      <SectionContainer className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">See the Difference</h2>
            <p className="text-lg text-text_body mb-6">
              We believe in transparency. Drag the slider to see how we transformed this space. 
              Our attention to prep work ensures a finish that lasts.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Thorough surface preparation and cleaning",
                "Premium Sherwin Williams & Benjamin Moore paints",
                "Clean protection of your floors and furniture",
                "Final walkthrough to ensure 100% satisfaction"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-green-500"><CheckCircle size={20} /></div>
                  <span className="text-text_body">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/#gallery">
              <Button variant="secondary" size="lg">View Full Gallery</Button>
            </Link>
          </div>
          <div className="relative">
             <BeforeAfterSlider />
          </div>
        </div>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer className="bg-white" id="reviews">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Houston Says</h2>
          <div className="flex justify-center items-center gap-2 text-accent mb-2">
             {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <p className="text-lg text-text_body">Over 10 years of 5-star service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "We hired Sunrise for our entire home interior and they did an incredible job. Clean, professional, and finished ahead of schedule. Highly recommend!",
              name: "Maria L.",
              role: "Homeowner",
              img: images["gallery-1"]
            },
            {
              quote: "Carlos and his crew repainted our office building exterior in 3 days. The attention to detail was impressive. They handled all our HOA requirements perfectly.",
              name: "James T.",
              role: "Business Owner",
              img: images["service-1"]
            },
            {
              quote: "Best cabinet refinishing in Houston! Our kitchen looks brand new. Worth every penny. The team was respectful of our home and kept everything tidy.",
              name: "Ashley R.",
              role: "Homeowner",
              img: images["gallery-2"]
            }
          ].map((review, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-border_light relative"
             >
                <div className="absolute -top-4 left-8 text-6xl text-primary/10 font-serif">"</div>
                <div className="flex text-accent mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-text_body italic mb-6 relative z-10">{review.quote}</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image src={review.img.src} alt={review.name} fill className="object-cover" />
                   </div>
                   <div>
                      <p className="font-bold text-primary">{review.name}</p>
                      <p className="text-sm text-text_muted">{review.role}</p>
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           {/* Abstract Pattern */}
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Award className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate today. Our expert consultants will provide a detailed quote and color consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg" className="px-8 py-4 text-lg shadow-xl">
                Schedule Free Estimate
              </Button>
            </Link>
            <a href="tel:7135558291">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
                Call (713) 555-8291
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
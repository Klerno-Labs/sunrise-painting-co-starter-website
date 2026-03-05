import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import SmartEstimateForm from "@/components/sections/SmartEstimateForm";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import { images } from "@/config/images";
import { 
  Paintbrush2, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Phone
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Interior Painting",
      price: "$2.50-$4.00/sq ft",
      desc: "Transform your living spaces with our clean, detailed interior painting services.",
      icon: <Paintbrush2 className="w-6 h-6" />,
    },
    {
      title: "Exterior Painting",
      price: "$3.00-$5.00/sq ft",
      desc: "Protect and beautify your home's exterior with premium weather-resistant paints.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Cabinet Refinishing",
      price: "$3,500-$8,000",
      desc: "Give your kitchen a facelift without the cost of full replacement.",
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Maria L.",
      text: "We hired Sunrise for our entire home interior and they did an incredible job. Clean, professional, and finished ahead of schedule. Highly recommend!",
      role: "Homeowner",
    },
    {
      name: "James T.",
      text: "Carlos and his crew repainted our office building exterior in 3 days. The attention to detail was impressive.",
      role: "Business Owner",
    },
    {
      name: "Ashley R.",
      text: "Best cabinet refinishing in Houston! Our kitchen looks brand new. Worth every penny.",
      role: "Homeowner",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <motion.div 
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-2">
                <ShieldCheck className="w-4 h-4" />
                Licensed & Insured • A+ BBB Rating
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Premium Painting for <span className="text-secondary">Houston Homes</span>
              </h1>
              <p className="text-lg text-text-body leading-relaxed">
                Family-owned since 2012. We bring reliability, speed, and quality craftsmanship to every brushstroke.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                 <Button variant="cta" size="lg" asChild>
                    <Link href="/contact">Get a Free Quote</Link>
                 </Button>
                 <Button variant="secondary" size="lg" asChild>
                    <Link href="#gallery">View Our Work</Link>
                 </Button>
              </div>
            </motion.div>

            {/* Visual & Form */}
            <motion.div 
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[16/9]">
                <Image
                  src={images.hero.src}
                  alt={images.hero.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-400 text-white p-1 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm">5-Star Rated</p>
                      <p className="text-xs text-text-muted">On Google & Houzz</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form Card (Desktop only, floats over image edge) */}
              <div className="hidden lg:block absolute -bottom-10 -left-10 w-[380px] z-20 shadow-xl">
                <SmartEstimateForm variant="wizard" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-white border-y border-border-light py-8">
        <div className="container flex flex-wrap justify-around items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-bold text-xl text-text-heading">BBB A+ Rating</span>
            <span className="font-bold text-xl text-text-heading">Sherwin Williams</span>
            <span className="font-bold text-xl text-text-heading">PPA Member</span>
            <span className="font-bold text-xl text-text-heading">Benjamin Moore</span>
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-text-body">From single rooms to whole-home makeovers, we handle it all with precision.</p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-card hover:-translate-y-1 hover:shadow-hover transition-all duration-300 border border-border-light group"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-accent font-bold text-sm mb-3">{service.price}</p>
                <p className="text-text-body text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors text-sm">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
             <Button variant="secondary" asChild>
                <Link href="/services">View All Services</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER GALLERY */}
      <section id="gallery" className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">See the Difference</h2>
               <p className="text-text-body text-lg mb-6">
                 We believe in showing, not just telling. Explore our interactive gallery to see the quality of our work.
               </p>
               <ul className="space-y-4 mb-8">
                 {["Thorough surface prep", "Clean lines & cut-ins", "Post-job clean up"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-body">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      {item}
                    </li>
                 ))}
               </ul>
               <Button variant="cta" asChild>
                 <Link href="/contact">Start My Project</Link>
               </Button>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <BeforeAfterSlider 
                 beforeImage="gallery-3" 
                 afterImage="gallery-2" 
                 title="Living Room Transformation" 
               />
             </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
         {/* Decorative bg */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <Image src={images["testimonial-bg"].src} alt="bg" fill className="object-cover" />
         </div>

         <div className="container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Houston Says</h2>
              <div className="flex justify-center gap-1 mb-4">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-secondary fill-current" />)}
              </div>
            </div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((t, i) => (
                 <motion.div key={i} variants={itemVariants} className="bg-white p-8 rounded-xl shadow-card border border-border-light">
                    <div className="flex gap-1 text-secondary mb-4">
                       {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-text-body italic mb-6">"{t.text}"</p>
                    <div>
                       <p className="font-bold text-primary">{t.name}</p>
                       <p className="text-xs text-text-muted uppercase tracking-wider">{t.role}</p>
                    </div>
                 </motion.div>
              ))}
            </motion.div>
         </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-32 bg-primary text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <Image src={images.cta.src} alt="bg" fill className="object-cover" />
         </div>
         <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Refresh Your Home?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Get a free, no-obligation estimate today. We&apos;ll show up on time and deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button variant="cta" size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                  <Link href="/contact">Request Free Estimate</Link>
               </Button>
               <Button variant="ghost" size="lg" className="border border-white/20 hover:bg-white/10" asChild>
                  <Link href="tel:7135558291">
                     <Phone className="w-5 h-5 mr-2" /> (713) 555-8291
                  </Link>
               </Button>
            </div>
         </div>
      </section>

      {/* Mobile Form Sticky (Only visible on mobile, bottom of page) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-40 border-t border-border-light">
         <Button variant="cta" className="w-full" asChild>
            <Link href="/contact">Get a Free Quote</Link>
         </Button>
      </div>
    </>
  );
}
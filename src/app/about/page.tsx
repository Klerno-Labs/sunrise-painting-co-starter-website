import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { CheckCircle, Users, Target, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "About Us | Sunrise Painting Co.",
  description: "Learn about Sunrise Painting Co., Houston's trusted family-owned painters since 2012.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      icon: <Target className="w-8 h-8" />,
      desc: "We do what we say we'll do. Honest pricing and clear communication from start to finish."
    },
    {
      title: "Quality",
      icon: <Award className="w-8 h-8" />,
      desc: "We don't cut corners. We use premium paints and thorough prep work to ensure lasting results."
    },
    {
      title: "Community",
      icon: <Users className="w-8 h-8" />,
      desc: "As a local Houston business, we treat our neighbors like family."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
         <Image src={images.about.src} alt="Team" fill className="object-cover" priority />
         <div className="absolute inset-0 bg-primary/80" />
         <div className="container relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">More Than Just Painters</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
               Dedicated to beautifying Houston one home at a time since 2012.
            </p>
         </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                 <div className="space-y-4 text-text-body text-lg">
                    <p>
                      Sunrise Painting Co. started with a simple mission: to provide Houston homeowners with a painting experience they could actually trust.
                    </p>
                    <p>
                      Too many contractors were showing up late, leaving messes, or disappearing halfway through a job. We knew there had to be a better way.
                    </p>
                    <p>
                      Over a decade later, we are proud to be one of the highest-rated painting companies in the Greater Houston area. From Katy to The Woodlands, our team of licensed professionals brings reliability, cleanliness, and superior craftsmanship to every project.
                    </p>
                 </div>
                 <div className="flex gap-8 mt-8">
                    <div>
                       <p className="text-4xl font-bold text-secondary">10+</p>
                       <p className="text-sm text-text-muted">Years Experience</p>
                    </div>
                    <div>
                       <p className="text-4xl font-bold text-secondary">500+</p>
                       <p className="text-sm text-text-muted">Projects Completed</p>
                    </div>
                 </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                 <Image src={images["service-3"].src} alt="Painter working" fill className="object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
              <p className="text-text-body max-w-2xl mx-auto">These aren't just words on a wall. They are the principles we operate by every single day.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-xl shadow-card hover:shadow-hover transition-all border border-border-light text-center"
                 >
                    <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-6">
                       {val.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{val.title}</h3>
                    <p className="text-text-body">{val.desc}</p>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="container text-center">
           <h2 className="text-3xl font-bold text-primary mb-8">Proudly Serving the Greater Houston Area</h2>
           <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-10 border border-border-light">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                 <div>
                    <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                       <MapPin className="w-5 h-5 text-secondary" /> Service Areas
                    </h3>
                    <ul className="space-y-2 text-text-body">
                       <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Houston (Inner Loop & Heights)</li>
                       <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Katy</li>
                       <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Sugar Land</li>
                       <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> The Woodlands</li>
                    </ul>
                 </div>
                 <div className="flex items-center justify-center">
                   <div className="bg-primary/5 p-6 rounded-xl w-full h-48 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Map_of_Texas_highlighting_Harris_County.svg/800px-Map_of_Texas_highlighting_Harris_County.svg.png')] bg-contain bg-center bg-no-repeat opacity-30"></div>
                     <p className="relative z-10 font-bold text-primary">Harris County &<br /> Surrounding Areas</p>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
           <h2 className="text-3xl font-bold mb-6">Ready to Work with Us?</h2>
           <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Join our hundreds of satisfied customers in Houston.</p>
           <Button variant="cta" size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/contact">Get a Free Estimate</Link>
           </Button>
        </div>
      </section>
    </>
  );
}
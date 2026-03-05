import React from "react";
import SmartEstimateForm from "@/components/sections/SmartEstimateForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Contact Us | Sunrise Painting Co.",
  description: "Get in touch with Sunrise Painting Co. for a free estimate. Call (713) 555-8291 or visit our Houston office.",
};

export default function ContactPage() {
  const faqs = [
    { q: "Do you offer free estimates?", a: "Yes! We offer free, no-obligation estimates for all residential and commercial projects." },
    { q: "Are you licensed and insured?", a: "Absolutely. We are fully licensed in the state of Texas and carry comprehensive liability and workers' compensation insurance." },
    { q: "What areas do you serve?", a: "We primarily serve Houston, Katy, Sugar Land, The Woodlands, and surrounding areas within a 30-mile radius of downtown." },
    { q: "How long will my project take?", a: "Timelines vary based on project size. A typical interior room takes 1-2 days, while exterior homes usually take 3-5 days depending on weather." },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-xl text-text-body">
            Ready to start your project? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-card border border-border-light">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Phone</p>
                    <a href="tel:7135558291" className="text-text-body hover:text-secondary transition-colors">(713) 555-8291</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Email</p>
                    <a href="mailto:info@sunrisepaintingco.com" className="text-text-body hover:text-secondary transition-colors">info@sunrisepaintingco.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Office</p>
                    <p className="text-text-body">2847 Westpark Dr, Suite 110<br />Houston, TX 77098</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Hours</p>
                    <p className="text-text-body">Mon-Fri: 7am-6pm<br />Sat: 8am-2pm<br />Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Fake Tracker Map UI */}
            <div className="bg-gray-100 rounded-xl p-6 border border-border-light flex flex-col items-center justify-center h-64 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Map_of_Texas_highlighting_Harris_County.svg/800px-Map_of_Texas_highlighting_Harris_County.svg.png')] bg-cover opacity-20"></div>
               <div className="relative z-10 text-center bg-white p-4 rounded-lg shadow-md">
                  <p className="font-bold text-primary text-sm">Technician Tracker</p>
                  <p className="text-xs text-text-muted">Currently serving 5 crews in Houston</p>
                  <div className="mt-2 h-1 w-24 bg-gray-200 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-3/4 animate-pulse"></div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SmartEstimateForm variant="full" />
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {faqs.map((item, i) => (
                 <details key={i} className="group bg-white rounded-lg border border-border-light overflow-hidden">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-primary hover:bg-gray-50 transition-colors list-none">
                       <span>{item.q}</span>
                       <span className="transition-transform group-open:rotate-180">
                          <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                       </span>
                    </summary>
                    <div className="p-6 pt-0 text-text-body border-t border-border-light mt-2">
                       <p>{item.a}</p>
                    </div>
                 </details>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
import { Metadata } from "next";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SmartEstimateForm } from "@/components/forms/smart-estimate-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Sunrise Painting Co. for a free quote in Houston.",
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with Sunrise Painting Co. for a free quote in Houston.",
  }
};

const faqs = [
  {
    question: "Do you provide free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all projects. Contact us to schedule a time."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed by the state of Texas and carry comprehensive liability and workers' compensation insurance."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Houston, Katy, Sugar Land, The Woodlands, and surrounding areas within a 30-mile radius of the city center."
  },
  {
    question: "How long will my project take?",
    answer: "Timeline varies by project size. An average interior room takes 1-2 days, while a full home exterior may take 5-7 days depending on weather."
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-50 pt-32 pb-20">
        <div className="max-w-[1320px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h1>
          <p className="text-xl text-text_body max-w-2xl mx-auto">
            Ready to start your project? Fill out the form or give us a call. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Contact Info */}
           <div className="space-y-8">
              <div>
                 <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                          <Phone size={24} />
                       </div>
                       <div>
                          <p className="font-bold text-text_heading">Phone</p>
                          <a href="tel:7135558291" className="text-primary hover:underline font-semibold text-lg">
                            (713) 555-8291
                          </a>
                          <p className="text-sm text-text_muted">Mon-Fri: 7am-6pm, Sat: 8am-2pm</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                          <Mail size={24} />
                       </div>
                       <div>
                          <p className="font-bold text-text_heading">Email</p>
                          <a href="mailto:info@sunrisepaintingco.com" className="text-primary hover:underline font-semibold text-lg">
                            info@sunrisepaintingco.com
                          </a>
                          <p className="text-sm text-text_muted">We reply within 24 hours</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <p className="font-bold text-text_heading">Office</p>
                          <p className="text-text_body">
                            2847 Westpark Dr, Suite 110<br />
                            Houston, TX 77098
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* Emergency Card */}
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                 <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <Clock size={20} className="text-accent" /> Response Time
                 </h3>
                 <p className="text-sm text-text_body mb-4">
                    We strive to return all quote requests within one business day.
                 </p>
                 <a href="tel:7135558291">
                    <Button variant="accent" className="w-full">Emergency Painting</Button>
                 </a>
              </div>
           </div>

           {/* Form */}
           <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-border_light">
                 <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                 <SmartEstimateForm variant="full" />
              </div>
           </div>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer className="bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
           {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-border_light rounded-lg open:shadow-sm transition-all">
                 <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-text_heading select-none list-none">
                    {faq.question}
                    <span className="transition-transform group-open:rotate-180">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                         <polyline points="6 9 12 15 18 9"></polyline>
                       </svg>
                    </span>
                 </summary>
                 <div className="px-6 pb-6 text-text_body leading-relaxed">
                    {faq.answer}
                 </div>
              </details>
           ))}
        </div>
      </SectionContainer>
    </>
  );
}
import { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import SectionContainer from "@/components/layout/SectionContainer";
import SmartEstimateForm from "@/components/forms/SmartEstimateForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get a free painting quote from Sunrise Painting Co. Call us at (713) 555-8291 or visit our office in Houston, TX.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
            <p className="text-text-body mb-8">
              Ready to start your project? Fill out the form or contact us directly. We typically respond within 24 hours.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-text-heading">Phone</h3>
                  <a href="tel:7135558291" className="text-text-body hover:text-secondary transition-colors">(713) 555-8291</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-text-heading">Email</h3>
                  <a href="mailto:info@sunrisepaintingco.com" className="text-text-body hover:text-secondary transition-colors">info@sunrisepaintingco.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-text-heading">Office</h3>
                  <p className="text-text-body">2847 Westpark Dr, Suite 110<br />Houston, TX 77098</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-text-heading">Hours</h3>
                  <p className="text-text-body">Mon-Fri: 7am-6pm<br />Sat: 8am-2pm<br />Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Fake Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300"></div>
                <div className="relative z-10 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <span className="text-sm font-semibold text-gray-600">Serving Greater Houston</span>
                </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <SmartEstimateForm variant="full" />
          </div>
        </div>
      </SectionContainer>

      <FAQSection />
    </>
  );
}
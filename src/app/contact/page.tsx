import { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SmartEstimateForm } from "@/components/forms/SmartEstimateForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Sunrise Painting Co. for a free estimate. Call us at (713) 555-8291.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-primary mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Phone</h3>
                  <a href="tel:(713) 555-8291" className="text-lg text-text-body hover:text-secondary">
                    (713) 555-8291
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Email</h3>
                  <a href="mailto:info@sunrisepaintingco.com" className="text-lg text-text-body hover:text-secondary">
                    info@sunrisepaintingco.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Address</h3>
                  <p className="text-lg text-text-body">
                    2847 Westpark Dr, Suite 110<br />
                    Houston, TX 77098
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Hours</h3>
                  <p className="text-lg text-text-body">
                    Mon-Fri: 7am-6pm<br />
                    Sat: 8am-2pm<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Houston,TX&zoom=10&size=600x300&sensor=false&key=YOUR_API_KEY')] bg-cover opacity-50 grayscale" /> 
              {/* Note: Static map image background used as placeholder visual since no API key provided */}
               <div className="relative z-10 text-center">
                 <MapPin className="w-8 h-8 mx-auto text-primary mb-2" />
                 <p className="font-bold text-primary">Serving Greater Houston</p>
                 <p className="text-sm text-text-muted">Katy, Sugar Land, The Woodlands</p>
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
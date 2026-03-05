import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SmartEstimateForm from "@/components/smart-estimate-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | Sunrise Painting Co.",
  description: "Get a free quote for your painting project in Houston. Call us at (713) 555-8291.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Fill out the form or contact us directly using the information below.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-card border border-gray-100">
              <h3 className="font-bold text-xl text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Phone</p>
                    <a href={`tel:${siteConfig.links.phone}`} className="text-gray-600 hover:text-secondary transition-colors">
                      {siteConfig.links.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Email</p>
                    <a href={`mailto:${siteConfig.links.email}`} className="text-gray-600 hover:text-secondary transition-colors">
                      {siteConfig.links.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Office</p>
                    <p className="text-gray-600">
                      2847 Westpark Dr, Suite 110<br />
                      Houston, TX 77098
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Hours</p>
                    <p className="text-gray-600 text-sm">
                      Mon-Fri: 7am-6pm<br />
                      Sat: 8am-2pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder Map Image */}
            <div className="relative rounded-xl overflow-hidden h-64 shadow-card border border-gray-100">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop&q=80" 
                 alt="Map placeholder showing service area" 
                 className="w-full h-full object-cover grayscale opacity-80"
               />
               <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
                 <div className="text-center text-white">
                   <p className="font-bold text-lg">Serving Greater Houston</p>
                   <p className="text-sm opacity-90">Katy, Sugar Land, The Woodlands</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <SmartEstimateForm variant="card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
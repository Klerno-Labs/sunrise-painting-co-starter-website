import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 bg-secondary text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xl leading-none">SUNRISE</span>
                  <span className="text-xs font-semibold text-gray-300 tracking-wider">PAINTING CO.</span>
                </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium painting services for Houston homeowners. Licensed, insured, and committed to quality craftsmanship since 2012.
            </p>
            <div className="flex gap-4">
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors">
                 <Facebook className="w-5 h-5" />
               </a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors">
                 <Twitter className="w-5 h-5" />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-secondary hover:translate-x-1 transition-all inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <span>2847 Westpark Dr, Suite 110<br />Houston, TX 77098</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:7135558291" className="hover:text-white transition-colors">(713) 555-8291</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@sunrisepaintingco.com" className="hover:text-white transition-colors">info@sunrisepaintingco.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white">7am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">8am - 2pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-accent">Closed</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm font-semibold text-secondary mb-1">Emergency Service?</p>
              <p className="text-xs text-gray-400 mb-3">We handle urgent drywall repairs.</p>
              <Link href="/contact" className="text-sm font-bold text-white hover:underline">
                Contact us now &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sunrise Painting Co. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
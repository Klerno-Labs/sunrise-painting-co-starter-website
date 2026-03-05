import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="text-white text-2xl font-heading font-bold">SUNRISE</span>
              <span className="text-secondary text-sm font-bold tracking-widest block">PAINTING CO.</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Premium residential and commercial painting services serving Greater Houston since 2012. Licensed, insured, and committed to quality.
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                <span className="text-gray-300 text-sm">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 text-sm ml-8">
                  {siteConfig.contact.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* Service Areas / Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Service Areas</h3>
            <p className="text-gray-300 text-sm mb-4">
              Proudly serving Houston, Katy, Sugar Land, The Woodlands, and surrounding areas.
            </p>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400 mb-2">License & Insured</p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center font-bold text-xs">BBB</div>
                <div className="text-sm font-semibold">A+ Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-accent text-white p-3 rounded-full shadow-lg hover:brightness-110 transition-all z-40"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
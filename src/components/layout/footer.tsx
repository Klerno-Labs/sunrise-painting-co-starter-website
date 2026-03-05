import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-primary font-heading font-bold text-xl">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-none">
                  Sunrise
                </span>
                <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
                  Painting Co.
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional residential and commercial painting serving Greater Houston since 2012.
              A+ Rated with the BBB.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white hover:underline transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-accent" />
                <span>
                  2847 Westpark Dr, Suite 110<br />
                  Houston, TX 77098
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-accent" />
                <a href="tel:7135558291" className="hover:text-white transition-colors">
                  (713) 555-8291
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-accent" />
                <a href="mailto:info@sunrisepaintingco.com" className="hover:text-white transition-colors">
                  info@sunrisepaintingco.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-secondary">
              Business Hours
            </h3>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>7am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8am - 2pm</span>
              </li>
              <li className="flex justify-between text-text_muted">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sunrise Painting Co. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </Button>
        </div>
      </div>
    </footer>
  );
}
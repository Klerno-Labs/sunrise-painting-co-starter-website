import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white text-primary rounded flex items-center justify-center font-bold font-heading">
                S
              </div>
              <span className="font-heading font-bold text-xl">Sunrise Painting Co.</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Family-owned residential and commercial painting company serving Greater Houston since 2012. 
              We bring color and life to your home with precision and care.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={`Visit our ${Icon.name} page`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-secondary hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-secondary hover:translate-x-1 transition-all inline-block text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {siteConfig.links.address}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href={`tel:${siteConfig.links.phone}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.links.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href={`mailto:${siteConfig.links.email}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.links.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="font-semibold">7:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-semibold">8:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-500">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-secondary font-bold mb-1">EMERGENCY?</p>
              <p className="text-xs text-gray-300">Call us for urgent painting needs.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
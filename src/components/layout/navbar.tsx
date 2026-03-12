"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener(&quot;scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-gray-100 shadow-sm py-3"
            : "bg-white/95 backdrop-blur-sm border-transparent py-5"
        )}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white font-heading font-bold text-xl group-hover:bg-primary-light transition-colors">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-primary leading-none">
                  Sunrise
                </span>
                <span className="text-xs font-semibold text-secondary tracking-wider uppercase">
                  Painting Co.
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full",
                    pathname === item.href ? "text-primary after:w-full" : "text-gray-600"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.links.phone}`}
                className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">{siteConfig.links.phone}</span>
              </a>
              <Link
                href="/contact"
                className="bg-accent text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-accent-dark transition-all shadow-md hover:shadow-lg transform active:scale-95"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors&quot;
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors&quot;
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center gap-6 text-center">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  &quot;text-2xl font-heading font-semibold text-white/90 hover:text-white transition-colors",
                  pathname === item.href && "text-secondary"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 mt-8">
            <a
              href={`tel:${siteConfig.links.phone}`}
              className="flex items-center gap-3 text-white text-xl font-bold"
            >
              <Phone />
              {siteConfig.links.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-accent text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-accent-dark transition-all w-full text-center shadow-lg&quot;
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
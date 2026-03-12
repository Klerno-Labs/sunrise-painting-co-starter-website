"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener(&quot;scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/#gallery", label: "Gallery" }, // Anchor to home gallery
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled || isMobileMenuOpen
            ? "bg-white/90 backdrop-blur-md border-border-light py-2"
            : "bg-transparent border-transparent py-4"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-secondary text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl group-hover:bg-primary transition-colors">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-primary leading-none group-hover:text-secondary transition-colors">SUNRISE</span>
              <span className="text-xs font-semibold text-text-muted tracking-wider">PAINTING CO.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold text-text-body hover:text-primary transition-colors relative",
                  pathname === link.href ? "text-primary" : ""
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 mr-4">
               <Phone className="w-4 h-4 text-accent" />
               <a href="tel:7135558291" className="font-bold text-text-heading hover:text-secondary transition-colors">
                 (713) 555-8291
               </a>
            </div>
            
            <Button variant="cta" className="hidden md:inline-flex" asChild>
               <Link href="/contact">Get a Quote</Link>
            </Button>

            <button
              className="lg:hidden p-2 text-primary hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? &quot;Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary lg:hidden">
          <div className="flex flex-col h-full p-6 pt-24 space-y-6 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-heading font-semibold text-white hover:text-secondary transition-colors border-b border-white/10 pb-4&quot;
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="cta" className="w-full text-lg py-4" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
             <div className="pt-4 text-center text-white/70 text-sm">
               <p>2847 Westpark Dr, Suite 110</p>
               <p>Houston, TX 77098</p>
             </div>
          </div>
        </div>
      )}
    </>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-white/95 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl group-hover:bg-secondary transition-colors">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-primary leading-none">
                  Sunrise
                </span>
                <span className="text-xs font-semibold text-secondary tracking-widest uppercase">
                  Painting Co.
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.href
                      ? "text-primary font-bold"
                      : "text-text_body"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:7135558291" className="flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                <Phone size={18} /> (713) 555-8291
              </a>
              <Link href="/contact">
                <Button variant="primary" size="sm">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 text-text_body hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-primary md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-heading font-bold hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-8 w-full px-8">
              <a href="tel:7135558291" className="flex items-center justify-center gap-2 text-xl font-bold text-accent">
                <Phone /> (713) 555-8291
              </a>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="accent" className="w-full py-4 text-lg">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-md"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </>
  );
}
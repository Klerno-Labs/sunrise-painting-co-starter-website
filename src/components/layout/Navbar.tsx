"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] flex items-center",
          isScrolled || isOpen ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border-light" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-50 relative">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-text-body"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center text-primary font-bold hover:text-secondary transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              {siteConfig.contact.phone}
            </a>
            <Link href="/contact" className="bg-accent text-white px-5 py-2 rounded-md font-semibold hover:brightness-110 transition-all">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 text-text-heading"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-heading font-bold text-white hover:text-secondary transition-colors"
          >
            {item.title}
          </Link>
        ))}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="text-xl font-bold text-accent mt-4"
          onClick={() => setIsOpen(false)}
        >
          {siteConfig.contact.phone}
        </a>
      </div>
    </>
  );
};

export default Navbar;
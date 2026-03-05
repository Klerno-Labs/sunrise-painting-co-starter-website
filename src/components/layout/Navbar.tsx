"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 h-[70px] flex items-center",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border-light"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                pathname === item.href
                  ? "text-primary font-bold"
                  : "text-text-body"
              )}
            >
              {item.title}
              {pathname === item.href && (
                <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-secondary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="hidden lg:flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.contact.phone}
          </a>
          
          <div className="hidden lg:block">
            <Button variant="cta" size="sm" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-text-heading hover:bg-slate-100 rounded-md"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-primary lg:hidden">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="text-white">
                <span className="text-xl font-heading font-bold block">SUNRISE</span>
                <span className="text-xs text-secondary tracking-wider">
                  PAINTING CO.
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-md"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col gap-6">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-2xl font-heading font-medium text-white/80 hover:text-secondary transition-colors",
                    pathname === item.href && "text-secondary"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-2 text-white text-lg font-bold p-4 rounded-lg border border-white/20"
              >
                <Phone className="w-5 h-5 text-accent" />
                {siteConfig.contact.phone}
              </a>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
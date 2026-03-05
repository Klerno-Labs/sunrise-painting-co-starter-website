"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="border border-border-light rounded-lg mb-3 overflow-hidden bg-surface">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left bg-surface hover:bg-gray-50 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-lg text-primary">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-secondary transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 md:p-6 pt-0 text-text-body leading-relaxed border-t border-border-light mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
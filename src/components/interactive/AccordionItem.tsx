"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { useState } from "react";
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border-light rounded-md mb-2 overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center bg-surface hover:bg-gray-50 transition-colors text-left focus:outline-none&quot;
      >
        <span className="font-semibold text-text-heading">{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-text-muted transition-transform duration-300",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="p-6 pt-0 text-text-body leading-relaxed border-t border-border-light mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
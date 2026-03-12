"use client";
import React, { useState, useRef, MouseEvent, TouchEvent } from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";
interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

const BeforeAfterSlider = ({ before, after, alt }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-card group select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Background) */}
      <img
        src={before}
        alt={`${alt} - Before`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* After Image (Foreground with Clip Path) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <img
          src={after}
          alt={`${alt} - After`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current ? `${10000 / (100 - sliderPosition)}%` : '100%', left: `-${sliderPosition}%` }} 
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-xs font-bold backdrop-blur-sm pointer-events-none">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-accent/90 text-white px-3 py-1 rounded text-xs font-bold backdrop-blur-sm pointer-events-none">
        AFTER
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
          <div className="flex space-x-1">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components for icons inside
const ChevronLeft = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
);
const ChevronRight = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);

export default BeforeAfterSlider;
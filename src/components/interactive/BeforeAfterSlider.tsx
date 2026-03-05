"use client";

import React, { useState, useRef, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { images } from "@/config/images";

interface BeforeAfterSliderProps {
  beforeImage: keyof typeof images;
  afterImage: keyof typeof images;
  alt?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt = "Before and After Comparison",
}: BeforeAfterSliderProps) {
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
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const beforeData = images[beforeImage];
  const afterData = images[afterImage];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-card select-none group cursor-ew-resize"
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={beforeData.src}
          alt={`${alt} - Before`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
          BEFORE
        </div>
      </div>

      {/* After Image (Overlay - Clipped) */}
      <div
        className="absolute inset-0 h-full overflow-hidden border-r-2 border-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={afterData.src}
          alt={`${alt} - After`}
          fill
          className="object-cover"
          style={{ width: `${100 / (sliderPosition || 1) * 100}%`, maxWidth: 'none' }} 
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          AFTER
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-8 bg-white rounded-full shadow-lg flex items-center justify-center transform -translate-x-1/2 pointer-events-none group-hover:scale-110 transition-transform"
        style={{ left: `${sliderPosition}%` }}
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      </div>
    </div>
  );
}
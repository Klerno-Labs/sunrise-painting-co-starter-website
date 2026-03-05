"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { images } from "@/config/images";

interface BeforeAfterSliderProps {
  imgBefore?: keyof typeof images;
  imgAfter?: keyof typeof images;
  labelBefore?: string;
  labelAfter?: string;
}

export default function BeforeAfterSlider({ 
  imgBefore = "gallery-1", 
  imgAfter = "gallery-2",
  labelBefore = "Before",
  labelAfter = "After"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group select-none",
        isDragging ? "cursor-ew-resize" : "cursor-ew-resize"
      )}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={isDragging ? handleMouseMove : undefined}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={isDragging ? handleTouchMove : undefined}
    >
      {/* Before Image (Bottom Layer) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={images[imgBefore].src}
          alt={labelBefore}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm font-bold backdrop-blur-sm">
          {labelBefore}
        </div>
      </div>

      {/* After Image (Top Layer - Clipped) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={images[imgAfter].src}
          alt={labelAfter}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 right-4 bg-secondary/90 text-white px-3 py-1 rounded-md text-sm font-bold backdrop-blur-sm">
          {labelAfter}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary border-4 border-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg className="absolute right-3" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      
      {/* Hint Text */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 px-3 py-1 rounded-full pointer-events-none">
        Drag to compare
      </div>
    </div>
  );
}
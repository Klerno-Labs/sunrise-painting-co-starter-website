"use client";

import React, { useRef, useState, useEffect } from "react";
import { images } from "@/config/images";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: keyof typeof images;
  afterImage: keyof typeof images;
  title: string;
  className?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, title, className }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };

    if (isDragging) {
      window.addEventListener(&quot;mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className={cn("relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-card group select-none", className)} ref={containerRef}>
      <h3 className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-primary shadow-sm">
        {title}
      </h3>
      
      {/* Labels */}
      <div className="absolute top-4 right-4 z-20 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold pointer-events-none">
        AFTER
      </div>
      <div className="absolute top-4 right-[50%] z-20 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold pointer-events-none translate-x-1/2">
        BEFORE
      </div>

      {/* After Image (Bottom Layer) */}
      <div className="absolute inset-0">
        <Image
          src={images[afterImage].src}
          alt={images[afterImage].alt}
          fill
          className="object-cover select-none"
          priority={false}
        />
      </div>

      {/* Before Image (Top Layer - Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden select-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={images[beforeImage].src}
          alt={images[beforeImage].alt}
          fill
          className="object-cover w-[100vw] max-w-none h-auto" // Ensure image covers properly when clipped
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }} // Sync width to container
          priority={false}
        />
      </div>

      {/* Slider Handle */}
      <div 
        className={`absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-30 flex items-center justify-center ${isDragging ? 'bg-secondary' : ''}`}
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
           <MoveHorizontal className="w-4 h-4" />
        </div>
      </div>

      {/* Overlay hint */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <p className="text-white font-bold text-lg tracking-wider drop-shadow-md">DRAG TO COMPARE</p>
      </div>
    </div>
  );
}
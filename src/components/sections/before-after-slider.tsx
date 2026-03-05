"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { images } from "@/config/images";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-card select-none group cursor-ew-resize" ref={containerRef} onMouseMove={handleSliderMove} onTouchMove={(e) => {
        const touch = e.touches[0];
        if(containerRef.current){
           const rect = containerRef.current.getBoundingClientRect();
           const x = touch.clientX - rect.left;
           setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
        }
    }}>
      {/* Before Image (Base) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={images["gallery-3"].src}
          alt="Before: Room needing renovation"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1320px"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-sm font-bold backdrop-blur-sm">
          BEFORE
        </div>
      </div>

      {/* After Image (Overlay with Clip) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden bg-gray-200"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={images["gallery-1"].src}
          alt="After: Beautifully painted room"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1320px"
          style={{ width: `${10000 / sliderPosition}%` }} // Prevent image distortion
        />
        <div className="absolute bottom-4 right-4 bg-secondary/90 text-white px-3 py-1 rounded-md text-sm font-bold backdrop-blur-sm">
          AFTER
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-180">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
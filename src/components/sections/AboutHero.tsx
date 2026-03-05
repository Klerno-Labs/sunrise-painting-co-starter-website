import React from "react";
import Image from "next/image";
import { images } from "@/config/images";

const AboutHero = () => {
  return (
    <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <Image
        src={images.about.src}
        alt={images.about.alt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">More Than Just Painters</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Building trust through quality workmanship since 2012.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
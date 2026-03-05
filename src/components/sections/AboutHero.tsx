import Image from "next/image";
import { images } from "@/config/images";

export function AboutHero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      <Image
        src={images["about"].src}
        alt="About Sunrise Painting"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
          More Than Just Painters
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Building trust in Houston, one coat at a time.
        </p>
      </div>
    </section>
  );
}
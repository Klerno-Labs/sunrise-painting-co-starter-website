import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Home",
  description: "Premium residential and commercial painting services in Houston, TX. Interior, exterior, cabinet refinishing, and more.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
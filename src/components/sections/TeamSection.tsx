import React from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Carlos R.", role: "Master Painter", exp: "15 Years Exp" },
  { name: "Sarah M.", role: "Color Specialist", exp: "10 Years Exp" },
  { name: "David L.", role: "Project Manager", exp: "12 Years Exp" },
];

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet the Pros</h2>
          <p className="text-text-body text-lg">
            Our team consists of vetted, background-checked professionals who take pride in their work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {/* Using generic person images from unsplash based on seed logic or placeholder */}
                <Image
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face`}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-primary">{member.name}</h3>
              <p className="text-secondary font-semibold text-sm">{member.role}</p>
              <p className="text-text-muted text-xs mt-1">{member.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
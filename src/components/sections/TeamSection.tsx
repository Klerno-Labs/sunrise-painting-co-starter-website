"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionContainer } from "../layout/SectionContainer";

const team = [
  { name: "Carlos R.", role: "Master Painter", exp: "15 Years" },
  { name: "Sarah M.", role: "Color Specialist", exp: "8 Years" },
  { name: "Mike T.", role: "Project Manager", exp: "12 Years" },
];

export function TeamSection() {
  return (
    <SectionContainer className="bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Meet the Pros
        </h2>
        <p className="text-lg text-text-body">
          Our team is background-checked, uniformed, and dedicated to excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-card text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-secondary/20">
               {/* Placeholder avatar using generic seed, but distinct */}
               <Image 
                 src={`https://images.unsplash.com/photo-${1507003211169-0a1dd7228f2d}?w=200&h=200&fit=crop`} 
                 alt={member.name}
                 fill
                 className="object-cover"
               />
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
            <p className="text-secondary font-semibold mb-2">{member.role}</p>
            <p className="text-sm text-text-muted">{member.exp} Experience</p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
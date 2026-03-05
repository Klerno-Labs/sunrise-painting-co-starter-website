import { ShieldCheck, Award, Users, Wrench } from "lucide-react";

const BADGES = [
  { icon: <ShieldCheck size={32} />, title: "Licensed & Insured", desc: "Full coverage protection" },
  { icon: <Award size={32} />, title: "BBB A+ Rated", desc: "Trusted business partner" },
  { icon: <Users size={32} />, title: "Family Owned", desc: "Personal touch since 2012" },
  { icon: <Wrench size={32} />, title: "Master Painters", desc: "Certified professionals" },
];

export default function TrustBar() {
  return (
    <section className="bg-primary py-12 border-b border-gray-200">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {BADGES.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="text-secondary mb-3 group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <h4 className="text-white font-bold text-lg mb-1">{badge.title}</h4>
              <p className="text-gray-400 text-sm">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
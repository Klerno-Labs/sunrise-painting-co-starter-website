import React from "react";
import { Award, ShieldCheck, Users, Zap } from "lucide-react";

const TrustBar = () => {
  return (
    <div className="bg-primary py-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors">
            <Award className="w-8 h-8 mb-2 text-secondary" />
            <span className="text-sm font-semibold">A+ BBB Rating</span>
          </div>
          <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors">
            <ShieldCheck className="w-8 h-8 mb-2 text-secondary" />
            <span className="text-sm font-semibold">Licensed & Insured</span>
          </div>
          <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors">
            <Users className="w-8 h-8 mb-2 text-secondary" />
            <span className="text-sm font-semibold">Family Owned</span>
          </div>
          <div className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors">
            <Zap className="w-8 h-8 mb-2 text-secondary" />
            <span className="text-sm font-semibold">Fast Turnaround</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
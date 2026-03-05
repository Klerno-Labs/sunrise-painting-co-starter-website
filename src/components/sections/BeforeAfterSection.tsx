"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "../layout/SectionContainer";
import { BeforeAfterSlider } from "../interactive/BeforeAfterSlider";

export function BeforeAfterSection() {
  return (
    <SectionContainer className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            See the Difference
          </h2>
          <p className="text-lg text-text-body mb-8 leading-relaxed">
            We take pride in our preparation and execution. Drag the slider to see how we transform spaces. 
            From dull and dated to bright and modern, Sunrise Painting delivers results that speak for themselves.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Thorough surface preparation",
              "Premium quality paints",
              "Clean and tidy job sites",
              "Detailed final inspection"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-text-body font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <a href="/contact" className="text-primary font-bold hover:text-secondary transition-colors flex items-center gap-2">
            Get a similar result for your home &rarr;
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <BeforeAfterSlider 
            beforeImage="ba-before-1"
            afterImage="ba-after-1"
            alt="Kitchen Cabinet Transformation"
          />
        </motion.div>
      </div>
    </SectionContainer>
  );
}
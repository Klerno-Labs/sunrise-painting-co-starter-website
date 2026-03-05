"use client";

import React from "react";
import { AccordionItem } from "../interactive/AccordionItem";
import { SectionContainer } from "../layout/SectionContainer";

const faqs = [
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Sunrise Painting Co. is fully licensed and insured for both residential and commercial work in the state of Texas. We prioritize safety and compliance on every job site.",
  },
  {
    question: "Do you provide free estimates?",
    answer: "Absolutely! We provide free, no-obligation estimates for all projects. You can use our online form or give us a call to schedule a convenient time for us to visit your property.",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve the Greater Houston area, including Houston, Katy, Sugar Land, and The Woodlands.",
  },
  {
    question: "How long will the project take?",
    answer: "Timeline varies based on the scope of work. A typical interior room takes 1-2 days, while exterior homes can take 3-7 days depending on size and weather conditions. We provide a detailed schedule in your proposal.",
  },
];

export function FAQSection() {
  return (
    <SectionContainer className="bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-body">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionItem
      title={question}
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p>{answer}</p>
    </AccordionItem>
  );
}
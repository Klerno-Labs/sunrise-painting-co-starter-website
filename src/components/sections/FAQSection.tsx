import React from "react";
import AccordionItem from "@/components/interactive/AccordionItem";

const faqs = [
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured in the state of Texas. We also carry workers' compensation insurance to protect our clients and our team."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Absolutely! We provide free, detailed written estimates for all projects. You can fill out our form online or call us to schedule an on-site consultation."
  },
  {
    question: "What paint brands do you use?",
    answer: "We primarily use Sherwin-Williams and Benjamin Moore products because of their durability and color retention. However, we can use any specific brand you request."
  },
  {
    question: "How long will the project take?",
    answer: "Timeline varies based on the size of the project. A typical interior room takes 1-2 days, while a full exterior home can take 3-7 days depending on weather and prep work needed."
  },
  {
    question: "Do you move furniture?",
    answer: "Yes, we move lightweight furniture and cover all floors and remaining furniture with protective drop cloths. We ask that you remove small valuables and electronics beforehand."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
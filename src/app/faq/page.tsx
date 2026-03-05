import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ | Sunrise Painting Co.",
  description: "Frequently asked questions about our painting services.",
};

const FAQS = [
  {
    q: "How do I schedule an estimate?",
    a: "You can call us directly at (713) 555-8291 or fill out our online form. We typically schedule free estimates within 2-3 business days."
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, we are fully licensed and insured for both residential and commercial work in the state of Texas."
  },
  {
    q: "What brand of paint do you use?",
    a: "We use top-tier brands like Sherwin Williams and Benjamin Moore. We can also use specific brands upon request if provided by the customer."
  },
  {
    q: "Do you move furniture?",
    a: "We move what we can safely move. For large items, we center them in the room and cover them completely with plastic sheeting to protect against dust and splatter."
  },
  {
    q: "How long will the project take?",
    a: "Timeline varies based on the size of the project. A typical interior room takes 1-2 days, while a full exterior home may take 3-7 days depending on weather and prep work required."
  },
  {
    q: "What is your payment schedule?",
    a: "For projects under $2,000, payment is due upon completion. For larger projects, we require a 30% deposit to start, 30% at the halfway point, and the remaining 40% upon completion and approval."
  }
];

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about working with Sunrise Painting Co.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-lg border border-gray-200 open:shadow-md transition-shadow">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-bold text-lg text-primary group-hover:text-secondary transition-colors">{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="/contact" className="text-accent font-bold hover:underline">
            Contact us directly
          </a>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, CheckCircle2, Loader2, Phone, Mail, User, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  zip: string;
  service: string;
}

const STEPS = [
  { id: 1, title: "Service", icon: <User size={20} /> },
  { id: 2, title: "Location", icon: <MapPin size={20} /> },
  { id: 3, title: "Details", icon: <Phone size={20} /> },
];

const SERVICES = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Refinishing",
  "Drywall Repair",
  "Commercial Painting",
  "Other"
];

export default function SmartEstimateForm({ variant = "card" }: { variant?: "hero" | "card" }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    zip: "",
    service: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-card text-center h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
        <p className="text-gray-600">
          We&apos;ll review your project details and contact you at <span className="font-semibold">{formData.phone || formData.email}</span> shortly.
        </p>
      </div>
    );
  }

  return (
    <div className={variant === "hero" ? "bg-white p-6 md:p-8 rounded-xl shadow-card border border-gray-100" : "bg-white p-6 rounded-xl shadow-card border border-gray-100 h-full"}>
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-10" />
        {STEPS.map((s) => (
          <div key={s.id} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${step >= s.id ? "bg-primary text-white" : "bg-white border-2 border-gray-200 text-gray-400"}`}>
              {s.icon}
            </div>
            <span className={`text-xs font-semibold mt-2 hidden sm:block ${step >= s.id ? "text-primary" : "text-gray-400"}`}>
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="animate-fade-up">
            <h3 className="text-xl font-bold text-primary mb-4">What do you need painted?</h3>
            <div className="grid grid-cols-2 gap-3">
              {SERVICES.map((service) => (
                <label key={service} className={`cursor-pointer border-2 rounded-lg p-3 text-sm font-medium transition-all text-center ${formData.service === service ? "border-secondary bg-secondary/5 text-secondary" : "border-gray-200 hover:border-gray-300 text-gray-600"}`}>
                  <input type="radio" name="service" value={service} checked={formData.service === service} onChange={handleChange} className="hidden" />
                  {service}
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Zip Code */}
        {step === 2 && (
          <div className="animate-fade-up">
            <h3 className="text-xl font-bold text-primary mb-4">Where is the project located?</h3>
            <Input 
              name="zip" 
              value={formData.zip} 
              onChange={handleChange} 
              placeholder="Enter Zip Code (e.g. 77098)" 
              required
              pattern="[0-9]{5}"
              className="text-center text-lg font-bold"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">We serve Houston, Katy, Sugar Land & The Woodlands.</p>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <div className="animate-fade-up space-y-4">
            <h3 className="text-xl font-bold text-primary mb-4">How should we contact you?</h3>
            <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
            <div className="grid grid-cols-2 gap-4">
              <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
              <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
            </div>
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="pt-4 flex gap-3">
          {step > 1 && (
            <button type="button" onClick={() => setStep(step - 1)} className="px-4 py-2 text-gray-500 hover:text-gray-800 font-medium transition-colors">
              Back
            </button>
          )}
          <Button type="submit" className="flex-1 group">
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" size={18} />
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                {step === 3 ? "Get My Free Estimate" : "Next Step"}
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
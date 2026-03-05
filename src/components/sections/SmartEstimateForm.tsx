"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Check, Loader2 } from "lucide-react";

interface SmartEstimateFormProps {
  variant?: "wizard" | "full";
  className?: string;
}

export default function SmartEstimateForm({ variant = "wizard", className }: SmartEstimateFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form State
  const [formData, setFormData] = useState({
    service: "",
    zipCode: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    _gotcha: "", // Honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1 && !formData.service) newErrors.service = "Please select a service";
    if (step === 2 && !formData.zipCode) newErrors.zipCode = "Please enter your zip code";
    if (step === 3) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected

    if (!validateStep()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-card text-center h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
        <p className="text-text-body">We'll be in touch within 24 hours to discuss your project.</p>
      </div>
    );
  }

  if (variant === "wizard") {
    return (
      <div className={cn("bg-white p-6 md:p-8 rounded-xl shadow-card w-full", className)}>
        <div className="mb-6">
          <div className="flex justify-between items-center text-sm font-semibold text-text-muted mb-2">
            <span>Step {step} of 3</span>
            <span>{step === 1 ? "Service" : step === 2 ? "Location" : "Details"}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-secondary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
          <input type="text" name="_gotcha" value={formData._gotcha} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <label className="block text-sm font-semibold text-primary mb-2">What do you need painted?</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full p-3 border-2 rounded-lg bg-white focus:border-secondary focus:outline-none transition-colors ${errors.service ? "border-red-500" : "border-border-light"}`}
              >
                <option value="">Select a service...</option>
                <option value="Interior">Interior Painting</option>
                <option value="Exterior">Exterior Painting</option>
                <option value="Cabinet">Cabinet Refinishing</option>
                <option value="Drywall">Drywall Repair</option>
                <option value="Other">Other</option>
              </select>
              {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <label className="block text-sm font-semibold text-primary mb-2">Where is the project located?</label>
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code (e.g., 77098)"
                value={formData.zipCode}
                onChange={handleChange}
                className={`w-full p-3 border-2 rounded-lg focus:border-secondary focus:outline-none transition-colors ${errors.zipCode ? "border-red-500" : "border-border-light"}`}
              />
              {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border-2 rounded-lg focus:border-secondary focus:outline-none transition-colors ${errors.name ? "border-red-500" : "border-border-light"}`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border-2 rounded-lg focus:border-secondary focus:outline-none transition-colors ${errors.email ? "border-red-500" : "border-border-light"}`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="(713) 555-0123"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border-2 rounded-lg focus:border-secondary focus:outline-none transition-colors ${errors.phone ? "border-red-500" : "border-border-light"}`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>
          )}

          <div className="mt-8 flex gap-4">
            {step > 1 && (
              <Button type="button" variant="secondary" className="flex-1" onClick={prevStep}>
                Back
              </Button>
            )}
            <Button type={step === 3 ? "submit" : "button"} variant={step === 3 ? "cta" : "primary"} className="flex-1" onClick={step < 3 ? nextStep : undefined} disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {step === 3 ? "Get My Free Quote" : "Next"}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  // Full Form Variant (Contact Page)
  return (
    <form onSubmit={handleSubmit} className={cn("bg-white p-6 md:p-8 rounded-xl shadow-card space-y-6", className)}>
       <input type="text" name="_gotcha" value={formData._gotcha} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
      
      <h3 className="text-2xl font-bold text-primary mb-4">Send Us a Message</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
           <label htmlFor="full-name" className="block text-sm font-semibold text-primary mb-1">Full Name</label>
           <input id="full-name" type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border-2 border-border-light rounded-lg focus:border-secondary focus:outline-none" />
        </div>
        <div>
           <label htmlFor="contact-phone" className="block text-sm font-semibold text-primary mb-1">Phone Number</label>
           <input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border-2 border-border-light rounded-lg focus:border-secondary focus:outline-none" />
        </div>
      </div>

      <div>
         <label htmlFor="contact-email" className="block text-sm font-semibold text-primary mb-1">Email Address</label>
         <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border-2 border-border-light rounded-lg focus:border-secondary focus:outline-none" />
      </div>

      <div>
        <label htmlFor="contact-service" className="block text-sm font-semibold text-primary mb-1">Service Type</label>
        <select id="contact-service" name="service" value={formData.service} onChange={handleChange} className="w-full p-3 border-2 border-border-light rounded-lg focus:border-secondary focus:outline-none bg-white">
          <option value="">Select a service...</option>
          <option value="Interior">Interior Painting</option>
          <option value="Exterior">Exterior Painting</option>
          <option value="Cabinet">Cabinet Refinishing</option>
          <option value="Drywall">Drywall Repair</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-primary mb-1">Project Details</label>
        <textarea id="contact-message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full p-3 border-2 border-border-light rounded-lg focus:border-secondary focus:outline-none" placeholder="Tell us about your project..."></textarea>
      </div>

      <Button type="submit" variant="cta" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
        Send Message
      </Button>
    </form>
  );
}
"use client";
import React, { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { cn } from "@/lib/utils";

import { useState } from "react";
interface SmartEstimateFormProps {
  variant?: "wizard" | "full";
}

const SmartEstimateForm = ({ variant = "wizard" }: SmartEstimateFormProps) => {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form Data State
  const [formData, setFormData] = useState({
    service: &quot;",
    zip: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    _gotcha: "" // Honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected

    setIsSubmitting(true);
    try {
      const res = await fetch(&quot;/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-card text-center h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
        <p className="text-text-muted">Thank you. We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className={cn("bg-white p-6 md:p-8 rounded-xl shadow-card", variant === "full" && "w-full")}>
      <form onSubmit={handleSubmit}>
        {/* Honeypot */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" onChange={handleChange} value={formData._gotcha} />

        {variant === "wizard" ? (
          <>
            {/* Wizard Steps */}
            {step === 0 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-lg font-bold mb-4">What do you need painted?</h3>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border-2 border-border-light rounded-md px-4 py-3 focus:border-secondary focus:outline-none"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Interior">Interior Painting</option>
                  <option value="Exterior">Exterior Painting</option>
                  <option value="Cabinets">Cabinet Refinishing</option>
                  <option value="Drywall">Drywall Repair</option>
                  <option value="Other">Other</option>
                </select>
                <Button type="button" onClick={() => setStep(1)} className="w-full&quot;>Next</Button>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-lg font-bold mb-4">Where is the project located?</h3>
                <Input
                  label="Zip Code"
                  type="text"
                  name="zip"
                  required
                  pattern="[0-9]*"
                  placeholder="e.g. 77098"
                  value={formData.zip}
                  onChange={handleChange}
                />
                <div className="flex space-x-2">
                  <Button type="button" variant="secondary" onClick={() => setStep(0)} className="w-1/3&quot;>Back</Button>
                  <Button type="button" onClick={() => setStep(2)} className="w-2/3&quot;>Next</Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-lg font-bold mb-4">Final Details</h3>
                <Input label="Full Name" type="text" name="name" required value={formData.name} onChange={handleChange} />
                <Input label="Phone Number" type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                <Input label="Email Address" type="email" name="email" required value={formData.email} onChange={handleChange} />
                <div className="flex space-x-2">
                  <Button type="button" variant="secondary" onClick={() => setStep(1)} className="w-1/3&quot;>Back</Button>
                  <Button type="submit" isLoading={isSubmitting} className="w-2/3">Get Free Estimate</Button>
                </div>
              </div>
            )}
          </>
        ) : (
          // Full Form (Contact Page)
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Full Name" type="text" name="name" required value={formData.name} onChange={handleChange} />
              <Input label="Phone Number" type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
            </div>
            <Input label="Email Address" type="email" name="email" required value={formData.email} onChange={handleChange} />
            <Input label="Service Needed" type="text" name="service" required value={formData.service} onChange={handleChange} placeholder="e.g. Interior Painting" />
            <div className="relative group">
              <label className="block text-sm font-semibold text-text-heading mb-2">Project Details</label>
              <textarea
                name="message"
                rows={4}
                className="w-full border-2 border-border-light rounded-md px-4 py-3 focus:border-secondary focus:outline-none"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <Button type="submit" isLoading={isSubmitting} className="w-full">Send Message</Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SmartEstimateForm;
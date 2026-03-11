"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  zip: string;
  message: string;
  _gotcha: string;
}

interface SmartEstimateFormProps {
  variant?: "wizard" | "full";
}

export function SmartEstimateForm({ variant = "wizard" }: SmartEstimateFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (data._gotcha) return; // Honeypot check
    
    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const valid = await trigger();
    if (valid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-card text-center h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-heading font-bold text-primary mb-2">
          Request Received!
        </h3>
        <p className="text-text_body">
          Thank you for contacting Sunrise Painting Co. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-card border border-border_light">
      {variant === "wizard" && (
        <div className="mb-6">
          <div className="flex justify-between text-xs font-semibold text-text_muted mb-2">
            <span className={step >= 1 ? "text-primary" : ""}>Service</span>
            <span className={step >= 2 ? "text-primary" : ""}>Location</span>
            <span className={step >= 3 ? "text-primary" : ""}>Details</span>
          </div>
          <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary transition-all duration-300 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      <form onSubmit={variant === "full" ? handleSubmit(onSubmit) : (e) => e.preventDefault()}>
        {/* Hidden Honeypot */}
        <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="space-y-4">
          {variant === "wizard" && step === 1 && (
            <>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-text_heading">Service Type</label>
                <select
                  {...register("service", { required: "Please select a service" })}
                  className="w-full border-2 border-border_light rounded-lg px-4 py-3 text-text_body focus:border-secondary focus:ring-0"
                >
                  <option value="">Select a Service...</option>
                  <option value="Interior">Interior Painting</option>
                  <option value="Exterior">Exterior Painting</option>
                  <option value="Cabinets">Cabinet Refinishing</option>
                  <option value="Drywall">Drywall Repair</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
              </div>
              <div className="pt-4">
                <Button type="button" onClick={nextStep} className="w-full" size="lg">
                  Next Step
                </Button>
              </div>
            </>
          )}

          {variant === "wizard" && step === 2 && (
            <>
              <Input
                id="zip"
                label="Zip Code"
                placeholder="e.g. 77098"
                {...register("zip", {
                  required: "Zip code is required",
                  pattern: { value: /^\d{5}$/, message: "Invalid zip code" }
                })}
                error={errors.zip?.message}
              />
              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                  Back
                </Button>
                <Button type="button" onClick={nextStep} className="flex-1">
                  Next Step
                </Button>
              </div>
            </>
          )}

          {variant === "wizard" && step === 3 && (
            <>
              <Input
                id="name-wizard"
                label="Full Name"
                {...register("name", { required: "Name is required" })}
                error={errors.name?.message}
              />
              <Input
                id="phone-wizard"
                label="Phone Number"
                type="tel"
                {...register("phone", { required: "Phone is required" })}
                error={errors.phone?.message}
              />
              <Input
                id="email-wizard"
                label="Email Address"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                })}
                error={errors.email?.message}
              />
              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                  Back
                </Button>
                <Button 
                  type="submit" 
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting} 
                  className="flex-1"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Get My Quote"}
                </Button>
              </div>
            </>
          )}

          {variant === "full" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  id="name-full"
                  label="Full Name"
                  {...register("name", { required: "Name is required" })}
                  error={errors.name?.message}
                />
                <Input
                  id="phone-full"
                  label="Phone Number"
                  type="tel"
                  {...register("phone", { required: "Phone is required" })}
                  error={errors.phone?.message}
                />
              </div>
              <Input
                id="email-full"
                label="Email Address"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                })}
                error={errors.email?.message}
              />
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-text_heading">Service Type</label>
                <select
                  {...register("service")}
                  className="w-full border-2 border-border_light rounded-lg px-4 py-3 text-text_body focus:border-secondary focus:ring-0"
                >
                  <option value="">Select a Service...</option>
                  <option value="Interior">Interior Painting</option>
                  <option value="Exterior">Exterior Painting</option>
                  <option value="Cabinets">Cabinet Refinishing</option>
                  <option value="Drywall">Drywall Repair</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message-full" className="block text-sm font-semibold text-text_heading">
                  Project Details
                </label>
                <textarea
                  id="message-full"
                  rows={4}
                  {...register("message")}
                  className="w-full border-2 border-border_light rounded-lg px-4 py-3 text-text_body focus:border-secondary focus:ring-0"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full"
                size="lg"
              >
                {isSubmitting ? <><Loader2 className="animate-spin mr-2"/> Sending...</> : "Send Message"}
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
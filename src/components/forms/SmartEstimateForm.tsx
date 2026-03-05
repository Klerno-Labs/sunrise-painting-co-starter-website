"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().optional(),
  message: z.string().optional(),
  _gotcha: z.string().optional(), // Honeypot
});

type FormData = z.infer<typeof formSchema>;

interface SmartEstimateFormProps {
  variant?: "wizard" | "full";
  className?: string;
}

export function SmartEstimateForm({
  variant = "wizard",
  className,
}: SmartEstimateFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (data._gotcha) return; // Bot detected

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Network error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={cn("bg-white p-8 rounded-xl shadow-card text-center", className)}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
        <p className="text-text-body">
          Thank you for contacting Sunrise Painting Co. We'll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  if (variant === "wizard") {
    return (
      <div className={cn("bg-white p-6 md:p-8 rounded-xl shadow-card", className)}>
        <div className="mb-6">
          <h3 className="text-2xl font-heading font-bold text-primary mb-1">
            Get Your Free Estimate
          </h3>
          <div className="flex gap-2 mt-4">
            <div className={cn("h-1 flex-1 rounded-full", step >= 1 ? "bg-secondary" : "bg-gray-200")} />
            <div className={cn("h-1 flex-1 rounded-full", step >= 2 ? "bg-secondary" : "bg-gray-200")} />
            <div className={cn("h-1 flex-1 rounded-full", step >= 3 ? "bg-secondary" : "bg-gray-200")} />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div>
                <label className="block text-sm font-semibold mb-2">Service Type</label>
                <select
                  {...register("service")}
                  className="w-full h-12 rounded-md border-2 border-border-light bg-surface px-4 focus:border-secondary focus:outline-none"
                >
                  <option value="">Select a service...</option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="cabinets">Cabinet Refinishing</option>
                  <option value="drywall">Drywall Repair</option>
                </select>
              </div>
              <Button
                type="button"
                onClick={() => setStep(2)}
                className="w-full"
                disabled={!register("service").name}
              >
                Next Step
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Input
                id="zip"
                label="Zip Code"
                placeholder="e.g. 77098"
                {...register("message", { required: false })} // Re-using message field for wizard simplicity or add new field
              />
               <div className="flex gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1"
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Input
                id="w-name"
                label="Full Name"
                placeholder="John Doe"
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                id="w-phone"
                label="Phone Number"
                placeholder="(713) 555-0123"
                error={errors.phone?.message}
                {...register("phone")}
              />
              <Input
                id="w-email"
                label="Email Address"
                placeholder="john@example.com"
                error={errors.email?.message}
                {...register("email")}
              />
              <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setStep(2)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button type="submit" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Get Quote"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }

  // Full Form Variant
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("bg-white p-6 md:p-8 rounded-xl shadow-card space-y-4", className)}
    >
      <h3 className="text-2xl font-heading font-bold text-primary mb-4">
        Send Us a Message
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          id="f-name"
          label="Full Name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="f-phone"
          label="Phone Number"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>
      <Input
        id="f-email"
        label="Email Address"
        error={errors.email?.message}
        {...register("email")}
      />
      <div>
        <label className="block text-sm font-semibold text-text-heading mb-2">Service Needed</label>
        <select
          {...register("service")}
          className="w-full h-12 rounded-md border-2 border-border-light bg-surface px-4 focus:border-secondary focus:outline-none"
        >
          <option value="interior">Interior Painting</option>
          <option value="exterior">Exterior Painting</option>
          <option value="cabinets">Cabinet Refinishing</option>
          <option value="drywall">Drywall Repair</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="f-message" className="block text-sm font-semibold text-text-heading mb-2">
          Project Details
        </label>
        <textarea
          id="f-message"
          rows={4}
          {...register("message")}
          className="w-full rounded-md border-2 border-border-light bg-surface px-4 py-3 focus:border-secondary focus:outline-none transition-colors"
          placeholder="Tell us about your project..."
        />
      </div>

      <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
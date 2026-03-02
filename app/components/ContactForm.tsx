"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  page?: string;
  defaultService?: string;
}

export default function ContactForm({ page = "Contact Page", defaultService }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: defaultService || "",
    message: "",
  });

  const serviceOptions = [
    { value: "", label: "Select a service..." },
    { value: "fire-alarm", label: "Fire Alarm Design & Installation" },
    { value: "monitoring", label: "24/7 Monitoring" },
    { value: "inspections", label: "Inspections & Maintenance" },
    { value: "emergency", label: "Emergency Repairs" },
    { value: "upgrades", label: "System Upgrades" },
    { value: "general", label: "General Inquiry" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, page }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          message: "",
        });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-lg border border-[#E2E8F0] p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#1B365D] mb-2">Thank You!</h3>
        <p className="text-[#64748B] mb-6">
          Your message has been received. A team member will contact you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-[#E2E8F0] p-6 md:p-8">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#2C3E50] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              placeholder="(925) 555-0123"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-[#2C3E50] mb-2">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              placeholder="Acme Construction"
            />
          </div>
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-[#2C3E50] mb-2">
            Service Interest
          </label>
          <select
            id="serviceType"
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-white"
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#2C3E50] mb-2">
            How can we help? *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent resize-none"
            placeholder="Tell us about your project or needs..."
          />
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold py-3 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
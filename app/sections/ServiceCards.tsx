"use client";

import Link from "next/link";
import { ArrowRight, HardHat, Radio, ClipboardCheck, Wrench } from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Design & Installation",
    description: "Design-build fire alarm systems tailored to your building's unique requirements. From new construction to complex retrofits.",
    href: "/services/design-installation",
    features: ["Design-Build Delivery", "NICET IV Engineering", "Multi-Manufacturer Solutions"],
  },
  {
    icon: Radio,
    title: "Monitoring & Service",
    description: "24/7 UL-listed central station monitoring with rapid emergency response and specialized account protocols.",
    href: "/services/monitoring",
    features: ["UL-Listed Central Station", "24/7 Emergency Response", "Remote Diagnostics"],
  },
  {
    icon: ClipboardCheck,
    title: "Inspections & Maintenance",
    description: "NFPA 72 compliant quarterly and annual inspection programs with detailed documentation and certification.",
    href: "/services/inspections",
    features: ["NFPA 72 Compliance", "Self-Testing Systems", "Digital Reports"],
  },
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description: "Rapid response emergency service available 24/7. Local technicians, fully stocked service trucks.",
    href: "/services/emergency",
    features: ["24/7 Availability", "Local Technicians", "Rapid Response"],
  },
];

export default function ServiceCards() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
            Comprehensive Fire Safety Solutions
          </h2>
          <p className="text-lg text-[#64748B]">
            From initial design through ongoing maintenance, we're your single partner 
            for complete fire alarm and life safety systems.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E2E8F0] hover:border-[#FF6B35]/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-[#1B365D]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF6B35]/10 transition-colors">
                <service.icon className="h-7 w-7 text-[#1B365D] group-hover:text-[#FF6B35] transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1B365D] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#64748B] text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-[#2C3E50]">
                    <svg className="w-4 h-4 mr-2 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={service.href}
                className="inline-flex items-center text-[#1B365D] font-semibold text-sm hover:text-[#FF6B35] transition-colors group/link"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-[#1B365D] font-semibold hover:text-[#FF6B35] transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

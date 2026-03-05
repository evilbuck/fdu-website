"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, CheckCircle, Award, FileCheck, Building2 } from "lucide-react";

export default function CertificationsPage() {
  const certifications = [
    {
      icon: Shield,
      title: "C-10 License",
      description: "California Fire Protection Contractor License",
      details: "State-licensed contractor authorized to install, repair, and maintain fire protection systems.",
    },
    {
      icon: Award,
      title: "NICET Level IV",
      description: "Fire Alarm Technology Certification",
      details: "The highest level of certification in fire alarm systems, demonstrating advanced technical expertise.",
    },
    {
      icon: CheckCircle,
      title: "UL Listed",
      description: "Central Station Monitoring",
      details: "Our monitoring facility meets UL standards for fire alarm monitoring services.",
    },
    {
      icon: Building2,
      title: "DVBE Certified",
      description: "Disabled Veteran Business Enterprise",
      details: "Certified as a disabled veteran-owned business for government and corporate contracts.",
    },
    {
      icon: FileCheck,
      title: "Autocall Elite Partner",
      description: "Manufacturer Certification",
      details: "Authorized dealer and installer for Autocall fire alarm systems.",
    },
    {
      icon: Shield,
      title: "NFPA Member",
      description: "National Fire Protection Association",
      details: "Active member staying current with all fire safety codes and standards.",
    },
  ];

  return (
    <>
      <section className="relative bg-[#1B365D] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 md:py-24 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Certifications & Credentials
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Our{" "}
                <span className="text-[#FF6B35]">Certifications</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                We maintain the highest certifications and credentials to ensure 
                your fire safety project is in expert hands.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                  asChild
                >
                  <Link href="/contact/quote">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#1B365D] font-semibold text-base px-8 py-6"
                  asChild
                >
                  <a href="tel:+19256764444" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    (925) 676-4444
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Our Credentials
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              We&apos;re proud to maintain the industry&apos;s highest certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.title} className="p-6 border-2 border-[#E2E8F0] rounded-lg hover:border-[#FF6B35] transition-colors">
                <cert.icon className="h-10 w-10 text-[#FF6B35] mb-4" />
                <h3 className="text-lg font-bold text-[#1B365D] mb-1">{cert.title}</h3>
                <p className="text-[#FF6B35] font-medium text-sm mb-3">{cert.description}</p>
                <p className="text-sm text-[#64748B]">{cert.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-6">
              Why Certifications Matter
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              When you work with Fire Detection Unlimited, you&apos;re working with certified professionals 
              who understand the complexity of fire safety systems. Our certifications demonstrate our 
              commitment to excellence and ensure we meet—and exceed—industry standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#FF6B35] mr-3 mt-0.5" />
                <span className="text-[#1B365D]">Code-compliant installations</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#FF6B35] mr-3 mt-0.5" />
                <span className="text-[#1B365D]">First-time inspection success</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#FF6B35] mr-3 mt-0.5" />
                <span className="text-[#1B365D]">Professional expertise</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#FF6B35] mr-3 mt-0.5" />
                <span className="text-[#1B365D]">Peace of mind</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Work With Certified Experts
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your fire safety needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-[#FF6B35] font-semibold text-base px-8 py-6 group"
                asChild
              >
                <Link href="/contact/quote">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#FF6B35] font-semibold text-base px-8 py-6"
                asChild
              >
                <a href="tel:+19256764444" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (925) 676-4444
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
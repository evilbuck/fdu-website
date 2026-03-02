"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, CheckCircle, FileCheck, HardHat, Users, Building2 } from "lucide-react";

export default function DesignInstallationPage() {
  const benefits = [
    {
      title: "Single Point of Accountability",
      description: "One partner handles design, installation, and commissioning—eliminating coordination headaches.",
    },
    {
      title: "Faster Permits",
      description: "Deep relationships with Bay Area AHJs mean quicker permit approvals and fewer delays.",
    },
    {
      title: "First-Time Inspection Success",
      description: "Our pre-inspection protocols ensure your project passes on the first attempt.",
    },
    {
      title: "Value Engineering",
      description: "Optimize your design for cost without compromising safety or code compliance.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Design",
      description: "We review your architectural plans, identify fire alarm requirements, and create detailed drawings.",
    },
    {
      step: "02",
      title: "Engineering & Calculations",
      description: "Our NICET Level IV engineers perform voltage drop calculations and ensure code compliance.",
    },
    {
      step: "03",
      title: "Permit Submission",
      description: "We handle all permit paperwork and coordinate with local authorities having jurisdiction (AHJs).",
    },
    {
      step: "04",
      title: "Installation",
      description: "Our certified technicians install all equipment with minimal disruption to your operations.",
    },
    {
      step: "05",
      title: "Testing & Commissioning",
      description: "Thorough testing ensures all systems function correctly before final inspection.",
    },
    {
      step: "06",
      title: "Final Inspection",
      description: "We coordinate and accompany the AHJ through final inspection for smooth approval.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
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
                <HardHat className="w-4 h-4 mr-2" />
                Design & Installation
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Expert Fire Alarm{" "}
                <span className="text-[#FF6B35]">Design-Build</span> Services
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Complete fire alarm systems from concept to final inspection. 
                Design, installation, and commissioning—all under one roof.
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
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1B365D] font-semibold text-base px-8 py-6"
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

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Why Design-Build?
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              The design-build approach eliminates the delays and coordination headaches of traditional methods
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start p-6 bg-[#ECF0F1] rounded-lg">
                <CheckCircle className="h-6 w-6 text-[#FF6B35] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#1B365D] mb-2">{benefit.title}</h3>
                  <p className="text-[#64748B]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Our Process
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              A proven six-step approach that delivers results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step) => (
              <div key={step.step} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#FF6B35] mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-[#1B365D] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-[#1B365D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-[#FF6B35]" />
              <span>C-10 Licensed</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-[#FF6B35]" />
              <span>NICET Level IV</span>
            </div>
            <div className="flex items-center">
              <FileCheck className="h-5 w-5 mr-2 text-[#FF6B35]" />
              <span>UL Listed</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-[#FF6B35]" />
              <span>Local Bay Area Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote within 24 hours.
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
                className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] font-semibold text-base px-8 py-6"
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
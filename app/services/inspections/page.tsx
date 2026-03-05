"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle, ClipboardCheck, Calendar } from "lucide-react";

export default function InspectionsPage() {
  const inspectionTypes = [
    {
      title: "Annual Inspection",
      description: "Required yearly inspection per NFPA 25. Complete system testing and documentation.",
    },
    {
      title: "Quarterly Inspection",
      description: "Visual inspection and basic testing of control equipment and initiating devices.",
    },
    {
      title: "5-Year Inspection",
      description: "Comprehensive inspection including pipe inspection, gauge testing, and flow tests.",
    },
    {
      title: "Acceptance Testing",
      description: "Complete testing of new or modified systems to verify proper operation.",
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
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Inspections & Maintenance
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                NFPA-Compliant{" "}
                <span className="text-[#FF6B35]">Inspections</span> & Maintenance
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Keep your fire alarm systems in top condition with our comprehensive inspection 
                and maintenance programs. Stay code-compliant and protected.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                  asChild
                >
                  <Link href="/contact/quote">
                    Schedule Inspection
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
              Inspection Types
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              We provide all inspection types required by NFPA and local codes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {inspectionTypes.map((type) => (
              <div key={type.title} className="p-6 border-2 border-[#E2E8F0] rounded-lg hover:border-[#FF6B35] transition-colors">
                <Calendar className="h-8 w-8 text-[#FF6B35] mb-4" />
                <h3 className="text-lg font-bold text-[#1B365D] mb-2">{type.title}</h3>
                <p className="text-[#64748B]">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-6">
              Stay Compliant, Stay Protected
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              Regular inspections ensure your system works when you need it most. 
              Our detailed reporting keeps you compliant and documents proper maintenance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[#1B365D]">
              <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#FF6B35]" /> NFPA 25 Compliant</span>
              <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#FF6B35]" /> Detailed Reports</span>
              <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#FF6B35]" /> Certified Technicians</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Schedule Your Inspection
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us to schedule your inspection or learn about our maintenance programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-[#FF6B35] font-semibold text-base px-8 py-6 group"
                asChild
              >
                <Link href="/contact/quote">
                  Schedule Now
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
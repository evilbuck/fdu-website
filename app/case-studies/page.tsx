"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Building2 } from "lucide-react";

export default function CaseStudiesPage() {
  const projects = [
    {
      client: "Regional Shopping Center",
      location: "Walnut Creek, CA",
      type: "New Construction",
      size: "450,000 sq ft",
      services: ["Design-Build", "Installation", "Monitoring"],
      challenge: "Complex retail complex requiring coordination with multiple tenants and tight construction timeline.",
      solution: "Design-build approach allowed for parallel permitting and installation, saving 6 weeks on schedule.",
    },
    {
      client: "Medical Office Building",
      location: "Concord, CA",
      type: "Retrofit",
      size: "120,000 sq ft",
      services: ["System Upgrade", "Inspection"],
      challenge: "Upgrade aging fire alarm system while maintaining operations in occupied building.",
      solution: "Phased upgrade approach minimized disruption and ensured continuous protection.",
    },
    {
      client: "Industrial Warehouse",
      location: "Oakland, CA",
      type: "New Construction",
      size: "280,000 sq ft",
      services: ["Design-Build", "Installation", "Monitoring"],
      challenge: "Large warehouse with high-bay storage requiring specialized detection.",
      solution: "Early engagement allowed for optimal detector placement and system design.",
    },
    {
      client: "Office Tower",
      location: "San Francisco, CA",
      type: "Tenant Improvement",
      size: "85,000 sq ft",
      services: ["Design", "Installation"],
      challenge: "Multi-floor tenant build-out with complex coordination requirements.",
      solution: "Coordinated with general contractor to meet aggressive timeline.",
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Case{" "}
                <span className="text-[#FF6B35]">Studies</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                See how we&apos;ve helped Bay Area businesses with their fire safety needs. 
                Each project showcases our commitment to quality and customer satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                  asChild
                >
                  <Link href="/contact/quote">
                    Start Your Project
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

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              A sample of our work across the Bay Area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div key={project.client} className="bg-[#ECF0F1] rounded-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1B365D] mb-1">{project.client}</h3>
                    <p className="text-[#64748B] text-sm">{project.location}</p>
                  </div>
                  <Building2 className="h-8 w-8 text-[#FF6B35]" />
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-[#1B365D]">{project.type}</div>
                    <div className="text-xs text-[#64748B]">Project Type</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#1B365D]">{project.size}</div>
                    <div className="text-xs text-[#64748B]">Size</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#1B365D]">{project.services.length}</div>
                    <div className="text-xs text-[#64748B]">Services</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-[#64748B]">
                    <strong>Challenge:</strong> {project.challenge}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-[#64748B]">
                    <strong>Solution:</strong> {project.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-[#64748B]">Project details available upon request</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              Contact us today for a free consultation and quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="border-2 border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white font-semibold text-base px-8 py-6"
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
      </section>
    </>
  );
}
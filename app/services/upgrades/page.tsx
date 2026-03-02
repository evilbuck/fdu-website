"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, CheckCircle, BarChart3, RefreshCw, ArrowUpCircle } from "lucide-react";

export default function UpgradesPage() {
  const upgradeOptions = [
    {
      title: "System Modernization",
      description: "Replace aging systems with current technology for improved reliability.",
    },
    {
      title: "Addressable Systems",
      description: "Upgrade from conventional to addressable systems for precise location identification.",
    },
    {
      title: "Notification Upgrades",
      description: "Install strobes and speakers that meet current ADA requirements.",
    },
    {
      title: "Monitoring Integration",
      description: "Add or upgrade central station monitoring for faster response.",
    },
    {
      title: "Smart Building Integration",
      description: "Connect fire alarm to building management systems for integrated control.",
    },
    {
      title: "Code Compliance",
      description: "Update systems to meet new code requirements and avoid violations.",
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
                <ArrowUpCircle className="w-4 h-4 mr-2" />
                System Upgrades
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Fire Alarm System{" "}
                <span className="text-[#FF6B35]">Upgrades</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Modernize aging fire alarm systems with current technology. 
                Improve reliability, meet code requirements, and protect your investment.
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

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Upgrade Options
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              We offer comprehensive upgrade solutions to meet your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upgradeOptions.map((option) => (
              <div key={option.title} className="p-6 border-2 border-[#E2E8F0] rounded-lg hover:border-[#FF6B35] transition-colors">
                <RefreshCw className="h-8 w-8 text-[#FF6B35] mb-4" />
                <h3 className="text-lg font-bold text-[#1B365D] mb-2">{option.title}</h3>
                <p className="text-sm text-[#64748B]">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-6">
              Why Upgrade?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <BarChart3 className="h-8 w-8 text-[#FF6B35] mx-auto mb-3" />
                <h3 className="font-bold text-[#1B365D] mb-2">Reliability</h3>
                <p className="text-sm text-[#64748B]">Newer systems are more reliable and have better diagnostics</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <CheckCircle className="h-8 w-8 text-[#FF6B35] mx-auto mb-3" />
                <h3 className="font-bold text-[#1B365D] mb-2">Compliance</h3>
                <p className="text-sm text-[#64748B]">Meet current code requirements and avoid violations</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <RefreshCw className="h-8 w-8 text-[#FF6B35] mx-auto mb-3" />
                <h3 className="font-bold text-[#1B365D] mb-2">Features</h3>
                <p className="text-sm text-[#64748B]">Take advantage of modern features like smart integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Upgrade?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your system upgrade.
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
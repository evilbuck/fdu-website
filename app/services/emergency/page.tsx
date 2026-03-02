"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, CheckCircle, Zap, Wrench, AlertTriangle } from "lucide-react";

export default function EmergencyPage() {
  const services = [
    "System troubleshooting and diagnostics",
    "Smoke detector replacement",
    "Control panel repairs",
    "Pull station repairs",
    "Notification appliance repairs",
    "Wiring issues and connections",
    "Emergency board replacements",
    "24/7 emergency service",
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
                <AlertTriangle className="w-4 h-4 mr-2" />
                24/7 Emergency Service
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Emergency{" "}
                <span className="text-[#FF6B35]">Fire Alarm Repairs</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                When your fire alarm system fails, you need fast, reliable service. 
                Our 24/7 emergency team responds quickly to minimize your risk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                  asChild
                >
                  <a href="tel:+19256764444">
                    <Zap className="mr-2 h-5 w-5" />
                    Call Now: (925) 676-4444
                  </a>
                </Button>
              </div>
              
              <p className="mt-4 text-white/80 text-sm">
                Available 24/7 for emergency repairs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Emergency Repair Services
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              We service all major fire alarm brands and handle all types of emergencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service) => (
              <div key={service} className="flex items-center p-4 bg-[#ECF0F1] rounded-lg">
                <CheckCircle className="h-5 w-5 text-[#FF6B35] mr-3 flex-shrink-0" />
                <span className="text-[#1B365D]">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Emergency Service?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Call our 24/7 emergency hotline for immediate assistance.
            </p>
            
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-[#FF6B35] font-semibold text-base px-8 py-6"
              asChild
            >
              <a href="tel:+19256764444" className="flex items-center justify-center">
                <Zap className="mr-2 h-5 w-5" />
                (925) 676-4444
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, CheckCircle, Bell, Wifi, AlertTriangle } from "lucide-react";

export default function MonitoringPage() {
  const features = [
    {
      title: "24/7/365 Monitoring",
      description: "Round-the-clock protection with our UL-listed central station.",
      icon: Clock,
    },
    {
      title: "Rapid Response",
      description: "Immediate notification to fire department when alarms trigger.",
      icon: AlertTriangle,
    },
    {
      title: "Digital Cellular",
      description: "Dual-path communication ensures signals get through even if phone lines are down.",
      icon: Wifi,
    },
    {
      title: "Code Compliance",
      description: "Meets all NFPA 72 requirements for central station monitoring.",
      icon: Shield,
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
                <Bell className="w-4 h-4 mr-2" />
                24/7 Monitoring
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Continuous Fire Alarm{" "}
                <span className="text-[#FF6B35]">Monitoring</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Protect your property around the clock with UL-listed central station monitoring. 
                When seconds count, we're watching.
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
              Why Professional Monitoring?
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              A monitored fire alarm system dramatically reduces property damage and saves lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start p-6 bg-[#ECF0F1] rounded-lg">
                <feature.icon className="h-6 w-6 text-[#FF6B35] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#1B365D] mb-2">{feature.title}</h3>
                  <p className="text-[#64748B]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#1B365D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trust the Professionals
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our UL-listed central station meets the highest standards for fire alarm monitoring. 
              When your alarm triggers, we act fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#FF6B35]" /> UL Listed</span>
              <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#FF6B35]" /> NFPA 72 Compliant</span>
              <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-[#FF6B35]" /> Dual-Path Communication</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Protect What Matters Most
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation for our monitoring services.
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
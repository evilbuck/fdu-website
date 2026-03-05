"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, CheckCircle, Zap, AlertTriangle, BarChart3 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Fire Alarm Design & Installation",
      description: "Complete design-build services for new construction and retrofit projects. NICET Level IV certified engineers ensure code compliance from day one.",
      href: "/services/design-installation",
      icon: Shield,
      features: ["Design-Build", "Code Compliance", "Permit Coordination"],
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock central station monitoring with rapid response protocols. UL-listed facility ensures your property is always protected.",
      href: "/services/monitoring",
      icon: Clock,
      features: ["24/7/365 Monitoring", "Rapid Response", "UL Listed"],
    },
    {
      title: "Inspections & Maintenance",
      description: "NFPA-compliant inspection and maintenance programs. Keep your systems operational and avoid citation risks.",
      href: "/services/inspections",
      icon: CheckCircle,
      features: ["NFPA Compliant", "Certified Technicians", "Detailed Reporting"],
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency service when you need it most. Fast response times minimize downtime and protect lives.",
      href: "/services/emergency",
      icon: Zap,
      features: ["24/7 Availability", "Fast Response", "All Brands Serviced"],
    },
    {
      title: "System Upgrades",
      description: "Modernize aging fire alarm systems with current technology. Improve reliability and meet evolving code requirements.",
      href: "/services/upgrades",
      icon: BarChart3,
      features: ["Technology Upgrades", "Code Updates", "Cost Optimization"],
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Comprehensive Fire Alarm{" "}
                <span className="text-[#FF6B35]">Services</span> for Bay Area Businesses
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                From design to maintenance, we provide complete life safety solutions. 
                One trusted partner for all your fire alarm needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                  asChild
                >
                  <Link href="/contact/quote">
                    Get a Free Quote
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

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Complete fire alarm solutions tailored to your property&apos;s unique requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white border-2 border-[#E2E8F0] rounded-lg p-6 hover:border-[#FF6B35] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#1B365D]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF6B35] transition-colors">
                  <service.icon className="h-6 w-6 text-[#1B365D] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1B365D] mb-3 group-hover:text-[#FF6B35] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[#64748B] mb-4">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-[#ECF0F1] text-[#64748B] px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] text-center mb-12">
              Why Choose Fire Detection Unlimited?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B365D] mb-2">C-10 Licensed</h3>
                    <p className="text-sm text-[#64748B]">
                      California licensed fire protection contractor for reliable, code-compliant work.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B365D] mb-2">NICET Level IV</h3>
                    <p className="text-sm text-[#64748B]">
                      Highest certification in fire alarm design ensures technical excellence.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B365D] mb-2">Local Response</h3>
                    <p className="text-sm text-[#64748B]">
                      Concord-based team provides fast response times throughout the Bay Area.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="h-5 w-5 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B365D] mb-2">24/7 Emergency</h3>
                    <p className="text-sm text-[#64748B]">
                      Round-the-clock emergency support when you need it most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Property?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote within 24 hours. Our experts will assess your needs and provide a detailed proposal.
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
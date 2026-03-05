import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Zap, CheckCircle } from "lucide-react";

export default function PartnersPage() {
  const partners = [
    {
      name: "Honeywell",
      category: "Fire Alarm Systems",
      description: "Industry-leading fire detection and alarm systems with advanced addressable technology.",
      features: ["Addressable panels", "Smoke detectors", "Notification appliances"],
      certified: true,
    },
    {
      name: "Siemens",
      category: "Integrated Systems",
      description: "Intelligent fire safety systems with seamless building integration capabilities.",
      features: ["Cerberus PRO", "Synco living", "Desigo CC integration"],
      certified: true,
    },
    {
      name: "Edwards",
      category: "Life Safety",
      description: "Comprehensive life safety solutions including fire alarm, mass notification, and emergency communications.",
      features: ["EST3 panels", "Signature series", "Networked systems"],
      certified: true,
    },
    {
      name: "Notifier",
      category: "Advanced Detection",
      description: "High-sensitivity smoke detection and advanced fire alarm control panels.",
      features: ["ONYX series", "Aspiration detection", "Voice evacuation"],
      certified: true,
    },
    {
      name: "Silent Knight",
      category: "Commercial Solutions",
      description: "Cost-effective fire alarm solutions for small to medium commercial applications.",
      features: ["Addressable panels", "Monitoring", "Easy programming"],
      certified: true,
    },
    {
      name: "Potter Electric",
      category: "Specialized Systems",
      description: "Specialized fire alarm and sprinkler monitoring solutions.",
      features: ["Fire panels", "Sprinkler monitoring", "IP communicators"],
      certified: true,
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
                Our Technology{" "}
                <span className="text-[#FF6B35]">Partners</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                We partner with the world&apos;s leading fire safety manufacturers to deliver 
                reliable, certified solutions for your protection needs.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Industry-Leading Partners
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              We work with certified manufacturers to ensure the highest quality 
              fire safety systems for your facility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-[#F8FAFC] rounded-lg p-6 border border-[#E2E8F0] hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#1B365D]">{partner.name}</h3>
                  {partner.certified && (
                    <div className="flex items-center text-[#FF6B35]">
                      <Shield className="h-4 w-4 mr-1" />
                      <span className="text-xs font-semibold">Certified</span>
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-[#64748B] mb-3">{partner.category}</p>
                <p className="text-[#2C3E50] mb-4">{partner.description}</p>
                
                <ul className="space-y-2">
                  {partner.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-[#64748B]">
                      <CheckCircle className="h-4 w-4 text-[#FF6B35] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Partners Matter */}
      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-6">
                Why We Choose Our Partners
              </h2>
              <p className="text-lg text-[#64748B] mb-6">
                At Fire Detection Unlimited, we don&apos;t work with just any manufacturer. 
                We carefully select partners who meet our strict standards for:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-[#FF6B35] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#1B365D]">UL Listed & Certified</h4>
                    <p className="text-sm text-[#64748B]">All equipment meets or exceeds national safety standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-[#FF6B35] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#1B365D]">Proven Reliability</h4>
                    <p className="text-sm text-[#64748B]">Track record of performance in real-world installations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-[#FF6B35] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#1B365D]">Local Support</h4>
                    <p className="text-sm text-[#64748B]">Manufacturer support for parts and technical assistance</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <blockquote className="text-lg text-[#2C3E50] italic mb-4">
                &ldquo;Our partnerships with leading manufacturers ensure that every 
                system we install meets the highest standards of safety and reliability.&rdquo;
              </blockquote>
              <p className="text-[#64748B]">
                We maintain ongoing training and certification with all our partners 
                to ensure our technicians are experts in the systems we install.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need a Specific System?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We can design and install systems using your preferred manufacturer 
              or recommend the best solution for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white hover:bg-white/90 text-[#FF6B35] font-semibold text-base px-8 py-6 group"
                asChild
              >
                <Link href="/contact/quote">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] font-semibold text-base px-8 py-6"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

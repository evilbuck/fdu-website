"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, FileText, Book, HelpCircle } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Fire Alarm Basics",
      description: "Learn the fundamentals of fire alarm systems and how they protect your property.",
      icon: Book,
    },
    {
      title: "NFPA Requirements",
      description: "Understanding the codes and standards that govern fire alarm systems.",
      icon: FileText,
    },
    {
      title: "Maintenance Guide",
      description: "Tips for keeping your fire alarm system in top condition.",
      icon: Shield,
    },
    {
      title: "FAQ",
      description: "Common questions about fire alarm systems and our services.",
      icon: HelpCircle,
    },
  ];

  const faqs = [
    {
      question: "How often should my fire alarm system be inspected?",
      answer: "NFPA requires annual inspections for most systems, with more frequent visual inspections recommended.",
    },
    {
      question: "What is a fire alarm inspection?",
      answer: "A comprehensive test of all system components including detectors, pull stations, notification appliances, and control panels.",
    },
    {
      question: "Do I need a permit for fire alarm work?",
      answer: "Most fire alarm installations and significant modifications require permits from your local authority having jurisdiction (AHJ).",
    },
    {
      question: "What happens if my system fails inspection?",
      answer: "We'll work with you to address any issues and ensure your system passes re-inspection.",
    },
    {
      question: "How long does installation take?",
      answer: "Timeline varies by project size and complexity. We provide detailed schedules during the quoting process.",
    },
    {
      question: "Do you offer 24/7 emergency service?",
      answer: "Yes, we provide 24/7 emergency repair service for existing customers.",
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
                Fire Safety{" "}
                <span className="text-[#FF6B35]">Resources</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Educational resources to help you understand fire safety and protect your property.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                  asChild
                >
                  <Link href="/contact/quote">
                    Get Expert Help
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
              Explore Our Resources
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Information and guides to help you understand fire safety
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {resources.map((resource) => (
              <div key={resource.title} className="p-6 border-2 border-[#E2E8F0] rounded-lg hover:border-[#FF6B35] transition-colors text-center">
                <resource.icon className="h-10 w-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#1B365D] mb-2">{resource.title}</h3>
                <p className="text-sm text-[#64748B]">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#1B365D] mb-2">{faq.question}</h3>
                  <p className="text-[#64748B]">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-[#64748B] mb-4">Have more questions?</p>
              <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#1B365D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Fire Safety Assistance?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts are here to help with any questions about fire safety.
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
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#1B365D] font-semibold text-base px-8 py-6"
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
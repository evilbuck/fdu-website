"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle, Clock, Shield, FileCheck, Building2, ChevronDown, ChevronUp, DollarSign, AlertTriangle, HeadphonesIcon } from "lucide-react";
import { useState } from "react";

export default function PropertyManagersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    {
      problem: "Proprietary systems lock you into expensive service contracts",
      solution: "Non-proprietary Autocall systems give you provider freedom and lower costs",
      icon: DollarSign,
    },
    {
      problem: "False alarms disrupt tenants and trigger fire department fines",
      solution: "Advanced detection technology and proper commissioning minimize false alarms",
      icon: AlertTriangle,
    },
    {
      problem: "After-hours emergencies with no support response",
      solution: "24/7 monitoring and emergency service with local response team",
      icon: HeadphonesIcon,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "System Assessment",
      description: "We evaluate your current fire alarm system, identify compliance gaps, and document all devices and zones.",
    },
    {
      step: "02",
      title: "Customized Maintenance Plan",
      description: "Tailored inspection schedules based on your building type, occupancy, and AHJ requirements.",
    },
    {
      step: "03",
      title: "24/7 Monitoring Setup",
      description: "UL-listed central station monitoring with account-specific protocols and immediate emergency response.",
    },
    {
      step: "04",
      title: "Ongoing Service & Compliance",
      description: "Regular inspections, testing, documentation, and immediate response to any issues or code updates.",
    },
  ];

  const faqs = [
    {
      question: "What's the difference between proprietary and non-proprietary systems?",
      answer: "Proprietary systems require you to use the original installer for all service, locking you into their pricing and availability. Non-proprietary systems like Autocall can be serviced by any qualified contractor, giving you competitive pricing, faster response times, and flexibility to change providers if needed.",
    },
    {
      question: "How much can I save with your maintenance programs?",
      answer: "Our maintenance programs typically save property managers 15-30% compared to reactive break-fix service. Preventive maintenance catches issues before they become expensive emergencies, extends equipment life, and ensures compliance. We also offer bundled monitoring and maintenance packages for additional savings.",
    },
    {
      question: "What happens when there's an emergency after hours?",
      answer: "Our 24/7 monitoring center immediately alerts the fire department and notifies your designated contacts. For system issues (not alarms), our local emergency service team responds typically within 1-2 hours. You'll have direct access to emergency support via dedicated phone line.",
    },
    {
      question: "How do you help with compliance and liability?",
      answer: "We provide complete documentation of all inspections, tests, and maintenance activities. Our NICET IV certified engineers ensure your systems meet all NFPA 72 and local AHJ requirements. Regular compliance reviews identify potential issues before they become violations, and our maintenance agreements include liability protection through proper documentation.",
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
                <Building2 className="w-4 h-4 mr-2" />
                For Property Managers
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Reduce Operating Costs &{" "}
                <span className="text-[#FF6B35]">Liability with Non-Proprietary Systems</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                24/7 monitoring, comprehensive maintenance programs, and expert compliance support. 
                Lower total cost of ownership with systems you own—not systems that own you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                  asChild
                >
                  <Link href="#quote">
                    Get Maintenance Quote
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
                    Call Rick: (925) 676-4444
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF6B35]/10 to-transparent hidden lg:block" />
      </section>

      {/* Pain Point Solutions Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Escape the Proprietary Trap
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Fire alarm systems shouldn&apos;t lock you into expensive contracts or leave you stranded during emergencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#E74C3C]/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <point.icon className="w-6 h-6 text-[#E74C3C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C3E50] mb-2">The Problem</h3>
                    <p className="text-[#64748B] text-sm">{point.problem}</p>
                  </div>
                </div>
                <div className="border-t border-[#E2E8F0] pt-4 mt-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-[#FF6B35] mr-2" />
                    <h3 className="font-semibold text-[#1B365D]">The FDU Solution</h3>
                  </div>
                  <p className="text-[#64748B] text-sm">{point.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-20 bg-[#1B365D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Fire Safety Management
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              From assessment to ongoing compliance—everything you need to protect your properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 h-full">
                  <div className="text-4xl font-bold text-[#FF6B35] mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/80 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#4A90E2]/10 text-[#4A90E2] text-sm font-medium mb-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  Multi-Property Portfolio
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B365D] mb-4">
                  Regional Commercial Property Group
                </h2>
                <p className="text-[#64748B] mb-6">
                  Property management company overseeing 12 commercial buildings across the Bay Area. 
                  Previously locked into expensive proprietary service contracts with slow response times.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="text-2xl font-bold text-[#1B365D]">12</div>
                    <div className="text-sm text-[#64748B]">Buildings</div>
                  </div>
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="text-2xl font-bold text-[#1B365D]">35%</div>
                    <div className="text-sm text-[#64748B]">Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="text-2xl font-bold text-[#FF6B35]">99.2%</div>
                    <div className="text-sm text-[#64748B]">Uptime</div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-[#FF6B35] pl-4 italic text-[#64748B] mb-6">
                  &quot;Switching to FDU&apos;s non-proprietary systems cut our fire alarm costs by over a third.
                  The 24/7 monitoring gives us peace of mind, and emergency response is actually fast.&quot;
                </blockquote>
                <p className="text-sm text-[#2C3E50] font-medium">
                  — Director of Operations, Bay Area Property Management
                </p>
              </div>
              <div className="bg-[#1B365D] flex items-center justify-center p-8 md:p-12">
                <div className="text-center text-white">
                  <Building2 className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-white/60 text-sm">Property portfolio management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-12 bg-white border-y border-[#E2E8F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-[#1B365D]" />
              <div>
                <div className="font-bold text-[#1B365D]">Non-Proprietary</div>
                <div className="text-sm text-[#64748B]">Provider Freedom</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-8 h-8 text-[#1B365D]" />
              <div>
                <div className="font-bold text-[#1B365D]">24/7 Monitoring</div>
                <div className="text-sm text-[#64748B]">Always Protected</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FileCheck className="w-8 h-8 text-[#1B365D]" />
              <div>
                <div className="font-bold text-[#1B365D]">Full Compliance</div>
                <div className="text-sm text-[#64748B]">Documentation Included</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-8 h-8 text-[#1B365D]" />
              <div>
                <div className="font-bold text-[#1B365D]">Multi-Building</div>
                <div className="text-sm text-[#64748B]">Portfolio Discounts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-[#E2E8F0] rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="font-semibold text-[#1B365D] pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#FF6B35] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#64748B] shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 text-[#64748B]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section id="quote" className="py-16 md:py-20 bg-[#1B365D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Reduce Your Fire Safety Costs?
              </h2>
              <p className="text-lg text-white/80">
                Free property assessment and maintenance quote within 24 hours. No obligation.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
              <form className="space-y-6" name="pm-quote" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="pm-quote" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-2">Property Management Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-2">Number of Buildings *</label>
                    <select
                      name="building_count"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    >
                      <option value="">Select building count</option>
                      <option value="1">1 Building</option>
                      <option value="2-5">2-5 Buildings</option>
                      <option value="6-10">6-10 Buildings</option>
                      <option value="10+">10+ Buildings</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-2">Service Needed *</label>
                    <select
                      name="service_type"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    >
                      <option value="">Select service type</option>
                      <option value="monitoring">24/7 Monitoring</option>
                      <option value="maintenance">Inspection & Maintenance</option>
                      <option value="new-system">New System Installation</option>
                      <option value="upgrade">System Upgrade/Retrofit</option>
                      <option value="emergency">Emergency Service</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2C3E50] mb-2">Property Details</label>
                  <textarea
                    name="details"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    placeholder="Tell us about your properties: building types, locations, current fire alarm system, any specific concerns..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base py-6"
                >
                  Get My Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-sm text-[#64748B]">
                  Prefer to talk? Call Rick directly:{" "}
                  <a href="tel:+19256764444" className="text-[#FF6B35] font-semibold hover:underline">
                    (925) 676-4444
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

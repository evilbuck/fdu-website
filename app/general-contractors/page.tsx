"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle, Clock, Shield, FileCheck, HardHat, Building2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function GeneralContractorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    {
      problem: "Coordinating separate designer and installer slows projects",
      solution: "Single point of accountability from blueprint to final inspection",
      icon: Clock,
    },
    {
      problem: "Failed inspections cost days and damage your reputation",
      solution: "Deep AHJ relationships ensure first-time approvals",
      icon: FileCheck,
    },
    {
      problem: "Change orders blow your budget",
      solution: "Value engineering optimizes without compromising safety",
      icon: Shield,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Design",
      description: "We review your plans, identify requirements, and create value-engineered designs that meet code and budget.",
    },
    {
      step: "02",
      title: "Permitting & AHJ Coordination",
      description: "Our deep relationships with Bay Area authorities having jurisdiction expedite approvals and prevent delays.",
    },
    {
      step: "03",
      title: "Installation & Integration",
      description: "Seamless coordination with your electrical contractor and other trades keeps your project on schedule.",
    },
    {
      step: "04",
      title: "Testing & Final Inspection",
      description: "Thorough pre-testing ensures first-time inspection success, so you can close out on time.",
    },
  ];

  const faqs = [
    {
      question: "How long does permitting take?",
      answer: "Typically 2-4 weeks depending on the jurisdiction and project complexity. Our relationships with Bay Area AHJs often expedite this process compared to the industry standard of 4-6 weeks.",
    },
    {
      question: "Do you work with our electrical contractor?",
      answer: "Absolutely. We coordinate seamlessly with your electrical team, providing detailed low-voltage routing plans and integration specifications. Many of our clients' electrical contractors appreciate our clear documentation.",
    },
    {
      question: "What if we have a tight deadline?",
      answer: "We understand construction schedules. Our Design-Build approach eliminates the delays of coordinating separate designer and installer. We can often fast-track projects when needed, and our local Concord-based team enables quick response times.",
    },
    {
      question: "Can you work with existing specifications?",
      answer: "Yes. If your project already has fire alarm specifications from an engineer, we can execute them precisely. We also offer value engineering reviews to optimize designs for constructability and cost without compromising safety or code compliance.",
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
                For General Contractors
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Keep Your Project on Schedule with{" "}
                <span className="text-[#FF6B35]">Expert Fire Alarm Design-Build</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Unified accountability, faster permits, first-time inspections. 
                One partner for design and installation—no coordination headaches, no costly delays.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                  asChild
                >
                  <Link href="#quote">
                    Get Project Quote
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
              Eliminate Fire Alarm Headaches
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Fire alarm delays can halt multi-million dollar projects. Here's how FDU keeps you on track:
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
              The FDU Design-Build Process
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              One partner from blueprint to final inspection. Simple, streamlined, on schedule.
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
                  Featured Project
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B365D] mb-4">
                  555 City Center, Oakland
                </h2>
                <p className="text-[#64748B] mb-6">
                  High-rise commercial fire alarm installation for a Class A office building. 
                  Complex multi-phase installation requiring coordination with multiple trades 
                  and stringent timeline requirements.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="text-2xl font-bold text-[#1B365D]">28</div>
                    <div className="text-sm text-[#64748B]">Stories</div>
                  </div>
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="text-2xl font-bold text-[#1B365D]">650K</div>
                    <div className="text-sm text-[#64748B]">Sq Ft</div>
                  </div>
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="text-2xl font-bold text-[#FF6B35]">On Time</div>
                    <div className="text-sm text-[#64748B]">Delivery</div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-[#FF6B35] pl-4 italic text-[#64748B] mb-6">
                  "FDU kept us on schedule through a complex installation. Their Design-Build approach 
                  eliminated the usual coordination headaches."
                </blockquote>
                <p className="text-sm text-[#2C3E50] font-medium">
                  — Project Manager, Leading Bay Area GC
                </p>
              </div>
              <div className="bg-[#1B365D] flex items-center justify-center p-8 md:p-12">
                <div className="text-center text-white">
                  <Building2 className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-white/60 text-sm">Project photography available upon request</p>
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
                <div className="font-bold text-[#1B365D]">C-10 Licensed</div>
                <div className="text-sm text-[#64748B]">License #803262</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FileCheck className="w-8 h-8 text-[#1B365D]" />
              <div>
                <div className="font-bold text-[#1B365D]">NICET Level IV</div>
                <div className="text-sm text-[#64748B]">Certified Engineers</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-8 h-8 text-[#1B365D]" />
              <div>
                <div className="font-bold text-[#1B365D]">24+ Years</div>
                <div className="text-sm text-[#64748B]">Bay Area Experience</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-[#1B365D]" />
              <div>
                <div className="font-bold text-[#1B365D]">1000+ Projects</div>
                <div className="text-sm text-[#64748B]">Successfully Completed</div>
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
                Ready to Eliminate Fire Alarm Headaches?
              </h2>
              <p className="text-lg text-white/80">
                Free consultation and quote within 24 hours. No obligation.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
              <form className="space-y-6" name="gc-quote" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="gc-quote" />
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
                    <label className="block text-sm font-medium text-[#2C3E50] mb-2">Company *</label>
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
                    <label className="block text-sm font-medium text-[#2C3E50] mb-2">Project Type *</label>
                    <select
                      name="project_type"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="new-construction">New Construction</option>
                      <option value="renovation">Renovation/Addition</option>
                      <option value="retrofit">System Retrofit/Upgrade</option>
                      <option value="tenant-improvement">Tenant Improvement</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C3E50] mb-2">Timeline</label>
                    <select
                      name="timeline"
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (0-3 months)</option>
                      <option value="near-term">Near-term (3-6 months)</option>
                      <option value="planning">Planning phase (6+ months)</option>
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
                  <label className="block text-sm font-medium text-[#2C3E50] mb-2">Project Details</label>
                  <textarea
                    name="details"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    placeholder="Tell us about your project: building size, location, any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base py-6"
                >
                  Get My Free Quote
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

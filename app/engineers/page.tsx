"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle, FileText, Ruler, Award, ClipboardCheck, Building2, ChevronDown, ChevronUp, Download, GraduationCap, Wrench } from "lucide-react";
import { useState } from "react";

export default function EngineersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const painPoints = [
    {
      problem: "Contractors who can't execute your specifications precisely",
      solution: "NICET IV certified engineers who understand and implement your designs exactly as specified",
      icon: ClipboardCheck,
    },
    {
      problem: "Poor system design requiring costly change orders",
      solution: "Value engineering reviews that optimize constructability without compromising your design intent",
      icon: Wrench,
    },
    {
      problem: "Outdated knowledge of current codes and NFPA standards",
      solution: "Engineers current on NFPA 72, California codes, and Bay Area AHJ requirements",
      icon: GraduationCap,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Specification Review",
      description: "We review your plans and specifications, ask clarifying questions, and identify constructability opportunities.",
    },
    {
      step: "02",
      title: "Collaborative Design",
      description: "Work directly with NICET IV engineers on value engineering, CAD details, and system optimization.",
    },
    {
      step: "03",
      title: "Documentation & Shop Draws",
      description: "Detailed CAD submittals, riser diagrams, and device schedules that meet your standards.",
    },
    {
      step: "04",
      title: "Installation & Verification",
      description: "Execute your specifications precisely with thorough testing and as-built documentation.",
    },
  ];

  const faqs = [
    {
      question: "Can you work with our existing specifications?",
      answer: "Absolutely. We execute engineer specifications precisely, providing detailed submittals that show exactly how we'll implement your design. If we identify constructability improvements, we present them as options—not assumptions—so you maintain design control.",
    },
    {
      question: "What CAD capabilities do you provide?",
      answer: "We deliver detailed shop drawings including floor plans, riser diagrams, device schedules, and panel layouts. Our NICET IV engineers create submittals that meet your standards and AHJ requirements. We can work in AutoCAD and provide PDFs, DWGs, or other formats as needed.",
    },
    {
      question: "How current are you on NFPA and California codes?",
      answer: "Our lead engineer is NICET Level IV certified and maintains active NFPA membership. We regularly attend code update seminars and maintain close relationships with Bay Area AHJs. We can speak to specific code editions, interpretations, and local amendments that affect your projects.",
    },
    {
      question: "Do you provide peer review or design-build support?",
      answer: "Yes. We offer peer review services for constructability and code compliance. For design-build projects, we can develop fire alarm specifications from performance criteria, create complete CAD packages, and provide engineer-stamped drawings when required.",
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
                <Ruler className="w-4 h-4 mr-2" />
                For Building & Electrical Engineers
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Partner with{" "}
                <span className="text-[#FF6B35]">NICET Level IV Certified Engineers</span>{" "}
                Who Speak Your Language
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Complex specifications executed precisely. Code challenges solved collaboratively. 
                CAD drawings, peer review, and technical partnership from design through final inspection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                  asChild
                >
                  <Link href="#quote">
                    Discuss Your Project
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
              Engineering Challenges, Solved
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Technical projects require technical partners. Here's how FDU delivers engineering excellence:
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
                    <h3 className="font-semibold text-[#2C3E50] mb-2">The Challenge</h3>
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
              Collaborative Design-Build Process
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              From specification review to final inspection—we partner with you at every stage.
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
                  Featured Technical Project
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B365D] mb-4">
                  Buck Institute Research Facility, Novato
                </h2>
                <p className="text-[#64748B] mb-6">
                  Complex fire alarm integration for a world-class research facility with specialized 
                  detection requirements, redundant systems, and integration with building management 
                  and laboratory safety systems.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="text-2xl font-bold text-[#1B365D]">NICET IV</div>
                    <div className="text-sm text-[#64748B]">Lead Engineer</div>
                  </div>
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="text-2xl font-bold text-[#1B365D]">100+</div>
                    <div className="text-sm text-[#64748B]">Custom Devices</div>
                  </div>
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                    <div className="text-2xl font-bold text-[#FF6B35]">First Pass</div>
                    <div className="text-sm text-[#64748B]">Submittals</div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-[#FF6B35] pl-4 italic text-[#64748B] mb-6">
                  "FDU's NICET IV engineers understood our complex requirements immediately. 
                  Their submittals were thorough, their questions were intelligent, and the 
                  installation matched our specifications exactly."
                </blockquote>
                <p className="text-sm text-[#2C3E50] font-medium">
                  — Fire Protection Engineer, Consulting Firm
                </p>
              </div>
              <div className="bg-[#1B365D] flex items-center justify-center p-8 md:p-12">
                <div className="text-center text-white">
                  <FileText className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-white/60 text-sm">Project details and CAD samples available upon request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Technical Credentials & Capabilities
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              The certifications and capabilities that matter to engineering professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#1B365D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">NICET Level IV</h3>
              <p className="text-[#64748B] text-sm">Certified Fire Alarm Engineering</p>
            </div>

            <div className="text-center p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">CAD Capable</h3>
              <p className="text-[#64748B] text-sm">Detailed Shop Drawings & Submittals</p>
            </div>

            <div className="text-center p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">NFPA Current</h3>
              <p className="text-[#64748B] text-sm">Active Membership & Code Compliance</p>
            </div>

            <div className="text-center p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#1B365D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-2">24+ Years</h3>
              <p className="text-[#64748B] text-sm">Bay Area Engineering Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
                Technical Questions
              </h2>
              <p className="text-lg text-[#64748B]">
                Answers for engineering professionals.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="font-semibold text-[#1B365D] pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#FF6B35] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#64748B] shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-[#64748B] leading-relaxed">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for a Technical Partnership?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Let's discuss your specifications, review your project requirements, or explore how we can support your design process.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white/80 text-sm">
                <Phone className="w-4 h-4" />
                <span>Or call Rick directly: <a href="tel:+19256764444" className="text-[#FF6B35] hover:underline font-semibold">(925) 676-4444</a></span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <form 
                name="engineer-quote" 
                method="POST" 
                data-netlify="true"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="engineer-quote" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#2C3E50] mb-2">
                      Firm/Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="Your firm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-[#2C3E50] mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-white"
                    >
                      <option value="">Select project type</option>
                      <option value="new-construction">New Construction</option>
                      <option value="retrofit">Retrofit/Renovation</option>
                      <option value="upgrade">System Upgrade</option>
                      <option value="peer-review">Peer Review</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-[#2C3E50] mb-2">
                      Service Needed
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-white"
                    >
                      <option value="">Select service needed</option>
                      <option value="spec-execution">Specification Execution</option>
                      <option value="design-build">Design-Build Support</option>
                      <option value="cad-drawings">CAD/Shop Drawings</option>
                      <option value="peer-review">Peer Review</option>
                      <option value="value-engineering">Value Engineering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="complexity" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Project Complexity
                  </label>
                  <select
                    id="complexity"
                    name="complexity"
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-white"
                  >
                    <option value="">Select complexity level</option>
                    <option value="simple">Simple (Single building, standard system)</option>
                    <option value="moderate">Moderate (Multi-zone, some integration)</option>
                    <option value="complex">Complex (High-rise, campus, special hazards)</option>
                    <option value="highly-complex">Highly Complex (Healthcare, industrial, unique requirements)</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="you@firm.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2C3E50] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-[#2C3E50] mb-2">
                    Project Details / Specifications
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    placeholder="Describe your project, attach specifications, or let us know what support you need..."
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-[#4A90E2]" />
                  <span className="text-sm text-[#64748B]">
                    Need CAD samples or spec sheets? Mention it above and we'll include them in our response.
                  </span>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-lg py-6"
                >
                  Request Technical Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-[#64748B] text-center">
                  We'll respond within 24 business hours with technical guidance and next steps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

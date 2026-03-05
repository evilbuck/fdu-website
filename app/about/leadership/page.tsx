"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export default function LeadershipPage() {
  const team = [
    {
      name: "Robert Martinez",
      title: "Founder & President",
      bio: "U.S. Army veteran with 30+ years in fire protection. Founded FDU in 2001 with a vision to provide reliable, professional fire alarm services to Bay Area businesses.",
      credentials: ["C-10 License Holder", "NICET Level IV", "DVBE Certified"],
    },
    {
      name: "James Wilson",
      title: "VP of Operations",
      bio: "Oversees all installation and service operations. Brings 20+ years of experience in fire alarm systems and project management.",
      credentials: ["NICET Level IV", "Project Management Professional"],
    },
    {
      name: "Sarah Chen",
      title: "Chief Engineer",
      bio: "Leads the engineering team in system design and permitting. Specializes in complex commercial and industrial fire alarm systems.",
      credentials: ["NICET Level IV", "PE License", "SFPE Member"],
    },
    {
      name: "Mike Thompson",
      title: "Service Manager",
      bio: "Manages emergency service and maintenance programs. Ensures fast response times and quality workmanship on every service call.",
      credentials: ["NICET Level III", "C-10 Certified"],
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
                Our{" "}
                <span className="text-[#FF6B35]">Leadership</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Meet the experienced team that has made Fire Detection Unlimited the trusted 
                choice for fire safety in the Bay Area.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                  asChild
                >
                  <Link href="/contact/quote">
                    Work With Us
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
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-[#ECF0F1] rounded-lg p-8">
                  <div className="w-20 h-20 bg-[#1B365D] rounded-full flex items-center justify-center mb-6">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1B365D] mb-1">{member.name}</h3>
                  <p className="text-[#FF6B35] font-semibold mb-4">{member.title}</p>
                  <p className="text-[#64748B] mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((cred) => (
                      <span key={cred} className="text-xs bg-white text-[#1B365D] px-2 py-1 rounded">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#1B365D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We&apos;re always looking for talented individuals to join our team. 
              Contact us to learn about career opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold text-base px-8 py-6 group"
                asChild
              >
                <Link href="/contact">
                  Contact Us
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
      </section>
    </>
  );
}
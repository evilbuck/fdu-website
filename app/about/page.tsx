"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Clock, CheckCircle, Award, Heart } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "24+", label: "Years Serving Bay Area" },
    { value: "2,500+", label: "Projects Completed" },
    { value: "4", label: "NICET Level IV Certified" },
    { value: "24/7", label: "Emergency Support" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every decision we make prioritizes life safety. We never compromise on protection.",
    },
    {
      icon: Heart,
      title: "Veteran-Owned",
      description: "Proudly serving our community with the integrity and dedication of our military heritage.",
    },
    {
      icon: Clock,
      title: "Local Response",
      description: "Concord-based team provides fast, responsive service throughout the Bay Area.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "NICET Level IV certification and C-10 license demonstrate our commitment to quality.",
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
                About{" "}
                <span className="text-[#FF6B35]">Fire Detection Unlimited</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Since 2001, we&apos;ve been protecting Bay Area businesses with comprehensive 
                fire alarm solutions. Veteran-owned and operated with a commitment to excellence.
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

      {/* Stats */}
      <section className="py-12 bg-[#FF6B35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] text-center mb-12">
              Our Story
            </h2>
            
            <div className="prose prose-lg max-w-none text-[#64748B]">
              <p>
                Fire Detection Unlimited was founded in 2001 with a simple mission: to make fire safety 
                simple and accessible for Bay Area businesses. As a veteran-owned company, we bring the 
                same dedication and integrity to every project that we brought to serving our country.
              </p>
              <p>
                Over the years, we&apos;ve grown from a small operation to one of the most respected fire 
                alarm companies in the region. Our team of NICET Level IV certified engineers and 
                technicians has completed over 2,500 projects, from small retail spaces to large 
                commercial complexes.
              </p>
              <p>
                What sets us apart is our design-build approach. Instead of coordinating separate 
                designers and installers, we handle everything under one roof. This means faster 
                permits, smoother installations, and most importantly—first-time inspection success.
              </p>
              <p>
                Today, we continue to serve the Bay Area from our Concord headquarters, providing 
                24/7 emergency service and maintaining our commitment to excellence on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-[#ECF0F1]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-lg p-6 shadow-sm">
                <value.icon className="h-8 w-8 text-[#FF6B35] mb-4" />
                <h3 className="text-lg font-bold text-[#1B365D] mb-2">{value.title}</h3>
                <p className="text-sm text-[#64748B]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-8">
              Our Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-[#ECF0F1] rounded-lg">
                <Shield className="h-10 w-10 text-[#FF6B35] mx-auto mb-3" />
                <h3 className="font-bold text-[#1B365D] mb-1">C-10 Licensed</h3>
                <p className="text-sm text-[#64748B]">California Fire Protection Contractor</p>
              </div>
              <div className="p-6 bg-[#ECF0F1] rounded-lg">
                <Award className="h-10 w-10 text-[#FF6B35] mx-auto mb-3" />
                <h3 className="font-bold text-[#1B365D] mb-1">NICET Level IV</h3>
                <p className="text-sm text-[#64748B]">Fire Alarm Technology Certification</p>
              </div>
              <div className="p-6 bg-[#ECF0F1] rounded-lg">
                <CheckCircle className="h-10 w-10 text-[#FF6B35] mx-auto mb-3" />
                <h3 className="font-bold text-[#1B365D] mb-1">UL Listed</h3>
                <p className="text-sm text-[#64748B]">Central Station Monitoring</p>
              </div>
            </div>
            
            <Link href="/about/certifications">
              <Button variant="outline" className="border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white">
                View All Certifications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your fire safety needs.
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
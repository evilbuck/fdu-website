"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSnippet() {
  return (
    <section className="py-16 md:py-24 bg-[#1B365D] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Family-Owned, Veteran-Led, Bay Area Proud
            </h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                Founded in 2001 in Concord, California, Fire Detection Unlimited has grown from a small 
                local contractor to a trusted regional leader in fire alarm and life safety systems. 
                For over 24 years, we've protected businesses throughout the Bay Area and Sacramento region.
              </p>
              <p>
                Led by USMC Veteran Richard C. Pulver, our team brings military discipline and precision 
                to every project. With NICET Level IV certification and C-10 licensing, we deliver 
                engineering excellence that national competitors can't match with the personal attention 
                that only a family business can provide.
              </p>
              <p>
                We're not just installing fire alarm systems—we're building lasting partnerships 
                with the businesses that keep our community safe.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about/leadership"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#1B365D] font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">24+</div>
              <div className="text-white/80">Years Serving Bay Area</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">1000+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">NICET</div>
              <div className="text-white/80">Level IV Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">24/7</div>
              <div className="text-white/80">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

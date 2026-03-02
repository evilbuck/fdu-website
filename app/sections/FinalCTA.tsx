"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-[#FF6B35]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Simplify Your Fire Alarm Project?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote within 24 hours. One of our experts 
            will assess your needs and provide a detailed proposal.
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
          
          <p className="mt-6 text-white/80 text-sm">
            Emergency? Call our 24/7 hotline for immediate assistance.
          </p>
        </div>
      </div>
    </section>
  );
}

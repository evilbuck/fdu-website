import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import { FileText, CheckCircle } from "lucide-react";

export default function QuotePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-[#1B365D] py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Request a Free Quote
              </h1>
              <p className="text-xl text-white/80">
                Tell us about your project and we&apos;ll provide a detailed proposal within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Quote Form */}
              <div>
                <h2 className="text-2xl font-bold text-[#1B365D] mb-2">Project Details</h2>
                <p className="text-[#64748B] mb-8">
                  Provide information about your project and we&apos;ll prepare a customized quote.
                </p>
                <ContactForm page="Quote Request" defaultService="" />
              </div>

              {/* Info */}
              <div>
                <h2 className="text-2xl font-bold text-[#1B365D] mb-2">What to Expect</h2>
                <p className="text-[#64748B] mb-8">
                  Our quoting process is straightforward and transparent.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1B365D] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1B365D]">Submit Your Request</h3>
                      <p className="text-[#64748B] text-sm">
                        Fill out the form with details about your fire safety needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1B365D] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1B365D]">Consultation Call</h3>
                      <p className="text-[#64748B] text-sm">
                        A team member will reach out to discuss your project in detail.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1B365D] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1B365D]">Receive Your Quote</h3>
                      <p className="text-[#64748B] text-sm">
                        Get a comprehensive proposal with pricing and timeline.
                      </p>
                    </div>
                  </div>
                </div>

                {/* What we need */}
                <div className="mt-10 p-6 bg-white border border-[#E2E8F0] rounded-lg">
                  <h3 className="font-semibold text-[#1B365D] mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Information to Include
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Project type (new construction, retrofit, upgrade)",
                      "Building size and type",
                      "Timeline requirements",
                      "Any specific fire safety concerns",
                      "Current system details (if applicable)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#64748B]">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact directly */}
                <div className="mt-6 p-4 bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-lg">
                  <p className="text-[#2C3E50]">
                    <strong>Need it faster?</strong> Call us directly at{" "}
                    <a href="tel:+19256764444" className="text-[#FF6B35] font-semibold hover:underline">
                      (925) 676-4444
                    </a>{" "}
                    for urgent quotes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
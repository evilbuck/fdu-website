import ContactForm from "../components/ContactForm";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1B365D] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80">
              Ready to discuss your fire safety needs? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B365D] mb-2">Send Us a Message</h2>
              <p className="text-[#64748B] mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm page="Contact Page" />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B365D] mb-2">Contact Information</h2>
              <p className="text-[#64748B] mb-8">
                Prefer to reach out directly? Here&apos;s how you can contact us.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B365D]">Phone</h3>
                    <a href="tel:+19256764444" className="text-[#64748B] hover:text-[#FF6B35] transition-colors">
                      (925) 676-4444
                    </a>
                    <p className="text-sm text-[#94A3B8] mt-1">Mon-Fri 8am-5pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B365D]">Email</h3>
                    <a href="mailto:info@firedetect.com" className="text-[#64748B] hover:text-[#FF6B35] transition-colors">
                      info@firedetect.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B365D]">Address</h3>
                    <p className="text-[#64748B]">
                      1810 Apollo Way<br />
                      Concord, CA 94520
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B365D]">Emergency Service</h3>
                    <p className="text-[#64748B]">
                      24/7 Emergency Repairs Available
                    </p>
                    <p className="text-sm text-[#94A3B8] mt-1">Call (925) 676-4444 for emergencies</p>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-700">Need Immediate Assistance?</h4>
                    <p className="text-sm text-red-600 mt-1">
                      For life-threatening emergencies, always call 911. For urgent fire safety issues, call our 24/7 emergency line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-8">
            Terms of Service
          </h1>
          
          <p className="text-[#64748B] mb-8">
            Last updated: March 4, 2026
          </p>

          <div className="prose prose-lg max-w-none text-[#2C3E50]">
            <p className="mb-6">
              Please read these Terms of Service (&ldquo;Terms,&rdquo; &ldquo;Terms of Service&rdquo;) carefully before using the 
              Fire Detection Unlimited, Inc. website or engaging our services.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using our website and services, you agree to be bound by these Terms. If you disagree 
              with any part of the Terms, you may not access our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">2. Description of Services</h2>
            <p className="mb-4">
              Fire Detection Unlimited, Inc. provides fire alarm design, installation, monitoring, inspection, 
              maintenance, and related fire safety services to commercial, industrial, and government clients in 
              the Bay Area and surrounding regions.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">3. Quotes and Estimates</h2>
            <p className="mb-4">
              Any quotes or estimates provided through our website or by our representatives are subject to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Site inspection and verification of project requirements</li>
              <li>Availability of materials and equipment</li>
              <li>Valid for 30 days unless otherwise specified</li>
              <li>May be revised based on actual site conditions or code requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">4. Service Agreements</h2>
            <p className="mb-4">
              Formal service agreements will be executed for all projects. These agreements will specify:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Scope of work and deliverables</li>
              <li>Project timeline and milestones</li>
              <li>Payment terms and conditions</li>
              <li>Warranty and maintenance terms</li>
              <li>Permit and inspection responsibilities</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">5. Permits and Inspections</h2>
            <p className="mb-4">
              Fire Detection Unlimited will obtain necessary permits and coordinate inspections as specified in 
              the service agreement. Clients are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing site access for inspections</li>
              <li>Ensuring the site is ready for inspection (e.g., power available, construction complete)</li>
              <li>Addressing any site conditions that prevent successful inspection</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">6. Payments</h2>
            <p className="mb-4">
              Payment terms will be specified in the service agreement. Generally:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>A deposit may be required before work begins</li>
              <li>Progress payments may be required for larger projects</li>
              <li>Final payment is due upon project completion and acceptance</li>
              <li>Late payments may incur interest charges</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">7. Warranties</h2>
            <p className="mb-4">
              Fire Detection Unlimited provides warranties on workmanship and installed equipment as specified 
              in the service agreement. Equipment warranties are subject to the manufacturer&apos;s warranty terms. 
              Our standard workmanship warranty covers defects in installation for one year from the date of 
              final acceptance.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Fire Detection Unlimited shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising out of or relating to 
              our services. Our total liability shall not exceed the amount paid for the specific services 
              giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">9. Emergency Services</h2>
            <p className="mb-4">
              24/7 emergency services are available to existing clients with maintenance agreements. Emergency 
              service calls are billed at our standard emergency rates. Response times may vary based on 
              location, traffic, and call volume.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">10. Website Use</h2>
            <p className="mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Interfere with the proper working of the website</li>
              <li>Submit false or misleading information through contact forms</li>
              <li>Use the website to send spam or unsolicited communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">11. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, and images, is the property of 
              Fire Detection Unlimited or its licensors and is protected by copyright and other intellectual 
              property laws. You may not use, reproduce, or distribute our content without express written permission.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">12. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of 
              California, without regard to its conflict of law provisions. Any disputes shall be resolved 
              in the courts located in Contra Costa County, California.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">13. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting to our website. Your continued use of our services after changes constitutes 
              acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">14. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision 
              will be limited or eliminated to the minimum extent necessary, and the remaining provisions 
              will remain in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">15. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-[#F8FAFC] p-6 rounded-lg mb-6">
              <p className="mb-2"><strong>Fire Detection Unlimited, Inc.</strong></p>
              <p className="mb-1">1810 Apollo Way</p>
              <p className="mb-1">Concord, CA 94520</p>
              <p className="mb-1">Phone: <a href="tel:+19256764444" className="text-[#FF6B35] hover:underline">(925) 676-4444</a></p>
              <p>Email: <a href="mailto:info@firedetect.com" className="text-[#FF6B35] hover:underline">info@firedetect.com</a></p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
            <Link href="/" className="text-[#FF6B35] hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

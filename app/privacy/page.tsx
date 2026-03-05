import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-[#64748B] mb-8">
            Last updated: March 4, 2026
          </p>

          <div className="prose prose-lg max-w-none text-[#2C3E50]">
            <p className="mb-6">
              Fire Detection Unlimited, Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-[#1B365D] mt-6 mb-3">Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fill out contact forms or request quotes</li>
              <li>Sign up for our newsletter</li>
              <li>Request information about our services</li>
              <li>Contact us via phone or email</li>
            </ul>
            <p className="mb-4">
              This information may include your name, email address, phone number, company name, 
              and project details.
            </p>

            <h3 className="text-xl font-semibold text-[#1B365D] mt-6 mb-3">Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you quotes and project information</li>
              <li>Process and manage service requests</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (e.g., IT services, payment processors)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">Cookies</h2>
            <p className="mb-4">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
              You can set your browser to refuse cookies, but some features of our website may not function properly.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review the privacy policies of any third-party 
              sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">Children&apos;s Privacy</h2>
            <p className="mb-4">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children. If you believe we have inadvertently collected information from a child, 
              please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an 
              updated &ldquo;Last updated&rdquo; date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-[#1B365D] mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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

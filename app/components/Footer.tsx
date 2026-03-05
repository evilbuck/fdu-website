import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B365D] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <span className="text-[#1B365D] font-bold text-lg" style={{ color: '#1B365D' }}>FDU</span>
              </div>
              <div>
                <span className="font-bold text-lg leading-tight block">Fire Detection</span>
                <span className="text-sm text-white/80">Unlimited, Inc.</span>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Making fire alarm simple for Bay Area businesses since 2001. Veteran-owned, NICET Level IV certified.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#FF6B35] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#FF6B35] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/design-installation" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  Design & Installation
                </Link>
              </li>
              <li>
                <Link href="/services/monitoring" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  24/7 Monitoring
                </Link>
              </li>
              <li>
                <Link href="/services/inspections" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  Inspections & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  Emergency Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/upgrades" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  System Upgrades
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/about/certifications" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#FF6B35] text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19256764444"
                  className="flex items-center text-white/80 hover:text-[#FF6B35] text-sm transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  (925) 676-4444
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@firedetect.com"
                  className="flex items-center text-white/80 hover:text-[#FF6B35] text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  info@firedetect.com
                </a>
              </li>
              <li>
                <div className="flex items-start text-white/80 text-sm">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    1810 Apollo Way<br />
                    Concord, CA 94520
                  </span>
                </div>
              </li>
            </ul>
            
            {/* Certifications */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-xs text-white/60 mb-2">Certifications</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white/10 px-2 py-1 rounded">C-10 Licensed</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">NICET IV</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">UL Listed</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded">DVBE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-white/60 text-sm">
              {currentYear} Fire Detection Unlimited, Inc. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

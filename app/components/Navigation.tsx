"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const phoneNumber = "(925) 676-4444";
  const phoneHref = "tel:+19256764444";

  const navItems = [
    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "Fire Alarm Design & Installation", href: "/services/design-installation" },
        { label: "24/7 Monitoring", href: "/services/monitoring" },
        { label: "Inspections & Maintenance", href: "/services/inspections" },
        { label: "Emergency Repairs", href: "/services/emergency" },
        { label: "System Upgrades", href: "/services/upgrades" },
      ],
    },
    {
      label: "For You",
      href: "#",
      dropdown: [
        { label: "General Contractors", href: "/general-contractors" },
        { label: "Property Managers", href: "/property-managers" },
        { label: "Engineers", href: "/engineers" },
        { label: "Government", href: "/government" },
      ],
    },
    {
      label: "About",
      href: "/about",
      dropdown: [
        { label: "Our Story", href: "/about" },
        { label: "Leadership", href: "/about/leadership" },
        { label: "Certifications", href: "/about/certifications" },
        { label: "Technology Partners", href: "/about/partners" },
      ],
    },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#1B365D] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">FDU</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-[#1B365D] font-bold text-lg leading-tight block">Fire Detection</span>
                <span className="text-[#1B365D] text-xs">Unlimited, Inc.</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-[#2C3E50] hover:text-[#1B365D] transition-colors"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
                
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-[#E2E8F0] rounded-md shadow-lg py-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-[#2C3E50] hover:bg-[#ECF0F1] hover:text-[#1B365D]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={phoneHref}
              className="flex items-center text-[#1B365D] hover:text-[#FF6B35] transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">{phoneNumber}</span>
            </a>
            <Button 
              className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold"
              asChild
            >
              <Link href="/contact/quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <a
              href={phoneHref}
              className="p-2 text-[#1B365D] hover:text-[#FF6B35]"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#1B365D] hover:text-[#FF6B35]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium text-[#2C3E50] hover:text-[#1B365D]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-1 text-sm text-[#64748B] hover:text-[#1B365D]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#E2E8F0]">
              <a
                href={phoneHref}
                className="flex items-center py-2 text-[#1B365D] font-semibold"
              >
                <Phone className="h-4 w-4 mr-2" />
                {phoneNumber}
              </a>
              <Button 
                className="w-full mt-2 bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold"
                asChild
              >
                <Link href="/contact/quote" onClick={() => setIsMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

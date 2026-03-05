"use client";

import Image from "next/image";

const brands = [
  { name: "Honeywell", logo: "/brands/honeywell.svg", alt: "Honeywell" },
  { name: "Simplex", logo: "/brands/simplex.svg", alt: "Simplex" },
  { name: "Notifier", logo: "/brands/notifier.svg", alt: "Notifier" },
  { name: "Gentex", logo: "/brands/gentex.svg", alt: "Gentex" },
  { name: "Wheelock", logo: "/brands/wheelock.svg", alt: "Wheelock" },
];

export default function Brands() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B365D] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We service and install all major fire alarm brands. Our certified technicians are trained to work with equipment from the industry&apos;s top manufacturers.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={120}
                height={60}
                className="object-contain"
                onError={(e) => {
                  // Fallback to text if image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-8">
          And all other major fire alarm manufacturers
        </p>
      </div>
    </section>
  );
}

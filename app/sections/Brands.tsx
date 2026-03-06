"use client";

import Image from "next/image";
import { motion } from "motion/react";

const brands = [
  { name: "Honeywell", logo: "/brands/honeywell.svg", alt: "Honeywell" },
  { name: "Simplex", logo: "/brands/simplex.svg", alt: "Simplex" },
  { name: "Notifier", logo: "/brands/notifier.svg", alt: "Notifier" },
  { name: "Gentex", logo: "/brands/gentex.svg", alt: "Gentex" },
  { name: "Wheelock", logo: "/brands/wheelock.svg", alt: "Wheelock" },
];

export default function Brands() {
  // Triple the brands array for truly seamless infinite scroll
  const tripleBrands = [...brands, ...brands, ...brands];
  
  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B365D] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We service and install all major fire alarm brands. Our certified technicians are trained to work with equipment from the industry&apos;s top manufacturers.
          </p>
        </motion.div>
      </div>

      {/* Infinite marquee with gradient edges */}
      <div className="relative">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: ["0%", "-33.333%"], // Move exactly 1/3 for seamless loop
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Slower for smoother feel
                ease: "linear",
              },
            }}
          >
            {tripleBrands.map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex-shrink-0 cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-sm text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          And all other major fire alarm manufacturers
        </motion.p>
      </div>
    </section>
  );
}

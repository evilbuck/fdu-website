"use client";

import Link from "next/link";
import { ArrowRight, HardHat, Radio, ClipboardCheck, Wrench } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: HardHat,
    title: "Design & Installation",
    description: "Design-build fire alarm systems tailored to your building's unique requirements. From new construction to complex retrofits.",
    href: "/services/design-installation",
    features: ["Design-Build Delivery", "NICET IV Engineering", "Multi-Manufacturer Solutions"],
  },
  {
    icon: Radio,
    title: "Monitoring & Service",
    description: "24/7 UL-listed central station monitoring with rapid emergency response and specialized account protocols.",
    href: "/services/monitoring",
    features: ["UL-Listed Central Station", "24/7 Emergency Response", "Remote Diagnostics"],
  },
  {
    icon: ClipboardCheck,
    title: "Inspections & Maintenance",
    description: "NFPA 72 compliant quarterly and annual inspection programs with detailed documentation and certification.",
    href: "/services/inspections",
    features: ["NFPA 72 Compliance", "Self-Testing Systems", "Digital Reports"],
  },
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description: "Rapid response emergency service available 24/7. Local technicians, fully stocked service trucks.",
    href: "/services/emergency",
    features: ["24/7 Availability", "Local Technicians", "Rapid Response"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };
  
  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

export default function ServiceCards() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
            Comprehensive Fire Safety Solutions
          </h2>
          <p className="text-lg text-[#64748B]">
            From initial design through ongoing maintenance, we&apos;re your single partner
            for complete fire alarm and life safety systems.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{ perspective: 1000 }}
        >
          {services.map((service, index) => (
            <TiltCard
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#E2E8F0] hover:border-[#FF6B35]/30 cursor-pointer"
            >
              <motion.div variants={cardVariants} style={{ transformStyle: "preserve-3d" }}>
                {/* Icon */}
                <motion.div 
                  className="w-14 h-14 rounded-lg bg-[#1B365D]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF6B35]/10 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{ transform: "translateZ(20px)" }}
                >
                  <service.icon className="h-7 w-7 text-[#1B365D] group-hover:text-[#FF6B35] transition-colors" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1B365D] mb-3" style={{ transform: "translateZ(10px)" }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#64748B] text-sm mb-4 leading-relaxed" style={{ transform: "translateZ(5px)" }}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-[#2C3E50]" style={{ transform: "translateZ(5px)" }}>
                      <svg className="w-4 h-4 mr-2 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#1B365D] font-semibold text-sm hover:text-[#FF6B35] transition-colors group/link"
                  style={{ transform: "translateZ(15px)" }}
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center text-[#1B365D] font-semibold hover:text-[#FF6B35] transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

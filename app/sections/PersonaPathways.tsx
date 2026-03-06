"use client";

import Link from "next/link";
import { ArrowRight, HardHat, Building2, GraduationCap, Landmark } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const personas = [
  {
    icon: HardHat,
    title: "General Contractors",
    headline: "Keep Your Project on Schedule",
    description: "Unified Design-Build delivery eliminates coordination headaches. One point of accountability from blueprint to final inspection with deep AHJ relationships for first-time approvals.",
    href: "/general-contractors",
    cta: "Contractor Solutions",
  },
  {
    icon: Building2,
    title: "Property Managers",
    headline: "Reduce Costs & Liability",
    description: "Non-proprietary Autocall systems give you freedom from expensive vendor lock-in. 24/7 monitoring and comprehensive maintenance programs lower your total cost of ownership.",
    href: "/property-managers",
    cta: "Property Solutions",
  },
  {
    icon: GraduationCap,
    title: "Engineers",
    headline: "Partner with NICET IV Experts",
    description: "Peer-level technical collaboration with NICET Level IV certified engineers. Complex specifications executed precisely. Your designs built right the first time.",
    href: "/engineers",
    cta: "Engineering Solutions",
  },
  {
    icon: Landmark,
    title: "Government Agencies",
    headline: "DVBE Certified Excellence",
    description: "A veteran-owned California contractor with 24 years of public sector experience. DVBE certified with deep regulatory knowledge and procurement process familiarity.",
    href: "/government",
    cta: "Government Solutions",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

// 3D Tilt Card Component
function TiltPersonaCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 300, damping: 30 });
  
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
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

export default function PersonaPathways() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
            Solutions Tailored to Your Role
          </h2>
          <p className="text-lg text-[#64748B]">
            Whether you&apos;re managing a construction project, overseeing a property portfolio,
            designing building systems, or procuring for the public sector—we speak your language.
          </p>
        </motion.div>

        {/* Persona Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{ perspective: 1000 }}
        >
          {personas.map((persona, index) => (
            <TiltPersonaCard
              key={index}
              className="h-full"
            >
              <motion.div variants={cardVariants} style={{ transformStyle: "preserve-3d", height: "100%" }}>
                <Link
                  href={persona.href}
                  className="group block bg-[#F8FAFC] rounded-xl p-6 hover:bg-[#1B365D] transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-[#1B365D] group-hover:bg-[#FF6B35] flex items-center justify-center mb-4 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <persona.icon className="h-6 w-6 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1B365D] group-hover:text-white mb-2 transition-colors" style={{ transform: "translateZ(20px)" }}>
                    {persona.title}
                  </h3>

                  {/* Headline */}
                  <p className="text-[#FF6B35] font-semibold text-sm mb-3" style={{ transform: "translateZ(15px)" }}>
                    {persona.headline}
                  </p>

                  {/* Description */}
                  <p className="text-[#64748B] group-hover:text-white/80 text-sm mb-4 leading-relaxed transition-colors" style={{ transform: "translateZ(10px)" }}>
                    {persona.description}
                  </p>

                  {/* CTA */}
                  <div className="inline-flex items-center text-[#1B365D] group-hover:text-white font-semibold text-sm transition-colors" style={{ transform: "translateZ(25px)" }}>
                    {persona.cta}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            </TiltPersonaCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

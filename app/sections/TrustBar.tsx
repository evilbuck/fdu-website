"use client";

import { Award, Clock, Users, MapPin, Shield, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: Clock,
    value: "24+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Projects Completed",
  },
  {
    icon: Shield,
    value: "24/7",
    label: "Support Available",
  },
  {
    icon: MapPin,
    value: "Bay Area",
    label: "Local Service",
  },
];

const certifications = [
  { icon: Award, label: "C-10 Licensed" },
  { icon: CheckCircle, label: "NICET Level IV" },
  { icon: Shield, label: "UL Listed" },
  { icon: Award, label: "Autocall Elite" },
  { icon: Award, label: "Veteran-Owned" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-[#E2E8F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Certifications Row */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 text-[#2C3E50]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
                },
              }}
            >
              <cert.icon className="h-5 w-5 text-[#FF6B35]" />
              <span className="text-sm font-medium">{cert.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-[#E2E8F0]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1
                  }
                },
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1B365D]/10 mb-3"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 107, 53, 0.15)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <stat.icon className="h-6 w-6 text-[#1B365D]" />
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#64748B]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

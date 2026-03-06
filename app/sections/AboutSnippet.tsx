"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const stats = [
  { value: "24+", label: "Years Serving Bay Area" },
  { value: "1000+", label: "Projects Completed" },
  { value: "NICET", label: "Level IV Certified" },
  { value: "24/7", label: "Emergency Support" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function AboutSnippet() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for columns
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const statsY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  
  // Spring physics for smoother motion
  const smoothContentY = useSpring(contentY, { stiffness: 100, damping: 30 });
  const smoothStatsY = useSpring(statsY, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <motion.section 
      ref={containerRef}
      className="py-16 md:py-24 bg-[#1B365D] text-white overflow-hidden"
      style={{ opacity: smoothOpacity }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column with Parallax */}
          <motion.div
            style={{ y: smoothContentY }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Family-Owned, Veteran-Led, Bay Area Proud
            </motion.h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Founded in 2001 in Concord, California, Fire Detection Unlimited has grown from a small
                local contractor to a trusted regional leader in fire alarm and life safety systems.
                For over 24 years, we&apos;ve protected businesses throughout the Bay Area and Sacramento region.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Led by USMC Veteran Richard C. Pulver, our team brings military discipline and precision
                to every project. With NICET Level IV certification and C-10 licensing, we deliver
                engineering excellence that national competitors can&apos;t match with the personal attention
                that only a family business can provide.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We&apos;re not just installing fire alarm systems—we&apos;re building lasting partnerships
                with the businesses that keep our community safe.
              </motion.p>
            </div>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold px-6 py-3 rounded-lg transition-colors hover:scale-105 transform duration-200"
              >
                Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about/leadership"
                className="inline-flex items-center border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#1B365D] font-semibold px-6 py-3 rounded-lg transition-colors hover:scale-105 transform duration-200"
              >
                Meet Our Team
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Column with Parallax */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            style={{ y: smoothStatsY }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/10"
                variants={statVariants}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 107, 53, 0.25)",
                  borderColor: "rgba(255, 107, 53, 0.5)",
                  transition: { duration: 0.2 } 
                }}
                style={{
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Normal import
import Link from "next/link";
import { 
  Calculator, 
  LineChart, 
  BookOpen, 
  Users, 
  Building2, 
  Heart 
} from "lucide-react";
import { styles, colors, fadeIn, staggeredFadeIn, revealText, type CardProps, type SectionProps } from "./styles";

// Card Component
const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

// Section Component
const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => (
  <motion.section
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeIn}
    className={`${styles.section} ${className}`}
  >
    <motion.h2 variants={revealText} className={styles.sectionTitle} style={{ color: colors.darkTeal }}>
      {title}
    </motion.h2>
    <motion.div variants={fadeIn} style={{ color: colors.lightTeal }} className="space-y-4 sm:space-y-6">
      {children}
    </motion.div>
  </motion.section>
);

// Sidebar Component
function ServicesSidebar() {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeIn} className={styles.sidebar}>
      <h2 className="text-2xl font-bold mb-8" style={{ color: colors.darkTeal }}>
        Services
      </h2>
      <ul className={styles.sidebarList}>
        {[
          { name: "Healthcare Systems!", href: "/healthcare-system" },
          { name: "Hospitals", href: "/hospitals" },
          { name: "Nursing Homes", href: "/nursing-homes" },
          { name: "Emergency Rooms", href: "/emergency-rooms" },
          { name: "Private Practices", href: "/private-practices" },
          { name: "All Specialties", href: "/specialties" }
        ].map((service, index) => (
          <motion.li
            key={index}
            variants={staggeredFadeIn(index)}
            className="text-base hover:text-purple-700 transition-colors flex items-center space-x-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current"/>
            <Link href={service.href} className="hover:underline" style={{ color: colors.lightTeal }}>
              {service.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

// Main Page Component
export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {isClient && ( // Prevents rendering motion elements during SSR
        <motion.section initial="initial" animate="animate" variants={fadeIn} className={styles.heroSection}>
          <div className="text-center">
            <motion.h1 variants={revealText} className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: colors.darkTeal }}>
              WHY CHOOSE US?
            </motion.h1>
          </div>
        </motion.section>
      )}

      <div className={styles.mainLayout}>
        <div className={styles.gridLayout}>
          <div className={styles.mainContent}>
            <Section title="Why Choose PM Billing?">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Our team ensures that denials remain below 20%.",
                  "Reduce manual entry and improve RCM system efficiency.",
                  "Out-of-network negotiations.",
                  "Payment posting and adjustments for refunds to improve cash flow.",
                  "A dedicated account manager for all your requirements.",
                  "Provide high-quality, error-free billing and collection services.",
                  "We consistently increase our clients' collection ratios through a faster accounts receivable process and timely follow-up.",
                  "Use the latest technology and tools.",
                  "Offer services that can be easily scaled at any time."
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={{
                      initial: { opacity: 0, scale: 0.9, y: 20 },
                      animate: { 
                        opacity: 1, 
                        scale: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: "easeOut", delay: index * 0.1 }
                      }
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="bg-[#00474f]/5 hover:bg-[#00474f]/10 
                      p-4 rounded-lg 
                      flex items-center justify-center 
                      text-center 
                      text-base sm:text-lg 
                      font-medium 
                      text-[#006d77] 
                      border border-[#00474f]/10 
                      hover:shadow-md 
                      transition-all 
                      duration-300 
                      cursor-default"
                  >
                    {reason}
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>

          <div className="lg:sticky lg:top-8 lg:self-start">
            <ServicesSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

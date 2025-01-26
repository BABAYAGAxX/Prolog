"use client"

import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Calculator, 
  LineChart, 
  BookOpen, 
  Users, 
  Building2, 
  Heart 
} from "lucide-react";
import { styles, colors, fadeIn, staggeredFadeIn, revealText, type CardProps, type ServiceCardProps, type Service, type SidebarService, type SectionProps } from './styles';

// Card Components
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
    <motion.h2
      variants={revealText}
      className={styles.sectionTitle}
      style={{ color: colors.darkTeal }}
    >
      {title}
    </motion.h2>
    <motion.div
      variants={fadeIn}
      style={{ color: colors.lightTeal }}
      className="space-y-4 sm:space-y-6"
    >
      {children}
    </motion.div>
  </motion.section>
);

// Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, text }) => (
  <motion.div variants={fadeIn}>
    <Card className="group">
      <CardContent className="flex items-start space-x-4">
        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6" style={{ color: colors.darkTeal }} />
        </div>
        <p className="text-lg leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  </motion.div>
);

// Data
const services: Service[] = [
  { icon: Calculator, text: "Specialty-Specific Billing" },
  { icon: LineChart, text: "Network Contract Negotiation" },
  { icon: BookOpen, text: "Insurance Credentialing" },
  { icon: Users, text: "Practice Management Consulting" },
  { icon: Building2, text: "Revenue Cycle Optimization" },
  { icon: Heart, text: "Personalized Support" }
];

const sidebarServices: SidebarService[] = [
  { name: "Healthcare Systems", href: "/healthcare-system" },
  { name: "Hospitals", href: "/hospitals" },
  { name: "Nursing Homes", href: "/nursing-homes" },
  { name: "Emergency Rooms", href: "/emergency-rooms" },
  { name: "Private Practices", href: "/private-practices" },
  { name: "All Specialties", href: "/all-specialties" }
];

// Sidebar Component
function ServicesSidebar() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className={styles.sidebar}
    >
      <h2 className="text-2xl font-bold mb-8" style={{ color: colors.darkTeal }}>
        Services
      </h2>
      <ul className={styles.sidebarList}>
        {sidebarServices.map((service, index) => (
          <motion.li
            key={index}
            variants={staggeredFadeIn(index)}
            className="text-base hover:text-purple-700 transition-colors flex items-center space-x-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current"/>
            <Link 
              href={service.href}
              className="hover:underline"
              style={{ color: colors.lightTeal }}
            >
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
  return (
    <div className="min-h-screen bg-white">
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className={styles.heroSection}
      >
        <div className="text-center">
          <motion.h1
            variants={revealText}
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: colors.darkTeal }}
          >
            All Specialties
          </motion.h1>
        </div>
      </motion.section>

      <div className={styles.mainLayout}>
        <div className={styles.gridLayout}>
          <div className={styles.mainContent}>
            <Section title="Our Specialty Expertise">
              <p className="text-base sm:text-lg">
                PM Billing is staffed by professionals with extensive expertise in the following specialties:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                {[
                  "Family Practice", "Internal Medicine", "Pediatrics", 
                  "Hospitalists", "Primary Care", "Behavioral Health", 
                  "Critical Care", "Cardiology", "Urology", 
                  "Physical Therapy", "Rehabilitation", "Neurology", 
                  "Osteopathic Medicine", "Pain Management", "Podiatry"
                ].map((specialty, index) => (
                  <motion.div
                    key={index}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={{
                      initial: { 
                        opacity: 0, 
                        scale: 0.9,
                        y: 20 
                      },
                      animate: { 
                        opacity: 1, 
                        scale: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut",
                          delay: index * 0.1
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-[#00474f]/5 hover:bg-[#00474f]/10 
                      p-3 rounded-lg 
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
                    {specialty}
                  </motion.div>
                ))}
              </div>
            </Section>

            <div className="flex justify-center">
              <img src="/images/Hospitals.png" alt="Hospital Services" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            <Section title="Your Specialty, Our Expertise">
              <p className="text-base sm:text-lg">
                Navigating the complexities of insurance coverage while providing affordable care can be challenging. PM Billing excels at securing favorable network contracts for your practice.
              </p>
              <p className="text-base sm:text-lg mt-4">
                Leveraging our established relationships with various insurance companies and networks, we negotiate advantageous contracts and rates for your services. Understanding the intricacies of contracting and credentialing is essential for obtaining optimal rates, and managing this effectively requires significant expertise.
              </p>
              <p className="text-base sm:text-lg mt-4">
                Securing the right contract is crucial for establishing a profitable relationship with your desired networks. Starting with an unfavorable contract can be detrimental and difficult to amend. PM Billing leverages our connections to ensure your practice benefits from the best possible agreements.
              </p>
            </Section>

            <Section title="Our Specialty Services">
              <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    text={service.text}
                  />
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
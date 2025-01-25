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
import { styles, colors, fadeIn, fadeInUp, staggeredFadeIn, revealText, type CardProps, type ServiceCardProps, type Service, type SidebarService, type SectionProps } from './styles';

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
    variants={fadeInUp}
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
      variants={fadeInUp}
      style={{ color: colors.lightTeal }}
      className="space-y-4 sm:space-y-6"
    >
      {children}
    </motion.div>
  </motion.section>
);

// Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, text }) => (
  <motion.div variants={fadeInUp}>
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
  { icon: Calculator, text: "Accurate coding and billing" },
  { icon: LineChart, text: "Revenue cycle management" },
  { icon: BookOpen, text: "Financial consulting" },
  { icon: Users, text: "Team training and best practices" },
  { icon: Building2, text: "Insurance company negotiations" },
  { icon: Heart, text: "Long-term client relationships" }
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
            About Us
          </motion.h1>
        </div>
      </motion.section>

      <div className={styles.mainLayout}>
        <div className={styles.gridLayout}>
          <div className={styles.mainContent}>
            <Section title="PM Billing Team">
              <p className="text-base sm:text-lg">
                Our team of AAPC-certified coders and expert billers possess the knowledge and experience to provide your facility with precise and thorough work. Leveraging our extensive expertise, we communicate with your team and train them in best practices to boost your revenue.
              </p>
              <p className="text-base sm:text-lg">
                With years of experience in the medical billing industry, we have established enduring relationships with both insurance companies and our clients. Our aim is to become a recognized name within the networks, allowing us to effectively advocate for our clients' needs and deliver outstanding results. Unlike other billing companies, our commitment to quality service remains unwavering over time.
              </p>
            </Section>
            
            <div className="flex justify-center">
              <img src="/images/About-us.png" alt="Healthcare Systems" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            <Section title="PM Billing Vision">
              <p className="text-base sm:text-lg">
                We build long-term relationships with our clients by consistently maintaining high-quality service. We also offer financial consulting to providers facing challenges, allowing you to focus on what you do best: caring for your community.
              </p>
            </Section>

            <Section title="PM Billing Mission">
              <p className="text-base sm:text-lg">
                Billing is the financial heartbeat of your facility. Our goal is to help you maximize revenue through accurate coding and timely billing. Your success is our priority, and we are fully committed to diligently pursuing the returns you deserve.
              </p>
            </Section>

            <div className="flex justify-center">
              <img src="/images/about-us-2.png" alt="Healthcare Systems" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            <Section title="Our Services">
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

            <Section title="Contact Us">
              <p className="text-base sm:text-lg">
                Let us become an extension of your team. We can help you save time and increase revenue, enabling you to focus on delivering quality patient care. We take pride in supporting our clients' growth.
              </p>
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
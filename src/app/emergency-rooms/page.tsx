"use client";

import { motion } from "framer-motion";
import {
  type SectionProps,
  fadeIn,
  staggeredFadeIn,
  revealText,
  colors,
  listItemAnimation,
} from "./styles";

function Section({ title, children, className = "" }: SectionProps) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className={`py-[2rem] ${className}`}
    >
      <motion.h2
        variants={revealText}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"
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
}

function ServicesSidebar() {
  const services = [
    { name: "Healthcare Systems", href: "/healthcare-system" },
    { name: "Hospitals", href: "/hospitals" },
    { name: "Nursing Homes", href: "/nursing-homes" },
    { name: "Emergency Rooms", href: "/emergency-rooms" },
    { name: "Private Practices", href: "/private-practices" },
    { name: "All Specialties", href: "/all-specialties" },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="w-80 bg-gray-50/50 p-8 rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-8" style={{ color: colors.darkTeal }}>
        Services
      </h2>
      <ul className="space-y-6">
        {services.map((service, index) => (
          <motion.li
            key={index}
            variants={staggeredFadeIn(index)}
            className="text-lg font-medium hover:text-purple-700 transition-colors flex items-center space-x-3"
          >
            <span className="w-2 h-2 rounded-full bg-current" />
            <a
              href={service.href}
              className="hover:underline"
              style={{ color: colors.lightTeal }}
            >
              {service.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="relative h-[20vh] flex items-center justify-center bg-gradient-to-b from-[#00474f]/10 to-white"
      >
        <div className="text-center">
          <motion.h1
            variants={revealText}
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{ color: colors.darkTeal }}
          >
            Emergency Rooms
          </motion.h1>
        </div>
      </motion.section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          <div className="space-y-12">
            {/* Emergency Room Billing Services Section */}
            <Section title="Emergency Room Billing Services">
              <p className="text-base sm:text-lg">
                PM Billing provides emergency room billing services to the healthcare industry across the USA. PMB is
                trusted by large healthcare systems to deliver reliable billing solutions.
              </p>
            </Section>

            <div className="flex justify-center">
              <img src="/images/emergency-room.png" alt="Emergency Rooms" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Freestanding Emergency Rooms Section */}
            <Section title="Freestanding Emergency Rooms">
              <p className="text-base sm:text-lg">
                Freestanding emergency rooms have become widely popular, especially in Texas, as they increase access to
                healthcare for communities. While freestanding ERs provide a vital resource, billing for emergency room
                services can be complex, making it challenging to secure maximum reimbursement.
              </p>
            </Section>

            {/* Emergency Room Medical Billing Services */}
            <Section title="Emergency Room Medical Billing Services PM Billing Offers">
              <p className="text-base sm:text-lg">
                PM Billing specializes in out-of-network billing and brings unique expertise in emergency room billing,
                setting us apart from other billing companies. Our comprehensive emergency room services include:
              </p>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Patient Eligibility and Benefits Verification",
                  "Coding and Chart Auditing",
                  "Charge Entry",
                  "Claims Submission",
                  "Insurance Negotiations",
                  "Aggressive Follow-Up",
                  "Accounts Receivable Recovery",
                  "Underpaid Appeals",
                  "Accounts Receivable Analysis",
                  "Patient Billing",
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={listItemAnimation}
                    className="flex items-start space-x-2 text-base sm:text-lg"
                  >
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2"></span>
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </Section>

            {/* Why Choose PM Billing Section */}
            <Section title="Why Choose PM Billing for Emergency Billing Services?">
              <p className="text-base sm:text-lg">
                At PM Billing, we provide a comprehensive suite of Medical Billing and Revenue Cycle Management
                Solutions specifically designed to address the unique needs of healthcare organizations. By outsourcing
                your Emergency Room billing services to us, you benefit from our specialized expertise and advanced
                resources. Key reasons to partner with us include our commitment to HIPAA-compliant Emergency Room
                billing and our use of cutting-edge tools and technologies.
              </p>
              <p className="text-base sm:text-lg">
                Our experts are available 24/7 to address your inquiries and deliver prompt billing services. We offer
                cost-effective and customized medical billing solutions to meet your specific requirements.
              </p>
            </Section>
          </div>

          {/* Services Sidebar */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <ServicesSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

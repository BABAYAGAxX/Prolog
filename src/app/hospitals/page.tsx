"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { type SectionProps, fadeIn, staggeredFadeIn, revealText, colors, listItemAnimation } from "./styles"

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
  )
}

function ServicesSidebar() {
  const services = [
    { name: "Healthcare Systems", href: "/healthcare-system" },
    { name: "Hospitals", href: "/hospitals" },
    { name: "Nursing Homes", href: "/nursing-homes" },
    { name: "Emergency Rooms", href: "/emergency-rooms" },
    { name: "Private Practices", href: "/private-practices" },
    { name: "All Specialties", href: "/all-specialties" }
  ]

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
            <span className="w-2 h-2 rounded-full bg-current"/>
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
  )
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
            Our Services
          </motion.h1>
        </div>
      </motion.section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          <div className="space-y-12">
            {/* Hospital Services Section */}
            <Section title="Hospital Billing Services">
              <p className="text-base sm:text-lg">
                PM Billing boasts a professional team that provides hassle-free hospital billing services, eliminating costly errors and ensuring faster payments tailored to your healthcare organization&apos;s unique needs.
              </p>
              <p className="text-base sm:text-lg">
                Are your finances suffering due to outstanding accounts receivables?
              </p>
              <p className="text-base sm:text-lg">
                A disorganized hospital billing process can severely impact your financial health. Consider outsourcing your hospital billing services as a smart solution to streamline the entire billing and collection process at a fraction of your current operating costs.
              </p>
              <p className="text-base sm:text-lg">
                PM Billing can help you maintain an efficient payment and expense tracking system. With years of experience working with hospitals and medical practitioners, we can increase your reimbursements by over 25%. We offer comprehensive hospital revenue cycle management services, including medical accounts receivable, medical records, practice management, and patient engagement solutions. Our team of professionals will help you save time, ensure accuracy, and expedite account collections.
              </p>
            </Section>

            <div className="flex justify-center">
              <img src="/images/Medical-Billing-And-Coding-Services.png" alt="Hospital Services" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Hospital Medical Billing Services Section */}
            <Section title="Hospital Medical Billing Services We Offer">
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Insurance Eligibility Verification Services",
                  "Demographics & Charge Entry Services",
                  "Hospital Billing & Analysis",
                  "AR Follow-up Services",
                  "Hospital Collection Services & Denial Analysis",
                  "Payment Posting",
                  "Provider Credentialing",
                  "Out of Network Negotiation"
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
            
            <div className="flex justify-center">
              <img src="/images/Hospitals.png" alt="Hospital Services" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Hospital Revenue Cycle Management Process Section */}
            <Section title="PM Billing Hospital Revenue Cycle Management Process">
              <p className="text-base sm:text-lg">
                Hospital Revenue Cycle Management (RCM) is a comprehensive process that starts with the patient&apos;s appointment and ends with the healthcare provider receiving all payments. As a leading RCM service provider, we deliver high-quality hospital billing services through a systematic and efficient approach. Key steps include:
              </p>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Appropriate RCM Software",
                  "Insurance Eligibility and Verification",
                  "Patient Pre-certification/Pre-authorization",
                  "Demographics and Charge Entry",
                  "Co-payments and Deductibles",
                  "Filing Claims",
                  "Reimbursement for Services Rendered",
                  "Managing Denials",
                  "Hospital Billing & Collection Services",
                  "Medical Appeals",
                  "Refunds"
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={listItemAnimation}
                    className="flex items-start space-x-2 text-base sm:text-lg"
                  >
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2"></span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ul>
            </Section>

            {/* RCM Software Section */}
            <Section title="RCM Software's PM Billing Supports">
              <p className="text-base sm:text-lg">
                Modern medical billing software is crucial for efficient billing and administrative procedures. Our team has expertise in various tools and technologies for hospital billing, including CollaborateMD, Office Ally, eClinicalWorks, NextGen, AdvancedMD, and ClaimFusion.
              </p>
            </Section>

            {/* Why Choose PM Billing Section */}
            <Section title="Why Choose PM Billing for Hospital Billing Services">
              <p className="text-base sm:text-lg">
                PM Billing offers a comprehensive range of medical billing solutions tailored to your healthcare organization&apos;s needs. We have experience working with various healthcare facilities, including:
              </p>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Sunrise Hospital",
                  "Kindred Hospital",
                  "The Valley Hospital",
                  "AMG",
                  "Hackensack",
                  "The Holy Name"
                ].map((facility, index) => (
                  <motion.li
                    key={index}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={listItemAnimation}
                    className="flex items-start space-x-2 text-base sm:text-lg"
                  >
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2"></span>
                    <span>{facility}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-base sm:text-lg mt-4">
                Outsourcing your hospital billing services to PM Billing provides access to HIPAA-compliant services, advanced tools, and 24/7 expert support. We offer affordable, customized medical billing and coding services.
              </p>
            </Section>

            <div className="flex justify-center">
              <img src="/images/HIPAA.png" alt="HIPAA" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Key Points Section */}
            <Section title="Key Points That Make Us the Best Hospital Billing Company">
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Reduce front-end denials by 25%",
                  "Improve RCM system efficiency and accuracy",
                  "Enhance fee correctness and collection",
                  "Conduct out-of-network negotiations",
                  "Optimize payment posting and refunds to improve cash flow",
                  "Provide dedicated account managers",
                  "Deliver high-quality, error-free billing and collection services",
                  "Increase collection ratios through a faster accounts receivable process and timely follow-up",
                  "Utilize the latest technology and tools",
                  "Offer scalable services",
                  "Implement quality control procedures and structured billing processes for error-free billing"
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={listItemAnimation}
                    className="flex items-start space-x-2 text-base sm:text-lg"
                  >
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2"></span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </Section>

            {/* Contact Section */}
            <Section title="Contact Us">
              <p className="text-base sm:text-lg">
                Contact us for comprehensive hospital billing services, precise and efficient medical billing, improved documentation and administrative tasks, better analytics, workflow integration, and enhanced data analytical capabilities.
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
  )
}


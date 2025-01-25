"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { type SectionProps, fadeIn, fadeInUp, staggeredFadeIn, revealText, colors } from "./styles"

function Section({ title, children, className = "" }: SectionProps) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
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
        variants={fadeInUp}
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
    { name: "Healthcare Systems", href: "/healthcare-systems" },
    { name: "Hospitals", href: "/hospitals" },
    { name: "Nursing Homes", href: "/nursing-homes" },
    { name: "Emergency Rooms", href: "/emergency-rooms" },
    { name: "Private Practices", href: "/private-practices" },
    { name: "All Specialties", href: "/specialties" }
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
            Private Practices
          </motion.h1>
        </div>
      </motion.section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          <div className="space-y-12">
            {/* Introduction Section */}
            <Section title="PM Billing for Private Practices">
              <p className="text-base sm:text-lg">
                PM Billing proudly serves a diverse range of medical facilities, including private practices and healthcare systems. Our extensive experience in medical billing and coding keeps us at the forefront of healthcare advancements. Private practices often face revenue challenges due to limited knowledge of revenue cycle management, and we are here to address these issues comprehensively.
              </p>
            </Section>

            <div className="flex justify-center">
              <img src="/images/Private-practices.png" alt="Private Practices" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Medical Billing Services Section */}
            <Section title="Private Practice Medical Billing Services We Offer">
              <p className="text-base sm:text-lg">
                Errors in documentation are a major cause of revenue issues in private practice revenue cycle management. At PM Billing, we focus on training your team to understand the critical importance of accurate documentation, significantly increasing the likelihood of claim acceptance. We proudly maintain a 99.9% acceptance rate for billed claims. In the rare event of a claim denial, our accounts receivable team promptly corrects the issue and resubmits the claim. We ensure that all claims for practices are filed within 24 hours.
              </p>
              
              <p className="text-base sm:text-lg">
                In addition to documentation support, we assist in gathering information from insurance companies regarding patient eligibility and benefits. This helps prevent the common issue of overcharging due to incomplete information, which can erode patient trust and lead to refund complications.
              </p>
              
              <p className="text-base sm:text-lg">
                PM Billing keeps you updated on the latest coding practices and compliance requirements. Incorrect coding can lead to lost revenue, but with our expertise, you'll be informed of the most effective codes and best practices to optimize your revenue.
              </p>
              
              <p className="text-base sm:text-lg">
                We manage patient statements, handle patient calls, and aggressively pursue appeals, alleviating the time-consuming billing tasks from your workload. This not only ensures timely revenue collection but also allows your staff to focus on patient care, enhancing patient satisfaction and workflow.
              </p>
            </Section>

            <div className="flex justify-center">
              <img src="/images/private2.png" alt="Private Practices" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Contact Section */}
            <Section title="Contact PM Billing for Private Practice Billing">
              <p className="text-base sm:text-lg">
                Switching to PM Billing offers numerous advantages. Our strong industry relationships and unmatched service quality in medical billing can help you boost cash flow and improve patient flow. Let us streamline your billing processes and provide the insights you need to enhance your practice's financial health.
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
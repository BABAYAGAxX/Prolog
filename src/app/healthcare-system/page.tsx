"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { type SectionProps, fadeIn, staggeredFadeIn, revealText, colors } from "./styles"

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
            Healthcare Systems
          </motion.h1>
        </div>
      </motion.section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          <div className="space-y-12">
            {/* Healthcare System Section */}
            <Section title="Healthcare Systems">
              <p className="text-base sm:text-lg">
                PM Billing provides a variety of customized medical billing solutions designed to meet the specific needs of your healthcare system. Our services include seamless billing, accounts receivable (AR) recovery, and error reduction, ensuring quicker payments tailored to your requirements.
              </p>
              <p className="text-base sm:text-lg">
                An inefficient billing process can significantly harm your financial health. Outsourcing your billing or revenue cycle management can be a smart solution, allowing you to streamline the entire process at a lower cost. Partnering with PM Billing enables you to address your healthcare challenges effectively.
              </p>
              <p className="text-base sm:text-lg">
                We help maintain an efficient payment and expense tracking system, potentially increasing your reimbursements by over 25%. Our comprehensive services include revenue cycle management, AR recovery, medical records review, in-patient DRG review, credentialing, and prior authorization services.
              </p>
            </Section>

            <div className="flex justify-center">
              <img src="/images/Healthcare-Systems.png" alt="Healthcare Systems" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Medical Billing Services Section */}
            <Section title="Medical Billing Services PM Billing Offers">
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Patient Registration: Collect patient demographics and insurance information, and record them into the billing software with up to a 99% accuracy rate.",
                  "Insurance Verification: Verify the insurance eligibility and benefits before submitting claims to avoid any delays in reimbursement.",
                  "Charge Entry: Enter the provided services for the specific date of service with accurate coding and CPT codes, after verifying correct coding.",
                  "Claim Submission: PM Billing submits received charges and billing to insurance companies within 48 hours.",
                  "Payment Posting: Record payments received from the payer or patient in the form of ERA/EOB within 24 hours of receipt.",
                  "Denial Management: Handle any claim denials and resubmit or appeal within 24 hours to avoid delays in the payment cycle.",
                  "Patient Billing: Generate and send invoices to the patient for any remaining balance, and follow up on them.",
                  "Provider Credentialing: Provide credentialing services for all payers/States.",
                  "Reporting: Provide weekly, bi-weekly, and monthly financial reports with a complete overview of the account."
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggeredFadeIn(index)}
                    className="text-base sm:text-lg"
                  >
                    <strong>{service.split(":")[0]}</strong>{service.split(":")[1]}
                  </motion.li>
                ))}
              </ul>
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
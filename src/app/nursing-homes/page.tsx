"use client"

import { motion } from "framer-motion"
import { type SectionProps, fadeIn, fadeInUp, staggeredFadeIn, revealText, colors, listItemAnimation } from "./styles"

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
    { name: "Healthcare Systems", href: "/healthcare-system" },
    { name: "Hospitals", href: "/hospitals" },
    { name: "Nursing Homes", href: "/nursing-home" },
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
            Nursing Home
          </motion.h1>
        </div>
      </motion.section>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          <div className="space-y-12">
            {/* Nursing Home Services Section */}
            <Section title="Nursing Home Billing Services">
              <p className="text-base sm:text-lg">
                PM Billing employs a highly skilled team specializing in nursing home billing services. Our expertise ensures elimination of costly errors and facilitates faster payments, precisely tailored to meet the unique requirements of your healthcare organization.
              </p>
            </Section>

            <div className="flex justify-center">
              <img src="/images/Nursing-Homes.png" alt="Hospital Services" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* Nursing Homes List Section */}
            <Section title="Our Expertise">
              <p className="text-base sm:text-lg">
                Our dedicated team possesses extensive expertise and robust billing knowledge for the following nursing homes:
              </p>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Lakeland Hill Center",
                  "Valencia Hills",
                  "The Lake Gibson",
                  "Bridge Walk",
                  "Scott Lake",
                  "West minister",
                  "Lakeland Nursing and Rehab Center",
                  "Breezy Hills",
                  "Florida Presbyterian",
                  "Encompass Health",
                  "Brookhaven Center for Rehab and Healthcare",
                  "Careone At Livingston",
                  "Brookhaven Health Care Center",
                  "Atrium Post-Acute Care Livingston"
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
            </Section>

            {/* Contact Section */}
            <Section title="Contact Us">
              <p className="text-base sm:text-lg">
                Contact us for expert nursing home billing services, precise medical billing, enhanced documentation and administrative support, advanced analytics, streamlined workflow integration, and sophisticated data analysis capabilities.
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


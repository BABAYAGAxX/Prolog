"use client"

import { motion } from "framer-motion"
import { type SectionProps, fadeIn, fadeInUp, staggeredFadeIn, revealText, colors, services } from "./styles"

function Section({ title, children, className = "" }: SectionProps) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className={`py-[2rem] px-4 md:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
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
      </div>
    </motion.section>
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
        className="relative min-h-[10vh] sm:h-[20vh] flex items-center justify-center bg-gradient-to-b from-[#00474f]/10 to-white"
      >
        <div className="text-center px-4 sm:px-6">
          <motion.h1
            variants={revealText}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 pb-4 border-b max-w-3xl mx-auto"
            style={{ color: colors.darkTeal }}
          >
            Keystone of Your Financial Performance
          </motion.h1>
        </div>
      </motion.section>

      {/* Team Section */}
      <Section title="PM Billing Team">
        <p className="text-base sm:text-lg">
          Our team of AAPC-certified coders and expert billers possess the knowledge and experience to provide your facility
          with precise and thorough work. Leveraging our extensive expertise, we communicate with your team and train them
          in best practices to boost your revenue.
        </p>
        <p className="text-base sm:text-lg">
          With years of experience in the medical billing industry, we have established enduring relationships with both
          insurance companies and our clients. Our aim is to become a recognized name within the networks, allowing us to
          effectively advocate for our clients' needs and deliver outstanding results. Unlike other billing companies, our
          commitment to quality service remains unwavering over time.
        </p>
      </Section>

      {/* Image Section */}
      <div className="flex justify-center my-8">
        <img src="/images/About-us.png" alt="About Us" className="max-w-[900px] h-auto" />
      </div>

      {/* Vision Section */}
      <Section title="PM Billing Vision" className="bg-gray-50">
        <p className="text-base sm:text-lg">
          We build long-term relationships with our clients by consistently maintaining high-quality service. We also offer
          financial consulting to providers facing challenges, allowing you to focus on what you do best: caring for your
          community.
        </p>
      </Section>

      {/* Image Section */}
      <div className="flex justify-center my-8">
        <img src="/images/about-us-2.png" alt="About Us" className="max-w-[900px] h-auto" />
      </div>

      {/* Mission Section */}
      <Section title="PM Billing Mission">
        <p className="text-base sm:text-lg">
          Billing is the financial heartbeat of your facility. Our goal is to help you maximize revenue through accurate
          coding and timely billing. Your success is our priority, and we are fully committed to diligently pursuing the
          returns you deserve.
        </p>
      </Section>

      {/* Services Section */}
      <Section title="Our Services" className="bg-gray-50">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.li
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggeredFadeIn(index)}
              className="flex items-center space-x-2 text-base sm:text-lg"
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: colors.darkTeal }} />
              <span>{service}</span>
            </motion.li>
          ))}
        </ul>
      </Section>

      {/* Contact Section */}
      <Section title="Contact Us">
        <p className="text-base sm:text-lg">
          Let us become an extension of your team. We can help you save time and increase revenue, enabling you to focus on
          delivering quality patient care. We take pride in supporting our clients' growth.
        </p>
      </Section>
    </div>
  )
}

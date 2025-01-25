import { type ReactNode } from "react"
import { type Variants } from "framer-motion"

export interface SectionProps {
  title: string
  children: ReactNode
  className?: string
}

// Enhanced animation variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, ease: "easeOut" },
}

export const staggeredFadeIn = (index: number): Variants => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: index * 0.5, duration: 0.5, ease: "easeOut" },
})

export const revealText: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
}

export const listItemAnimation: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}

export const colors = {
  darkTeal: "#00474f",
  lightTeal: "#006d77",
} as const


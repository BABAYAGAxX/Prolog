import { type ReactNode } from "react"
import { type Variants } from "framer-motion"

export interface SectionProps {
  title: string
  children: ReactNode
  className?: string
}

// Animation Variants
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const staggeredFadeIn = (index: number): Variants => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
});

export const revealText: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Transition configurations (separate from variants)
export const transitions = {
  fadeIn: { duration: 1.2, ease: "easeOut" },
  staggeredFadeIn: (index: number) => ({ 
    delay: index * 0.2, 
    duration: 0.5, 
    ease: "easeOut" 
  }),
  revealText: { duration: 0.8, ease: "easeOut", delay: 0.2 }
};

export const colors = {
  darkTeal: "#00474f",
  lightTeal: "#006d77",
} as const
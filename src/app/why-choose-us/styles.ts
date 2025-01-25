import { type ReactNode } from "react";
import { type Variants } from "framer-motion";
import { LucideIcon } from 'lucide-react';

// Types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

// Animation Variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, ease: "easeOut" },
};

export const staggeredFadeIn = (index: number): Variants => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: index * 0.2, duration: 0.5, ease: "easeOut" },
});

export const revealText: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
};

// Colors
export const colors = {
  darkTeal: "#00474f",
  lightTeal: "#006d77",
} as const;

// Styles
export const styles = {
  section: "py-[2rem]",
  sectionTitle: "text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8",
  mainContent: "space-y-12",
  heroSection: "relative h-[20vh] flex items-center justify-center bg-gradient-to-b from-[#00474f]/10 to-white",
  sidebar: "w-80 bg-gray-50/50 p-8 rounded-lg",
  sidebarList: "space-y-6",
  mainLayout: "max-w-[1400px] mx-auto px-4 md:px-8",
  gridLayout: "grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12"
} as const;
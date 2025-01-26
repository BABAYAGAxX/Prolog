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

export interface ServiceCardProps {
  icon: LucideIcon;
  text: string;
}

export interface Service {
  icon: LucideIcon;
  text: string;
}

export interface SidebarService {
  name: string;
  href: string;
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

// Colors
export const colors = {
  darkTeal: "#00474f",
  lightTeal: "#006d77",
} as const;

// Styles
export const styles = {
  section: "py-[2rem]",
  sectionTitle: "text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8",
  servicesGrid: "grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto",
  card: "group hover:shadow-lg transition-all duration-300",
  cardContent: "p-6 flex items-start space-x-4",
  iconWrapper: "p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300",
  icon: "w-6 h-6 text-primary",
  serviceText: "text-lg leading-relaxed",
  mainContent: "space-y-12",
  heroSection: "relative h-[20vh] flex items-center justify-center bg-gradient-to-b from-[#00474f]/10 to-white",
  sidebar: "w-80 bg-gray-50/50 p-8 rounded-lg",
  sidebarList: "space-y-6",
  mainLayout: "max-w-[1400px] mx-auto px-4 md:px-8",
  gridLayout: "grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12"
} as const;
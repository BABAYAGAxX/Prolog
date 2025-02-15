import { env } from "@/env";
import { Metadata } from "next";

const siteConfig = {
  defaultTitle: "PM Billing - Prolog Medical Billing",
  defaultDescription:
    "Prolog Medical Billing (PM Billing) offers expert medical billing services for healthcare providers.",
  baseUrl: env.NEXT_PUBLIC_SITE_URL || "https://pmbilling.us", // Fallback to domain
};

/**
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */

export default function getMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: {
      default: siteConfig.defaultTitle,
      template: "%s | PM Billing",
    },
    description: siteConfig.defaultDescription,
    icons: {
      icon: "/favicon/favicon.ico",
      shortcut: "/favicon/favicon-16x16.png",
      apple: "/favicon/apple-touch-icon.png",
    },
    manifest: "/favicon/site.webmanifest",
    openGraph: {
      url: siteConfig.baseUrl,
      title: siteConfig.defaultTitle,
      description: siteConfig.defaultDescription,
      siteName: siteConfig.defaultTitle,
      images: [{ url: "/images/og.png", width: 1200, height: 630 }], // Fix array structure
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.defaultTitle,
      description: siteConfig.defaultDescription,
      images: ["/images/og.png"], // Fix array structure
    },
    robots: "index, follow", // Ensure indexing
    ...overrides, // Allow dynamic overrides per page
  };
}

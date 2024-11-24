import { Onest } from "next/font/google";
import "./globals.css";
import getMetadata from "@/lib/seo";
import Layout from '@/components/Layout';


// const inter = Onest({ subsets: ["latin"] });

export const metadata = getMetadata({});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

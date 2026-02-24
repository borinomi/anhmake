import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anhmake | #1 AI Automation Agency",
  description:
    "We systemize and automate businesses for highly profitable scale. Custom and done-for-you AI automations to crush constraints and skyrocket team productivity.",
  keywords: [
    "AI automation",
    "business automation",
    "workflow automation",
    "Make.com",
    "Monday.com",
    "n8n",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-axe-bg text-axe-dark pt-16">
        <Navbar />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}

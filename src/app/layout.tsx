import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = 'https://winwithtech.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "WinWithTech - Genesys Cloud CX Solutions for SMBs",
    template: "%s | WinWithTech"
  },
  description: "Transform your customer experience with WinWithTech's Genesys Cloud CX solutions. Offering cloud services, web development, digital marketing, and business reputation management for SMBs.",
  keywords: [
    "Genesys Cloud CX",
    "Customer Experience Solutions",
    "Cloud Services",
    "Web Development",
    "Digital Marketing",
    "Business Reputation Management",
    "SMB Solutions",
    "CX Platform",
    "Cloud Implementation",
    "IT Infrastructure"
  ],
  authors: [{ name: "WinWithTech" }],
  creator: "WinWithTech",
  publisher: "WinWithTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/favicon.svg" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "WinWithTech - Genesys Cloud CX Solutions for SMBs",
    description: "Transform your customer experience with WinWithTech's Genesys Cloud CX solutions. Expert implementation and support for small and medium businesses.",
    siteName: "WinWithTech"
  },
  twitter: {
    card: "summary_large_image",
    title: "WinWithTech - Genesys Cloud CX Solutions",
    description: "Transform your customer experience with WinWithTech's Genesys Cloud CX solutions.",
    creator: "@winwithtech",
    site: "@winwithtech"
  },
  alternates: {
    canonical: baseUrl
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

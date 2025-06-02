import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Logo } from "@/components/Logo";
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
        <header className="border-b">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Logo className="w-32 h-10" />
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/services" className="hover:text-blue-600">Services</Link>
              <Link href="/why-genesys" className="hover:text-blue-600">Why Genesys</Link>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">WinWithTech</h3>
                <p className="text-gray-300">
                  Empowering SMBs with next-generation customer experience solutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-gray-300">Email: info@winwithtech.com</p>
                <p className="text-gray-300">11205 Lebanon Rd, #79<br />Mt Juliet, TN 37122</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                  <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} WinWithTech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

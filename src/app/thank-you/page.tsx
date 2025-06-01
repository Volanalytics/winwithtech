import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | WinWithTech",
  description: "Thank you for contacting WinWithTech. We'll be in touch soon!",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <svg
            className="w-20 h-20 text-green-500 mx-auto mb-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thank You for Reaching Out!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We've received your message and will get back to you within 24 hours. 
            In the meantime, feel free to explore more about our services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                Explore Our Services
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

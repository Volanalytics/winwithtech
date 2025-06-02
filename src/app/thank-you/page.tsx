import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | WinWithTech",
  description: "Thank you for contacting WinWithTech. We'll be in touch soon!",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Thank You for Reaching Out!"
        description="We've received your message and will get back to you within 24 hours. In the meantime, feel free to explore more about our services."
      >
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

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
      </PageHero>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  PersonalizedCXIcon, 
  ScalableSolutionsIcon, 
  ExpertGuidanceIcon,
  ServicesIcon,
  WhyGenesysIcon,
  GetStartedIcon 
} from "@/components/icons/HomeIcons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Customer Experience with Next-Gen Tech
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Empowering small and medium businesses with Genesys Cloud CX and expert consulting to win customers and drive growth.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose WinWithTech?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col items-center text-center">
              <PersonalizedCXIcon />
              <h3 className="text-xl font-semibold mb-4">Personalized CX</h3>
              <p className="text-gray-600">
                Leverage AI-powered solutions to deliver tailored customer experiences that drive loyalty and satisfaction.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <ScalableSolutionsIcon />
              <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Grow confidently with flexible, cloud-based solutions that adapt to your business needs.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <ExpertGuidanceIcon />
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Benefit from our deep expertise in CX transformation and Genesys Cloud implementation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Proven Results</h2>
            <blockquote className="text-xl text-gray-600 italic mb-6">
              "SMBs using Genesys Cloud CX saw a 60% increase in agent productivity and 92% service levels."
            </blockquote>
            <p className="text-gray-500">- Industry Research Report</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col items-center text-center">
              <ServicesIcon />
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <p className="text-gray-600 mb-4">
                Discover how we can transform your customer experience with Genesys Cloud CX.
              </p>
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <WhyGenesysIcon />
              <h3 className="text-xl font-semibold mb-4">Why Genesys Cloud?</h3>
              <p className="text-gray-600 mb-4">
                See why leading SMBs choose Genesys Cloud CX for their customer experience.
              </p>
              <Link href="/why-genesys" className="text-blue-600 hover:text-blue-700 font-medium">
                Explore Benefits →
              </Link>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <GetStartedIcon />
              <h3 className="text-xl font-semibold mb-4">Get Started</h3>
              <p className="text-gray-600 mb-4">
                Ready to elevate your customer experience? Contact us for a consultation.
              </p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact Us →
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

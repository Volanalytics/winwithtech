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
import { HeroVideo } from "@/components/HeroVideo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <HeroVideo />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with Advanced Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Comprehensive technology solutions including Genesys Cloud CX, cloud infrastructure, web development, and AI-powered business intelligence for forward-thinking enterprises.
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
              <h3 className="text-xl font-semibold mb-4">Advanced Technology Solutions</h3>
              <p className="text-gray-600">
                Leverage AI, machine learning, and automation to transform your business operations and deliver exceptional customer experiences.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <ScalableSolutionsIcon />
              <h3 className="text-xl font-semibold mb-4">Enterprise Infrastructure</h3>
              <p className="text-gray-600">
                Build on secure, scalable cloud infrastructure with advanced integrations, APIs, and enterprise-grade security features.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <ExpertGuidanceIcon />
              <h3 className="text-xl font-semibold mb-4">Full-Service Solutions</h3>
              <p className="text-gray-600">
                End-to-end services including CX platforms, web development, digital marketing, and business intelligence solutions.
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
              "WinWithTech's comprehensive technology solutions helped us achieve 85% operational efficiency and 40% cost reduction across our digital infrastructure."
            </blockquote>
            <p className="text-gray-500">- Enterprise Technology Review</p>
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
                Explore our comprehensive suite of technology solutions for modern enterprises.
              </p>
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <WhyGenesysIcon />
              <h3 className="text-xl font-semibold mb-4">Technology Solutions</h3>
              <p className="text-gray-600 mb-4">
                From cloud infrastructure to AI-powered tools, discover how we can transform your business.
              </p>
              <Link href="/why-genesys" className="text-blue-600 hover:text-blue-700 font-medium">
                Explore Benefits →
              </Link>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <GetStartedIcon />
              <h3 className="text-xl font-semibold mb-4">Get Started</h3>
              <p className="text-gray-600 mb-4">
                Ready to modernize your business with advanced technology solutions? Let's talk.
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

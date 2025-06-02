import { Card } from "@/components/ui/card";
import { StoryIcon, ImpactIcon, InnovationIcon, CustomerSuccessIcon, ExcellenceIcon, PartnershipIcon } from "@/components/icons/AboutIcons";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - WinWithTech | Technology Solutions Partner",
  description: "Learn about WinWithTech's 15+ years of experience in customer experience and technology consulting, empowering SMBs with next-gen solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="About WinWithTech"
        description="With over 15 years of experience in customer experience and technology consulting, we empower SMBs to embrace next-gen solutions while minimizing technical debt."
      />

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-col items-center md:items-start">
                <StoryIcon />
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Founded with a vision to make enterprise-grade customer experience technology 
                accessible to small and medium businesses, WinWithTech has grown to become 
                a trusted partner in digital transformation.
              </p>
              <p className="text-gray-600">
                Our consultative approach has helped thousands of businesses elevate their 
                CX strategies, resulting in improved customer satisfaction and business growth.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                <ImpactIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-blue-600">1000+</p>
                  <p className="text-gray-600">Clients Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">95%</p>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">60%</p>
                  <p className="text-gray-600">Avg. Efficiency Gain</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">24/7</p>
                  <p className="text-gray-600">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col items-center text-center">
              <InnovationIcon />
              <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We stay ahead of technology trends to bring you cutting-edge solutions 
                that drive business growth.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <CustomerSuccessIcon />
              <h3 className="text-xl font-semibold mb-4">Customer Success</h3>
              <p className="text-gray-600">
                Your success is our success. We're committed to delivering solutions 
                that create real business value.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <ExcellenceIcon />
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our solutions, support, and 
                customer service.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <PartnershipIcon />
            <h2 className="text-3xl font-bold mb-6">Genesys Cloud CX Partnership</h2>
            <p className="text-gray-600 mb-8">
              As a certified Genesys Cloud CX partner, we bring enterprise-grade 
              customer experience solutions to SMBs. Our partnership ensures you get 
              the most out of your investment with expert implementation and support.
            </p>
            <Card className="p-8 bg-blue-50">
              <p className="text-lg font-semibold text-blue-900">
                "Trusted by thousands of businesses worldwide, Genesys Cloud CX is 
                the #1 AI-powered experience orchestration platform"
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

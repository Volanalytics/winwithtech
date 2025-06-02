import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UnifiedIcon, CloudFlexIcon, SecurityIcon, MetricsIcon, AwardsIcon, DemoIcon } from "@/components/icons/GenesysIcons"
import { PageHero } from "@/components/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why Choose Genesys Cloud CX | WinWithTech",
  description: "Discover why leading SMBs trust Genesys Cloud CX for exceptional customer experiences. Learn about key benefits, ROI metrics, and industry recognition.",
}

export default function WhyGenesysPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Why Choose Genesys Cloud CX?"
        description="Discover why leading SMBs trust Genesys Cloud CX to deliver exceptional customer experiences and drive business growth."
      />

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col items-center text-center">
              <UnifiedIcon />
              <h3 className="text-xl font-semibold mb-4">All-in-One Solution</h3>
              <p className="text-gray-600 mb-4">
                Unified platform for voice, digital channels, workforce engagement, 
                and AI-powered analytics.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Omnichannel capabilities</li>
                <li>• Integrated workforce management</li>
                <li>• Built-in analytics</li>
                <li>• AI-powered automation</li>
              </ul>
            </Card>

            <Card className="p-6 flex flex-col items-center text-center">
              <CloudFlexIcon />
              <h3 className="text-xl font-semibold mb-4">Cloud-Native Flexibility</h3>
              <p className="text-gray-600 mb-4">
                Scale your operations effortlessly with cloud-based architecture 
                designed for growth.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Rapid deployment</li>
                <li>• Automatic updates</li>
                <li>• Elastic scalability</li>
                <li>• Pay-as-you-grow model</li>
              </ul>
            </Card>

            <Card className="p-6 flex flex-col items-center text-center">
              <SecurityIcon />
              <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Industry-leading security and compliance features to protect your 
                business and customer data.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• SOC 2 compliance</li>
                <li>• End-to-end encryption</li>
                <li>• Role-based access</li>
                <li>• Regular security updates</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 flex flex-col items-center text-center">
              <MetricsIcon />
              <h3 className="text-2xl font-semibold mb-6">Customer Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-blue-600">60%</p>
                  <p className="text-gray-600">Increase in Agent Productivity</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">92%</p>
                  <p className="text-gray-600">Service Level Achievement</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">45%</p>
                  <p className="text-gray-600">Cost Reduction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">85%</p>
                  <p className="text-gray-600">First Contact Resolution</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 flex flex-col items-center text-center">
              <AwardsIcon />
              <h3 className="text-2xl font-semibold mb-6">Industry Recognition</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium mr-2">✓</span>
                  <span>Gartner Magic Quadrant Leader</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">✓</span>
                  <span>Forrester Wave™ Leader</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">✓</span>
                  <span>G2 Leader in CCaaS</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">✓</span>
                  <span>TrustRadius Top Rated</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <DemoIcon />
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you transform your customer experience with Genesys Cloud CX. 
            Schedule a demo today and see the difference for yourself.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive technology solutions for modern businesses. From cloud services and web development
            to customer experience platforms, we deliver cutting-edge solutions that drive growth.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Custom websites and web applications built with modern technologies and best practices.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Responsive website design</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>E-commerce solutions</li>
                <li>Custom web applications</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade cloud infrastructure and services across major providers.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>AWS cloud architecture</li>
                <li>Google Cloud Platform solutions</li>
                <li>Microsoft Azure integration</li>
                <li>Cloud migration services</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Customer Experience</h3>
              <p className="text-gray-600 mb-4">
                End-to-end CX solutions powered by Genesys Cloud and custom integrations.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Genesys Cloud CX implementation</li>
                <li>Omnichannel engagement</li>
                <li>AI-powered automation</li>
                <li>CX strategy consulting</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Digital Marketing & SEO</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive digital marketing solutions to increase your online presence.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Search Engine Optimization (SEO)</li>
                <li>Content strategy</li>
                <li>Analytics and reporting</li>
                <li>Performance optimization</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600">
                Leverage industry-leading cloud platforms including AWS, Google Cloud, and Microsoft Azure
                for scalable, reliable infrastructure.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Development Tools</h3>
              <p className="text-gray-600">
                Modern development stack with GitHub, Supabase, and Render for efficient,
                secure application deployment.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">CX Platforms</h3>
              <p className="text-gray-600">
                Certified partnership with Genesys Cloud CX for enterprise-grade
                customer experience solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
            <Card className="p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-6">
                We helped a mid-sized business modernize their entire digital presence with
                a new cloud-native web application, improved SEO, and integrated CX solution,
                resulting in 200% increase in online engagement and 45% reduction in operational costs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-3xl font-bold text-blue-600">200%</p>
                  <p className="text-gray-600">Engagement Increase</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">45%</p>
                  <p className="text-gray-600">Cost Reduction</p>
                </div>
              </div>
            </Card>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Digital Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

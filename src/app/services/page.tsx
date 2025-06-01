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
            Comprehensive Genesys Cloud CX solutions tailored for small and medium businesses.
            From implementation to optimization, we're with you every step of the way.
          </p>
        </div>
      </section>

      {/* Consultative Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Consultative Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Needs Assessment</h3>
              <p className="text-gray-600 mb-4">
                We conduct thorough evaluations to align Genesys Cloud CX with your unique 
                business goals and customer experience objectives.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Business process analysis</li>
                <li>Customer journey mapping</li>
                <li>Technology stack evaluation</li>
                <li>ROI projection</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Implementation</h3>
              <p className="text-gray-600 mb-4">
                Seamless setup and integration of Genesys Cloud CX with your existing 
                systems and workflows.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>System integration</li>
                <li>Data migration</li>
                <li>Custom workflow setup</li>
                <li>Security configuration</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Customization & Training</h3>
              <p className="text-gray-600 mb-4">
                Tailored solutions and comprehensive training to ensure maximum adoption 
                and effectiveness.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Custom workflow development</li>
                <li>User interface personalization</li>
                <li>Staff training programs</li>
                <li>Best practices documentation</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                24/7 expert support and continuous optimization to ensure your success.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>24/7 technical support</li>
                <li>Performance monitoring</li>
                <li>Regular system updates</li>
                <li>Optimization recommendations</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Genesys Cloud CX Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Omnichannel Engagement</h3>
              <p className="text-gray-600">
                Unify customer interactions across voice, email, chat, and social media 
                channels for seamless communication.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Leverage native AI to predict customer needs, identify trends, and 
                optimize service delivery.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Advanced Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security with TLS and AES-256 encryption to protect 
                your customer data.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Success Story</h2>
            <Card className="p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Retail SMB Transformation</h3>
              <p className="text-gray-600 mb-6">
                A retail business increased their Trustpilot score from 2.1 to 4.6 after 
                implementing Genesys Cloud CX with our guidance. Customer satisfaction 
                improved by 118% within the first three months.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-3xl font-bold text-blue-600">119%</p>
                  <p className="text-gray-600">CSAT Improvement</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">45%</p>
                  <p className="text-gray-600">Cost Reduction</p>
                </div>
              </div>
            </Card>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Your Custom CX Plan
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Card } from "@/components/ui/card";

export default function WhyGenesysPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Genesys Cloud CX?</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover why thousands of SMBs trust Genesys Cloud CX to deliver exceptional 
            customer experiences and drive business growth.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Orchestration</h3>
              <p className="text-gray-600 mb-4">
                Leverage cutting-edge artificial intelligence to:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Predict customer needs and intent</li>
                <li>Automate routine interactions</li>
                <li>Provide real-time agent assistance</li>
                <li>Optimize customer routing</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-600 mb-4">
                Built for growth with:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Auto-scaling capabilities</li>
                <li>Pay-as-you-grow pricing</li>
                <li>Flexible deployment options</li>
                <li>Global availability</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* SMB Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">SMB-Specific Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Simplified IT</h3>
              <p className="text-gray-600">
                Cloud-based solution eliminates the need for complex on-premises infrastructure, 
                reducing IT overhead and maintenance costs.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Rapid Deployment</h3>
              <p className="text-gray-600">
                Get up and running quickly with intuitive interfaces and pre-built 
                integrations with popular business tools.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Enhanced Employee Experience</h3>
              <p className="text-gray-600">
                Empower your team with AI-assisted tools and unified workspaces that 
                boost productivity and satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-4 text-left">Features</th>
                  <th className="border p-4 text-left">Legacy Systems</th>
                  <th className="border p-4 text-left">Genesys Cloud CX</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-4">Deployment Time</td>
                  <td className="border p-4">Months</td>
                  <td className="border p-4 font-medium text-blue-600">Days to Weeks</td>
                </tr>
                <tr>
                  <td className="border p-4">Infrastructure Required</td>
                  <td className="border p-4">Heavy on-premises</td>
                  <td className="border p-4 font-medium text-blue-600">Cloud-based</td>
                </tr>
                <tr>
                  <td className="border p-4">Scalability</td>
                  <td className="border p-4">Limited, hardware-dependent</td>
                  <td className="border p-4 font-medium text-blue-600">Unlimited, on-demand</td>
                </tr>
                <tr>
                  <td className="border p-4">AI Capabilities</td>
                  <td className="border p-4">Basic or none</td>
                  <td className="border p-4 font-medium text-blue-600">Advanced, built-in</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Industry Recognition</h2>
          <Card className="p-8 max-w-3xl mx-auto">
            <p className="text-xl mb-6">
              "Recognized as a Leader in the 2024 Gartner Magic Quadrant for Contact 
              Center as a Service"
            </p>
            <p className="text-gray-600">
              Trusted by over 8,000 organizations across 100+ countries
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

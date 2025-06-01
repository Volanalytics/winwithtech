import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About WinWithTech</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            With over 15 years of experience in customer experience and technology consulting, 
            we empower SMBs to embrace next-gen solutions while minimizing technical debt.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
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
              <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
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
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We stay ahead of technology trends to bring you cutting-edge solutions 
                that drive business growth.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Customer Success</h3>
              <p className="text-gray-600">
                Your success is our success. We're committed to delivering solutions 
                that create real business value.
              </p>
            </Card>
            <Card className="p-6">
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

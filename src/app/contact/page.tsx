import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactFormIcon, ContactInfoIcon, QuickResponseIcon, SocialIcon, FAQIcon, TimeIcon, SecurityIcon } from "@/components/icons/ContactIcons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | WinWithTech",
  description: "Get in touch with our Genesys Cloud CX experts. Transform your customer experience with enterprise-grade solutions tailored for SMBs.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Ready to transform your customer experience? Get in touch with our team 
            of Genesys Cloud CX experts.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="flex flex-col items-center text-center mb-8">
                <ContactFormIcon />
                <h2 className="text-2xl font-bold">Get in Touch</h2>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help?"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <ContactInfoIcon />
                <h3 className="text-xl font-semibold">Contact Information</h3>
              </div>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="block">Email:</strong>
                    contact@winwithtech.com
                  </p>
                  <p>
                    <strong className="block">Support:</strong>
                    support@winwithtech.com
                  </p>
                  <p>
                    <strong className="block">Hours:</strong>
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </Card>

              <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <QuickResponseIcon />
                <h3 className="text-xl font-semibold">Quick Response</h3>
              </div>
                <p className="text-gray-600 mb-4">
                  We typically respond to inquiries within 24 hours. For immediate 
                  assistance, our support team is available 24/7 for existing clients.
                </p>
              </Card>

              <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <SocialIcon />
                <h3 className="text-xl font-semibold">Connect With Us</h3>
              </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FAQIcon />
            <h2 className="text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <TimeIcon />
                <h3 className="text-xl font-semibold">
                  How quickly can we get started?
                </h3>
              </div>
              <p className="text-gray-600">
                We can typically begin implementation within 1-2 weeks of contract 
                signing, with most projects completed within 4-8 weeks.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                What size businesses do you work with?
              </h3>
              <p className="text-gray-600">
                We specialize in serving small and medium-sized businesses, typically 
                with 10-500 employees.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Do you offer ongoing support?
              </h3>
              <p className="text-gray-600">
                Yes, we provide 24/7 technical support and regular check-ins to ensure 
                your success.
              </p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <SecurityIcon />
                <h3 className="text-xl font-semibold">
                  What about data security?
                </h3>
              </div>
              <p className="text-gray-600">
                We maintain the highest security standards with SOC 2 compliance and 
                end-to-end encryption.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

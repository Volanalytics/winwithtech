import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "How AI-Powered CX Can Transform Your SMB",
    excerpt: "Discover how artificial intelligence is revolutionizing customer experience for small and medium businesses.",
    date: "March 15, 2024",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    title: "5 Ways Genesys Cloud CX Boosts Customer Loyalty",
    excerpt: "Learn the key features that help businesses retain customers and increase satisfaction rates.",
    date: "March 10, 2024",
    category: "Customer Experience",
    readTime: "4 min read"
  },
  {
    title: "Streamlining Operations with Cloud-Based Contact Centers",
    excerpt: "Explore how cloud technology is making enterprise-grade contact center solutions accessible to SMBs.",
    date: "March 5, 2024",
    category: "Operations",
    readTime: "6 min read"
  }
];

const resources = [
  {
    title: "The SMB Guide to Modern CX",
    type: "Whitepaper",
    description: "A comprehensive guide to implementing modern customer experience solutions in small and medium businesses."
  },
  {
    title: "Genesys Cloud CX Implementation Checklist",
    type: "Guide",
    description: "Step-by-step guide to successfully implementing Genesys Cloud CX in your organization."
  },
  {
    title: "Customer Experience Metrics That Matter",
    type: "eBook",
    description: "Learn which metrics to track and how to improve them using Genesys Cloud CX."
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Stay updated with the latest insights, trends, and best practices in 
            customer experience and contact center technology.
          </p>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="link" className="text-blue-600">
                      Read More →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Free Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button variant="outline" className="w-full">
                  Download Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Get the latest insights and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}

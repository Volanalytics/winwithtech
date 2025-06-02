import { Card } from "@/components/ui/card"
import Link from "next/link"
import { NewsletterIcon, CategoryIcons } from "@/components/icons/BlogIcons"
import { PageHero } from "@/components/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CX Insights Blog | WinWithTech",
  description: "Expert insights, industry trends, and practical tips for delivering exceptional customer experiences with Genesys Cloud CX and modern technology.",
}

type Category = 'Technology' | 'Business' | 'Analytics' | 'Case Studies' | 'Culture' | 'Strategy';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: Category;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Future of Customer Experience with AI",
    excerpt: "Explore how artificial intelligence is revolutionizing customer service and what it means for SMBs.",
    date: "March 15, 2024",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    title: "Maximizing ROI with Genesys Cloud CX",
    excerpt: "Learn how small businesses are achieving significant returns on their CX investment with Genesys Cloud.",
    date: "March 10, 2024",
    category: "Business",
    readTime: "4 min read"
  },
  {
    title: "Essential CX Metrics for SMBs",
    excerpt: "Key performance indicators every small business should track to measure customer experience success.",
    date: "March 5, 2024",
    category: "Analytics",
    readTime: "6 min read"
  },
  {
    title: "Cloud Migration Success Stories",
    excerpt: "Real-world examples of successful cloud contact center migrations and lessons learned.",
    date: "February 28, 2024",
    category: "Case Studies",
    readTime: "7 min read"
  },
  {
    title: "Building a Customer-Centric Culture",
    excerpt: "Tips and strategies for fostering a customer-first mindset in your organization.",
    date: "February 20, 2024",
    category: "Culture",
    readTime: "5 min read"
  },
  {
    title: "Omnichannel vs Multichannel: What's Right for You?",
    excerpt: "Understanding the differences and choosing the right approach for your business.",
    date: "February 15, 2024",
    category: "Strategy",
    readTime: "6 min read"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="CX Insights Blog"
        description="Expert insights, industry trends, and practical tips to help you deliver exceptional customer experiences."
      />

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-blue-600 font-medium flex items-center gap-2">
                      {CategoryIcons()[post.category]}
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href="#" className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                    <Link 
                      href="#" 
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <NewsletterIcon />
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights in customer experience, 
              technology trends, and Genesys Cloud CX updates.
            </p>
            <Card className="p-8">
              <form 
                action="https://formsubmit.co/info@winwithtech.com" 
                method="POST"
                className="flex flex-col md:flex-row gap-4"
              >
                <input type="hidden" name="_subject" value="Newsletter Subscription" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://winwithtech.com/thank-you" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

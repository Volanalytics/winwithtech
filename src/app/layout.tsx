import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WinWithTech - Genesys Cloud CX Solutions",
  description: "Empowering SMBs with next-generation customer experience solutions through Genesys Cloud CX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <header className="border-b">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bold text-xl">WinWithTech</div>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/services" className="hover:text-blue-600">Services</a>
              <a href="/why-genesys" className="hover:text-blue-600">Why Genesys</a>
              <a href="/blog" className="hover:text-blue-600">Blog</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">WinWithTech</h3>
                <p className="text-gray-300">
                  Empowering SMBs with next-generation customer experience solutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-gray-300">Email: contact@winwithtech.com</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                  <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} WinWithTech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

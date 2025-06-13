import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="title-font text-xl mb-4 text-primary">Africa Aviation Summit</h3>
            <p className="text-gray-300 mb-4">Diversification: Reaching New Customer Segments</p>
            <p className="text-gray-300">17th - 18th October, 2025 | Nairobi, Kenya</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="title-font text-xl mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/agenda" className="text-gray-300 hover:text-primary transition-colors">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-gray-300 hover:text-primary transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-gray-300 hover:text-primary transition-colors">
                  Location & Travel
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-primary transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="title-font text-xl mb-4 text-primary">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:info@africaaviationsummit.com"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  info@africaaviationsummit.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+254123456789" className="text-gray-300 hover:text-primary transition-colors">
                  +254 123 456 789
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="title-font text-xl mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Africa Aviation Innovation Summit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

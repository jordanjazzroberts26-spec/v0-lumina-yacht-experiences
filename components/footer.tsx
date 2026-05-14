"use client"

import Link from "next/link"
import { ChevronUp, Instagram, Facebook, Linkedin } from "lucide-react"
import { useScrollToTop } from "@/lib/animations"

export function Footer() {
  const scrollToTop = useScrollToTop()

  const quickLinks = [
    { href: "#programs", label: "Programs" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ]

  return (
    <footer className="bg-navy text-cream">
      <div className="px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">LUMINA</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Luxury yacht voyages curated for extraordinary experiences. Where the
              right people, the right food, and the right ocean come together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-cream/90">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-cream/70 text-sm hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-cream/70 text-sm hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-cream/90">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-cream/70 hover:text-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-cream/90">
              Contact
            </h4>
            <div className="space-y-2 text-cream/70 text-sm">
              <p>hello@luminayachts.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-cream/50 text-sm">
            {new Date().getFullYear()} Lumina Yacht Experiences. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-cream/70 text-sm hover:text-gold transition-colors duration-300"
            aria-label="Scroll to top"
          >
            Back to top
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}

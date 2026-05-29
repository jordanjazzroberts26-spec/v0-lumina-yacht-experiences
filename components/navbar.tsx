"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onOpenModal: () => void
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    {
      label: "Browse Yachts",
      href: "#browse-yachts",
      dropdown: [
        "Full Fleet",
        "Popular Yachts & Catamarans",
        "Luxury Superyachts",
        "Motor Yachts",
        "Sailing Yachts",
        "Catamarans",
      ],
    },
    {
      label: "Experiences",
      href: "#experiences",
      dropdown: [
        "Signature Collection",
        "Bespoke Journeys",
        "Wellness Retreats",
      ],
    },
    {
      label: "Destinations",
      href: "#destinations",
      dropdown: [
        "Sydney Harbour",
        "Great Barrier Reef",
        "New Zealand",
        "Pacific Islands",
        "Tasmania",
        "Hunter Valley",
        "Port Stephens",
        "Other Iconic Australian & South Pacific Destinations",
      ],
    },
    {
      label: "About",
      href: "#about",
    },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-twilight-deep/92 backdrop-blur-sm shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="relative flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-10 shrink-0">
          <span
            className={`text-xl font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-moonlight" : "text-moonlight"
            }`}
          >
            LUMINA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <a
                href={link.href}
                className={`flex items-center gap-1.5 text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-moonlight/90" : "text-moonlight/90"
                } py-4`}
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={16}
                    className="opacity-70 group-hover:rotate-180 transition-transform duration-300"
                  />
                )}
              </a>

              {/* Dropdown */}
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                  <div className="py-3 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-ink/5 overflow-hidden flex flex-col">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/[\s&]+/g, "-")}`}
                        className="px-6 py-2.5 text-sm font-medium text-ink/80 hover:text-gold hover:bg-gold/5 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block z-10 shrink-0">
          <Button
            onClick={onOpenModal}
            className="bg-gold text-ink font-semibold hover:bg-gold/90 shadow-soft transition-all duration-300"
          >
            Craft Your Experience
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-moonlight lg:hidden z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-twilight-deep/98 backdrop-blur-xl lg:hidden absolute top-full left-0 right-0 border-t border-moonlight/10 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col px-6 py-6 space-y-6">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col space-y-3">
                <a 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-moonlight font-semibold tracking-wide text-lg hover:text-gold transition-colors inline-block"
                >
                  {link.label}
                </a>
                {link.dropdown && (
                  <div className="flex flex-col pl-4 border-l border-moonlight/20 space-y-3 mt-2">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/[\s&]+/g, "-")}`}
                        className="text-moonlight/70 text-sm hover:text-gold transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false)
                onOpenModal()
              }}
              className="bg-gold text-ink font-semibold hover:bg-gold/90 mt-4 w-full"
            >
              Craft Your Experience
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

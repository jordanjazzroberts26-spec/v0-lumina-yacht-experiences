"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
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
    { href: "#programs", label: "Programs" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
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
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`text-xl font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-moonlight" : "text-moonlight"
            }`}
          >
            LUMINA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xl font-semibold tracking-wide transition-colors duration-300 hover:text-gold ${
                isScrolled ? "text-moonlight/85" : "text-moonlight/85"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={onOpenModal}
            className="bg-gold text-ink font-semibold hover:bg-gold/90 shadow-soft transition-all duration-300"
          >
            Craft Your Experience
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-moonlight md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-twilight-deep/92 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-moonlight/85 text-sm font-medium tracking-wide hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false)
                onOpenModal()
              }}
              className="bg-gold text-ink font-semibold hover:bg-gold/90 mt-2"
            >
              Craft Your Experience
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

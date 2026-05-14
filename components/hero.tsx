"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/lib/animations"

interface HeroProps {
  onOpenModal: () => void
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Luxury yacht at golden hour"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <ScrollAnimation animation="fade-up" delay={200}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-cream mb-6 leading-tight tracking-tight">
            Escape the Ordinary
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={400}>
          <p className="text-lg md:text-xl text-cream/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Luxury yacht voyages curated for extraordinary experiences
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={600}>
          <Button
            onClick={onOpenModal}
            size="lg"
            className="bg-gold text-navy font-medium hover:bg-gold/90 transition-all duration-300 px-8 py-6 text-base"
          >
            Explore Voyages
          </Button>
        </ScrollAnimation>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cream/60" size={32} />
      </div>
    </section>
  )
}

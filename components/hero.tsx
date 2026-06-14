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
        <div className="absolute inset-0 bg-gradient-to-b from-harbor-deep/50 via-twilight/35 to-harbor-deep/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <ScrollAnimation animation="fade-up" delay={200}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-moonlight mb-6 leading-tight tracking-wide">
            Escape the Ordinary
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={400}>
          <p className="text-lg md:text-xl text-moonlight/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Luxury yacht voyages curated for extraordinary experiences
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={600}>
          <Button
            onClick={onOpenModal}
            size="lg"
            className="bg-gold text-ink font-semibold hover:bg-gold/90 shadow-soft transition-all duration-500 px-8 py-6 text-base"
          >
            Explore Voyages
          </Button>
        </ScrollAnimation>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-moonlight/70" size={32} />
      </div>
    </section>
  )
}

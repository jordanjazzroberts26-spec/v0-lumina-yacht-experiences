"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { ScrollAnimation } from "@/lib/animations"

interface HeroProps {
  onOpenModal: () => void
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          poster="/images/hero.jpg"
        >
          <source src="/videos/yacht-hero.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-harbor-deep/50 via-twilight/35 to-harbor-deep/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <ScrollAnimation animation="fade-up" delay={200}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-moonlight mb-6 leading-tight tracking-wide drop-shadow-lg">
            Escape the Ordinary
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={400}>
          <p className="text-lg md:text-xl text-moonlight/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Luxury yacht voyages curated for extraordinary experiences
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={600}>
          <button
            onClick={onOpenModal}
            className="px-10 py-5 bg-champagne text-white text-lg font-bold tracking-widest uppercase rounded-radius hover:bg-champagne-hover hover:scale-[1.025] hover:shadow-lg transition-all duration-300 ease-out"
          >
            Explore Voyages
          </button>
        </ScrollAnimation>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="text-moonlight/70" size={32} />
      </div>
    </section>
  )
}

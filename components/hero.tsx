"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/lib/animations"

const yachtVideos = [
  '/videos/darling-harbour-yacht.mp4',
  '/videos/manly-beaches-yacht.mp4',
  '/videos/mosman-potts-yacht.mp4',
];

interface HeroProps {
  onOpenModal: () => void
}

export function Hero({ onOpenModal }: HeroProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % yachtVideos.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        key={currentVideoIndex}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.85) contrast(1.05)' }}
      >
        <source src={yachtVideos[currentVideoIndex]} type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/45" aria-hidden />

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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-moonlight/70" size={32} />
      </div>
    </section>
  )
}

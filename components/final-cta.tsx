"use client"

import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/lib/animations"

interface FinalCTAProps {
  onOpenModal: () => void
}

export function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-cream to-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-6">
            Craft Your Private Experience
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
            Every voyage begins with a conversation. Share your vision, and let
            us create something extraordinary—tailored to your dreams, your
            pace, your perfect escape.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={400}>
          <Button
            onClick={onOpenModal}
            size="lg"
            className="bg-gold text-navy font-medium hover:bg-gold/90 transition-all duration-300 px-10 py-6 text-lg"
          >
            Plan My Voyage
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}

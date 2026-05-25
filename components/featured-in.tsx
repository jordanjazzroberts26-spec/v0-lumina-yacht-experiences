"use client"

import { ScrollAnimation } from "@/lib/animations"

const publications = [
  "Robb Report",
  "Travel + Leisure",
  "Conde Nast Traveler",
  "Forbes Travel",
  "Yacht Charter World",
]

export function FeaturedIn() {
  return (
    <section className="py-16 px-6 lg:px-12 bg-pearl border-y border-border">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-8">
          <p className="text-whisper text-sm uppercase tracking-widest">
            Recognized By Leading Publications
          </p>
        </ScrollAnimation>

        {/* Mobile: Horizontal Scroll */}
        <div className="overflow-x-auto scrollbar-hide md:overflow-visible">
          <div className="flex gap-12 md:gap-0 md:justify-between items-center min-w-max md:min-w-0 px-4 md:px-0">
            {publications.map((publication, index) => (
              <ScrollAnimation
                key={publication}
                animation="fade-in"
                delay={index * 100}
                className="flex-shrink-0"
              >
                <span className="text-whisper hover:text-body transition-colors duration-300 text-lg md:text-xl font-medium tracking-wide">
                  {publication}
                </span>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

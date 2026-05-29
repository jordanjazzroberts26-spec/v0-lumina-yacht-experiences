"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"

interface ProgramsProps {
  onDiscoverMore: (program: string) => void
}

const programs = [
  {
    slug: "signature",
    title: "Signature Collection",
    description:
      "Multi-day voyages with curated experiences, guided activities, and moments designed to inspire. Perfect for those seeking a complete luxury escape.",
    image: "/images/program-signature.jpg",
  },
  {
    slug: "bespoke",
    title: "Bespoke Journeys",
    description:
      "Fully customized private charters with bespoke itineraries crafted around your preferences. Your vision, our expertise.",
    image: "/images/program-bespoke.jpg",
  },
  {
    slug: "wellness",
    title: "Wellness Retreats",
    description:
      "Holistic experience-focused voyages featuring yoga, meditation, organic cuisine, and rejuvenation on the open sea.",
    image: "/images/program-wellness.jpg",
  },
]

export function Programs({ onDiscoverMore }: ProgramsProps) {
  return (
    <section id="experiences" className="py-24 px-6 lg:px-12 bg-pearl scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4">
            Book an Exclusive Experience
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Each program is thoughtfully designed to create unforgettable moments
            on the water
          </p>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program, index) => (
            <ScrollAnimation
              key={program.title}
              animation="fade-up"
              delay={index * 200}
            >
              <div className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ink mb-3">
                    {program.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onDiscoverMore(program.slug)}
                    className="inline-flex items-center gap-2 mt-4 text-gold text-sm font-medium hover:text-gold/80 transition-colors group/btn"
                  >
                    Discover More
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

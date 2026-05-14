"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"

const programs = [
  {
    title: "Signature Collection",
    description:
      "Multi-day voyages with curated experiences, guided activities, and moments designed to inspire. Perfect for those seeking a complete luxury escape.",
    image: "/images/program-signature.jpg",
  },
  {
    title: "Bespoke Journeys",
    description:
      "Fully customized private charters with bespoke itineraries crafted around your preferences. Your vision, our expertise.",
    image: "/images/program-bespoke.jpg",
  },
  {
    title: "Wellness Retreats",
    description:
      "Holistic experience-focused voyages featuring yoga, meditation, organic cuisine, and rejuvenation on the open sea.",
    image: "/images/program-wellness.jpg",
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-24 px-6 lg:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-4">
            Three Curated Experiences
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
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
              <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {program.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-gold text-sm font-medium hover:underline"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

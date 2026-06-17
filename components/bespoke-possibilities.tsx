"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { ArrowRight } from "@phosphor-icons/react"

const POSSIBILITIES = [
  {
    title: "Romantic Getaway",
    description: "Secluded anchorages, private beach dining, and absolute privacy for honeymoons or special anniversaries.",
    image: "/images/gallery-2.jpg",
  },
  {
    title: "Family Adventure",
    description: "Multi-generational bonding with water sports, treasure hunts, and spacious interconnecting suites.",
    image: "/images/gallery-6.jpg",
  },
  {
    title: "Corporate Retreat",
    description: "Executive offsites blending high-level strategy sessions with unparalleled luxury and team-building.",
    image: "/images/gallery-5.jpg",
  },
  {
    title: "Culinary Expedition",
    description: "Michelin-caliber private chefs sourcing local ingredients for bespoke tasting menus every night.",
    image: "/images/gallery-4.jpg",
  },
  {
    title: "Wellness Immersion",
    description: "Onboard spa treatments, sunrise yoga, and organic menus tailored to rejuvenate mind and body.",
    image: "/images/program-wellness.jpg",
  },
  {
    title: "Adventure Explorer",
    description: "Deep-sea diving, submersible expeditions, and navigating remote, untouched marine frontiers.",
    image: "/images/gallery-1.jpg",
  }
]

export function BespokePossibilities() {
  return (
    <section className="py-24 bg-ivory text-ink border-t border-mist/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">Endless Possibilities</span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-twilight-deep">
            What kind of journey will you create?
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Beyond fixed itineraries lies true freedom. Explore some of the most popular themes our guests use as a starting point.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSSIBILITIES.map((theme, idx) => (
            <ScrollAnimation key={theme.title} animation="fade-up" delay={idx * 100} className="h-full">
              <div className="group bg-card rounded-2xl overflow-hidden card-hover-lift flex flex-col h-full border border-mist/50">
                <div className="relative h-60 overflow-hidden shrink-0">
                  <Image
                    src={theme.image}
                    alt={theme.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-twilight-deep/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-twilight-deep mb-4">
                    {theme.title}
                  </h3>
                  <p className="text-body leading-relaxed text-[15px] mb-8 flex-grow">
                    {theme.description}
                  </p>
                  
                  <button className="text-sm font-bold tracking-widest uppercase text-champagne hover:text-champagne-hover transition-colors inline-flex items-center gap-2 group/btn mt-auto">
                    Explore This Style
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
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

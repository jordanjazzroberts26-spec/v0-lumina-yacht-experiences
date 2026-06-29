"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/lib/animations"
import { Users, AnchorSimple } from "@phosphor-icons/react"

const FLEET = [
  {
    name: "LUMINA",
    guests: "Up to 12 Guests",
    features: ["Private helicopter pad", "Full-beam master suite", "Submersible diving unit", "Dedicated wellness spa"],
    description: "The crown jewel of our fleet, offering unparalleled volume and bespoke amenities for the ultimate multi-generational escape.",
    image: "/images/gallery-1.jpg",
    slug: "lumina"
  },
  {
    name: "INFINITY",
    guests: "Up to 8 Guests",
    features: ["Ultra-sleek modern design", "Shallow draft for remote anchorages", "Extensive water toy garage", "Sommelier-curated wine cellar"],
    description: "Built for intimate exploration and speed, perfect for couples or small families seeking secluded, untouched bays.",
    image: "/images/gallery-2.jpg",
    slug: "infinity"
  },
  {
    name: "AURORA",
    guests: "Up to 10 Guests",
    features: ["Expansive multi-level sun decks", "Ocean-level beach club", "Professional chef's galley", "Open-air cinema"],
    description: "Designed for seamless indoor-outdoor living and grand entertaining under the stars.",
    image: "/images/gallery-6.jpg",
    slug: "aurora"
  }
]

export function BespokeFleet() {
  return (
    <section className="py-24 lg:py-32 bg-pearl text-ink border-t border-mist/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">The Vessels</span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-twilight-deep tracking-tight">
            Yachts for Your Private Charter
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Select from our elite fleet for complete privacy, flawless service, and uncompromising luxury.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FLEET.map((yacht, idx) => (
            <ScrollAnimation key={yacht.name} animation="fade-up" delay={idx * 150} className="h-full">
              <div className="bg-card rounded-[2rem] overflow-hidden flex flex-col h-full border border-mist/50 hover:border-champagne/40 transition-colors shadow-soft hover:shadow-soft-lg group">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={yacht.image}
                    alt={`${yacht.name} Yacht`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-twilight-deep/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-twilight-deep shadow-sm flex items-center gap-2">
                    <Users size={16} weight="bold" className="text-champagne" />
                    {yacht.guests}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-twilight-deep mb-3 font-serif tracking-wide">{yacht.name}</h3>
                  <p className="text-body text-[15px] leading-relaxed mb-6">
                    {yacht.description}
                  </p>
                  
                  <div className="mb-8 flex-grow">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-champagne mb-4 flex items-center gap-2">
                      <AnchorSimple size={14} weight="bold" /> Bespoke Features
                    </h4>
                    <ul className="space-y-3">
                      {yacht.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-[14px] text-twilight-deep/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne/60 mt-1.5 mr-3 shrink-0" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={`/yachts/${yacht.slug}`}
                    className="mt-auto w-full py-4 text-center border-2 border-twilight-deep text-twilight-deep font-bold tracking-widest uppercase text-xs rounded-radius hover:bg-twilight-deep hover:text-white transition-colors"
                  >
                    View Yacht Details
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

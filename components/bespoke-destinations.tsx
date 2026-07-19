"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { ArrowRight } from "lucide-react"

const DESTINATIONS = [
  {
    name: "Great Barrier Reef",
    tags: ["Adventure", "Romance", "Wildlife"],
    image: "/images/gallery-1.jpg",
  },
  {
    name: "Sydney Harbour & East Coast",
    tags: ["Iconic Views", "Luxury Escape", "Coastal Cruising"],
    image: "/images/gallery-2.jpg",
  },
  {
    name: "New Zealand Fiords",
    tags: ["Dramatic Landscapes", "Adventure", "Serenity"],
    image: "/images/gallery-3.jpg",
  },
  {
    name: "Pacific Islands",
    tags: ["Tropical Paradise", "Romance", "Private Beaches"],
    image: "/images/gallery-4.jpg",
  },
  {
    name: "Tasmania & Beyond",
    tags: ["Wilderness", "Food & Wine", "Exploration"],
    image: "/images/gallery-5.jpg",
  },
  {
    name: "International (Med, Caribbean)",
    tags: ["Global Odyssey", "Culture", "Ultra-Luxury"],
    image: "/images/gallery-6.jpg",
  }
]

export function BespokeDestinations() {
  return (
    <section className="py-24 lg:py-32 bg-pearl text-ink border-t border-mist/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <ScrollAnimation animation="fade-up" className="text-center mb-24">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-6 block">Your Destinations, Your Way</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-ink tracking-tight">
            Anywhere You Want to Go
          </h2>
          <p className="text-xl text-ink/80 max-w-3xl mx-auto leading-relaxed font-light">
            Whether it's a hidden cove or a celebrated harbour, the destination is yours to define.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {DESTINATIONS.map((dest, idx) => (
            <ScrollAnimation key={dest.name} animation="fade-up" delay={idx * 150} className="h-full">
              <div className="group relative h-[560px] rounded-[2rem] overflow-hidden cursor-pointer shadow-soft-lg flex flex-col justify-end bg-twilight-deep">
                {/* Background Image - Zoomed in slightly with scale-105 initially, hover zooms more */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out opacity-90"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-twilight-deep via-twilight-deep/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-10 lg:p-12 flex flex-col h-full justify-end">
                  <div className="transform transition-transform duration-700 ease-out group-hover:-translate-y-4">
                    <h3 className="text-3xl lg:text-4xl font-semibold text-white tracking-wide leading-tight mb-6">
                      {dest.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {dest.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold tracking-wider uppercase text-white shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Button */}
                  <div className="pt-6 border-t border-white/20 transform opacity-90 group-hover:opacity-100 transition-all duration-700">
                    <button className="flex items-center text-champagne font-medium hover:text-white transition-colors group/btn uppercase tracking-widest text-sm">
                      Include This Destination
                      <ArrowRight className="w-5 h-5 ml-4 group-hover/btn:translate-x-2 transition-transform duration-500 ease-out" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

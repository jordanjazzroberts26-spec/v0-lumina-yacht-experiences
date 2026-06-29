"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { ArrowRight } from "lucide-react"

const DESTINATIONS = [
  {
    name: "Great Barrier Reef",
    description: "Vibrant coral gardens and untouched lagoons",
    image: "/images/gallery-1.jpg",
  },
  {
    name: "Sydney Harbour & Beyond",
    description: "Iconic landmarks and open waters",
    image: "/images/gallery-2.jpg",
  },
  {
    name: "New Zealand Fiords",
    description: "Majestic fjords and dramatic landscapes",
    image: "/images/gallery-3.jpg",
  },
  {
    name: "Pacific Islands",
    description: "Crystal waters and peaceful island escapes",
    image: "/images/gallery-4.jpg",
  },
  {
    name: "Tasmania",
    description: "Rugged coastlines and world-class cuisine",
    image: "/images/gallery-5.jpg",
  },
  {
    name: "The Whitsundays",
    description: "Pristine islands and turquoise waters",
    image: "/images/gallery-6.jpg",
  }
]

export function SignatureDestinations() {
  return (
    <section className="py-32 bg-background text-ink">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <ScrollAnimation animation="fade-up" className="text-center mb-24">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-6 block">Signature Destinations</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-twilight-deep tracking-tight">
            Extraordinary Routes Await
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
            Our multi-day voyages traverse some of the world's most breathtaking and exclusive nautical landscapes.
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
                  {/* Gradient Overlay for Text Readability - smoother and higher */}
                  <div className="absolute inset-0 bg-gradient-to-t from-twilight-deep via-twilight-deep/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-10 lg:p-12 flex flex-col h-full justify-end">
                  <div className="transform transition-transform duration-700 ease-out group-hover:-translate-y-4">
                    <h3 className="text-3xl lg:text-4xl font-semibold text-white tracking-wide leading-tight mb-4">
                      {dest.name}
                    </h3>
                    <p className="text-pearl/90 text-lg leading-relaxed mb-10 font-light tracking-wide">
                      {dest.description}
                    </p>
                  </div>
                  
                  {/* Button */}
                  <div className="pt-6 border-t border-white/20 transform opacity-90 group-hover:opacity-100 transition-all duration-700">
                    <button className="flex items-center text-champagne font-medium hover:text-white transition-colors group/btn uppercase tracking-widest text-sm">
                      Sail This Route
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

"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { MapPin, ArrowRight } from "lucide-react"

const DESTINATIONS = [
  {
    name: "Great Barrier Reef",
    description: "Dive into vibrant coral gardens and anchor in untouched turquoise lagoons teeming with marine life.",
    image: "/images/gallery-1.jpg",
  },
  {
    name: "Sydney Harbour & Beyond",
    description: "Experience iconic cityscapes before escaping to hidden coastal enclaves along the spectacular eastern seaboard.",
    image: "/images/gallery-2.jpg",
  },
  {
    name: "New Zealand Fiords",
    description: "Navigate dramatic glacial valleys, cascading waterfalls, and majestic alpine peaks from the comfort of luxury.",
    image: "/images/gallery-3.jpg",
  },
  {
    name: "Pacific Islands",
    description: "Discover a paradise of palm-fringed atolls, pristine white sands, and warm, crystal-clear Polynesian waters.",
    image: "/images/gallery-4.jpg",
  },
  {
    name: "Tasmania",
    description: "Explore rugged coastlines, historic penal colonies, and world-class culinary havens in Australia's southern jewel.",
    image: "/images/gallery-5.jpg",
  },
  {
    name: "The Whitsundays",
    description: "Sail through an archipelago of 74 tropical wonders, featuring the blindingly white sands of Whitehaven Beach.",
    image: "/images/gallery-6.jpg",
  }
]

export function SignatureDestinations() {
  return (
    <section className="py-24 bg-background text-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">Signature Destinations</span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-twilight-deep">
            Extraordinary Routes Await
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Our multi-day voyages traverse some of the world's most breathtaking and exclusive nautical landscapes.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, idx) => (
            <ScrollAnimation key={dest.name} animation="fade-up" delay={idx * 100} className="h-full">
              <div className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-soft-lg flex flex-col justify-end">
                {/* Background Image */}
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-twilight-deep via-twilight-deep/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center text-champagne mb-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <MapPin className="w-6 h-6 mr-3 shrink-0" />
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-wide leading-tight">{dest.name}</h3>
                  </div>
                  <p className="text-pearl/90 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {dest.description}
                  </p>
                  <button className="flex items-center text-champagne font-semibold hover:text-white transition-colors group/btn">
                    Sail This Route
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform" />
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

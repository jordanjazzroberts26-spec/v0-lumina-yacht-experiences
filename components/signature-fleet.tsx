"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { Anchor, Users, Check } from "lucide-react"

const FLEET = [
  {
    name: "LUMINA",
    tagline: "Our 250ft Flagship",
    capacity: "Up to 50 Guests",
    image: "/images/fleet/yacht-lumina.png",
    amenities: [
      "Master suite with private deck",
      "Full onboard spa & wellness center",
      "Dual infinity pools",
      "Helipad for remote access"
    ]
  },
  {
    name: "INFINITY",
    tagline: "The Modern Explorer",
    capacity: "Up to 25 Guests",
    image: "/images/fleet/yacht-infinity.png",
    amenities: [
      "Advanced zero-speed stabilizers",
      "5 expansive VIP cabins",
      "Professional chef's galley",
      "Extended water toy garage"
    ]
  },
  {
    name: "AURORA",
    tagline: "Intimate Luxury",
    capacity: "Up to 15 Guests",
    image: "/images/fleet/yacht-aurora.png",
    amenities: [
      "Expedition-grade capabilities",
      "Deep-water submersible",
      "Dedicated yoga & meditation studio",
      "360° observation deck"
    ]
  }
]

export function SignatureFleet() {
  return (
    <section className="py-24 bg-pearl text-ink border-t border-mist/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-twilight-deep">
            Yachts of the Signature Collection
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Vessels chosen for their elegance and capability for multi-day voyages
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FLEET.map((yacht, idx) => (
            <ScrollAnimation key={yacht.name} animation="fade-up" delay={100 * idx} className="h-full">
              <div className="group bg-card rounded-2xl overflow-hidden card-hover-lift flex flex-col h-full border border-mist/50">
                <div className="relative h-64 overflow-hidden shrink-0 bg-twilight">
                  <Image
                    src={yacht.image}
                    alt={yacht.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-twilight-deep/80 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-2xl font-bold tracking-wider">{yacht.name}</h3>
                    <p className="text-champagne text-sm font-medium">{yacht.tagline}</p>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-twilight-deep font-medium mb-6 pb-6 border-b border-mist/50">
                    <Users className="w-5 h-5 mr-3 text-champagne shrink-0" />
                    <span>Capacity: {yacht.capacity}</span>
                  </div>
                  
                  <div className="mb-4 text-sm font-bold tracking-wider text-body uppercase">
                    Multi-Day Amenities
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {yacht.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-start text-ink">
                        <Check className="w-4 h-4 text-champagne mt-1 mr-3 shrink-0" strokeWidth={3} />
                        <span className="leading-snug text-twilight-deep/90">{amenity}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-auto py-3 px-6 bg-transparent border-2 border-twilight-deep text-twilight-deep font-semibold rounded-radius hover:bg-twilight-deep hover:text-white transition-colors flex items-center justify-center gap-2 group/btn">
                    <Anchor className="w-4 h-4" />
                    View Details
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

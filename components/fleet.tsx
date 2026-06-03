"use client"

import { useState } from "react"
import Image from "next/image"
import { Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/lib/animations"

const fleetData = [
  {
    name: "AURORA",
    capacity: "85 guests",
    price: "$3,200–$3,800 per hour",
    image: "/images/yacht-aurora.png",
  },
  {
    name: "TITAN",
    capacity: "120 guests",
    price: "$4,500–$5,200 per hour",
    image: "/images/yacht-titan.png",
  },
  {
    name: "SERENITY",
    capacity: "65 guests",
    price: "$2,800–$3,400 per hour",
    image: "/images/yacht-serenity.png",
  },
  {
    name: "INFINITY",
    capacity: "95 guests",
    price: "SPOA per hour",
    image: "/images/gallery-1.jpg",
  },
  {
    name: "VELORA",
    capacity: "55 guests",
    price: "$2,400–$2,900 per hour",
    image: "/images/gallery-2.jpg",
  },
  {
    name: "PHOENIX",
    capacity: "110 guests",
    price: "$3,900–$4,600 per hour",
    image: "/images/gallery-3.jpg",
  },
  {
    name: "OCEAN PEARL",
    capacity: "75 guests",
    price: "$2,950–$3,500 per hour",
    image: "/images/gallery-4.jpg",
  },
  {
    name: "BLACK DIAMOND",
    capacity: "150 guests",
    price: "$5,800–$6,500 per hour",
    image: "/images/gallery-5.jpg",
  },
  {
    name: "HORIZON",
    capacity: "100 guests",
    price: "$3,600–$4,300 per hour",
    image: "/images/gallery-6.jpg",
  },
  {
    name: "LUMINA",
    capacity: "45 guests",
    price: "$4,200–$4,900 per hour",
    image: "/images/program-signature.jpg",
  },
]

const FEATURED_COUNT = 6

export function Fleet() {
  const [showFullFleet, setShowFullFleet] = useState(false)
  const visibleFleet = showFullFleet ? fleetData : fleetData.slice(0, FEATURED_COUNT)

  return (
    <section id="browse-yachts" className="py-12 md:py-16 px-6 lg:px-12 bg-sand scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-wide">
              Our Fleet
            </h2>
            <p className="text-base text-body font-medium tracking-wide uppercase">
              Luxury Boat Charters on Sydney Harbour
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleFleet.map((yacht, index) => (
            <ScrollAnimation
              key={yacht.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group flex flex-col h-full bg-ivory rounded-lg overflow-hidden border border-mist card-hover-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/20">
                  <Image
                    src={yacht.image}
                    alt={yacht.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col flex-1 p-5 lg:p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-ink tracking-wide uppercase">
                    {yacht.name}
                  </h3>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center text-ink text-sm">
                      <Users className="w-4 h-4 mr-2 text-gold" />
                      <span>{yacht.capacity}</span>
                    </div>
                    <div className="flex items-center text-ink text-sm">
                      <Clock className="w-4 h-4 mr-2 text-gold" />
                      <span>{yacht.price}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gold text-ink font-semibold hover:bg-gold/90 transition-all duration-500 mt-4 rounded-lg">
                    View Boat
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {!showFullFleet && fleetData.length > FEATURED_COUNT && (
          <ScrollAnimation animation="fade-up" className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => setShowFullFleet(true)}
              className="border-mist text-ink hover:bg-ivory hover:text-ink font-semibold px-8 transition-all duration-500"
            >
              View Full Fleet
            </Button>
          </ScrollAnimation>
        )}
      </div>
    </section>
  )
}

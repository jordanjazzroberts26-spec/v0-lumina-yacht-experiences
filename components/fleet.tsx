"use client"

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
    image: "/images/hero.jpg", 
  },
  {
    name: "VELORA",
    capacity: "55 guests",
    price: "$2,400–$2,900 per hour",
    image: "/images/hero.jpg",
  },
  {
    name: "PHOENIX",
    capacity: "110 guests",
    price: "$3,900–$4,600 per hour",
    image: "/images/hero.jpg",
  },
  {
    name: "OCEAN PEARL",
    capacity: "75 guests",
    price: "$2,950–$3,500 per hour",
    image: "/images/hero.jpg",
  },
  {
    name: "BLACK DIAMOND",
    capacity: "150 guests",
    price: "$5,800–$6,500 per hour", 
    image: "/images/hero.jpg",
  },
  {
    name: "HORIZON",
    capacity: "100 guests",
    price: "$3,600–$4,300 per hour",
    image: "/images/hero.jpg",
  },
  {
    name: "LUMINA",
    capacity: "45 guests",
    price: "$4,200–$4,900 per hour",
    image: "/images/hero.jpg",
  }
]

export function Fleet() {
  return (
    <section id="fleet" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight">
              Our Fleet
            </h2>
            <p className="text-sm md:text-base text-ink/70 font-medium tracking-widest uppercase">
              Luxury Boat Charters on Sydney Harbour
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {fleetData.map((yacht, index) => (
            <ScrollAnimation
              key={yacht.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-ink/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/20">
                  <Image
                    src={yacht.image}
                    alt={yacht.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 lg:p-6 space-y-4">
                  <h3 className="text-xl font-bold text-ink tracking-wide uppercase">
                    {yacht.name}
                  </h3>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center text-ink/70 text-sm">
                      <Users className="w-4 h-4 mr-2 text-gold" />
                      <span>{yacht.capacity}</span>
                    </div>
                    <div className="flex items-center text-ink/70 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-gold" />
                      <span>{yacht.price}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gold text-ink font-semibold hover:bg-gold/90 transition-all duration-300 mt-4 rounded-lg">
                    View Boat
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

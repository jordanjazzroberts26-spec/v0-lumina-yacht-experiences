"use client"

import { useState } from "react"
import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const destinations = [
  {
    title: "Great Barrier Reef",
    description: "Luxury Yacht Charters in the Great Barrier Reef",
    image: "/images/hero.jpg",
  },
  {
    title: "Sydney Harbour",
    description: "Iconic Luxury Charters on Sydney Harbour",
    image: "/images/hero.jpg",
  },
  {
    title: "New Zealand",
    description: "Breathtaking Fiords & Coastal Adventures",
    image: "/images/hero.jpg",
  },
  {
    title: "Pacific Islands",
    description: "Tropical Paradise Escapes",
    image: "/images/hero.jpg",
  },
  {
    title: "Tasmania",
    description: "Wild & Rugged Coastal Journeys",
    image: "/images/hero.jpg",
  },
  {
    title: "Hunter Valley",
    description: "Gourmet Wine & Waterfront Getaways",
    image: "/images/hero.jpg",
  },
]

export function Destinations() {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section id="destinations" className="py-24 px-6 lg:px-12 bg-pearl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4">
            Explore Your Next Destination
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg md:text-xl">
            Discover extraordinary yacht experiences across Australia and beyond
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="relative max-w-7xl mx-auto px-4 md:px-12 lg:px-16">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
                {destinations.map((destination, index) => (
                  <CarouselItem key={index} className="pl-4 md:pl-6 lg:pl-8 md:basis-1/2 lg:basis-1/3">
                    <div className="relative group rounded-2xl overflow-hidden h-[450px] shadow-soft hover:shadow-soft-lg transition-all duration-500">
                      {/* Background Image */}
                      <Image
                        src={destination.image}
                        alt={destination.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Dark Gradient Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                        <h3 className="text-2xl font-semibold mb-2 tracking-wide text-white">
                          {destination.title}
                        </h3>
                        <p className="text-white/80 mb-6 text-sm leading-relaxed max-w-[90%] font-medium">
                          {destination.description}
                        </p>
                        <Button 
                          variant="default" 
                          className="w-fit bg-moonlight text-ink hover:bg-moonlight/90 hover:scale-105 transition-all duration-300 tracking-widest text-sm font-bold uppercase px-8 py-6 h-auto rounded-xl shadow-2xl shadow-black/60"
                        >
                          Explore
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 border-ink/20 text-ink hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300" />
                <CarouselNext className="absolute -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 border-ink/20 text-ink hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300" />
              </div>
            </Carousel>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

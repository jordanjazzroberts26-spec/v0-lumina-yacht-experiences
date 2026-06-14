"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
    slug: "great-barrier-reef",
    title: "Great Barrier Reef",
    description: "Luxury Yacht Charters in the Great Barrier Reef",
    image: "/images/gallery-1.jpg",
  },
  {
    slug: "sydney-harbour",
    title: "Sydney Harbour",
    description: "Iconic Luxury Charters on Sydney Harbour",
    image: "/images/gallery-2.jpg",
  },
  {
    slug: "new-zealand",
    title: "New Zealand",
    description: "Breathtaking Fiords & Coastal Adventures",
    image: "/images/gallery-4.jpg",
  },
  {
    slug: "pacific-islands",
    title: "Pacific Islands",
    description: "Tropical Paradise Escapes",
    image: "/images/gallery-3.jpg",
  },
  {
    slug: "tasmania",
    title: "Tasmania",
    description: "Wild & Rugged Coastal Journeys",
    image: "/images/gallery-5.jpg",
  },
  {
    slug: "hunter-valley",
    title: "Hunter Valley",
    description: "Gourmet Wine & Waterfront Getaways",
    image: "/images/program-bespoke.jpg",
  },
]

export function Destinations() {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section id="destinations" className="py-24 px-6 lg:px-12 bg-pearl overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4">
            Explore Your Next Destination
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
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
                    <div className="relative group rounded-lg overflow-hidden h-[450px] shadow-soft hover:shadow-soft-lg transition-all duration-500">
                      <Image
                        src={destination.image}
                        alt={destination.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-twilight-deep/75 via-twilight-deep/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                      <div className="absolute inset-0 flex flex-col justify-end p-8 text-moonlight">
                        <h3 className="text-2xl font-semibold mb-2 tracking-wide text-moonlight">
                          {destination.title}
                        </h3>
                        <p className="text-moonlight/85 mb-6 text-base leading-relaxed max-w-[90%]">
                          {destination.description}
                        </p>
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

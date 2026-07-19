"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { ScrollAnimation } from "@/lib/animations"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const bespokeTestimonials = [
  {
    name: "Margaret & David Chen",
    location: "San Francisco, CA",
    image: "/images/testimonial-1.jpg",
    quote:
      "Our anniversary voyage exceeded every expectation. The crew anticipated our every need, completely tailoring the itinerary so we could have ultimate privacy when we wanted it.",
    rating: 5,
  },
  {
    name: "James Morrison",
    location: "London, UK",
    image: "/images/testimonial-3.jpg",
    quote:
      "I asked for a bespoke wellness retreat for my executive team. Lumina arranged private yoga instructors, tailored nutritional menus, and a completely secluded route.",
    rating: 5,
  },
  {
    name: "Michael & Emma Thorne",
    location: "New York, USA",
    image: "/images/gallery-1.jpg",
    quote:
      "We wanted a journey that felt entirely our own. From customizing the wine list before we boarded to anchoring in coves unknown to tourists, it was true bespoke luxury.",
    rating: 5,
  },
  {
    name: "Arthur Pendelton",
    location: "Sydney, Australia",
    image: "/images/gallery-4.jpg",
    quote:
      "I've chartered many vessels, but the elegance and sheer perfection of this fleet remain unmatched. The level of personalization is simply a cut above the rest.",
    rating: 5,
  },
]

export function BespokeTestimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-24 px-6 lg:px-12 bg-pearl overflow-hidden border-t border-mist/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-6 block">Voices from Private Charters</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4 tracking-tight">
            The Bespoke Experience
          </h2>
          <p className="text-ink/80 max-w-2xl mx-auto leading-relaxed">
            Read how we’ve brought unique visions to life on the open water.
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
                {bespokeTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:pl-6 lg:pl-8 md:basis-1/2">
                    <div className="bg-white rounded-[2rem] p-10 lg:p-12 shadow-soft-sm card-hover-lift h-full flex flex-col border border-mist/20">
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-champagne text-champagne"
                          />
                        ))}
                      </div>
                      <p className="text-ink/90 text-lg leading-relaxed italic flex-1 mb-8">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="flex items-center gap-4 pt-6 border-t border-mist/30">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-ink tracking-wide">
                            {testimonial.name}
                          </h4>
                          <p className="text-ink/60 text-sm tracking-wide">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 border-mist/30 text-ink/70 hover:bg-champagne hover:text-white hover:border-champagne transition-all duration-300 w-12 h-12 bg-white shadow-soft-sm" />
                <CarouselNext className="absolute -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 border-mist/30 text-ink/70 hover:bg-champagne hover:text-white hover:border-champagne transition-all duration-300 w-12 h-12 bg-white shadow-soft-sm" />
              </div>
            </Carousel>
            
            {count > 0 && (
              <div className="flex justify-center gap-3 mt-12">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === current ? "bg-champagne w-8" : "bg-mist w-4 hover:bg-mist-dark"
                    }`}
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

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

const testimonials = [
  {
    name: "Margaret & David Chen",
    voyage: "7-Night Great Barrier Reef Odyssey",
    image: "/images/testimonial-1.jpg",
    quote: "Our anniversary voyage exceeded every expectation. Captain Elena created moments we will treasure forever. The attention to detail was extraordinary.",
    rating: 5,
  },
  {
    name: "Sophia Laurent",
    voyage: "10-Night Mediterranean Culinary Journey",
    image: "/images/testimonial-2.jpg",
    quote: "As someone who has experienced luxury travel worldwide, Lumina stands apart. It is not just a yacht trip—it is a transformation.",
    rating: 5,
  },
  {
    name: "James Morrison",
    voyage: "5-Night Whitsundays Wellness Retreat",
    image: "/images/testimonial-3.jpg",
    quote: "The wellness retreat was exactly what my soul needed. Waking up to yoga on the deck with the Mediterranean sun—pure magic.",
    rating: 5,
  },
  {
    name: "Michael & Emma Thorne",
    voyage: "7-Night Signature Voyage",
    image: "/images/gallery-1.jpg",
    quote: "A masterclass in luxury. The crew anticipated our every need before we even knew we had them. Flawless execution.",
    rating: 5,
  },
  {
    name: "Isabella Rossi",
    voyage: "5-Night Amalfi Coast Discovery",
    image: "/images/gallery-3.jpg",
    quote: "The dining experience was Michelin-star quality, served with the backdrop of the open ocean. Unforgettable.",
    rating: 5,
  }
]

export function SignatureTestimonials() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-twilight-deep mb-4">
            What Our Guests Say
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Testimonials from those who have immersed themselves in our multi-day voyages.
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
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:pl-6 lg:pl-8 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-card rounded-2xl p-8 card-hover-lift h-full flex flex-col border border-mist/50">
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-champagne text-champagne"
                          />
                        ))}
                      </div>
                      <p className="text-ink leading-relaxed italic flex-1 text-lg mb-8 font-serif">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-mist/50">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-twilight-deep text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-champagne text-xs font-bold tracking-wide uppercase mt-1">
                            {testimonial.voyage}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 border-mist text-twilight-deep hover:bg-champagne hover:text-white hover:border-champagne transition-all duration-300" />
                <CarouselNext className="absolute -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 border-mist text-twilight-deep hover:bg-champagne hover:text-white hover:border-champagne transition-all duration-300" />
              </div>
            </Carousel>
            
            {count > 0 && (
              <div className="flex justify-center gap-2 mt-12">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-champagne scale-125" : "bg-mist hover:bg-champagne/50"
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

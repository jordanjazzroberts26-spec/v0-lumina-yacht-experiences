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
    location: "San Francisco, CA",
    image: "/images/testimonial-1.jpg",
    quote:
      "Our anniversary voyage exceeded every expectation. Captain Elena created moments we will treasure forever. The attention to detail was extraordinary.",
    rating: 5,
  },
  {
    name: "Sophia Laurent",
    location: "Paris, France",
    image: "/images/testimonial-2.jpg",
    quote:
      "As someone who has experienced luxury travel worldwide, Lumina stands apart. It is not just a yacht trip—it is a transformation.",
    rating: 5,
  },
  {
    name: "James Morrison",
    location: "London, UK",
    image: "/images/testimonial-3.jpg",
    quote:
      "The wellness retreat was exactly what my soul needed. Waking up to yoga on the deck with the Mediterranean sun—pure magic.",
    rating: 5,
  },
  {
    name: "Michael & Emma Thorne",
    location: "New York, USA",
    image: "/images/hero.jpg",
    quote:
      "A masterclass in luxury. The crew anticipated our every need before we even knew we had them. Flawless execution.",
    rating: 5,
  },
  {
    name: "Liam O'Connor",
    location: "Dublin, Ireland",
    image: "/images/hero.jpg",
    quote:
      "Sydney Harbour is beautiful, but experiencing it on Lumina elevates it to something entirely otherworldly.",
    rating: 5,
  },
  {
    name: "Isabella Rossi",
    location: "Rome, Italy",
    image: "/images/hero.jpg",
    quote:
      "The dining experience was Michelin-star quality, served with the backdrop of the open ocean. Unforgettable.",
    rating: 5,
  },
  {
    name: "Arthur Pendelton",
    location: "Sydney, Australia",
    image: "/images/hero.jpg",
    quote:
      "I've chartered many vessels, but the elegance and sheer perfection of this fleet remain unmatched.",
    rating: 5,
  },
  {
    name: "Chloe & Sam Davies",
    location: "Toronto, Canada",
    image: "/images/hero.jpg",
    quote:
      "Our corporate retreat was a phenomenal success. The balance of professionalism and luxury was impeccable.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    location: "Monaco",
    image: "/images/hero.jpg",
    quote:
      "True sophistication lies in the details. Lumina executes every single one flawlessly, providing ultimate peace of mind.",
    rating: 5,
  },
]

export function Testimonials() {
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
    <section className="py-24 px-6 lg:px-12 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4">
            What Our Guests Say
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Stories from those who have experienced the Lumina difference
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
                    <div className="bg-card rounded-lg p-8 shadow-soft hover:shadow-soft-lg transition-shadow duration-300 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-ink">
                            {testimonial.name}
                          </h4>
                          <p className="text-whisper text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-gold text-gold"
                          />
                        ))}
                      </div>
                      <p className="text-body leading-relaxed italic flex-1">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 border-ink/20 text-ink hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300" />
                <CarouselNext className="absolute -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 border-ink/20 text-ink hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300" />
              </div>
            </Carousel>
            
            {count > 0 && (
              <div className="flex justify-center gap-2 mt-12">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "bg-gold scale-125" : "bg-ink/20 hover:bg-ink/40"
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

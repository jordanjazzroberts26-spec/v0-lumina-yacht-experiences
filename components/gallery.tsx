"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    context: "Sarah & James • Mediterranean • Yacht: Luna Blu • Italy",
  },
  {
    src: "/images/gallery-2.jpg",
    context: "The Chen Family • Great Barrier Reef • Yacht: Ocean Pearl • Australia",
  },
  {
    src: "/images/gallery-3.jpg",
    context: "Marcus & Elena • French Riviera • Yacht: Serenity • France",
  },
  {
    src: "/images/gallery-4.jpg",
    context: "Wellness Retreat Group • Amalfi Coast • Yacht: Aurora • Italy",
  },
  {
    src: "/images/gallery-5.jpg",
    context: "Executive Team • Sydney Harbour • Yacht: Black Diamond • Australia",
  },
  {
    src: "/images/gallery-6.jpg",
    context: "The Davies • Whitsundays • Yacht: Horizon • Australia",
  },
]

export function Gallery() {
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
    <section id="gallery" className="py-24 px-6 lg:px-12 bg-pearl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4">
            Real Moments from Our Guests
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Authentic experiences captured by those who have sailed with us
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
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-4 md:pl-6 lg:pl-8 md:basis-1/2 lg:basis-1/3">
                    <div className="group flex flex-col gap-5">
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm border border-ink/5">
                        <Image
                          src={image.src}
                          alt={image.context}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-twilight/0 group-hover:bg-twilight/10 transition-colors duration-300" />
                      </div>
                      <div className="px-2">
                        <p className="text-[13px] md:text-sm font-medium text-ink/70 leading-relaxed tracking-wide">
                          {image.context}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 -mt-8 border-ink/20 text-ink hover:bg-champagne hover:text-ink hover:border-champagne transition-all duration-300" />
                <CarouselNext className="absolute -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 -mt-8 border-ink/20 text-ink hover:bg-champagne hover:text-ink hover:border-champagne transition-all duration-300" />
              </div>
            </Carousel>
            
            {count > 0 && (
              <div className="flex justify-center gap-2 mt-12">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-champagne scale-125" : "bg-ink/20 hover:bg-ink/40"
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

"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Sunset dinner on yacht deck",
    layout:
      "md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1 lg:col-span-1 lg:row-span-1 lg:col-start-1 lg:row-start-1",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Couple dancing at twilight",
    layout:
      "md:col-start-3 md:row-start-1 lg:col-start-2 lg:row-start-1",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Champagne toast at golden hour",
    layout:
      "md:col-start-3 md:row-start-2 lg:col-start-3 lg:row-start-1",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Wellness moment on yacht bow",
    layout:
      "md:col-start-1 md:row-start-3 lg:col-start-4 lg:row-start-1",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Private chef preparing cuisine",
    layout:
      "md:col-start-2 md:row-start-3 lg:col-span-2 lg:col-start-1 lg:row-start-2",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Friends enjoying the voyage",
    layout:
      "md:col-start-3 md:row-start-3 lg:col-span-2 lg:col-start-3 lg:row-start-2",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 lg:px-12 bg-pearl">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4">
            Real Moments from Our Guests
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Authentic experiences captured by those who have sailed with us
          </p>
        </ScrollAnimation>

        <div
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:grid-rows-3 md:auto-rows-[minmax(11rem,1fr)] lg:grid-cols-4 lg:grid-rows-2 lg:auto-rows-[minmax(13rem,1fr)]"
        >
          {galleryImages.map((image, index) => (
            <ScrollAnimation
              key={image.src}
              animation="scale-in"
              delay={index * 100}
              className={`h-full min-h-[10rem] sm:min-h-[11rem] ${image.layout}`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg group shadow-soft">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-twilight/0 group-hover:bg-twilight/25 transition-colors duration-300" />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

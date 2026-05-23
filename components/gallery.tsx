"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Sunset dinner on yacht deck",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Couple dancing at twilight",
    span: "",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Champagne toast at golden hour",
    span: "",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Wellness moment on yacht bow",
    span: "",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Private chef preparing cuisine",
    span: "",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Friends enjoying the voyage",
    span: "",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 lg:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-4">
            Real Moments from Our Guests
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Authentic experiences captured by those who have sailed with us
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-4">
          {galleryImages.map((image, index) => (
            <ScrollAnimation
              key={image.src}
              animation="scale-in"
              delay={index * 100}
              className={`relative overflow-hidden rounded-lg group ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

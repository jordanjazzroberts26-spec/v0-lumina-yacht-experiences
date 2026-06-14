"use client"

import { ScrollAnimation } from "@/lib/animations"
import { ImageGallery } from "@/components/ui/image-gallery"

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
          <div className="relative max-w-7xl mx-auto md:px-12 lg:px-16">
            <ImageGallery images={galleryImages} />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

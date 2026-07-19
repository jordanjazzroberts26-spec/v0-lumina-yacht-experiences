"use client"

import { ScrollAnimation } from "@/lib/animations"
import { ImageGallery } from "@/components/ui/image-gallery"

const bespokeGalleryImages = [
  {
    src: "/images/gallery-1.jpg",
    context: "Sunset dining on the private aft deck",
  },
  {
    src: "/images/gallery-2.jpg",
    context: "Family celebration under the stars",
  },
  {
    src: "/images/gallery-3.jpg",
    context: "Customized wellness setup on the sun deck",
  },
  {
    src: "/images/gallery-4.jpg",
    context: "Private beach picnic setup in the Whitsundays",
  },
  {
    src: "/images/gallery-5.jpg",
    context: "Intimate wine tasting experience with our sommelier",
  },
  {
    src: "/images/gallery-6.jpg",
    context: "Exclusive tender excursion to hidden coves",
  },
]

export function BespokeGallery() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-ivory overflow-hidden border-t border-mist/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-6 block">Private Journeys Captured</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4 tracking-tight">
            Moments Styled for You
          </h2>
          <p className="text-ink/80 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the intimately personalized experiences crafted aboard our private charters.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="relative max-w-7xl mx-auto md:px-12 lg:px-16">
            <ImageGallery images={bespokeGalleryImages} />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

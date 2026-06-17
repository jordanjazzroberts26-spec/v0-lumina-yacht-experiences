"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"

const MOMENTS = [
  { src: "/images/gallery-2.jpg", alt: "Guests dining on aft deck", aspect: "aspect-[4/3]" },
  { src: "/images/gallery-4.jpg", alt: "Sunset views from the bow", aspect: "aspect-[3/4]" },
  { src: "/images/gallery-1.jpg", alt: "Snorkeling in pristine waters", aspect: "aspect-square" },
  { src: "/images/gallery-5.jpg", alt: "Private beach picnic", aspect: "aspect-[4/3]" },
  { src: "/images/gallery-3.jpg", alt: "Relaxing in the onboard spa", aspect: "aspect-[3/4]" },
  { src: "/images/gallery-6.jpg", alt: "Morning yoga on the top deck", aspect: "aspect-square" },
]

export function SignatureMoments() {
  return (
    <section className="py-24 bg-ivory text-ink overflow-hidden border-t border-mist/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">Real Moments</span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-twilight-deep">
            Unscripted Magic
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            A glimpse into the authentic, transformative experiences shared by our guests across the globe.
          </p>
        </ScrollAnimation>

        <div className="relative w-full">
          {/* Horizontal Scroll Gallery */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {MOMENTS.map((moment, idx) => (
              <div 
                key={idx} 
                className={`relative shrink-0 w-72 md:w-96 rounded-2xl overflow-hidden snap-center ${moment.aspect} shadow-soft group cursor-pointer`}
              >
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay for aesthetic */}
                <div className="absolute inset-0 bg-twilight-deep/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <span className="text-sm font-medium text-whisper uppercase tracking-widest">Swipe to explore</span>
          </div>
        </div>
      </div>
      
      {/* CSS to hide scrollbar for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  )
}

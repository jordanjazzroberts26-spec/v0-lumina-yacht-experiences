"use client"

import { cn } from "@/lib/utils"
import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  src: string
  context: string
}

export function ImageGallery({ images }: { images: GalleryImage[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      
      <div className="relative w-full group/gallery">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll("left")}
          className="absolute -left-4 md:-left-12 lg:-left-16 top-[200px] z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-pearl text-ink hover:bg-champagne hover:border-champagne transition-all duration-300 opacity-0 group-hover/gallery:opacity-100"
        >
            <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button 
          onClick={() => scroll("right")}
          className="absolute -right-4 md:-right-12 lg:-right-16 top-[200px] z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-pearl text-ink hover:bg-champagne hover:border-champagne transition-all duration-300 opacity-0 group-hover/gallery:opacity-100"
        >
            <ChevronRight className="h-5 w-5" />
        </button>

        <div 
          ref={scrollRef}
          className="flex items-start gap-3 md:gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full py-4"
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative group flex-shrink-0 transition-all duration-700 ease-in-out w-[280px] hover:w-[450px] lg:hover:w-[600px] flex flex-col gap-4"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-sm border border-ink/5">
                <Image
                  src={image.src}
                  alt={image.context}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-twilight/0 group-hover:bg-twilight/10 transition-colors duration-300" />
              </div>
              <div className="px-2 w-[280px]">
                <p className="text-[13px] md:text-sm font-medium text-ink/70 leading-relaxed tracking-wide truncate">
                  {image.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

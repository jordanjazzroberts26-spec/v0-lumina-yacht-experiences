"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { Check, ArrowRight } from "lucide-react"

const investmentPackages = [
  {
    name: "Intimate Escape",
    duration: "2-4 Nights",
    image: "/images/gallery-1.jpg",
    highlights: [
      "Perfect for couples or small families",
      "Curated local coastal itineraries",
      "Dedicated private chef and crew",
      "Seamless land-to-sea transfers",
    ],
    price: "From $25,000",
  },
  {
    name: "Signature Private Odyssey",
    duration: "5-7 Nights",
    image: "/images/gallery-4.jpg",
    highlights: [
      "Ideal for multi-generational families",
      "Extended regional exploration",
      "Bespoke wellness and adventure activities",
      "Exclusive shoreside experiences",
    ],
    price: "From $65,000",
  },
  {
    name: "Grand Expedition",
    duration: "10-14+ Nights",
    image: "/images/gallery-6.jpg",
    highlights: [
      "Unrestricted global or remote access",
      "Complete lifestyle and itinerary design",
      "Specialized expedition equipment and guides",
      "Unparalleled privacy and security",
    ],
    price: "From $150,000",
  },
]

export function BespokeInvestment() {
  return (
    <section className="py-24 lg:py-32 bg-pearl text-ink border-t border-mist/30 relative overflow-hidden">
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-20">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-6 block">Bespoke Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-ink drop-shadow-sm">
            Investment in Your Bespoke Journey
          </h2>
          <p className="text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed font-light">
            An indication of our charter packages. Every element is tailored precisely to your vision, ensuring an unparalleled and entirely private experience.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {investmentPackages.map((pkg, idx) => (
            <ScrollAnimation key={pkg.name} animation="fade-up" delay={idx * 150} className="h-full">
              <div className="group bg-white rounded-[2rem] border border-mist/30 overflow-hidden h-full flex flex-col hover:border-champagne/40 transition-colors duration-500 shadow-soft-sm">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-champagne/10 text-champagne border border-champagne/20 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                      {pkg.duration}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-wide mb-2 text-ink">{pkg.name}</h3>
                    <p className="text-xl font-light text-ink/80">{pkg.price}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-champagne shrink-0 mr-3 mt-0.5" />
                        <span className="text-ink/80 leading-relaxed font-light text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full py-4 bg-transparent border border-champagne text-champagne font-bold tracking-widest uppercase text-sm rounded-radius hover:bg-champagne hover:text-white transition-all duration-300 flex items-center justify-center group/btn">
                    Request Custom Quote
                    <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={400} className="max-w-4xl mx-auto text-center border-t border-mist/30 pt-12">
          <p className="text-ink/70 text-sm leading-loose tracking-wide font-light">
            All pricing is fully customized based on yacht selection, duration, destinations, guest count, and personal preferences. Contact us for a detailed proposal tailored to your vision.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}

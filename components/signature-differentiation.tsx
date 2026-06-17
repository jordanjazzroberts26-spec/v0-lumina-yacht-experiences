"use client"

import { ScrollAnimation } from "@/lib/animations"
import { Compass, Sparkle, Crown, Star } from "@phosphor-icons/react"

const DIFFERENCES = [
  {
    icon: Compass,
    title: "Deeper Immersion",
    subtitle: "vs. Standard Day Trips",
    description: "Leave fleeting day trips behind. Wake up in secluded coves and experience destinations intimately over multiple days, long after the crowds have departed."
  },
  {
    icon: Star,
    title: "Expert Curation",
    subtitle: "vs. Basic Itineraries",
    description: "Standard charters offer a boat; we offer an orchestrated journey. Local experts and dedicated guides curate every excursion to your exact interests."
  },
  {
    icon: Crown,
    title: "Seamless Luxury",
    subtitle: "vs. Disconnected Logistics",
    description: "Beyond just an onboard crew, enjoy a dedicated 24/7 concierge managing port logistics, private flights, and onshore VIP access flawlessly."
  },
  {
    icon: Sparkle,
    title: "Transformative Moments",
    subtitle: "vs. Generic Sightseeing",
    description: "We focus on feelings, not just places. From private island dining to sunrise yoga at sea, we craft experiences that linger in your memory forever."
  }
]

export function SignatureDifferentiation() {
  return (
    <section className="py-24 bg-pearl text-ink border-t border-mist/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">The Lumina Difference</span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-twilight-deep">
            Why Choose Signature?
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            How our multi-day curated voyages elevate your experience beyond the traditional luxury charter.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENCES.map((diff, idx) => (
            <ScrollAnimation key={diff.title} animation="fade-up" delay={idx * 150} className="h-full">
              <div className="bg-card h-full p-8 rounded-2xl border border-mist/50 hover:border-champagne/40 transition-colors shadow-soft hover:shadow-soft-lg group flex flex-col">
                <div className="w-14 h-14 rounded-full bg-ivory flex items-center justify-center mb-8 text-champagne group-hover:scale-110 group-hover:bg-champagne/10 transition-all duration-300">
                  <diff.icon size={28} weight="light" />
                </div>
                <h3 className="text-xl font-bold text-twilight-deep mb-2">{diff.title}</h3>
                <div className="text-xs font-bold uppercase tracking-wider text-whisper mb-5 pb-5 border-b border-mist/50">
                  {diff.subtitle}
                </div>
                <p className="text-body leading-relaxed text-[15px] flex-grow">
                  {diff.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

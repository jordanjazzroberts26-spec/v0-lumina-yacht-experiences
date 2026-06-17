"use client"

import { ScrollAnimation } from "@/lib/animations"
import { Check } from "lucide-react"

const PACKAGES = [
  {
    name: "3-Night Explorer",
    price: "From $12,000 pp",
    description: "A concentrated burst of luxury, perfect for long weekends and nearby exclusive enclaves.",
    includes: [
      "Full crew including private chef",
      "All gourmet meals and select beverages",
      "Use of standard water toys",
      "1x Custom onshore excursion"
    ],
    highlighted: false
  },
  {
    name: "5-Night Odyssey",
    price: "From $20,000 pp",
    description: "The ideal balance of relaxation and discovery. Venture further into pristine archipelagos.",
    includes: [
      "Everything in Explorer, plus:",
      "Premium sommelier wine pairings",
      "Daily spa or wellness treatments",
      "Access to deep-water submersible (select yachts)",
      "Helicopter transfer options"
    ],
    highlighted: true
  },
  {
    name: "7-Night Grand Voyage",
    price: "From $28,000 pp",
    description: "The ultimate Lumina experience. Complete immersion in luxury, wellness, and remote exploration.",
    includes: [
      "Everything in Odyssey, plus:",
      "Unlimited ultra-premium beverage package",
      "Dedicated wellness & yoga instructor",
      "Exclusive private island dining event",
      "VIP airport concierge and transfers"
    ],
    highlighted: false
  }
]

export function SignaturePackages() {
  return (
    <section className="py-24 bg-ivory text-ink border-t border-mist/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">Signature Packages</span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-twilight-deep">
            Investment in Unforgettable Journeys
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Choose the perfect rhythm for your escape. Each voyage is a fully tailored experience.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PACKAGES.map((pkg, idx) => (
            <ScrollAnimation key={pkg.name} animation="fade-up" delay={idx * 100} className="h-full">
              <div className={`relative flex flex-col h-full rounded-3xl p-8 lg:p-10 transition-all duration-300 ${
                pkg.highlighted 
                  ? 'bg-twilight-deep text-white shadow-2xl shadow-twilight-deep/20 lg:scale-105 z-10 border border-champagne/20' 
                  : 'bg-card text-ink border border-mist/50 hover:shadow-soft-lg'
              }`}>
                {pkg.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-champagne text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                    Most Popular
                  </div>
                )}
                
                <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${pkg.highlighted ? 'text-white' : 'text-twilight-deep'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-sm leading-relaxed mb-8 h-12 ${pkg.highlighted ? 'text-pearl/80' : 'text-body'}`}>
                  {pkg.description}
                </div>
                
                <div className="mb-8 pb-8 border-b border-white/10">
                  <span className={`text-3xl lg:text-4xl font-bold ${pkg.highlighted ? 'text-champagne' : 'text-twilight-deep'}`}>
                    {pkg.price}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <div className={`text-sm font-bold uppercase tracking-wider mb-6 ${pkg.highlighted ? 'text-pearl' : 'text-body'}`}>
                    What's Included
                  </div>
                  <ul className="space-y-4 mb-10">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 mr-4 shrink-0 mt-0.5 text-champagne" strokeWidth={2.5} />
                        <span className={pkg.highlighted ? 'text-white/90' : 'text-ink/90'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full py-4 rounded-radius font-semibold transition-colors mt-auto ${
                  pkg.highlighted
                    ? 'bg-champagne text-white hover:bg-champagne-hover shadow-soft'
                    : 'bg-transparent border-2 border-twilight-deep text-twilight-deep hover:bg-twilight-deep hover:text-white'
                }`}>
                  Inquire Now
                </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={300}>
          <div className="text-center text-sm font-medium text-body italic">
            * All prices are indicative. Final quote provided after consultation.
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

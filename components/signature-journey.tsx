"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { MessageCircle, Map, Anchor, Plus } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const steps = [
  {
    id: 1,
    title: "Book a Consultation",
    subtitle: "Define the scope of your multi-day escape.",
    bullets: [
      "In-depth discovery meeting",
      "Vessel and destination matching",
      "Pacing and timeframe selection",
      "Special requirements assessment",
    ],
    quote: '"The first step toward the extraordinary."',
    image: "/images/gallery-5.jpg",
    icon: MessageCircle,
    color: "rgba(201, 164, 92, 0.25)",
  },
  {
    id: 2,
    title: "Co-create Your Itinerary",
    subtitle: "Tailoring every single day to your preferences.",
    bullets: [
      "Daily schedule blockouts",
      "Onshore excursion planning",
      "Custom culinary and wine menus",
      "Wellness and activity curation",
    ],
    quote: '"A completely bespoke nautical tapestry."',
    image: "/images/gallery-6.jpg",
    icon: Map,
    color: "rgba(201, 164, 92, 0.25)",
  },
  {
    id: 3,
    title: "Embark on Transformation",
    subtitle: "Step aboard for the voyage of a lifetime.",
    bullets: [
      "Seamless VIP port transfers",
      "White-glove yacht onboarding",
      "24/7 dedicated concierge crew",
      "Uninterrupted luxury living",
    ],
    quote: '"Let the ocean change your perspective."',
    image: "/images/gallery-3.jpg",
    icon: Anchor,
    color: "rgba(201, 164, 92, 0.25)",
  },
]

export function SignatureJourney() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-ivory relative overflow-hidden border-t border-mist/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-20">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">The Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-twilight-deep mb-6">
            Your Signature Journey
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg md:text-xl">
            From the first conversation to the final sunset, every detail is flawlessly managed.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollAnimation key={step.id} animation="fade-up" delay={index * 150} className="h-full">
              <SpotlightCard 
                spotlightColor={step.color}
                className="w-full h-[540px] rounded-[32px] bg-pearl text-twilight-deep border-white/40 shadow-soft p-0 flex flex-col justify-between group"
              >
                {/* Faded background photo */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <Image 
                    src={step.image} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-20" 
                    alt={step.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-pearl/90 via-pearl/80 to-pearl border border-white/20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-pearl/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between pointer-events-none">
                  <div>
                    {/* Icon and + sign */}
                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm border border-white flex items-center justify-center text-champagne">
                         <step.icon size={28} strokeWidth={1.5} />
                      </div>
                      <Plus size={18} strokeWidth={3} className="text-twilight-deep/30" />
                    </div>

                    {/* Headline and subline */}
                    <h3 className="text-2xl font-semibold text-twilight-deep mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-body font-medium mb-8 text-[15px]">{step.subtitle}</p>

                    {/* Bullet points */}
                    <ul className="space-y-4">
                      {step.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4 text-[15px] text-twilight-deep/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne/80 mt-2 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="mt-8 pt-6 border-t border-twilight-deep/10">
                    <p className="font-serif italic text-body text-sm">
                      {step.quote}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

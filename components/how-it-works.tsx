"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { MessageCircle, Key, Anchor, Plus } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const steps = [
  {
    id: 1,
    title: "Book a Consultation",
    subtitle: "Define your yacht and lifestyle vision.",
    bullets: [
      "Initial discovery call",
      "Yacht preference profiling",
      "Route and itinerary planning",
      "Custom culinary requests",
    ],
    quote: '"The beginning of a flawless journey."',
    image: "/images/gallery-5.jpg",
    icon: MessageCircle,
    color: "rgba(201, 164, 92, 0.25)",
  },
  {
    id: 2,
    title: "Onboarding & Setup",
    subtitle: "We handle the logistics flawlessly.",
    bullets: [
      "Crew familiarization",
      "Provisioning and stocking",
      "Safety and protocol checks",
      "Final itinerary approval",
    ],
    quote: '"Every detail anticipated and perfected."',
    image: "/images/gallery-4.jpg",
    icon: Key,
    color: "rgba(201, 164, 92, 0.25)",
  },
  {
    id: 3,
    title: "Show Up and Go",
    subtitle: "Step aboard and enjoy the moment.",
    bullets: [
      "White-glove welcome",
      "Seamless departure",
      "24/7 dedicated service",
      "Curated onboard experiences",
    ],
    quote: '"Your only task is to enjoy the horizon."',
    image: "/images/gallery-3.jpg",
    icon: Anchor,
    color: "rgba(201, 164, 92, 0.25)",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-pearl relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-6">
            How It Works
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg md:text-xl">
            Three quick steps to unforgettable yacht adventures
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollAnimation key={step.id} animation="fade-up" delay={index * 150}>
              <SpotlightCard 
                spotlightColor={step.color}
                className="w-full h-[520px] rounded-[32px] bg-ivory text-ink border-white/40 shadow-soft p-0 flex flex-col justify-between group"
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
                  <div className="absolute inset-0 bg-gradient-to-b from-pearl/80 via-ivory/80 to-ivory border border-white/20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-ivory/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between pointer-events-none">
                  <div>
                    {/* Icon and + sign */}
                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm border border-white flex items-center justify-center text-champagne">
                         <step.icon size={28} strokeWidth={1.5} />
                      </div>
                      <Plus size={18} strokeWidth={3} className="text-ink/30" />
                    </div>

                    {/* Headline and subline */}
                    <h3 className="text-2xl font-semibold text-ink mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-body font-medium mb-8 text-[15px]">{step.subtitle}</p>

                    {/* Bullet points */}
                    <ul className="space-y-4">
                      {step.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4 text-[15px] text-ink/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne/60 mt-2 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="mt-8 pt-6 border-t border-ink/5">
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

"use client"

import { MessageSquare, Key, Anchor } from "lucide-react"
import { ScrollAnimation } from "@/lib/animations"

const steps = [
  {
    stepNumber: "01",
    title: "Book a Consultation",
    description: "We'll discuss your yacht and lifestyle to build your custom plan.",
    icon: MessageSquare,
  },
  {
    stepNumber: "02",
    title: "Onboarding & Setup",
    description: "We handle the keys, preferences, and scheduling so your yacht is ready.",
    icon: Key,
  },
  {
    stepNumber: "03",
    title: "Show Up and Go",
    description: "Step aboard your prepared yacht and enjoy every curated moment.",
    icon: Anchor,
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-pearl relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-6">
            How It Works
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg md:text-xl">
            Three quick steps to unforgettable yacht adventures
          </p>
        </ScrollAnimation>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-px bg-ink/15" />

          <div className="space-y-16 md:space-y-24 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 1

              return (
                <div key={index} className={`flex flex-col md:flex-row items-start md:items-center w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node (Mobile: absolute left, Desktop: absolute center) */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 mt-1 md:mt-0 flex items-center justify-center w-14 h-14 rounded-full bg-ivory border border-ink/5 shadow-soft z-20 group-hover:scale-110 group-hover:border-champagne/40 transition-all duration-500">
                    <Icon className="w-6 h-6 text-champagne" strokeWidth={1.5} />
                  </div>

                  {/* Spacer for Desktop Alternating Layout */}
                  <div className="hidden md:block flex-1" />

                  {/* Content Block */}
                  <div className={`flex-1 w-full pl-20 md:pl-0 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                    <ScrollAnimation
                      animation="fade-up"
                      delay={index * 150}
                    >
                      <div className={`inline-flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-champagne font-bold tracking-widest text-sm uppercase">
                          Step {step.stepNumber}
                        </span>
                        <div className="w-12 h-px bg-champagne/40" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-4">
                        {step.title}
                      </h3>
                      <p className="text-body leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </ScrollAnimation>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { ScrollAnimation } from "@/lib/animations"

const steps = [
  {
    title: "Step 1: Book a Consultation",
    description: "We'll discuss your yacht and lifestyle to build your custom plan.",
  },
  {
    title: "Step 2: Onboarding & Setup",
    description: "We handle the keys, preferences, and scheduling so your yacht is ready.",
  },
  {
    title: "Step 3: Show Up and Go",
    description: "Step aboard your prepared yacht and enjoy every curated moment.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4">
            How It Works
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg md:text-xl">
            Three simple steps to effortless yacht ownership
          </p>
        </ScrollAnimation>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Dotted Line */}
          <div className="absolute left-[9px] top-2 bottom-8 border-l-2 border-dotted border-ink/30" />

          <div className="space-y-16 relative z-10">
            {steps.map((step, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 200}
                className="relative pl-12 md:pl-16"
              >
                {/* Bullet Point */}
                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-ink" />
                
                <h3 className="text-xl md:text-2xl font-semibold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-body leading-relaxed text-lg">
                  {step.description}
                </p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

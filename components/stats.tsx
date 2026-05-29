"use client"

import { Clock, Sparkles, Shield, Star } from "lucide-react"
import { ScrollAnimation } from "@/lib/animations"

const features = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Reclaim your weekends. We handle everything so you don't have to.",
  },
  {
    icon: Sparkles,
    title: "White-Glove Care",
    description: "Concierge-level attention to every detail, every time.",
  },
  {
    icon: Shield,
    title: "Peace of Mind",
    description: "Professional care and maintenance you can trust completely.",
  },
  {
    icon: Star,
    title: "Always Ready",
    description: "Your yacht is perfectly prepared for every journey.",
  },
]

export function Stats() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-twilight-deep text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white">
            Why Choose Lumina?
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white">
            Experience the difference of true white-glove yacht service
          </p>
        </ScrollAnimation>

        <div className="grid gap-12 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollAnimation
                key={feature.title}
                animation="fade-up"
                delay={index * 150}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-[#F5E8C7]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#F5E8C7]">
                  {feature.title}
                </h3>
                <p className="text-white leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}

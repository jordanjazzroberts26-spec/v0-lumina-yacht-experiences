"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollAnimation, useCountUp } from "@/lib/animations"

const stats = [
  { value: 87, label: "Successful Voyages", suffix: "" },
  { value: 98, label: "Would Return Again", suffix: "%" },
  { value: 12, label: "Global Destinations", suffix: "+" },
  { value: 500, label: "Satisfied Guests", suffix: "+" },
]

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const count = useCountUp(value, 2000, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-cream/70 text-sm md:text-base">{label}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-navy">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-4">
            By The Numbers
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollAnimation key={stat.label} animation="fade-up" delay={index * 150}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { CheckCircle } from "@phosphor-icons/react"

const STEPS = [
  {
    num: "01",
    title: "Discovery Consultation",
    subtitle: "A deep-dive into your vision.",
    description: "We begin with a personal conversation to understand the cadence, style, and purpose of your journey. Whether it's a desire for absolute seclusion, high-adrenaline adventure, or culinary exploration.",
    bullets: ["Personal preference profiling", "Travel party dynamics", "Timeline and seasonal mapping"],
    quote: "The foundation of perfection is understanding.",
    image: "/images/gallery-5.jpg"
  },
  {
    num: "02",
    title: "Yacht & Route Selection",
    subtitle: "The perfect vessel and destinations.",
    description: "Based on your brief, we present a curated shortlist of yachts from our fleet and beyond, paired with high-level routing options that align perfectly with your chosen vessel's capabilities.",
    bullets: ["Vessel capability matching", "Drafting primary routes", "Weather and tide optimization"],
    quote: "Matching your soul to the sea.",
    image: "/images/gallery-3.jpg"
  },
  {
    num: "03",
    title: "Itinerary Co-Creation",
    subtitle: "Every detail personalized.",
    description: "Our concierge team works with you to weave experiences into each day. From sourcing a specific vintage of wine to flying in a Michelin-starred chef or booking a remote island landing strip.",
    bullets: ["Custom culinary menus", "Onshore excursion planning", "Wellness and activity scheduling"],
    quote: "Crafting the unscripted.",
    image: "/images/program-bespoke.jpg"
  },
  {
    num: "04",
    title: "Pre-Voyage Preparation",
    subtitle: "Logistics handled flawlessly.",
    description: "We handle the complex choreography of private aviation, ground transfers, port clearances, and advanced provisioning so that nothing is left to chance.",
    bullets: ["VIP transport logistics", "Advanced provisioning", "Crew briefings and familiarization"],
    quote: "Seamless precision behind the scenes.",
    image: "/images/gallery-4.jpg"
  },
  {
    num: "05",
    title: "The Experience",
    subtitle: "Step aboard and live it.",
    description: "Arrive at the marina where your dedicated crew awaits. From the moment you step aboard, the real world fades away, replaced by a reality crafted entirely for you.",
    bullets: ["White-glove welcome", "24/7 dedicated service", "Absolute privacy and freedom"],
    quote: "Your only task is to enjoy the horizon.",
    image: "/images/gallery-6.jpg"
  }
]

export function BespokeProcess() {
  return (
    <section className="py-24 lg:py-32 bg-pearl text-ink relative border-t border-mist/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-24">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">From Vision to Voyage</span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-twilight-deep">
            Your Bespoke Process
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            A meticulous, five-step journey from your initial idea to the moment you step aboard.
          </p>
        </ScrollAnimation>

        <div className="space-y-24 lg:space-y-32">
          {STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div key={step.num} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                
                {/* Image Side */}
                <ScrollAnimation 
                  animation="fade-up" 
                  className="w-full lg:w-1/2"
                >
                  <div className="relative h-[400px] lg:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-soft-lg group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-twilight-deep/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating Number Badge */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/50 text-twilight-deep font-bold text-2xl font-serif">
                      {step.num}
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Content Side */}
                <ScrollAnimation 
                  animation="fade-up" 
                  className="w-full lg:w-1/2"
                >
                  <div className="max-w-xl">
                    <div className="inline-block px-5 py-1.5 rounded-full bg-champagne/10 text-champagne font-bold tracking-widest uppercase text-xs mb-6">
                      Step {step.num}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-semibold text-twilight-deep mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xl font-serif italic text-champagne mb-6">
                      {step.subtitle}
                    </p>
                    <p className="text-body leading-relaxed text-lg mb-8">
                      {step.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {step.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center text-twilight-deep/90 font-medium">
                          <CheckCircle weight="fill" className="text-champagne w-6 h-6 mr-4 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="pl-6 border-l-2 border-champagne/40">
                      <p className="font-serif italic text-body">
                        "{step.quote}"
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

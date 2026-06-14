"use client"

import { useState } from "react"
import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { ChatCircleText, Key, Anchor, Plus, CheckCircle } from "@phosphor-icons/react"
import Modal from "@/components/ui/modal-drop"
import { Button } from "@/components/ui/button"

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
    icon: ChatCircleText,
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
  },
]

export function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState<typeof steps[0] | null>(null)

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
              <div 
                className="relative group w-full h-[520px] rounded-[32px] overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 bg-ivory cursor-pointer border border-white/40"
                onClick={() => setSelectedStep(step)}
              >
                {/* Faded background photo */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={step.image} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-20 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-30" 
                    alt={step.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-pearl/80 via-ivory/80 to-ivory border border-white/20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-ivory/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon and + sign */}
                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm border border-white flex items-center justify-center text-champagne group-hover:bg-white group-hover:shadow transition-all duration-300">
                         <step.icon weight="light" size={28} />
                      </div>
                      <Plus size={18} weight="bold" className="text-ink/30" />
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
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Integration of the requested Modal component */}
        <Modal
          isOpen={!!selectedStep}
          onClose={() => setSelectedStep(null)}
          title={selectedStep?.title}
          subtitle={selectedStep?.subtitle}
          animationType="scale"
          type="blur"
        >
          {selectedStep && (
            <div className="space-y-8">
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 shadow-sm border border-ink/5">
                 <Image src={selectedStep.image} fill className="object-cover" alt={selectedStep.title} />
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-ink text-lg">What to expect</h4>
                <div className="grid gap-3">
                  {selectedStep.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-pearl rounded-lg border border-white shadow-sm">
                      <CheckCircle weight="fill" className="text-champagne w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium text-ink/90">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setSelectedStep(null)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  )
}

"use client"

import { MessageSquare, Key, Anchor, Check } from "lucide-react"
import { ScrollAnimation } from "@/lib/animations"
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperDescription,
  StepperTrigger,
} from "@/components/ui/stepper"
import Image from "next/image"

const steps = [
  {
    stepNumber: "01",
    title: "Book a Consultation",
    description: "We'll discuss your yacht and lifestyle to build your custom plan.",
    icon: MessageSquare,
    image: "/images/gallery-5.jpg", // High quality yacht consultation/onboard vibe
  },
  {
    stepNumber: "02",
    title: "Onboarding & Setup",
    description: "We handle the keys, preferences, and scheduling so your yacht is ready.",
    icon: Key,
    image: "/images/gallery-4.jpg", // Setting up / luxury detail vibe
  },
  {
    stepNumber: "03",
    title: "Show Up and Go",
    description: "Step aboard your prepared yacht and enjoy every curated moment.",
    icon: Anchor,
    image: "/images/gallery-3.jpg", // Guest experience / sailing vibe
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-pearl relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-6">
            How It Works
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg md:text-xl">
            Three quick steps to unforgettable yacht adventures
          </p>
        </ScrollAnimation>

        <div className="flex items-center justify-center">
          <Stepper
            className="flex flex-col md:flex-row items-start justify-between w-full gap-10 md:gap-20"
            defaultValue={1}
            orientation="vertical"
            indicators={{
              completed: <Check className="size-4" />,
            }}
          >
            <div className="w-full md:w-5/12 pt-4">
              <ScrollAnimation animation="fade-right">
                <StepperNav className="h-full">
                  {steps.map((step, index) => (
                    <StepperItem
                      key={index}
                      step={index + 1}
                      className="relative items-start not-last:flex-1"
                    >
                      <StepperTrigger className="items-start pb-16 last:pb-0 gap-4 md:gap-6 group/trigger text-left">
                        <StepperIndicator className="size-10 md:size-12 rounded-full border-2 border-transparent data-[state=completed]:bg-champagne data-[state=completed]:text-white data-[state=active]:bg-ink data-[state=active]:text-white data-[state=inactive]:bg-ink/10 data-[state=inactive]:text-ink/60 transition-all duration-300 shadow-sm flex items-center justify-center text-sm md:text-base font-medium z-10 relative">
                          {index + 1}
                        </StepperIndicator>
                        <div className="mt-1 md:mt-2">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-bold tracking-widest uppercase text-champagne">Step {step.stepNumber}</span>
                          </div>
                          <StepperTitle className="text-2xl md:text-3xl font-semibold text-ink mb-3 transition-colors duration-300 group-hover/trigger:text-champagne">{step.title}</StepperTitle>
                          <StepperDescription className="text-body text-lg leading-relaxed mt-2 hidden group-data-[state=active]/step:block animate-fade-in pr-4">
                            {step.description}
                          </StepperDescription>
                        </div>
                      </StepperTrigger>
                      {index < steps.length - 1 && (
                        <StepperSeparator className="absolute inset-y-0 top-12 md:top-14 left-5 md:left-6 -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper-nav:h-[calc(100%-3rem)] w-0.5 bg-ink/10 group-data-[state=completed]/step:bg-champagne transition-colors duration-500" />
                      )}
                    </StepperItem>
                  ))}
                </StepperNav>
              </ScrollAnimation>
            </div>

            <StepperPanel className="w-full md:w-7/12 min-h-[400px] md:min-h-[600px] relative">
              {steps.map((step, index) => (
                <StepperContent key={index} value={index + 1} className="h-full w-full absolute inset-0">
                  <ScrollAnimation animation="fade-left" className="h-full w-full">
                    <div className="relative w-full h-[400px] md:h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-soft-lg group">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-twilight/10 transition-colors duration-500" />
                      
                      {/* Decorative elements over image */}
                      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 p-6 rounded-2xl bg-ivory/95 backdrop-blur-sm shadow-soft border border-ink/5 animate-fade-up">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-champagne/10 text-champagne">
                            <step.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-champagne tracking-wider uppercase mb-1">Step {step.stepNumber}</p>
                            <h4 className="text-lg md:text-xl font-semibold text-ink">{step.title}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </StepperContent>
              ))}
            </StepperPanel>
          </Stepper>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/lib/animations"
import { CaretDown } from "@phosphor-icons/react"

const BESPOKE_FAQS = [
  {
    question: "What makes a Bespoke Journey different from Signature Collection?",
    answer: "While our Signature Collection offers curated, pre-designed itineraries for small groups, a Bespoke Journey provides a private vessel entirely for you and your guests. Every element—from the routing and duration to the menus and excursions—is custom-designed from a blank canvas."
  },
  {
    question: "How private are the charters?",
    answer: "Absolute privacy is our guarantee. Once you step aboard, the yacht is yours exclusively. Our crew is trained in white-glove service, ensuring they are attentive to your every need while remaining completely unobtrusive, respecting your space and confidentiality at all times."
  },
  {
    question: "What level of customization is possible?",
    answer: "There are virtually no limits. We can source specific vintage wines, arrange for a private Michelin-starred chef, fly in specialty sports equipment, or coordinate remote helicopter transfers. If it can be done safely on the water, we will make it happen."
  },
  {
    question: "How far in advance should I book?",
    answer: "For our most sought-after vessels and peak seasonal periods (such as European summers or Australian holidays), we recommend booking 6 to 12 months in advance. However, our concierge team can often accommodate shorter-notice requests depending on fleet availability."
  },
  {
    question: "Can you handle special requests (dietary, events, surprises)?",
    answer: "Absolutely. During the initial consultation, we gather detailed profiles for all guests. We expertly handle complex dietary requirements, religious observances, milestone celebrations, and highly orchestrated surprise events."
  },
  {
    question: "Are there minimum durations?",
    answer: "Bespoke charters typically require a minimum of 2 nights, allowing sufficient time to immerse yourself in the luxury of the vessel and the rhythm of the ocean. However, 5 to 7 nights is our most common request for a truly transformative experience."
  },
  {
    question: "What is the cancellation policy for private charters?",
    answer: "Cancellation policies vary slightly depending on the specific vessel and duration of your charter. Generally, we offer flexible rebooking options up to 90 days prior to departure. A detailed charter agreement will be provided during the booking process."
  }
]

export function BespokeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 lg:py-32 bg-pearl text-ink border-t border-mist/30 relative overflow-hidden">
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-4xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight drop-shadow-sm text-ink">
            Bespoke Journeys FAQ
          </h2>
          <p className="text-lg text-ink/80 max-w-2xl mx-auto font-light">
            Everything you need to know about designing your private charter.
          </p>
        </ScrollAnimation>

        <div className="space-y-4">
          {BESPOKE_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
               <ScrollAnimation key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-white border border-mist/30 rounded-[1.5rem] overflow-hidden transition-all duration-300 group hover:border-champagne/40 shadow-soft-sm">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-6 lg:px-8 lg:py-8 text-left flex items-center justify-between focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-lg font-semibold tracking-wide pr-8 transition-colors duration-300 ${isOpen ? 'text-champagne' : 'text-ink group-hover:text-champagne'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border ${isOpen ? 'bg-champagne/20 border-champagne text-champagne' : 'bg-mist/30 border-mist/50 text-ink group-hover:border-champagne/50 group-hover:text-champagne'}`}>
                      <CaretDown size={18} weight="bold" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-0 text-ink/80 leading-relaxed font-light text-[15px]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}

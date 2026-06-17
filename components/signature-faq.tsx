"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/lib/animations"
import { CaretDown } from "@phosphor-icons/react"

const FAQS = [
  {
    question: "What is included in a Signature voyage?",
    answer: "Our Signature voyages are comprehensively inclusive. They cover all yacht operations, a dedicated crew, gourmet dining curated by a private chef, select premium beverages, standard water toys, and customized onshore excursions."
  },
  {
    question: "How customizable are the itineraries?",
    answer: "Highly customizable. While we provide a beautifully orchestrated foundation based on the region, we tailor the day-to-day pacing, dining, and activities entirely to your preferences during the consultation phase."
  },
  {
    question: "What are the group sizes?",
    answer: "Depending on the vessel selected from our fleet, our Signature voyages comfortably accommodate intimate groups of 10 up to larger gatherings of 50 guests, ensuring a highly personalized crew-to-guest ratio."
  },
  {
    question: "What is the best time to sail?",
    answer: "This depends entirely on your chosen destination. For the Great Barrier Reef and Whitsundays, winter and spring (June - November) offer pristine conditions. Our concierge team will advise on optimal seasonal windows during consultation."
  },
  {
    question: "Are there wellness or adventure focuses?",
    answer: "Absolutely. You can choose to heavily weight your itinerary toward wellness (featuring onboard yoga, spa treatments, and organic menus) or adventure (focused on deep-water diving, expedition tours, and water sports)."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer flexible postponement options up to 60 days prior to departure. For full details on our deposit structure, cancellation timelines, and recommended travel insurance, please contact our concierge."
  }
]

export function SignatureFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-background text-ink border-t border-mist/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-twilight-deep">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-body">
            Everything you need to know before embarking on your transformative journey.
          </p>
        </ScrollAnimation>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <ScrollAnimation key={idx} animation="fade-up" delay={idx * 100}>
                <div className="bg-card border border-mist/50 rounded-2xl overflow-hidden transition-all duration-300 group hover:border-champagne/40">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-champagne' : 'text-twilight-deep group-hover:text-champagne'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-champagne text-white' : 'bg-mist text-twilight-deep'}`}>
                      <CaretDown size={16} weight="bold" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0 text-body leading-relaxed text-[15px]">
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

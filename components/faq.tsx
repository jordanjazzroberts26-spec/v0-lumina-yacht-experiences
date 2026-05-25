"use client"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollAnimation } from "@/lib/animations"

const faqs = [
  {
    question: "How do I book a voyage?",
    answer:
      "Begin by sharing your vision through our contact form or by reaching out to Captain Elena directly. We will schedule a consultation to understand your preferences, discuss dates, and craft a personalized itinerary. Once confirmed, a deposit secures your voyage.",
  },
  {
    question: "What is included in each program?",
    answer:
      "All programs include luxury accommodation aboard our yacht, gourmet meals prepared by our private chef, premium beverages, water activities and equipment, and personalized service from our crew. Specific inclusions vary by program—Signature includes guided excursions, Bespoke offers full customization, and Wellness features daily yoga and spa treatments.",
  },
  {
    question: "What is the best time to sail?",
    answer:
      "The Mediterranean season runs from May through October, with June and September offering ideal conditions. Caribbean voyages are best from December through April. We can advise on the perfect timing for your desired destination.",
  },
  {
    question: "How customizable are the experiences?",
    answer:
      "Our Bespoke Journeys are fully customizable—from itinerary and dining to onboard activities and special celebrations. Signature and Wellness programs follow curated schedules but can accommodate dietary requirements, special occasions, and activity preferences.",
  },
  {
    question: "What is your group size policy?",
    answer:
      "Our yacht comfortably accommodates up to 12 guests, ensuring an intimate and personalized experience. Smaller groups enjoy even more exclusivity, while we can arrange multiple yacht experiences for larger parties.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand plans can change. Cancellations made 60+ days before departure receive a full refund minus deposit. 30-60 days receives 50% refund. Within 30 days, credit toward a future voyage is offered. Travel insurance is recommended.",
  },
]

interface FAQProps {
  onOpenModal: () => void
}

export function FAQ({ onOpenModal }: FAQProps) {
  return (
    <section id="faq" className="py-32 px-6 lg:px-12 bg-pearl">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-body text-xl md:text-2xl">
            Everything you need to know about your voyage
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-8 border border-border"
              >
                <AccordionTrigger className="text-left text-ink font-medium hover:text-gold transition-colors py-7 text-xl md:text-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body leading-relaxed pb-7 text-lg md:text-xl">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={400} className="text-center mt-16">
          <p className="text-body mb-6 text-xl">
            Have more questions? We would love to hear from you.
          </p>
          <Button
            onClick={onOpenModal}
            size="lg"
            className="bg-gold text-ink font-semibold hover:bg-gold/90 shadow-soft transition-all duration-300 text-lg px-8"
          >
            Speak with Elena
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}

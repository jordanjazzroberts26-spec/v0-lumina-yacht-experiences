"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react"

interface SignatureCtaProps {
  onOpenModal: () => void
}

export function SignatureCta({ onOpenModal }: SignatureCtaProps) {
  return (
    <section className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery-4.jpg"
          alt="Luxury Yacht Lifestyle"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark elegant overlay */}
        <div className="absolute inset-0 bg-twilight-deep/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-twilight-deep via-transparent to-twilight-deep/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center text-white">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
            Ready for Your Signature Escape?
          </h2>
          <p className="text-lg md:text-xl text-pearl/90 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            Begin with a personal consultation and let us craft the perfect multi-day voyage for you.
          </p>

          <button 
            onClick={onOpenModal}
            className="inline-flex items-center justify-center px-10 py-5 bg-champagne text-white text-lg font-bold tracking-wide rounded-radius hover:bg-champagne-hover hover:scale-105 shadow-[0_0_20px_rgba(201,164,92,0.3)] hover:shadow-[0_0_30px_rgba(201,164,92,0.6)] transition-all duration-300 group"
          >
            Plan My Signature Voyage
            <ArrowRight weight="bold" className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200} className="mt-32 pt-16 border-t border-white/20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-3 tracking-wide">Signature Departures & Exclusive Offers</h3>
            <p className="text-pearl/70 mb-8 text-sm leading-relaxed max-w-md mx-auto">
              Subscribe to receive curated itineraries, early access to new vessels, and insider nautical insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <EnvelopeSimple className="h-5 w-5 text-white/50" />
                </div>
                <input
                  type="email"
                  className="block w-full pl-12 pr-4 py-3.5 border border-white/30 rounded-radius bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-champagne focus:bg-white/20 sm:text-base backdrop-blur-md transition-all shadow-inner"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 border-2 border-champagne bg-champagne/10 text-champagne font-bold tracking-wide rounded-radius hover:bg-champagne hover:text-white transition-colors flex items-center justify-center whitespace-nowrap shadow-sm backdrop-blur-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

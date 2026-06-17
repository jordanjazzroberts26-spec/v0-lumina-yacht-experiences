"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExperienceModal } from "@/components/experience-modal"
import { BespokeIntro } from "@/components/bespoke-intro"
import { BespokePossibilities } from "@/components/bespoke-possibilities"
import { BespokeProcess } from "@/components/bespoke-process"
import { ScrollAnimation } from "@/lib/animations"

export function BespokeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onOpenModal={openModal} />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex flex-col pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery-2.jpg"
            alt="Intimate Private Yacht Dining"
            fill
            className="object-cover transition-transform duration-10000 hover:scale-105"
            priority
            sizes="100vw"
          />
          {/* Softer, warmer gradient for intimate golden-hour feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-twilight-deep/70 via-twilight-deep/30 to-twilight-deep/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-twilight-deep via-transparent to-transparent opacity-80" />
          {/* Subtle warm glow over the scene */}
          <div className="absolute inset-0 bg-champagne/10 mix-blend-overlay" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex-grow flex flex-col justify-center pb-16">
          <ScrollAnimation animation="fade-up">
            {/* Breadcrumbs */}
            <nav className="flex justify-center items-center space-x-3 text-xs md:text-sm text-pearl/70 mb-12 font-mono tracking-widest uppercase">
              <Link href="/" className="hover:text-champagne transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/#experiences" className="hover:text-champagne transition-colors">Experiences</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-champagne font-medium">Bespoke Journeys</span>
            </nav>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans tracking-tight mb-8 text-white drop-shadow-lg font-light">
              Bespoke Journeys
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-pearl/90 leading-loose mb-14 font-light tracking-wide">
              Private charters crafted entirely around you. Unlimited customization, complete privacy, and white-glove service for your most personal escape.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-10 py-4 bg-champagne text-white font-bold tracking-widest uppercase text-sm rounded-radius hover:bg-champagne-hover hover:scale-105 shadow-[0_0_25px_rgba(201,164,92,0.4)] hover:shadow-[0_0_40px_rgba(201,164,92,0.6)] transition-all duration-500"
              >
                Begin Your Private Vision
              </button>
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/40 text-white font-bold tracking-widest uppercase text-sm rounded-radius hover:bg-white/10 hover:border-white hover:shadow-soft-lg transition-all duration-500 backdrop-blur-sm"
              >
                Schedule Consultation
              </button>
            </div>
          </ScrollAnimation>
        </div>

        {/* Refined Trust Bar */}
        <div className="relative z-10 w-full border-t border-white/10 bg-twilight-deep/40 backdrop-blur-md py-6">
          <div className="container mx-auto px-4">
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs md:text-sm text-pearl/80 font-medium tracking-widest uppercase">
                <span>Completely Private</span>
                <span className="hidden md:inline text-champagne/40">✦</span>
                <span>Fully Personalized</span>
                <span className="hidden md:inline text-champagne/40">✦</span>
                <span>2–14+ Nights</span>
                <span className="hidden md:inline text-champagne/40">✦</span>
                <span>Australia & International</span>
                <span className="hidden md:inline text-champagne/40">✦</span>
                <span className="text-champagne font-bold">Your Dates, Your Dream</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <BespokeIntro />

      <BespokePossibilities />

      <BespokeProcess />

      <Footer />
      
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialProgram="bespoke"
      />
    </main>
  )
}

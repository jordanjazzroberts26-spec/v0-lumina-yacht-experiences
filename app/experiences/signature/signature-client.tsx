"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Map, Users, Utensils, Sparkles } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExperienceModal } from "@/components/experience-modal"
import { FeaturedVoyages } from "@/components/featured-voyages"
import { SignatureFeatures } from "@/components/signature-features"
import { SignatureDifferentiation } from "@/components/signature-differentiation"
import { SignatureDestinations } from "@/components/signature-destinations"
import { SignatureMoments } from "@/components/signature-moments"
import { SignatureTestimonials } from "@/components/signature-testimonials"
import { SignaturePackages } from "@/components/signature-packages"
import { SignatureFleet } from "@/components/signature-fleet"
import { SignatureFaq } from "@/components/signature-faq"
import { SignatureCta } from "@/components/signature-cta"
import { SignatureJourney } from "@/components/signature-journey"
import { ScrollAnimation } from "@/lib/animations"

export function SignatureClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onOpenModal={openModal} />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex flex-col pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/yacht-sunset.png"
            alt="Luxury Yacht at Sunset"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-twilight-deep/70 via-twilight-deep/40 to-twilight-deep/80" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex-grow flex flex-col justify-center pb-10">
          <ScrollAnimation animation="fade-up">
            {/* Breadcrumbs */}
            <nav className="flex justify-center items-center space-x-2 text-sm text-pearl/80 mb-8 font-mono">
              <Link href="/" className="hover:text-champagne transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/#experiences" className="hover:text-champagne transition-colors">Experiences</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-champagne font-medium">Signature Collection</span>
            </nav>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-sans text-white">
              Signature Collection
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-pearl/90 leading-relaxed mb-10">
              Multi-day voyages with curated experiences, guided activities, and moments designed to inspire. Perfect for those seeking a complete luxury escape.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 bg-champagne text-white font-medium rounded-radius hover:bg-champagne-hover hover:scale-105 shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                Explore Voyages
              </button>
              <button 
                onClick={() => document.getElementById('itineraries')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-medium rounded-radius hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                View All Itineraries
              </button>
            </div>
          </ScrollAnimation>
        </div>

        {/* Subtle Trust Bar */}
        <div className="relative z-10 w-full border-t border-white/20 bg-twilight-deep/30 backdrop-blur-md py-5">
          <div className="container mx-auto px-4">
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:text-base text-pearl/90 font-medium tracking-wide">
                <span>3–7 Night Voyages</span>
                <span className="hidden md:inline text-champagne/60">•</span>
                <span>10–50 Guests</span>
                <span className="hidden md:inline text-champagne/60">•</span>
                <span>Australia & Beyond</span>
                <span className="hidden md:inline text-champagne/60">•</span>
                <span>Starting from $XX,XXX per person</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 lg:py-32 bg-pearl text-ink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-twilight-deep">
              Curated Escapes for the Discerning
            </h2>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-4xl mx-auto mb-20">
              Our Signature Collection features handcrafted multi-day voyages that blend luxury, adventure, and transformation. Each itinerary is thoughtfully designed with expert guides, exquisite dining, and exclusive experiences to create lifelong memories.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-ivory shadow-soft flex items-center justify-center mb-6 text-champagne group-hover:scale-105 transition-transform">
                  <Map className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-twilight-deep">Expertly Curated<br/>Itineraries</h3>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-ivory shadow-soft flex items-center justify-center mb-6 text-champagne group-hover:scale-105 transition-transform">
                  <Users className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-twilight-deep">Small Group Intimacy<br/>(10–50 guests)</h3>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-ivory shadow-soft flex items-center justify-center mb-6 text-champagne group-hover:scale-105 transition-transform">
                  <Utensils className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-twilight-deep">World-Class Cuisine<br/>& Wellness</h3>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-ivory shadow-soft flex items-center justify-center mb-6 text-champagne group-hover:scale-105 transition-transform">
                  <Sparkles className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-twilight-deep">Private Access &<br/>Transformative Moments</h3>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <SignatureJourney />

      <FeaturedVoyages />

      <SignatureFeatures />
      
      <SignatureDifferentiation />
      
      <SignatureDestinations />

      <SignatureMoments />
      
      <SignatureTestimonials />

      <SignaturePackages />

      <SignatureFleet />

      <SignatureFaq />

      <SignatureCta onOpenModal={openModal} />

      <Footer />
      
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialProgram="signature"
      />
    </main>
  )
}

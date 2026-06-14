"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Check, Anchor } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExperienceModal } from "@/components/experience-modal"
import { Button } from "@/components/ui/button"
import { getExperienceBySlug } from "@/lib/data/experiences"

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const experience = getExperienceBySlug(params.slug)

  if (!experience) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-pearl">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ink/60" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <span className="text-champagne font-bold tracking-widest text-sm uppercase mb-4 block">
            {experience.duration}
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-moonlight mb-6">
            {experience.title}
          </h1>
          <p className="text-xl md:text-2xl text-moonlight/90 font-light">
            {experience.subtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/#experiences" className="inline-flex items-center text-ink/70 hover:text-gold transition-colors mb-12 group font-medium">
            <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Experiences
          </Link>

          <div className="grid md:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-semibold text-ink mb-6">About This Journey</h2>
                <p className="text-body text-lg leading-relaxed">
                  {experience.fullDescription}
                </p>
              </div>

              <div className="bg-ivory p-8 rounded-2xl border border-ink/5 shadow-soft">
                <h3 className="text-2xl font-semibold text-ink mb-6 flex items-center">
                  <Anchor className="w-6 h-6 mr-3 text-champagne" />
                  Experience Highlights
                </h3>
                <ul className="space-y-4">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-champagne mt-2.5 mr-4 shrink-0" />
                      <span className="text-body text-lg">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-twilight-deep text-moonlight p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold mb-6">Ready to set sail?</h3>
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-champagne text-ink hover:bg-champagne-hover font-bold py-6 text-lg rounded-xl shadow-lg"
                >
                  Book This Experience
                </Button>
                <p className="text-center text-moonlight/60 text-sm mt-4">
                  No commitment required for consultation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-ink/5 shadow-soft">
                <h3 className="text-xl font-semibold text-ink mb-6 border-b border-ink/10 pb-4">
                  What's Included
                </h3>
                <ul className="space-y-4">
                  {experience.included.map((item, index) => (
                    <li key={index} className="flex items-start text-body">
                      <Check className="w-5 h-5 mr-3 text-champagne shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram={experience.slug}
      />
    </main>
  )
}

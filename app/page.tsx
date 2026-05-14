"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Programs } from "@/components/programs"
import { CaptainElena } from "@/components/captain-elena"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { FeaturedIn } from "@/components/featured-in"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { ExperienceModal } from "@/components/experience-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <main className="min-h-screen">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Programs />
      <CaptainElena />
      <Gallery />
      <Testimonials />
      <Stats />
      <FeaturedIn />
      <FAQ onOpenModal={openModal} />
      <FinalCTA onOpenModal={openModal} />
      <Footer />
      <ExperienceModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  )
}

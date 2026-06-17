"use client"

import { useState } from "react"
import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"

const VOYAGES = [
  {
    id: 1,
    title: "Great Barrier Reef Odyssey",
    duration: "7 Nights",
    destination: "Australia",
    theme: "Adventure",
    price: "From $28,500 pp",
    image: "/images/gallery-1.jpg",
    highlights: ["Private diving excursions", "Helicopter reef tours", "Marine biologist guides"]
  },
  {
    id: 2,
    title: "Whitsundays Wellness Retreat",
    duration: "5 Nights",
    destination: "Australia",
    theme: "Wellness",
    price: "From $18,000 pp",
    image: "/images/gallery-2.jpg",
    highlights: ["Daily sunrise yoga", "Organic farm-to-table dining", "Onboard spa treatments"]
  },
  {
    id: 3,
    title: "Mediterranean Culinary Journey",
    duration: "10 Nights",
    destination: "Europe",
    theme: "Culinary",
    price: "From $42,000 pp",
    image: "/images/gallery-3.jpg",
    highlights: ["Michelin-star guest chefs", "Private vineyard tours", "Local market sourcing"]
  },
  {
    id: 4,
    title: "Fiji Island Explorer",
    duration: "7 Nights",
    destination: "South Pacific",
    theme: "Adventure",
    price: "From $32,000 pp",
    image: "/images/gallery-4.jpg",
    highlights: ["Remote island hopping", "Cultural village visits", "Deep sea fishing"]
  },
  {
    id: 5,
    title: "Amalfi Coast Discovery",
    duration: "5 Nights",
    destination: "Europe",
    theme: "Culinary",
    price: "From $24,000 pp",
    image: "/images/gallery-5.jpg",
    highlights: ["Coastal town excursions", "Sunset wine tasting", "Authentic pasta masterclasses"]
  },
  {
    id: 6,
    title: "Tahitian Serenity Escape",
    duration: "10 Nights",
    destination: "South Pacific",
    theme: "Wellness",
    price: "From $38,000 pp",
    image: "/images/gallery-6.jpg",
    highlights: ["Polynesian spa rituals", "Crystal clear lagoon swimming", "Mindfulness meditation"]
  }
]

export function FeaturedVoyages() {
  const [filterDestination, setFilterDestination] = useState("All")
  const [filterDuration, setFilterDuration] = useState("All")
  const [filterTheme, setFilterTheme] = useState("All")

  const destinations = ["All", "Australia", "Europe", "South Pacific"]
  const durations = ["All", "5 Nights", "7 Nights", "10 Nights"]
  const themes = ["All", "Adventure", "Wellness", "Culinary"]

  const filteredVoyages = VOYAGES.filter(v => {
    if (filterDestination !== "All" && v.destination !== filterDestination) return false;
    if (filterDuration !== "All" && v.duration !== filterDuration) return false;
    if (filterTheme !== "All" && v.theme !== filterTheme) return false;
    return true;
  })

  return (
    <section id="itineraries" className="py-24 bg-ivory text-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-twilight-deep">Signature Voyages</h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Hand-selected multi-day journeys across Australia and beyond
          </p>
        </ScrollAnimation>

        {/* Filters */}
        <ScrollAnimation animation="fade-up" delay={100} className="mb-12 flex flex-wrap gap-4 justify-center">
          <select 
            value={filterDestination} 
            onChange={(e) => setFilterDestination(e.target.value)}
            className="px-4 py-2 rounded-md border border-mist bg-card text-sm font-medium focus:outline-none focus:ring-2 focus:ring-champagne"
          >
            {destinations.map(d => <option key={d} value={d}>{d === "All" ? "All Destinations" : d}</option>)}
          </select>
          
          <select 
            value={filterDuration} 
            onChange={(e) => setFilterDuration(e.target.value)}
            className="px-4 py-2 rounded-md border border-mist bg-card text-sm font-medium focus:outline-none focus:ring-2 focus:ring-champagne"
          >
            {durations.map(d => <option key={d} value={d}>{d === "All" ? "All Durations" : d}</option>)}
          </select>

          <select 
            value={filterTheme} 
            onChange={(e) => setFilterTheme(e.target.value)}
            className="px-4 py-2 rounded-md border border-mist bg-card text-sm font-medium focus:outline-none focus:ring-2 focus:ring-champagne"
          >
            {themes.map(t => <option key={t} value={t}>{t === "All" ? "All Themes" : t}</option>)}
          </select>
        </ScrollAnimation>

        {/* Grid */}
        {filteredVoyages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVoyages.map((voyage, idx) => (
              <ScrollAnimation key={voyage.id} animation="fade-up" delay={200 + ((idx % 3) * 100)} className="h-full">
                <div className="group bg-card rounded-xl overflow-hidden card-hover-lift flex flex-col h-full border border-mist/50">
                  <div className="relative h-60 overflow-hidden shrink-0">
                    <Image
                      src={voyage.image}
                      alt={voyage.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold tracking-wider text-twilight-deep rounded-full uppercase">
                      {voyage.duration}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs text-champagne font-bold tracking-wider uppercase mb-2">
                      {voyage.destination} • {voyage.theme}
                    </div>
                    <h3 className="text-2xl font-semibold text-twilight-deep mb-4 leading-tight">
                      {voyage.title}
                    </h3>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {voyage.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm text-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 mr-3 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6 border-t border-mist/50 flex items-center justify-between">
                      <div className="font-medium text-ink">{voyage.price}</div>
                      <button className="text-sm font-semibold text-champagne hover:text-champagne-hover transition-colors inline-flex items-center gap-1 group/btn">
                        Learn More
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium text-twilight-deep mb-2">No voyages found</h3>
            <p className="text-body">Please adjust your filters to see available itineraries.</p>
            <button 
              onClick={() => {
                setFilterDestination("All")
                setFilterDuration("All")
                setFilterTheme("All")
              }}
              className="mt-6 px-6 py-2 bg-champagne text-white font-medium rounded-radius hover:bg-champagne-hover transition-colors shadow-soft"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

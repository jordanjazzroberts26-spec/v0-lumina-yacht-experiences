"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Search, Anchor, Users, Ruler, BedDouble, Wind, ChevronDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExperienceModal } from "@/components/experience-modal"
import { Button } from "@/components/ui/button"
import { fleetData, Yacht } from "@/lib/data/yachts"

export default function YachtsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("All")
  const [sortBy, setSortBy] = useState("price-asc") // 'price-asc', 'price-desc', 'length-desc', 'capacity-desc'

  const filteredAndSortedFleet = useMemo(() => {
    let result = [...fleetData]

    // 1. Search Filter
    if (searchQuery) {
      result = result.filter(yacht => 
        yacht.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // 2. Type Filter
    if (typeFilter !== "All") {
      result = result.filter(yacht => yacht.type === typeFilter)
    }

    // 3. Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.pricePerHour - b.pricePerHour
        case "price-desc":
          return b.pricePerHour - a.pricePerHour
        case "length-desc":
          return b.length - a.length
        case "capacity-desc":
          const capA = parseInt(a.capacity.split(" ")[0]) || 0
          const capB = parseInt(b.capacity.split(" ")[0]) || 0
          return capB - capA
        default:
          return 0
      }
    })

    return result
  }, [searchQuery, typeFilter, sortBy])

  // Get unique yacht types for the filter dropdown
  const yachtTypes = ["All", ...Array.from(new Set(fleetData.map(y => y.type)))]

  return (
    <main className="min-h-screen bg-pearl flex flex-col">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      {/* Fleet Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 lg:px-12 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/gallery-2.jpg')] bg-cover bg-center mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-moonlight mb-6 tracking-wide uppercase">
            The Collection
          </h1>
          <p className="text-lg md:text-xl text-moonlight/80 max-w-2xl mx-auto leading-relaxed">
            Explore our meticulously curated fleet of luxury vessels, each promising an unparalleled maritime experience.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-0 z-40 bg-white border-b border-ink/5 shadow-sm py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" />
            <input 
              type="text" 
              placeholder="Search yachts by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-sand/50 border border-ink/10 text-ink focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all text-sm font-medium placeholder:text-ink/40"
            />
          </div>

          {/* Filters */}
          <div className="flex w-full md:w-auto gap-4">
            <div className="relative w-1/2 md:w-48">
              <select 
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-3 rounded-lg bg-sand/50 border border-ink/10 text-ink focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all text-sm font-medium cursor-pointer"
              >
                {yachtTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40 pointer-events-none" />
            </div>

            <div className="relative w-1/2 md:w-56">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-3 rounded-lg bg-sand/50 border border-ink/10 text-ink focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all text-sm font-medium cursor-pointer"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="length-desc">Length: Largest First</option>
                <option value="capacity-desc">Capacity: Most Guests</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="flex-1 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredAndSortedFleet.length === 0 ? (
            <div className="text-center py-24">
              <Anchor className="w-12 h-12 text-ink/20 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-ink mb-2">No yachts found</h3>
              <p className="text-body">Try adjusting your filters or search query.</p>
              <Button 
                onClick={() => { setSearchQuery(""); setTypeFilter("All"); }}
                className="mt-6 bg-gold text-ink hover:bg-gold/90 font-semibold"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {filteredAndSortedFleet.map((yacht) => (
                <div key={yacht.slug} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-ink/5">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary/20">
                    <Image
                      src={yacht.image}
                      alt={yacht.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-twilight/0 group-hover:bg-twilight/10 transition-colors duration-500" />
                    <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur-md text-moonlight text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {yacht.type}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-8 space-y-6">
                    <div className="flex justify-between items-start border-b border-ink/5 pb-6">
                      <div>
                        <h3 className="text-3xl font-semibold text-ink tracking-wide uppercase mb-2">
                          {yacht.name}
                        </h3>
                        <p className="text-gold font-semibold text-lg">{yacht.price}</p>
                      </div>
                      <Button onClick={() => setIsModalOpen(true)} className="bg-ink text-moonlight hover:bg-gold hover:text-ink transition-colors font-semibold px-6">
                        Inquire
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
                      <div className="flex flex-col items-center justify-center p-3 bg-sand/30 rounded-xl">
                        <Ruler className="w-5 h-5 text-ink/60 mb-2" />
                        <span className="text-sm font-semibold text-ink">{yacht.length} ft</span>
                        <span className="text-xs text-ink/50 uppercase tracking-wider">Length</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 bg-sand/30 rounded-xl">
                        <Users className="w-5 h-5 text-ink/60 mb-2" />
                        <span className="text-sm font-semibold text-ink">{yacht.capacity.split(" ")[0]}</span>
                        <span className="text-xs text-ink/50 uppercase tracking-wider">Guests</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 bg-sand/30 rounded-xl">
                        <BedDouble className="w-5 h-5 text-ink/60 mb-2" />
                        <span className="text-sm font-semibold text-ink">{yacht.cabins}</span>
                        <span className="text-xs text-ink/50 uppercase tracking-wider">Cabins</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 bg-sand/30 rounded-xl">
                        <Wind className="w-5 h-5 text-ink/60 mb-2" />
                        <span className="text-sm font-semibold text-ink">{yacht.speed} kn</span>
                        <span className="text-xs text-ink/50 uppercase tracking-wider">Speed</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-semibold text-ink/40 uppercase tracking-widest mb-3">Key Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {yacht.amenities.map(amenity => (
                          <span key={amenity} className="text-xs font-medium text-ink/70 bg-sand px-3 py-1.5 rounded-md border border-ink/5">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProgram=""
      />
    </main>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/lib/animations"
import { getFeaturedYachts } from "@/lib/data/yachts"

export function Fleet() {
  const featuredYachts = getFeaturedYachts()

  return (
    <section id="browse-yachts" className="py-12 md:py-16 px-6 lg:px-12 bg-sand scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-wide">
              Our Featured Fleet
            </h2>
            <p className="text-base text-body font-medium tracking-wide uppercase">
              Exclusive Luxury Charters
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {featuredYachts.map((yacht, index) => (
            <ScrollAnimation
              key={yacht.slug}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group flex flex-col h-full bg-ivory rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-ink/5 card-hover-lift">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary/20">
                  <Image
                    src={yacht.image}
                    alt={yacht.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-twilight/0 group-hover:bg-twilight/10 transition-colors duration-500" />
                </div>

                <div className="flex flex-col flex-1 p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-semibold text-ink tracking-wide uppercase">
                      {yacht.name}
                    </h3>
                    <span className="text-sm font-semibold text-gold uppercase tracking-wider bg-gold/10 px-3 py-1 rounded-full">
                      {yacht.type}
                    </span>
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex items-center text-ink/80 text-base">
                      <Users className="w-5 h-5 mr-3 text-gold" />
                      <span>{yacht.capacity}</span>
                    </div>
                    <div className="flex items-center text-ink/80 text-base">
                      <Clock className="w-5 h-5 mr-3 text-gold" />
                      <span>{yacht.price}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-ink text-moonlight font-semibold hover:bg-gold hover:text-ink transition-all duration-500 mt-4 rounded-lg py-6 text-lg">
                    <Link href={`/yachts`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" className="text-center mt-16">
          <Button
            asChild
            variant="outline"
            className="border-ink/20 text-ink hover:bg-gold hover:text-ink hover:border-gold font-bold uppercase tracking-widest px-10 py-6 text-sm transition-all duration-500 rounded-xl"
          >
            <Link href="/yachts">
              Browse Full Fleet
            </Link>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}

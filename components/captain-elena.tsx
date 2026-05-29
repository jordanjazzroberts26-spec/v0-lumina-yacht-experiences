"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/lib/animations"

export function CaptainElena() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Portrait */}
          <ScrollAnimation animation="fade-left">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/captain-derek.png"
                alt="Captain Derek Langford"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink">
                Meet Your Captain
              </h2>
              <p className="text-body leading-relaxed">
                Captain Derek Langford has navigated the world&apos;s most pristine waters
                for over two decades, combining maritime expertise with a passion
                for creating meaningful connections.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-ink/30 text-ink hover:bg-ink hover:text-moonlight transition-all duration-300 mt-4"
                >
                  Contact Captain Derek
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

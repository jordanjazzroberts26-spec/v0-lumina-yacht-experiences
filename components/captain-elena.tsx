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
                src="/images/captain-elena.jpg"
                alt="Captain Elena Voss"
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
                Captain Elena Voss has navigated the world&apos;s most pristine waters
                for over two decades, combining maritime expertise with a passion
                for creating meaningful connections.
              </p>
              <p className="text-body leading-relaxed">
                Every voyage is personally overseen by Elena, ensuring each guest
                experiences the perfect blend of adventure, relaxation, and
                unforgettable moments.
              </p>
              <blockquote className="border-l-4 border-gold pl-6 italic text-ink text-lg">
                &quot;It&apos;s never about the boat. It&apos;s about what happens when the
                right people, the right food, the right music, and the right
                ocean come together exactly the way you dreamed.&quot;
              </blockquote>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-ink/30 text-ink hover:bg-ink hover:text-moonlight transition-all duration-300 mt-4"
                >
                  Contact Captain Elena
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

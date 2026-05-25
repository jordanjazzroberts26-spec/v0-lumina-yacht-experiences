"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { ScrollAnimation } from "@/lib/animations"

const testimonials = [
  {
    name: "Margaret & David Chen",
    location: "San Francisco, CA",
    image: "/images/testimonial-1.jpg",
    quote:
      "Our anniversary voyage exceeded every expectation. Captain Elena created moments we will treasure forever. The attention to detail was extraordinary.",
    rating: 5,
  },
  {
    name: "Sophia Laurent",
    location: "Paris, France",
    image: "/images/testimonial-2.jpg",
    quote:
      "As someone who has experienced luxury travel worldwide, Lumina stands apart. It is not just a yacht trip—it is a transformation.",
    rating: 5,
  },
  {
    name: "James Morrison",
    location: "London, UK",
    image: "/images/testimonial-3.jpg",
    quote:
      "The wellness retreat was exactly what my soul needed. Waking up to yoga on the deck with the Mediterranean sun—pure magic.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4">
            What Our Guests Say
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Stories from those who have experienced the Lumina difference
          </p>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={testimonial.name}
              animation="fade-up"
              delay={index * 200}
            >
              <div className="bg-card rounded-lg p-8 shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink">
                      {testimonial.name}
                    </h4>
                    <p className="text-whisper text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-body leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

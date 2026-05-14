"use client"

import { X, Anchor, Star, Users, Compass, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

interface WhyLuminaModalProps {
  isOpen: boolean
  onClose: () => void
}

const reasons = [
  {
    icon: Anchor,
    title: "Curated Excellence",
    description: "Every voyage is meticulously crafted with 15+ years of maritime expertise and an unwavering commitment to perfection."
  },
  {
    icon: Star,
    title: "98% Return Rate",
    description: "Our guests don't just visit once—they become part of the Lumina family, returning year after year."
  },
  {
    icon: Users,
    title: "Intimate Experiences",
    description: "Maximum 8 guests per voyage ensures personalized attention and genuine connections."
  },
  {
    icon: Compass,
    title: "Hidden Destinations",
    description: "Access exclusive anchorages and secret coves known only to seasoned local captains."
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Your voyage, your rules. Absolute discretion for guests who value their privacy."
  },
  {
    icon: Heart,
    title: "Transformative Journeys",
    description: "More than a vacation—guests describe their voyages as life-changing experiences."
  }
]

export function WhyLuminaModal({ isOpen, onClose }: WhyLuminaModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-cream w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4 rounded-lg shadow-2xl animate-fade-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal/60 hover:text-navy transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          <p className="text-gold text-sm tracking-widest uppercase mb-3">
            The Lumina Difference
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-navy mb-6">
            Why Choose Lumina
          </h2>
          <p className="text-charcoal/70 mb-8">
            Discover what sets a Lumina voyage apart from ordinary yacht charters.
          </p>

          {/* Reasons Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg bg-navy/5 border border-navy/10"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="text-gold" size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-navy mb-1">{reason.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-navy/10 text-center">
            <p className="text-charcoal/60 text-sm mb-4">
              Ready to experience the difference?
            </p>
            <Button
              onClick={onClose}
              className="bg-gold text-navy font-medium hover:bg-gold/90 transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

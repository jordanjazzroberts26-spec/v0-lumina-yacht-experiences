"use client"

import { useState, useEffect } from "react"
import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ExperienceModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ExperienceModal({ isOpen, onClose }: ExperienceModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dates: "",
    guests: "",
    program: "",
    requests: "",
  })

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        dates: "",
        guests: "",
        program: "",
        requests: "",
      })
      onClose()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-cream rounded-lg shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <Check className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-navy mb-2">
                Request Received
              </h3>
              <p className="text-charcoal/70">
                Captain Elena will be in touch within 24 hours to craft your
                perfect voyage.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-navy mb-2">
                Craft Your Private Experience
              </h2>
              <p className="text-charcoal/70 mb-6">
                Share your vision, and we will create something extraordinary.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-navy">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="border-border focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="border-border focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="dates" className="text-navy">
                      Preferred Dates
                    </Label>
                    <Input
                      id="dates"
                      placeholder="e.g., July 15-22, 2025"
                      value={formData.dates}
                      onChange={(e) =>
                        setFormData({ ...formData, dates: e.target.value })
                      }
                      className="border-border focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-navy">
                      Number of Guests
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="border-border focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program" className="text-navy">
                    Preferred Program
                  </Label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) =>
                      setFormData({ ...formData, program: value })
                    }
                  >
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="signature">
                        Signature Collection
                      </SelectItem>
                      <SelectItem value="bespoke">Bespoke Journeys</SelectItem>
                      <SelectItem value="wellness">Wellness Retreats</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requests" className="text-navy">
                    Special Requests
                  </Label>
                  <Textarea
                    id="requests"
                    placeholder="Tell us about your dream voyage..."
                    rows={4}
                    value={formData.requests}
                    onChange={(e) =>
                      setFormData({ ...formData, requests: e.target.value })
                    }
                    className="border-border focus:ring-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold text-navy font-medium hover:bg-gold/90 transition-all duration-300 mt-4"
                >
                  Plan My Voyage
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

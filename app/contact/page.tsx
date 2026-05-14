"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Mail, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollAnimation } from "@/lib/animations"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 5000)
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-cream tracking-wide">
            LUMINA
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Experiences
          </Link>
        </div>
      </header>

      <div className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-up" className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mb-4">
              Contact Captain Elena
            </h1>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Begin your journey with a personal conversation. Share your vision,
              and let us craft your perfect voyage.
            </p>
          </ScrollAnimation>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-navy mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed mb-8">
                    Whether you have questions about our programs, want to discuss
                    a custom voyage, or simply want to learn more about the Lumina
                    experience, we are here for you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-gold" size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy">Email</h3>
                      <p className="text-charcoal/70">hello@luminayachts.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-gold" size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy">Phone</h3>
                      <p className="text-charcoal/70">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-gold" size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-navy">Office Hours</h3>
                      <p className="text-charcoal/70">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                      </p>
                      <p className="text-charcoal/70">
                        Saturday: 10:00 AM - 4:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-gold pl-6 italic text-navy mt-8">
                  &quot;Every great voyage begins with a simple hello.&quot;
                  <footer className="text-charcoal/70 text-sm mt-2 not-italic">
                    — Captain Elena Voss
                  </footer>
                </blockquote>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="bg-card rounded-lg p-8 shadow-sm">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-up">
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                      <Check className="text-gold" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-navy mb-2">
                      Message Sent
                    </h3>
                    <p className="text-charcoal/70">
                      Captain Elena will respond within 24 hours to discuss your
                      voyage.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-navy mb-6">
                      Send a Message
                    </h2>
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
                            className="border-border"
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
                            className="border-border"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-navy">
                            Phone (optional)
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-navy">
                            Subject
                          </Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({ ...formData, subject: e.target.value })
                            }
                            required
                            className="border-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-navy">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your dream voyage..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          required
                          className="border-border resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gold text-navy font-medium hover:bg-gold/90 transition-all duration-300 mt-4"
                      >
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-navy py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-cream/50 text-sm">
            {new Date().getFullYear()} Lumina Yacht Experiences. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-cream/70 hover:text-gold transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Mail, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"
import { ExperienceModal } from "@/components/experience-modal"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollAnimation } from "@/lib/animations"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        message: "",
      })
    }, 5000)
  }

  return (
    <main className="min-h-screen bg-navy">
      {/* Back Link */}
      <div className="px-6 lg:px-12 pt-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimation animation="fade-up" className="mb-12 lg:mb-16">
            <p className="text-gold text-sm tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-4">
              Contact Captain Elena
            </h1>
            <p className="text-cream/60 max-w-xl text-lg">
              Have questions about our yacht experiences or want to discuss if a voyage 
              is right for you? Reach out directly and I&apos;ll get back to you within 24 hours.
            </p>
          </ScrollAnimation>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Info Cards */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="space-y-4">
                {/* Email Card */}
                <div className="bg-cream/5 border border-cream/10 rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-gold" size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-cream mb-1">Email</h3>
                      <p className="text-cream/60 text-sm">captain@luminayachts.com</p>
                    </div>
                  </div>
                </div>

                {/* Direct Access Card */}
                <div className="bg-cream/5 border border-cream/10 rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-gold" size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-cream mb-1">Direct Access</h3>
                      <p className="text-cream/60 text-sm">
                        Program members get 24/7 access via text and voice memo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="bg-cream/5 border border-cream/10 rounded-lg p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-gold" size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium text-cream mb-1">Response Time</h3>
                      <p className="text-cream/60 text-sm">
                        I personally respond to all inquiries within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Side - Contact Form */}
            <ScrollAnimation animation="fade-up" delay={400}>
              <div>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-up">
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                      <Check className="text-gold" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-cream mb-2">
                      Message Sent
                    </h3>
                    <p className="text-cream/60">
                      Captain Elena will respond within 24 hours to discuss your voyage.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-cream/80 text-sm">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-cream/5 border-cream/10 text-cream placeholder:text-cream/40 focus:border-gold/50 focus:ring-gold/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-cream/80 text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-cream/5 border-cream/10 text-cream placeholder:text-cream/40 focus:border-gold/50 focus:ring-gold/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-cream/80 text-sm">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your goals and any questions you have..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="bg-cream/5 border-cream/10 text-cream placeholder:text-cream/40 focus:border-gold/50 focus:ring-gold/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gold text-navy font-medium hover:bg-gold/90 transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                )}

                {/* Privacy Note */}
                <p className="text-cream/40 text-xs text-center mt-6">
                  Your information is kept confidential and never shared.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <FinalCTA onOpenModal={() => setIsModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Experience Modal */}
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  )
}

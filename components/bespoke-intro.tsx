"use client"

import { ScrollAnimation } from "@/lib/animations"
import { LockKey, MapTrifold, UsersThree, Sparkle } from "@phosphor-icons/react"

export function BespokeIntro() {
  return (
    <section className="py-24 lg:py-32 bg-pearl text-ink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-twilight-deep">
            Your Voyage, Perfectly Tailored
          </h2>
          <p className="text-lg md:text-xl text-body leading-relaxed max-w-4xl mx-auto mb-20">
            At Lumina, every Bespoke Journey begins with a deep understanding of your desires. From intimate couple escapes to multi-generational family adventures or executive offsites, we craft completely private experiences that reflect your lifestyle, timeline, and dreams.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-20 h-20 rounded-full bg-ivory shadow-soft flex items-center justify-center mb-6 text-champagne group-hover:scale-110 group-hover:bg-white group-hover:shadow-soft-lg transition-all duration-300">
                <LockKey size={36} weight="light" />
              </div>
              <h3 className="text-lg font-medium text-twilight-deep">100% Private<br/>Charter</h3>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-20 h-20 rounded-full bg-ivory shadow-soft flex items-center justify-center mb-6 text-champagne group-hover:scale-110 group-hover:bg-white group-hover:shadow-soft-lg transition-all duration-300">
                <MapTrifold size={36} weight="light" />
              </div>
              <h3 className="text-lg font-medium text-twilight-deep">Unlimited Itinerary<br/>Customization</h3>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-20 h-20 rounded-full bg-ivory shadow-soft flex items-center justify-center mb-6 text-champagne group-hover:scale-110 group-hover:bg-white group-hover:shadow-soft-lg transition-all duration-300">
                <UsersThree size={36} weight="light" />
              </div>
              <h3 className="text-lg font-medium text-twilight-deep">Personal Concierge<br/>& Expert Crew</h3>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-20 h-20 rounded-full bg-ivory shadow-soft flex items-center justify-center mb-6 text-champagne group-hover:scale-110 group-hover:bg-white group-hover:shadow-soft-lg transition-all duration-300">
                <Sparkle size={36} weight="light" />
              </div>
              <h3 className="text-lg font-medium text-twilight-deep">Seamless White-Glove<br/>Service</h3>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

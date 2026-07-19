"use client"

import { ScrollAnimation } from "@/lib/animations"
import { ShieldCheck, Compass, Users, Sparkle, Camera } from "lucide-react"

const differences = [
  {
    title: "True Privacy vs Shared Experiences",
    description:
      "Unlike traditional luxury cruising, your itinerary is completely confidential and shared only with those you invite aboard.",
    icon: ShieldCheck,
  },
  {
    title: "Complete Creative Control",
    description:
      "Every detail, from the routing and pacing to the onboard dining and off-shore excursions, is crafted entirely around your preferences.",
    icon: Compass,
  },
  {
    title: "Dedicated Expert Team",
    description:
      "A seasoned captain, personal chef, and specialized crew are assigned to anticipate your every need before you even ask.",
    icon: Users,
  },
  {
    title: "Flawless Execution & White-Glove Service",
    description:
      "We pride ourselves on invisible perfection. The service is attentive yet unobtrusive, ensuring a seamless and effortless journey.",
    icon: Sparkle,
  },
  {
    title: "Memories That Reflect You",
    description:
      "We don't just sell destinations; we curate lifelong memories tailored uniquely to your passions, milestones, and family dynamics.",
    icon: Camera,
  },
]

export function BespokeDifference() {
  return (
    <section className="py-24 lg:py-32 bg-pearl text-ink border-t border-mist/30 relative overflow-hidden">
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        <ScrollAnimation animation="fade-up" className="text-center mb-20">
          <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-6 block">Why Choose Lumina</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-ink drop-shadow-sm">
            The Lumina Bespoke Difference
          </h2>
          <p className="text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed font-light">
            When you charter with us, you are not simply booking a yacht—you are securing absolute freedom and uncompromising excellence.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {differences.map((item, idx) => (
            <ScrollAnimation key={item.title} animation="fade-up" delay={idx * 150} className={`h-full ${idx === 3 ? 'lg:col-start-1 lg:ml-auto' : ''} ${idx === 4 ? 'lg:col-start-2 lg:mr-auto' : ''}`}>
              <div className="bg-white rounded-[2rem] border border-mist/30 p-10 h-full hover:border-champagne/40 transition-colors duration-500 shadow-soft-sm group">
                <div className="w-14 h-14 rounded-full bg-pearl flex items-center justify-center mb-8 border border-mist/50 group-hover:bg-champagne/10 group-hover:border-champagne/30 transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-champagne" />
                </div>
                <h3 className="text-xl font-semibold tracking-wide mb-4 text-ink">
                  {item.title}
                </h3>
                <p className="text-ink/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

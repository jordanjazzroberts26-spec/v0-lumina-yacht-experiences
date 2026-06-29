"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/lib/animations"
import { Check } from "lucide-react"

const FEATURES = [
  {
    title: "Onboard Luxury",
    description: "Your floating sanctuary is designed to provide ultimate comfort. Experience opulent living spaces and thoughtful amenities that rival the world's finest boutique hotels.",
    image: "/images/gallery-1.jpg",
    bullets: [
      "Expansive master suites with panoramic ocean views",
      "Dedicated onboard spa and wellness facilities",
      "Multiple elegant decks for lounging and dining"
    ]
  },
  {
    title: "Guided Adventures",
    description: "We bring the destination to you. Our experienced guides unlock the secrets of the sea, taking you beyond the typical tourist paths.",
    image: "/images/program-bespoke.jpg",
    bullets: [
      "Expert-led snorkeling and diving excursions",
      "Immersive cultural tours with local communities",
      "Tender explorations to hidden beaches"
    ]
  },
  {
    title: "Culinary Journeys",
    description: "Dining onboard is an event in itself. Our private chefs craft daily menus inspired by the regions you visit, paired seamlessly with world-class wines.",
    image: "/images/gallery-2.jpg",
    bullets: [
      "Fully customized chef-curated menus",
      "Fresh, locally sourced produce and seafood",
      "Sommelier-selected wine pairings"
    ]
  },
  {
    title: "Wellness & Mindfulness",
    description: "Disconnect from the everyday and reconnect with yourself. The rhythm of the ocean provides the perfect backdrop for rejuvenation.",
    image: "/images/program-wellness.jpg",
    bullets: [
      "Guided sunrise yoga on the top deck",
      "Meditation sessions surrounded by open water",
      "Tailored fitness and nutritional programs"
    ]
  },
  {
    title: "Exclusive Privileges",
    description: "A Lumina voyage means access to the inaccessible. We secure permissions and arrangements that guarantee true privacy and VIP treatment.",
    image: "/images/gallery-5.jpg",
    bullets: [
      "Anchorage in secluded, private coves",
      "VIP access to exclusive onshore events",
      "24/7 dedicated concierge service"
    ]
  }
]

const TIMELINE = [
  {
    time: "07:30 AM",
    title: "Sunrise Yoga",
    desc: "Start your day with a guided vinyasa flow on the Sky Deck as the sun breaches the horizon."
  },
  {
    time: "09:00 AM",
    title: "Gourmet Breakfast",
    desc: "Enjoy an alfresco breakfast featuring fresh, locally sourced exotic fruits and artisan pastries."
  },
  {
    time: "11:00 AM",
    title: "Reef Exploration",
    desc: "Dive into crystal-clear waters with our marine biologist for a private snorkeling adventure."
  },
  {
    time: "01:30 PM",
    title: "Mediterranean Lunch",
    desc: "A light, refreshing seafood lunch prepared by your private chef, served on the aft deck."
  },
  {
    time: "04:00 PM",
    title: "Spa & Relaxation",
    desc: "Unwind with a bespoke massage treatment in your suite or enjoy paddleboarding around the cove."
  },
  {
    time: "07:00 PM",
    title: "Sunset Canapés",
    desc: "Gather for champagne and chef's signature canapés while watching a breathtaking sunset."
  },
  {
    time: "08:30 PM",
    title: "Dinner Under the Stars",
    desc: "A spectacular 5-course tasting menu crafted with regional ingredients, paired with fine wines."
  }
]

export function SignatureFeatures() {
  return (
    <section className="py-24 bg-ivory text-ink overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <ScrollAnimation animation="fade-up" className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-twilight-deep">
            What Makes It Signature
          </h2>
          <p className="text-lg md:text-xl text-body leading-relaxed max-w-3xl mx-auto">
            Our Signature Collection isn't just about the yacht; it's about the comprehensive, seamless, and elevated experience we orchestrate for you.
          </p>
        </ScrollAnimation>

        {/* Alternating Blocks */}
        <div className="space-y-24 md:space-y-32">
          {FEATURES.map((feature, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={feature.title} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                
                <ScrollAnimation 
                  animation={isEven ? "fade-in" : "fade-left"} 
                  className="w-full lg:w-1/2"
                >
                  <div className="relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-soft-lg group">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </ScrollAnimation>

                <ScrollAnimation 
                  animation={isEven ? "fade-left" : "fade-in"} 
                  className="w-full lg:w-1/2"
                >
                  <div className="max-w-xl">
                    <h3 className="text-3xl md:text-4xl font-semibold text-twilight-deep mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-body leading-relaxed mb-8">
                      {feature.description}
                    </p>
                    <ul className="space-y-4">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start text-ink">
                          <div className="bg-champagne/20 rounded-full p-1 mt-1 mr-4 shrink-0">
                            <Check className="w-4 h-4 text-champagne" strokeWidth={3} />
                          </div>
                          <span className="text-lg">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>

              </div>
            )
          })}
        </div>

        {/* A Day in the Life - Timeline */}
        <ScrollAnimation animation="fade-up" className="mt-40">
          <div className="bg-twilight-deep rounded-[2.5rem] p-8 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden text-white">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="text-center mb-16 relative z-10">
              <span className="text-champagne font-bold tracking-widest uppercase text-sm mb-4 block">Sneak Peek</span>
              <h3 className="text-5xl md:text-6xl font-bold text-white tracking-wide">A Day in the Life</h3>
              <p className="text-pearl/80 text-lg max-w-2xl mx-auto mt-6">
                While every itinerary is unique, here is a glimpse into the effortless rhythm of a typical day aboard our Signature Collection.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto z-10">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-champagne/0 via-champagne/30 to-champagne/0 -translate-x-1/2" />

              <div className="space-y-12">
                {TIMELINE.map((item, idx) => {
                  const isEven = idx % 2 === 0
                  return (
                    <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-champagne border-4 border-twilight-deep shadow-[0_0_15px_rgba(201,164,92,0.5)] -translate-x-1/2 mt-6 md:mt-0 z-10" />

                      {/* Content Card */}
                      <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                        <div className="group bg-white/5 border border-white/10 hover:border-champagne/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:shadow-champagne/5">
                          <div className="text-champagne font-bold tracking-wider text-sm mb-2">
                            {item.time}
                          </div>
                          <h4 className="text-2xl font-semibold mb-3 text-white">
                            {item.title}
                          </h4>
                          <p className="text-pearl/70 leading-relaxed text-sm md:text-base">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </ScrollAnimation>

      </div>
    </section>
  )
}

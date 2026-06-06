export interface Experience {
  slug: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  image: string
  highlights: string[]
  included: string[]
  duration: string
}

export const experiences: Experience[] = [
  {
    slug: "signature",
    title: "Signature Collection",
    subtitle: "The ultimate expression of luxury at sea.",
    description: "Multi-day voyages with curated experiences, guided activities, and moments designed to inspire. Perfect for those seeking a complete luxury escape.",
    fullDescription: "Our Signature Collection represents the pinnacle of maritime luxury. We have curated exceptional multi-day itineraries that blend adventure with unparalleled relaxation. From secluded anchorages where you can dive into crystal-clear waters, to private dinners under the stars crafted by your personal chef, every detail is meticulously planned to create an unforgettable journey. Experience the world's most beautiful coastlines from the vantage point of your own floating oasis.",
    image: "/images/hero.jpg",
    highlights: [
      "Expertly curated multi-day itineraries",
      "Private chef and full crew service",
      "Access to secluded bays and exclusive locations",
      "Premium water sports equipment and guided activities"
    ],
    included: [
      "Luxury accommodation on board",
      "Gourmet meals and premium beverages",
      "All port fees and fuel",
      "Personalized concierge service"
    ],
    duration: "3-7 Days"
  },
  {
    slug: "bespoke",
    title: "Bespoke Journeys",
    subtitle: "Your vision, perfectly executed.",
    description: "Fully customized private charters with bespoke itineraries crafted around your preferences. Your vision, our expertise.",
    fullDescription: "A Bespoke Journey is a blank canvas, ready to be painted with your desires. Whether you envision a high-energy celebration, an intimate family gathering, or a corporate retreat that leaves a lasting impression, our charter specialists will work closely with you to design every aspect of your voyage. From selecting the perfect vessel in our fleet to arranging exclusive onshore excursions and custom menus, your imagination is the only limit.",
    image: "/images/hero.jpg",
    highlights: [
      "100% customizable itineraries and routing",
      "Custom menus designed around your dietary preferences",
      "Special event planning (weddings, birthdays, corporate)",
      "Dedicated pre-charter concierge"
    ],
    included: [
      "Vessel and professional crew",
      "Customized catering and beverage packages",
      "Bespoke onshore activities",
      "Flexible embarkation/disembarkation times"
    ],
    duration: "Flexible (Hourly to Multi-Week)"
  },
  {
    slug: "wellness",
    title: "Wellness Retreats",
    subtitle: "Rejuvenate your mind, body, and spirit.",
    description: "Holistic experience-focused voyages featuring yoga, meditation, organic cuisine, and rejuvenation on the open sea.",
    fullDescription: "Escape the noise of daily life and find your center on the open water. Our Wellness Retreats are designed to restore your balance through a combination of holistic practices and the healing power of the ocean. Wake up to sunrise yoga on the deck, enjoy masterfully prepared organic cuisine, and unwind with therapeutic massage treatments. It's a sanctuary at sea, dedicated entirely to your well-being.",
    image: "/images/hero.jpg",
    highlights: [
      "Onboard yoga and meditation instructors",
      "Curated organic and plant-based menus",
      "Spa and massage therapy sessions",
      "Digital detox environment"
    ],
    included: [
      "All wellness classes and activities",
      "Specialized nutritional catering",
      "Premium spa products and amenities",
      "Mindfulness workshops"
    ],
    duration: "1-4 Days"
  }
]

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((exp) => exp.slug === slug)
}

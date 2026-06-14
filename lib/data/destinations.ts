export interface Destination {
  slug: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  image: string
  bestTimeToVisit: string
  highlights: string[]
}

export const destinations: Destination[] = [
  {
    slug: "great-barrier-reef",
    title: "Great Barrier Reef",
    subtitle: "A natural wonder of the world.",
    description: "Luxury Yacht Charters in the Great Barrier Reef",
    fullDescription: "Immerse yourself in the vibrant underwater world of the Great Barrier Reef. Charter a luxury yacht to explore secluded coral cays, pristine white-sand beaches, and exclusive island resorts. Whether you're a passionate diver looking for world-class sites or simply seeking the ultimate tropical escape, the Reef offers an unparalleled backdrop for your yachting adventure. Experience the magic of the Whitsundays and beyond in absolute comfort.",
    image: "/images/hero.jpg",
    bestTimeToVisit: "May to October (Dry Season)",
    highlights: [
      "World-class snorkeling and diving",
      "Secluded beaches like Whitehaven Beach",
      "Exclusive access to luxury island resorts",
      "Spectacular scenic flights over Heart Reef"
    ]
  },
  {
    slug: "sydney-harbour",
    title: "Sydney Harbour",
    subtitle: "The world's most beautiful natural harbor.",
    description: "Iconic Luxury Charters on Sydney Harbour",
    fullDescription: "Experience the iconic Sydney skyline from the best vantage point possible: the water. A Sydney Harbour charter combines cosmopolitan luxury with stunning natural beauty. Cruise past the Sydney Opera House and the Harbour Bridge, anchor in secluded coves in the Northern Beaches, and enjoy world-class dining on board. It's the perfect setting for corporate events, romantic evenings, or celebrating special milestones.",
    image: "/images/hero.jpg",
    bestTimeToVisit: "September to April (Spring/Summer)",
    highlights: [
      "Iconic views of the Opera House and Harbour Bridge",
      "Access to secluded beaches and national parks",
      "Vibrant waterfront dining options",
      "Spectacular New Year's Eve fireworks charters"
    ]
  },
  {
    slug: "new-zealand",
    title: "New Zealand",
    subtitle: "Untamed beauty and dramatic landscapes.",
    description: "Breathtaking Fiords & Coastal Adventures",
    fullDescription: "Discover the rugged, awe-inspiring coastlines of New Zealand. From the sheltered waters of the Bay of Islands to the dramatic, towering peaks of Milford Sound, a yacht charter here is an adventure into the wild. Enjoy world-class fishing, encounter diverse marine life, and explore pristine fiords that are largely inaccessible by land. It's a destination for the truly adventurous luxury traveler.",
    image: "/images/hero.jpg",
    bestTimeToVisit: "December to March (Summer)",
    highlights: [
      "Exploring the dramatic Fiordland National Park",
      "World-class sport fishing and diving",
      "Sailing the picturesque Bay of Islands",
      "Encountering diverse marine wildlife"
    ]
  },
  {
    slug: "pacific-islands",
    title: "Pacific Islands",
    subtitle: "The ultimate tropical escape.",
    description: "Tropical Paradise Escapes",
    fullDescription: "Escape to the idyllic archipelagos of the South Pacific. Fiji, Vanuatu, and Tahiti offer crystal-clear lagoons, vibrant coral reefs, and a warm, welcoming culture. A yacht charter in the Pacific Islands is the epitome of relaxation. Spend your days paddleboarding in calm lagoons, exploring hidden waterfalls ashore, and enjoying traditional feasts prepared by your crew or local communities.",
    image: "/images/hero.jpg",
    bestTimeToVisit: "May to October (Dry Season)",
    highlights: [
      "Pristine, crystal-clear lagoons",
      "Rich Polynesian and Melanesian cultures",
      "Secluded anchorages far from crowds",
      "Incredible tropical snorkeling"
    ]
  },
  {
    slug: "tasmania",
    title: "Tasmania",
    subtitle: "Wild, rugged, and refined.",
    description: "Wild & Rugged Coastal Journeys",
    fullDescription: "Tasmania offers a yachting experience unlike any other in Australia. Navigate dramatic sea cliffs, explore isolated archipelagos, and discover a coastline rich in history and raw natural beauty. Combine your seafaring adventure with Tasmania's world-renowned culinary scene, visiting coastal wineries and enjoying fresh, locally sourced seafood prepared directly on board.",
    image: "/images/hero.jpg",
    bestTimeToVisit: "December to February (Summer)",
    highlights: [
      "Dramatic coastal scenery and sea cliffs",
      "World-class fresh seafood and culinary experiences",
      "Rich maritime history",
      "Exploring the rugged South West coast"
    ]
  },
  {
    slug: "hunter-valley",
    title: "Hunter Valley",
    subtitle: "Gourmet delights by the water.",
    description: "Gourmet Wine & Waterfront Getaways",
    fullDescription: "Combine the luxury of a private yacht with the culinary delights of Australia's oldest wine region. Cruise the serene waterways leading to the Hunter Valley, anchoring to enjoy private wine tastings and gourmet meals sourced from local producers. It's a sophisticated, relaxing escape perfect for food and wine enthusiasts looking for a unique perspective on this famous region.",
    image: "/images/hero.jpg",
    bestTimeToVisit: "March to May (Autumn harvest) or September to November (Spring)",
    highlights: [
      "Private, curated wine tastings",
      "Gourmet dining with local produce",
      "Serene river cruising",
      "Relaxing, scenic waterfront views"
    ]
  }
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((dest) => dest.slug === slug)
}

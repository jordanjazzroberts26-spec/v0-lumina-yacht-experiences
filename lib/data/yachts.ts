export interface Yacht {
  slug: string;
  name: string;
  capacity: string;
  price: string;
  image: string;
  length: number; // in feet
  cabins: number;
  speed: number; // in knots
  type: string; // 'Motor Yacht', 'Catamaran', 'Sailing Yacht'
  pricePerHour: number; // For sorting
  amenities: string[];
}

export const fleetData: Yacht[] = [
  {
    slug: "lumina",
    name: "LUMINA",
    capacity: "45 guests",
    price: "$4,200–$4,900 per hour",
    image: "/images/fleet/yacht-lumina.png",
    length: 120,
    cabins: 4,
    speed: 22,
    type: "Motor Yacht",
    pricePerHour: 4200,
    amenities: ["Jacuzzi", "Water Toys", "Full Bar", "Chef's Kitchen"]
  },
  {
    slug: "infinity",
    name: "INFINITY",
    capacity: "95 guests",
    price: "$5,500–$6,200 per hour",
    image: "/images/fleet/yacht-infinity.png",
    length: 145,
    cabins: 6,
    speed: 18,
    type: "Motor Yacht",
    pricePerHour: 5500,
    amenities: ["Helipad", "Beach Club", "Cinema", "Gym"]
  },
  {
    slug: "aurora",
    name: "AURORA",
    capacity: "85 guests",
    price: "$3,200–$3,800 per hour",
    image: "/images/fleet/yacht-aurora.png",
    length: 110,
    cabins: 5,
    speed: 24,
    type: "Motor Yacht",
    pricePerHour: 3200,
    amenities: ["Sun Deck", "Jacuzzi", "Tender Garage"]
  },
  {
    slug: "titan",
    name: "TITAN",
    capacity: "120 guests",
    price: "$4,500–$5,200 per hour",
    image: "/images/fleet/yacht-titan.png",
    length: 165,
    cabins: 7,
    speed: 20,
    type: "Motor Yacht",
    pricePerHour: 4500,
    amenities: ["Beach Club", "Spa", "Elevator", "Water Slide"]
  },
  {
    slug: "serenity",
    name: "SERENITY",
    capacity: "65 guests",
    price: "$2,800–$3,400 per hour",
    image: "/images/fleet/yacht-serenity.png",
    length: 95,
    cabins: 3,
    speed: 26,
    type: "Motor Yacht",
    pricePerHour: 2800,
    amenities: ["Swim Platform", "Alfresco Dining", "Stabilizers"]
  },
  {
    slug: "velora",
    name: "VELORA",
    capacity: "55 guests",
    price: "$2,400–$2,900 per hour",
    image: "/images/fleet/yacht-velora.png",
    length: 88,
    cabins: 4,
    speed: 32,
    type: "Motor Yacht",
    pricePerHour: 2400,
    amenities: ["Sports Deck", "Shallow Draft", "Premium Sound"]
  },
  {
    slug: "phoenix",
    name: "PHOENIX",
    capacity: "110 guests",
    price: "$3,900–$4,600 per hour",
    image: "/images/fleet/yacht-phoenix-v3.png",
    length: 135,
    cabins: 5,
    speed: 16,
    type: "Catamaran",
    pricePerHour: 3900,
    amenities: ["Expansive Deck", "Water Toys", "Multiple Bars"]
  },
  {
    slug: "ocean-pearl",
    name: "OCEAN PEARL",
    capacity: "75 guests",
    price: "$2,950–$3,500 per hour",
    image: "/images/fleet/yacht-ocean-pearl.jpg",
    length: 105,
    cabins: 4,
    speed: 19,
    type: "Motor Yacht",
    pricePerHour: 2950,
    amenities: ["Jacuzzi", "DJ Booth", "Underwater Lights"]
  },
  {
    slug: "black-diamond",
    name: "BLACK DIAMOND",
    capacity: "150 guests",
    price: "$5,800–$6,500 per hour",
    image: "/images/fleet/yacht-black-diamond-v2.png",
    length: 180,
    cabins: 8,
    speed: 21,
    type: "Motor Yacht",
    pricePerHour: 5800,
    amenities: ["Helipad", "Pool", "Cinema", "Spa", "Gym"]
  },
  {
    slug: "horizon",
    name: "HORIZON",
    capacity: "100 guests",
    price: "$3,600–$4,300 per hour",
    image: "/images/fleet/yacht-horizon-v3.png",
    length: 125,
    cabins: 5,
    speed: 15,
    type: "Sailing Yacht",
    pricePerHour: 3600,
    amenities: ["Classic Rigging", "Teak Decks", "Alfresco Lounge"]
  }
];

// Reusable function to get exactly the 4 featured yachts for the homepage
export function getFeaturedYachts(): Yacht[] {
  return fleetData.slice(0, 4);
}

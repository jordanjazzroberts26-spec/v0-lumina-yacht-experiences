import type { Metadata } from "next"
import { BespokeClient } from "./bespoke-client"

export const metadata: Metadata = {
  title: "Bespoke Journeys | Lumina Yacht Experiences",
  description: "Craft a completely tailored, one-of-a-kind luxury yacht journey. From destinations to culinary experiences, your imagination is the only limit.",
}

export default function BespokePage() {
  return <BespokeClient />
}

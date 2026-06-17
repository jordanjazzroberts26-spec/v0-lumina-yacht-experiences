import type { Metadata } from "next"
import { SignatureClient } from "./signature-client"

export const metadata: Metadata = {
  title: "Signature Collection | Lumina Yacht Experiences",
  description: "Experience the pinnacle of nautical luxury with our Signature Collection.",
}

export default function SignatureCollectionPage() {
  return <SignatureClient />
}

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const dynamic = 'force-dynamic';

export const viewport = {
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Lumina Yacht Experiences | Luxury Yacht Voyages',
  description: 'Escape the ordinary. Luxury yacht voyages curated for extraordinary experiences. Signature collections, bespoke journeys, and wellness retreats.',
  keywords: [
    'luxury yacht charter',
    'bespoke yacht journeys',
    'wellness retreats on water',
    'yacht vacation',
    'sailing holidays',
    'private yacht rental',
    'Lumina Yacht Experiences',
  ],
  authors: [{ name: 'Lumina Yacht Experiences' }],
  creator: 'Lumina',
  publisher: 'Lumina',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luminayachtexperiences.com',
    siteName: 'Lumina Yacht Experiences',
    title: 'Lumina Yacht Experiences | Luxury Yacht Voyages',
    description: 'Escape the ordinary. Luxury yacht voyages curated for extraordinary experiences.',
    images: [
      {
        url: '/images/og-snapshot.png',
        width: 1200,
        height: 632,
        alt: 'Lumina Yacht Experiences | Luxury Yacht Voyages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Yacht Experiences | Luxury Yacht Voyages',
    description: 'Escape the ordinary. Luxury yacht voyages curated for extraordinary experiences.',
    images: ['/images/og-snapshot.png'],
    creator: '@LuminaYachts',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Luxury Yacht Charter & Experiences",
  "provider": {
    "@type": "Organization",
    "name": "Lumina Yacht Experiences",
    "url": "https://luminayachtexperiences.com",
    "logo": "https://luminayachtexperiences.com/favicon.png",
    "sameAs": [
      "https://www.instagram.com/luminayachts",
      "https://www.facebook.com/luminayachts"
    ]
  },
  "name": "Lumina Yacht Voyages",
  "description": "Bespoke luxury yacht voyages tailored for extraordinary experiences, featuring signature collections, bespoke journeys, and wellness retreats.",
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Yacht Experiences Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Signature Collection"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bespoke Journeys"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wellness Retreats"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}

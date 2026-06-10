import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL('https://luminayachtexperiences.com'),
  title: {
    default: 'Lumina Yacht Experiences | Luxury Yacht Voyages',
    template: '%s | Lumina Yacht Experiences',
  },
  description: 'Escape the ordinary. Luxury yacht voyages curated for extraordinary experiences. Signature collections, bespoke journeys, and wellness retreats.',
  keywords: ['luxury yacht charter', 'bespoke yacht journeys', 'wellness retreats on water', 'yacht vacation', 'sailing holidays', 'private yacht rental'],
  authors: [{ name: 'Lumina Yacht Experiences' }],
  creator: 'Lumina',
  publisher: 'Lumina',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Lumina Yacht Experiences',
    title: 'Lumina Yacht Experiences | Luxury Yacht Voyages',
    description: 'Escape the ordinary. Luxury yacht voyages curated for extraordinary experiences.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Yacht Experiences | Luxury Yacht Voyages',
    description: 'Escape the ordinary. Luxury yacht voyages curated for extraordinary experiences.',
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}

# Implementation Plan - Website Metadata & Social Preview

We will implement a complete, robust metadata configuration for **Lumina Yacht Experiences**, including Open Graph, Twitter Cards, robots, alternates, and JSON-LD Structured Data. We will also replace the existing dynamic preview image generators with a live static snapshot (screenshot) of the website.

---

## Proposed Changes

### 1. Delete Dynamic Preview Generators
We will delete the following dynamic files so that they do not conflict with the static preview image metadata:
- [DELETE] [opengraph-image.tsx](file:///Users/jordanjazzroberts/v0-lumina-yacht-experiences-3/app/opengraph-image.tsx)
- [DELETE] [twitter-image.tsx](file:///Users/jordanjazzroberts/v0-lumina-yacht-experiences-3/app/twitter-image.tsx)

### 2. Capture Website Snapshot
We will:
- Spin up the local development server in the background using `npm run dev`.
- Launch a browser subagent to visit `http://localhost:3000` (or the local dev URL).
- Wait for all page load transitions and animations to complete.
- Capture a high-resolution screenshot of the landing page hero/above-the-fold layout.
- Crop/resize the screenshot to the standard Open Graph dimensions (1200x630 pixels).
- Save this image as a static file:
  - [NEW] [og-snapshot.png](file:///Users/jordanjazzroberts/v0-lumina-yacht-experiences-3/public/images/og-snapshot.png)

### 3. Update Root Layout with Robust Metadata
We will modify [layout.tsx](file:///Users/jordanjazzroberts/v0-lumina-yacht-experiences-3/app/layout.tsx) to:
- Export a highly detailed `metadata` object supporting Open Graph, Twitter Cards, Canonical links, and search indexing robots.
- Export a `viewport` object setting the correct responsive options and the brand's primary color (`#0A1628` - Midnight Navy) as the theme color.
- Embed a JSON-LD Structured Data script representing the yacht experiences as a schema `Service` provided by a `Organization` to boost search engine indexing and display rich snippets in search results.

Here is the proposed configuration additions/changes for `app/layout.tsx`:

```typescript
export const viewport = {
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://luminayachtexperiences.com'),
  title: {
    default: 'Lumina Yacht Experiences | Luxury Yacht Voyages',
    template: '%s | Lumina Yacht Experiences',
  },
  description: 'Escape the ordinary. Luxury yacht voyages curated for extraordinary experiences. Signature collections, bespoke journeys, and wellness retreats.',
  keywords: [
    'luxury yacht charter',
    'bespoke yacht journeys',
    'wellness retreats on water',
    'yacht vacation',
    'sailing holidays',
    'private yacht rental',
    'Lumina Yacht Experiences'
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
        height: 630,
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
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}
```

And the JSON-LD schema to inject into the layout body:
```html
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
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
    })
  }}
/>
```

---

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure the project compiles without errors and the TypeScript types for Next.js metadata and script injection are correct.

### Manual Verification
- Start the development server (`npm run dev`) and inspect the generated `<head>` element to verify:
  - Canonical link tags are present and accurate.
  - Viewport and theme-color meta tags are added.
  - Open Graph tags (`og:title`, `og:description`, `og:image`, etc.) are rendered.
  - Twitter Card tags are rendered.
  - The JSON-LD schema is correctly injected in the layout body and holds valid JSON syntax.
- View `/images/og-snapshot.png` to confirm it is a clean, visually appealing preview of the website.

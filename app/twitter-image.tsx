import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const alt = 'Lumina Yacht Experiences | Luxury Yacht Voyages'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Read the local hero image to use as the background
  const heroImageBuffer = readFileSync(path.join(process.cwd(), 'public/images/hero.jpg'))
  const heroImageData = heroImageBuffer.toString('base64')
  const heroImageSrc = `data:image/jpeg;base64,${heroImageData}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#1a3636', // Harbor deep fallback
        }}
      >
        {/* Full bleed background image */}
        <img
          src={heroImageSrc}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          alt="hero background"
        />
        
        {/* Dark overlay for readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(26, 54, 54, 0.55)', // Harbor deep semi-transparent overlay
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            color: '#f7f5f2', // Ivory
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: 90,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              margin: '0 0 10px 0',
              fontFamily: 'sans-serif',
              textShadow: '0 4px 32px rgba(0,0,0,0.6)',
            }}
          >
            LUMINA
          </h1>
          <p
            style={{
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              margin: '0 0 50px 0',
              color: '#c9a45c', // Champagne
              textShadow: '0 2px 16px rgba(0,0,0,0.6)',
            }}
          >
            Yacht Experiences
          </p>
          <div
            style={{
              width: '100px',
              height: '3px',
              backgroundColor: '#c9a45c',
              marginBottom: '50px',
            }}
          />
          <p
            style={{
              fontSize: 38,
              fontWeight: 400,
              margin: 0,
              maxWidth: '850px',
              lineHeight: 1.5,
              textShadow: '0 2px 16px rgba(0,0,0,0.6)',
            }}
          >
            Escape the ordinary with bespoke luxury yacht voyages tailored for extraordinary experiences.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

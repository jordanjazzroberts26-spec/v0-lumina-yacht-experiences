# Lumina Yacht Experiences - Design Tokens

## Color Palette

Based on luxury nautical brand identity and premium experience positioning:

### Primary Colors
- **Midnight Navy** `#0A1628` - Deep ocean, primary background, text
- **Cream/Off-White** `#F5F3F0` - Premium background, card surfaces
- **Gold Accent** `#D4AF37` - Luxury touch, highlights, CTAs (refined, subtle)

### Secondary Colors
- **Soft Gray** `#8B8B8B` - Secondary text, borders, subtle elements
- **Charcoal** `#2A2A2A` - Dark text on light backgrounds

## Semantic Design Tokens

```css
/* Light Mode */
--background: #F5F3F0
--foreground: #0A1628
--card: #FFFFFF
--card-foreground: #0A1628
--primary: #D4AF37
--primary-foreground: #0A1628
--secondary: #8B8B8B
--secondary-foreground: #F5F3F0
--accent: #D4AF37
--muted: #8B8B8B
--muted-foreground: #F5F3F0
--border: #E8E6E1
--input: #FFFFFF
--ring: #D4AF37
--radius: 0.5rem
```

## Typography

### Fonts
- **Headings**: Geist (sans-serif) - Bold, clean, modern luxury
- **Body**: Geist (sans-serif) - Consistent, professional
- **Weights**: Regular (400), Medium (500), Bold (700)

### Scale
- H1: 3.5rem (56px) - Hero headlines
- H2: 2.5rem (40px) - Section titles
- H3: 1.75rem (28px) - Subsections
- Body Large: 1.125rem (18px) - Featured content
- Body: 1rem (16px) - Standard text
- Body Small: 0.875rem (14px) - Labels, captions
- Micro: 0.75rem (12px) - Fine print

### Line Heights
- Headings: 1.2
- Body: 1.6
- Captions: 1.4

## Layout

### Spacing Scale (Tailwind-based)
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)
- 3xl: 4rem (64px)

### Grid & Breakpoints
- Mobile: 320px+
- Tablet: 768px (md)
- Desktop: 1024px (lg)
- Wide: 1440px (xl)

## Visual Principles

1. **Minimalist Elegance** - Clean spacing, breathing room, refined simplicity
2. **Imagery-Driven** - 80% focus on lifestyle photography and guest moments
3. **Subtle Motion** - Smooth scroll animations, fade-ins on view, gentle transitions
4. **Full Width** - No max-width constraints, edge-to-edge design
5. **High Contrast** - Navy/Cream primary relationship with gold accents for CTAs
6. **Refined Typography** - Generous line-height, balanced hierarchy, elegant serif serif for luxury feel combined with modern sans

## Component States

- **CTA Buttons**: Gold background with navy text, smooth hover scale/opacity
- **Cards**: Cream/white with subtle shadows, navy text
- **Hover States**: Slight lift (shadow), opacity change, smooth 300ms transitions
- **Active States**: Gold accent indicator
- **Disabled States**: Muted gray with reduced opacity

## Animation Timing

- Fast transitions: 200ms (hover states)
- Standard transitions: 300ms (buttons, fades)
- Scroll animations: 600ms (stagger for sequences)
- Page transitions: Smooth scroll to section behavior

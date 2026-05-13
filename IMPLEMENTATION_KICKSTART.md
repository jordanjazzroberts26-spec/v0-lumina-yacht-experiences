# IMPLEMENTATION_KICKSTART.md - Lumina Yacht Experiences

## Project Overview

Building a luxury yacht experiences landing page for **Lumina Yacht Experiences** using the **Classic Vertical** layout with minimalist aesthetics. Frontend-only implementation with scroll animations, AI-generated imagery, modal CTAs, and a dedicated contact page.

**Key Constraints:**
- Classic Vertical layout (primary version)
- Full-width design (no max-width)
- Frontend-only (no backend/database)
- Geist font throughout
- 3+ CTA placements across page
- Scroll animations on all sections
- Modal for "Craft Your Private Experience"
- Separate `/contact` page for "Contact Captain Elena"
- Smooth scroll-to-top functionality

---

## Design System

### Color Palette (5 Colors)
| Token | Hex | Role |
|-------|-----|------|
| **Midnight Navy** | `#0A1628` | Primary background, main text |
| **Cream/Off-White** | `#F5F3F0` | Secondary background, cards |
| **Gold Accent** | `#D4AF37` | CTAs, highlights, interactive elements |
| **Soft Gray** | `#8B8B8B` | Secondary text, borders, muted elements |
| **Charcoal** | `#2A2A2A` | Dark text on light backgrounds |

### Semantic Design Tokens (CSS Variables)
```css
--background: #F5F3F0           /* Cream - primary page background */
--foreground: #0A1628           /* Navy - primary text */
--card: #FFFFFF                 /* White - card surfaces */
--card-foreground: #0A1628      /* Navy - card text */
--primary: #D4AF37              /* Gold - CTA buttons */
--primary-foreground: #0A1628   /* Navy - CTA text */
--secondary: #8B8B8B            /* Gray - secondary text */
--secondary-foreground: #F5F3F0 /* Cream - secondary backgrounds */
--accent: #D4AF37               /* Gold - accents */
--muted: #8B8B8B                /* Gray - muted elements */
--muted-foreground: #0A1628     /* Navy - muted text */
--border: #E8E6E1               /* Light gray - borders */
--radius: 0.5rem                /* 8px - border radius */
```

### Typography
- **Font Family**: Geist (sans-serif) - via `next/font/google`
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Line Heights**: 1.2 (headings), 1.6 (body), 1.4 (captions)
- **Hierarchy**:
  - H1: 3.5rem (56px) - hero headlines
  - H2: 2.5rem (40px) - section titles
  - H3: 1.75rem (28px) - subsections
  - Body: 1rem (16px) - standard text
  - Small: 0.875rem (14px) - labels, captions

### Layout Principles
- Full-width (no max-width constraints)
- Mobile-first responsive design
- Flexbox for primary layouts
- Generous whitespace and breathing room
- 80% imagery focus throughout

---

## Landing Page Structure - Classic Vertical

### 1. Header / Navigation
**Component**: `navbar.tsx`
- Fixed sticky position
- Logo left side
- Navigation links: Programs, About, The Crew, FAQ
- Primary CTA right: "Craft Your Private Experience" (gold button)
- Mobile hamburger menu
- Background: Navy on scroll, transparent on hero

### 2. Hero Section
**Component**: `hero.tsx`
- Full-width, full-viewport hero image (AI generated)
- Overlay: Navy/Cream gradient (subtle)
- Headline: "Escape the Ordinary"
- Subheading: "Luxury yacht voyages curated for extraordinary experiences"
- Primary CTA: "Explore Voyages" button (gold, navy text)
- Scroll indicator animation (fade in/out)
- Parallax scroll effect on background
- Scroll animation: fade-in on load

**CTA #1 (Hero)**

### 3. Programs Section
**Component**: `programs.tsx`
- Section heading: "Three Curated Experiences"
- Three program cards in 3-column grid:
  1. **Signature Collection** - Multi-day voyages with curated experiences
  2. **Bespoke Journeys** - Fully customized private charters
  3. **Wellness Retreats** - Holistic experience-focused voyages
- Each card: image, title, description, "Discover More" link
- Scroll animation: staggered fade-in + slide-up (200ms between each)
- Responsive: 1-column mobile, 3-column desktop

### 4. Captain Elena Section
**Component**: `captain-elena.tsx`
- Two-column layout: large portrait left, text right
- Portrait image (AI generated - Captain Elena Voss)
- Heading: "Meet Your Captain"
- Bio text and experience highlights
- Personal philosophy quote
- Secondary CTA: "Contact Captain Elena" (links to `/contact` page)
- Parallax scroll effect on image
- Scroll animation: fade-in + slide-left

**CTA #2 (Contact Elena)**

### 5. Real Moments Gallery
**Component**: `gallery.tsx`
- Section heading: "Real Moments from Our Guests"
- 6-image masonry grid layout (AI generated images)
- Images: sunset dinners, dancing, champagne toasts, wellness, celebrations, ocean views
- Lazy loading with fade-in animations
- Hover effects: subtle zoom (1.05x), text overlay opacity change
- Responsive: 2-column mobile, 3-column tablet, 4-column desktop
- Scroll animation: staggered fade-in on each image

### 6. Testimonials Section
**Component**: `testimonials.tsx`
- Section heading: "What Our Guests Say"
- 3 featured testimonials:
  - Guest photo (AI generated)
  - Name, origin location
  - Quote/testimonial
  - 5-star rating
- Card layout with subtle shadows (Navy text on Cream)
- Scroll animation: staggered fade-in + slide-up
- Responsive: stack mobile, 3-column desktop

### 7. Stats & Metrics Section
**Component**: `stats.tsx`
- Heading: "By The Numbers"
- 4 stats displayed:
  - 87 Successful Voyages
  - 98% Would Return Again
  - 12+ Global Destinations
  - 500+ Satisfied Guests
- Dark background (Navy), Gold text for emphasis
- Animated counters (count up on scroll into view)
- Scroll animation: counter animation + fade-in
- 4-column grid desktop, 2-column mobile

### 8. Featured In / Press Section
**Component**: `featured-in.tsx`
- Heading: "Recognized by Leading Publications"
- 5 publication logos/names (placeholder text):
  - Robb Report
  - Travel + Leisure
  - Condé Nast Traveler
  - Forbes
  - Yacht Charter World
- Horizontal scroll layout on mobile, grid on desktop
- Opacity hover effect
- Subtle scroll animation

### 9. FAQ Accordion Section
**Component**: `faq.tsx`
- Section heading: "Frequently Asked Questions"
- 6 accordion items:
  1. How do I book a voyage?
  2. What's included in each program?
  3. What's the best time to sail?
  4. How customizable are the experiences?
  5. What's your group size policy?
  6. What's your cancellation policy?
- Smooth accordion animations (height transition)
- Gold indicator for active accordion
- Secondary CTA link: "Speak with Elena" (gold button) at bottom

**CTA #3 (FAQ Section)**

### 10. Final CTA Section
**Component**: `final-cta.tsx`
- Heading: "Craft Your Private Experience"
- Brief intro text
- Primary CTA: "Plan My Voyage" (large gold button)
- Opens modal overlay
- Background: subtle gradient Navy to Cream
- Scroll animation: fade-in + slide-up

**CTA #4 (Final)**

### 11. Modal Component
**Component**: `experience-modal.tsx`
- Triggered by all "Craft Your Private Experience" CTAs
- Dark overlay with blur backdrop
- Form fields:
  - Name (text input)
  - Email (email input)
  - Preferred Dates (text input)
  - Number of Guests (number input)
  - Preferred Program (dropdown: Signature, Bespoke, Wellness)
  - Special Requests (textarea)
- "Plan My Voyage" button
- Success message on submit (no backend processing)
- Close button (X) top-right
- Smooth fade-in/fade-out animations
- ESC key to close

### 12. Footer
**Component**: `footer.tsx`
- Full-width background: Navy
- Content sections:
  - **About**: Brief company description
  - **Quick Links**: Programs, About, FAQ, Contact
  - **Follow Us**: Instagram, Facebook, LinkedIn (placeholder links)
  - **Contact**: Email, phone (placeholder)
  - Copyright and scroll-to-top button
- Scroll-to-top button (smooth scroll animation)
- Responsive: stack mobile, 4-column desktop

### 13. Contact Page
**Route**: `app/contact/page.tsx`
- Accessible from "Contact Captain Elena" CTA
- Header & Footer: same as landing page
- Page title: "Contact Captain Elena"
- Two-section layout:
  - Contact information (email, phone, office hours)
  - Contact form: Name, Email, Phone, Subject, Message
- "Send Message" button (gold)
- Success message on submit (no backend)
- "Back to Experiences" link (smooth scroll to top behavior)
- Consistent styling with landing page

---

## CTA Button Placement Summary

**Minimum 4 CTAs across page (user requested 3+):**

| # | Location | CTA Text | Behavior |
|---|----------|----------|----------|
| 1 | **Header (sticky)** | "Craft Your Private Experience" | Opens modal |
| 2 | **Hero Section** | "Explore Voyages" | Opens modal |
| 3 | **Captain Elena Section** | "Contact Captain Elena" | Links to `/contact` |
| 4 | **FAQ Section** | "Speak with Elena" | Opens modal |
| 5 | **Final CTA Section** | "Plan My Voyage" | Opens modal |

---

## Image Generation Requirements

**Total Images**: 12 AI-generated

### Hero & Portraits
1. **Hero Background** - "Luxury yacht at golden hour sunset, crystal clear ocean, premium vessel, elegant composition, cinematic 8k"
2. **Captain Elena Portrait** - "Professional 46-year-old woman, sun-kissed skin, crisp white captain's shirt, standing on luxury yacht deck at golden hour, confident natural smile, warm cinematic lighting, 8k"

### Real Moments Gallery (6 images)
3. **Sunset Dinner** - "Elegant guests dining on yacht deck at sunset, candlelit table, ocean background, luxury experience"
4. **Dancing** - "Couple dancing on yacht deck at twilight, elegant atmosphere, music and celebration"
5. **Champagne Toast** - "Group toasting with champagne at golden hour on yacht deck, joy and celebration, ocean horizon"
6. **Wellness Moment** - "Yoga or meditation on yacht bow at sunrise, serene ocean, wellness experience"
7. **Chef Preparing Food** - "Private chef moment on yacht kitchen/deck, luxury culinary experience"
8. **Friends Laughing** - "Diverse group of guests enjoying themselves on yacht, genuine joy, premium setting"

### Testimonial Photos (3 images)
9. **Couple Testimonial** - "Sophisticated couple, 50s-60s, Mediterranean-style elegance, warm lighting"
10. **Professional Woman** - "Elegant woman, 30s-40s, confident smile, premium setting"
11. **Distinguished Gentleman** - "Refined man, 60s+, warm demeanor, luxury backdrop"

---

## Animation Specifications

### Scroll Animations (Applied to all sections)
- **Fade In**: Opacity 0→1, duration 600ms
- **Fade Up**: Opacity 0→1, Y: 30px→0, duration 600ms
- **Fade In Staggered**: Multiple elements with 200ms delay between each
- **Scale In**: Scale 0.95→1, opacity 0→1, duration 600ms
- **Parallax Effect**: Background image Y position tied to scroll (subtle, -50% range)
- **Counter Animation**: Number counts up from 0 to target on scroll into view, duration 2000ms

### Hover States
- **Buttons**: Background color shift, slight shadow lift, 300ms ease transition
- **Cards**: Shadow lift, subtle scale (1.02x), 300ms transition
- **Links**: Gold underline appears, 300ms transition
- **Images**: Zoom (1.05x), optional overlay text opacity change, 300ms transition

### Modal Animations
- **Fade In**: Backdrop and content fade in, 300ms ease-out
- **Fade Out**: Backdrop and content fade out, 200ms ease-in
- **Success Message**: Slide down, fade in, 400ms ease-out

### Page Transitions
- **Smooth Scroll**: All navigation scrolls smoothly (not instant)
- **Scroll to Top**: Smooth animated scroll to page top (footer button)
- **Section Scroll**: Fade between sections on scroll

---

## Responsive Design Strategy

### Breakpoints (Tailwind standard)
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Layout Adjustments
- Hero: Full viewport, center text on mobile
- Programs: 1-column mobile → 3-column desktop
- Gallery: 2-column mobile → 3-column tablet → 4-column desktop
- Stats: 2-column mobile → 4-column desktop
- Featured In: Horizontal scroll on mobile (preserved), grid on desktop
- Testimonials: Stack mobile, 3-column desktop
- Featured logos: Stack on mobile, horizontal scroll on tablet/desktop
- CTA Button: Minimum 48px height for touch targets

### Mobile Considerations
- Navigation: Hamburger menu on mobile
- Full-width sections: Edge-to-edge with padding
- Images: Optimized for mobile bandwidth
- Touch-friendly: All CTAs > 44px tappable area

---

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Geist (via `next/font/google`)
- **Animations**: CSS transitions + Framer Motion (optional, for scroll triggers)
- **Images**: AI-generated, optimized with `next/image`
- **Forms**: React hooks (no backend submission)
- **State**: React useState for modal/form management
- **Responsive**: Mobile-first Tailwind approach

---

## Implementation Phases

### Phase 1: Foundation (1-2 hours)
- [ ] Update `app/layout.tsx` with Geist font imports and metadata
- [ ] Update `app/globals.css` with design tokens
- [ ] Update `tailwind.config.ts` with semantic tokens
- [ ] Create `lib/animations.ts` for Framer Motion variants

### Phase 2: Components (2-3 hours)
- [ ] Create `components/navbar.tsx`
- [ ] Create `components/footer.tsx`
- [ ] Create `components/experience-modal.tsx`
- [ ] Create `components/cta-button.tsx`

### Phase 3: Page Sections (4-5 hours)
- [ ] Create `components/hero.tsx`
- [ ] Create `components/programs.tsx`
- [ ] Create `components/captain-elena.tsx`
- [ ] Create `components/gallery.tsx`
- [ ] Create `components/testimonials.tsx`
- [ ] Create `components/stats.tsx`
- [ ] Create `components/featured-in.tsx`
- [ ] Create `components/faq.tsx`
- [ ] Create `components/final-cta.tsx`

### Phase 4: Image Generation (2-3 hours)
- [ ] Generate all 12 AI images using GenerateImage tool
- [ ] Save to `public/images/` directory
- [ ] Optimize and validate

### Phase 5: Page Assembly (1-2 hours)
- [ ] Create `app/page.tsx` (import and arrange all sections)
- [ ] Create `app/contact/page.tsx` (contact page)
- [ ] Wire up all modal triggers
- [ ] Wire up scroll behaviors

### Phase 6: Polish & Testing (1-2 hours)
- [ ] Responsive testing across devices
- [ ] Animation refinement and performance
- [ ] Accessibility checks (alt text, ARIA labels, keyboard nav)
- [ ] Cross-browser testing
- [ ] Remove debug logs

---

## Content Reference

### Headlines & Copy
- **Hero Headline**: "Escape the Ordinary"
- **Hero Subheading**: "Luxury yacht voyages curated for extraordinary experiences"
- **Tagline**: "It's never about the boat. It's about what happens when the right people, the right food, the right music, and the right ocean come together exactly the way you dreamed."

### Stats
- 87 Successful Voyages
- 98% Would Return Again
- 12+ Global Destinations
- 500+ Satisfied Guests

### Programs
1. **Signature Collection** - Multi-day voyages with curated experiences, guided activities
2. **Bespoke Journeys** - Fully customized private charters, bespoke itineraries
3. **Wellness Retreats** - Holistic experience-focused voyages, yoga, meditation

### Featured Publications (Placeholder)
- Robb Report
- Travel + Leisure
- Condé Nast Traveler
- Forbes Travel
- Yacht Charter World

---

## File Structure

```
app/
├── layout.tsx (updated with fonts, metadata)
├── globals.css (design tokens)
├── page.tsx (landing page)
├── contact/
│   └── page.tsx (contact page)

components/
├── navbar.tsx
├── footer.tsx
├── experience-modal.tsx
├── cta-button.tsx
├── hero.tsx
├── programs.tsx
├── captain-elena.tsx
├── gallery.tsx
├── testimonials.tsx
├── stats.tsx
├── featured-in.tsx
├── faq.tsx
└── final-cta.tsx

lib/
└── animations.ts (Framer Motion variants)

public/
└── images/
    ├── hero.jpg
    ├── captain-elena.jpg
    ├── gallery-1.jpg through gallery-6.jpg
    ├── testimonial-1.jpg through testimonial-3.jpg
    └── icons/ (if needed)

DESIGN_TOKENS.md
IMPLEMENTATION_KICKSTART.md
```

---

## Success Criteria

- [ ] Page fully responsive (320px - 1440px+)
- [ ] All 5 CTAs functional and visible
- [ ] Modal opens/closes smoothly
- [ ] Contact page accessible and styled consistently
- [ ] Success messages display correctly
- [ ] Scroll animations smooth (60fps)
- [ ] All images generated and loaded
- [ ] Smooth scroll behavior on all navigation
- [ ] Accessibility standards met (WCAG AA)
- [ ] Load time under 3 seconds
- [ ] Geist font applied throughout
- [ ] Design tokens consistently used
- [ ] Full-width layout maintained
- [ ] Mobile horizontal scroll preserved for featured logos

---

## Next Steps

1. ✅ Design tokens defined in DESIGN_TOKENS.md
2. ✅ Implementation plan created (this document)
3. ⏭️ **Ready to code**: Install dependencies and begin Phase 1 (Foundation)

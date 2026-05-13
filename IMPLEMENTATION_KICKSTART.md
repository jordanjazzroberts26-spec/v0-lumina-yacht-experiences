# Lumina Yacht Experiences — Implementation Kickstart

## Project Overview
A luxurious, elegant, single-page website for **Lumina Yacht Experiences** — a premium brand selling fully catered, personalised yacht experiences.

**Layout**: Classic Vertical (tall scrolling with generous breathing room)  
**Stack**: Next.js 16 (App Router) + Tailwind CSS + shadcn/ui + Framer Motion  
**Scope**: Frontend only (no backend/database)

---

## Design Token System

### Color Palette (5 Colors Total)

| Token | Hex | Usage |
|-------|-----|-------|
| `--deep-navy` | `#0A1A2F` | Primary background, text, headers |
| `--warm-gold` | `#D4AF77` | CTAs, accents, highlights, borders |
| `--crisp-white` | `#FAFAFA` | Backgrounds, text on dark |
| `--soft-teal` | `#A8DADC` | Subtle accents, hover states |
| `--muted-navy` | `#1A2A3F` | Card backgrounds, secondary surfaces |

### CSS Variables (globals.css)

```css
:root {
  --background: 210 33% 4%;        /* deep-navy #0A1A2F */
  --foreground: 60 10% 98%;        /* crisp-white #FAFAFA */
  
  --card: 213 33% 11%;             /* muted-navy #1A2A3F */
  --card-foreground: 60 10% 98%;
  
  --primary: 35 48% 65%;           /* warm-gold #D4AF77 */
  --primary-foreground: 210 33% 4%;
  
  --secondary: 180 35% 76%;        /* soft-teal #A8DADC */
  --secondary-foreground: 210 33% 4%;
  
  --accent: 35 48% 65%;            /* warm-gold */
  --accent-foreground: 210 33% 4%;
  
  --muted: 213 33% 15%;
  --muted-foreground: 60 10% 70%;
  
  --border: 35 48% 65%;            /* gold borders */
  --input: 213 33% 15%;
  --ring: 35 48% 65%;
  
  --radius: 0.5rem;
}
```

### Typography

| Element | Font | Weight | Tracking |
|---------|------|--------|----------|
| Headings (h1-h3) | Geist | 400-600 | tight |
| Body text | Geist | 400 | normal |
| CTAs | Geist | 500 | wide |
| Captions | Geist | 400 | normal |

**Font Setup**: Use `next/font/google` with Geist as primary sans-serif.

---

## Clarifications & Decisions Summary

| Item | Decision |
|------|----------|
| Layout | Classic Vertical (single version) |
| Images | AI-generated (Captain Elena, lifestyle, guests, masonry grid) |
| Form submission | Success message only (no backend) |
| Featured logos | Subtle minimalist placeholders with scroll animation |
| Guest testimonials | AI-generated photos |
| Primary CTA behavior | Opens modal overlay |
| "Contact Captain Elena" | Links to `/contact` page |
| Footer | Full-width, minimal |
| Font | Geist (sans-serif for all) |
| Animations | Framer Motion scroll animations throughout |
| Mobile carousels | Keep horizontal scroll |
| CTA frequency | Minimum 3 placements across the page |

---

## Page Structure & Components

### 1. Layout & Global
- `app/layout.tsx` — Root layout with Geist font, metadata
- `app/globals.css` — Design tokens, base styles
- `app/page.tsx` — Main landing page (imports all sections)
- `app/contact/page.tsx` — Contact Captain Elena page

### 2. Components Structure

```
components/
├── layout/
│   ├── navbar.tsx
│   └── footer.tsx
├── sections/
│   ├── hero.tsx
│   ├── signature-programs.tsx
│   ├── lumina-difference.tsx
│   ├── how-it-works.tsx
│   ├── social-proof.tsx
│   ├── real-moments.tsx
│   ├── meet-elena.tsx
│   ├── faq.tsx
│   └── final-cta.tsx
├── ui/
│   ├── cta-button.tsx
│   ├── experience-modal.tsx
│   ├── program-card.tsx
│   ├── testimonial-card.tsx
│   ├── stat-item.tsx
│   └── featured-logos.tsx
└── animations/
    └── motion-wrapper.tsx
```

### 3. Section Breakdown

| Section | Key Elements | CTA Present |
|---------|--------------|-------------|
| **Navbar** | Logo left, sticky CTA button right | Yes |
| **Hero** | Full-bleed image, headline, subheadline, CTA | Yes |
| **Signature Programs** | 3 tiered cards (Escape, Bespoke, Odyssey) | No |
| **Lumina Difference** | 4 elegant feature cards | No |
| **How It Works** | 4-step horizontal timeline | Yes |
| **Social Proof** | Stats row, featured logos, 3-4 testimonials | No |
| **Real Moments** | Masonry image grid with overlay quotes | No |
| **Meet Elena** | Large portrait, bio section | Yes (Contact Elena → /contact) |
| **FAQ** | Accordion with 8 questions | Yes (Speak with Elena) |
| **Final CTA** | Large section, mini brief form, modal trigger | Yes |
| **Footer** | Full-width, minimal, links | No |

**Total CTAs**: 6+ placements (Navbar, Hero, How It Works, Meet Elena, FAQ, Final CTA)

---

## Images to Generate

### Hero & Portrait
1. **Captain Elena Voss (Hero)** — "Professional portrait of a 46-year-old elegant woman with sun-kissed skin, wearing a crisp white captain's shirt unbuttoned at the collar, standing on a luxury yacht deck at golden hour, soft ocean background, confident natural smile, cinematic lighting, 8k"

2. **Captain Elena (Meet Section)** — Similar but different angle, warmer, more approachable

### Lifestyle Moments (Real Moments Grid)
3. Sunset dinner on yacht deck with elegant guests
4. Couple dancing on yacht at twilight
5. Private chef preparing food on yacht
6. Champagne toast at golden hour on deck
7. Wellness/yoga moment on yacht bow at sunrise
8. Group of friends laughing on luxury yacht

### Guest Testimonials (3-4)
9. Sophisticated couple, 50s, Mediterranean setting
10. Young professional woman, 30s, elegant
11. Distinguished gentleman, 60s, refined
12. Family group, multi-generational, joyful

---

## Animation Specifications

### Framer Motion Patterns

```tsx
// Fade up + gentle scale (primary)
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}
```

### Scroll Triggers
- Use `whileInView` with `viewport={{ once: true, amount: 0.3 }}`
- Apply to all major sections
- Featured logos: horizontal scroll animation (subtle, continuous)

---

## Modal Specification

**Experience Modal** (triggered by all "Craft Your Private Experience" CTAs):

Fields:
- Name (text input)
- Email (email input)
- Preferred Dates (text input)
- Number of Guests (number input, max 12)
- Interested Program (dropdown: Signature Escape, Bespoke Journey, Ultimate Odyssey)
- Special Requests (textarea)

On Submit: Display success message, close modal after 2s

---

## Implementation Order

### Phase 1: Foundation
1. Update `globals.css` with design tokens
2. Update `layout.tsx` with Geist font, metadata
3. Create `components/animations/motion-wrapper.tsx`
4. Create `components/ui/cta-button.tsx`

### Phase 2: Layout Components
5. Create `components/layout/navbar.tsx`
6. Create `components/layout/footer.tsx`

### Phase 3: Core Sections (Top to Bottom)
7. Create `components/sections/hero.tsx` + generate hero image
8. Create `components/sections/signature-programs.tsx`
9. Create `components/sections/lumina-difference.tsx`
10. Create `components/sections/how-it-works.tsx`

### Phase 4: Social Proof & Content
11. Create `components/sections/social-proof.tsx` + generate testimonial images
12. Create `components/sections/real-moments.tsx` + generate lifestyle images
13. Create `components/sections/meet-elena.tsx` + generate portrait

### Phase 5: Interactive & Forms
14. Create `components/ui/experience-modal.tsx`
15. Create `components/sections/faq.tsx`
16. Create `components/sections/final-cta.tsx`

### Phase 6: Additional Pages
17. Create `app/contact/page.tsx`

### Phase 7: Polish
18. Wire up all sections in `app/page.tsx`
19. Final responsive testing
20. Animation refinements

---

## Content Copy (Key Text)

### Taglines
- Main: "Your Yacht. Your Story. Your Moment."
- Sub: "It's never about the boat. It's about what happens when the right people, the right food, the right music, and the right ocean come together exactly the way you dreamed."

### CTA Text
- Primary: "Craft Your Private Experience"
- Secondary: "Speak Directly with Captain Elena"

### Stats
- 87 Voyages Completed
- 98% Referred or Returned
- 14 Countries
- 4.98/5 Experience Score

### Featured In
- Robb Report
- Forbes
- Yachts International
- Ocean Magazine

---

## Quality Checklist

- [ ] All CTAs trigger modal (except Contact Elena → /contact)
- [ ] Minimum 3 CTA placements visible
- [ ] All images generated and placed
- [ ] Scroll animations on all sections
- [ ] Mobile responsive (all breakpoints)
- [ ] Featured logos scroll animation
- [ ] Form shows success message
- [ ] Footer full-width
- [ ] Geist font applied throughout
- [ ] Design tokens consistently used
- [ ] Horizontal scroll maintained on mobile for carousels

---

## Notes

- No backend integration required
- No email functionality
- Form data is not persisted
- All images will be AI-generated and can be replaced later
- Focus on luxury feel through whitespace and typography

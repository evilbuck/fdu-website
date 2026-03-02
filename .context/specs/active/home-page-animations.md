---
id: home-page-animations
type: feature
status: completed
priority: medium
created: 2026-03-02
completed: 2026-03-02
dependencies: []
---

# Home Page Modern Animations

## Goal
Add modern scroll and load animations to the Home page using the `motion` (formerly framer-motion) library to give the site a more modern, premium feel.

## Context / Background
The current Home page components (`Hero`, `TrustBar`, `ServiceCards`, `PersonaPathways`, `AboutSnippet`, and `FinalCTA`) are static. Adding smooth, physics-based animations (staggered fade-ins, slide-ups, and scroll-reveals) will improve the user experience and visual appeal without significantly impacting performance. Since the components are already Client Components (`"use client"`), integrating `motion` is straightforward.

## Requirements
- [x] Install `motion` dependency.
- [x] Update `app/sections/Hero.tsx`: Staggered fade-in and slide-up for the Badge, Headline, Subhead, and Buttons on initial load. Add subtle pulse/drift to background decorative elements.
- [x] Update `app/sections/TrustBar.tsx`: Staggered fade-in for Certifications and a satisfying "pop-in" (scale + spring bounce) for Stats upon scroll reveal.
- [x] Update `app/sections/ServiceCards.tsx`: Header fade-in/slide-up, followed by a cascading/staggered reveal of the 4 service cards as they enter the viewport.
- [x] Update `app/sections/PersonaPathways.tsx`: Header fade-in/slide-up, followed by a cascading/staggered reveal of the 4 persona cards as they enter the viewport.
- [x] Update `app/sections/AboutSnippet.tsx`: Slide-in from left for text content, and a staggered fade-in/slide-up for the right-side stats grid.
- [x] Update `app/sections/FinalCTA.tsx`: Subtle scale-up (e.g., 0.95 to 1) and fade-in to grab attention right before the footer.

## Implementation Plan
1.  **Dependencies**: Install `motion` via package manager (`npm install motion`).
2.  **Hero Integration**: Apply `motion.div` to layout elements, using `initial`, `animate`, and `transition` (with stagger logic).
3.  **Scroll Animations**: Implement `whileInView` with `viewport={{ once: true, margin: "-100px" }}` on TrustBar, ServiceCards, PersonaPathways, AboutSnippet, and FinalCTA to trigger animations when the user scrolls them into view.
4.  **Testing**: Verify smooth transitions and ensure no layout shifts occur prematurely across mobile and desktop viewports. Ensure animations don't negatively impact Core Web Vitals (specifically CLS).

## Acceptance Criteria
- [x] The `motion` library is installed and running without console errors.
- [x] The Hero section animates smoothly upon page load.
- [x] All other Home page sections animate correctly as the user scrolls down the page.
- [x] Animations run only once per page load to avoid repetitive distraction.

## Implementation Notes

### Easing Pattern
Use `[0.25, 0.1, 0.25, 1] as const` for smooth ease-out cubic-bezier.

### Stagger Pattern
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};
```

### Scroll Trigger Pattern
All scroll animations use `viewport={{ once: true, margin: "-100px" }}` to trigger once and start slightly before viewport entry.

### Hover Effects
Use `whileHover` prop for smooth hover interactions:
```typescript
whileHover={{ y: -5, transition: { duration: 0.2 } }}
```

See `.context/memory/home-page-animations-2026-03-02.md` for full session details.

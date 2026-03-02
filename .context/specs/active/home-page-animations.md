---
id: home-page-animations
type: feature
status: active
priority: medium
created: 2026-03-02
completed: 
dependencies: []
---

# Home Page Modern Animations

## Goal
Add modern scroll and load animations to the Home page using the `motion` (formerly framer-motion) library to give the site a more modern, premium feel.

## Context / Background
The current Home page components (`Hero`, `TrustBar`, `ServiceCards`, `PersonaPathways`, `AboutSnippet`, and `FinalCTA`) are static. Adding smooth, physics-based animations (staggered fade-ins, slide-ups, and scroll-reveals) will improve the user experience and visual appeal without significantly impacting performance. Since the components are already Client Components (`"use client"`), integrating `motion` is straightforward.

## Requirements
- [ ] Install `motion` dependency.
- [ ] Update `app/sections/Hero.tsx`: Staggered fade-in and slide-up for the Badge, Headline, Subhead, and Buttons on initial load. Add subtle pulse/drift to background decorative elements.
- [ ] Update `app/sections/TrustBar.tsx`: Staggered fade-in for Certifications and a satisfying "pop-in" (scale + spring bounce) for Stats upon scroll reveal.
- [ ] Update `app/sections/ServiceCards.tsx`: Header fade-in/slide-up, followed by a cascading/staggered reveal of the 4 service cards as they enter the viewport.
- [ ] Update `app/sections/PersonaPathways.tsx`: Header fade-in/slide-up, followed by a cascading/staggered reveal of the 4 persona cards as they enter the viewport.
[ ] Update `app/sections/AboutSnippet.tsx`: Slide-in from left for text content, and a staggered fade-in/slide-up for the right-side stats grid.
- [ ] Update `app/sections/FinalCTA.tsx`: Subtle scale-up (e.g., 0.95 to 1) and fade-in to grab attention right before the footer.

## Implementation Plan
1.  **Dependencies**: Install `motion` via package manager (`npm install motion`).
2.  **Hero Integration**: Apply `motion.div` to layout elements, using `initial`, `animate`, and `transition` (with stagger logic).
3.  **Scroll Animations**: Implement `whileInView` with `viewport={{ once: true, margin: "-100px" }}` on TrustBar, ServiceCards, PersonaPathways, AboutSnippet, and FinalCTA to trigger animations when the user scrolls them into view.
4.  **Testing**: Verify smooth transitions and ensure no layout shifts occur prematurely across mobile and desktop viewports. Ensure animations don't negatively impact Core Web Vitals (specifically CLS).

## Acceptance Criteria
- [ ] The `motion` library is installed and running without console errors.
- [ ] The Hero section animates smoothly upon page load.
- [ ] All other Home page sections animate correctly as the user scrolls down the page.
- [ ] Animations run only once per page load to avoid repetitive distraction.

# Backlog

## Details

### home-page-animations
**Description**: Add modern scroll and load animations to the Home page using the `motion` (formerly framer-motion) library.
**Context**: The current Home page components are static. Adding smooth, physics-based animations (staggered fade-ins, slide-ups, and scroll-reveals) will improve the user experience and visual appeal.
**Relevant files**: 
- `app/sections/Hero.tsx`
- `app/sections/TrustBar.tsx`
- `app/sections/ServiceCards.tsx`
- `app/sections/PersonaPathways.tsx`
- `app/sections/AboutSnippet.tsx`
- `app/sections/FinalCTA.tsx`
**Requirements**:
- Install `motion` dependency
- Hero: Staggered fade-in/slide-up on load
- TrustBar: Staggered fade-in + pop-in for stats
- ServiceCards: Cascading reveal on scroll
- PersonaPathways: Cascading reveal on scroll
- AboutSnippet: Slide-in for text, staggered stats
- FinalCTA: Scale-up animation
**Technical notes**: All components are already Client Components (`"use client"`), making integration straightforward. Use `whileInView` with `viewport={{ once: true, margin: "-100px" }}` for scroll triggers.
**Related work**: See spec at `.context/specs/active/home-page-animations.md`

## High Priority

## Medium Priority
- [ ] [Home Page Animations](#home-page-animations)

## Low Priority / Nice to Have

## Completed

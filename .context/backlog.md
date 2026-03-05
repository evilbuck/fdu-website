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

### bug-missing-partners-page
**Description**: Navigation links to "/about/partners" but page doesn't exist
**Context**: 
- Navigation dropdown at `app/components/Navigation.tsx:45` has link to Technology Partners
- Page `/about/partners` returns 404
- Users clicking this link see "This page could not be found"
**Requirements**: Either create the page at `app/about/partners/page.tsx` or remove the link from navigation
**Related work**: Part of QA bug report 2026-03-04

### bug-missing-privacy-page
**Description**: Footer links to "/privacy" but page doesn't exist
**Context**: 
- Footer at `app/components/Footer.tsx:172` has Privacy Policy link to /privacy
- Page `/privacy` returns 404
- Required for legal compliance
**Requirements**: Create `app/privacy/page.tsx` with privacy policy content
**Related work**: Part of QA bug report 2026-03-04

### bug-missing-terms-page
**Description**: Footer links to "/terms" but page doesn't exist
**Context**: 
- Footer at `app/components/Footer.tsx:175` has Terms of Service link to /terms
- Page `/terms` returns 404
- Required for legal compliance
**Requirements**: Create `app/terms/page.tsx` with terms of service content
**Related work**: Part of QA bug report 2026-03-04

### bug-footer-logo-contrast
**Description**: White "FDU" text on white background in footer logo
**Context**: 
- Footer logo box at `app/components/Footer.tsx:15-16` has white background
- Text "FDU" should be navy (#1B365D) but appears white-on-white (invisible)
- Root cause: `text-[#1B365D]` class is being overridden
**Relevant files**: `app/components/Footer.tsx`
**Requirements**: Fix the CSS so FDU text is visible (navy on white)
**Related work**: Part of QA bug report 2026-03-04

### bug-about-phone-contrast
**Description**: White phone number text on white button background on /about page
**Context**: 
- Phone links at `app/about/page.tsx:72-82` and `app/about/page.tsx:219-229`
- Using Button with variant="outline" and `text-white` class
- Button component's `bg-background` style overrides text color, making phone numbers invisible
**Relevant files**: `app/about/page.tsx`
**Requirements**: Fix button styling so white text is visible on white background (or use different button style)
**Related work**: Part of QA bug report 2026-03-04

### bug-contact-contrast
**Description**: Dark text (#2C3E50) on navy (#1B365D) background has poor contrast
**Context**: 
- Contact page "Get in Touch" heading uses dark text on navy background
- Contrast ratio is 8.3:1 (fails WCAG AA for some use cases)
- Page: `app/contact/page.tsx`
**Requirements**: Change heading text color to white or lighter shade for better contrast
**Related work**: Part of QA bug report 2026-03-04

## Medium Priority
- [ ] [Home Page Animations](#home-page-animations)

## Low Priority / Nice to Have

## Completed
- [x] [Fix 404: Missing /about/partners page](#bug-missing-partners-page) (2026-03-04) - Created Technology Partners page
- [x] [Fix 404: Missing /privacy page](#bug-missing-privacy-page) (2026-03-04) - Created privacy policy page
- [x] [Fix 404: Missing /terms page](#bug-missing-terms-page) (2026-03-04) - Created terms of service page
- [x] [Fix: White-on-white "FDU" text in footer](#bug-footer-logo-contrast) (2026-03-04) - Added inline style with explicit navy color
- [x] [Fix: White-on-white phone links on /about page](#bug-about-phone-contrast) (2026-03-04) - Replaced Button with styled anchor tags
- [x] [Fix: Dark text on navy background at /contact](#bug-contact-contrast) (2026-03-04) - Already had text-white (verified correct)

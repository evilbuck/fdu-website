---
date: 2026-03-02
domains: [frontend, design]
topics: [nextjs, persona-pages, general-contractors, fire-alarm, landing-page]
related: []
priority: high
status: active
---

# Session: 2026-03-02 - General Contractors Landing Page Implementation

## Context
- Objective: Implement FDU website based on INITIAL_PRD.md
- Previous work: Homepage foundation already complete (Navigation, Hero, TrustBar, etc.)
- Goal: Create first persona landing page for General Contractors

## What Was Built

### File Created
- `app/general-contractors/page.tsx` (444 lines)

### Page Sections Implemented (per PRD)
1. **Hero Section**
   - Headline: "Keep Your Project on Schedule with Expert Fire Alarm Design-Build"
   - GC-specific messaging emphasizing unified accountability
   - CTAs: "Get Project Quote" button + click-to-call
   - Badge: "For General Contractors" with HardHat icon

2. **Pain Point Solution Grid** (3 cards)
   - Problem: Coordinating separate designer/installer → Solution: Single point of accountability
   - Problem: Failed inspections → Solution: Deep AHJ relationships
   - Problem: Change orders → Solution: Value engineering

3. **Process Overview** (4-step Design-Build)
   - 01: Consultation & Design
   - 02: Permitting & AHJ Coordination  
   - 03: Installation & Integration
   - 04: Testing & Final Inspection

4. **Case Study Highlight**
   - Featured project: 555 City Center, Oakland (placeholder)
   - Stats: 28 stories, 650K sq ft, On-time delivery
   - Testimonial quote from GC

5. **Trust Elements**
   - C-10 Licensed (#803262)
   - NICET Level IV Certified
   - 24+ Years Bay Area Experience
   - 1000+ Projects Completed

6. **FAQ Section** (4 questions, interactive accordion)
   - How long does permitting take?
   - Do you work with our electrical contractor?
   - What if we have a tight deadline?
   - Can you work with existing specifications?

7. **Conversion Section**
   - Netlify-compatible form with data-netlify="true"
   - Fields: Name, Company, Project Type, Timeline, Phone, Email, Details
   - Phone CTA: "Call Rick directly"

## Technical Decisions

### Form Implementation
- Used `data-netlify="true"` attribute for Netlify Forms
- Included hidden `form-name` input for Netlify detection
- Form name: "gc-quote"

### Interactivity
- FAQ accordion using React useState
- Client-side only interactivity (no SSR issues)

### Styling Consistency
- Brand colors: Navy (#1B365D), Orange (#FF6B35), Light Blue (#4A90E2)
- Lucide React icons throughout
- Tailwind CSS with custom brand palette
- Responsive breakpoints: mobile-first design

### Build Configuration
- Static export successfully generates /general-contractors/index.html
- Route appears in build output as prerendered static content

## Build Verification
```
Route (app)
┌ ○ /
├ ○ /_not-found
└ ○ /general-contractors

○  (Static)  prerendered as static content
```

## Commit
- Hash: 15021b8
- Message: "feat: add General Contractors persona landing page"

## Next Steps (From PRD)
Remaining persona pages to create:
1. /property-managers - Target property managers with non-proprietary messaging
2. /engineers - Focus on NICET IV and technical collaboration
3. /government - DVBE certification and public sector experience

Also pending:
- Service detail pages (5 pages)
- About subpages (Leadership, Certifications, Partners)
- Case Studies section
- Resources (FAQ, NFPA updates)
- Contact/Quote forms

## Gotchas
- Form submission handling requires Netlify account setup
- Case study photos need to be replaced with actual project images
- Testimonials are placeholders pending client approval
- No actual form backend validation implemented (relies on Netlify)

## References
- PRD Section 2: Persona Landing Pages specification
- Existing components: Navigation, Footer, Button
- Brand colors defined in app/globals.css

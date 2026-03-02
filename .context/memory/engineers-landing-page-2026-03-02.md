---
date: 2026-03-02
domains: [frontend, design]
topics: [nextjs, persona-pages, engineers, fire-alarm, landing-page]
related: [gc-landing-page-2026-03-02.md]
priority: high
status: active
---

# Session: 2026-03-02 - Engineers Landing Page Implementation

## Context
- Objective: Implement FDU website based on INITIAL_PRD.md
- Previous work: Homepage, General Contractors page, Property Managers page all complete
- Goal: Create third persona landing page targeting Building/Electrical Engineers

## What Was Built

### File Created
- `app/engineers/page.tsx` (448 lines)

### Page Sections Implemented (per PRD Section 2 - Engineers Landing Page)
1. **Hero Section**
   - Headline: "Partner with NICET Level IV Certified Engineers Who Speak Your Language"
   - Engineer-specific messaging emphasizing technical collaboration
   - CTAs: "Discuss Your Project" button + click-to-call
   - Badge: "For Building & Electrical Engineers" with Ruler icon

2. **Pain Point Solution Grid** (3 cards)
   - Problem: Contractors who can't execute specifications → Solution: NICET IV certified engineers
   - Problem: Poor system design requiring change orders → Solution: Value engineering reviews
   - Problem: Outdated code knowledge → Solution: Current NFPA/California code expertise

3. **Process Overview** (4-step collaborative process)
   - 01: Specification Review
   - 02: Collaborative Design
   - 03: Documentation & Shop Draws
   - 04: Installation & Verification

4. **Case Study Highlight**
   - Featured project: Buck Institute Research Facility, Novato
   - Stats: NICET IV lead engineer, 100+ custom devices, first-pass submittals
   - Testimonial from fire protection engineer at consulting firm

5. **Trust Elements** (4 credentials)
   - NICET Level IV Certified
   - CAD Capable (detailed shop drawings)
   - NFPA Current (active membership)
   - 24+ Years Bay Area Engineering Experience

6. **FAQ Section** (4 questions, interactive accordion)
   - Can you work with our existing specifications?
   - What CAD capabilities do you provide?
   - How current are you on NFPA and California codes?
   - Do you provide peer review or design-build support?

7. **Conversion Form**
   - Netlify-compatible form with data-netlify="true"
   - Form name: "engineer-quote"
   - Engineer-specific fields:
     - Project type (New construction, Retrofit, Upgrade, Peer Review)
     - Service needed (Spec execution, Design-build, CAD drawings, etc.)
     - Complexity level (Simple to Highly Complex)
   - Download icon with note about CAD samples/spec sheets

## Technical Decisions

### Form Implementation
- Used `data-netlify="true"` attribute for Netlify Forms
- Included hidden `form-name` input for Netlify detection
- Form name: "engineer-quote"

### Engineer-Specific Content Strategy
- Featured technical case study (research facility vs commercial)
- Emphasized CAD capabilities and technical documentation
- Used technical terminology appropriate for engineering audience
- Included complexity level selector to qualify leads

### Interactivity
- FAQ accordion using React useState
- Client-side only interactivity (no SSR issues)

### Styling Consistency
- Brand colors: Navy (#1B365D), Orange (#FF6B35), Light Blue (#4A90E2)
- Lucide React icons throughout
- Tailwind CSS with custom brand palette
- Responsive breakpoints: mobile-first design
- Ruler icon for engineer-specific badge (vs HardHat for GC, Building2 for PM)

## Build Verification
```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /engineers
├ ○ /general-contractors
└ ○ /property-managers

○  (Static)  prerendered as static content
```

## Commit
- Hash: 1cb8f61
- Message: "feat: add Engineers persona landing page"

## Next Steps (From PRD)
Remaining persona page to create:
1. /government - Target procurement officers with DVBE messaging

Other pending pages:
- Service detail pages (5 pages)
- About subpages (Leadership, Certifications, Partners)
- Case Studies section
- Resources (FAQ, NFPA updates)
- Contact/Quote forms

## Gotchas
- Form submission handling requires Netlify account setup
- Case study details are realistic but should be verified with Rick
- Testimonials are placeholders pending client approval
- No actual form backend validation implemented (relies on Netlify)
- CAD samples/spec sheets mentioned but not yet created

## Persona Differentiation Learnings
Key differences between persona pages:
- **GC page**: Project schedule focus, Design-Build, construction imagery
- **PM page**: Cost/liaibility focus, non-proprietary systems, maintenance emphasis
- **Engineers page**: Technical focus, NICET IV, CAD capabilities, code expertise
- **Government page** (pending): Compliance focus, DVBE, public works, veteran-owned

## References
- PRD Section 2: Persona Landing Pages specification
- PRD Engineer Persona (lines 117-145): Technical collaboration focus
- Existing patterns: general-contractors/page.tsx, property-managers/page.tsx
- Brand colors defined in app/globals.css

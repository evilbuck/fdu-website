# FDU Website - UI/UX Bug Fix PRD

## Executive Summary

**Project:** Fire Detection Unlimited Website - Design & Accessibility Fixes
**Date:** 2026-03-02
**Priority:** High
**Objective:** Fix critical accessibility issues (white-on-white text) and restore missing pages (404 errors)

---

## Current State Assessment

### Working Pages
- Homepage `/`
- `/general-contractors/`
- `/property-managers/`
- `/engineers/`
- `/government/`

### Broken Pages (404 Errors)
| Page | URL | Status |
|------|-----|--------|
| Services Overview | `/services/` | 404 |
| Design & Installation | `/services/design-installation/` | 404 |
| Monitoring | `/services/monitoring/` | 404 |
| Inspections & Maintenance | `/services/inspections/` | 404 |
| Emergency Repairs | `/services/emergency/` | 404 |
| System Upgrades | `/services/upgrades/` | 404 |
| Contact Page | `/contact/` | 404 |
| Quote Request | `/contact/quote/` | 404 |
| About Page | `/about/` | 404 |
| Leadership | `/about/leadership/` | 404 |
| Certifications | `/about/certifications/` | 404 |
| Case Studies | `/case-studies/` | 404 |
| Resources | `/resources/` | 404 |

---

## Issues to Fix

### Issue 1: White-on-White Text (Critical Accessibility)

**Description:** Multiple elements have white text on white backgrounds, making content unreadable.

**Affected Elements:**
| Element | Location | Current State |
|---------|----------|----------------|
| Phone number link (header) | Header nav | white bg, white text |
| Phone number link (hero) | Hero section | white bg, white text |
| "Call (925) 676-4444" | CTA section | white bg, white text |
| "FDU" logo text | Logo component | white bg, white text |

**Current Colors:**
- Background: `rgb(255, 255, 255)` (white)
- Text: `rgb(255, 255, 255)` (white)

**Expected Colors:**
- For phone links: Should use Navy Blue (#1B365D) as primary text color, or orange outline style
- For logo on white: Should use Navy Blue (#1B365D)

### Issue 2: Missing Pages (404 Errors)

**Description:** 13 pages return 404 errors, breaking navigation and core functionality.

**Root Cause:** Likely missing Next.js pages/routes in the app directory.

**Impact:**
- Users cannot access Services pages
- Users cannot access Contact/Quote forms
- Users cannot access About section
- Users cannot access Case Studies or Resources

---

## Requirements

### Accessibility Requirements

1. All text must have minimum contrast ratio of 4.5:1 (WCAG AA)
2. Phone number links must be visible on both light and dark backgrounds
3. Logo must be readable in all contexts

### Functionality Requirements

1. All pages defined in INITIAL_PRD must be accessible
2. Navigation must work correctly between all pages
3. Forms must be functional on contact pages

### Design Requirements

Maintain existing design system:
- Primary: Navy Blue `#1B365D`
- Accent: Safety Orange `#FF6B35`
- White: `#FFFFFF`

---

## Implementation Plan

### Phase 1: Accessibility Fixes (Priority 1)

1. **Fix Header Phone Link**
   - Change from white bg/white text to navy blue text
   - Or use outline button style

2. **Fix Hero Phone Number**
   - Ensure visibility matches design spec

3. **Fix Footer Phone Links**
   - Check contrast and fix if needed

4. **Fix Logo Visibility**
   - Ensure "FDU" text is visible on white backgrounds

### Phase 2: Restore Missing Pages (Priority 2)

1. **Create Services Pages**
   ```
   app/services/page.tsx          - Services overview
   app/services/design-installation/page.tsx
   app/services/monitoring/page.tsx
   app/services/inspections/page.tsx
   app/services/emergency/page.tsx
   app/services/upgrades/page.tsx
   ```

2. **Create Contact Pages**
   ```
   app/contact/page.tsx           - Contact overview
   app/contact/quote/page.tsx     - Quote request form
   ```

3. **Create About Pages**
   ```
   app/about/page.tsx             - About overview
   app/about/leadership/page.tsx  - Team/leadership
   app/about/certifications/page.tsx
   ```

4. **Create Additional Pages**
   ```
   app/case-studies/page.tsx
   app/resources/page.tsx
   ```

### Phase 3: Design Review (Priority 3)

1. Review all CTA button styles for consistency
2. Verify responsive design on all restored pages
3. Test forms on contact pages

---

## Acceptance Criteria

### Accessibility Criteria
- [ ] All phone numbers are readable (contrast ratio 4.5:1+)
- [ ] Logo is visible on white backgrounds
- [ ] No white-on-white text anywhere on site

### Functionality Criteria
- [ ] All 13 404 pages are restored and accessible
- [ ] Navigation menu works correctly
- [ ] Contact forms render and are submittable

### Visual Criteria
- [ ] Design maintains brand consistency
- [ ] Buttons have consistent styling
- [ ] Responsive design works on all pages

---

## Technical Notes

**Framework:** Next.js (App Router)
**Styling:** Tailwind CSS
**Color Palette:**
- Navy Blue: `#1B365D`
- Safety Orange: `#FF6B35`
- White: `#FFFFFF`
- Light Gray: `#ECF0F1`

**Existing Working Pages to Reference:**
- `/general-contractors/` - Good reference for persona page structure
- Homepage - Good reference for components and styling
# Session: 2026-03-05 - Phone CTA Contrast Fix Across Multiple Pages

## Context
- Goal: Fix white-on-white phone number button rendering on multiple pages (example: `/services/design-installation`).
- Prior related work: Similar contrast issue was previously fixed on `/about` only.

## Decisions Made
- Applied explicit `bg-transparent` utility to all white outline CTA class patterns using `border-2 border-white ... text-white`.
- Kept the fix in-page for reliability so each affected CTA explicitly controls its own background.
- Also updated shared outline variant in `components/ui/button.tsx` to use transparent backgrounds, but the direct class overrides are the definitive fix for affected CTAs.

## Implementation Notes
- Visual verification done with `playwright-cli` on:
  - `/services/design-installation`
  - `/resources`
  - `/general-contractors`
- Verified before state: phone CTA appeared as a blank white pill (text invisible).
- Verified after state: phone CTA text and icon visible with transparent background and white border.

## Files Changed
- `components/ui/button.tsx`
- `app/services/upgrades/page.tsx`
- `app/sections/AboutSnippet.tsx`
- `app/services/page.tsx`
- `app/resources/page.tsx`
- `app/services/monitoring/page.tsx`
- `app/property-managers/page.tsx`
- `app/general-contractors/page.tsx`
- `app/services/inspections/page.tsx`
- `app/about/partners/page.tsx`
- `app/case-studies/page.tsx`
- `app/about/page.tsx`
- `app/engineers/page.tsx`
- `app/about/leadership/page.tsx`
- `app/government/page.tsx`
- `app/about/certifications/page.tsx`
- `app/services/design-installation/page.tsx`
- `.context/backlog.md`

## Validation
- `npm run lint` was executed but fails due existing repo-wide lint issues unrelated to this change (including many generated `dist` files and pre-existing JSX quote rules).

## Next Steps
- [ ] Consider scoping ESLint to source-only paths (exclude generated `dist/`) to keep lint signal actionable.
- [ ] If desired, standardize CTA styles with a dedicated reusable variant (e.g., `outlineOnDark`) to avoid repeated utility classes.

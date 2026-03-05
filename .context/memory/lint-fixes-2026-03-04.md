---
date: 2026-03-04
domains: [maintenance, frontend, tooling]
topics: [eslint, linting, react, code-quality]
related: []
priority: medium
status: active
---

# Session: 2026-03-04 - Fix ESLint Issues

## Context
- User ran `npm run lint` and found multiple ESLint errors and warnings
- Need to fix unescaped entities and unused imports across the codebase

## Actions Taken

### 1. Fixed Unescaped Entities (react/no-unescaped-entities)
Replaced single and double quotes with proper HTML entities in JSX:
- `'` → `&apos;` (e.g., "Here's", "we're", "can't", "don't")
- `"` → `&quot;` in blockquote testimonials

Files modified:
- `app/engineers/page.tsx` (5 occurrences)
- `app/general-contractors/page.tsx` (2 occurrences)
- `app/government/page.tsx` (3 occurrences)
- `app/property-managers/page.tsx` (3 occurrences)
- `app/sections/AboutSnippet.tsx` (3 occurrences)
- `app/sections/Brands.tsx` (1 occurrence)
- `app/sections/PersonaPathways.tsx` (1 occurrence)
- `app/sections/ServiceCards.tsx` (1 occurrence)
- `app/services/monitoring/page.tsx` (1 occurrence)
- `app/services/page.tsx` (1 occurrence)

### 2. Removed Unused Imports (@typescript-eslint/no-unused-vars)
Cleaned up icon imports from lucide-react that weren't being used:

Files modified:
- `app/government/page.tsx`: Removed `Users`
- `app/services/design-installation/page.tsx`: Removed `Clock`, `Building2`
- `app/services/emergency/page.tsx`: Removed `Link`, `Phone`, `ArrowRight`, `Shield`, `Clock`, `Wrench`
- `app/services/inspections/page.tsx`: Removed `Shield`, `Clock`, `FileText`
- `app/services/upgrades/page.tsx`: Removed `Shield`, `Clock`

### 3. Updated ESLint Config
Added `dist/**` to the global ignores in `eslint.config.mjs` to prevent linting build artifacts (minified chunks, manifest files).

## Result
- `npm run lint` now passes with no errors
- 14 source files modified
- ~25 unescaped entity issues fixed
- ~14 unused import warnings resolved

## Files Changed
```
app/engineers/page.tsx
app/general-contractors/page.tsx
app/government/page.tsx
app/property-managers/page.tsx
app/sections/AboutSnippet.tsx
app/sections/Brands.tsx
app/sections/PersonaPathways.tsx
app/sections/ServiceCards.tsx
app/services/design-installation/page.tsx
app/services/emergency/page.tsx
app/services/inspections/page.tsx
app/services/monitoring/page.tsx
app/services/page.tsx
app/services/upgrades/page.tsx
eslint.config.mjs
```

## Next Steps
- [ ] Consider adding pre-commit hook to run lint automatically
- [ ] Document common React entity escaping patterns in project conventions

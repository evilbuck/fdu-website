# Project Context

## Project Overview
- **Name**: FDU Website (Fire Detection Unlimited)
- **Purpose**: Marketing website for fire safety services
- **Tech stack**: Next.js 14 (App Router), Tailwind CSS, shadcn/ui
- **Deployment**: Vercel (serverless functions available)

## Development Setup
- **Build**: `npm run build`
- **Dev**: `npm run dev`
- **Lint**: `npm run lint`

## Project Structure

### Pages (`app/`)
- `page.tsx` - Home page
- `contact/page.tsx` - Contact form page
- `contact/quote/page.tsx` - Quote request page
- `engineers/page.tsx` - Engineers landing page
- `general-contractors/page.tsx` - General contractors page
- `government/page.tsx` - Government services page
- `property-managers/page.tsx` - Property managers page

### Components
- `app/components/` - Layout components (Navigation, Footer)
- `app/sections/` - Reusable page sections (Hero, ServiceCards, etc.)
- `components/ui/` - shadcn/ui components

### API Routes (`app/api/`)
- `api/contact/route.ts` - Contact form handler (Vercel serverless function)

## Conventions

### Styling
- Colors: Primary #1B365D (navy), Accent #FF6B35 (orange)
- Use Tailwind CSS utility classes
- Keep component-level styles in the component file

### API Routes
- Use Next.js App Router Route Handlers (`route.ts`)
- API routes automatically become Vercel serverless functions
- For interactivity, create API routes in `app/api/` and call via `fetch()`

### Naming
- Page components: `page.tsx` in route directories
- Shared components: PascalCase (`ContactForm.tsx`)
- Route handlers: `route.ts`

### Animations
- Use `motion` library (Framer Motion successor) for React animations
- Import: `import { motion } from "motion/react";`
- Scroll animations: Use `whileInView` with `viewport={{ once: true, margin: "-100px" }}`
- Stagger children using `variants` with parent `staggerChildren` transition
- Easing: Use `[0.25, 0.1, 0.25, 1] as const` for smooth ease-out
- Duration: 0.5-0.6s for most transitions, 0.1-0.15s stagger delays
- Hover effects: Use `whileHover` prop for smooth interactions
- Keep all section components as Client Components (`"use client"`) for animation support

## External Services
- None currently configured (contact form logs to console)
- Phone: (925) 676-4444

## Important Files
- `app/globals.css` - Global styles and Tailwind imports
- `app/components/Navigation.tsx` - Main navigation with all menu items
- `app/components/Footer.tsx` - Footer with contact info and links
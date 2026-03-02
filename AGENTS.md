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

## External Services
- None currently configured (contact form logs to console)
- Phone: (925) 676-4444

## Important Files
- `app/globals.css` - Global styles and Tailwind imports
- `app/components/Navigation.tsx` - Main navigation with all menu items
- `app/components/Footer.tsx` - Footer with contact info and links
# Fire Detection Unlimited Website

Marketing website for Fire Detection Unlimited, Inc. - a fire safety company specializing in fire alarm design, installation, monitoring, and maintenance.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Project Structure

```
app/
├── api/
│   └── contact/           # Contact form API endpoint
├── components/            # Shared components (Navigation, Footer)
├── sections/              # Reusable page sections (Hero, ServiceCards)
├── contact/               # Contact page & quote request
├── engineers/             # Engineers landing page
├── general-contractors/   # General contractors page
├── government/            # Government services page
└── property-managers/     # Property managers page
```

## API Routes

### POST /api/contact

Contact form submission endpoint. Logs submission data and returns success response.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "company": "string",
  "serviceType": "string",
  "message": "string",
  "page": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your inquiry. We will be in touch shortly."
}
```

## Design System

- **Primary Color**: #1B365D (Navy Blue)
- **Accent Color**: #FF6B35 (Orange)
- **Typography**: Geist font (via next/font)

## Deployment

This project is configured for deployment on Vercel. The Vercel platform will automatically configure API routes as serverless functions.

```bash
# Deploy to Vercel
vercel
```

Or connect the GitHub repository to Vercel for automatic deployments.
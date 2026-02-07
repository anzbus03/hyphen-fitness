# Hyphen Fitness Website

A modern, responsive website for Hyphen Fitness - Dubai's premier fitness facility.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Image Optimization:** Next.js Image component
- **Deployment:** Cloudflare Pages (planned)

## 📁 Project Structure

```
hyphen/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── EquipmentSection.tsx
│   │   │   └── InstagramSection.tsx
│   │   └── ui/                # Reusable UI components
│   ├── lib/                   # Utilities & constants
│   │   └── constants.ts
│   └── styles/                # Additional styles
│       └── animations.css
├── public/                    # Static assets
│   ├── 1.png - 7.png         # Design assets
│   └── image.png              # Full design reference
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎨 Design Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Professional component architecture
- ✅ Optimized images with Next.js Image
- ✅ SEO-friendly with proper metadata
- ✅ Smooth scrolling and animations
- ✅ Diamond/crosshatch pattern backgrounds
- ✅ Brand colors: Orange (#FF6600), Black (#000000)

## 📱 Sections

1. **Hero** - Full-screen gym background with hyphen branding
2. **Navigation** - Fixed header with service links
3. **About** - Orange info card + gym interior photos + athlete image
4. **Equipment** - Showcase of gym equipment
5. **Instagram** - Social media integration with phone mockup
6. **Footer** - Copyright and links

## 🚀 Deployment

### Cloudflare Pages

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Framework preset: Next.js

## 📄 License

© 2024 Hyphen Fitness. All rights reserved.

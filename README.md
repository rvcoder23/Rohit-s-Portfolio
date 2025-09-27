# Lumina Canvas - Personal Portfolio

![Hero Banner](public/assets/hero-bg.jpg)

## Overview

Welcome to **Lumina Canvas**, my personal portfolio website showcasing my journey as a Full-Stack Developer. This modern, responsive site highlights my projects, certifications, technical skills, and contact information with smooth animations, scroll-triggered reveals, and a sleek dark-themed design.

Built with React and Tailwind CSS, it features interactive tabs for portfolio sections, glassmorphism effects, neon gradients, and optimized performance for an engaging user experience.

### Key Features

- **Hero Section**: Eye-catching introduction with animated typography and floating elements.
- **About Me**: Personal background, skills overview, and quick stats (1+ years experience, 10+ projects, 5+ certificates).
- **Portfolio Showcase**: Tabbed interface for Projects, Certificates, Tech Stack, and Comments.
  - **Projects**: 4 featured full-stack applications with live demos and GitHub links.
  - **Certificates**: IBM Frontend Developer, NPTEL Cloud Computing, Udemy Java Microservices.
  - **Tech Stack**: Categorized skills in Programming Languages, Backend/Frontend Technologies, Databases, Cloud/DevOps, AI/ML, Tools, and Security.
- **Contact Form**: Simulated submission with toast notifications (no real email sending).
- **Animations**: Scroll-triggered slide-ins, stagger effects, hover glows, and card stacking in About section.
- **Responsive Design**: Mobile-first with Tailwind breakpoints for seamless viewing on all devices.
- **Performance**: GPU-accelerated transforms, Intersection Observer for reveals, and optimized CSS.

## Screenshots

### Hero Section

![Hero Section](public/assets/hero-bg.jpg)
Dynamic background with gradient text and floating icons.

### About Section

![About Section](public/placeholder.svg)
Profile image, stats cards, and layered card stacking animation on scroll.

### Portfolio Tabs

![Portfolio Section](public/placeholder.svg)
Interactive tabs showing projects, certificates, and tech stack grids.

### Contact Section

![Contact Section](public/placeholder.svg)
Form with info cards and simulated submission feedback.

_(Note: Replace placeholder.svg with actual screenshots in public/screenshots/ for production. You can capture these from the running dev server.)_

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Build Tools**: Vite, PostCSS
- **Icons & UI**: Lucide React, Headless UI components
- **Animations**: Custom hooks (useScrollReveal, useCardStacking), CSS transitions with cubic-bezier easing
- **State Management**: React useState for tabs and forms
- **Other**: Intersection Observer, requestAnimationFrame for smooth scroll handling

## Installation & Setup

### Prerequisites

- Node.js (v18+)
- npm or bun

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/lumina-canvas-portfolio.git
   cd lumina-canvas-port-main
   ```

2. Install dependencies:

   ```sh
   npm install
   # or with bun
   bun install
   ```

3. Run the development server:

   ```sh
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view the site.

4. Build for production:
   ```sh
   npm run build
   ```

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub.
2. Connect your repo to Netlify.
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add `_redirects` file in `public/` for SPA routing (already included: `/* /index.html 200`).

Deploy live: [Netlify Deployment Guide](https://docs.netlify.com/site-deploys/create-deploys/)

### Other Platforms

- **Vercel**: Auto-detects Vite; deploy with `npm run build`.
- **GitHub Pages**: Use `gh-pages` package or manual dist upload.

## Project Structure

```
lumina-canvas-port-main/
├── public/
│   ├── assets/          # Images (hero-bg.jpg, project screenshots)
│   ├── _redirects       # Netlify SPA routing
│   └── placeholder.svg  # Default images
├── src/
│   ├── components/      # UI components (Hero, About, Portfolio, etc.)
│   │   └── ui/          # shadcn/ui primitives
│   ├── hooks/           # Custom hooks (useScrollReveal, useCardStacking)
│   ├── lib/             # Utilities (supabase.ts, utils.ts)
│   ├── pages/           # Page components (Index, NotFound)
│   └── App.tsx          # Main app with routing
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite build config
└── package.json         # Dependencies
```

## Contributing

Feel free to fork the repo, create issues, or submit pull requests for improvements. This portfolio is a living project reflecting my ongoing learning in web development.

## Contact

- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **LinkedIn**: [linkedin.com/in/rohit-verma](https://linkedin.com/in/rohit-verma)
- **GitHub**: [github.com/rvcoder23](https://github.com/rvcoder23)

Built with ❤️ by Rohit Verma – Full-Stack Developer | AI Enthusiast

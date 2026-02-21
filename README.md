# Abdulkareem Sikirulahi — Portfolio Website

A sophisticated, production-ready portfolio built with Next.js 14, featuring a pure black background with emerald green accents. Showcases AI/ML engineering work, research publications, and academic achievements.

## 🎨 Design Features

- **Color Scheme**: Pure black (#000000) with emerald green (#10b981) accents
- **Typography**: Cormorant Garamond (headings) + JetBrains Mono (body)
- **Animations**: Framer Motion scroll-triggered reveals, custom cursor, animated timeline
- **Responsive**: Mobile-first design with hamburger menu
- **Accessibility**: WCAG AA compliant, keyboard navigation

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles & design system
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Tag.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   ├── Education.tsx
│   │   ├── Community.tsx
│   │   └── Contact.tsx
│   └── animations/
│       ├── FadeUp.tsx
│       └── CountUp.tsx
├── lib/
│   └── data.ts             # All content in one place
└── public/
    ├── resume-industry.pdf     # Your industry resume (ADD THIS)
    └── resume-academic.pdf     # Your academic CV (ADD THIS)
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Sikirulahi/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Updates

**All content lives in `lib/data.ts`** — no need to touch component files!

### Add a New Project
1. Open `lib/data.ts`
2. Add to the `projects` array:

```typescript
{
  id: "my-project",
  title: "Project Name",
  category: ["AI & LLM"],
  description: "Brief description...",
  keyMetric: "Key achievement or metric",
  techStack: ["Python", "FastAPI", "..."],
  links: {
    github: "https://github.com/...",
    live: "https://...",  // optional
  },
}
```

### Add Work Experience
Add to `experiences` array in `lib/data.ts`:

```typescript
{
  company: "Company Name",
  role: "Your Role",
  location: "City, Country",
  startDate: "Month YYYY",
  endDate: "Present",
  current: true,
  bullets: [
    "Achievement 1",
    "Achievement 2",
  ],
}
```

### Update Skills, Awards, Publications
Edit the respective arrays in `lib/data.ts`:
- `skills` - Technical skills grouped by category
- `publications` - Research papers
- `awards` - Academic/professional awards
- `community` - Community involvement

## 📄 Adding Your Resume PDFs

**Critical**: Replace the placeholder files with your actual resumes:

1. Create two PDF versions:
   - `resume-industry.pdf` - Technical resume for industry roles
   - `resume-academic.pdf` - Academic CV for grad school

2. Place both files in the `/public` folder

3. The "Download CV" buttons will automatically work

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Sikirulahi/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `portfolio` repository
5. Vercel auto-detects Next.js settings
6. Click **Deploy**
7. Wait ~2 minutes for build to complete

🎉 Your portfolio is live at `your-portfolio.vercel.app`!

### Step 3: Custom Domain (Optional)

1. Purchase domain (e.g., `sikirulahi.dev`)
2. In Vercel Dashboard: **Project → Settings → Domains**
3. Add your custom domain
4. Update DNS records at your registrar (Vercel provides instructions)
5. HTTPS is automatically enabled

### Continuous Deployment

Every push to `main` branch triggers automatic deployment. Preview deployments are created for other branches.

## 🎨 Customization

### Colors
Edit `app/globals.css` to change the color scheme:

```css
:root {
  --bg: #000000;              /* Background */
  --accent: #10b981;          /* Primary accent color */
  --accent-light: #34d399;    /* Hover state */
  --text-primary: #f5f5f5;    /* Main text */
  --text-secondary: #a3a3a3;  /* Secondary text */
}
```

### Fonts
Change fonts in `app/layout.tsx`:

```typescript
import { Your_Font, Another_Font } from "next/font/google";
```

### Sections
To hide/reorder sections, edit `app/page.tsx`:

```typescript
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Skills /> - Comment out to hide */}
      <Projects />
      {/* Reorder as needed */}
    </>
  );
}
```

## 📱 Responsive Behavior

- **Desktop (>1024px)**: Full 3-column layouts, custom cursor
- **Tablet (640-1024px)**: 2-column grids, responsive navigation
- **Mobile (<640px)**: Single column, hamburger menu, touch-optimized

## ⚡ Performance

- Lighthouse Score Target: 90+ performance, 100 accessibility/SEO
- Optimized fonts with `next/font` (zero layout shift)
- Lazy-loaded animations (viewport-triggered)
- Minimal dependencies (~8 packages)

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📊 Analytics (Optional)

Add Vercel Analytics:

```bash
npm install @vercel/analytics
```

Then in `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Font not loading
Check that fonts are imported correctly in `layout.tsx` and variable names match `globals.css`.

## 📞 Support

Issues with the portfolio? Check:
1. Node version (18+)
2. All dependencies installed (`npm install`)
3. PDF files in `/public` folder
4. Content formatted correctly in `lib/data.ts`

## 📜 License

This portfolio template is open source. Feel free to use it for your own portfolio!

---

**Built with ❤️ using Next.js** | Deployed on Vercel | Last updated: February 2026

# Sehetmeyer Marketing Website

A static marketing website for Sehetmeyer, an IT Consulting and Recruitment company. Built with Astro and Tailwind CSS.

## Tech Stack

- **Framework**: [Astro](https://astro.build) (latest)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com)

## Project Structure

```
shetmeyer/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   ├── IndustryCard.astro
│   │   ├── TestimonialCard.astro
│   │   ├── BlogCard.astro
│   │   ├── CaseStudyCard.astro
│   │   ├── CTASection.astro
│   │   ├── StatsRow.astro
│   │   ├── FAQAccordion.astro
│   │   ├── ContactForm.astro
│   │   ├── Button.astro
│   │   ├── SectionHeader.astro
│   │   └── TrustedBy.astro
│   ├── data/
│   │   ├── case-studies.ts
│   │   ├── blog-posts.ts
│   │   └── industries.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro (Home)
│   │   ├── services.astro
│   │   ├── consulting.astro
│   │   ├── recruitment.astro
│   │   ├── employers.astro
│   │   ├── candidates.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── 404.astro
│   │   ├── case-studies/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── insights/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Local Development

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/sehetmeyer.git
cd sehetmeyer

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/services` | Services overview |
| `/consulting` | IT Consulting services |
| `/recruitment` | IT Recruitment services |
| `/employers` | For employers / hiring |
| `/candidates` | For job seekers |
| `/about` | Company about page |
| `/contact` | Contact form |
| `/case-studies` | Case studies listing |
| `/case-studies/[slug]` | Individual case study |
| `/insights` | Blog listing |
| `/insights/[slug]` | Individual blog post |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/404` | Not found page |

## Cloudflare Pages Deployment

### Step 1: Push to GitHub

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Sehetmeyer marketing website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sehetmeyer.git
git push -u origin main
```

### Step 2: Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub repository

### Step 3: Configure Build Settings

| Setting | Value |
|---------|-------|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `18` |

### Step 4: Deploy

Click **Save and Deploy**. Cloudflare will build and deploy your site.

### Step 5: Custom Domain (Optional)

1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `sehetmeyer.com`)
4. Follow DNS configuration instructions

## Environment Variables

No environment variables are required for the base site. If you add form handling or analytics, configure them in Cloudflare Pages settings.

## Customization

### Colors & Typography

Edit `src/styles/global.css` to modify design tokens:

```css
@theme {
  --color-primary: #000000;
  --color-secondary: #374151;
  /* ... */
}
```

### Adding Content

- **Case Studies**: Edit `src/data/case-studies.ts`
- **Blog Posts**: Edit `src/data/blog-posts.ts`
- **Industries**: Edit `src/data/industries.ts`

### SEO

- Edit page titles and descriptions in each `.astro` file
- Update Open Graph images in `public/`
- Modify `sitemap` settings in `astro.config.mjs`

## License

Private - All rights reserved.

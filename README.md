# Asifur Rahman Noyon — Portfolio Website

A professional portfolio built with **React + Vite**. Features a luxury UAE gold & midnight-navy design, a rotating 3D CSS wireframe box (signature design element), smooth scroll animations, typewriter hero, animated skill bars, and a fully responsive layout.

**Live domain:** [asifurrahman-noyon.com](https://asifurrahman-noyon.com)

---

## ✨ Features

| Feature | Detail |
|---|---|
| 3D Wireframe Box | Rotating CSS package box in hero — represents packaging expertise |
| Typewriter Hero | Cycles through your roles automatically |
| Scroll Reveal | Every section animates into view on scroll |
| Animated Skill Bars | Bars fill from 0 % → target % when visible |
| Stat Counters | Numbers count up on scroll (100+, 3+, …) |
| Portfolio Filter | Filter projects by Packaging / Web Dev / Android |
| 3D Card Tilt | Project cards tilt on mouse move |
| Contact Form | Opens mail client with pre-filled subject & body |
| Glass Navbar | Transparent → blur glass on scroll |
| Mobile-first | Fully responsive hamburger menu |
| SEO-optimised | Title, meta, OG tags, Schema.org JSON-LD |
| Accessibility | ARIA labels, roles, keyboard navigation |

---

## 🚀 Quick Start

### Requirements
- **Node.js** v18 or newer → [nodejs.org](https://nodejs.org)
- **npm** v9+ (comes with Node)

### 1 — Install dependencies

```bash
cd portfolio-noyon
npm install
```

### 2 — Run locally (development)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The site hot-reloads on every save.

### 3 — Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — upload this to any hosting provider.

### 4 — Preview the production build locally

```bash
npm run preview
```

---

## 🗂 Project Structure

```
portfolio-noyon/
├── index.html                  ← SEO meta tags, Schema.org, Google Fonts
├── package.json
├── vite.config.js
├── .gitignore
├── README.md                   ← You are here
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Assembles all sections
    ├── index.css               ← ALL styles (design tokens, animations, layout)
    │
    ├── data/
    │   └── data.js             ★ EDIT THIS FILE to update all content
    │
    ├── hooks/
    │   └── useScrollAnimation.js  ← Scroll reveal, counter, typewriter, nav hooks
    │
    └── components/
        ├── Navbar.jsx          ← Sticky glass nav + mobile hamburger
        ├── Hero.jsx            ← Full-screen hero + 3D box + typewriter
        ├── About.jsx           ← Bio + animated stat counters + languages
        ├── Skills.jsx          ← Animated progress bars + tools chips
        ├── Experience.jsx      ← Alternating timeline
        ├── Portfolio.jsx       ← Filterable project cards with 3D tilt
        ├── Education.jsx       ← Education cards + award card
        ├── Contact.jsx         ← Contact info + mailto form
        └── Footer.jsx          ← Logo + copyright + back-to-top
```

---

## ✏️ How to Update Content

**All personal data lives in one file:** `src/data/data.js`

No need to touch any component file for routine updates. Open `src/data/data.js` and follow the comments.

### Change your name / email / phone / location

```js
// src/data/data.js
export const personalInfo = {
  name: 'Your Full Name',
  firstName: 'Your First Name',
  lastName: 'Your Last Name',
  initials: 'YFN',           // shown in navbar logo
  tagline: 'Your Job Title',
  email: 'you@example.com',
  phone: '+971 XX XXX XXXX',
  location: 'Dubai, UAE',
  fiverr: 'https://fiverr.com/your_handle',
  fiverrHandle: 'your_handle',
  available: true,           // toggle to false if you're not taking work
  // ...
}
```

### Change the hero typewriter roles

```js
roles: [
  'Packaging Designer',
  'Brand Identity Expert',
  'Android Developer',
  // Add or remove roles here
],
```

### Add / edit skills

```js
export const designSkills = [
  { name: 'Packaging Design', level: 95, icon: '📦' },
  // level = 0–100, icon = any emoji
]
```

### Add a new project

```js
export const projects = [
  // ... existing projects ...
  {
    id: 4,                        // must be unique
    title: 'My New Project',
    url: 'https://myproject.com',
    description: 'Short description here.',
    category: 'Packaging',        // 'Packaging' | 'Web Dev' | 'Android'
    tags: ['Design', 'UAE'],
    emoji: '🔥',
    accentColor: '#E8B450',
    gradient: 'linear-gradient(135deg, #1a1200, #2a1f00)',
  },
]
```

### Add a new work experience

```js
export const experiences = [
  {
    title: 'Senior Packaging Designer',
    company: 'New Company',
    companyUrl: 'https://company.com',  // or null
    location: 'Dubai, UAE',
    period: 'Jan 2026 – Present',
    current: true,
    icon: '📦',
    points: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
    ],
  },
  // ... rest
]
```

### Edit the tools chips (Skills section)

```js
export const tools = [
  'Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW',
  // Add or remove tools freely
]
```

---

## 🎨 How to Change Colors

All colors are CSS custom properties in `src/index.css` at the top inside `:root { }`.

```css
:root {
  --gold:        #E8B450;   /* Primary brand accent — change to any hex */
  --gold-light:  #F5D27A;
  --gold-dark:   #C09230;
  --purple:      #8B5CF6;   /* Tech / secondary accent */
  --cyan:        #22D3EE;   /* Energy highlight */
  --bg-950:      #030812;   /* Darkest background */
  /* ... */
}
```

**To switch to a blue accent instead of gold:**
```css
--gold:        #3B82F6;
--gold-light:  #93C5FD;
--gold-dark:   #1D4ED8;
```

---

## 🔤 How to Change Fonts

1. Open `index.html`
2. Replace the Google Fonts `<link>` with your chosen fonts
3. Update the font variables in `src/index.css`:

```css
:root {
  --font-display: 'Your Font', sans-serif;
  --font-mono:    'Your Mono Font', monospace;
}
```

---

## 🖼 How to Add Your Profile Photo

Currently the avatar shows your initials. To use a real photo:

1. Add your photo to `src/assets/` e.g. `src/assets/profile.jpg`
2. Open `src/components/About.jsx`
3. Import the image and replace the initials block:

```jsx
// At the top of About.jsx
import profilePhoto from '../assets/profile.jpg'

// Replace this:
<span className="avatar-initials">{personalInfo.initials}</span>
<p className="avatar-title">{personalInfo.tagline}</p>

// With this:
<img
  src={profilePhoto}
  alt="Asifur Rahman Noyon"
  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
/>
```

---

## 🌐 Deployment

### Deploy to Netlify (recommended — free)

1. Create a free account at [netlify.com](https://netlify.com)
2. Click **"Add new site" → "Import an existing project"**
3. Connect your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Add your custom domain `asifurrahman-noyon.com` in **Domain settings**

### Deploy to Vercel (free)

```bash
npm install -g vercel
vercel
# Follow the prompts — it auto-detects Vite
```

Then add your domain in the Vercel dashboard.

### Deploy to GitHub Pages

```bash
# 1. Add base to vite.config.js if using a /repo-name/ path
# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# 4. Build and deploy
npm run build
npm run deploy
```

### Deploy via FTP / cPanel (shared hosting)

```bash
npm run build
```

Upload everything inside the `dist/` folder to your hosting's `public_html/` directory.

---

## 🔍 SEO Checklist

- [x] `<title>` — contains name + title + location
- [x] `<meta name="description">` — 150 chars, keyword-rich
- [x] `<meta name="keywords">` — relevant keywords
- [x] Open Graph tags — for LinkedIn, Facebook, WhatsApp previews
- [x] Twitter Card — for Twitter/X previews
- [x] Schema.org JSON-LD — Person schema for Google rich results
- [x] `<link rel="canonical">` — set to your domain

**After deploying, update these in `index.html`:**
- Replace `https://asifurrahman-noyon.com/og-image.jpg` with a real 1200×630 image
- Submit sitemap to Google Search Console

---

## 📋 Component Quick Reference

| Component | What to edit | Where |
|---|---|---|
| Navbar | Links, logo initials | `src/data/data.js` → `navLinks` |
| Hero | Name, roles, stats, CTAs | `src/data/data.js` → `personalInfo` |
| About | Bio text, stats, languages | `src/data/data.js` → `personalInfo`, `languages` |
| Skills | Skill names & levels | `src/data/data.js` → `designSkills`, `techSkills` |
| Tools chips | Tool names | `src/data/data.js` → `tools` |
| Experience | Jobs & bullet points | `src/data/data.js` → `experiences` |
| Portfolio | Projects, URLs, categories | `src/data/data.js` → `projects` |
| Education | Degrees & certs | `src/data/data.js` → `education` |
| Awards | Award name & description | `src/data/data.js` → `awards` |
| Contact | Email, phone, location | `src/data/data.js` → `personalInfo` |

---

## 🛠 Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | ^18.2.0 | UI library |
| react-dom | ^18.2.0 | DOM rendering |
| react-icons | ^5.0.1 | Icon library (available for extension) |
| vite | ^5.0.8 | Build tool & dev server |
| @vitejs/plugin-react | ^4.2.1 | React fast-refresh plugin |

---

## 📄 License

Personal portfolio — all rights reserved © Asifur Rahman Noyon.  
Feel free to fork and adapt the structure for your own portfolio with attribution.

---

## 💬 Questions?

📧 [asifurrahman.noyon@gmail.com](mailto:asifurrahman.noyon@gmail.com)  
⭐ [fiverr.com/ashipur_rahman](https://fiverr.com/ashipur_rahman)

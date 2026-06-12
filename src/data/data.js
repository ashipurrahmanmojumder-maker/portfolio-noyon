// ════════════════════════════════════════════════════════════
//  PORTFOLIO DATA — Edit everything here to update your site
//  Each section is clearly labelled. No code knowledge needed.
// ════════════════════════════════════════════════════════════

// ─── PERSONAL INFO ───────────────────────────────────────────
export const personalInfo = {
  name: 'Asifur Rahman Noyon',
  firstName: 'Asifur Rahman',
  lastName: 'Noyon',
  initials: 'ARN',
  tagline: 'Packaging Designer & IT Expert',

  // Roles that cycle in the hero typewriter
  roles: [
    'Packaging Designer',
    'Brand Identity Expert',
    'Android Developer',
    'MERN Stack Developer',
    'AI-Powered Creator',
  ],

  location: 'Abu Dhabi, UAE',
  locationFlag: '🇦🇪',
  email: 'asifurrahman.noyon@gmail.com',
  phone: '+971 54 526 1933',
  domain: 'asifurrahman-noyon.com',
  fiverr: 'https://fiverr.com/ashipur_rahman',
  fiverrHandle: 'ashipur_rahman',

  // Short bio shown in the About section
  bio: `Creative Packaging Designer with 1+ year UAE experience, having completed branding for 100+ companies — box packaging, paper bags & complete brand identity design. Combined expertise in Android (Java/Firebase) & web development (MERN Stack). Founder of ENOY SOFT & ENOY TECH. Award-winning developer delivering compelling designs and digital solutions globally.`,

  // Quick stat cards in Hero & About
  stats: [
    { number: '100+', label: 'Companies Branded', icon: '🏭' },
    { number: '3+',   label: 'Years Experience',  icon: '⏳' },
    { number: '4',    label: 'Core Expertise',     icon: '🎯' },
    { number: '1',    label: 'Award Won',           icon: '🏆' },
  ],

  // Available for work? Toggle true/false
  available: true,
};

// ─── NAV LINKS ────────────────────────────────────────────────
export const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio',  href: '#portfolio'  },
  { label: 'Packaging',  href: '#packaging'  },
  { label: 'Education',  href: '#education'  },
  { label: 'Contact',    href: '#contact'    },
];

// ─── DESIGN SKILLS ───────────────────────────────────────────
export const designSkills = [
  { name: 'Packaging Design',   level: 95, icon: '📦' },
  { name: 'Adobe Illustrator',  level: 90, icon: '🎨' },
  { name: 'Label & Print Design', level: 90, icon: '🏷️' },
  { name: 'Adobe Photoshop',    level: 85, icon: '🖼️' },
  { name: 'CorelDRAW / Canva',  level: 80, icon: '✏️' },
];

// ─── TECH SKILLS ─────────────────────────────────────────────
export const techSkills = [
  { name: 'Android Dev (Java / Firebase)', level: 88, icon: '📱' },
  { name: 'HTML / CSS / JavaScript',       level: 85, icon: '💻' },
  { name: 'Web Development (MERN Stack)',  level: 82, icon: '🌐' },
  { name: 'React / Next.js',              level: 75, icon: '⚛️' },
];

// ─── TOOLS (shown as chips) ──────────────────────────────────
export const tools = [
  'Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW', 'Canva',
  'Android Studio', 'Java', 'Firebase', 'XML',
  'React', 'Next.js', 'Node.js', 'MongoDB', 'Express',
  'HTML5', 'CSS3', 'JavaScript', 'Git / GitHub', 'Figma',
  'AI Tools', 'Midjourney', 'ChatGPT',
];

// ─── WORK EXPERIENCE ─────────────────────────────────────────
export const experiences = [
  {
    title: 'Packaging Designer',
    company: 'Al Misk Boxes',
    companyUrl: 'https://www.almiskboxes.com/',
    location: 'Ajman, UAE',
    period: 'Jun 2025 – Present',
    current: true,
    icon: '📦',
    points: [
      'Completed branding for 100+ companies — boxes, paper bags & full brand identity',
      'Designed dielines, labels & print-ready artwork for luxury product lines',
      'End-to-end workflow: concept → structural template → production files',
    ],
  },
  {
    title: 'Freelance Packaging Designer',
    company: 'Fiverr',
    companyUrl: 'https://fiverr.com/ashipur_rahman',
    location: 'Remote / Global',
    period: '2024 – Present',
    current: true,
    icon: '🌍',
    points: [
      'Offering packaging & label design services to global clients',
      'Specializing in box dielines, brand identity & product labels',
      'Delivering Adobe Illustrator & print-ready source files',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed / Remote',
    companyUrl: null,
    location: 'Remote',
    period: '2022 – Present',
    current: true,
    icon: '💻',
    points: [
      'Built & launched client websites including e-commerce platforms',
      'Projects: miskblooming.com & imrafperfume.com',
      'Delivered responsive, performance-optimized websites using MERN Stack',
    ],
  },
  {
    title: 'Founder & Android Developer',
    company: 'ENOY SOFT / ENOY TECH',
    companyUrl: null,
    location: 'Bangladesh',
    period: '2021 – 2023',
    current: false,
    icon: '🚀',
    points: [
      'Founded software company building Android apps for clients',
      'Won Bongo Academy Health Solution App Contest',
      'Developed & deployed multiple production mobile apps using Java & Firebase',
    ],
  },
];

// ─── PORTFOLIO PROJECTS ───────────────────────────────────────
// Add or remove projects here. The category field controls filters.
// accentColor sets the card's theme color.
export const projects = [
  {
    id: 1,
    title: 'Al Misk Boxes',
    url: 'https://almiskboxes.com',
    description:
      '100+ companies\' packaging — boxes, paper bags & complete branding. Print-ready dielines & artwork for luxury UAE brands.',
    category: 'Packaging',
    tags: ['Box Design', 'Dielines', 'Branding', 'UAE'],
    emoji: '📦',
    accentColor: '#E8B450',
    gradient: 'linear-gradient(135deg, #1a1200, #2a1f00)',
  },
  {
    id: 2,
    title: 'Misk Blooming',
    url: 'https://miskblooming.com',
    description:
      'Full e-commerce website for a lifestyle brand with responsive UI/UX design, product catalog & smooth checkout flow.',
    category: 'Web Dev',
    tags: ['E-Commerce', 'React', 'UI/UX', 'Lifestyle Brand'],
    emoji: '🌸',
    accentColor: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #0f0720, #1a0e38)',
  },
  {
    id: 3,
    title: 'Imraf Perfume',
    url: 'https://imrafperfume.com',
    description:
      'Premium brand website with product showcase, e-commerce & luxury UI for a UAE perfume brand.',
    category: 'Web Dev',
    tags: ['E-Commerce', 'Brand', 'UAE', 'Luxury'],
    emoji: '🫧',
    accentColor: '#22D3EE',
    gradient: 'linear-gradient(135deg, #001920, #002a38)',
  },
  // ─── Add your new projects below ──────────────────────────
  // {
  //   id: 4,
  //   title: 'Your Project',
  //   url: 'https://yourproject.com',
  //   description: 'Short project description here.',
  //   category: 'Packaging',      // 'Packaging' | 'Web Dev' | 'Android'
  //   tags: ['Tag1', 'Tag2'],
  //   emoji: '🔥',
  //   accentColor: '#E8B450',
  //   gradient: 'linear-gradient(135deg, #1a1200, #2a1f00)',
  // },
];

// ─── EDUCATION ───────────────────────────────────────────────
export const education = [
  {
    degree: 'HSC — Science',
    institution: 'Bangladesh Board of Education',
    year: '2023',
    gpa: '4.83 / 5.00',
    type: 'academic',
    icon: '🎓',
  },
  {
    degree: 'SSC — Science',
    institution: 'Bangladesh Board of Education',
    year: '2021',
    gpa: '4.28 / 5.00',
    type: 'academic',
    icon: '🎓',
  },
  {
    degree: 'Android App Development',
    institution: 'Bongo Academy — Bangladesh',
    year: '',
    gpa: null,
    type: 'certificate',
    icon: '📱',
  },
  {
    degree: 'Web Development — Zero to Hero',
    institution: 'Programming Hero — Bangladesh',
    year: '',
    gpa: null,
    type: 'certificate',
    icon: '💻',
  },
];

// ─── AWARDS ──────────────────────────────────────────────────
export const awards = [
  {
    title: 'Health Solution App Contest — Winner',
    org: 'Bongo Academy',
    description:
      'Awarded for outstanding innovation in mobile health technology and app design.',
    icon: '🏆',
    year: '2022',
  },
];

// ─── LANGUAGES ───────────────────────────────────────────────
export const languages = [
  { name: 'Bengali', level: 'Native',       flag: '🇧🇩', percent: 100 },
  { name: 'English', level: 'Professional', flag: '🇬🇧', percent: 85  },
  { name: 'Hindi',   level: 'Professional', flag: '🇮🇳', percent: 80  },
  { name: 'Arabic',  level: 'Basic',        flag: '🇦🇪', percent: 30  },
];

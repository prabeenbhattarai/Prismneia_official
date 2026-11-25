import {
  Code2,
  Smartphone,
  Palette,
  Database,
  BrainCircuit,
  Cloud,
  ShoppingCart,
  HeartPulse,
  Landmark,
  Building2,
  Rocket,
  ShieldCheck,
  Wand2,
  Repeat2,
  Fingerprint,
  Mail,
  Puzzle,
  Sparkles,
  FileText,
  FilePen,
  Layers,
  Lock,
  type LucideIcon,
} from "lucide-react";

export type NavLeaf = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type NavColumn = {
  heading: string;
  items: NavLeaf[];
};

export type MegaMenuData = {
  label: string;
  columns: NavColumn[];
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    href: string;
  };
};

export const servicesMenu: MegaMenuData = {
  label: "Services",
  columns: [
    {
      heading: "Build",
      items: [
        {
          title: "Web Development",
          description: "Fast, scalable sites & web apps built on modern stacks.",
          href: "/services#web-development",
          icon: Code2,
        },
        {
          title: "Mobile App Development",
          description: "Native & cross-platform apps for iOS and Android.",
          href: "/services#mobile-app-development",
          icon: Smartphone,
        },
        {
          title: "UI/UX Design",
          description: "Research-led design systems that convert and delight.",
          href: "/services#ui-ux-design",
          icon: Palette,
        },
      ],
    },
    {
      heading: "Modernize",
      items: [
        {
          title: "Custom CRM & Software",
          description: "Bespoke systems tailored to how your business runs.",
          href: "/services#custom-crm-software",
          icon: Database,
        },
        {
          title: "AI Integration",
          description: "Bring AI into legacy platforms without a rebuild.",
          href: "/services#ai-integration",
          icon: BrainCircuit,
        },
        {
          title: "Cloud & DevOps",
          description: "Infrastructure, CI/CD and reliability engineering.",
          href: "/services#cloud-devops",
          icon: Cloud,
        },
      ],
    },
  ],
  featured: {
    eyebrow: "Free consultation",
    title: "AI Readiness Audit",
    description: "A 30-minute session to map where AI can save your team the most hours.",
    ctaLabel: "Book your audit",
    href: "/contact",
  },
};

export const solutionsMenu: MegaMenuData = {
  label: "Solutions",
  columns: [
    {
      heading: "By industry",
      items: [
        {
          title: "Startups & Founders",
          description: "MVPs shipped fast, built to scale when you raise.",
          href: "/solutions#startups-founders",
          icon: Rocket,
        },
        {
          title: "Retail & eCommerce",
          description: "Storefronts, inventory and checkout that just work.",
          href: "/solutions#retail-ecommerce",
          icon: ShoppingCart,
        },
        {
          title: "Healthcare Providers",
          description: "Secure, compliant patient & practice systems.",
          href: "/solutions#healthcare",
          icon: HeartPulse,
        },
      ],
    },
    {
      heading: "By industry",
      items: [
        {
          title: "Finance & Fintech",
          description: "Robust, auditable platforms for regulated teams.",
          href: "/solutions#finance-fintech",
          icon: Landmark,
        },
        {
          title: "Government & Enterprise",
          description: "Large-scale systems with security-first delivery.",
          href: "/solutions#government-enterprise",
          icon: Building2,
        },
        {
          title: "Legacy Modernization",
          description: "Migrate ageing systems without disrupting the business.",
          href: "/solutions#legacy-modernization",
          icon: ShieldCheck,
        },
      ],
    },
  ],
  featured: {
    eyebrow: "Coming soon",
    title: "Case studies, on their way",
    description: "We're compiling real project results as they ship. Check back soon.",
    ctaLabel: "See case studies",
    href: "/case-studies",
  },
};

export const webMenu: MegaMenuData = {
  label: "Products",
  columns: [
    {
      heading: "AiTexTools",
      items: [
        {
          title: "Humanizer",
          description: "Turn AI-sounding text into natural, human writing.",
          href: "/aitextools#humanizer",
          icon: Wand2,
        },
        {
          title: "Paraphraser",
          description: "Rewrite any passage while keeping the meaning intact.",
          href: "/aitextools#paraphraser",
          icon: Repeat2,
        },
        {
          title: "AI Detector",
          description: "Check any text for AI-generated content in seconds.",
          href: "/aitextools#detector",
          icon: Fingerprint,
        },
        {
          title: "Email Writer",
          description: "Draft clear, on-tone emails without starting from blank.",
          href: "/aitextools#email",
          icon: Mail,
        },
      ],
    },
    {
      heading: "PDFella",
      items: [
        {
          title: "Edit PDF",
          description: "Change text, sign and annotate right in your browser.",
          href: "/pdfella#edit",
          icon: FilePen,
        },
        {
          title: "Convert",
          description: "PDF to Word and images, and back again.",
          href: "/pdfella#convert",
          icon: FileText,
        },
        {
          title: "Organise",
          description: "Merge, split and compress your documents.",
          href: "/pdfella#organise",
          icon: Layers,
        },
        {
          title: "Security",
          description: "Protect, unlock and redact sensitive files.",
          href: "/pdfella#security",
          icon: Lock,
        },
      ],
    },
  ],
  featured: {
    eyebrow: "Our products",
    title: "AiTexTools and PDFella",
    description: "Two focused tools we build and run ourselves: one for writing, one for documents.",
    ctaLabel: "Explore PDFella",
    href: "/pdfella",
  },
};

export const resourceLinks: NavLeaf[] = [
  { title: "Case Studies", description: "Real projects, real results.", href: "/case-studies", icon: Sparkles },
  { title: "Blog", description: "Notes on shipping software well.", href: "/blog", icon: Puzzle },
  { title: "Careers", description: "Join a small, senior team.", href: "/careers", icon: Rocket },
];

export type ServiceFeature = {
  id: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  tag: string;
};

export const serviceFeatures: ServiceFeature[] = [
  {
    id: "web-development",
    index: "01",
    tag: "web.dev",
    title: "Web Development",
    summary: "Marketing sites to complex web apps",
    description:
      "We design and engineer fast, accessible websites and web applications on Next.js and modern frameworks, built to rank, load instantly, and scale with your traffic.",
    bullets: ["Next.js & React engineering", "Headless CMS integration", "Core Web Vitals tuned for SEO", "E-commerce & booking systems"],
    icon: Code2,
  },
  {
    id: "mobile-app-development",
    index: "02",
    tag: "mobile.app",
    title: "Mobile App Development",
    summary: "iOS, Android & cross-platform",
    description:
      "From concept to App Store, we build native-feeling mobile apps with React Native and Flutter that your customers actually enjoy using.",
    bullets: ["React Native & Flutter", "Offline-first architecture", "Push notifications & analytics", "App Store & Play Store launch"],
    icon: Smartphone,
  },
  {
    id: "ui-ux-design",
    index: "03",
    tag: "ui.ux",
    title: "UI/UX Design",
    summary: "Interfaces people trust immediately",
    description:
      "Our design team maps user journeys before a single pixel is placed, delivering interfaces backed by research and tested with real users.",
    bullets: ["Design systems & component libraries", "User research & usability testing", "Prototyping in Figma", "Accessibility (WCAG 2.1 AA)"],
    icon: Palette,
  },
  {
    id: "custom-crm-software",
    index: "04",
    tag: "crm.custom",
    title: "Custom CRM & Software",
    summary: "Systems that fit how you actually work",
    description:
      "Off-the-shelf software forces you to change how you work. We build bespoke CRMs, ERPs and internal tools shaped around your existing processes.",
    bullets: ["Bespoke CRM & ERP builds", "Role-based permissions", "Third-party API integrations", "Data migration from legacy tools"],
    icon: Database,
  },
  {
    id: "ai-integration",
    index: "05",
    tag: "ai.integrate",
    title: "AI Integration",
    summary: "Bring AI into what you already run",
    description:
      "We retrofit AI (chat assistants, document automation, predictive insights) into your existing platforms without a costly rebuild.",
    bullets: ["LLM & agent integration", "Workflow & document automation", "AI-assisted search & support", "Model evaluation & guardrails"],
    icon: BrainCircuit,
  },
  {
    id: "cloud-devops",
    index: "06",
    tag: "cloud.ops",
    title: "Cloud & DevOps",
    summary: "Infrastructure that doesn't wake you up at 2am",
    description:
      "Reliable, secure infrastructure on AWS, Azure or GCP with CI/CD pipelines, monitoring and cost optimisation baked in from day one.",
    bullets: ["AWS / Azure / GCP architecture", "CI/CD pipelines", "Monitoring & alerting", "Security & cost audits"],
    icon: Cloud,
  },
];

export type AiToolFeature = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  href: string;
};

export const aiTexToolsFeatures: AiToolFeature[] = [
  {
    id: "humanizer",
    name: "Humanizer",
    tagline: "Sounds like you, not a model",
    description: "Rewrites AI-generated text so it reads naturally and passes AI detectors and human editors alike.",
    bullets: [
      "Keeps your meaning, changes the voice",
      "Tune tone: casual, professional, academic",
      "Works on paragraphs or full documents",
      "Built-in AI-detector check before you export",
    ],
    icon: Wand2,
    href: "/contact",
  },
  {
    id: "paraphraser",
    name: "Paraphraser",
    tagline: "Same meaning, fresh wording",
    description: "Rephrase sentences, paragraphs or whole articles instantly, in the tone you choose.",
    bullets: [
      "Sentence, paragraph or full-article modes",
      "Synonym slider from subtle to heavy rewrite",
      "Plagiarism-safe rewording",
      "One-click revert to original text",
    ],
    icon: Repeat2,
    href: "/contact",
  },
  {
    id: "detector",
    name: "AI Detector",
    tagline: "Know what's AI-written",
    description: "Paste any text and get an instant, sentence-level AI-probability breakdown.",
    bullets: [
      "Sentence-by-sentence AI-probability score",
      "Detects output from major AI models",
      "Flags mixed human/AI paragraphs",
      "Exportable report for teams & educators",
    ],
    icon: Fingerprint,
    href: "/contact",
  },
  {
    id: "email",
    name: "Email Writer",
    tagline: "Inbox-ready in one prompt",
    description: "Draft, reply to and polish emails in your own voice, no blank page required.",
    bullets: [
      "Draft from a one-line prompt",
      "Reply-in-thread with matched tone",
      "Save your own voice as a reusable style",
      "Subject line & follow-up suggestions",
    ],
    icon: Mail,
    href: "/contact",
  },
];

export const processSteps = [
  { step: "01", title: "Discover", description: "We map your goals, users and existing systems before writing a line of code." },
  { step: "02", title: "Design", description: "Wireframes and prototypes validated with your team, not guessed at." },
  { step: "03", title: "Build", description: "Agile sprints with weekly demos, so you see progress, not just promises." },
  { step: "04", title: "Launch & Support", description: "We ship, monitor and keep improving: real humans, real SLAs." },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "React Native",
  "Flutter",
  "AWS",
  "PostgreSQL",
  "OpenAI",
  "Anthropic",
  "Docker",
  "Supabase",
];

export const SITE_META = {
  brandName: "Sivabalan",
  email: "uixsiva@gmail.com",
  phone: "8110001985",
  whatsappUrl: "https://wa.me/918110001985",
  resumeUrl: "/media/resume/Sivabalan_Resume.pdf",
  calUrl: "https://app.cal.com/dean-n89nvg/30min/embed?layout=month_view&embedType=inline",
  calLink: "https://cal.com/dean-n89nvg/30min",
};

export const SOCIAL_LINKS = [
  { name: "WhatsApp", label: "WhatsApp", url: SITE_META.whatsappUrl, key: "whatsapp" },
  // Hidden for future use
  // { name: "Dribbble", label: "Dribbble", url: "https://dribbble.com/uixsiva", key: "dribbble" },
  // { name: "X", label: "X(Twitter)", url: "https://dribbble.com/uixsiva", key: "x" },
  { name: "Instagram", label: "Instagram", url: "https://www.instagram.com/uixsiva/", key: "instagram" },
  { name: "Linkedin", label: "Linkedin", url: "https://www.linkedin.com/in/uixsiva", key: "linkedin" },
  // { name: "Behance", label: "Behance", url: "https://www.behance.net/uixsiv", key: "facebook" },
];

export const PROJECTS = [
  {
    slug: "zeus-trader",
    oldSlug: "habitate",
    title: "ZEUS TRADER",
    category: "Crypto Trading Platform",
    shortCategory: "Web & Mobile App",
    cardCategory: "Crypto Platform",
    cover: "/media/images/project-habitate-cover.jpg",
    description:
      "ZeusTrader is a modern cryptocurrency trading platform designed to simplify digital asset trading. It features intuitive interfaces for spot and derivatives trading, real-time market insights, portfolio management, and secure account workflows, delivering a seamless trading experience across web and mobile.",
    buttonText: "View Figma Design →",
    liveDemo: "https://www.figma.com/design/5JkuHVO1DNxAzy5ZNQ7sqW/All-Design-Files?node-id=12-2519&t=QNbpOt4JU6gmvf0F-1",
    services: "UI/UX & Platform Design",
    client: "ZeusTrade",
    duration: "6 Weeks",
    date: "2024",
    gallery: [
      { src: "/media/images/habitate-1.jpg", layout: "full" },
      { src: "/media/images/habitate-2.jpg", layout: "half" },
      { src: "/media/images/habitate-3.jpg", layout: "half" },
      { src: "/media/images/habitate-4.jpg", layout: "full" },
    ],
  },
  {
    slug: "bitlon",
    oldSlug: "pixel-store",
    title: "BITLON",
    category: "Mobile App Design",
    shortCategory: "Mobile App",
    cardCategory: "Crypto Mobile App",
    cover: "/media/images/project-pixel-cover.jpg",
    description:
      "Bitlon is a mobile cryptocurrency trading application designed to simplify digital asset management and market exploration. It features an intuitive dashboard, cryptocurrency market listings, trading access, portfolio information, transaction history, and wallet management.",
    buttonText: "View Figma Design",
    liveDemo: "https://www.figma.com/design/5JkuHVO1DNxAzy5ZNQ7sqW/All-Design-Files?node-id=0-1&t=QNbpOt4JU6gmvf0F-1",
    services: "Mobile UI/UX Design",
    client: "Bitlon",
    duration: "5 Weeks",
    date: "2024",
    gallery: [
      { src: "/media/images/pixel-1.jpg", layout: "full" },
      { src: "/media/images/pixel-2.jpg", layout: "half" },
      { src: "/media/images/pixel-3.jpg", layout: "half" },
      { src: "/media/images/pixel-4.jpg", layout: "full" },
    ],
  },
  {
    slug: "codelytix-labs",
    oldSlug: "shipit",
    title: "CODELYTIX LABS",
    category: "Learning Management Platform",
    shortCategory: "LMS Platform",
    cardCategory: "Web & Dashboard",
    cover: "/media/images/project-shipit-cover.jpg",
    description:
      "Codelytix Labs is a modern learning management platform designed to enhance the digital learning experience. It features course progress tracking, assignments, quizzes, projects, upcoming schedules, learning streaks, and an organized dashboard for managing learning activities.",
    buttonText: "View Figma Design",
    liveDemo: "https://www.figma.com/design/OsBVNbfUJmzjs0MVj2Db90/Codelytix-Labs?node-id=0-1&t=COqaxrbvyWhnGKJS-1",
    services: "Design System & Dashboard",
    client: "Codelytix Labs",
    duration: "4 Weeks",
    date: "2024",
    gallery: [
      { src: "/media/images/shipit-1.jpg", layout: "full" },
      { src: "/media/images/shipit-2.jpg", layout: "half" },
      { src: "/media/images/shipit-3.jpg", layout: "half" },
      { src: "/media/images/shipit-4.jpg", layout: "full" },
    ],
  },
  {
    slug: "bitlon-exchange",
    oldSlug: "hifi-store",
    title: "BITLON",
    category: "Crypto Trading Platform",
    shortCategory: "Web & Mobile App",
    cardCategory: "Crypto Trading App",
    cover: "/media/images/project-hifi-cover.jpg",
    description:
      "Bitlon is a mobile cryptocurrency trading application designed to simplify digital asset management and market exploration. It features an intuitive dashboard, cryptocurrency market listings, trading access, portfolio information, transaction history, and wallet management.",
    buttonText: "View Figma Design",
    liveDemo: "https://www.figma.com/design/5JkuHVO1DNxAzy5ZNQ7sqW/All-Design-Files?node-id=0-1&t=QNbpOt4JU6gmvf0F-1",
    services: "Crypto App Design",
    client: "Bitlon",
    duration: "4 Weeks",
    date: "2024",
    gallery: [
      { src: "/media/images/hifi-1.jpg", layout: "full" },
      { src: "/media/images/hifi-2.jpg", layout: "half" },
      { src: "/media/images/hifi-3.jpg", layout: "half" },
      { src: "/media/images/hifi-4.jpg", layout: "full" },
    ],
  },
];

export const ABOUT_STATS_LEFT = [
  { target: 20, suffix: "+", label: "Projects Completed" },
  { target: 5, suffix: "+", label: "Years of Experience" },
  { target: 5, suffix: "", label: "Star Client Reviews" },
];

export const ABOUT_STATS_RIGHT = [
  { target: 98, suffix: "%", label: "Client Retention Rate" },
  { target: 60, suffix: "+", label: "Happy Customers" },
  { target: 5, suffix: "+", label: "Industry's Served" },
];

export const MY_STACK = [
  { name: "Adobe Photoshop", role: "Image Editing & Graphic Design", iconKey: "photoshop" },
  { name: "Adobe Illustrator", role: "Logo, Icon & Vector Design", iconKey: "illustrator" },
  { name: "Figma", role: "UI/UX Design & Prototyping", iconKey: "figma" },
  { name: "Google Stitch", role: "UI Screen Design & Prototyping", iconKey: "stitch" },
  { name: "Claude", role: "AI-Assisted Wireframing & Design Ideation", iconKey: "claude" },
  { name: "After Effects", role: "Motion Graphics & Animation", iconKey: "aftereffects" },
  { name: "Premiere Pro", role: "Video Editing & Post Production", iconKey: "premiere" },
  { name: "Antigravity", role: "AI Vibe Coding", iconKey: "antigravity" },
];

export const MY_EXPERIENCE = [
  {
    role: "Senior UX/UI Designer",
    company: "Pixel Web Solutions",
    year: "June 2024 - Present",
    location: "Kochadai, Madurai",
  },
  {
    role: "UX/Graphic Designer",
    company: "Trioangle Technology",
    year: "Dec 2023 - May 2024",
    location: "Gandhi Nagar, Madurai",
  },
  {
    role: "UI Designer",
    company: "Intronsoft",
    year: "Aug 2021 - Dec 2023",
    location: "Bibikulam, Madurai",
  },
];

export const SERVICES_DATA = [
  {
    num: "01",
    title: "WEB DESIGN",
    badge: "Design That Convert",
    description:
      "I'll build you a beautiful website that's fast, easy to use, and turns visitors into customers.",
    tags: ["Custom Websites", "Website Redesign", "Template Customization", "Landing Pages"],
    image3d: "/media/images/service-3d-web.png",
    videoGreen: "/media/videos/service-web-green.mp4",
  },
  {
    num: "02",
    title: "BRANDING",
    badge: "Build a Visual Voice",
    description:
      "I'll design a unique brand identity that makes you memorable and connects with your audience.",
    tags: ["Logo Design", "Brand Guidelines", "Color & Typography", "Business Cards"],
    image3d: "/media/images/service-3d-branding.png",
    videoGreen: "/media/videos/service-branding-green.mp4",
  },
  {
    num: "03",
    title: "PRODUCT DESIGN",
    badge: "Design for impact",
    description:
      "I'll design intuitive digital products that users love and that solve real problems for your customers.",
    tags: ["Mobile App Design", "Dashboard Design", "User Interface Design", "Prototype Development"],
    image3d: "/media/images/service-3d-product.png",
    videoGreen: "/media/videos/service-product-green.mp4",
  },
  {
    num: "04",
    title: "GRAPHICS DESIGN",
    badge: "Designs That Communicate",
    description:
      "I'll design eye-catching visuals for your marketing, social media, and print materials that get noticed.",
    tags: ["Social Media Graphics", "Marketing Materials", "Illustrations", "Print Design"],
    image3d: "/media/images/service-3d-graphics.png",
    videoGreen: "/media/videos/service-graphics-green.mp4",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Let's Talk",
    description:
      "We start with a conversation about your project, goals, and vision to understand exactly what you need.",
    video: "/media/videos/process-1.mp4",
  },
  {
    num: "02",
    title: "Create & Refine",
    description:
      "I design concepts and share them with you. We collaborate, refine, and iterate until everything feels perfect.",
    video: "/media/videos/process-2.mp4",
  },
  {
    num: "03",
    title: "Deliver & Launch",
    description:
      "I hand over final files, guide you through everything, and stay available for any questions or support.",
    video: "/media/videos/process-3.mp4",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      '"Sivabalan designed a clean, modern, and parent-friendly website for our school. Admissions inquiries became much smoother, and everyone appreciated the clarity and fast performance!"',
    name: "Karthikeyan Sundaram",
    role: "Founder of Sethu Matric Hr. Sec. School",
    avatar: "/media/images/client-james.jpg",
  },
  {
    quote:
      '"Best designer we\'ve worked with! Our Zeus Trader platform got a sharp, high-trust interface across web and mobile, and the attention to real-time trading workflows is top-notch."',
    name: "Aravind Krishnan",
    role: "Co-Founder at ZeusTrade",
    avatar: "/media/images/client-james.jpg",
  },
  {
    quote:
      '"The entire design process for Codelytix Labs was effortless. Complex learning workflows were turned into an intuitive dashboard that students genuinely enjoy using every day."',
    name: "Divya Bharathi",
    role: "Product Lead at Codelytix Labs",
    avatar: "/media/images/client-emily.jpg",
  },
  {
    quote:
      '"From early wireframes to the final mobile UI, Bitlon was delivered ahead of schedule with incredible precision. Our users navigated wallets and markets effortlessly from day one."',
    name: "Nandhini Rajendran",
    role: "Founder of Bitlon",
    avatar: "/media/images/client-sarah.jpg",
  },
];

export const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites take 2-4 weeks. Branding takes 1-2 weeks. Graphic design is done within days.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing varies by project scope. I offer packages to fit different budgets. Let's chat about your needs!",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Absolutely! All packages include revisions so we can refine everything until you're completely happy with it.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Just your ideas and examples of designs you like. I'll guide you through the rest!",
  },
];

export const PROJECTS_MARQUEE_FEATURES = [
  { label: "Reliable partner", icon: "handshake" },
  { label: "Senior level quality", icon: "trophy" },
  { label: "Fast execution", icon: "bolt" },
  { label: "System thinking", icon: "layers" },
  { label: "Clear process", icon: "check" },
  { label: "On-brand, every time", icon: "bulb" },
  { label: "Smooth handoff", icon: "sparkles" },
  { label: "Thoughtful feedback", icon: "headphones" },
];

export const SERVICES_MARQUEE_FEATURES = [
  { label: "Ongoing Support", icon: "support" },
  { label: "Brand Consistency", icon: "check" },
  { label: "Client Focused", icon: "heart" },
  { label: "Flexible Packages", icon: "box" },
  { label: "Mobile Responsive", icon: "phone" },
  { label: "SEO Optimized", icon: "search" },
  { label: "Custom Designs", icon: "sparkles" },
];

const ICONS: Record<string, string> = {
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Go": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Postman": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postman.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Leaflet": "https://cdn.simpleicons.org/leaflet",
  "Supabase": "https://cdn.simpleicons.org/supabase",
  "Vercel": "https://cdn.simpleicons.org/vercel/000000",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Android": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "JWT": "https://cdn.simpleicons.org/jsonwebtokens",
  "OpenStreetMap": "https://cdn.simpleicons.org/openstreetmap",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Inertia.js": "https://cdn.simpleicons.org/inertia",
  "Chart.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
};

// Helper: ubah nama string -> object {name, icon} sesuai bentuk yang dipakai komponen
const tech = (name: string) => ({ name, icon: ICONS[name] });

// export const experiences = [
//   {
//     period: "Sep 2024 - Des 2024",
//     role: "Web Developer Intern",
//     company: "Telkom Akses Area Sulbagsel",
//     description: [
//       "Mengembangkan dan melakukan optimalisasi platform aplikasi internal perusahaan berbasis web.",
//       "Berkolaborasi dalam arsitektur logika frontend dan integrasi efisiensi pengiriman data.",
//       "Memastikan antarmuka sistem responsif dan ramah pengguna di berbagai perangkat."
//     ]
//   },
//   {
//     period: "2024",
//     role: "Cloud Computing Cohort",
//     company: "Bangkit Academy",
//     description: [
//       "Mendesain serta mengimplementasikan infrastruktur cloud yang skalabel dan efisien.",
//       "Mengelola deployment aplikasi, arsitektur microservices, dan konfigurasi compute engine.",
//       "Meraih sertifikasi kompetensi keahlian pengelolaan arsitektur cloud tingkat menengah."
//     ]
//   }
// ];

// DATA IKON DI SINI DIGUNAKAN SECARA GLOBAL
export const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS"].map(tech),
  },
  {
    category: "Backend & Databases",
    skills: ["Go", "PHP", "Laravel", "Python", "MySQL", "PostgreSQL", "Firebase", "JWT", "Inertia.js"].map(tech),
  },
  {
    category: "Mobile & Machine Learning",
    skills: ["Kotlin", "Android", "TensorFlow"].map(tech),
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "Postman", "VS Code", "Vercel", "Vite", "Chart.js"].map(tech),
  },
];

export const projects = [
  {
    id: 1,
    title: "PR-PO Document Management Platform",
    category: "Web Developer Internship",
    description: "Platform web untuk memfasilitasi upload dokumen PR-PO (Purchase Requisition-Purchase Order) guna merampingkan proses administrasi antara mitra (mitra) dan tim internal.",
    features: [
      "Developed a web-based platform to facilitate the uploading of PR-PO (Purchase Requisition) documents, streamlining the administration process.",
      "Optimized material request submissions and status updates between partners (mitra) and the internal team.",
      "Integrated Firebase as a real-time database for live submission status updates."
    ],
    metrics: [
      { label: "Duration", value: "Sep - Dec 2024" },
      { label: "Role", value: "Web Developer Intern" }
    ],
    // SEKARANG MENGGUNAKAN OBJEK SEHINGGA DI PROJECTS TINGGAL MANGGIL KATA KUNCI YANG SAMA
    techStack: ["Next.js","React.js", "Firebase", "Tailwind CSS"].map(tech),
    githubUrl: "https://github.com/aidahdzfs/reminder_pr_po"
  },

  {
    id: 2,
    title: "Travel Planner - Realistic Itinerary Builder",
    category: "Fullstack Web App",
    description: "A full-stack trip planner that goes beyond simple itinerary CRUD — it validates whether a daily schedule is physically realistic by combining route optimization algorithms (nearest-neighbor + 2-opt) with real travel-time data from an external routing engine.",
    features: [
      "Implemented nearest-neighbor and 2-opt algorithms for destination ordering, combining Haversine estimation with OpenRouteService's Matrix API.",
      "Built a schedule validator detecting time conflicts, workload overload, and unreachable routes based on real travel-time data.",
      "Designed an interactive map experience with location search, drag-and-drop itinerary reordering, and one-click wishlist-to-schedule promotion.",
      "Designed a RESTful API with JWT authentication and resource-level authorization, backed by a PostgreSQL schema with foreign-key relationships and versioned SQL migrations."
    ],
    metrics: [
      { label: "Optimization Algorithm", value: "Nearest-Neighbor + 2-Opt" },
      { label: "Schedule Validation", value: "3 Constraint Checks (Time, Workload, Route)" }
    ],
    techStack: [
      "Go", "PostgreSQL", "Next.js", "TypeScript", 
      "Tailwind CSS", "Leaflet", "Docker", "JWT", "Vercel"
    ].map(tech),
    githubUrl: "https://github.com/aidahdzfs/travel_planner_project",
    liveUrl: "https://atour-travel-planner.vercel.app"
  },

  {
    id: 3,
    title: "Truck Finance Tracker - Fleet Expense & Revenue Dashboard",
    category: "Fullstack Web App",
    description: "A financial tracking system for trucking company operations that goes beyond basic expense logging — it aggregates income and expenses per vehicle into automated monthly profit/loss reports, with a schema architected from day one to scale into a multi-tenant system.",
    features: [
      "Designed a Service Layer (FinancialReportService) to isolate financial reporting logic from Controllers, enabling reuse across dashboard, reports, and future export features without duplication.",
      "Built a monthly summary engine that aggregates income/expense by category, truck, and date range using Eloquent query scoping and clone-based query isolation.",
      "Architected a database schema with company_id embedded across all transactional tables, preparing the system for multi-company support without future structural migration.",
      "Optimized data loading with Eloquent eager loading to eliminate N+1 query issues on transaction listing pages, and applied intentional denormalization (duplicated type field) to speed up report aggregation queries."
    ],
    metrics: [
      { label: "Architecture Pattern", value: "Service Layer + Dependency Injection" },
      { label: "Report Aggregation", value: "Monthly Income/Expense/Profit by Category & Vehicle" }
    ],
    techStack: [
      "Laravel", "PHP", "Vue.js", "Inertia.js", 
      "Tailwind CSS", "MySQL", "Chart.js"
    ].map(tech),
    githubUrl: "https://github.com/aidahdzfs/truck-finance-tracker"
  },

  {
    id: 4,
    title: "AQI Dashboard - Real-Time Air Quality Monitor",
    category: "Fullstack Web App",
    description: "A real-time air quality dashboard for Indonesian cities, built to demonstrate concurrent programming in Go using goroutines, channels, and sync.WaitGroup to fetch data from multiple locations in parallel via the WAQI API.",
    features: [
    "Interactive Leaflet map with AQI color-coded markers and full pollutant breakdown.",
    "Concurrent data pipeline fetching multiple stations using Go goroutines and buffered channels.",
    "Robust partial failure handling using polymorphic JSON decoding and independent timeouts.",
    "In-memory caching layer with sync.RWMutex, gracefully falling back to cached data when live fetches fail."
  ],
    metrics: [
      { label: "Cities Covered", value: "85+ Stations" },
      { label: "Concurrency Model", value: "Goroutines + Channels" }
    ],
    // DIBUAT STRUKTUR OBJEK YANG SAMA
    techStack: ["Go", "Next.js", "TypeScript", "Tailwind CSS", "Leaflet", "Vercel"].map(tech),
    githubUrl: "https://github.com/aidahdzfs/air-quality-project",
    liveUrl: "https://air-quality-project.vercel.app"
  },
];

// Tambahkan di bagian paling bawah file constants/portofolio.js
export const certificates = [
  {
    id: 1,
    title: "Mobile Development Certified Graduate",
    issuer: "Bangkit Academy led by Google, GoTo, Traveloka",
    issuedDate: "2024",
    credentialUrl: null,
    pdfUrl: "/bangkit_sertif.pdf",
    image: "/cert1.jpg" 
  },
  {
    id: 2,
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    issuedDate: "2027",
    credentialUrl: "https://www.dicoding.com/certificates/MRZM8V0M0ZYQ",
    pdfUrl: null,
    image: "/cert2.jpg"
  },
  {
    id: 3,
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    issuedDate: "2027",
    credentialUrl: "https://www.dicoding.com/certificates/N9ZOOL446ZG5",
    pdfUrl: null,
    image: "/cert3.jpg"
  },
  {
    id: 4,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    issuedDate: "2027",
    credentialUrl: "https://www.dicoding.com/certificates/NVP7QGDNWZR0",
    pdfUrl: null,
    image: "/cert4.jpg"
  },
  {
    id: 5,
    title: "Belajar Pengembangan Aplikasi Android Intermediate",
    issuer: "Dicoding Indonesia",
    issuedDate: "2027",
    credentialUrl: "https://www.dicoding.com/certificates/07Z604V3RZQR",
    pdfUrl: null,
    image: "/cert4.jpg"
  },
];

export const otherProjects = [
  {
    id: 1,
    title: "SkinScan",
    description: "Developed a mobile application that utilizes Machine Learning to identify various skin diseases from images. This project was part of my focus on integrating AI with Mobile Development to provide accessible healthcare solutions.",
    techStack: ["Kotlin", "Android", "Firebase", "TensorFlow"].map(tech),
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 2,
    title: "Product Management System",
    description: "Built a product management web application implementing full CRUD (Create, Read, Update, Delete) functionality using the MVC architecture. ",
    techStack: ["Laravel", "Tailwind CSS", "PHP"].map(tech),
    githubUrl: "https://github.com/aidahdzfs/technical-test-aksesmu-aidah",
    liveUrl: null
  },
];
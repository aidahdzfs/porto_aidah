// constants/portofolio.js

// KAMUS TUNGGAL — satu-satunya tempat menyimpan URL icon
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
  "Leaflet": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leaflet/leaflet-original.svg",
};

// Helper: ubah nama string -> object {name, icon} sesuai bentuk yang dipakai komponen
const tech = (name: string) => ({ name, icon: ICONS[name] });

export const experiences = [
  {
    period: "Sep 2024 - Des 2024",
    role: "Web Developer Intern",
    company: "Telkom Akses Area Sulbagsel",
    description: [
      "Mengembangkan dan melakukan optimalisasi platform aplikasi internal perusahaan berbasis web.",
      "Berkolaborasi dalam arsitektur logika frontend dan integrasi efisiensi pengiriman data.",
      "Memastikan antarmuka sistem responsif dan ramah pengguna di berbagai perangkat."
    ]
  },
  {
    period: "2024",
    role: "Cloud Computing Cohort",
    company: "Bangkit Academy",
    description: [
      "Mendesain serta mengimplementasikan infrastruktur cloud yang skalabel dan efisien.",
      "Mengelola deployment aplikasi, arsitektur microservices, dan konfigurasi compute engine.",
      "Meraih sertifikasi kompetensi keahlian pengelolaan arsitektur cloud tingkat menengah."
    ]
  }
];

// DATA IKON DI SINI DIGUNAKAN SECARA GLOBAL
export const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Laravel"].map(tech),
  },
  {
    category: "Backend & Cloud Infrastructure",
    skills: ["Python", "Firebase", "MySQL", "PostgreSQL", "Go", "Docker"].map(tech),
  },
  {
    category: "Dev Tools",
    skills: ["VS Code", "Postman", "Git"].map(tech),
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
    title: "AQI Dashboard - Real-Time Air Quality Monitor",
    category: "Fullstack Web App / Concurrent Programming",
    description: "A real-time air quality dashboard for Indonesian cities, built to demonstrate concurrent programming in Go using goroutines, channels, and sync.WaitGroup to fetch data from multiple locations in parallel via the WAQI API.",
    features: [
    "Interactive Leaflet map with AQI color-coded markers and full pollutant breakdown.",
    "Concurrent data pipeline fetching multiple stations using Go goroutines and buffered channels.",
    "Robust partial failure handling using polymorphic JSON decoding and independent timeouts.",
    "Efficient in-memory caching utilizing sync.RWMutex with graceful degradation fallback."
  ],
    metrics: [
      { label: "Cities Covered", value: "85+ Stations" },
      { label: "Concurrency Model", value: "Goroutines + Channels" }
    ],
    // DIBUAT STRUKTUR OBJEK YANG SAMA
    techStack: ["Go", "Next.js", "TypeScript", "Tailwind CSS", "Leaflet", ].map(tech),
    githubUrl: "https://github.com/aidahdzfs/air-quality-project",
    liveUrl: "https://air-quality-project.vercel.app"
  }
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
    // Taruh berkas gambar/screenshot sertifikat Anda di folder public dengan nama cert1.jpg
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
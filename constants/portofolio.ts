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
      "Membangun alur upload dan verifikasi dokumen PR-PO berbasis web untuk menggantikan proses administrasi manual.",
      "Mengoptimalkan alur pengajuan permintaan material serta sinkronisasi status pengajuan antara mitra dan tim internal.",
      "Mengintegrasikan Firebase sebagai basis data real-time untuk pembaruan status pengajuan secara langsung."
    ],
    metrics: [
      { label: "Duration", value: "Sep - Dec 2024" },
      { label: "Role", value: "Web Developer Intern" }
    ],
    // SEKARANG MENGGUNAKAN OBJEK SEHINGGA DI PROJECTS TINGGAL MANGGIL KATA KUNCI YANG SAMA
    techStack: ["React.js", "Firebase"].map(tech),
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "AQI Dashboard - Real-Time Air Quality Monitor",
    category: "Fullstack Web App / Concurrent Programming",
    description: "Dashboard kualitas udara real-time untuk kota-kota di Indonesia, dibangun untuk mendemonstrasikan concurrent programming di Go melalui goroutines, channels, dan sync.WaitGroup guna mengambil data banyak kota secara paralel dari WAQI API.",
    features: [
      "Mengambil data kualitas udara dari 85+ stasiun pemantauan di seluruh Indonesia secara konkuren menggunakan goroutines, channels, dan sync.WaitGroup di backend Go.",
      "Menyediakan peta interaktif (Leaflet) dengan marker AQI berwarna serta breakdown polutan per kota (PM2.5, PM10, O3, NO2, SO2, CO).",
      "Menerapkan partial failure handling sehingga kegagalan fetch satu kota tidak mempengaruhi hasil kota lain, lengkap dengan atribusi sumber data sesuai ketentuan WAQI."
    ],
    metrics: [
      { label: "Cities Covered", value: "85+ Stations" },
      { label: "Concurrency Model", value: "Goroutines + Channels" }
    ],
    // DIBUAT STRUKTUR OBJEK YANG SAMA
    techStack: ["Go", "Next.js", "TypeScript", "Tailwind CSS"].map(tech),
    githubUrl: "https://github.com/aidahdzfs/air-quality-project",
    liveUrl: "https://air-quality-project.vercel.app"
  }
];

// Tambahkan di bagian paling bawah file constants/portofolio.js
export const certificates = [
  {
    id: 1,
    title: "Cloud Computing Certified Graduate",
    issuer: "Bangkit Academy led by Google, GoTo, Traveloka",
    issuedDate: "2024",
    credentialUrl: "https://bangkit.academy",
    // Taruh berkas gambar/screenshot sertifikat Anda di folder public dengan nama cert1.jpg
    image: "/cert1.jpg" 
  },
  {
    id: 2,
    title: "Google Cloud Certified - Associate Cloud Engineer",
    issuer: "Google Cloud",
    issuedDate: "2024",
    credentialUrl: "https://www.credly.com",
    image: "/cert2.jpg"
  }
];
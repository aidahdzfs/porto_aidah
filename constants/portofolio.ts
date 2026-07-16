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
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" }
    ]
  },
  {
    category: "Backend & Cloud Infrastructure",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
    ]
  },
  {
    category: "Dev Tools",
    skills: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postman.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
  }
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
    techStack: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" }
    ],
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
    techStack: [
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
    ],
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
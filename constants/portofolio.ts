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
    title: "AI-Based Vehicle Classification System",
    category: "Thesis Project / Computer Vision",
    description: "Sistem pendukung keputusan cerdas untuk gerbang tol hibrida yang mengintegrasikan visi komputer dan teknologi sensor guna meminimalkan kesalahan input data manual secara real-time.",
    features: [
      "Klasifikasi kendaraan secara instan menggunakan arsitektur YOLOv8.",
      "Pipeline visualisasi data analitik sensor IoT ke dashboard berbasis web.",
      "Stabilitas pengenalan objek tinggi di berbagai intensitas pencahayaan."
    ],
    metrics: [
      { label: "Model Accuracy", value: "94.8%" },
      { label: "Processing Speed", value: "30 FPS" }
    ],
    techStack: ["Python", "Flask", "React.js", "OpenCV", "YOLOv8", "IoT"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 2,
    title: "Panic Buying Anomaly Detection Engine",
    category: "Machine Learning Research",
    description: "Mesin analisis prediktif untuk mendeteksi data transaksi tidak wajar dan perilaku panic buying pada platform e-commerce menggunakan pemrosesan bahasa alami.",
    features: [
      "Ekstraksi sentimen kontekstual ulasan pelanggan e-commerce dengan model IndoBERT.",
      "Isolasi titik data transaksi anomali menggunakan algoritma Isolation Forest.",
      "Validasi tren fluktuasi data retail historis melalui integrasi Google Trends API."
    ],
    metrics: [
      { label: "F1-Score Model", value: "0.89" },
      { label: "Dataset Evaluated", value: "10k+ Rows" }
    ],
    techStack: ["Python", "IndoBERT", "Isolation Forest", "Google Trends", "Scikit-Learn"],
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Corporate Financial Management System",
    category: "Fullstack Web App",
    description: "Sistem pelaporan dan tata kelola arus keuangan internal berbasis web digital untuk merampingkan alur pengajuan reimbursement serta manajemen kas bon.",
    features: [
      "Implementasi arsitektur multi-level approval untuk keamanan otorisasi data.",
      "Penyimpanan aman berkas bukti transaksi menggunakan Firebase Cloud Storage.",
      "Mesin rendering instan laporan keuangan periodik ke dalam format berkas PDF."
    ],
    metrics: [
      { label: "Processing Time", value: "-40% Faster" },
      { label: "Active User Base", value: "150+ Staff" }
    ],
    techStack: ["React.js", "Tailwind CSS", "Firebase", "Express.js", "PDF Engine"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 4,
    title: "SkinScan - Smart Health Platform",
    category: "Bangkit Academy Capstone",
    description: "Inovasi aplikasi seluler deteksi dini kesehatan kulit yang ditenagai oleh model deep learning dan didukung infrastruktur cloud backend yang andal.",
    features: [
      "Deployment model klasifikasi gambar medis via REST API berlatensi rendah.",
      "Arsitektur serverless mikro yang efisien di atas ekosistem Google Cloud Platform.",
      "Manajemen sesi dan proteksi data privasi pengguna menggunakan enkripsi token."
    ],
    metrics: [
      { label: "API Response Latency", value: "< 200ms" },
      { label: "Model Core Size", value: "45 MB" }
    ],
    techStack: ["Google Cloud Platform", "Python", "TensorFlow", "Docker", "Flask", "Kotlin"],
    githubUrl: "https://github.com"
  }
];
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  metrics?: { label: string; value: string }[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string[];
}

// 1. DATA PENGALAMAN (EXPERIENCE)
export const experiences: Experience[] = [
  {
    period: "Sep 2024 - Des 2024",
    role: "Web Developer Intern",
    company: "Samudera Indonesia / Telkom Akses",
    description: [
      "Mengembangkan sistem manajemen keuangan internal perusahaan.",
      "Mengintegrasikan Firebase untuk manajemen basis data real-time.",
      "Mengoptimalkan performa rendering halaman frontend menggunakan React.js."
    ]
  },
  {
    period: "2024",
    role: "Cloud Computing Cohort",
    company: "Bangkit Academy",
    description: [
      "Mendesain arsitektur cloud untuk aplikasi mobile skala kecil hingga menengah.",
      "Mengonfigurasi dan mengelola deployment server pada Google Cloud Platform.",
      "Bekerja sama dalam tim lintas fungsi untuk menyelesaikan proyek capstone inovatif."
    ]
  }
];

// 2. DATA KEAHLIAN (SKILLS)
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend & Languages",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Kotlin"]
  },
  {
    category: "Backend & Cloud",
    skills: ["Python", "Flask", "Google Cloud Platform", "Firebase", "MySQL", "PostgreSQL"]
  },
  {
    category: "Data Science & AI",
    skills: ["Machine Learning", "IndoBERT", "Isolation Forest", "TensorFlow", "OpenCV", "Git"]
  }
];

// 3. DATA PROYEK (HANYA 4 PROYEK AGAR TAMPILAN MAKSIMAL DAN PADAT)
export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Based Vehicle Classification System",
    category: "Thesis Project / Computer Vision",
    description: "Sistem pendukung keputusan cerdas untuk gerbang tol hibrida yang mengintegrasikan visi komputer dan teknologi sensor guna meminimalkan kesalahan input data manual.",
    features: [
      "Klasifikasi kendaraan secara real-time menggunakan YOLOv8.",
      "Integrasi pipeline data sensor IoT ke dashboard berbasis web.",
      "Akurasi deteksi yang stabil di bawah berbagai kondisi pencahayaan."
    ],
    metrics: [
      { label: "Model Accuracy", value: "94.8%" },
      { label: "Processing Speed", value: "30 FPS" }
    ],
    techStack: ["Python", "Flask", "React.js", "OpenCV", "YOLOv8", "IoT/Sensors"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 2,
    title: "Panic Buying Anomaly Detection Engine",
    category: "Machine Learning Research",
    description: "Mesin analisis prediktif untuk mendeteksi anomali perilaku pasar dan panic buying pada data e-commerce menggunakan pemrosesan bahasa alami dan algoritma isolasi.",
    features: [
      "Analisis sentimen kontekstual ulasan pelanggan e-commerce menggunakan IndoBERT.",
      "Isolasi data transaksi tidak wajar menggunakan algoritma Isolation Forest.",
      "Validasi tren data historis menggunakan integrasi Google Trends API."
    ],
    metrics: [
      { label: "F1-Score", value: "0.89" },
      { label: "Data Evaluated", value: "10k+ Rows" }
    ],
    techStack: ["Python", "IndoBERT", "Isolation Forest", "Google Trends", "Scikit-Learn"],
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Corporate Financial Management System",
    category: "Fullstack Web App",
    description: "Sistem pelaporan keuangan internal berbasis web digital yang dirancang untuk merampingkan alur kerja pengajuan penggantian biaya (reimbursement) dan kas bon perusahaan.",
    features: [
      "Sistem persetujuan bertingkat (multi-level approval) untuk manajemen risiko.",
      "Penyimpanan berkas bukti transaksi aman menggunakan Firebase Storage.",
      "Modul pembuatan dokumen laporan otomatis dalam format PDF."
    ],
    metrics: [
      { label: "Approval Time", value: "-40%" },
      { label: "Active Users", value: "150+ Staff" }
    ],
    techStack: ["React.js", "Tailwind CSS", "Firebase", "PDF Generation", "Express.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 4,
    title: "SkinScan - Smart Health Application",
    category: "Bangkit Academy Capstone",
    description: "Aplikasi seluler pendeteksi dini kesehatan kulit yang ditenagai oleh model pembelajaran mendalam dan didukung oleh infrastruktur komputasi awan yang skalabel.",
    features: [
      "Deployment model klasifikasi gambar via API backend berkinerja tinggi.",
      "Arsitektur serverless yang efisien di atas ekosistem Google Cloud Platform.",
      "Autentikasi pengguna yang aman dengan manajemen token JWT."
    ],
    metrics: [
      { label: "API Latency", value: "< 200ms" },
      { label: "Model Size", value: "45 MB" }
    ],
    techStack: ["Google Cloud Platform", "Python", "TensorFlow", "Docker", "Flask", "Kotlin"],
    githubUrl: "https://github.com"
  }
];
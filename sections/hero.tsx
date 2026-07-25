"use client";

import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24 relative">
      {/* Efek Pendaran Latar Belakang Kristal Mutiara (Pink `#F2A0D4` & Ungu Muda) */}
      <div className="absolute top-10 right-10 md:right-32 w-80 h-80 rounded-full bg-linear-to-tr from-[#F2A0D4]/30 to-purple-300/40 blur-3xl -z-10 pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
      >
        {/* KOLOM KIRI & TENGAH: Identitas & Deskripsi Profil */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div variants={itemVariants} className="text-s font-mono font-bold tracking-wider text-[#DE71B6] uppercase">
            HELLO, I&apos;M
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight text-[#A33397] ">
              Aidah Dzulfadilah Suwardi
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 text-slate-600 text-sm md:text-sm leading-relaxed max-w-2xl">
            <p className='text-justify'>
              Informatics Engineering graduate from Hasanuddin University specializing in <span className='font-bold'>fullstack web 
              development</span>. Proficient in building end-to-end web applications using React.js, Next.js, and TypeScript on the 
              frontend, paired with Go on the backend and relational databases such as MySQL and PostgreSQL. Proven practical 
              experience through an internship at Telkom Akses and several self-directed fullstack web projects, 
              complemented by a background in Android and machine learning from Bangkit Academy. Actively seeking 
              fullstack web developer roles.</p>
          </motion.div>
          
          {/* Tombol Aksi & Dokumen Pendukung */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
            <a href='/CV_Aidah Dzulfadilah Suwardi.pdf' download="CV_Aidah Dzulfadilah Suwardi.pdf" >
            <button className="px-5 py-2.5 bg-linear-to-tr from-[#F2A0D4] to-purple-300 text-white text-xs font-bold rounded-lg hover:bg-[#eba7d2] hover:shadow-lg hover:shadow-[#F2A0D4]/30 transition-all flex items-center gap-2 cursor-pointer">
              <FileText size={17} /> Curriculum Vitae
            </button>
            </a>
            <a href='https://regmhs.unhas.ac.id/files/?JWT=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqZW5pcyI6IklqYXphaF9FbGVrdHJvbmlrIiwiaWQiOjI1NjQ4NywibmltIjoiRDEyMTIxMTAzNyIsImZpbGUiOiJCc3JlX1Jla3RvciIsInRpbWUiOjE3ODQwOTc5Mzd9.DHhysZx_lqAr8TDEPW8fdVnA1UNdJHdxz4KuxsdmhOw' >
            <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-50 hover:border-purple-300 hover:text-purple-500 hover:shadow-[#F2A0D4]/30 transition-all cursor-pointer">
              Bachelor&apos;s Degree Certificate
            </button>
            </a>
          </motion.div>

          {/* Media Sosial */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4 text-slate-400">
            <a href="https://github.com/aidahdzfs" target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full border border-slate-200 hover:text-[#F2A0D4] hover:shadow-md hover:border-[#F2A0D4] shadow-md transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/aidahdzulfadilah/" target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full border border-slate-200 hover:text-[#F2A0D4] hover:shadow-md hover:border-[#F2A0D4] shadow-md transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9" rx="1"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:aidahdzulfadilah.work@gmail.com" className="p-2 bg-white rounded-full border border-slate-200 hover:text-[#F2A0D4] hover:shadow-md hover:border-[#F2A0D4] shadow-md transition-all"><Mail size={25} /></a>
          </motion.div>
        </div>

        {/* KOLOM KANAN: Foto Profil & Quick Profile Card */}
        <motion.div variants={itemVariants} className="space-y-6 sticky top-24">
          
          {/* Komponen Foto Profil Bulat di Atas Card (Meniru Pola Contoh Visual Gambar Kedua) */}
          <div className="flex justify-center">
            <div className="relative p-1.5 bg-linear-to-tr from-[#F2A0D4] to-purple-300 rounded-full shadow-md shadow-purple-100/50">
              <div className="w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden relative bg-slate-100 border border-white">
                <Image 
                  src="/profile_aidah.png" 
                  alt="Foto Profil" 
                  fill
                  sizes="(max-w-768px) 112px, 128px"
                  priority
                  className="object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Quick Profile Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm shadow-slate-100/60">
            <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-5">Quick Profile</h3>
            <div className="space-y-4 text-xs">
              <div className="flex justify-between pb-3 border-b border-slate-100">
                <span className="text-slate-400">Location</span>
                <span className="font-semibold text-slate-700">Makassar, Indonesia</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-slate-100">
                <span className="text-slate-400">Core Expertise</span>
                <span className="font-semibold text-slate-700">Fullstack Developer</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-slate-100">
                <span className="text-slate-400">Education</span>
                <span className="font-semibold text-slate-700">S1 Informatika - UNHAS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Cumulative GPA</span>
                <span className="font-bold text-[#DE71B6]">3.70 / 4.00</span>
              </div>
            </div>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}
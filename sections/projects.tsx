"use client";

import React from 'react';
import { projects } from '../constants/portofolio';
import { ExternalLink, Folder } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  // Animasi hover kinetik saat kartu disorot
  const cardHover = {
    y: -6,
    borderColor: 'rgba(222, 113, 182, 0.4)',
    boxShadow: '0 20px 25px -5px rgba(222, 113, 182, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)'
  };

  return (
    <section id="projects" className="py-24 border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50/40 relative">
      {/* Pendaran dekoratif pink samar di latar belakang area proyek */}
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-[#F2A0D4]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Seksi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} // Diubah dari x: -20 ke y: 20 agar animasinya naik dari bawah ke tengah (lebih natural untuk teks center)
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center flex flex-col items-center" // Menambahkan text-center dan flex centering
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#A33397] max-w-xl mx-auto mb-2"> 
            {/* Menambahkan mx-auto agar batas max-w-xl kiri dan kanannya seimbang */}
            Features Project
          </h2>
          <p className="mb-2 space-y-4 text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
            Selected work that reflects fullstack thinking, interface quality, and implementation discipline.
          </p>
        </motion.div>
        
        {/* Kontainer Utama: Berubah dari grid 2-kolom menjadi flex-col 1-baris-1-proyek */}
        <div className="flex flex-col gap-10">
          {projects.map((proj, idx) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={cardHover}
              className="bg-white border border-slate-200/80 rounded-2xl flex flex-col md:flex-row shadow-sm group transition-all overflow-hidden items-stretch"
            >
              
              {/* KOLOM 1: Area Ilustrasi / Gambar Proyek Full Tinggi */}
              <div className="md:w-2/5 bg-gradient-to-tr from-[#F2A0D4]/20 via-purple-100/30 to-slate-50 relative min-h-[220px] md:min-h-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 overflow-hidden">
                {/* Efek pendaran lingkaran di dalam pembungkus gambar */}
                <div className="absolute w-40 h-40 rounded-full bg-gradient-to-tr from-[#F2A0D4]/30 to-purple-300/30 blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                
                <div className="relative w-4/5 h-3/4 min-h-[160px] transition-transform duration-500 group-hover:scale-105">
                  {/* Pastikan file gambar Anda seperti '/project1.png' ditaruh di dalam folder 'public' */}
                  <Image
                    src={`/project${proj.id}.jpg`}
                    alt={`${proj.title} Mockup`}
                    fill
                    sizes="(max-w-768px) 100vw, 40vw"
                    className="object-contain drop-shadow-md rounded-lg"
                    priority={idx === 0}
                  />
                </div>
              </div>

              {/* KOLOM 2: Konten Detail Proyek */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3.5">
                    <span className="text-slate-400 uppercase tracking-wider">{proj.category}</span>
                    <Folder size={18} className="text-[#DE71B6] transition-transform group-hover:rotate-6" />
                  </div>
                  
                  {/* Judul Proyek dengan warna Hover Tema Pink */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#DE71B6] transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-5">
                    {proj.description}
                  </p>

                  {/* Daftar Fitur Proyek dengan Penanda Bullet Bertema Pink */}
                  <ul className="space-y-2 mb-6 text-xs text-slate-600">
                    {proj.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[#DE71B6] font-bold mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metrik Performa Data Analytics */}
                  <div className="grid grid-cols-2 gap-4 bg-slate-50/60 p-3.5 rounded-xl border border-slate-100 mb-6">
                    {proj.metrics.map((met, mIdx) => (
                      <div key={mIdx}>
                        <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">{met.label}</p>
                        <p className="text-xs font-extrabold text-slate-700">{met.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bagian Bawah: Teknologi Tags & Tautan Eksternal */}
                <div className="space-y-4 pt-2 border-t border-slate-100/80">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="bg-slate-50 border border-slate-200/60 text-slate-600 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5 text-xs font-mono pt-1">
                    <a 
                      href={proj.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-slate-400 hover:text-slate-800 transition-colors flex items-center gap-1"
                    >
                      [Code Source]
                    </a>
                    {proj.liveUrl && (
                      <a 
                        href={proj.liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[#DE71B6] hover:text-[#c4539c] font-bold flex items-center gap-1 transition-colors"
                      >
                        [Live Demo] <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
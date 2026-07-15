"use client";

import React from 'react';
import { skillCategories } from '../constants/portofolio';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Stack() {
  // Variasi animasi untuk kontainer kategori (Fade-in saat scroll)
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.08 // Efek memunculkan item satu per satu
      }
    }
  };

  // Variasi animasi untuk masing-masing kartu tech stack kecil
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="stack" className="py-24 border-t border-slate-200/60 relative overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
      {/* Pendaran dekoratif lavender di latar belakang seksi agar lebih berwarna dan modern */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-200/20 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative">
        
        {/* Judul Seksi dengan animasi masuk */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} // Diubah dari x: -20 ke y: 20 agar animasinya naik dari bawah ke tengah (lebih natural untuk teks center)
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center flex flex-col items-center" // Menambahkan text-center dan flex centering
        >
          <h2 className="font-mono font-bold tracking-wider text-[#DE71B6] uppercase mb-2">
            Tech Stack
          </h2>
          <p className="text-3xl font-bold tracking-tight text-slate-600 max-w-xl mx-auto"> 
            {/* Menambahkan mx-auto agar batas max-w-xl kiri dan kanannya seimbang */}
            Technologies I work with
          </p>
        </motion.div>
        
        {/* Struktur Utama Grid Kategori Tetap 3 Kolom Secara Profesional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 shadow-sm shadow-slate-100/40 flex flex-col justify-between"
            >
              <div>
                {/* Header Kategori */}
                <h3 className="text-xs font-mono font-bold text-[#A33397] uppercase tracking-wider mb-5 border-b border-slate-100 pb-2.5">
                  {cat.category}
                </h3>
                
                {/* Grid Item di Dalam Kategori (2 Kolom) */}
                <div className="grid grid-cols-2 gap-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div 
                      key={sIdx} 
                      variants={itemVariants}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)"
                      }}
                      className="flex flex-col items-center justify-center p-4 bg-slate-50/60 border border-slate-100 rounded-xl hover:bg-white hover:border-purple-200/60 transition-colors group relative overflow-hidden"
                    >
                      {/* Efek Pendaran Halus di Belakang Logo Saat Di-hover (Membuat Lebih Berwarna & Interaktif) */}
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/0 to-purple-50/0 group-hover:from-purple-50/30 group-hover:to-transparent transition-all duration-300 -z-10"></div>

                      {/* Wadah Gambar Logo yang Diperbesar */}
                      <div className="relative w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2">
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} logo`}
                          fill
                          sizes="48px"
                          className="object-contain drop-shadow-xs"
                          unoptimized
                        />
                      </div>
                      
                      {/* Nama Tekstual Stack */}
                      <span className="text-xs font-bold text-slate-700 tracking-tight group-hover:text-slate-900 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import React from 'react';
import { certificates } from '../constants/portofolio';
import { Award, ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Certificates() {
  const cardHover = {
    y: -4,
    borderColor: 'rgba(222, 113, 182, 0.4)',
    boxShadow: '0 15px 20px -5px rgba(222, 113, 182, 0.05)'
  };

  return (
    <section id="certificates" className="py-20 border-t border-slate-200/60 bg-gradient-to-b from-slate-50/40 to-white relative">
      {/* Pendaran dekoratif ungu samar di latar belakang area sertifikat */}
      <div className="absolute top-1/2 right-10 w-64 h-64 rounded-full bg-purple-100/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Seksi - Dibuat Center Senada dengan Proyek */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center flex flex-col items-center"
        >
          <h2 className="font-mono font-bold tracking-wider text-[#DE71B6] uppercase mb-2">
            Achievements
          </h2>
          <p className="text-3xl font-bold tracking-tight text-slate-600 max-w-xl mx-auto"> 
            {/* Menambahkan mx-auto agar batas max-w-xl kiri dan kanannya seimbang */}
            Certificates & Credentials
          </p>
        </motion.div>
        
        {/* Kontainer Grid Kanan-Kiri yang Pipih Mendatar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={cardHover}
              className="bg-white border border-slate-200/80 rounded-xl flex flex-row shadow-sm group transition-all overflow-hidden items-stretch"
            >
              
              {/* Kolom 1: Preview Mini Sertifikat */}
              <div className="w-[30%] bg-slate-50 relative min-h-[110px] flex items-center justify-center border-r border-slate-100/80 overflow-hidden">
                <div className="relative w-4/5 h-4/5 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} Preview`}
                    fill
                    sizes="120px"
                    className="object-cover rounded-md border border-slate-200/60 shadow-2xs"
                    unoptimized // Opsional, hapus jika file lokal sudah siap sepenuhnya
                  />
                </div>
              </div>

              {/* Kolom 2: Detail Informasi Sertifikat - Dibuat Rapat Vertikal */}
              <div className="p-4 flex-1 flex flex-col justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-400 uppercase tracking-wider">{cert.issuer}</span>
                    <Award size={14} className="text-[#DE71B6] transition-transform group-hover:scale-110" />
                  </div>
                  
                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#DE71B6] transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Bagian Bawah: Tanggal & Tautan */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] font-mono">
  <span className="text-slate-400">Issued: {cert.issuedDate}</span>

  {cert.credentialUrl && (
    <a 
      href={cert.credentialUrl} 
      target="_blank" 
      rel="noreferrer" 
      className="text-[#DE71B6] hover:text-[#c4539c] font-bold flex items-center gap-0.5 transition-colors"
    >
      [Credential] <ExternalLink size={10} />
    </a>
  )}

  {cert.pdfUrl && (
    <a 
      href={cert.pdfUrl} 
      download
      className="text-[#DE71B6] hover:text-[#c4539c] font-bold flex items-center gap-0.5 transition-colors"
    >
      [Download PDF] <Download size={10} />
    </a>
  )}
</div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
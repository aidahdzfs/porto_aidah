"use client";

import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      {/* Pendaran dekoratif pink sangat samar di pojok kanan bawah footer */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-[#F2A0D4]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* KOLOM 1: English Call-to-Action Text */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#F2A0D4]/10 text-[#DE71B6] text-xs font-mono font-bold border border-[#F2A0D4]/20">
              LET&apos;S CONNECT
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-700">
              Let&apos;s build something exceptional together.
            </h3>
            <p className="text-slate-500 text-sm text-justify leading-relaxed max-w-md">
              I am currently open to junior fullstack engineering roles, collaborative projects, or general tech discussions. Feel free to reach out via any of the platforms—I&apos;d love to connect!
            </p>
          </div>

          {/* KOLOM 2: Interactive Contact & Social Links List */}
          <div className="flex flex-col gap-3 max-w-sm md:ml-auto w-full">
            
            {/* Tautan Email Resmi */}
            <a 
              href="mailto:aidahdzulfadilah.work@gmail.com" 
              className="flex items-center justify-between p-4 bg-white border border-slate-200/80 rounded-xl hover:border-[#F2A0D4] hover:shadow-sm hover:shadow-[#F2A0D4]/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-[#DE71B6] group-hover:bg-[#F2A0D4]/10 transition-colors">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Email Me</p>
                  <p className="text-xs font-bold text-slate-700">aidahdzulfadilah.work@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-300 group-hover:text-[#DE71B6] transition-colors" />
            </a>

            {/* Tautan LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/aidahdzulfadilah/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-between p-4 bg-white border border-slate-200/80 rounded-xl hover:border-[#F2A0D4] hover:shadow-sm hover:shadow-[#F2A0D4]/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-[#DE71B6] group-hover:bg-[#F2A0D4]/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9" rx="1"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Professional Network</p>
                  <p className="text-xs font-bold text-slate-700">linkedin.com/in/aidahdzulfadilah</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-300 group-hover:text-[#DE71B6] transition-colors" />
            </a>

            {/* Tautan GitHub */}
            <a 
              href="https://github.com/aidahdzfs" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-between p-4 bg-white border border-slate-200/80 rounded-xl hover:border-[#F2A0D4] hover:shadow-sm hover:shadow-[#F2A0D4]/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:text-[#DE71B6] group-hover:bg-[#F2A0D4]/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Open Source Profile</p>
                  <p className="text-xs font-bold text-slate-700">github.com/aidahdzfs</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-300 group-hover:text-[#DE71B6] transition-colors" />
            </a>

          </div>

        </div>
      </div>

      {/* Baris Hak Cipta Paling Bawah */}
      <div className="border-t border-slate-200/60 py-6 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-400 font-mono gap-2 sm:gap-0">
          <p>© {new Date().getFullYear()} aidahdzfs. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS v4 Architecture</p>
        </div>
      </div>

    </footer>
  );
}
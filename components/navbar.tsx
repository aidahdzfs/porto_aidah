import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-large tracking-tight text-slate-900">
          Aidah<span className="text-[#A33397]">dz</span>
        </a>
        <div className="flex items-center gap-5 text-xs font-medium text-slate-500">
          <a href="#hero" className="hover:text-[#A33397] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#A33397] transition-colors">Projects</a>
          <a href="#stack" className="hover:text-[#A33397] transition-colors">Stack</a>
          <a href="#certificates" className="hover:text-[#A33397] transition-colors">Certificates</a>
          <a href="#contact" className="px-3 py-1.5 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-all text-[11px]">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
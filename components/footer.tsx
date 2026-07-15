import React from 'react';
import { experiences } from '../constants/portofolio';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200/80 bg-slate-50">
      
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-lg font-bold text-slate-900">
              Professional Timeline
            </h3>
            <div className="relative pl-6 border-l border-slate-200 space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[30px] top-1.5 h-2 w-2 rounded-full bg-slate-300 group-hover:bg-blue-600 border border-white ring-4 ring-slate-50 transition-colors"></div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 font-semibold">{exp.period}</span>
                  <h4 className="text-sm font-bold text-slate-800 mt-0.5">
                    {exp.role} <span className="text-slate-400 font-normal">@ {exp.company}</span>
                  </h4>
                  <ul className="mt-2 space-y-1 text-xs text-slate-500 leading-relaxed">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx}>— {desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900">Get in Touch</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Terbuka untuk pembahasan peluang karir, kolaborasi pengembangan perangkat lunak, maupun riset analisis pemodelan data.
            </p>
            <div className="pt-2">
              <a href="mailto:email@anda.com" className="block w-full text-center py-2 bg-blue-600 text-white font-semibold text-xs rounded-md hover:bg-blue-700 transition-colors shadow-sm">
                Send Email Invitation
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-200/60 py-6 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between text-[10px] text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} dev.profile. All rights reserved.</p>
          <p className="mt-1 sm:mt-0">Next.js & Tailwind CSS Light Architecture</p>
        </div>
      </div>

    </footer>
  );
}
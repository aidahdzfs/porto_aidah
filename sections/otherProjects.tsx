"use client";

import React from 'react';
import { otherProjects } from '../constants/portofolio';
import { ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OtherProjects() {
  return (
    <section id="other-projects" className="py-20 border-t border-slate-200/60 bg-white relative">
      <div className="max-w-5xl mx-auto px-2">

        {/* Header Seksi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center flex flex-col items-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#A33397] max-w-xl mx-auto mb-2">
            Other Projects
          </h2>
          <p className="mb-2 text-slate-500 text-sm max-w-2xl">
            A collection of smaller experiments and side projects outside my main portfolio focus.
          </p>
        </motion.div>

        {/* Grid Kartu Kecil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4, borderColor: 'rgba(222, 113, 182, 0.4)' }}
              className="bg-slate-50/60 border border-slate-200/70 rounded-xl p-5 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Folder size={18} className="text-[#DE71B6]" />
                  <div className="flex gap-3">
                    {proj.githubUrl && (
                      <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-800 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                    )}
                    
                    {proj.liveUrl && (
                      <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#DE71B6] transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-700 mb-1.5 group-hover:text-[#DE71B6] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              {/* Icon Tech Stack Kecil */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60">
                {proj.techStack.map((t, tIdx) => (
                  <div
                    key={tIdx}
                    title={t.name}
                    className="w-6 h-6 p-1 bg-white border border-slate-200/60 rounded-md flex items-center justify-center"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={t.icon}
                        alt={`${t.name} icon`}
                        fill
                        sizes="20px"
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
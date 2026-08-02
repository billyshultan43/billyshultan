"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Trophy, FileText } from '@phosphor-icons/react';
import { portfolioData } from '@/content/portfolioData';

export function TechStack() {
  return (
    <section id="technology" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
              <Terminal size={16} />
              <span>03 // TECHNICAL STACK & EXPERTISE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white">
              Systematic <span className="italic font-serif text-zinc-400">precision</span> across hardware and cloud.
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            SPECIFICATION SHEET // 2026
          </span>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((spec, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-emerald-400">SPEC_0{i+1}</span>
                <Cpu size={18} className="text-zinc-400" />
              </div>

              <h3 className="text-xl font-medium text-white">{spec.name}</h3>

              <ul className="space-y-3">
                {spec.skills.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-zinc-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements & Certificates Section */}
        <div className="space-y-8 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
            <Trophy size={16} />
            <span>HONORS & CERTIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.achievements.map((ach) => (
              <div key={ach.id} className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 space-y-4">
                <span className="text-xs font-mono text-emerald-400">{ach.event}</span>
                <h3 className="text-2xl font-light text-white">{ach.title}</h3>
                <p className="text-zinc-400 font-light text-sm">{ach.description}</p>
                {ach.file && (
                  <a href={ach.file} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:underline">
                    <FileText size={14} />
                    <span>View Certificate</span>
                  </a>
                )}
              </div>
            ))}

            {portfolioData.certificates.map((cert) => (
              <div key={cert.id} className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 space-y-4">
                <span className="text-xs font-mono text-emerald-400">{cert.issuer} &bull; {cert.date}</span>
                <h3 className="text-xl font-light text-white">{cert.name}</h3>
                {cert.file && (
                  <a href={cert.file} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:underline">
                    <FileText size={14} />
                    <span>View Certificate Document</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

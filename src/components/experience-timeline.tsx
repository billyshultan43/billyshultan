"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from '@phosphor-icons/react';
import { portfolioData } from '@/content/portfolioData';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
              <ShieldCheck size={16} />
              <span>04 // PROFESSIONAL EXPERIENCE & RECORD</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white">
              Proven <span className="italic font-serif text-zinc-400">execution</span> in embedded engineering.
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            CHRONICLE // PROFESSIONAL TIMELINE
          </span>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="p-8 sm:p-12 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="lg:col-span-4 space-y-2">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">{exp.period}</span>
                <h3 className="text-2xl sm:text-3xl font-light text-white">{exp.role}</h3>
                <p className="text-lg text-zinc-400 font-mono">{exp.company}</p>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <p className="text-zinc-300 font-light leading-relaxed text-base sm:text-lg">
                  {exp.description}
                </p>

                <div className="space-y-3 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
                  {exp.highlights.map((highlight, j) => (
                    <div key={j} className="flex items-start gap-3 text-sm text-zinc-400 font-mono">
                      <span className="text-emerald-400 mt-1">→</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                      {skill}
                    </span>
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

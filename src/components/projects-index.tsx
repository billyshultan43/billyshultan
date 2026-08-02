"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowUpRight } from '@phosphor-icons/react';
import { portfolioData, ProjectModel } from '@/content/portfolioData';
import { WorkDetailModal } from './WorkDetailModal';

export function ProjectsIndex() {
  const [selectedProject, setSelectedProject] = useState<ProjectModel | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
              <Globe size={16} />
              <span>02 // FEATURED PROJECTS & SYSTEMS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white">
              Connected systems deployed <span className="italic font-serif text-zinc-400">in reality</span>.
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            SHOWCASING {portfolioData.projects.length} CORE SYSTEMS
          </span>
        </div>

        {/* Editorial Project Exhibition Grid (Asymmetric & Layered) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden bg-zinc-900/40 border border-white/10 backdrop-blur-xl p-8 sm:p-12 flex flex-col justify-between transition-all duration-500 hover:border-white/30 hover:bg-zinc-900/70 cursor-pointer ${
                index % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>{project.client} &bull; {project.year}</span>
                  <span className="text-emerald-400">{project.category}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-light text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="pt-12 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-zinc-300">
                  <span className="group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    Inspect Hardware & Architecture
                  </span>
                  <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <WorkDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

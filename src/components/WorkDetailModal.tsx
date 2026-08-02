"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, FileText } from "@phosphor-icons/react";
import { ProjectModel } from "@/content/portfolioData";

interface WorkDetailModalProps {
  project: ProjectModel | null;
  onClose: () => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl bg-zinc-950/95 border border-white/20 shadow-2xl pointer-events-auto flex flex-col"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-white/10 bg-zinc-900/50">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                {project.client} &bull; {project.year}
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-white">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
            {/* Image Banner */}
            {project.image && (
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/5 text-zinc-300 font-light leading-relaxed">
              {project.longDescription}
            </div>

            {/* Hardware / Stack */}
            {project.hardware && project.hardware.length > 0 && (
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Hardware Components</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.hardware.map((hw, i) => (
                    <div key={i} className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1">
                      <span className="text-xs font-mono text-emerald-400">{hw.name}</span>
                      <p className="text-xs text-zinc-400 font-mono">{hw.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Key Features & Highlights</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
                      <span className="text-[10px] font-mono text-emerald-400">FEATURE_0{i+1}</span>
                      <p className="text-sm text-white font-mono">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents */}
            {project.documents && project.documents.length > 0 && (
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Project Documents</span>
                <div className="flex flex-wrap gap-3">
                  {project.documents.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.file}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 transition-colors"
                    >
                      <FileText size={16} className="text-emerald-400" />
                      <span>{doc.label}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Technology Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-4 pt-4 border-t border-white/10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono text-xs font-semibold transition-all shadow-lg"
                  >
                    <span>View Live Artifact</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-all"
                  >
                    <span>Source Repository</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

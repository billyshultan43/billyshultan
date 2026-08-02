"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Command, ArrowUpRight, User, X, Download, Globe, Code, Envelope, MapPin, Briefcase, GraduationCap } from '@phosphor-icons/react';
import { portfolioData } from '@/content/portfolioData';
import { KeyboardShortcutsModal } from './KeyboardShortcutsModal';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setShortcutsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none ${
          scrolled ? 'bg-[#09090b]/85 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Floating Identity Module Trigger */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={() => setProfileOpen(true)}
            className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all group shadow-xl"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
              <img 
                src={portfolioData.profile.profileImage}
                alt={portfolioData.profile.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col text-left pr-2">
              <span className="font-semibold text-xs text-white tracking-tight">{portfolioData.profile.name}</span>
              <span className="text-[9px] text-zinc-400 font-mono">IoT • Embedded • AI</span>
            </div>
          </button>
        </div>

        {/* Required Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 pointer-events-auto px-6 py-3 rounded-full bg-zinc-950/70 border border-white/10 backdrop-blur-xl shadow-2xl font-mono text-xs text-zinc-300">
          <button onClick={() => scrollToSection('systems')} className="hover:text-emerald-400 transition-colors">Systems</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-400 transition-colors">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-emerald-400 transition-colors">Experience</button>
          <button onClick={() => scrollToSection('technology')} className="hover:text-emerald-400 transition-colors">Technology</button>
          <Link href="/resume" className="hover:text-emerald-400 transition-colors">Resume</Link>
          <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Contact</button>
        </nav>

        {/* Right Utility Actions */}
        <div className="pointer-events-auto flex items-center gap-4">
          <button
            onClick={() => setShortcutsOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-mono transition-colors border border-white/10"
            title="Keyboard Shortcuts (?)"
          >
            <Command size={14} />
            <span className="hidden sm:inline">[ ? ]</span>
          </button>

          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono text-xs font-semibold transition-all shadow-lg"
          >
            <span>Connect</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.header>

      {/* Expandable Profile Identity Modal / Drawer */}
      <AnimatePresence>
        {profileOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl pointer-events-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setProfileOpen(false)}
            />

            <motion.div
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950/95 border border-white/20 shadow-[0_0_60px_rgba(0,0,0,0.9)] pointer-events-auto p-6 sm:p-8 space-y-8 custom-scrollbar"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <User size={16} />
                  <span>ENGINEER PROFILE MODULE</span>
                </div>
                <button
                  onClick={() => setProfileOpen(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Profile Card Header */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-xl flex-shrink-0">
                  <img 
                    src={portfolioData.profile.profileImage}
                    alt={portfolioData.profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-light text-white tracking-tight">{portfolioData.profile.name}</h3>
                  <p className="text-sm text-emerald-400 font-mono">{portfolioData.profile.title}</p>
                  <p className="text-xs text-zinc-400 font-mono">{portfolioData.profile.status}</p>
                </div>
              </div>

              {/* Biography */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Biography</span>
                <p className="text-zinc-300 font-light text-sm leading-relaxed bg-zinc-900/40 p-4 rounded-2xl border border-white/5">
                  {portfolioData.profile.bio}
                </p>
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <MapPin size={14} className="text-emerald-400" />
                    <span>Location</span>
                  </div>
                  <p className="text-white">{portfolioData.profile.location}</p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Briefcase size={14} className="text-emerald-400" />
                    <span>Experience</span>
                  </div>
                  <p className="text-white">2+ Years Professional</p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 space-y-1 sm:col-span-2">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <GraduationCap size={14} className="text-emerald-400" />
                    <span>Education & Background</span>
                  </div>
                  <p className="text-white">Electrical Engineering, Universitas Mercu Buana</p>
                </div>
              </div>

              {/* Actions & Links */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href={portfolioData.profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/10"
                    title="GitHub"
                  >
                    <Code size={18} />
                  </a>
                  <a
                    href={portfolioData.profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/10"
                    title="LinkedIn"
                  >
                    <Globe size={18} />
                  </a>
                  <a
                    href={`mailto:${portfolioData.profile.email}`}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/10"
                    title="Email"
                  >
                    <Envelope size={18} />
                  </a>
                </div>

                <a
                  href={portfolioData.profile.cvFile}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-black hover:bg-emerald-400 font-mono text-xs font-semibold transition-all shadow-lg"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <KeyboardShortcutsModal
        isOpen={shortcutsOpen}
        onClose={() => setShortcutsOpen(false)}
      />
    </>
  );
}

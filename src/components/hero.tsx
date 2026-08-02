"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkle, Terminal } from '@phosphor-icons/react';
import { portfolioData } from '@/content/portfolioData';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end px-6 sm:px-12 pb-16 pt-32 overflow-hidden border-b border-white/10">
      {/* Background ambient lighting and grain */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        {/* Main Editorial Headline Statement */}
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 font-mono text-xs text-emerald-400 uppercase tracking-widest"
          >
            <Sparkle size={16} />
            <span>SPECIALIZED ELECTRICAL ENGINEERING & EMBEDDED SYSTEMS</span>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineering robust <span className="text-zinc-500 italic font-serif">connected systems</span> from firmware to cloud.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {portfolioData.profile.heroSummary}
          </motion.p>
        </div>

        {/* Right Editorial Spec Sidebar */}
        <motion.div 
          className="lg:col-span-4 p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-2xl space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs font-mono text-zinc-400 uppercase">SYSTEM_INDEX_01</span>
            <Terminal size={16} className="text-emerald-400" />
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-zinc-400">Primary Discipline</span>
              <span className="text-zinc-200">IoT & Embedded Systems</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Execution Speed</span>
              <span className="text-emerald-400">Real-Time Telemetry & AI</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Recent Focus</span>
              <span className="text-zinc-200">Industrial Automation</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-zinc-400 font-mono flex items-center justify-between">
            <span>SCROLL TO EXPLORE ARCHITECTURE</span>
            <ArrowDown size={14} className="animate-bounce text-emerald-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

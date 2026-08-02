"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check, Radio } from '@phosphor-icons/react';
import { portfolioData } from '@/content/portfolioData';

export function ContactForm() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
            <Radio size={16} />
            <span>05 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-light tracking-tight text-white leading-tight">
            Let&apos;s build <span className="italic font-serif text-zinc-400">connected systems</span> together.
          </h2>
          <p className="text-zinc-400 font-light text-lg max-w-xl">
            {portfolioData.profile.status}. Reach out for IoT, embedded firmware, AI integration, and full stack engineering opportunities.
          </p>
        </div>

        <div className="lg:col-span-4 p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-2xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-400 uppercase">DIRECT_SIGNAL</span>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-sm text-white">
              <span className="truncate">{portfolioData.profile.email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 transition-colors"
                title="Copy email"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="flex items-center justify-between w-full px-6 py-4 rounded-2xl bg-white text-black hover:bg-zinc-200 font-mono text-xs font-semibold transition-all shadow-xl"
            >
              <span>Transmit Email Message</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href={portfolioData.profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-all border border-white/10"
            >
              <span>GitHub Repository Hub</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

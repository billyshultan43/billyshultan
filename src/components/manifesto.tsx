"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Brain, Compass, Cpu } from '@phosphor-icons/react';

export function Manifesto() {
  return (
    <section id="systems" className="py-24 sm:py-32 px-6 sm:px-12 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Heading & Philosophy Title */}
        <div className="lg:col-span-5 space-y-6 sticky top-32">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
            <Brain size={16} />
            <span>01 // CONNECTED SYSTEMS & PHILOSOPHY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white leading-[1.1]">
            Bridging hardware reality with <span className="italic font-serif text-zinc-400">intelligent software</span>.
          </h2>
          <p className="text-zinc-400 font-light leading-relaxed">
            Hardware constraints meet infinite software scalability. When low-level firmware, precise sensor integration, and cloud architecture synchronize seamlessly, reliable connected products emerge.
          </p>
        </div>

        {/* Right Column: Editorial Pillars */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div 
            className="p-8 sm:p-10 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-4 hover:border-emerald-500/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400">PILLAR_01</span>
              <Compass size={20} className="text-zinc-400" />
            </div>
            <h3 className="text-2xl font-light text-white">Firmware & Hardware Reliability</h3>
            <p className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base">
              Designing resilient microcontroller firmware on ESP32, ESP8266, and Arduino, handling power optimization, precise sensor calibration, and edge execution under harsh physical conditions.
            </p>
          </motion.div>

          <motion.div 
            className="p-8 sm:p-10 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl space-y-4 hover:border-blue-500/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400">PILLAR_02</span>
              <Cpu size={20} className="text-zinc-400" />
            </div>
            <h3 className="text-2xl font-light text-white">AI & Cloud Ecosystems</h3>
            <p className="text-zinc-400 font-light leading-relaxed text-sm sm:text-base">
              Integrating machine learning inference and fuzzy logic at the edge with robust cloud pipelines, IoT platforms, and full-stack web applications into unified real-world products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

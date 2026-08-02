"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Command } from '@phosphor-icons/react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KeyboardShortcutsModal({ isOpen, onClose }: KeyboardShortcutsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const shortcuts = [
    { key: 'G S', description: 'Explore Systems & Manifesto' },
    { key: 'G P', description: 'Featured Projects Exhibition' },
    { key: 'G E', description: 'Professional Experience Record' },
    { key: 'G C', description: 'Contact & Transmission' },
    { key: 'ESC', description: 'Close modals / dialogs' },
    { key: '?', description: 'Toggle keyboard shortcuts' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg bg-[#121215] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
      >
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-white font-semibold text-sm font-mono">
            <Command className="w-4 h-4 text-emerald-400" />
            <span>Keyboard Navigation</span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl bg-white/5 text-zinc-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 font-mono text-xs">
          {shortcuts.map((s, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-zinc-300">{s.description}</span>
              <kbd className="px-2 py-1 rounded bg-white/10 border border-white/20 text-emerald-400 font-bold">{s.key}</kbd>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

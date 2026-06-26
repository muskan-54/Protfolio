"use client";

import { motion } from 'framer-motion';
import GoogleBadges from './GoogleBadges';

export default function EndCredits() {
  const socialLinks = [
    { name: "LINKEDIN // PROFESSIONAL PROFILE", url: "https://linkedin.com/in/muskan-fatima-ab90732b7/", icon: "🔗" },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6 border-t border-zinc-900 font-mono relative overflow-hidden">
      {/* 1. THE CERTIFICATES SECTION: UPGRADED TO LIVE GOOGLE VERIFICATION */}
      <GoogleBadges />

      {/* 2. THE GRAND FINALE: INTERACTIVE EXTERNAL CHANNELS */}
      <div className="max-w-4xl mx-auto text-center border-t border-zinc-900 pt-20">
        <span className="text-xs text-zinc-600 tracking-[0.3em] block mb-6">THE END // THANK YOU FOR WATCHING</span>
        <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-zinc-800 mb-6 select-none">
          MUSKAN FATIMA
        </h3>
        <div className="mb-12 space-y-2">
          <p className="text-medical-teal font-black text-xs tracking-[0.2em] uppercase">
            Global Tech Mentor | AI Founder | Senior Tech Assistant
          </p>
          <p className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase">
            Location: Nawabshah / Karachi, Pakistan
          </p>
          <p className="text-zinc-400 italic text-sm mt-4">
            "Debugging the world, one line at a time."
          </p>
        </div>

        {/* Dynamic, interactive links replacing the boring flat buttons */}
        <div className="flex flex-col max-w-md mx-auto gap-3 text-left">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="group flex justify-between items-center bg-zinc-950/30 border border-zinc-900/80 hover:border-zinc-700/50 px-5 py-4 rounded-lg transition-all"
            >
              <span className="text-xs font-bold text-zinc-400 group-hover:text-amber-400 transition-colors tracking-wider flex items-center gap-3">
                <span>{link.icon}</span> {link.name}
              </span>
              <span className="text-zinc-600 group-hover:text-white transition-colors text-xs">➔</span>
            </motion.a>
          ))}
        </div>

        <p className="text-[10px] text-zinc-700 mt-20 font-sans tracking-widest">
          © 2026 DIRECTED BY MUSKAN FATIMA. CODED VIA AGENTIC AI WORDFLOWS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </section>
  );
}

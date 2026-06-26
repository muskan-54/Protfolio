"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function GoogleBadges() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const googleBadges = [
    {
      title: "Foundational AI Skills",
      id: "21382648",
      url: "https://www.skills.google/public_profiles/e16255ab-100d-4601-a81d-99510eb0f29c/badges/21382648",
      description: "Google Cloud Credential Verification"
    },
    {
      title: "Cloud Architecture Core",
      id: "21446504",
      url: "https://www.skills.google/public_profiles/e16255ab-100d-4601-a81d-99510eb0f29c/badges/21446504",
      description: "Infrastructure & Scaling Essentials"
    },
    {
      title: "Advanced Data Systems",
      id: "21638244",
      url: "https://www.skills.google/public_profiles/e16255ab-100d-4601-a81d-99510eb0f29c/badges/21638244",
      description: "Data-Driven Engineering Credential"
    },
    {
      title: "Agentic Engineering",
      id: "23693047",
      url: "https://www.skills.google/public_profiles/e16255ab-100d-4601-a81d-99510eb0f29c/badges/23693047",
      description: "AI Agent Workflows & Automation"
    },
    {
      title: "Machine Learning Studio",
      id: "23737235",
      url: "https://www.skills.google/public_profiles/e16255ab-100d-4601-a81d-99510eb0f29c/badges/23737235",
      description: "Model Deployment & Tuning"
    },
    {
      title: "Generative AI Systems",
      id: "23796762",
      url: "https://www.skills.google/public_profiles/e16255ab-100d-4601-a81d-99510eb0f29c/badges/23796762",
      description: "LLM Orchestration Foundations"
    },
    {
      title: "Cloud Security Matrix",
      id: "23796903",
      url: "https://www.skills.google/public_profiles/e16255ab-100d-4601-a81d-99510eb0f29c/badges/23796903",
      description: "Enterprise Security Protocols"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto mb-40 relative px-4" ref={containerRef}>
      <span className="text-xs text-amber-400 tracking-widest block mb-3">// LIVE GOOGLE VERIFICATION</span>
      <h2 className="text-3xl font-extrabold tracking-tight mb-24 text-zinc-100 uppercase italic">CERTIFICATION JOURNEY</h2>
      
      {/* The Snaking Journey Path */}
      <div className="relative">
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 1000 1400"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Glowing Dashed Line */}
          <motion.path
            d="M 200 50 C 400 50, 600 250, 800 250 S 1000 450, 800 450 S 600 650, 400 650 S 0 850, 200 850 S 400 1050, 600 1050 S 800 1250, 600 1250"
            stroke="#18181b"
            strokeWidth="4"
            strokeDasharray="12 12"
          />
          <motion.path
            d="M 200 50 C 400 50, 600 250, 800 250 S 1000 450, 800 450 S 600 650, 400 650 S 0 850, 200 850 S 400 1050, 600 1050 S 800 1250, 600 1250"
            stroke="url(#pathGradient)"
            strokeWidth="4"
            strokeDasharray="12 12"
            style={{ pathLength: smoothProgress }}
          />
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f7ff" />
              <stop offset="100%" stopColor="#00f7ff" />
            </linearGradient>
          </defs>

          {/* The Rider (Bicycle SVG) */}
          <motion.g 
            style={{ 
              offsetPath: "path('M 200 50 C 400 50, 600 250, 800 250 S 1000 450, 800 450 S 600 650, 400 650 S 0 850, 200 850 S 400 1050, 600 1050 S 800 1250, 600 1250')",
              offsetDistance: useTransform(smoothProgress, [0, 1], ["0%", "100%"])
            }}
          >
            {/* HUD Label */}
            <foreignObject x="-60" y="-50" width="120" height="40">
              <div className="text-[8px] font-black tracking-widest text-[#00f7ff] uppercase bg-black/50 px-2 py-1 border border-[#00f7ff]/30 backdrop-blur-sm whitespace-nowrap">
                STATUS: EN ROUTE TO MASTERY
              </div>
            </foreignObject>

            {/* Neon Bicycle Rider */}
            <g transform="translate(-15, -15) scale(0.6)" className="text-[#00f7ff]">
              <path 
                d="M10 20 L15 10 L25 10 L30 20" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none" 
              />
              <circle cx="10" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="30" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M15 10 L20 0 L25 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </g>
          </motion.g>
        </svg>

        {/* Zig-Zag Badges Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 relative z-10">
          {googleBadges.map((badge, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.3, scale: 0.9 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  boxShadow: "0 0 30px rgba(245, 158, 11, 0.1)"
                }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                className={cn(
                  "max-w-xs",
                  isEven ? "md:justify-self-start md:ml-12" : "md:justify-self-end md:mr-12"
                )}
              >
                <motion.a
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open verification for ${badge.title}`}
                  whileHover={{ y: -6, borderColor: 'rgba(245, 158, 11, 0.4)' }}
                  className="block bg-zinc-950/60 backdrop-blur-sm border border-zinc-800/50 p-6 rounded-xl cursor-pointer transition-all flex flex-col justify-between shadow-lg group relative overflow-hidden h-full"
                >
                  {/* Subtle tech grid icon asset placeholder */}
                  <div className="text-4xl mb-6 bg-zinc-900/80 w-14 h-14 flex items-center justify-center rounded-lg border border-zinc-800 shadow-inner group-hover:text-amber-400 transition-colors">
                    ⚙️
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-zinc-600 block font-mono mb-1">ID // {badge.id}</span>
                    <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wide leading-tight group-hover:text-zinc-100 italic">{badge.title}</h3>
                    <p className="text-xs text-zinc-500 font-sans mt-2">{badge.description}</p>
                  </div>

                  {/* View Overlay Panel */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <span className="bg-zinc-950 border border-zinc-700 px-3 py-1.5 rounded text-[11px] text-amber-400 font-bold uppercase italic">
                      ▶ STREAM VERIFICATION
                    </span>
                  </div>
                  
                  {/* Ignition Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-amber-400/0 rounded-xl pointer-events-none"
                    whileInView={{ 
                      borderColor: "rgba(245, 158, 11, 0.4)",
                      boxShadow: "0 0 20px rgba(245, 158, 11, 0.2) inset"
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  />
                </motion.a>
                </motion.div>
                                
              
            );
          })}
        
        </div>
      </div>

    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

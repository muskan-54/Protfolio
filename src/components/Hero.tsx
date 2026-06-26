"use client";

import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import ScrambleText from "./ScrambleText";
import { useState, useEffect } from "react";
import TrailerModal from "./TrailerModal";

export default function Hero() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [snippetPositions, setSnippetPositions] = useState<{ x: string; y: string; duration: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    const codeSnippets = [
      "const medicat = new AI_Agent();",
      "await linguaFlow.translate(voice);",
      "git commit -m 'Director Cut'",
      "while(isNawabshah(crisis)) { solve(); }",
      "system.status = 'GLOBAL_LEAD';",
      "resume.build({ urdu: true });",
      "globalGauntlet.optimize();",
      "mentoring.scaleUp();",
      "WTM.empower(womenInTech);"
    ];
    setSnippetPositions(codeSnippets.map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      duration: 5 + Math.random() * 5
    })));
  }, []);

  const scrollToProjects = () => {
    document.getElementById("streaming-theater")?.scrollIntoView({ behavior: "smooth" });
  };

  const codeSnippets = [
    "const medicat = new AI_Agent();",
    "await linguaFlow.translate(voice);",
    "git commit -m 'Director Cut'",
    "while(isNawabshah(crisis)) { solve(); }",
    "system.status = 'GLOBAL_LEAD';",
    "resume.build({ urdu: true });",
    "globalGauntlet.optimize();",
    "mentoring.scaleUp();",
    "WTM.empower(womenInTech);"
  ];

  return (
    <section className="relative h-[90vh] w-full flex items-end pb-24 px-4 md:px-12 overflow-hidden bg-black">
      {/* Expensive Background: Moving Gradients & Noise */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        
        {/* Slow Moving Cinematic Gradient */}
        <div className="absolute inset-0 opacity-40 animate-slow-gradient bg-[radial-gradient(circle_at_50%_50%,#2dd4bf_0%,transparent_50%),radial-gradient(circle_at_80%_20%,#6366f1_0%,transparent_50%)]" />
        
        {/* Film Grain & Scanlines */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />

        {/* Floating Code Snippets */}
        {mounted && snippetPositions.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: pos.x, 
              y: pos.y, 
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-20px", "20px"],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: pos.duration, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-[10px] font-mono text-medical-teal/50 whitespace-nowrap hidden md:block"
          >
            {codeSnippets[i]}
          </motion.div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-30 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative inline-block"
        >
          <h2 className="text-neon-indigo font-black tracking-[0.5em] mb-4 text-[10px] md:text-xs uppercase drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] italic">
            A Muskan Fatima Original
          </h2>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic leading-[0.85]">
            <ScrambleText text="MUSKAN FATIMA:" delay={800} duration={1500} />
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-medical-teal to-neon-indigo animate-gradient-x bg-[length:200%_auto]">
              <ScrambleText text="THE MOVIE" delay={1500} duration={2000} />
            </span>
          </h1>
        </motion.div>
        
        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed italic">
          From a detail-obsessed student to a global tech leader. 
          Experience the <span className="text-white">"Director's Cut"</span> of a journey built on bugs, features, and plot twists.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={() => setIsTrailerOpen(true)}
            className="group flex items-center gap-4 bg-white text-black px-12 py-5 rounded-sm font-black text-xs tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <Play className="fill-current w-5 h-5" />
            Watch Trailer
          </button>
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-4 bg-zinc-800/40 text-white px-12 py-5 rounded-sm font-black text-xs tracking-widest uppercase backdrop-blur-md transition-all hover:bg-zinc-800/60 active:scale-95 border border-white/5"
          >
            <Info className="w-5 h-5" />
            More Info
          </button>
        </div>
      </motion.div>

      <TrailerModal 
        isOpen={isTrailerOpen} 
        onClose={() => setIsTrailerOpen(false)} 
      />

      <style jsx global>{`
        @keyframes slow-gradient {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(-2%, 2%); }
        }
        .animate-slow-gradient {
          animation: slow-gradient 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MoodMeter from './MoodMeter';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    episode: string;
    acts: {
      spark: string;
      crunch: string;
      cut: string;
    };
    mood: { panic: number; fun: number; success: number };
    bts: string;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset slide when modal opens with a new project
  useEffect(() => {
    if (isOpen) setCurrentSlide(0);
  }, [isOpen, project?.title]);

  if (!project) return null;

  const introText = project.acts?.spark || project.bts || "";
  const introSentence = introText.split('.')[0] || introText;

  const slides = [
    {
      title: `🎬 Act I: The Challenge`,
      type: "PANIC 😱",
      content: introSentence + '.', // Dramatic intro
      bg: "from-red-950 to-black"
    },
    {
      title: `💃 Act II: The Process`,
      type: "FUN FACTOR ✨",
      content: project.bts,
      bg: "from-fuchsia-950 to-black"
    },
    {
      title: `🏆 Act III: Production Logs`,
      type: "CRITICAL SUCCESS",
      content: "Final Impact Analysis & Performance Metrics.",
      bg: "from-amber-950 to-black",
      showMetrics: true
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className={`w-full max-w-5xl aspect-video bg-gradient-to-br ${slides[currentSlide].bg} border border-white/5 rounded-3xl p-12 relative flex flex-col justify-between shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden`}
          >
            {/* Cinematic Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />
            
            {/* Top Bar */}
            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase italic">
                  BONUS_CONTENT // {project.title.replace(/\s+/g, '_').toUpperCase()}
                </span>
                <div className="h-px w-8 bg-white/10" />
                <span className="text-[10px] font-black tracking-widest text-medical-teal uppercase">
                  4K // HDR
                </span>
              </div>
              <button 
                onClick={onClose} 
                className="text-white/40 hover:text-white font-black text-xs transition-colors tracking-widest uppercase"
              >
                [ EXIT_SCREENING ]
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-center z-10 py-12">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <span className="text-xs font-black tracking-[0.3em] uppercase text-amber-400 italic mb-2 block">
                  {slides[currentSlide].type}
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase italic leading-none">
                  {slides[currentSlide].title}
                </h2>
                
                {slides[currentSlide].showMetrics ? (
                  <div className="w-full flex items-center gap-12 pt-4 relative">
                    <div className="w-full max-w-md">
                      <MoodMeter {...project.mood} />
                    </div>
                    
                    {/* Unexpected Neon Cyberpunk Cat Celebration */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 0.4, scale: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="hidden md:block absolute -right-12 top-0 mix-blend-color-dodge pointer-events-none"
                    >
                      <div className="neon-cat-container scale-150">
                        <div className="neon-cat">
                          <div className="cat-head">
                            <div className="cat-ear left"></div>
                            <div className="cat-ear right"></div>
                            <div className="cat-eye left"></div>
                            <div className="cat-eye right"></div>
                          </div>
                          <div className="cat-body"></div>
                          <div className="cat-tail"></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <p className="text-xl text-zinc-300 leading-relaxed font-medium italic">
                    "{slides[currentSlide].content}"
                  </p>
                )}
              </motion.div>
            </div>

            <style jsx global>{`
              .neon-cat-container {
                width: 100px;
                height: 100px;
                position: relative;
              }
              .neon-cat {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 100%;
                animation: cat-dance 1.5s ease-in-out infinite;
              }
              .cat-head {
                width: 40px;
                height: 30px;
                border: 2px solid #00f7ff;
                box-shadow: 0 0 10px #00f7ff;
                position: absolute;
                top: 20px;
                left: 30px;
                border-radius: 40% 40% 50% 50%;
                animation: head-bob 1.5s ease-in-out infinite;
              }
              .cat-ear {
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-bottom: 12px solid #ff00ff;
                position: absolute;
                top: -10px;
                filter: drop-shadow(0 0 5px #ff00ff);
              }
              .cat-ear.left { left: 2px; transform: rotate(-20deg); }
              .cat-ear.right { right: 2px; transform: rotate(20deg); }
              
              .cat-eye {
                width: 4px;
                height: 4px;
                background: #ff00ff;
                box-shadow: 0 0 5px #ff00ff;
                position: absolute;
                top: 10px;
                border-radius: 50%;
                animation: eye-glitch 2s infinite;
              }
              .cat-eye.left { left: 8px; }
              .cat-eye.right { right: 8px; }

              .cat-body {
                width: 50px;
                height: 40px;
                border: 2px solid #00f7ff;
                box-shadow: 0 0 10px #00f7ff;
                position: absolute;
                top: 50px;
                left: 25px;
                border-radius: 50% 50% 40% 40%;
              }

              .cat-tail {
                width: 30px;
                height: 2px;
                background: #ff00ff;
                box-shadow: 0 0 8px #ff00ff;
                position: absolute;
                top: 65px;
                left: 75px;
                transform-origin: left center;
                animation: tail-wag 0.75s ease-in-out infinite alternate;
              }

              @keyframes cat-dance {
                0%, 100% { transform: translateY(0) rotate(0); }
                50% { transform: translateY(-10px) rotate(5deg); }
              }
              @keyframes head-bob {
                0%, 100% { transform: rotate(0); }
                50% { transform: rotate(-10deg); }
              }
              @keyframes tail-wag {
                from { transform: rotate(-20deg); }
                to { transform: rotate(40deg); }
              }
              @keyframes eye-glitch {
                0%, 90%, 100% { opacity: 1; transform: scaleY(1); }
                95% { opacity: 0; transform: scaleY(0.1); }
              }
            `}</style>

            {/* Bottom Controls */}
            <div className="flex justify-between items-end z-10 border-t border-white/5 pt-8">
              <div className="flex gap-3">
                {slides.map((_, index) => (
                  <motion.div 
                    key={index} 
                    className={`h-1.5 rounded-full ${index === currentSlide ? 'bg-medical-teal' : 'bg-white/10'}`}
                    animate={{ width: index === currentSlide ? 40 : 12 }}
                  />
                ))}
              </div>
              
              <div className="flex gap-4">
                {currentSlide > 0 && (
                  <button 
                    onClick={() => setCurrentSlide(prev => prev - 1)}
                    className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-black text-[10px] tracking-widest uppercase rounded-sm border border-white/10 transition-all"
                  >
                    PREVIOUS_ACT
                  </button>
                )}
                {currentSlide < slides.length - 1 ? (
                  <button 
                    onClick={() => setCurrentSlide(prev => prev + 1)}
                    className="px-10 py-3 bg-medical-teal text-black font-black text-[10px] tracking-widest uppercase rounded-sm shadow-[0_0_30px_rgba(45,212,191,0.3)] transition-all hover:scale-105 active:scale-95"
                  >
                    NEXT_ACT
                  </button>
                ) : (
                  <button 
                    onClick={onClose}
                    className="px-10 py-3 bg-white text-black font-black text-[10px] tracking-widest uppercase rounded-sm shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
                  >
                    CLOSE_BONUS
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

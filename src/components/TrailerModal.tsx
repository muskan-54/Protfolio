"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const trailerScenes = [
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    title: "EPISODE 1: MEDICAT AI",
    subtitle: "THE REVOLUTION OF CARE",
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    title: "EPISODE 2: LINGUAFLOW",
    subtitle: "BREAKING THE BARRIERS",
  },
  {
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    title: "EPISODE 3: BLOG BREW",
    subtitle: "THE ART OF DETAIL",
  },
  {
    image: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?q=80&w=2070&auto=format&fit=crop",
    title: "EPISODE 4: AMBASSADOR",
    subtitle: "LEADERSHIP DEFINED",
  },
  {
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop",
    title: "EPISODE 5: ROZGAR AI",
    subtitle: "THE FUTURE OF WORK",
  }
];

export default function TrailerModal({ isOpen, onClose }: TrailerModalProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % trailerScenes.length);
    }, 1200); // High-speed transition

    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Film Grain & Scanlines for the "Video" look */}
          <div className="absolute inset-0 z-50 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
          <div className="absolute inset-0 z-50 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

          {/* Slideshow Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute inset-0"
            >
              <img 
                src={trailerScenes[currentScene].image} 
                className="w-full h-full object-cover grayscale-[0.3] brightness-50"
                alt="Trailer Scene"
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <motion.span 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-medical-teal font-black tracking-[0.5em] text-xs mb-4 uppercase"
                >
                  {trailerScenes[currentScene].title}
                </motion.span>
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-white text-4xl md:text-7xl font-black italic tracking-tighter uppercase"
                >
                  {trailerScenes[currentScene].subtitle}
                </motion.h2>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* UI Overlays */}
          <div className="absolute top-8 left-8 z-[60] flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-red-600 rounded-sm">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white font-black text-[10px] tracking-widest uppercase">LIVE PREVIEW</span>
            </div>
            <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">00:0{currentScene + 1} / 00:05</span>
          </div>

          <div className="absolute top-8 right-8 z-[60] flex items-center gap-4">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="text-white/50 hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button 
              onClick={onClose}
              className="text-white/50 hover:text-white transition-colors group"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[60] flex gap-2">
            {trailerScenes.map((_, i) => (
              <div 
                key={i}
                className={`h-1 transition-all duration-300 rounded-full ${i === currentScene ? 'w-12 bg-medical-teal' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

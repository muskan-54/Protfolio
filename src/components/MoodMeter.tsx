"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MoodMeterProps {
  panic: number; // 0-100
  fun: number;   // 0-100
  success: number; // 0-100
}

export default function MoodMeter({ panic, fun, success }: MoodMeterProps) {
  const bars = [
    { 
      label: "PANIC METER", 
      value: panic, 
      color: "bg-red-500", 
      shadow: "shadow-[0_0_15px_#ef4444]",
      animation: "animate-pulse" 
    },
    { 
      label: "FUN FACTOR", 
      value: fun, 
      color: "bg-fuchsia-500", 
      shadow: "shadow-[0_0_15px_#d946ef]",
      animation: "animate-bounce-subtle" // Custom subtle pulse/bounce
    },
    { 
      label: "CRITICAL SUCCESS", 
      value: success, 
      color: "bg-amber-400", 
      shadow: "shadow-[0_0_15px_#facc15]" 
    },
  ];

  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase italic">
          Production Logs // Impact Analysis
        </h4>
      </div>
      
      {bars.map((bar) => (
        <div key={bar.label} className="space-y-2">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-300">
            <span>{bar.label}</span>
            <span className="font-mono">{bar.value}%</span>
          </div>
          <div className="h-2 w-full bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800/50 relative">
            {/* Background "rendering" grid effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.1)_95%)] bg-[length:20px_100%]" />
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${bar.value}%` }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "h-full relative transition-all duration-300", 
                bar.color, 
                bar.shadow,
                bar.animation
              )}
            >
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
              {/* Scanning line effect */}
              <div className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-scan" />
            </motion.div>
          </div>
        </div>
      ))}

      <style jsx global>{`
        @keyframes scan {
          from { transform: translateX(-100%); }
          to { transform: translateX(500%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(0.98); opacity: 0.8; }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

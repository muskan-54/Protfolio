"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  Mic2, 
  Coffee, 
  Award, 
  Briefcase, 
  AlertTriangle, 
  ChevronRight, 
  ChevronLeft,
  Zap,
  Cpu,
  Globe,
  Binary
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapNode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string[];
  tech: string[];
  lesson?: string;
  status: "active" | "completed" | "error";
  icon: any;
  position: number;
}

const roadmapNodes: RoadmapNode[] = [
  {
    id: "01",
    title: "Medicat AI",
    subtitle: "Agentic AI Layer / Rural Healthcare",
    description: "Developing Python-based Knowledge Graphs to bridge the healthcare gap in Nawabshah. An autonomous agent system designed for offline-first medical intelligence.",
    metrics: ["16+ Specialized Agents", "Knowledge Graph Architecture", "Real-time Diagnostic Support"],
    tech: ["Python", "LangGraph", "Neo4j"],
    status: "active",
    icon: Activity,
    position: 0
  },
  {
    id: "02",
    title: "LinguaFlow AI",
    subtitle: "The Voice-Overlay Tragedy",
    description: "An over-engineered voice-sync engine that prioritized complexity over client needs. A technical masterpiece that failed the 'user-first' test.",
    lesson: "The simple path is often the client's path.",
    metrics: ["Custom Voice Sync", "Zero Latency Goal", "Architecture Pivot"],
    tech: ["Web Audio API", "Custom Buffers", "Node.js"],
    status: "completed",
    icon: Mic2,
    position: 20
  },
  {
    id: "03",
    title: "Blog Brew",
    subtitle: "The Art of Frontend Precision",
    description: "A deep dive into UI/UX sanctuary building. Open-source training montage focused on the minute details that transform projects into products.",
    metrics: ["Pixel-Perfect UI", "Open Source Focus", "Sanctuary Design"],
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    status: "completed",
    icon: Coffee,
    position: 40
  },
  {
    id: "04",
    title: "The Golden Ambassador",
    subtitle: "Empowerment Arc & Leadership",
    description: "Moving past the comfort zone to lead global tech communities. Securing the Gold Tier by lifting others while climbing.",
    metrics: ["Global Mentor Status", "Gold Tier 2025", "Community Growth"],
    tech: ["Leadership", "Public Speaking", "Strategy"],
    status: "completed",
    icon: Award,
    position: 60
  },
  {
    id: "05",
    title: "Rozgar AI",
    subtitle: "Founder Mode / Roman Urdu NLP",
    description: "Converting Roman Urdu logic into an AI resume tool. Stepping into CEO energy by solving local employment barriers with global tech.",
    metrics: ["NLP for Roman Urdu", "Resume Optimization", "Founder Vision"],
    tech: ["Python", "FastAPI", "Transformers"],
    status: "completed",
    icon: Briefcase,
    position: 80
  },
  {
    id: "06",
    title: "System Recalibrating",
    subtitle: "The Rejection Node / Anxiety Beta-Test",
    description: "Processing uptake conflicts from Norway (ASEF), China (Westlake), and Germany (WHS). framing the Harvard HPAIR interview as a high-stakes stress test.",
    lesson: "Optimizing communication scripts and essay logic for the next global deployment cycle.",
    metrics: ["Delegate Status Unlocked", "Stress Resilience", "Logic Refactor"],
    tech: ["Resilience", "Strategic Iteration", "Self-Debugging"],
    status: "error",
    icon: AlertTriangle,
    position: 100
  }
];

export default function RoadmapPathway() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNode = roadmapNodes[activeIndex];
  const isError = activeNode.status === "error";

  const nextNode = () => setActiveIndex((prev) => (prev + 1) % roadmapNodes.length);
  const prevNode = () => setActiveIndex((prev) => (prev - 1 + roadmapNodes.length) % roadmapNodes.length);

  return (
    <div className="min-h-[800px] bg-[#050505] text-white py-20 px-4 md:px-12 flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] opacity-20 transition-colors duration-700",
          isError ? "bg-[#ff3e3e]" : "bg-[#39FF14]"
        )} />
      </div>

      {/* Main Content Node Display */}
      <div className="relative z-20 w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "glass-box relative p-8 md:p-12 rounded-3xl border transition-all duration-700",
              "bg-white/[0.02] backdrop-blur-xl",
              isError ? "border-[#ff3e3e]/30 shadow-[0_0_50px_-10px_rgba(255,62,62,0.2)]" : "border-[#39FF14]/20 shadow-[0_0_50px_-10px_rgba(57,255,20,0.1)]"
            )}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={cn(
                    "text-[10px] font-black tracking-[0.4em] uppercase px-3 py-1 border rounded-full",
                    isError ? "text-[#ff3e3e] border-[#ff3e3e]/50" : "text-[#39FF14] border-[#39FF14]/50"
                  )}>
                    Node {activeNode.id} // {activeNode.status.toUpperCase()}
                  </span>
                  <div className={cn("w-2 h-2 rounded-full", isError ? "bg-[#ff3e3e] animate-pulse" : "bg-[#39FF14] animate-ping")} />
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-2">
                  {activeNode.title}
                </h2>
                <p className={cn("text-lg font-bold tracking-tight opacity-70 italic", isError ? "text-[#ff3e3e]" : "text-[#00D4FF]")}>
                  {activeNode.subtitle}
                </p>
              </div>
              <div className="flex gap-4">
                <button onClick={prevNode} className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextNode} className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Description & Metrics Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  <p className="text-xl text-zinc-300 leading-relaxed font-medium italic">
                    "{activeNode.description}"
                  </p>
                </div>
                
                {activeNode.lesson && (
                  <div className={cn("p-6 rounded-2xl border bg-black/40", isError ? "border-[#ff3e3e]/20" : "border-[#00D4FF]/20")}>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-50">Correction // Deployment Fix</p>
                    <p className="text-sm font-bold italic text-zinc-300">"{activeNode.lesson}"</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {activeNode.tech.map(t => (
                    <span key={t} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-zinc-900 border border-white/5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-6">Technical Data // Metrics</h3>
                {activeNode.metrics.map((metric, i) => (
                  <div key={i} className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                      isError ? "bg-[#ff3e3e]/10 text-[#ff3e3e]" : "bg-[#00D4FF]/10 text-[#00D4FF]"
                    )}>
                      {i === 0 ? <Zap className="w-5 h-5" /> : i === 1 ? <Cpu className="w-5 h-5" /> : <Binary className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-tighter text-white">{metric}</p>
                      <div className="h-px w-full bg-gradient-to-r from-zinc-800 to-transparent mt-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* The Pathway Framework (Continuous Bottom Track) */}
      <div className="mt-24 w-full max-w-6xl relative px-12 pb-12">
        {/* The Path Line */}
        <div className="absolute left-12 right-12 bottom-20 h-[2px] bg-zinc-900 overflow-hidden">
          <motion.div 
            initial={false}
            animate={{ width: `${activeNode.position}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={cn("h-full transition-colors duration-700", isError ? "bg-[#ff3e3e]" : "bg-[#39FF14]")}
          />
        </div>

        {/* Node Markers */}
        <div className="absolute left-12 right-12 bottom-20 flex justify-between items-center h-0">
          {roadmapNodes.map((node, i) => (
            <button
              key={node.id}
              onClick={() => setActiveIndex(i)}
              className="relative group flex flex-col items-center"
            >
              <div className={cn(
                "w-3 h-3 rounded-full border-2 transition-all duration-500 z-30",
                i <= activeIndex 
                  ? (i === 5 ? "bg-[#ff3e3e] border-[#ff3e3e] scale-125" : "bg-[#39FF14] border-[#39FF14] scale-110")
                  : "bg-zinc-950 border-zinc-800 group-hover:border-zinc-500"
              )} />
              <span className={cn(
                "absolute top-6 text-[10px] font-black tracking-widest uppercase transition-all duration-500 whitespace-nowrap",
                i === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              )}>
                Node {node.id}
              </span>
            </button>
          ))}
        </div>

        {/* The Moving Avatar Mechanic */}
        <motion.div
          initial={false}
          animate={{ left: `${activeNode.position}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute bottom-20 -translate-x-1/2 mb-2 z-40"
        >
          <div className={cn(
            "p-3 rounded-xl border flex items-center justify-center transition-all duration-700 shadow-2xl",
            isError 
              ? "bg-[#ff3e3e] border-[#ff3e3e]/50 text-white animate-bounce" 
              : "bg-[#39FF14] border-[#39FF14]/50 text-black"
          )}>
            {isError ? (
              <AlertTriangle className="w-6 h-6 animate-pulse" />
            ) : (
              <Activity className="w-6 h-6" />
            )}
          </div>
          {/* Label for avatar */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className={cn(
              "text-[8px] font-black tracking-[0.3em] uppercase transition-colors duration-700",
              isError ? "text-[#ff3e3e]" : "text-[#39FF14]"
            )}>
              {isError ? "System_Recalibrating" : "Running_Diagnostics"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Tech Legend */}
      <div className="mt-8 flex gap-8 opacity-30 text-[9px] font-black tracking-[0.5em] uppercase pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#39FF14]" />
          <span>Operational</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
          <span>Deployment</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#ff3e3e]" />
          <span>Recalibrating</span>
        </div>
      </div>

      <style jsx global>{`
        .glass-box {
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
}

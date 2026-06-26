"use client";

import { motion } from "framer-motion";
import { Radio, Users, Globe, Zap } from "lucide-react";

const currentActivities = [
  {
    title: "Mentoring at GIAIC",
    description: "Teaching Agentic AI to 100+ students, bridging the gap between theory and real-world deployment.",
    icon: <Users className="w-5 h-5" />,
    tag: "EDUCATION"
  },
  {
    title: "Global Ecosystem Impact",
    description: "Actively mentoring for Women Techmakers and Technovation to build sustainable pathways for women in tech.",
    icon: <Globe className="w-5 h-5" />,
    tag: "COMMUNITY"
  },
  {
    title: "System Optimization",
    description: "Reviewing cold emails, application essays, and interview frameworks to patch the bugs for the next global cycle.",
    icon: <Zap className="w-5 h-5" />,
    tag: "STRATEGY"
  }
];

export default function CurrentlyStreaming() {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-medical-teal/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <div className="relative">
            <Radio className="w-6 h-6 text-red-500 animate-pulse" />
            <div className="absolute inset-0 bg-red-500/20 blur-md animate-pulse" />
          </div>
          <h2 className="text-white font-black tracking-[0.3em] uppercase text-sm italic">
            Currently Streaming // Live Feed
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-zinc-950/50 border border-zinc-900 rounded-2xl hover:border-medical-teal/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-zinc-900 rounded-xl text-medical-teal group-hover:scale-110 transition-transform duration-500">
                  {activity.icon}
                </div>
                <span className="text-[10px] font-black text-zinc-600 tracking-widest uppercase">
                  {activity.tag}
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase italic group-hover:text-medical-teal transition-colors">
                {activity.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium italic">
                "{activity.description}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full">
                <span className="w-2 h-2 rounded-full bg-medical-teal animate-ping" />
                <span className="text-[10px] font-black text-zinc-500 tracking-[0.2em] uppercase">
                    System Status: Operational // Updating Character Model 2026.4
                </span>
            </div>
        </div>
      </div>
    </section>
  );
}

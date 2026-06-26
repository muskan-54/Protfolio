"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCheck } from "lucide-react";

export default function WhatsAppProof() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 backdrop-blur-md">
      <div className="flex items-center gap-2 mb-6 text-zinc-500">
        <MessageCircle size={20} className="text-[#25D366]" />
        <span className="text-xs font-bold uppercase tracking-widest">WhatsApp Validation</span>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-sm w-full"
      >
        {/* Adnan's Message */}
        <div className="bg-[#202c33] text-[#e9edef] p-4 rounded-lg rounded-tl-none shadow-lg border-l-4 border-medical-teal mb-2">
          <p className="text-sm font-medium leading-relaxed">
            "Muskan, if you're serious about this, I want to be the CTO of your idea. This Roman Urdu logic for Rozgar AI is a game-changer."
          </p>
          <div className="flex justify-end items-center gap-1 mt-2">
            <span className="text-[10px] text-zinc-500">11:42 PM</span>
            <CheckCheck size={14} className="text-[#53bdeb]" />
          </div>
        </div>
        
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#202c33] transform rotate-45 border-l border-t border-zinc-800" />
      </motion.div>
      
      <p className="mt-4 text-xs text-zinc-600 italic">
        Validation message from Adnan (Developer Partner)
      </p>
    </div>
  );
}


import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs md:text-sm font-medium mb-6 md:mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Open for Collaborations
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1] animate-fade-in-up delay-100">
          Architecting <br className="hidden sm:block" />
          <span className="gradient-text">Intelligence</span> <br />
          Crafting <span className="text-white">Experiences.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-400 leading-relaxed mb-10 md:mb-12 animate-fade-in-up delay-200">
          Muskan Fatima — A Frontend Engineer and AI Architect pushing the boundaries of what's possible with LLMs, Agent SDKs, and high-performance automation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-lg shadow-lg shadow-indigo-500/20 transition-all transform hover:scale-105 active:scale-95">
            Explore Projects
          </a>
          <a href="#/story" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 text-white rounded-full font-bold text-lg transition-all border border-white/10">
            My Journey
          </a>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-40 grayscale hover:grayscale-0 transition-all animate-fade-in-up delay-400">
           <div className="flex items-center justify-center gap-2 font-bold text-lg md:text-xl font-mono tracking-tighter">React</div>
           <div className="flex items-center justify-center gap-2 font-bold text-lg md:text-xl font-mono tracking-tighter">Gemini</div>
           <div className="flex items-center justify-center gap-2 font-bold text-lg md:text-xl font-mono tracking-tighter">Docker</div>
           <div className="flex items-center justify-center gap-2 font-bold text-lg md:text-xl font-mono tracking-tighter">Zapier</div>
        </div>
      </div>

      {/* Hero background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

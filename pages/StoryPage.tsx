
import React from 'react';

const StoryPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-black mb-8 leading-tight animate-fade-in-up opacity-0">
        From Small Town Dreams to <br />
        <span className="gradient-text">Agentic AI Reality.</span>
      </h1>
      
      <div className="space-y-12 text-slate-300 text-lg leading-relaxed">
        <section className="glass p-8 rounded-3xl border-l-4 border-l-indigo-500 animate-fade-in-up delay-100 opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-white">The Beginning</h2>
          <p>
            I started as a small-town citizen with a massive curiosity for the digital world. For a long time, I was the classic introvert—someone who preferred the company of code over crowds. I had a deep-seated fear of talking, of standing out, and of sharing my ideas with the world.
          </p>
        </section>

        <section className="animate-fade-in-up delay-200 opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-white">The Turning Point: Introvert to Ambivert</h2>
          <p className="mb-6">
            Everything changed when I realized that the best software isn't built in a vacuum. It's built through collaboration and communication. I pushed myself to transition from an introvert to an ambivert, forcing myself out of my comfort zone one conversation at a time.
          </p>
          <p>
            This journey led me to <strong>GSSoC (GirlScript Summer of Code)</strong>, where I didn't just contribute code—I stepped into marketing and seminars. I transformed my fear of talking into a passion for advocacy, teaching others how to bridge the gap between human intent and machine execution.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 animate-fade-in-up delay-300 opacity-0">
          <div className="glass p-6 rounded-2xl border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
            <h3 className="font-bold text-indigo-400 mb-2 uppercase tracking-wider text-xs">The Evolution</h3>
            <p className="text-sm">Transitioned from basic frontend components to architecting autonomous <strong>Agentic AI</strong> systems that reason and act using modern SDKs.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-colors">
            <h3 className="font-bold text-purple-400 mb-2 uppercase tracking-wider text-xs">The Mission</h3>
            <p className="text-sm">Empowering developers from all backgrounds to leverage AI and Zapier automation, regardless of their starting point.</p>
          </div>
        </section>

        <section className="animate-fade-in-up delay-400 opacity-0">
          <h2 className="text-2xl font-bold mb-4 text-white">Today</h2>
          <p>
            Today, I stand at the intersection of UX and AI. I build agents that don't just answer questions—they solve problems. My story is a testament that your origin doesn't define your destination; your willingness to evolve does.
          </p>
        </section>
      </div>
    </div>
  );
};

export default StoryPage;

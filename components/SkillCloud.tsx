
import React from 'react';

const SkillCloud: React.FC = () => {
  const skills = [
    { name: 'React', color: 'indigo' },
    { name: 'Next.js', color: 'slate' },
    { name: 'TypeScript', color: 'blue' },
    { name: 'Gemini API', color: 'purple' },
    { name: 'Docker SDK', color: 'blue' },
    { name: 'Agent SDKs', color: 'cyan' },
    { name: 'Zapier Automation', color: 'orange' },
    { name: 'Figma', color: 'pink' },
    { name: 'Tailwind CSS', color: 'sky' },
    { name: 'Python', color: 'yellow' },
    { name: 'Claude API', color: 'orange' },
    { name: 'Node.js', color: 'green' },
    { name: 'LangChain', color: 'emerald' },
    { name: 'Vector DBs', color: 'rose' },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, idx) => (
        <div 
          key={idx}
          style={{ animationDelay: `${idx * 50}ms` }}
          className="px-6 py-3 glass rounded-2xl text-sm font-semibold hover:bg-white/10 hover:scale-105 transition-all cursor-default border border-white/5 animate-fade-in-up opacity-0"
        >
          {skill.name}
        </div>
      ))}
      <div className="w-full mt-8 p-6 bg-indigo-600/10 rounded-3xl border border-indigo-500/20 animate-fade-in-up delay-300 opacity-0">
        <h5 className="text-indigo-300 font-bold mb-2 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          Current Focus
        </h5>
        <p className="text-slate-400 text-sm">
          Mastering <strong>Agent SDKs</strong> for autonomous systems and <strong>Zapier Automation</strong> to build high-efficiency agentic workflows.
        </p>
      </div>
    </div>
  );
};

export default SkillCloud;

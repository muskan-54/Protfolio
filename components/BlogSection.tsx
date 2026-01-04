
import React from 'react';
import { Article } from '../types';

interface BlogSectionProps {
  articles: Article[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ articles }) => {
  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4 italic underline decoration-indigo-500 underline-offset-8">Think <span className="text-slate-500">Log</span>.</h2>
          <p className="text-slate-400">Writing about AI, UI engineering, and my coding adventures.</p>
        </div>
        <a href="https://dev.to/muskanfatim" className="text-indigo-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
          Read all on Dev.to
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, idx) => (
          <a 
            key={idx} 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group glass p-8 rounded-3xl block hover:bg-white/[0.04] transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest px-3 py-1 bg-indigo-500/10 rounded-full">{article.platform}</span>
              <span className="text-xs text-slate-500">{article.date}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">{article.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{article.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

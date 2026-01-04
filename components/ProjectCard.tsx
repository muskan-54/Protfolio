
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col glass rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 flex gap-2">
           <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
             {project.category}
           </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
          >
            Live Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <button className="text-slate-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

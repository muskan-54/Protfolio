
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ChatWidget from './components/ChatWidget';
import BlogSection from './components/BlogSection';
import SkillCloud from './components/SkillCloud';
import Footer from './components/Footer';
import StoryPage from './pages/StoryPage';
import ContactPage from './pages/ContactPage';
import { PROJECTS, ARTICLES } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <ChatWidget />
        <Footer />
        
        {/* Background Gradients */}
        <div className="fixed top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[60%] md:h-[40%] bg-indigo-500/10 blur-[120px] -z-10 rounded-full"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[60%] md:h-[40%] bg-purple-500/10 blur-[120px] -z-10 rounded-full"></div>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Featured Projects Section */}
      <section id="projects" className="py-16 md:py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight animate-fade-in-up">Featured <span className="gradient-text">Work</span></h2>
          <p className="text-slate-400 max-w-2xl text-base md:text-lg animate-fade-in-up delay-100">
            A selection of projects that demonstrate my ability to combine frontend excellence with cutting-edge AI capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center animate-fade-in-up delay-300">
          <Link 
            to="/projects" 
            className="inline-flex items-center px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-full text-sm font-medium"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Skills & Tools */}
      <section id="skills" className="py-16 md:py-24 bg-white/[0.02] border-y border-white/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">Tools & <span className="gradient-text">Workflow</span></h2>
              <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed text-center lg:text-left">
                I don't just use AI; I build with it. My workflow is enhanced by <strong>Docker SDK</strong>, <strong>Figma</strong> prototyping, and Gemini-powered agents.
              </p>
              <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-start gap-4 glass p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="bg-indigo-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-indigo-300">Agentic Orchestration</h4>
                    <p className="text-sm text-slate-400">Building autonomous systems using LangChain and Docker containers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 glass p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="bg-purple-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-purple-300">High-Fidelity Prototyping</h4>
                    <p className="text-sm text-slate-400">Designing complex AI interfaces in Figma before writing a single line of React.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up delay-200">
              <SkillCloud />
            </div>
          </div>
        </div>
      </section>

      {/* Blogs & Articles */}
      <div className="animate-fade-in-up delay-100">
        <BlogSection articles={ARTICLES} />
      </div>

      {/* About Me Section on Home */}
      <section id="about" className="py-16 md:py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="glass p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">The Mindset.</h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                I'm Muskan Fatima—an Agentic AI Developer who transitioned from a small-town citizen to a public speaker and developer advocate. 
              </p>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                My journey from an introvert with a fear of talking to an ambivert conducting seminars at GSSoC has defined my approach to technology: it's all about communication and connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/story" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all text-center transform hover:scale-105 active:scale-95">
                  Read My Full Story
                </Link>
                <Link to="/contact" className="glass hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-all text-center transform hover:scale-105">
                  Let's Connect
                </Link>
              </div>
            </div>
            <div className="relative aspect-square group animate-fade-in-up delay-200">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] group-hover:bg-indigo-500/30 transition-all"></div>
              <img 
                src="https://picsum.photos/seed/muskan/600/600" 
                alt="Muskan Fatima" 
                className="relative z-10 w-full h-full object-cover rounded-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 animate-fade-in-up">All <span className="gradient-text">Creations</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((project, idx) => (
          <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 50}ms` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


import React from 'react';

const ContactPage: React.FC = () => {
  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muskan-fatima-ab90732b7/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      ),
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitter (X)',
      url: 'https://x.com/AbdulRehma59653',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      ),
      color: 'hover:text-slate-100'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/muskan965352/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      ),
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-black mb-6 animate-fade-in-up opacity-0">Let's <span className="gradient-text">Collaborate.</span></h1>
      <p className="text-slate-400 text-xl mb-12 animate-fade-in-up delay-100 opacity-0">I'm always open to talking about Agentic AI, Zapier automation, or new opportunities.</p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {socials.map((social, idx) => (
          <a 
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${(idx + 2) * 100}ms` }}
            className={`glass p-8 rounded-3xl flex flex-col items-center gap-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-fade-in-up opacity-0 ${social.color}`}
          >
            <div className="animate-float" style={{ animationDelay: `${idx * 500}ms` }}>
              {social.icon}
            </div>
            <span className="font-bold tracking-tight">{social.name}</span>
          </a>
        ))}
      </div>

      <div className="glass p-12 rounded-[2.5rem] bg-indigo-600/5 border-indigo-500/20 animate-fade-in-up delay-400 opacity-0 relative overflow-hidden group">
        <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <h2 className="text-2xl font-bold mb-4 relative z-10">Send a Direct Message</h2>
        <p className="text-slate-400 mb-8 relative z-10">Need an automation architect or an AI dev?</p>
        <a href="mailto:mushiifatima3456@gmail.com" className="text-2xl md:text-3xl font-mono text-indigo-400 hover:text-indigo-300 transition-all break-all relative z-10 block hover:scale-105 transform">
          mushiifatima3456@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactPage;

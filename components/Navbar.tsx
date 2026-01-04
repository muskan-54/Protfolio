
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Story', path: '/story' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? 'py-4 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-6 md:py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-xs text-white group-hover:rotate-12 transition-transform">MF</div>
            <span>Muskan Fatima<span className="text-indigo-500">.</span></span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${location.pathname === item.path ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105 active:scale-95"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all transform origin-left ${isMenuOpen ? 'rotate-45' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all transform origin-left ${isMenuOpen ? '-rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-[#020617]/95 backdrop-blur-2xl z-[55] transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navItems.map((item, idx) => (
            <Link 
              key={item.name} 
              to={item.path}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-3xl font-bold transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${location.pathname === item.path ? 'text-indigo-400' : 'text-slate-300 hover:text-white'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            style={{ transitionDelay: `${navItems.length * 50}ms` }}
            className={`mt-4 px-10 py-4 bg-indigo-600 text-white rounded-full text-xl font-bold transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            Get in Touch
          </Link>

          {/* Social icons in mobile menu */}
          <div className={`mt-12 flex gap-6 transition-all duration-700 delay-300 transform ${isMenuOpen ? 'translate-y-0 opacity-50' : 'translate-y-8 opacity-0'}`}>
            <span className="text-xs uppercase tracking-widest font-mono">Let's connect</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

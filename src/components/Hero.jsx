import React from 'react';
import { ChevronDown } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-10 top-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute left-10 bottom-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block p-2 px-4 rounded-full bg-slate-800/50 border border-slate-700 mb-6 backdrop-blur-sm">
          <span className="text-cyan-400 text-sm font-mono">Future AI Engineer</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{portfolioData.personal.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.personal.title}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25 w-full sm:w-auto"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all w-full sm:w-auto"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 animate-bounce text-slate-500">
          <ChevronDown className="mx-auto" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
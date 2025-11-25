import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import portfolioData from '../data/portfolioData';


const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
        <p className="text-slate-400 mb-12 text-lg">
          I'm currently looking for internships and junior AI Developer roles. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a 
            href={`mailto:${portfolioData.personal.email}`}
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300 mb-3">
              <Mail className="text-white" size={28} />
            </div>
            <span className="text-slate-300 group-hover:text-white">Email</span>
          </a>
          
          <a 
            href={portfolioData.personal.linkedinUrl}
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-[#0077b5] transition-colors duration-300 mb-3">
              <Linkedin className="text-white" size={28} />
            </div>
            <span className="text-slate-300 group-hover:text-white">LinkedIn</span>
          </a>

          <a 
            href={portfolioData.personal.githubUrl}
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-300 mb-3">
              <Github className="text-white" size={28} />
            </div>
            <span className="text-slate-300 group-hover:text-white">GitHub</span>
          </a>
        </div>

        <div className="text-slate-500 text-sm border-t border-slate-700 pt-8">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
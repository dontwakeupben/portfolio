import React from 'react';
import { Github, ExternalLink, Cpu } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const ProjectCard = ({ project }) => (
  <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-mono text-cyan-400 mb-1 block">{project.category}</span>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        </div>
        <Cpu className="text-slate-600 group-hover:text-purple-500 transition-colors" />
      </div>
      
      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs font-medium text-slate-300 bg-slate-900 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-auto">
        <a 
          href={project.githubLink}
          className="flex items-center text-sm text-slate-300 hover:text-white transition-colors"
        >
          <Github size={16} className="mr-2" /> Code
        </a>
        {project.demoLink && (
          <a 
            href={project.demoLink}
            className="flex items-center text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ExternalLink size={16} className="mr-2" /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400">Applying AI theory to real-world problems.</p>
          </div>
          <a href={portfolioData.personal.githubUrl} className="hidden md:flex items-center text-cyan-400 hover:text-cyan-300 mt-4 md:mt-0">
            View Github Profile <ExternalLink size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href={portfolioData.personal.githubUrl} className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
            View Github Profile <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

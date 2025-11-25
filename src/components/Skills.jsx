import React from 'react';
import { Code, Brain, Database, Terminal } from 'lucide-react';
import portfolioData from '../data/portfolioData';


const Skills = () => {
  const getIcon = (category) => {
    switch(category) {
      case 'Languages': return <Code size={20} />;
      case 'AI & ML Frameworks': return <Brain size={20} />;
      case 'Data Science': return <Database size={20} />;
      default: return <Terminal size={20} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tools and technologies I use to build intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-colors duration-300">
              <div className="flex items-center mb-4 text-cyan-400">
                {getIcon(skillGroup.category)}
                <h3 className="ml-2 font-bold text-white">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
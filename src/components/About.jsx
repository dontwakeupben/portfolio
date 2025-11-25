import React from 'react';
import { Brain } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-12 h-1 bg-cyan-500 mr-4 rounded-full"></span>
              About Me
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {portfolioData.personal.bio}
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-cyan-400">Education</h3>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-slate-700 pl-4">
                  <h4 className="font-bold text-white">{edu.school}</h4>
                  <p className="text-purple-400">{edu.degree}</p>
                  <p className="text-sm text-slate-500 mb-2">{edu.period}</p>
                  <p className="text-slate-400 text-sm">{edu.description}</p>
                  {edu.gpa && <p className="text-slate-400 text-sm italic mt-1">{edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-2xl rotate-6 opacity-30"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                {/* Placeholder for Profile Image - using an icon for now */}
                <div className="text-center p-8">
                  <Brain size={64} className="mx-auto text-cyan-400 mb-4" />
                  <p className="text-slate-400 text-sm">
                    Add your photo here by replacing this div with an &lt;img&gt; tag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
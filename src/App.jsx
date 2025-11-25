import React from 'react';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';


const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
export default App;

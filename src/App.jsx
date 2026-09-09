import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Competencies } from './components/Competencies';
import { CaseStudies } from './components/CaseStudies';

function App() {
  return (
    <div className="min-h-screen bg-[#FBFBF9]">
      <Hero />
      <About />
      <Competencies />
      <CaseStudies />
    </div>
  );
}

export default App;

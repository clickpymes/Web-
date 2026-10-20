import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Herramientas } from './components/Herramientas';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Herramientas />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;
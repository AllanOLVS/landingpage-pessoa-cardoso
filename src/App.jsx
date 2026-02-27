import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Differentials from './components/Differentials';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Team from './components/Team';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-stone-50 text-stone-800 selection:bg-amber-700 selection:text-white">
      <Header />
      <Hero />
      <Differentials />
      <About />
      <PracticeAreas />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
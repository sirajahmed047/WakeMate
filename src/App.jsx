import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import CallToAction from './sections/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;

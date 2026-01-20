import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AudioExperience from './sections/AudioExperience';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import CallToAction from './sections/CallToAction';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Header onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <AudioExperience />
            <HowItWorks />
            <Features />
            <CallToAction />
          </>
        ) : (
          <PrivacyPolicy />
        )}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;

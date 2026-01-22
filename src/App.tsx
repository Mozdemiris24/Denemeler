import { useState } from 'react';
import Navbar from './components/Navbar';
import ParallaxHero from './components/ParallaxHero';
import StorySection from './components/StorySection';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { BrutalistHero, BrutalistFeatures, BrutalistCTA, BrutalistFooter } from './designs/brutalist';
import { NordicHero } from './designs/nordic';
import { GlassHero } from './designs/glass';
import { NeoHero, NeoFeatures, NeoCTA, NeoFooter } from './designs/neo';
import { SwissHero, SwissFeatures, SwissCTA, SwissFooter } from './designs/swiss';
import { BentoHero, BentoFeatures, BentoCTA, BentoFooter } from './designs/bento';
import { RetroHero, RetroFeatures, RetroCTA, RetroFooter } from './designs/retro';
import { CyberHero, CyberFeatures, CyberCTA, CyberFooter } from './designs/cyber';
import { MonoHero, MonoFeatures, MonoCTA, MonoFooter } from './designs/mono';
import { NordicFeatures, NordicCTA, NordicFooter } from './designs/nordic'; // Added specialized exports
import { GlassFeatures, GlassCTA, GlassFooter } from './designs/glass'; // Added specialized exports
import './index.css';

function App() {
  const [currentDesign, setCurrentDesign] = useState(0);

  const handleDesignChange = (design: number) => {
    setCurrentDesign(design);
    // Scroll to top when changing designs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentDesign) {
      case 0:
        // Parallax Design - Original
        return (
          <>
            <ParallaxHero />
            <StorySection />
            <Features />
            <CTA />
          </>
        );
      case 1:
        // Brutalist Design - Full Page Dark Mode
        return (
          <>
            <BrutalistHero />
            <BrutalistFeatures />
            <BrutalistCTA />
          </>
        );
      case 2:
        // Nordic Minimal
        return (
          <>
            <NordicHero />
            <NordicFeatures />
            <NordicCTA />
          </>
        );
      case 3:
        // Glass Design
        return (
          <>
            <GlassHero />
            <GlassFeatures />
            <GlassCTA />
          </>
        );
      case 4:
        // Neo-Brutalist Pop
        return (
          <>
            <NeoHero />
            <NeoFeatures />
            <NeoCTA />
          </>
        );
      case 5:
        // Swiss International
        return (
          <>
            <SwissHero />
            <SwissFeatures />
            <SwissCTA />
          </>
        );
      case 6:
        // Bento Grid
        return (
          <>
            <BentoHero />
            <BentoFeatures />
            <BentoCTA />
          </>
        );
      case 7:
        // Retro Synthwave
        return (
          <>
            <RetroHero />
            <RetroFeatures />
            <RetroCTA />
          </>
        );
      case 8:
        // Cyberpunk Matrix
        return (
          <>
            <CyberHero />
            <CyberFeatures />
            <CyberCTA />
          </>
        );
      case 9:
        // Monochrome Luxury
        return (
          <>
            <MonoHero />
            <MonoFeatures />
            <MonoCTA />
          </>
        );
      default:
        return (
          <>
            <ParallaxHero />
            <StorySection />
            <Features />
            <CTA />
          </>
        );
    }
  };

  const renderFooter = () => {
    switch (currentDesign) {
      case 1: return <BrutalistFooter />;
      case 2: return <NordicFooter />;
      case 3: return <GlassFooter />;
      case 4: return <NeoFooter />;
      case 5: return <SwissFooter />;
      case 6: return <BentoFooter />;
      case 7: return <RetroFooter />;
      case 8: return <CyberFooter />;
      case 9: return <MonoFooter />;
      default: return <Footer />;
    }
  };

  return (
    <>
      <Navbar currentDesign={currentDesign} onDesignChange={handleDesignChange} />
      <main>
        {renderContent()}
      </main>
      {renderFooter()}
    </>
  );
}

export default App;

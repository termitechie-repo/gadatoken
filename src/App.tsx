import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ecosystem } from './components/Ecosystem';
import { TokenUtility } from './components/TokenUtility';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { WhitepaperViewer } from './components/WhitepaperViewer';
import { TrustSecurity } from './components/TrustSecurity';
import { Disclaimer } from './components/Disclaimer';
import { Footer } from './components/Footer';
import { LegalPageViewer } from './components/LegalPageViewer';
import { SiteOpeningLoader } from './components/SiteOpeningLoader';
import { CoinConfetti } from './components/CoinConfetti';
import { TOKEN_DETAILS } from './data/whitepaperData';
import { Check } from 'lucide-react';

type LegalView = 'privacy' | 'terms' | 'crypto-disclosures';
type ViewMode = 'home' | LegalView;

export function App() {
  const [copied, setCopied] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [confettiTrigger, setConfettiTrigger] = useState<number>(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'privacy' || hash === 'terms' || hash === 'crypto-disclosures') {
        setCurrentView(hash as LegalView);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    // Check hash on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleCopyContract = () => {
    navigator.clipboard.writeText(TOKEN_DETAILS.contractAddress);
    setCopied(true);
    setToastMessage("Contract address copied to clipboard!");
    
    setTimeout(() => {
      setCopied(false);
    }, 2500);

    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLegal = (doc: LegalView) => {
    setCurrentView(doc);
    window.location.hash = doc;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoaderComplete = () => {
    setShowLoader(false);
    setShowConfetti(true);
    setConfettiTrigger(Date.now());
  };

  const handleTriggerConfetti = () => {
    setShowConfetti(true);
    setConfettiTrigger(Date.now());
  };

  const handleConfettiDone = () => {
    setShowConfetti(false);
  };

  return (
    <div className="min-h-screen bg-[#080014] text-slate-100 flex flex-col font-sans relative selection:bg-purple-600/30 selection:text-purple-200">
      
      {/* Cinematic Site Opening Loader with 3D Spinning Coin */}
      {showLoader && (
        <SiteOpeningLoader 
          onComplete={handleLoaderComplete} 
        />
      )}

      {/* Cinematic Gada Token 3D Coin Confetti Drop */}
      {showConfetti && (
        <CoinConfetti 
          key={confettiTrigger} 
          triggerKey={confettiTrigger} 
          onComplete={handleConfettiDone} 
        />
      )}

      {/* Top Fixed Navbar */}
      <Navbar 
        onCopyContract={handleCopyContract} 
        copied={copied} 
        isLegalView={currentView !== 'home'}
        onNavigateHome={navigateToHome}
      />

      {/* Main Page Flow vs Legal Reader */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            <Hero 
              onCopyContract={handleCopyContract} 
              copied={copied} 
              onTriggerConfetti={handleTriggerConfetti}
            />
            <Ecosystem />
            <TokenUtility />
            <Tokenomics />
            <Roadmap />
            <WhitepaperViewer />
            <TrustSecurity />
            <Disclaimer />
          </>
        ) : (
          <LegalPageViewer 
            initialDocId={currentView}
            onNavigateHome={navigateToHome}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        onCopyContract={handleCopyContract} 
        copied={copied} 
        onNavigateLegal={navigateToLegal}
      />

      {/* Copy Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#180238]/95 border border-purple-500/50 text-white shadow-2xl shadow-purple-950/80 backdrop-blur-md animate-bounce duration-300">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Check className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs font-mono font-medium text-purple-100">
            {toastMessage}
          </div>
        </div>
      )}

    </div>
  );
}

export default App;

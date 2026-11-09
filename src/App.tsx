import React, { useState } from 'react';
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
import { TOKEN_DETAILS } from './data/whitepaperData';
import { Check } from 'lucide-react';

export function App() {
  const [copied, setCopied] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-[#080014] text-slate-100 flex flex-col font-sans relative selection:bg-purple-600/30 selection:text-purple-200">
      
      {/* Top Fixed Navbar */}
      <Navbar onCopyContract={handleCopyContract} copied={copied} />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero onCopyContract={handleCopyContract} copied={copied} />
        <Ecosystem />
        <TokenUtility />
        <Tokenomics />
        <Roadmap />
        <WhitepaperViewer />
        <TrustSecurity />
        <Disclaimer />
      </main>

      {/* Global Footer */}
      <Footer onCopyContract={handleCopyContract} copied={copied} />

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

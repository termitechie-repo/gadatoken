import React from 'react';
import { Copy, Check, ExternalLink, ArrowUp } from 'lucide-react';
import { TOKEN_DETAILS } from '../data/whitepaperData';

interface FooterProps {
  onCopyContract: () => void;
  copied: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onCopyContract, copied }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05000C] border-t border-purple-500/20 pt-16 pb-12 text-slate-200 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-500/40 p-0.5 bg-[#12002B] shrink-0 shadow-md shadow-purple-600/20">
                <img 
                  src="/gadatokenlogo.jpeg" 
                  alt="Gada Token Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-left">
                <span className="font-extrabold text-white text-lg tracking-tight flex items-center gap-2">
                  GADA TOKEN
                  <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30 px-1.5 py-0.5 rounded font-bold">
                    GDT
                  </span>
                </span>
                <span className="text-xs text-purple-300 block font-mono font-bold">
                  BNB Smart Chain (BEP-20)
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 font-medium max-w-md leading-relaxed mb-6 break-words text-center sm:text-left">
              The foundational utility asset powering decentralized communication, creator live-streaming, digital marketplace trade, and banking settlement across the Gada ecosystem.
            </p>

            {/* Contract Bar (Wrap-Safe and Centered on Mobile) */}
            <div className="inline-flex items-center justify-between gap-2 p-2 rounded-xl bg-[#14022D] border border-purple-500/30 text-xs sm:text-sm font-mono max-w-full mx-auto sm:mx-0 shadow-inner">
              <span className="text-purple-300 font-bold px-1 hidden sm:inline">Contract:</span>
              <span className="text-white font-bold truncate select-all font-mono">
                <span className="sm:hidden">{`${TOKEN_DETAILS.contractAddress.slice(0, 10)}...${TOKEN_DETAILS.contractAddress.slice(-8)}`}</span>
                <span className="hidden sm:inline">{TOKEN_DETAILS.contractAddress}</span>
              </span>
              <button
                onClick={onCopyContract}
                className="p-1.5 rounded-lg bg-[#200445] hover:bg-[#2C065E] text-slate-100 hover:text-white transition-colors shrink-0"
                title="Copy Address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Ecosystem Navigation */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold mb-4">
              Ecosystem Platforms
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-200 w-full max-w-xs sm:max-w-none">
              <li>
                <a 
                  href={TOKEN_DETAILS.ecosystem.socialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors flex items-center justify-between p-1.5 rounded-lg hover:bg-purple-950/40"
                >
                  <div className="flex items-center gap-2.5">
                    <img src="/gadachat-logo.png" alt="Gada Chat" className="w-5 h-5 rounded-md object-contain shrink-0 border border-purple-500/30" />
                    <span className="font-semibold text-white">gada.chat</span>
                    <span className="text-[11px] text-purple-300/80 font-mono">(Social)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                </a>
              </li>
              <li>
                <a 
                  href={TOKEN_DETAILS.ecosystem.messengerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors flex items-center justify-between p-1.5 rounded-lg hover:bg-indigo-950/40"
                >
                  <div className="flex items-center gap-2.5">
                    <img src="/gadavoice-logo.png" alt="GadaVoice" className="w-5 h-5 rounded-md object-contain shrink-0 border border-indigo-500/30" />
                    <span className="font-semibold text-white">gadavoice.com</span>
                    <span className="text-[11px] text-indigo-300/80 font-mono">(Messenger)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                </a>
              </li>
              <li>
                <a 
                  href={TOKEN_DETAILS.websiteUrl}
                  className="hover:text-purple-300 transition-colors flex items-center justify-between p-1.5 rounded-lg hover:bg-purple-950/40"
                >
                  <div className="flex items-center gap-2.5">
                    <img src="/gadatokenlogo.jpeg" alt="Gada Token" className="w-5 h-5 rounded-md object-cover shrink-0 border border-purple-500/30" />
                    <span className="font-semibold text-white">gadatoken.com</span>
                    <span className="text-[11px] text-purple-300/80 font-mono">(Portal)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                </a>
              </li>
              <li>
                <a 
                  href={TOKEN_DETAILS.explorerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors flex items-center justify-between p-1.5 rounded-lg hover:bg-purple-950/40"
                >
                  <div className="flex items-center gap-2.5">
                    <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-white">BscScan Explorer</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-bold mb-4">
              Documentation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-200 w-full max-w-xs sm:max-w-none">
              <li>
                <a href="#whitepaper" className="hover:text-purple-300 transition-colors block py-1">
                  Interactive Whitepaper
                </a>
              </li>
              <li>
                <a href="/Gada-Token-Whitepaper.pptx" download className="hover:text-purple-300 transition-colors block py-1">
                  Download Whitepaper (.pptx)
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-purple-300 transition-colors block py-1">
                  5-Phase Roadmap
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-purple-300 transition-colors block py-1">
                  Supply & Distribution
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-purple-300 transition-colors block py-1">
                  Security Framework
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-slate-300 font-medium">
          <div className="text-center sm:text-left">
            © 2026 Gada Token (gadatoken.com). All rights reserved. Hosted on Cloudflare Edge.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-purple-300 hover:text-white font-bold transition-colors self-center sm:self-auto"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

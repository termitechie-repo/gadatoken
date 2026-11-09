import React from 'react';
import { Copy, Check, ExternalLink, ArrowUp, Globe, MessageSquare, Shield } from 'lucide-react';
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
    <footer className="bg-[#05070B] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/30 p-0.5 bg-[#0D1322]">
                <img 
                  src="/gadatokenlogo.jpeg" 
                  alt="Gada Token Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight flex items-center gap-2">
                  GADA TOKEN
                  <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded font-semibold">
                    GDT
                  </span>
                </span>
                <span className="text-xs text-slate-400 block font-mono">
                  BNB Smart Chain (BEP-20)
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed mb-6">
              The foundational utility asset powering decentralized communication, creator live-streaming, digital marketplace trade, and banking settlement across the Gada ecosystem.
            </p>

            {/* Contract Bar */}
            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono max-w-full overflow-hidden">
              <span className="text-slate-400 px-1">Contract:</span>
              <span className="text-slate-200 truncate select-all">{TOKEN_DETAILS.contractAddress}</span>
              <button
                onClick={onCopyContract}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy Address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Ecosystem Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Ecosystem Platforms
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a 
                  href={TOKEN_DETAILS.ecosystem.socialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>gada.chat (Social)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a 
                  href={TOKEN_DETAILS.ecosystem.messengerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>gadavoice.com (Messenger)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a 
                  href={TOKEN_DETAILS.websiteUrl}
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>gadatoken.com (Portal)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a 
                  href={TOKEN_DETAILS.explorerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>BscScan Contract Explorer</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Documentation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#whitepaper" className="hover:text-amber-400 transition-colors">
                  Interactive Whitepaper
                </a>
              </li>
              <li>
                <a href="/Gada-Token-Whitepaper.pptx" download className="hover:text-amber-400 transition-colors">
                  Download Whitepaper (.pptx)
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-amber-400 transition-colors">
                  5-Phase Roadmap
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-amber-400 transition-colors">
                  Supply & Distribution
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-amber-400 transition-colors">
                  Security Framework
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © 2026 Gada Token (gadatoken.com). All rights reserved. Hosted on Cloudflare Edge.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

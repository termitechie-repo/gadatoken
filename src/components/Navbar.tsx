import React, { useState, useEffect } from 'react';
import { Copy, Check, ExternalLink, Menu, X, FileText, Shield } from 'lucide-react';
import { TOKEN_DETAILS } from '../data/whitepaperData';

interface NavbarProps {
  onCopyContract: () => void;
  copied: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyContract, copied }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Utility', href: '#utility' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Whitepaper', href: '#whitepaper' },
    { name: 'Security', href: '#security' },
  ];

  const shortAddress = `${TOKEN_DETAILS.contractAddress.slice(0, 6)}...${TOKEN_DETAILS.contractAddress.slice(-4)}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080B11]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/30 p-0.5 bg-[#0D1322] shadow-sm group-hover:border-amber-400 transition-colors">
              <img 
                src="/gadatokenlogo.jpeg" 
                alt="Gada Token Logo" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-lg flex items-center gap-2">
                GADA TOKEN
                <span className="text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded font-semibold tracking-wider">
                  {TOKEN_DETAILS.symbol}
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-tight -mt-0.5">
                BNB Smart Chain
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Contract Copy Pill */}
            <button
              onClick={onCopyContract}
              title="Copy Smart Contract Address"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-amber-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{shortAddress}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400 hover:text-amber-400" />
              )}
            </button>

            {/* Read Whitepaper CTA */}
            <a
              href="#whitepaper"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500/90 to-amber-600 text-slate-950 font-semibold text-xs tracking-wide hover:from-amber-400 hover:to-amber-500 transition-all shadow-md shadow-amber-500/10"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Whitepaper</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onCopyContract}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F1A] border-b border-white/10 px-4 pt-4 pb-6 space-y-3 mt-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900/50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                onCopyContract();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
            >
              <span>Contract: {shortAddress}</span>
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <a
              href="#whitepaper"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-semibold text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Read Whitepaper</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

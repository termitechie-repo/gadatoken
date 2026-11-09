import React, { useState, useEffect } from 'react';
import { Copy, Check, Menu, X, FileText, ArrowLeft } from 'lucide-react';
import { TOKEN_DETAILS } from '../data/whitepaperData';

interface NavbarProps {
  onCopyContract: () => void;
  copied: boolean;
  isLegalView?: boolean;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onCopyContract, 
  copied, 
  isLegalView = false,
  onNavigateHome 
}) => {
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isLegalView && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isLegalView && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  const shortAddress = `${TOKEN_DETAILS.contractAddress.slice(0, 6)}...${TOKEN_DETAILS.contractAddress.slice(-4)}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080014]/90 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-950/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={handleBrandClick}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-500/40 p-0.5 bg-[#12002B] shadow-sm shadow-purple-500/20 group-hover:border-purple-400 group-hover:shadow-purple-500/40 transition-all">
              <img 
                src="/gadatokenlogo.jpeg" 
                alt="Gada Token Logo" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-lg flex items-center gap-2">
                GADA TOKEN
                <span className="text-[10px] font-mono uppercase bg-purple-500/15 text-purple-300 border border-purple-500/30 px-1.5 py-0.5 rounded font-semibold tracking-wider">
                  {TOKEN_DETAILS.symbol}
                </span>
              </span>
              <span className="text-[11px] text-purple-300/70 font-mono tracking-tight -mt-0.5">
                BNB Smart Chain
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {isLegalView && onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="text-sm font-semibold text-purple-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            )}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-purple-300 transition-colors"
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
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#14022D]/90 border border-purple-500/30 hover:border-purple-400/60 text-xs font-mono text-purple-200 hover:text-white transition-all shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>{shortAddress}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-purple-300/80 hover:text-purple-200" />
              )}
            </button>

            {/* Read Whitepaper CTA */}
            <a
              href="#whitepaper"
              onClick={(e) => handleLinkClick(e, '#whitepaper')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-semibold text-xs tracking-wide hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md shadow-purple-600/30 border border-purple-400/30"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Whitepaper</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onCopyContract}
              className="p-2 rounded-lg bg-[#14022D] border border-purple-500/30 text-purple-200 text-xs font-mono"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#14022D]/90 border border-purple-500/30 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0122] border-b border-purple-500/20 px-4 pt-4 pb-6 space-y-3 mt-3">
          {isLegalView && onNavigateHome && (
            <button
              onClick={() => {
                onNavigateHome();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-base font-semibold text-purple-300 hover:bg-purple-950/40 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Home</span>
            </button>
          )}

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-purple-900/60 space-y-2">
            <button
              onClick={() => {
                onCopyContract();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#14022D] border border-purple-500/30 text-xs font-mono text-purple-200"
            >
              <span>Contract: {shortAddress}</span>
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <a
              href="#whitepaper"
              onClick={(e) => handleLinkClick(e, '#whitepaper')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-md shadow-purple-600/30"
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

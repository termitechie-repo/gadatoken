import React from 'react';
import { Copy, Check, ExternalLink, ShieldCheck, ArrowRight, FileText, Zap } from 'lucide-react';
import { TOKEN_DETAILS } from '../data/whitepaperData';

interface HeroProps {
  onCopyContract: () => void;
  copied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyContract, copied }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Electric purple ambient glow and lighting halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[450px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-violet-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Network & Live Status Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#160233]/90 border border-purple-500/40 text-[11px] sm:text-xs font-mono text-purple-200 shadow-sm shadow-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>BNB Smart Chain (BEP-20)</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-400/40 text-[11px] sm:text-xs font-mono text-purple-300">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
            <span>Public Contract Verified</span>
          </div>
        </div>

        {/* 3D Coin Visual Showcase with Floating Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Pulsing neon halo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 rounded-full blur-2xl opacity-40 group-hover:opacity-70 animate-pulse-glow transition-all"></div>
            
            {/* Floating Coin Container */}
            <div className="relative w-40 sm:w-52 md:w-60 rounded-3xl overflow-hidden border border-purple-400/50 shadow-2xl shadow-purple-950/90 bg-[#12002B] p-1.5 animate-float">
              <img 
                src="/gadatoken-banner.jpg" 
                alt="Gada Token 3D Coin" 
                className="w-full h-auto rounded-2xl object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/gadatoken.jpeg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            The Unified Value Layer for the <br className="hidden sm:inline" />
            <span className="text-violet-gradient">Gada Ecosystem</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-purple-200/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Powering chat, social networking, creator streaming, and digital marketplace trade across <strong className="text-white font-medium">gada.chat</strong> and <strong className="text-white font-medium">gadavoice.com</strong> with planned banking settlements.
          </p>
        </div>

        {/* Interactive Contract Address Card (Fully Responsive & Overflow-Protected) */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12 px-2">
          <div className="glass-panel p-3.5 sm:p-5 rounded-2xl border border-purple-500/30 shadow-xl shadow-purple-950/50 relative">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              
              <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden text-left">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0 text-purple-300">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden w-full">
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase text-purple-300/80 font-semibold tracking-wider">
                    BEP-20 Contract Address
                  </div>
                  {/* Truncated on mobile, full on tablet/desktop */}
                  <div className="font-mono text-xs sm:text-sm text-slate-100 truncate select-all">
                    <span className="sm:hidden">{`${TOKEN_DETAILS.contractAddress.slice(0, 10)}...${TOKEN_DETAILS.contractAddress.slice(-8)}`}</span>
                    <span className="hidden sm:inline">{TOKEN_DETAILS.contractAddress}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                <button
                  onClick={onCopyContract}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#200445] hover:bg-[#2C065E] border border-purple-500/40 text-xs font-medium text-purple-100 transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-xs">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-purple-300" />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={TOKEN_DETAILS.explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 border border-purple-400/40 text-purple-200 hover:text-white text-xs font-medium transition-colors"
                  title="View Contract on BscScan"
                >
                  <span>BscScan</span>
                  <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16 max-w-md mx-auto sm:max-w-none">
          <a
            href="#whitepaper"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-600/30 border border-purple-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileText className="w-4 h-4" />
            <span>Read Whitepaper</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <a
            href="#ecosystem"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#150230]/90 hover:bg-[#1E0442] border border-purple-500/40 text-purple-200 hover:text-white font-semibold text-sm transition-all"
          >
            <span>Explore Ecosystem</span>
          </a>
        </div>

        {/* Telemetry Metric Cards Banner (Wrap-Safe on all screens) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          
          <div className="glass-panel p-4 sm:p-5 rounded-xl border border-purple-500/20 text-center">
            <div className="text-[11px] sm:text-xs font-mono text-purple-300/80 uppercase tracking-wider mb-1">Total Supply</div>
            <div className="text-base sm:text-xl md:text-2xl font-bold font-mono text-white truncate">50,000,000,000</div>
            <div className="text-[10px] sm:text-[11px] text-purple-300 font-mono mt-1">Fixed Non-Mintable</div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-xl border border-purple-500/20 text-center">
            <div className="text-[11px] sm:text-xs font-mono text-purple-300/80 uppercase tracking-wider mb-1">Token Symbol</div>
            <div className="text-base sm:text-xl md:text-2xl font-bold font-mono text-white">GDT</div>
            <div className="text-[10px] sm:text-[11px] text-purple-300 font-mono mt-1">BEP-20 Standard</div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-xl border border-purple-500/20 text-center">
            <div className="text-[11px] sm:text-xs font-mono text-purple-300/80 uppercase tracking-wider mb-1">Native Network</div>
            <div className="text-base sm:text-xl md:text-2xl font-bold font-mono text-white">BNB Smart Chain</div>
            <div className="text-[10px] sm:text-[11px] text-purple-300 font-mono mt-1">3s Block Finality</div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-xl border border-purple-500/20 text-center">
            <div className="text-[11px] sm:text-xs font-mono text-purple-300/80 uppercase tracking-wider mb-1">Official Portal</div>
            <div className="text-base sm:text-xl md:text-2xl font-bold font-mono text-white truncate">gadatoken.com</div>
            <div className="text-[10px] sm:text-[11px] text-emerald-400 font-mono mt-1">Cloudflare Edge</div>
          </div>

        </div>

      </div>
    </section>
  );
};

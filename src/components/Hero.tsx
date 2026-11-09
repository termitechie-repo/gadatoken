import React from 'react';
import { Copy, Check, ExternalLink, ShieldCheck, ArrowRight, FileText, Activity, Zap } from 'lucide-react';
import { TOKEN_DETAILS } from '../data/whitepaperData';

interface HeroProps {
  onCopyContract: () => void;
  copied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyContract, copied }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Electric purple ambient glow and lighting halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-violet-600/15 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Network & Live Status Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160233]/90 border border-purple-500/40 text-xs font-mono text-purple-200 shadow-sm shadow-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>BNB Smart Chain (BEP-20)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-400/40 text-xs font-mono text-purple-300">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
            <span>Public Contract Verified</span>
          </div>
        </div>

        {/* 3D Coin Visual Showcase */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Glowing neon halo behind the coin */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
            
            <div className="relative w-44 sm:w-56 md:w-64 rounded-2xl overflow-hidden border border-purple-400/40 shadow-2xl shadow-purple-950/80 bg-[#12002B] p-1.5 transform hover:scale-[1.02] transition-transform">
              <img 
                src="/gadatoken-banner.jpg" 
                alt="Gada Token 3D Coin" 
                className="w-full h-auto rounded-xl object-cover"
                onError={(e) => {
                  // Fallback to gadatoken.jpeg if banner doesn't load
                  (e.target as HTMLImageElement).src = '/gadatoken.jpeg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            The Unified Value Layer for the <br className="hidden sm:inline" />
            <span className="text-violet-gradient">Gada Ecosystem</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-purple-200/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Powering chat, social networking, creator streaming, and digital marketplace trade across <strong className="text-white font-medium">gada.chat</strong> and <strong className="text-white font-medium">gadavoice.com</strong> with planned banking settlements.
          </p>
        </div>

        {/* Interactive Contract Address Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-950/50 relative group">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0 text-purple-300">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="overflow-hidden text-left">
                  <div className="text-[11px] font-mono uppercase text-purple-300/80 font-semibold tracking-wider">
                    Official BEP-20 Smart Contract
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-slate-100 truncate select-all">
                    {TOKEN_DETAILS.contractAddress}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                <button
                  onClick={onCopyContract}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-[#200445] hover:bg-[#2C065E] border border-purple-500/40 text-xs font-medium text-purple-100 transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-purple-300" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={TOKEN_DETAILS.explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 border border-purple-400/40 text-purple-200 hover:text-white text-xs font-medium transition-colors"
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#whitepaper"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-600/30 border border-purple-400/30 transition-all transform hover:-translate-y-0.5"
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

        {/* Metric Cards Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="glass-panel p-5 rounded-xl border border-purple-500/20 text-center">
            <div className="text-xs font-mono text-purple-300/80 uppercase tracking-wider mb-1">Total Supply</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">50,000,000,000</div>
            <div className="text-[11px] text-purple-300 font-mono mt-1">Fixed Non-Mintable</div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-purple-500/20 text-center">
            <div className="text-xs font-mono text-purple-300/80 uppercase tracking-wider mb-1">Token Symbol</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">GDT</div>
            <div className="text-[11px] text-purple-300 font-mono mt-1">BEP-20 Standard</div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-purple-500/20 text-center">
            <div className="text-xs font-mono text-purple-300/80 uppercase tracking-wider mb-1">Native Network</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">BNB Smart Chain</div>
            <div className="text-[11px] text-purple-300 font-mono mt-1">3s Block Finality</div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-purple-500/20 text-center">
            <div className="text-xs font-mono text-purple-300/80 uppercase tracking-wider mb-1">Official Portal</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">gadatoken.com</div>
            <div className="text-[11px] text-emerald-400 font-mono mt-1">Cloudflare Edge</div>
          </div>

        </div>

      </div>
    </section>
  );
};

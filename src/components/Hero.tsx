import React from 'react';
import { Copy, Check, ExternalLink, ShieldCheck, ArrowRight, FileText, Activity } from 'lucide-react';
import { TOKEN_DETAILS } from '../data/whitepaperData';

interface HeroProps {
  onCopyContract: () => void;
  copied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyContract, copied }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background radial gradients for subtle fintech depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Network & Live Status Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>BNB Smart Chain (BEP-20)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Public Contract Verified</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            The Unified Value Layer for the <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Gada Ecosystem</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Powering chat, social interaction, creator streaming, and digital marketplace trade across <strong className="text-white font-medium">gada.chat</strong> and <strong className="text-white font-medium">gadavoice.com</strong> with planned banking settlements.
          </p>
        </div>

        {/* Interactive Contract Address Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 shadow-2xl relative group">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <div className="flex items-center gap-3 w-full sm:w-auto overflow-hidden">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 text-amber-400" />
                </div>
                <div className="overflow-hidden text-left">
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                    Official BEP-20 Smart Contract
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-slate-200 truncate select-all">
                    {TOKEN_DETAILS.contractAddress}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
                <button
                  onClick={onCopyContract}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-xs font-medium text-slate-200 transition-colors shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={TOKEN_DETAILS.explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:text-amber-300 text-xs font-medium transition-colors"
                  title="View Contract on BscScan"
                >
                  <span>BscScan</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#whitepaper"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4" />
            <span>Read Whitepaper</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <a
            href="#ecosystem"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-sm transition-all"
          >
            <span>Explore Ecosystem</span>
          </a>
        </div>

        {/* Metric Cards Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="glass-panel p-5 rounded-xl border border-white/5 text-center">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Total Supply</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">50,000,000,000</div>
            <div className="text-[11px] text-amber-400 font-mono mt-1">Fixed Non-Mintable</div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-white/5 text-center">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Token Symbol</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">GDT</div>
            <div className="text-[11px] text-slate-400 font-mono mt-1">BEP-20 Standard</div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-white/5 text-center">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Native Network</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">BNB Smart Chain</div>
            <div className="text-[11px] text-slate-400 font-mono mt-1">3s Block Finality</div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-white/5 text-center">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Official Portal</div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">gadatoken.com</div>
            <div className="text-[11px] text-emerald-400 font-mono mt-1">Cloudflare Edge</div>
          </div>

        </div>

      </div>
    </section>
  );
};

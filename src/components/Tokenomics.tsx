import React from 'react';
import { PieChart, Lock, ShieldAlert, BarChart3, Database } from 'lucide-react';
import { TOKENOMICS_ALLOCATION } from '../data/whitepaperData';

export const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-20 sm:py-24 relative border-t border-purple-500/20 bg-[#0C011F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
            Capital Distribution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Tokenomics & Allocation
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-purple-200/80">
            A fixed non-mintable supply of 50 Billion GDT engineered to support platform development, exchange liquidity, and long-term ecosystem health.
          </p>
        </div>

        {/* Top Supply Metrics (Wrap-Safe on all screens) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 px-2">
          
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-purple-500/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] sm:text-xs font-mono text-purple-300/80 uppercase tracking-wider">Total Fixed Supply</span>
              <Database className="w-4 h-4 text-purple-300" />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono text-white truncate">
              50,000,000,000
            </div>
            <p className="text-xs text-purple-200/70 mt-2">
              Hard-capped BEP-20 supply. No additional minting capability exists in the contract.
            </p>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-purple-500/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] sm:text-xs font-mono text-purple-300/80 uppercase tracking-wider">Circulation Standard</span>
              <BarChart3 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono text-white">
              BEP-20 Standard
            </div>
            <p className="text-xs text-purple-200/70 mt-2">
              High transaction capacity, low network gas fees, and full EVM ecosystem compatibility.
            </p>
          </div>

          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-purple-500/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] sm:text-xs font-mono text-purple-300/80 uppercase tracking-wider">Vesting & Custody</span>
              <Lock className="w-4 h-4 text-purple-300" />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono text-white">
              Audited Vesting
            </div>
            <p className="text-xs text-purple-200/70 mt-2">
              Team and advisor shares are subject to strict smart contract-enforced linear vesting.
            </p>
          </div>

        </div>

        {/* Allocation Breakdown Cards */}
        <div className="glass-panel p-5 sm:p-8 rounded-2xl border border-purple-500/30 mb-8 mx-2 sm:mx-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-purple-500/20">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Allocation Structure of 50 Billion GDT</h3>
              <p className="text-xs text-purple-300/70 mt-1">Strategic allocation framework as designated in Whitepaper Version 1.0</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 bg-purple-500/15 px-3 py-1.5 rounded-lg border border-purple-500/30 self-start sm:self-auto">
              <PieChart className="w-3.5 h-3.5 text-purple-300" />
              <span>Target Model</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {TOKENOMICS_ALLOCATION.map((item) => (
              <div 
                key={item.category}
                className="bg-[#14022D]/80 p-4 sm:p-5 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs sm:text-sm font-semibold text-white truncate mr-2">{item.category}</h4>
                  <span className="text-xs font-mono font-bold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30 shrink-0">
                    {item.share}
                  </span>
                </div>

                {/* Progress bar with electric purple gradient */}
                <div className="w-full bg-purple-950/60 h-1.5 rounded-full mb-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 h-full rounded-full shadow-sm shadow-purple-500/50"
                    style={{ width: `${item.percentageEstimate || 10}%` }}
                  />
                </div>

                <p className="text-xs text-purple-200/70 leading-relaxed">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Formal Whitepaper Notice */}
        <div className="p-4 rounded-xl bg-[#14022D]/70 border border-purple-500/30 flex items-start gap-3 mx-2 sm:mx-0">
          <ShieldAlert className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
          <p className="text-xs text-purple-200/80 leading-relaxed">
            <strong className="text-slate-200">Whitepaper Specification:</strong> Final verified percentages, liquidity pool locking transactions, and on-chain vesting contracts will be indexed on BscScan and published at gadatoken.com prior to broad market distribution.
          </p>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { PieChart, Lock, ShieldAlert, BarChart3, Database } from 'lucide-react';
import { TOKEN_DETAILS, TOKENOMICS_ALLOCATION } from '../data/whitepaperData';

export const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 relative border-t border-white/5 bg-[#090D17]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 uppercase tracking-widest mb-4">
            Capital Distribution
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Tokenomics & Allocation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A fixed non-mintable supply of 50 Billion GDT engineered to support platform development, exchange liquidity, and long-term ecosystem health.
          </p>
        </div>

        {/* Top Supply Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Total Fixed Supply</span>
              <Database className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
              50,000,000,000
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Hard-capped BEP-20 supply. No additional minting capability exists in the contract.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Circulation Standard</span>
              <BarChart3 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
              BEP-20 Standard
            </div>
            <p className="text-xs text-slate-400 mt-2">
              High transaction capacity, low network gas fees, and full EVM ecosystem compatibility.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Vesting & Custody</span>
              <Lock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
              Audited Vesting
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Team and advisor shares are subject to strict smart contract-enforced linear vesting.
            </p>
          </div>

        </div>

        {/* Allocation Breakdown Cards */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white">Allocation Structure of 50 Billion GDT</h3>
              <p className="text-xs text-slate-400 mt-1">Strategic allocation framework as designated in Whitepaper Version 1.0</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
              <PieChart className="w-3.5 h-3.5" />
              <span>Target Model</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOKENOMICS_ALLOCATION.map((item) => (
              <div 
                key={item.category}
                className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-white">{item.category}</h4>
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    {item.share}
                  </span>
                </div>

                {/* Progress bar visual */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full mb-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full"
                    style={{ width: `${item.percentageEstimate || 10}%` }}
                  />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Formal Whitepaper Notice */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Whitepaper Specification:</strong> Final verified percentages, liquidity pool locking transactions, and on-chain vesting contracts will be indexed on BscScan and published at gadatoken.com prior to broad market distribution.
          </p>
        </div>

      </div>
    </section>
  );
};

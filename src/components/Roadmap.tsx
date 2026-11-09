import React, { useState } from 'react';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';
import { ROADMAP_DATA } from '../data/whitepaperData';

export const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(1);

  return (
    <section id="roadmap" className="py-24 relative border-t border-purple-500/20 bg-[#080014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
            Strategic Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Five Phases of Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/80">
            A deliberate, execution-first roadmap centered on authentic user adoption across the Gada platform ecosystem.
          </p>
        </div>

        {/* Phase Selection Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {ROADMAP_DATA.map((item) => {
            const isActive = activePhase === item.phase;
            return (
              <button
                key={item.phase}
                onClick={() => setActivePhase(item.phase)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-purple-600/25 border-purple-400 text-purple-200 shadow-lg shadow-purple-600/20'
                    : 'bg-[#14022D]/60 border-purple-500/20 text-purple-300/70 hover:text-white hover:border-purple-400/40'
                }`}
              >
                <span>Phase {item.phase}</span>
                {item.status === 'in-progress' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Active Phase Card */}
        <div className="max-w-4xl mx-auto mb-16">
          {ROADMAP_DATA.filter((p) => p.phase === activePhase).map((phase) => (
            <div 
              key={phase.phase}
              className="glass-panel p-8 sm:p-10 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-950/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-purple-500/20">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider">
                      {phase.timeline}
                    </span>
                    {phase.status === 'in-progress' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-purple-200 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-400/40">
                        <Clock className="w-3 h-3 text-purple-300" />
                        <span>Active Stage</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-700/60">
                        <Calendar className="w-3 h-3" />
                        <span>Scheduled</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {phase.name}
                  </h3>
                </div>

                <div className="text-xs font-mono text-purple-300/80">
                  Phase {phase.phase} of 5
                </div>
              </div>

              {/* Milestones in this phase */}
              <div className="space-y-4">
                {phase.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#14022D]/70 border border-purple-500/20"
                  >
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${
                      phase.status === 'in-progress' && idx < 3 ? 'text-purple-300' : 'text-slate-500'
                    }`} />
                    <p className="text-sm text-slate-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 5-Phase Horizontal Timeline Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {ROADMAP_DATA.map((item) => (
            <div
              key={item.phase}
              onClick={() => setActivePhase(item.phase)}
              className={`cursor-pointer p-4 rounded-xl border text-left transition-all ${
                activePhase === item.phase
                  ? 'bg-[#1D0342] border-purple-400 shadow-md shadow-purple-600/30'
                  : 'bg-[#12002B]/40 border-purple-500/20 hover:border-purple-400/40'
              }`}
            >
              <div className="text-xs font-mono text-purple-300 font-bold mb-1">
                PHASE 0{item.phase}
              </div>
              <div className="text-sm font-semibold text-white truncate mb-2">
                {item.name}
              </div>
              <div className="text-[11px] text-purple-200/70">
                {item.items.length} Core Milestones
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

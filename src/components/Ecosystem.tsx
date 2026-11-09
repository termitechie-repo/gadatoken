import React from 'react';
import { MessageSquare, Users, ArrowUpRight, Layers } from 'lucide-react';
import { TOKEN_DETAILS } from '../data/whitepaperData';

export const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 relative border-t border-purple-500/20 bg-[#0C011F]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
            Platform Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            The Gada Ecosystem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/80">
            GDT operates as the native transactional currency uniting social networking, real-time messaging, creator streaming, and marketplace commerce.
          </p>
        </div>

        {/* Dual Platform Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: gada.chat */}
          <div className="glass-panel rounded-2xl p-8 border border-purple-500/30 glass-panel-hover relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-bl-full pointer-events-none blur-xl" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30">
                  Social Network
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">gada.chat</h3>
                <span className="text-xs text-purple-300 font-mono">Owned by GADA CHAT LTD</span>
              </div>
              
              <p className="text-sm text-purple-200/80 leading-relaxed mb-6">
                A social media platform built for modern creators, verified community hubs, and high-engagement audiences. Designed with native Web3 micropayments to empower direct monetization without high platform fees.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Creator Rewards:</strong> Audiences tip and reward creators with GDT tokens instantly.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Community Engagement:</strong> Tokenized participation incentives for active members and moderators.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Peer-to-Peer Transfers:</strong> Direct wallet-to-wallet micro-value exchanges within discussion threads.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={TOKEN_DETAILS.ecosystem.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#160233] border border-purple-500/30 hover:border-purple-400/60 text-xs font-mono text-purple-200 hover:text-white transition-colors"
            >
              <span>Visit gada.chat</span>
              <ArrowUpRight className="w-4 h-4 text-purple-300" />
            </a>
          </div>

          {/* Card 2: gadavoice.com */}
          <div className="glass-panel rounded-2xl p-8 border border-purple-500/30 glass-panel-hover relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-bl-full pointer-events-none blur-xl" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-indigo-300 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30">
                  Messenger & Commerce
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">gadavoice.com</h3>
                <span className="text-xs text-indigo-300 font-mono">Commerce Messenger</span>
              </div>
              
              <p className="text-sm text-purple-200/80 leading-relaxed mb-6">
                A high-speed encrypted messenger integrating 1-on-1 and group communication with an on-demand marketplace for goods and services, creator live streaming, and decentralized escrow settlement.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Marketplace Trade:</strong> Purchase real goods and digital services with GDT escrow protection.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Live Creator Streaming:</strong> Interactive live-streaming channels with native real-time GDT gifting.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Unified Value Layer:</strong> Zero friction when switching between personal chats and commercial trade.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={TOKEN_DETAILS.ecosystem.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#160233] border border-purple-500/30 hover:border-indigo-400/60 text-xs font-mono text-purple-200 hover:text-white transition-colors"
            >
              <span>Visit gadavoice.com</span>
              <ArrowUpRight className="w-4 h-4 text-indigo-300" />
            </a>
          </div>

        </div>

        {/* Extensibility Note */}
        <div className="glass-panel p-5 rounded-xl border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 text-purple-300" />
            </div>
            <p className="text-xs text-purple-200/90">
              <strong className="text-white font-medium">Modular Architecture:</strong> The Gada ecosystem is expandable. Additional third-party mini-apps, merchant checkouts, and institutional partner integrations will be rolled out via verified releases.
            </p>
          </div>
          <span className="text-[11px] font-mono text-purple-300 shrink-0 bg-purple-500/15 px-2.5 py-1 rounded border border-purple-500/30">
            Continuous Integration
          </span>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { CreditCard, HeartHandshake, Award, Send, Landmark } from 'lucide-react';

export const TokenUtility: React.FC = () => {
  const utilities = [
    {
      number: "01",
      icon: CreditCard,
      title: "Marketplace Payments",
      summary: "Primary transaction currency for goods and services across gadavoice.com and integrated merchant stores.",
      details: "Enables instant checkout, escrow-backed purchasing, and low-overhead merchant invoicing without credit card processing delays."
    },
    {
      number: "02",
      icon: HeartHandshake,
      title: "Creator & Streamer Support",
      summary: "Direct audience tipping with sub-second confirmation and zero platform rake deductions.",
      details: "Creators and streamers receive 100% of audience support directly into their BEP-20 wallets without traditional 30-50% platform cut."
    },
    {
      number: "03",
      icon: Award,
      title: "Community Rewards",
      summary: "Incentive protocol for active social engagement, content creation, and community moderation.",
      details: "Distributes automated algorithmic micro-rewards on gada.chat to encourage quality discourse and community growth."
    },
    {
      number: "04",
      icon: Send,
      title: "Borderless Value Transfer",
      summary: "Sub-cent, instant peer-to-peer remittances inside and outside the Gada application network.",
      details: "Leverages BNB Smart Chain's 3-second block finality to transmit value internationally without SWIFT intermediary fees."
    },
    {
      number: "05",
      icon: Landmark,
      title: "Banking & Financial Integrations",
      summary: "Bridge asset for upcoming local and international banking partnerships and fiat settlement.",
      details: "Engineered to interface with regulated fiat on- and off-ramp providers, allowing merchants to settle token receipts directly into local bank currencies."
    }
  ];

  return (
    <section id="utility" className="py-20 sm:py-24 relative border-t border-purple-500/20 bg-[#080014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
            Token Mechanics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Five Core Token Utilities
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-purple-200/80">
            Engineered for genuine transactional demand. Utilities are deployed in planned stages aligned with verified ecosystem rollouts.
          </p>
        </div>

        {/* 5 Utilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 px-2">
          {utilities.map((item, index) => {
            const Icon = item.icon;
            const isFifth = index === 4;
            return (
              <div 
                key={item.number}
                className={`glass-panel rounded-2xl p-5 sm:p-7 border border-purple-500/30 glass-panel-hover flex flex-col justify-between ${
                  isFifth ? 'md:col-span-2 lg:col-span-2 lg:flex-row lg:items-center lg:gap-8' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono text-purple-300/80 font-bold">
                      PILLAR {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-purple-300 font-medium mb-2.5">
                    {item.summary}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                {isFifth && (
                  <div className="mt-5 lg:mt-0 shrink-0 bg-[#160233] p-3.5 sm:p-4 rounded-xl border border-purple-500/30 text-xs text-purple-200/80 font-mono max-w-sm">
                    <span className="text-purple-300 font-semibold block mb-1">TRADFI COMPLIANCE</span>
                    Negotiated with regulated institutions. Announced only after formal agreements are finalized.
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

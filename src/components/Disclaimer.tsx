import React from 'react';
import { Scale } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <section className="py-16 relative border-t border-purple-500/20 bg-[#05000C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12002B]/60 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-300 shrink-0">
              <Scale className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-purple-200 font-bold">
              Regulatory Disclosures & Risk Notice
            </h3>
          </div>

          <div className="space-y-3 text-xs text-purple-200/80 leading-relaxed font-sans">
            <p>
              <strong className="text-purple-100">Information Only:</strong> The contents of this website, the whitepaper, and associated materials are published solely for general informational and educational purposes. Nothing herein constitutes financial, investment, legal, or tax advice, nor should it be interpreted as an offer or solicitation to sell securities or regulated financial instruments.
            </p>
            <p>
              <strong className="text-purple-100">Utility Token Status:</strong> Gada Token (GDT) is a digital utility token engineered exclusively for transactional and functional use within the Gada software ecosystem (including gada.chat, gadavoice.com, and partner platforms). GDT carries no promise, representation, or guarantee of profit, dividends, equity ownership, or future appreciation in value.
            </p>
            <p>
              <strong className="text-purple-100">Forward-Looking Disclosures:</strong> Statements regarding planned platform integrations, roadmap phases, banking partnerships, and exchange listings represent forward-looking objectives subject to commercial negotiations, technical feasibility, and evolving regulatory approvals across jurisdictions.
            </p>
            <p className="text-[11px] text-purple-300/60 pt-2 border-t border-purple-900/60 font-mono">
              Do Your Own Research (DYOR). Blockchain assets entail significant market volatility, smart contract risk, and regulatory uncertainties. Never allocate funds you cannot afford to lose.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, ExternalLink, AlertTriangle } from 'lucide-react';
import { TOKEN_DETAILS } from '../data/whitepaperData';

export const TrustSecurity: React.FC = () => {
  const listingPillars = [
    {
      step: "01",
      title: "Real User Adoption",
      desc: "Drive active daily transactional volume through the native integration within gada.chat and gadavoice.com."
    },
    {
      step: "02",
      title: "Public Transparency",
      desc: "Fully open, verifiable BEP-20 smart contract with auditable documentation and zero hidden minting functions."
    },
    {
      step: "03",
      title: "Deep Liquidity Pools",
      desc: "Provision adequate locked liquidity pairs and cultivate a diversified, healthy token holder base."
    },
    {
      step: "04",
      title: "Regulatory Compliance",
      desc: "Satisfy each tier-1 exchange's technical security, KYC/AML standards, and legal compliance criteria."
    }
  ];

  return (
    <section id="security" className="py-20 sm:py-24 relative border-t border-purple-500/20 bg-[#080014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
            Security & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Trust, Security & Listing Framework
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-200 font-medium">
            Built on proven BNB Smart Chain infrastructure with verifiable on-chain transparency and strict compliance standards.
          </p>
        </div>

        {/* Security & Verification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-2">
          
          {/* Card 1: On-Chain Verification */}
          <div className="glass-panel p-5 sm:p-8 rounded-2xl border border-purple-500/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-5 sm:mb-6">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Verified Smart Contract
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium mb-5 sm:mb-6 leading-relaxed break-words">
                The GDT contract source code has been deployed and publicly verified on BscScan, allowing open inspection of all methods, events, and token variables.
              </p>

              <div className="space-y-2.5 sm:space-y-3 mb-6 font-mono text-[11px] sm:text-xs text-purple-200">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#14022D] border border-purple-500/20">
                  <span className="text-purple-300/80 font-bold">Network:</span>
                  <span className="text-white font-bold">BNB Smart Chain (Mainnet)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#14022D] border border-purple-500/20">
                  <span className="text-purple-300/80 font-bold">Compiler:</span>
                  <span className="text-white font-bold">Solidity (BEP-20 Standard)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#14022D] border border-purple-500/20">
                  <span className="text-purple-300/80 font-bold">Verification:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Exact Match
                  </span>
                </div>
              </div>
            </div>

            <a
              href={TOKEN_DETAILS.explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#160233] border border-purple-500/30 hover:border-purple-400 text-xs sm:text-sm font-mono font-bold text-white hover:text-purple-200 transition-colors shadow-sm"
            >
              <span>Inspect Contract on BscScan</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
            </a>
          </div>

          {/* Card 2: Security Practices & Safety Advisory */}
          <div className="glass-panel p-5 sm:p-8 rounded-2xl border border-purple-500/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-5 sm:mb-6">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Security & Anti-Phishing Protocols
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium mb-5 sm:mb-6 leading-relaxed break-words">
                Protecting user funds and maintaining network integrity are core operational tenets for the Gada ecosystem.
              </p>

              <div className="space-y-3 sm:space-y-3.5 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    <strong className="text-white font-bold mr-1">Independent Audit:</strong> A comprehensive security audit report will be published upon completion of formal third-party review.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    <strong className="text-white font-bold mr-1">Strict Non-Custodial Safety:</strong> The Gada team will never request your private keys, seed phrases, or wallet passwords.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    <strong className="text-white font-bold mr-1">Authenticated Domains:</strong> Official communications are conducted solely via <span className="text-purple-300 font-mono font-bold">gadatoken.com</span>, <span className="text-purple-300 font-mono font-bold">gada.chat</span>, and <span className="text-purple-300 font-mono font-bold">gadavoice.com</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs sm:text-sm text-slate-100 flex items-center gap-2.5 font-mono font-medium">
              <AlertTriangle className="w-4 h-4 shrink-0 text-purple-300" />
              <span>Always verify the token contract address before initiating any swap.</span>
            </div>
          </div>

        </div>

        {/* Exchange Listing Strategy Section */}
        <div className="glass-panel p-5 sm:p-8 rounded-2xl border border-purple-500/30 mx-2 sm:mx-0">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-mono text-purple-300 uppercase tracking-widest font-bold">
              Market Expansion Strategy
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-white mt-1">
              Four-Pillar Exchange Listing Strategy
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1.5 sm:mt-2">
              Our systematic approach to meeting strict compliance, volume, and technical standards for global centralized and decentralized exchange listings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {listingPillars.map((p) => (
              <div key={p.step} className="p-4 rounded-xl bg-[#14022D]/70 border border-purple-500/20">
                <span className="text-xs font-mono text-purple-300 font-bold block mb-1">
                  STEP {p.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">{p.title}</h4>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed break-words">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, FileSearch, ExternalLink, AlertTriangle } from 'lucide-react';
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
    <section id="security" className="py-24 relative border-t border-white/5 bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
            Security & Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Trust, Security & Listing Framework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Built on proven BNB Smart Chain infrastructure with verifiable on-chain transparency and strict compliance standards.
          </p>
        </div>

        {/* Security & Verification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: On-Chain Verification */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Verified Smart Contract
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                The GDT contract source code has been deployed and publicly verified on BscScan, allowing open inspection of all methods, events, and token variables.
              </p>

              <div className="space-y-3 mb-6 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Network:</span>
                  <span className="text-white font-semibold">BNB Smart Chain (Mainnet)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Compiler:</span>
                  <span className="text-white font-semibold">Solidity (BEP-20 Standard)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Verification:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Exact Match
                  </span>
                </div>
              </div>
            </div>

            <a
              href={TOKEN_DETAILS.explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 border border-slate-700/60 hover:border-emerald-500/40 text-xs font-mono text-slate-200 hover:text-white transition-colors"
            >
              <span>Inspect Contract on BscScan</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </div>

          {/* Card 2: Security Practices & Safety Advisory */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                <Lock className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Security & Anti-Phishing Protocols
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Protecting user funds and maintaining network integrity are core operational tenets for the Gada ecosystem.
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Independent Audit:</strong> A comprehensive security audit report will be published upon completion of formal third-party review.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Strict Non-Custodial Safety:</strong> The Gada team will never request your private keys, seed phrases, or wallet passwords.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-300">
                    <strong className="text-white">Authenticated Domains:</strong> Official communications are conducted solely via <span className="text-amber-400 font-mono">gadatoken.com</span>, <span className="text-amber-400 font-mono">gada.chat</span>, and <span className="text-amber-400 font-mono">gadavoice.com</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-400/90 flex items-center gap-2.5 font-mono">
              <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Always verify the token contract address before initiating any swap.</span>
            </div>
          </div>

        </div>

        {/* Exchange Listing Strategy Section (Slide 11) */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
              Market Expansion Strategy
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Four-Pillar Exchange Listing Strategy
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Our systematic approach to meeting strict compliance, volume, and technical standards for global centralized and decentralized exchange listings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {listingPillars.map((p) => (
              <div key={p.step} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-xs font-mono text-amber-400 font-bold block mb-1">
                  STEP {p.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">{p.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

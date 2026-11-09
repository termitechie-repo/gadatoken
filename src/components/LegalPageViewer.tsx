import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Shield, 
  FileText, 
  AlertTriangle, 
  Printer, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Scale,
  Lock,
  Coins
} from 'lucide-react';
import { 
  ALL_LEGAL_DOCUMENTS, 
  LegalDocument, 
  PRIVACY_POLICY, 
  TERMS_AND_CONDITIONS, 
  CRYPTO_RISK_DISCLOSURE 
} from '../data/legalData';
import { TOKEN_DETAILS } from '../data/whitepaperData';

interface LegalPageViewerProps {
  initialDocId?: 'privacy' | 'terms' | 'crypto-disclosures';
  onNavigateHome: () => void;
}

export const LegalPageViewer: React.FC<LegalPageViewerProps> = ({ 
  initialDocId = 'privacy',
  onNavigateHome 
}) => {
  const [activeDocId, setActiveDocId] = useState<'privacy' | 'terms' | 'crypto-disclosures'>(initialDocId);
  const [activeClauseId, setActiveClauseId] = useState<string>('');

  useEffect(() => {
    setActiveDocId(initialDocId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialDocId]);

  const activeDoc: LegalDocument = ALL_LEGAL_DOCUMENTS[activeDocId] || PRIVACY_POLICY;

  const handleTabChange = (docId: 'privacy' | 'terms' | 'crypto-disclosures') => {
    setActiveDocId(docId);
    window.location.hash = docId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToClause = (clauseId: string) => {
    setActiveClauseId(clauseId);
    const element = document.getElementById(clauseId);
    if (element) {
      const yOffset = -90; // offset for sticky sub-header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getDocIcon = (id: string) => {
    switch (id) {
      case 'privacy':
        return <Lock className="w-4 h-4" />;
      case 'terms':
        return <Scale className="w-4 h-4" />;
      case 'crypto-disclosures':
        return <AlertTriangle className="w-4 h-4 text-amber-400" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#080014] text-slate-100 flex flex-col font-sans pt-24 pb-20 selection:bg-purple-600/30 selection:text-purple-200">
      
      {/* Top Sticky Breadcrumb & Tab Header */}
      <div className="sticky top-16 z-40 bg-[#0E0124]/95 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-md shadow-purple-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            
            {/* Back Button & Breadcrumbs */}
            <div className="flex items-center gap-3">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#180238] border border-purple-500/30 text-purple-200 hover:text-white hover:border-purple-400 text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <ArrowLeft className="w-4 h-4 text-purple-400" />
                <span>Back to Overview</span>
              </button>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span>gadatoken.com</span>
                <span>/</span>
                <span className="text-purple-300 font-bold uppercase">{activeDoc.shortTitle}</span>
              </div>
            </div>

            {/* Document Selector Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                onClick={() => handleTabChange('privacy')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  activeDocId === 'privacy'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-md shadow-purple-600/30'
                    : 'bg-[#14022D] text-slate-300 hover:text-white border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Privacy Policy</span>
              </button>

              <button
                onClick={() => handleTabChange('terms')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  activeDocId === 'terms'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-md shadow-purple-600/30'
                    : 'bg-[#14022D] text-slate-300 hover:text-white border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Terms & Conditions</span>
              </button>

              <button
                onClick={() => handleTabChange('crypto-disclosures')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  activeDocId === 'crypto-disclosures'
                    ? 'bg-gradient-to-r from-amber-600 to-purple-600 text-white border-amber-400 shadow-md shadow-amber-600/30'
                    : 'bg-[#14022D] text-slate-300 hover:text-white border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
                <span>Crypto Disclosures</span>
              </button>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                title="Print or Save as PDF"
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#14022D] hover:bg-[#200445] text-slate-300 hover:text-white border border-purple-500/30 text-xs font-mono transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-purple-400" />
                <span>Print</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main Legal Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-36 bg-[#0E0124] border border-purple-500/20 rounded-2xl p-5 shadow-xl shadow-purple-950/40">
            <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-purple-500/20">
              <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                {getDocIcon(activeDoc.id)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">Table of Contents</h3>
                <span className="text-[11px] text-purple-300/80 font-mono">
                  {activeDoc.clauses.length} Sections Defined
                </span>
              </div>
            </div>

            <nav className="space-y-1.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
              {activeDoc.clauses.map((clause, idx) => (
                <button
                  key={clause.id}
                  onClick={() => scrollToClause(clause.id)}
                  className={`w-full text-left text-xs px-3 py-2 rounded-lg transition-all flex items-center justify-between group ${
                    activeClauseId === clause.id
                      ? 'bg-purple-600/30 text-white font-bold border-l-2 border-purple-400'
                      : 'text-slate-300 hover:text-white hover:bg-purple-950/40 font-medium'
                  }`}
                >
                  <span className="truncate pr-2">{clause.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400/60 group-hover:text-purple-300 shrink-0" />
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-purple-500/20 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex justify-between">
                <span className="text-purple-400/80">Version:</span>
                <span className="text-white font-bold">{activeDoc.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-400/80">Last Updated:</span>
                <span className="text-white font-bold">{activeDoc.lastUpdated}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-400/80">Contract:</span>
                <span className="text-white font-bold">BEP-20 (BSC)</span>
              </div>
            </div>
          </aside>

          {/* Right Main Legal Clauses Reader */}
          <main className="lg:col-span-8 bg-[#0B011D] border border-purple-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-950/30">
            
            {/* Document Header Banner */}
            <div className="border-b border-purple-500/20 pb-8 mb-8">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                  {getDocIcon(activeDoc.id)}
                  Official Legal Document
                </span>
                <span className="text-xs font-mono text-purple-300/80">
                  Effective: {activeDoc.lastUpdated}
                </span>
                <span className="text-xs font-mono text-purple-400">
                  • Rev {activeDoc.version}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                {activeDoc.title}
              </h1>
              <p className="text-sm sm:text-base text-purple-200 font-semibold leading-relaxed">
                {activeDoc.subtitle}
              </p>

              {/* Executive Summary Box */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#14022D]/90 border border-purple-500/30 shadow-inner">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-purple-300 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Executive Summary</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  {activeDoc.summary}
                </p>
              </div>
            </div>

            {/* Clauses List */}
            <div className="space-y-10">
              {activeDoc.clauses.map((clause) => (
                <section
                  key={clause.id}
                  id={clause.id}
                  className="scroll-mt-32 pt-2 border-b border-purple-900/30 pb-8 last:border-b-0"
                >
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                    <span className="w-1.5 h-5 rounded-full bg-purple-500 inline-block shrink-0"></span>
                    <span>{clause.title}</span>
                  </h2>

                  {/* Warning Box If Present */}
                  {clause.warningBox && (
                    <div className="mb-4 p-4 rounded-xl bg-amber-950/40 border border-amber-500/50 text-amber-200 flex items-start gap-3 shadow-lg shadow-amber-950/20">
                      <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-medium leading-relaxed text-amber-100">
                        {clause.warningBox}
                      </p>
                    </div>
                  )}

                  {/* Highlight Box If Present */}
                  {clause.highlightBox && (
                    <div className="mb-4 p-4 rounded-xl bg-purple-950/40 border border-purple-500/50 text-purple-100 flex items-start gap-3 shadow-lg shadow-purple-950/20">
                      <Shield className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-200">
                        {clause.highlightBox}
                      </p>
                    </div>
                  )}

                  {/* Paragraphs */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    {clause.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="break-words">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Subsections If Present */}
                  {clause.subsections && clause.subsections.length > 0 && (
                    <div className="mt-5 space-y-4">
                      {clause.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="p-4 rounded-xl bg-[#14022D]/60 border border-purple-500/20">
                          <h4 className="text-xs sm:text-sm font-bold text-white mb-2.5">
                            {sub.subtitle}
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-200 font-medium list-disc list-inside">
                            {sub.points.map((point, ptIdx) => (
                              <li key={ptIdx} className="leading-relaxed">
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Bottom Contact & Compliance Footer */}
            <div className="mt-12 pt-8 border-t border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#12002B]/60 p-6 rounded-2xl border">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Questions or Legal Inquiries?
                </h4>
                <p className="text-xs text-slate-300 font-medium">
                  Contact the GADA CHAT LTD compliance and legal counsel team directly.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:contact@gadatoken.com"
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-purple-600/30"
                >
                  contact@gadatoken.com
                </a>
                <button
                  onClick={onNavigateHome}
                  className="px-4 py-2 rounded-xl bg-[#1D0242] hover:bg-[#280459] text-purple-200 hover:text-white border border-purple-500/30 text-xs sm:text-sm font-semibold transition-all"
                >
                  Return to Home
                </button>
              </div>
            </div>

          </main>

        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Printer, 
  CheckCircle2, 
  BookOpen, 
  ExternalLink 
} from 'lucide-react';
import { WHITEPAPER_SLIDES, TOKEN_DETAILS } from '../data/whitepaperData';

export const WhitepaperViewer: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalSlides = WHITEPAPER_SLIDES.length;
  const currentSlide = WHITEPAPER_SLIDES[currentSlideIndex];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="whitepaper" className="py-24 relative border-t border-white/5 bg-[#090D17]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 uppercase tracking-widest mb-4">
            Official Documentation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Gada Token Whitepaper
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Read the complete 13-part whitepaper directly in your browser or download the original presentation file for offline study.
          </p>
        </div>

        {/* Action Bar (Download & Controls) */}
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>{TOKEN_DETAILS.version} (Official Release)</span>
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
              BEP-20 • 50B Supply
            </span>
          </div>

          {/* Download Options */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <a
              href="/Gada-Token-Whitepaper.pptx"
              download="Gada-Token-Whitepaper.pptx"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-400 hover:text-amber-300 text-xs font-semibold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Whitepaper (.pptx)</span>
            </a>
          </div>

        </div>

        {/* In-Browser Interactive Slide Viewer Container */}
        <div className={`max-w-5xl mx-auto transition-all ${
          isFullscreen 
            ? 'fixed inset-0 z-50 bg-[#080B11] p-4 sm:p-8 flex flex-col justify-between overflow-y-auto' 
            : 'relative'
        }`}>
          
          <div className="glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col min-h-[520px]">
            
            {/* Slide Header Toolbar */}
            <div className="bg-[#0B0F1A] px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-semibold">
                  {currentSlide.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Slide {currentSlide.id} of {totalSlides}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Reader"}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Slide Body */}
            <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between">
              
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentSlide.title}
                  </h3>
                  {currentSlide.subtitle && (
                    <p className="text-sm font-medium text-amber-400/90 mt-1 font-mono">
                      {currentSlide.subtitle}
                    </p>
                  )}
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 mb-6 text-sm text-slate-300 leading-relaxed">
                  {currentSlide.summary}
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {currentSlide.bullets.map((b, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 rounded-xl bg-slate-900/40 border border-white/5 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white mb-0.5">{b.heading}</h4>
                        <p className="text-xs text-slate-300 leading-normal">{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Footer of Slide */}
              {currentSlide.callout && (
                <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs font-mono text-amber-300/90 flex items-center justify-between">
                  <span>{currentSlide.callout}</span>
                  <span className="text-[10px] text-slate-400 hidden sm:inline">gadatoken.com</span>
                </div>
              )}

            </div>

            {/* Slide Navigation Bottom Bar */}
            <div className="bg-[#0B0F1A] px-6 py-4 border-t border-white/10 flex items-center justify-between">
              
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Slide Number Indicators / Quick Jump */}
              <div className="hidden sm:flex items-center gap-1.5">
                {WHITEPAPER_SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(index)}
                    title={slide.title}
                    className={`w-6 h-6 rounded-md text-[11px] font-mono flex items-center justify-center transition-all ${
                      currentSlideIndex === index
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {slide.id}
                  </button>
                ))}
              </div>

              <div className="sm:hidden text-xs font-mono text-slate-400">
                {currentSlide.id} / {totalSlides}
              </div>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-xs font-bold text-slate-950 transition-colors shadow-sm"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

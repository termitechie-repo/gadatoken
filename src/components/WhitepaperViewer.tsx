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
  BookOpen
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
    <section id="whitepaper" className="py-24 relative border-t border-purple-500/20 bg-[#0C011F]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
            Official Documentation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Gada Token Whitepaper
          </h2>
          <p className="mt-4 text-base sm:text-lg text-purple-200/80">
            Read the complete 13-part whitepaper directly in your browser or download the original presentation file for offline study.
          </p>
        </div>

        {/* Action Bar (Download & Controls) */}
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-purple-200 bg-[#160233] px-3 py-1.5 rounded-lg border border-purple-500/30 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-purple-300" />
              <span>{TOKEN_DETAILS.version} (Official Release)</span>
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-purple-300/70">
              BEP-20 • 50B Supply
            </span>
          </div>

          {/* Download Options */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#14022D] border border-purple-500/30 hover:border-purple-400 text-xs text-purple-200 hover:text-white transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <a
              href="/Gada-Token-Whitepaper.pptx"
              download="Gada-Token-Whitepaper.pptx"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all shadow-md shadow-purple-600/30 border border-purple-400/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Whitepaper (.pptx)</span>
            </a>
          </div>

        </div>

        {/* In-Browser Interactive Slide Viewer Container */}
        <div className={`max-w-5xl mx-auto transition-all ${
          isFullscreen 
            ? 'fixed inset-0 z-50 bg-[#080014] p-4 sm:p-8 flex flex-col justify-between overflow-y-auto' 
            : 'relative'
        }`}>
          
          <div className="glass-panel rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-950/70 overflow-hidden flex flex-col min-h-[520px]">
            
            {/* Slide Header Toolbar */}
            <div className="bg-[#12002B] px-6 py-4 border-b border-purple-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded font-semibold">
                  {currentSlide.category}
                </span>
                <span className="text-xs font-mono text-purple-300/80">
                  Slide {currentSlide.id} of {totalSlides}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-1.5 rounded-lg text-purple-300/70 hover:text-white hover:bg-purple-950/60 transition-colors"
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
                    <p className="text-sm font-medium text-purple-300 mt-1 font-mono">
                      {currentSlide.subtitle}
                    </p>
                  )}
                </div>

                <div className="bg-[#14022D]/70 p-4 rounded-xl border border-purple-500/20 mb-6 text-sm text-purple-100 leading-relaxed">
                  {currentSlide.summary}
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {currentSlide.bullets.map((b, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 rounded-xl bg-[#14022D]/50 border border-purple-500/20 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
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
                <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-500/30 text-xs font-mono text-purple-200 flex items-center justify-between">
                  <span>{currentSlide.callout}</span>
                  <span className="text-[10px] text-purple-300/70 hidden sm:inline">gadatoken.com</span>
                </div>
              )}

            </div>

            {/* Slide Navigation Bottom Bar */}
            <div className="bg-[#12002B] px-6 py-4 border-t border-purple-500/20 flex items-center justify-between">
              
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#200445] hover:bg-[#2C065E] border border-purple-500/30 text-xs font-medium text-purple-200 hover:text-white transition-colors"
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
                        ? 'bg-purple-600 text-white font-bold shadow-sm shadow-purple-500/40'
                        : 'text-purple-300/70 hover:bg-purple-950 hover:text-white'
                    }`}
                  >
                    {slide.id}
                  </button>
                ))}
              </div>

              <div className="sm:hidden text-xs font-mono text-purple-300/70">
                {currentSlide.id} / {totalSlides}
              </div>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs font-bold text-white transition-all shadow-sm shadow-purple-600/30"
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

import React, { useState, useEffect } from 'react';
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
  Play,
  Pause,
  Sparkles
} from 'lucide-react';
import { WHITEPAPER_SLIDES, TOKEN_DETAILS } from '../data/whitepaperData';
import { BorderBeam } from './BorderBeam';

export const WhitepaperViewer: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);

  const totalSlides = WHITEPAPER_SLIDES.length;
  const currentSlide = WHITEPAPER_SLIDES[currentSlideIndex];

  // Auto-play interval
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isAutoPlay) {
      timer = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlay, totalSlides]);

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
    <section id="whitepaper" className="py-20 sm:py-24 relative border-t border-purple-500/20 bg-[#0C011F]/70 horizon-beam">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Official Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Gada Token Whitepaper
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-200 font-medium">
            Read the complete 13-part whitepaper directly in your browser or download the original presentation file for offline study.
          </p>
        </div>

        {/* Action Bar (Download & Controls) */}
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6">
          
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-xs sm:text-sm font-mono font-bold text-purple-200 bg-[#160233] px-3 py-1.5 rounded-lg border border-purple-500/30 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-purple-300" />
              <span>{TOKEN_DETAILS.version}</span>
            </span>
            <span className="text-xs sm:text-sm font-mono font-bold text-slate-300">
              BEP-20 • 50B Supply
            </span>
          </div>

          {/* Download & Auto-play Options */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-mono font-bold transition-colors ${
                isAutoPlay 
                  ? 'bg-purple-600/30 border-purple-400 text-purple-200' 
                  : 'bg-[#14022D] border-purple-500/30 text-slate-300 hover:text-white'
              }`}
              title={isAutoPlay ? "Pause Auto-Slide" : "Auto-Play Slides"}
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5 text-purple-300" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isAutoPlay ? "Auto: ON" : "Auto-Play"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#14022D] border border-purple-500/30 hover:border-purple-400 text-xs font-bold text-slate-200 hover:text-white transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <a
              href="/Gada-Token-Whitepaper.pptx"
              download="Gada-Token-Whitepaper.pptx"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/30 border border-purple-400/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.pptx)</span>
            </a>
          </div>

        </div>

        {/* In-Browser Interactive Slide Viewer Container */}
        <div className={`max-w-5xl mx-auto transition-all ${
          isFullscreen 
            ? 'fixed inset-0 z-50 bg-[#080014] p-3 sm:p-8 flex flex-col justify-between overflow-y-auto' 
            : 'relative'
        }`}>
          
          <div className="glass-panel rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-950/70 overflow-hidden flex flex-col min-h-[480px] sm:min-h-[520px] relative">
            
            {/* Cinematic Travelling Border Beam */}
            <BorderBeam size={220} duration={8} colorFrom="#A855F7" colorTo="#E0AAFF" />

            {/* Slide Header Toolbar */}
            <div className="bg-[#12002B] px-4 sm:px-6 py-3.5 border-b border-purple-500/20 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded font-bold shrink-0">
                  {currentSlide.category}
                </span>
                <span className="text-xs font-mono font-bold text-slate-300 truncate">
                  Slide {currentSlide.id} of {totalSlides}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-1.5 rounded-lg text-purple-300/70 hover:text-white hover:bg-purple-950/60 transition-colors"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Reader"}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Slide Body with Fade-in Animation on slide change */}
            <div 
              key={currentSlide.id}
              className="p-5 sm:p-8 md:p-10 flex-1 flex flex-col justify-between animate-fade-in-slide relative z-10"
            >
              <div>
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {currentSlide.title}
                  </h3>
                  {currentSlide.subtitle && (
                    <p className="text-xs sm:text-sm font-semibold text-purple-300 mt-1 font-mono">
                      {currentSlide.subtitle}
                    </p>
                  )}
                </div>

                <div className="bg-[#14022D]/70 p-4 sm:p-5 rounded-xl border border-purple-500/20 mb-5 sm:mb-6 text-sm sm:text-base text-slate-100 font-medium leading-relaxed shadow-inner break-words">
                  {currentSlide.summary}
                </div>

                {/* Bullets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6">
                  {currentSlide.bullets.map((b, i) => {
                    const isGadaChat = b.heading.toLowerCase().includes('gada.chat');
                    const isGadaVoice = b.heading.toLowerCase().includes('gadavoice');

                    return (
                      <div 
                        key={i} 
                        className="p-3.5 sm:p-4 rounded-xl bg-[#14022D]/50 border border-purple-500/20 flex items-start gap-3 hover:border-purple-400/40 transition-colors"
                      >
                        {isGadaChat ? (
                          <img src="/gadachat-logo.png" alt="Gada Chat" className="w-5 h-5 rounded-md object-contain shrink-0 mt-0.5 border border-purple-500/30" />
                        ) : isGadaVoice ? (
                          <img src="/gadavoice-logo.png" alt="GadaVoice" className="w-5 h-5 rounded-md object-contain shrink-0 mt-0.5 border border-indigo-500/30" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{b.heading}</h4>
                          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed break-words">{b.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Callout Footer of Slide */}
              {currentSlide.callout && (
                <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs sm:text-sm font-mono font-semibold text-slate-100 flex items-center justify-between shadow-sm">
                  <span className="truncate mr-2">{currentSlide.callout}</span>
                  <span className="text-[11px] text-purple-300 font-bold hidden sm:inline shrink-0">gadatoken.com</span>
                </div>
              )}

            </div>

            {/* Slide Navigation Bottom Bar */}
            <div className="bg-[#12002B] px-4 sm:px-6 py-3.5 border-t border-purple-500/20 flex items-center justify-between gap-2 relative z-10">
              
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-[#200445] hover:bg-[#2C065E] border border-purple-500/30 text-xs font-medium text-purple-200 hover:text-white transition-colors shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              {/* Slide Number Indicators / Scrollable Quick Jump on Mobile */}
              <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-none px-2 scrollbar-none">
                {WHITEPAPER_SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(index)}
                    title={slide.title}
                    className={`w-6 h-6 rounded-md text-[11px] font-mono flex items-center justify-center shrink-0 transition-all ${
                      currentSlideIndex === index
                        ? 'bg-purple-600 text-white font-bold shadow-sm shadow-purple-500/40'
                        : 'text-purple-300/70 hover:bg-purple-950 hover:text-white'
                    }`}
                  >
                    {slide.id}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs font-bold text-white transition-all shadow-sm shadow-purple-600/30 shrink-0"
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

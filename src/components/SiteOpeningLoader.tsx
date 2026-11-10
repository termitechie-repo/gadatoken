import React, { useState, useEffect } from 'react';

interface SiteOpeningLoaderProps {
  onFadeStart?: () => void;
  onComplete: () => void;
}

export const SiteOpeningLoader: React.FC<SiteOpeningLoaderProps> = ({ onFadeStart, onComplete }) => {
  const [fading, setFading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const dismissedRef = React.useRef<boolean>(false);

  const handleDismiss = () => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setFading(true);
    if (onFadeStart) {
      onFadeStart();
    }
    setTimeout(() => {
      onComplete();
    }, 450); // Snappy smooth fade-out
  };

  useEffect(() => {
    // Smooth progress increment
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 55);

    // Auto complete after ~1.55s
    const timer = setTimeout(() => {
      handleDismiss();
    }, 1550);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      onClick={handleDismiss}
      className={`fixed inset-0 z-50 bg-[#080014] flex flex-col items-center justify-center cursor-pointer select-none transition-opacity duration-450 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none" />

      {/* 3D Spinning Coin Container */}
      <div className="relative mb-8 perspective-1000">
        
        {/* Soft radial pulse halo */}
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/40 via-violet-500/40 to-indigo-600/40 rounded-full blur-2xl opacity-60 animate-pulse" />

        {/* 3D Spinning Coin Body */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-indigo-400 to-purple-600 shadow-2xl shadow-purple-950 animate-spin-3d">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-300/60 bg-[#12002B]">
            <img 
              src="/gadatokenlogo.jpeg" 
              alt="Gada Token Coin" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/gadatoken.jpeg';
              }}
            />
          </div>
        </div>
      </div>

      {/* Brand & Telemetry Information */}
      <div className="text-center relative z-10 px-4">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="font-extrabold text-white text-lg sm:text-xl tracking-tight font-sans">
            GADA TOKEN
          </span>
          <span className="text-[10px] font-mono uppercase bg-purple-500/20 text-purple-300 border border-purple-500/40 px-2 py-0.5 rounded font-bold">
            GDT
          </span>
        </div>

        <div className="text-xs font-mono text-purple-300/80 tracking-wider uppercase mb-5">
          BNB Smart Chain • BEP-20
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-48 sm:w-60 h-1 bg-[#1A0338] rounded-full overflow-hidden border border-purple-500/20 mx-auto mb-3">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-400 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Initializing Ecosystem... {progress}%</span>
        </div>

        <div className="mt-4 text-[10px] font-mono text-purple-400/60 uppercase tracking-widest">
          Click anywhere to skip
        </div>
      </div>

    </div>
  );
};

import React, { useEffect, useRef } from 'react';

interface CoinConfettiProps {
  triggerKey?: number | string;
  onComplete?: () => void;
}

interface ConfettiCoin {
  type: 'coin';
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  coinType: number; // 0: Official Logo, 1: Gold GDT, 2: Platinum GDT
  rotX: number;
  rotY: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  sway: number;
  swaySpeed: number;
  swayWidth: number;
  alpha: number;
}

interface ConfettiFoil {
  type: 'foil';
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  color: string;
  rotX: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedZ: number;
  sway: number;
  swaySpeed: number;
  alpha: number;
}

type ConfettiParticle = ConfettiCoin | ConfettiFoil;

export const CoinConfetti: React.FC<CoinConfettiProps> = ({ triggerKey = 0, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setupCanvasSize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupCanvasSize();
    window.addEventListener('resize', setupCanvasSize);

    // Check reduced motion - do NOT kill animation, just slow spin/sway down
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const motionFactor = prefersReducedMotion ? 0.35 : 1.0;

    // High-res sprite dimensions for offscreen rendering
    const spriteSize = 140;
    const offscreenCanvases: HTMLCanvasElement[] = [];

    const drawFallbackCoin = (
      octx: CanvasRenderingContext2D,
      variant: 'official' | 'gold' | 'platinum'
    ) => {
      const center = spriteSize / 2;
      const radius = center - 6;

      // 1. Outer rim
      const rimGrad = octx.createRadialGradient(center, center, radius * 0.7, center, center, radius);
      if (variant === 'gold') {
        rimGrad.addColorStop(0, '#F59E0B');
        rimGrad.addColorStop(0.7, '#D97706');
        rimGrad.addColorStop(1, '#78350F');
      } else if (variant === 'platinum') {
        rimGrad.addColorStop(0, '#FFFFFF');
        rimGrad.addColorStop(0.7, '#CBD5E1');
        rimGrad.addColorStop(1, '#475569');
      } else {
        rimGrad.addColorStop(0, '#C084FC');
        rimGrad.addColorStop(0.7, '#9333EA');
        rimGrad.addColorStop(1, '#3B0764');
      }

      octx.beginPath();
      octx.arc(center, center, radius, 0, Math.PI * 2);
      octx.fillStyle = rimGrad;
      octx.fill();

      // 2. Coin Face
      const faceGrad = octx.createLinearGradient(0, 0, spriteSize, spriteSize);
      if (variant === 'gold') {
        faceGrad.addColorStop(0, '#FDE68A');
        faceGrad.addColorStop(0.5, '#F59E0B');
        faceGrad.addColorStop(1, '#B45309');
      } else if (variant === 'platinum') {
        faceGrad.addColorStop(0, '#FFFFFF');
        faceGrad.addColorStop(0.5, '#E2E8F0');
        faceGrad.addColorStop(1, '#94A3B8');
      } else {
        faceGrad.addColorStop(0, '#581C87');
        faceGrad.addColorStop(0.5, '#2E1065');
        faceGrad.addColorStop(1, '#1A0033');
      }

      octx.beginPath();
      octx.arc(center, center, radius - 4, 0, Math.PI * 2);
      octx.fillStyle = faceGrad;
      octx.fill();

      // 3. Central GDT Inscription
      octx.fillStyle = variant === 'gold' ? '#78350F' : variant === 'platinum' ? '#1E293B' : '#F3E8FF';
      octx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
      octx.textAlign = 'center';
      octx.textBaseline = 'middle';
      octx.fillText('GDT', center, center);

      // Micro inner engraved line
      octx.beginPath();
      octx.arc(center, center, radius - 8, 0, Math.PI * 2);
      octx.lineWidth = 1.5;
      octx.strokeStyle =
        variant === 'gold'
          ? 'rgba(254, 240, 138, 0.7)'
          : variant === 'platinum'
          ? 'rgba(255, 255, 255, 0.8)'
          : 'rgba(216, 180, 254, 0.7)';
      octx.stroke();
    };

    const createCoinSprite = (variant: 'official' | 'gold' | 'platinum') => {
      const oc = document.createElement('canvas');
      oc.width = spriteSize;
      oc.height = spriteSize;
      const octx = oc.getContext('2d');
      if (!octx) return oc;

      drawFallbackCoin(octx, variant);
      return oc;
    };

    offscreenCanvases.push(createCoinSprite('official'));
    offscreenCanvases.push(createCoinSprite('gold'));
    offscreenCanvases.push(createCoinSprite('platinum'));

    // Prime the official GDT logo into variant 0
    const primeOfficialLogo = () => {
      const img = new Image();
      img.src = '/gadatokenlogo.jpeg';

      const renderImgToSprite = () => {
        const oc0 = offscreenCanvases[0];
        const octx0 = oc0?.getContext('2d');
        if (!octx0) return;

        const center = spriteSize / 2;
        const radius = center - 5;

        octx0.clearRect(0, 0, spriteSize, spriteSize);

        // Clip to circular coin shape
        octx0.save();
        octx0.beginPath();
        octx0.arc(center, center, radius, 0, Math.PI * 2);
        octx0.clip();
        octx0.drawImage(img, 0, 0, spriteSize, spriteSize);
        octx0.restore();

        // Gleaming outer metallic coin rim
        octx0.beginPath();
        octx0.arc(center, center, radius, 0, Math.PI * 2);
        octx0.lineWidth = 5;
        const rimGrad = octx0.createLinearGradient(0, 0, spriteSize, spriteSize);
        rimGrad.addColorStop(0, '#E9D5FF');
        rimGrad.addColorStop(0.3, '#A855F7');
        rimGrad.addColorStop(0.7, '#6B21A8');
        rimGrad.addColorStop(1, '#E9D5FF');
        octx0.strokeStyle = rimGrad;
        octx0.stroke();

        // Inner beveled highlight line
        octx0.beginPath();
        octx0.arc(center, center, radius - 3, 0, Math.PI * 2);
        octx0.lineWidth = 1.5;
        octx0.strokeStyle = 'rgba(255, 255, 255, 0.55)';
        octx0.stroke();
      };

      if (img.complete && img.naturalWidth > 0) {
        renderImgToSprite();
      } else {
        img.onload = renderImgToSprite;
        img.onerror = () => {
          // Fallback image try
          img.src = '/gadatoken.jpeg';
        };
      }
    };

    primeOfficialLogo();

    // Particle Generation: prominent coins + celebratory metallic foils
    const isMobile = width < 768;
    const coinCount = isMobile ? 32 : 58;
    const foilCount = isMobile ? 24 : 45;
    const particles: ConfettiParticle[] = [];

    // Min and max coin size (prominent, unmistakable GDT coins)
    const minCoinSize = isMobile ? 36 : 48;
    const maxCoinSize = isMobile ? 52 : 72;

    // Coins initialization with staggered vertical drop positions
    for (let i = 0; i < coinCount; i++) {
      const size = Math.random() * (maxCoinSize - minCoinSize) + minCoinSize;
      particles.push({
        type: 'coin',
        x: Math.random() * width,
        // Staggered top distribution: some start right at the top screen boundary
        y: -(Math.random() * (height * 0.75) + 30),
        vx: (Math.random() - 0.5) * 1.6,
        vy: Math.random() * 2.2 + 2.4, // floaty realistic coin drop (2.4 - 4.6 px/frame)
        size,
        // 60% official logo, 25% gold, 15% platinum
        coinType: i % 5 === 0 ? 1 : i % 7 === 0 ? 2 : 0,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: (Math.random() - 0.5) * 0.7,
        rotSpeedX: ((Math.random() - 0.5) * 0.08 + 0.04) * motionFactor,
        rotSpeedY: ((Math.random() - 0.5) * 0.06 + 0.03) * motionFactor,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: (Math.random() * 0.025 + 0.02) * motionFactor,
        swayWidth: Math.random() * 2.2 + 1.2,
        alpha: 1,
      });
    }

    // Festive metallic foils
    const foilColors = ['#F59E0B', '#C084FC', '#A855F7', '#38BDF8', '#EC4899', '#E2E8F0'];
    for (let i = 0; i < foilCount; i++) {
      particles.push({
        type: 'foil',
        x: Math.random() * width,
        y: -(Math.random() * (height * 0.6) + 20),
        vx: (Math.random() - 0.5) * 1.8,
        vy: Math.random() * 2.0 + 2.0,
        width: Math.random() * 5 + 5,
        height: Math.random() * 10 + 8,
        color: foilColors[Math.floor(Math.random() * foilColors.length)],
        rotX: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.12 * motionFactor,
        rotSpeedZ: (Math.random() - 0.5) * 0.09 * motionFactor,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: (Math.random() * 0.035 + 0.025) * motionFactor,
        alpha: 1,
      });
    }

    let isCompleted = false;
    const startTime = performance.now();
    const activeStreamDuration = 5500; // Continuous coin cascade for 5.5 seconds
    const maxTotalDuration = 9000; // 9 seconds total max

    const render = (now: number) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      let activeParticles = 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Physics: Sway & Gravity
        p.sway += p.swaySpeed;
        const swayOffset = Math.sin(p.sway) * (p.type === 'coin' ? p.swayWidth : 2.2);
        p.x += p.vx + swayOffset;
        p.y += p.vy;

        // Rotation
        p.rotX += p.rotSpeedX;

        // Cascade recycling: if still in active stream duration, respawn coins at top
        if (p.y > height + 60) {
          if (elapsed < activeStreamDuration) {
            p.y = -(Math.random() * 80 + 30);
            p.x = Math.random() * width;
            p.vx = (Math.random() - 0.5) * 1.5;
            p.vy = p.type === 'coin' ? Math.random() * 2.2 + 2.4 : Math.random() * 2.0 + 2.0;
            p.alpha = 1;
          } else {
            // Stream duration ended, particle can now naturally exit
            continue;
          }
        }

        // Particle is active on screen
        if (p.y < height + 80 && p.alpha > 0.01) {
          activeParticles++;

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);

          if (p.type === 'coin') {
            p.rotY += p.rotSpeedY;

            // Tilt slightly in the direction of aerodynamic sway
            const tiltZ = p.rotZ + Math.sin(p.sway) * 0.28;
            ctx.rotate(tiltZ);

            // 3D perspective tumbling (scale cosX, cosY)
            const cosX = Math.cos(p.rotX);
            const cosY = Math.cos(p.rotY);

            // Enforce minimum thickness so coins never shrink to an invisible line
            const scaleX = Math.abs(cosX) < 0.16 ? (cosX < 0 ? -0.16 : 0.16) : cosX;
            const scaleY = Math.abs(cosY) < 0.16 ? (cosY < 0 ? -0.16 : 0.16) : cosY;
            ctx.scale(scaleX, scaleY);

            const drawRadius = p.size / 2;

            // Render 3D metallic rim edge glow when flipping edge-on
            if (Math.abs(cosX) < 0.32 || Math.abs(cosY) < 0.32) {
              ctx.beginPath();
              ctx.arc(0, 0, drawRadius, 0, Math.PI * 2);
              ctx.fillStyle = p.coinType === 1 ? '#FDE68A' : p.coinType === 2 ? '#FFFFFF' : '#E9D5FF';
              ctx.shadowColor = p.coinType === 1 ? 'rgba(245, 158, 11, 0.8)' : 'rgba(168, 85, 247, 0.8)';
              ctx.shadowBlur = 10;
              ctx.fill();
              ctx.shadowBlur = 0;
            }

            // Draw Coin Face
            const oc = offscreenCanvases[p.coinType] || offscreenCanvases[0];
            ctx.drawImage(oc, -drawRadius, -drawRadius, p.size, p.size);
          } else {
            // Foil ribbon particle
            p.rotZ += p.rotSpeedZ;
            ctx.rotate(p.rotZ);
            ctx.scale(Math.cos(p.rotX), 1);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
          }

          ctx.restore();
        }
      }

      // Check continuation or completion
      if ((activeParticles > 0 || elapsed < activeStreamDuration) && elapsed < maxTotalDuration) {
        animationFrameId = requestAnimationFrame(render);
      } else if (!isCompleted) {
        isCompleted = true;
        ctx.clearRect(0, 0, width, height);
        if (onComplete) onComplete();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setupCanvasSize);
    };
  }, [triggerKey]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};


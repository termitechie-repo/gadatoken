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
  coinType: number; // 0: Violet/Official, 1: Gold, 2: Platinum
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
    // Respect user's reduced motion setting
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      if (onComplete) onComplete();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Pre-render 3 varieties of offscreen coin textures for silky 60fps performance
    const spriteSize = 96;
    const offscreenCanvases: HTMLCanvasElement[] = [];

    const createCoinSprite = (variant: 'official' | 'gold' | 'platinum') => {
      const oc = document.createElement('canvas');
      oc.width = spriteSize;
      oc.height = spriteSize;
      const octx = oc.getContext('2d');
      if (!octx) return oc;

      const center = spriteSize / 2;
      const radius = center - 4;

      // 1. Outer rim gradient
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
        faceGrad.addColorStop(0, '#FCD34D');
        faceGrad.addColorStop(0.5, '#F59E0B');
        faceGrad.addColorStop(1, '#B45309');
      } else if (variant === 'platinum') {
        faceGrad.addColorStop(0, '#F8FAFC');
        faceGrad.addColorStop(0.5, '#E2E8F0');
        faceGrad.addColorStop(1, '#94A3B8');
      } else {
        faceGrad.addColorStop(0, '#4C1D95');
        faceGrad.addColorStop(0.5, '#2E1065');
        faceGrad.addColorStop(1, '#1E0048');
      }

      octx.beginPath();
      octx.arc(center, center, radius - 3, 0, Math.PI * 2);
      octx.fillStyle = faceGrad;
      octx.fill();

      // 3. Central GDT Embellishment
      octx.fillStyle = variant === 'gold' ? '#78350F' : variant === 'platinum' ? '#1E293B' : '#F3E8FF';
      octx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
      octx.textAlign = 'center';
      octx.textBaseline = 'middle';
      octx.fillText('GDT', center, center - 1);

      // Micro inner border
      octx.beginPath();
      octx.arc(center, center, radius - 6, 0, Math.PI * 2);
      octx.lineWidth = 1;
      octx.strokeStyle = variant === 'gold' ? 'rgba(254, 240, 138, 0.6)' : variant === 'platinum' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(216, 180, 254, 0.6)';
      octx.stroke();

      return oc;
    };

    offscreenCanvases.push(createCoinSprite('official'));
    offscreenCanvases.push(createCoinSprite('gold'));
    offscreenCanvases.push(createCoinSprite('platinum'));

    // Also load actual GDT logo into variant 0 when loaded
    const officialImg = new Image();
    officialImg.src = '/gadatokenlogo.jpeg';
    officialImg.onload = () => {
      const oc0 = offscreenCanvases[0];
      const octx0 = oc0.getContext('2d');
      if (!octx0) return;
      const center = spriteSize / 2;
      const radius = center - 4;

      octx0.clearRect(0, 0, spriteSize, spriteSize);
      octx0.save();
      octx0.beginPath();
      octx0.arc(center, center, radius, 0, Math.PI * 2);
      octx0.clip();
      octx0.drawImage(officialImg, 0, 0, spriteSize, spriteSize);
      octx0.restore();

      // Crisp outer metallic rim
      octx0.beginPath();
      octx0.arc(center, center, radius, 0, Math.PI * 2);
      octx0.lineWidth = 3.5;
      octx0.strokeStyle = 'rgba(216, 180, 254, 0.9)';
      octx0.stroke();
    };

    // Spawn Particles (Coins + Floating Foil Sparkles)
    const isMobile = width < 768;
    const coinCount = isMobile ? 42 : 78;
    const foilCount = isMobile ? 25 : 45;
    const particles: ConfettiParticle[] = [];

    // Coins
    for (let i = 0; i < coinCount; i++) {
      const size = Math.random() * 16 + 22; // 22px to 38px confetti coin size
      particles.push({
        type: 'coin',
        x: Math.random() * width,
        // Staggered top distribution: some start right at the top edge, others follow behind
        y: -(Math.random() * 320 + 15),
        vx: (Math.random() - 0.5) * 1.2,
        vy: Math.random() * 1.6 + 1.8, // Smooth floaty falling speed (1.8 to 3.4 px/frame)
        size,
        coinType: i % 3, // alternate official, gold, platinum
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: (Math.random() - 0.5) * 0.8,
        rotSpeedX: (Math.random() - 0.5) * 0.07 + 0.035, // Smooth flipping
        rotSpeedY: (Math.random() - 0.5) * 0.05 + 0.02,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.03 + 0.025,
        swayWidth: Math.random() * 1.8 + 1.2, // Gentle horizontal floating
        alpha: 1,
      });
    }

    // Accompanying metallic foil specks for rich celebratory confetti depth
    const foilColors = ['#F59E0B', '#C084FC', '#A855F7', '#E2E8F0', '#38BDF8'];
    for (let i = 0; i < foilCount; i++) {
      particles.push({
        type: 'foil',
        x: Math.random() * width,
        y: -(Math.random() * 300 + 20),
        vx: (Math.random() - 0.5) * 1.5,
        vy: Math.random() * 1.8 + 1.6,
        width: Math.random() * 4 + 4,
        height: Math.random() * 8 + 6,
        color: foilColors[Math.floor(Math.random() * foilColors.length)],
        rotX: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.12,
        rotSpeedZ: (Math.random() - 0.5) * 0.08,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.04 + 0.03,
        alpha: 1,
      });
    }

    let isCompleted = false;
    const startTime = performance.now();
    const maxDuration = 9000; // 9 seconds max cutoff

    const render = (now: number) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      let activeCount = 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Smooth aerodynamic sway
        p.sway += p.swaySpeed;
        const currentSway = Math.sin(p.sway) * (p.type === 'coin' ? p.swayWidth : 2.0);
        p.x += p.vx + currentSway;
        p.y += p.vy;

        // Smooth 3D rotation
        p.rotX += p.rotSpeedX;

        // Smooth fade out near the bottom
        if (p.y > height - 100) {
          p.alpha = Math.max(0, 1 - (p.y - (height - 100)) / 140);
        }

        if (p.y < height + 80 && p.alpha > 0.01 && elapsed < maxDuration) {
          activeCount++;

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);

          if (p.type === 'coin') {
            p.rotY += p.rotSpeedY;
            // Aerodynamic tilt: coin tilts slightly in the direction of its sway
            const tiltZ = p.rotZ + Math.sin(p.sway) * 0.35;
            ctx.rotate(tiltZ);

            // 3D perspective tumbling (scale in X and Y)
            const cosX = Math.cos(p.rotX);
            const cosY = Math.cos(p.rotY);
            ctx.scale(cosX, cosY);

            const scaleRatio = p.size / spriteSize;
            const drawRadius = p.size / 2;

            // Draw metallic 3D rim edge when flipping edge-on
            if (Math.abs(cosX) < 0.28 || Math.abs(cosY) < 0.28) {
              ctx.beginPath();
              ctx.arc(0, 0, drawRadius, 0, Math.PI * 2);
              ctx.fillStyle = p.coinType === 1 ? '#FDE68A' : p.coinType === 2 ? '#FFFFFF' : '#E9D5FF';
              ctx.shadowColor = p.coinType === 1 ? 'rgba(245, 158, 11, 0.7)' : 'rgba(168, 85, 247, 0.7)';
              ctx.shadowBlur = 8;
              ctx.fill();
              ctx.shadowBlur = 0;
            }

            // Draw coin face
            const oc = offscreenCanvases[p.coinType] || offscreenCanvases[0];
            ctx.drawImage(oc, -drawRadius, -drawRadius, p.size, p.size);
          } else {
            // Foil speck
            p.rotZ += p.rotSpeedZ;
            ctx.rotate(p.rotZ);
            ctx.scale(Math.cos(p.rotX), 1);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
          }

          ctx.restore();
        }
      }

      // Check continuation or cleanup
      if (activeCount > 0 && elapsed < maxDuration) {
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
      window.removeEventListener('resize', handleResize);
    };
  }, [triggerKey]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

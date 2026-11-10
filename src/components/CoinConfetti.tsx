import React, { useEffect, useRef } from 'react';

interface CoinConfettiProps {
  triggerKey?: number | string;
  onComplete?: () => void;
}

interface CoinParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  wobble: number;
  wobbleSpeed: number;
  alpha: number;
}

export const CoinConfetti: React.FC<CoinConfettiProps> = ({ triggerKey = 0, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced motion accessibility setting
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

    // Pre-render the circular GDT coin sprite on an offscreen canvas
    const coinSize = 100;
    const offscreen = document.createElement('canvas');
    offscreen.width = coinSize;
    offscreen.height = coinSize;
    const offCtx = offscreen.getContext('2d');

    const drawFallbackCoin = () => {
      if (!offCtx) return;
      offCtx.clearRect(0, 0, coinSize, coinSize);
      
      // Outer metallic gradient rim
      const grad = offCtx.createRadialGradient(coinSize / 2, coinSize / 2, coinSize / 4, coinSize / 2, coinSize / 2, coinSize / 2);
      grad.addColorStop(0, '#A855F7');
      grad.addColorStop(0.7, '#6B21A8');
      grad.addColorStop(1, '#3B0764');

      offCtx.beginPath();
      offCtx.arc(coinSize / 2, coinSize / 2, coinSize / 2 - 2, 0, Math.PI * 2);
      offCtx.fillStyle = grad;
      offCtx.fill();
      offCtx.lineWidth = 3;
      offCtx.strokeStyle = '#E9D5FF';
      offCtx.stroke();

      // Inner text
      offCtx.fillStyle = '#FFFFFF';
      offCtx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillText('GDT', coinSize / 2, coinSize / 2);
    };

    drawFallbackCoin();

    // Load actual GDT logo into the offscreen canvas
    const img = new Image();
    img.src = '/gadatokenlogo.jpeg';
    img.onload = () => {
      if (!offCtx) return;
      offCtx.clearRect(0, 0, coinSize, coinSize);

      offCtx.save();
      // Circular clip
      offCtx.beginPath();
      offCtx.arc(coinSize / 2, coinSize / 2, coinSize / 2 - 2, 0, Math.PI * 2);
      offCtx.clip();

      // Draw image
      offCtx.drawImage(img, 0, 0, coinSize, coinSize);
      offCtx.restore();

      // Metallic rim overlay
      offCtx.beginPath();
      offCtx.arc(coinSize / 2, coinSize / 2, coinSize / 2 - 2, 0, Math.PI * 2);
      offCtx.lineWidth = 3.5;
      offCtx.strokeStyle = 'rgba(216, 180, 254, 0.85)';
      offCtx.stroke();
    };

    // Initialize coin particles
    const particleCount = width < 640 ? 32 : 58;
    const particles: CoinParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const scale = Math.random() * 0.65 + 0.35; // 0.35x to 1.0x scale for 3D depth
      particles.push({
        x: Math.random() * width,
        y: -(Math.random() * (height * 0.8) + 60), // Staggered spawn above screen
        vx: (Math.random() - 0.5) * 2.2,
        vy: (Math.random() * 3 + 4.5) * (scale + 0.2), // Closer coins fall faster
        scale,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.12 + 0.05,
        rotSpeedY: (Math.random() - 0.5) * 0.14 + 0.06,
        rotSpeedZ: (Math.random() - 0.5) * 0.08,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.06 + 0.02,
        alpha: 1,
      });
    }

    let isCompleted = false;
    const startTime = performance.now();
    const maxDuration = 7500; // 7.5 seconds safety cutoff

    const render = (now: number) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      let activeCount = 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Physics step
        p.wobble += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobble) * 0.9;
        p.y += p.vy;

        // 3D rotation step
        p.rotX += p.rotSpeedX;
        p.rotY += p.rotSpeedY;
        p.rotZ += p.rotSpeedZ;

        // Fade out near bottom of screen
        if (p.y > height - 120) {
          p.alpha = Math.max(0, 1 - (p.y - (height - 120)) / 180);
        }

        if (p.y < height + 100 && p.alpha > 0.01 && elapsed < maxDuration) {
          activeCount++;

          const cosX = Math.cos(p.rotX);
          const cosY = Math.cos(p.rotY);

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotZ);

          // 3D tumble transformation
          ctx.scale(cosX * p.scale, cosY * p.scale);

          // Draw physical coin edge if edge-on
          if (Math.abs(cosX) < 0.22 || Math.abs(cosY) < 0.22) {
            ctx.beginPath();
            ctx.arc(0, 0, coinSize / 2, 0, Math.PI * 2);
            ctx.fillStyle = '#C084FC';
            ctx.shadowColor = 'rgba(168, 85, 247, 0.8)';
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0;
          }

          // Draw the coin face
          ctx.drawImage(offscreen, -coinSize / 2, -coinSize / 2, coinSize, coinSize);
          ctx.restore();
        }
      }

      // If all particles cleared the viewport or duration elapsed, conclude gracefully
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

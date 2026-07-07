import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulseOffset: number;
}

const LINK_DISTANCE = 150;
const NODE_COLOR = '0, 113, 227'; // brand blue rgb

/**
 * Faint animated network of drifting, pulsing nodes — represents the
 * integration pipelines Selfera builds. Renders behind all content at
 * very low opacity so text stays crisp on white.
 */
export default function NodeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let lastWidth = 0;
    let lastHeight = 0;

    const seed = () => {
      const area = width * height;
      const isMobile = width < 640;
      const minNodes = isMobile ? 18 : 35;
      const count = Math.min(90, Math.max(minNodes, Math.round(area / 26000)));
      const maxSpeed = isMobile ? 0.12 : 0.22;

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * maxSpeed,
        vy: (Math.random() - 0.5) * maxSpeed,
        r: isMobile ? 0.8 + Math.random() * 1.2 : 1.2 + Math.random() * 1.6,
        pulseOffset: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // Skip resizing the canvas on mobile address-bar changes during scrolls (minor height changes)
      const widthChanged = newWidth !== lastWidth;
      const heightChanged = Math.abs(newHeight - lastHeight) > 80;

      if (widthChanged || heightChanged) {
        lastWidth = newWidth;
        lastHeight = newHeight;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = newWidth;
        height = newHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        seed();
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const isMobile = width < 640;
      const currentLinkDist = isMobile ? 90 : LINK_DISTANCE;
      const currentLinkDistSq = currentLinkDist * currentLinkDist;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < currentLinkDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / currentLinkDist) * 0.08;
            ctx.strokeStyle = `rgba(${NODE_COLOR}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const pulse = 0.6 + 0.4 * Math.sin(t / 1400 + n.pulseOffset);
        ctx.fillStyle = `rgba(${NODE_COLOR}, ${0.18 * pulse})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (0.85 + 0.3 * pulse), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);

    if (reducedMotion) {
      draw(0); // single static frame
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}

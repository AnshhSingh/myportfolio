"use client";

import { useRef, useEffect, useCallback } from "react";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const initDots = useCallback((width: number, height: number) => {
    const dots: Dot[] = [];
    // Responsive spacing: wider on mobile for fewer dots
    const isMobile = width < 768;
    const spacing = isMobile ? 50 : 35;
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);
    const offsetX = (width - (cols - 1) * spacing) / 2;
    const offsetY = (height - (rows - 1) * spacing) / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = offsetX + col * spacing;
        const y = offsetY + row * spacing;
        dots.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0 });
      }
    }
    dotsRef.current = dots;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initDots(rect.width, rect.height);
    };

    setupCanvas();

    // ResizeObserver for canvas sizing
    resizeObserverRef.current = new ResizeObserver(() => {
      setupCanvas();
    });
    resizeObserverRef.current.observe(canvas.parentElement || canvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Get theme colors from CSS variables
    const getColors = () => {
      const style = getComputedStyle(document.documentElement);
      const fg = style.getPropertyValue("--muted-foreground").trim();
      const accentPop = style.getPropertyValue("--accent-pop").trim();
      return { fg, accentPop };
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const dots = dotsRef.current;
      const mouse = mouseRef.current;
      const { accentPop } = getColors();
      const influenceRadius = 150;
      const connectionRadius = 100;

      for (const dot of dots) {
        if (!prefersReducedMotion) {
          const dx = mouse.x - dot.baseX;
          const dy = mouse.y - dot.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < influenceRadius) {
            const force = (1 - dist / influenceRadius) * 12;
            const angle = Math.atan2(dy, dx);
            dot.vx += Math.cos(angle) * force * 0.02;
            dot.vy += Math.sin(angle) * force * 0.02;
          }

          // Spring back to base position
          dot.vx += (dot.baseX - dot.x) * 0.04;
          dot.vy += (dot.baseY - dot.y) * 0.04;

          // Damping
          dot.vx *= 0.88;
          dot.vy *= 0.88;

          dot.x += dot.vx;
          dot.y += dot.vy;
        } else {
          dot.x = dot.baseX;
          dot.y = dot.baseY;
        }
      }

      // Draw connections first (behind dots)
      if (!prefersReducedMotion) {
        for (let i = 0; i < dots.length; i++) {
          for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionRadius) {
              // Only draw if near mouse
              const midX = (dots[i].x + dots[j].x) / 2;
              const midY = (dots[i].y + dots[j].y) / 2;
              const mouseDist = Math.sqrt(
                (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2
              );

              if (mouseDist < influenceRadius * 1.2) {
                const lineAlpha = (1 - dist / connectionRadius) * (1 - mouseDist / (influenceRadius * 1.2)) * 0.3;
                ctx.beginPath();
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.strokeStyle = `oklch(0.72 0.14 55 / ${lineAlpha})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw dots
      for (const dot of dots) {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNear = dist < influenceRadius;
        const proximity = isNear ? 1 - dist / influenceRadius : 0;

        // Dot size
        const baseSize = 1;
        const size = baseSize + proximity * 2;

        // Dot opacity
        const baseAlpha = 0.12;
        const alpha = baseAlpha + proximity * 0.6;

        // Fade-out near the bottom edge
        const fadeStart = h * 0.7;
        const fadeFactor = dot.baseY > fadeStart ? 1 - (dot.baseY - fadeStart) / (h - fadeStart) : 1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);

        if (isNear && !prefersReducedMotion) {
          // Amber glow for nearby dots
          ctx.fillStyle = `oklch(0.72 0.14 55 / ${alpha * fadeFactor})`;
          // Glow effect
          ctx.shadowColor = accentPop || "oklch(0.72 0.14 55)";
          ctx.shadowBlur = proximity * 12;
        } else {
          ctx.fillStyle = `oklch(0.5 0 0 / ${baseAlpha * fadeFactor})`;
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserverRef.current?.disconnect();
    };
  }, [initDots]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}

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

interface PointerPoint {
  x: number;
  y: number;
  radius: number;
  force: number;
}

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const touchesRef = useRef<PointerPoint[]>([]);
  const rafRef = useRef<number>(0);
  const isRunningRef = useRef<boolean>(false);
  const colorsRef = useRef<{ accentPop: string }>({ accentPop: "oklch(0.72 0.14 55)" });
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const initDots = useCallback((width: number, height: number) => {
    const dots: Dot[] = [];
    const isMobile = width < 768;
    // Spacing: wider on mobile for fewer dots and top performance
    const spacing = isMobile ? 52 : 36;
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
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Cache theme colors once and update on theme change (avoiding getComputedStyle on every frame)
    const updateColors = () => {
      const style = getComputedStyle(document.documentElement);
      const accentPop = style.getPropertyValue("--accent-pop").trim() || "oklch(0.72 0.14 55)";
      colorsRef.current = { accentPop };
    };
    updateColors();

    const themeObserver = new MutationObserver(updateColors);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;

    // Function declarations are hoisted to prevent any TDZ / undefined errors
    function requestTick() {
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        rafRef.current = requestAnimationFrame(draw);
      }
    }

    function setupCanvas() {
      // Cap DPR at 2 for performance on high-DPI screens
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas?.getBoundingClientRect();
      if (!rect || rect.width === 0 || rect.height === 0 || !canvas) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initDots(rect.width, rect.height);
      requestTick();
    }

    function draw() {
      if (!canvas || !ctx) {
        isRunningRef.current = false;
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) {
        isRunningRef.current = false;
        return;
      }

      ctx.clearRect(0, 0, w, h);

      const dots = dotsRef.current;
      const isMobile = w < 768;
      const { accentPop } = colorsRef.current;

      // Gather active points
      const activePoints: PointerPoint[] = [];
      if (mouseRef.current) {
        activePoints.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          radius: isMobile ? 120 : 150,
          force: 12,
        });
      }
      for (let i = 0; i < touchesRef.current.length; i++) {
        activePoints.push(touchesRef.current[i]);
      }

      const hasActivePointers = activePoints.length > 0;
      const connectionRadius = isMobile ? 75 : 95;
      let totalMotion = 0;

      // Update dot physics
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        if (!prefersReducedMotion) {
          if (hasActivePointers) {
            for (let j = 0; j < activePoints.length; j++) {
              const p = activePoints[j];
              const dx = p.x - dot.baseX;
              const dy = p.y - dot.baseY;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < p.radius && dist > 0) {
                const force = (1 - dist / p.radius) * p.force;
                const angle = Math.atan2(dy, dx);
                dot.vx += Math.cos(angle) * force * 0.02;
                dot.vy += Math.sin(angle) * force * 0.02;
              }
            }
          }

          // Spring back to base position
          dot.vx += (dot.baseX - dot.x) * 0.04;
          dot.vy += (dot.baseY - dot.y) * 0.04;

          // Damping
          dot.vx *= 0.88;
          dot.vy *= 0.88;

          dot.x += dot.vx;
          dot.y += dot.vy;

          totalMotion += Math.abs(dot.vx) + Math.abs(dot.vy) + Math.abs(dot.baseX - dot.x) + Math.abs(dot.baseY - dot.y);
        } else {
          dot.x = dot.baseX;
          dot.y = dot.baseY;
        }
      }

      // Draw connections (only if active pointers exist)
      if (!prefersReducedMotion && hasActivePointers) {
        const nearDots: Dot[] = [];
        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i];
          for (let p = 0; p < activePoints.length; p++) {
            const pt = activePoints[p];
            if (Math.abs(dot.x - pt.x) < pt.radius * 1.2 && Math.abs(dot.y - pt.y) < pt.radius * 1.2) {
              nearDots.push(dot);
              break;
            }
          }
        }

        for (let i = 0; i < nearDots.length; i++) {
          for (let j = i + 1; j < nearDots.length; j++) {
            const dx = nearDots[i].x - nearDots[j].x;
            const dy = nearDots[i].y - nearDots[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionRadius) {
              const midX = (nearDots[i].x + nearDots[j].x) / 2;
              const midY = (nearDots[i].y + nearDots[j].y) / 2;

              let maxPointerFactor = 0;
              for (let p = 0; p < activePoints.length; p++) {
                const pt = activePoints[p];
                const pDist = Math.sqrt((pt.x - midX) ** 2 + (pt.y - midY) ** 2);
                const maxDist = pt.radius * 1.2;
                if (pDist < maxDist) {
                  const factor = 1 - pDist / maxDist;
                  if (factor > maxPointerFactor) {
                    maxPointerFactor = factor;
                  }
                }
              }

              if (maxPointerFactor > 0) {
                const lineAlpha = (1 - dist / connectionRadius) * maxPointerFactor * 0.28;
                ctx.beginPath();
                ctx.moveTo(nearDots[i].x, nearDots[i].y);
                ctx.lineTo(nearDots[j].x, nearDots[j].y);
                ctx.strokeStyle = `oklch(0.72 0.14 55 / ${lineAlpha})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw dots
      const fadeStart = h * 0.7;
      const fadeRange = h - fadeStart;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        let maxProximity = 0;
        if (!prefersReducedMotion && hasActivePointers) {
          for (let p = 0; p < activePoints.length; p++) {
            const pt = activePoints[p];
            const dx = pt.x - dot.x;
            const dy = pt.y - dot.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < pt.radius) {
              const prox = 1 - dist / pt.radius;
              if (prox > maxProximity) {
                maxProximity = prox;
              }
            }
          }
        }

        const isNear = maxProximity > 0;
        const baseSize = 1;
        const size = baseSize + maxProximity * 1.8;
        const baseAlpha = 0.12;
        const alpha = baseAlpha + maxProximity * 0.6;
        const fadeFactor = dot.baseY > fadeStart && fadeRange > 0 ? 1 - (dot.baseY - fadeStart) / fadeRange : 1;

        if (isNear && !prefersReducedMotion) {
          // Soft outer halo without software shadowBlur
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, size + maxProximity * 3, 0, Math.PI * 2);
          ctx.fillStyle = `oklch(0.72 0.14 55 / ${0.15 * maxProximity * fadeFactor})`;
          ctx.fill();

          // Core dot
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `oklch(0.72 0.14 55 / ${alpha * fadeFactor})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `oklch(0.5 0 0 / ${baseAlpha * fadeFactor})`;
          ctx.fill();
        }
      }

      // Smart RAF Sleep: if no active touches/mouse and dots have settled, pause RAF
      if (!hasActivePointers && totalMotion < 0.05) {
        isRunningRef.current = false;
        return;
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      requestTick();
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Initial setup
    setupCanvas();

    // ResizeObserver for canvas sizing
    resizeObserverRef.current = new ResizeObserver(() => {
      setupCanvas();
    });
    if (canvas.parentElement) {
      resizeObserverRef.current.observe(canvas.parentElement);
    } else {
      resizeObserverRef.current.observe(canvas);
    }

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      requestTick();
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
      requestTick();
    };

    // Touch handlers
    const updateTouchPoints = (touchList: TouchList) => {
      const rect = canvas.getBoundingClientRect();
      const points: PointerPoint[] = [];
      const isMobile = rect.width < 768;
      const touchRadius = isMobile ? 115 : 140;
      const touchForce = isMobile ? 12 : 12;

      for (let i = 0; i < touchList.length; i++) {
        const touch = touchList[i];
        points.push({
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
          radius: touchRadius,
          force: touchForce,
        });
      }
      touchesRef.current = points;
      requestTick();
    };

    const handleTouchStart = (e: TouchEvent) => {
      updateTouchPoints(e.touches);

      if (prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      const dots = dotsRef.current;
      const isMobile = rect.width < 768;
      const impulseRadius = isMobile ? 100 : 130;

      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        const tx = touch.clientX - rect.left;
        const ty = touch.clientY - rect.top;

        for (let j = 0; j < dots.length; j++) {
          const dot = dots[j];
          const dx = tx - dot.baseX;
          const dy = ty - dot.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < impulseRadius && dist > 0) {
            const impulse = (1 - dist / impulseRadius) * 5;
            const angle = Math.atan2(dy, dx);
            dot.vx += Math.cos(angle) * impulse * 0.12;
            dot.vy += Math.sin(angle) * impulse * 0.12;
          }
        }
      }
      requestTick();
    };

    const handleTouchMove = (e: TouchEvent) => {
      updateTouchPoints(e.touches);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 0) {
        touchesRef.current = [];
      } else {
        updateTouchPoints(e.touches);
      }
      requestTick();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        mouseRef.current = null;
        touchesRef.current = [];
        isRunningRef.current = false;
        cancelAnimationFrame(rafRef.current);
      } else {
        requestTick();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isRunningRef.current = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMotionChange);
      themeObserver.disconnect();
      resizeObserverRef.current?.disconnect();
    };
  }, [initDots]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}

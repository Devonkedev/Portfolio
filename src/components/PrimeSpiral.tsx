import { useEffect, useRef } from "react";

// Ulam spiral: integers laid out on a square spiral, primes highlighted.
// Diagonal streaks appear because many quadratics produce dense runs of primes.

const sieve = (n: number) => {
  const isPrime = new Uint8Array(n + 1).fill(1);
  isPrime[0] = 0;
  isPrime[1] = 0;
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) for (let j = i * i; j <= n; j += i) isPrime[j] = 0;
  }
  return isPrime;
};

const spiralCoords = (count: number) => {
  const pts: [number, number][] = [];
  let x = 0, y = 0, dx = 1, dy = 0, segLen = 1, segPassed = 0, turns = 0;
  for (let i = 1; i <= count; i++) {
    pts.push([x, y]);
    x += dx;
    y += dy;
    if (++segPassed === segLen) {
      segPassed = 0;
      [dx, dy] = [-dy, dx];
      if (++turns % 2 === 0) segLen++;
    }
  }
  return pts;
};

const cssColor = (name: string, alpha: number) => {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return `hsl(${v} / ${alpha})`;
};

interface PrimeSpiralProps {
  side?: number; // cells per side
  className?: string;
}

const PrimeSpiral = ({ side = 81, className = "" }: PrimeSpiralProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const count = side * side;
    const isPrime = sieve(count);
    const pts = spiralCoords(count);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let raf = 0;

    const draw = (upTo: number) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const cell = Math.min(rect.width, rect.height) / side;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const prime = cssColor("--accent", 0.9);
      const composite = cssColor("--foreground", 0.08);

      for (let i = 0; i < upTo; i++) {
        const [x, y] = pts[i];
        const p = isPrime[i + 1];
        ctx.fillStyle = p ? prime : composite;
        const r = p ? cell * 0.34 : cell * 0.12;
        ctx.beginPath();
        ctx.arc(cx + x * cell, cy - y * cell, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      frame = Math.min(count, frame + Math.ceil(count / 90));
      draw(frame);
      if (frame < count) raf = requestAnimationFrame(animate);
    };

    if (reduceMotion) draw(count);
    else raf = requestAnimationFrame(animate);

    // Redraw on resize and when the theme class flips.
    const redraw = () => draw(frame || count);
    const ro = new ResizeObserver(redraw);
    ro.observe(canvas);
    const mo = new MutationObserver(redraw);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
    };
  }, [side]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Ulam spiral: integers arranged in a square spiral with prime numbers highlighted"
    />
  );
};

export default PrimeSpiral;

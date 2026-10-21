import { useEffect, useRef } from "react";

// Site-wide backdrop: drifting nebula glows (CSS) behind a twinkling,
// parallax starfield with the occasional shooting star (canvas).

type Star = { x: number; y: number; z: number; r: number; speed: number; phase: number; tint: boolean };
type Meteor = { x: number; y: number; vx: number; vy: number; life: number };

const readVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;
    let stars: Star[] = [];
    let meteor: Meteor | null = null;
    let nextMeteor = performance.now() + 3000;
    let starColor = readVar("--star");
    let accent = readVar("--accent");
    let dark = document.documentElement.classList.contains("dark");

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(320, Math.floor((w * h) / 5200));
      stars = Array.from({ length: count }, () => {
        const z = Math.random(); // depth: 0 = far, 1 = near
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: 0.3 + z * 1.2,
          speed: 0.6 + Math.random() * 1.8,
          phase: Math.random() * Math.PI * 2,
          tint: Math.random() < 0.18,
        };
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const scroll = window.scrollY;
      const maxAlpha = dark ? 0.95 : 0.6;

      for (const s of stars) {
        const twinkle = reduceMotion ? 0.8 : 0.55 + 0.45 * Math.sin(t * 0.001 * s.speed + s.phase);
        const y = (((s.y - scroll * (0.04 + s.z * 0.18)) % h) + h) % h;
        ctx.fillStyle = `hsl(${s.tint ? accent : starColor} / ${(0.25 + s.z * 0.75) * twinkle * maxAlpha})`;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
        // Soft glow on the nearest stars in dark mode
        if (dark && s.z > 0.85) {
          ctx.fillStyle = `hsl(${starColor} / ${0.08 * twinkle})`;
          ctx.beginPath();
          ctx.arc(s.x, y, s.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (reduceMotion) return;

      if (!meteor && t > nextMeteor) {
        const fromLeft = Math.random() < 0.5;
        meteor = {
          x: fromLeft ? Math.random() * w * 0.5 : w * 0.5 + Math.random() * w * 0.5,
          y: Math.random() * h * 0.4,
          vx: (fromLeft ? 1 : -1) * (7 + Math.random() * 5),
          vy: 3 + Math.random() * 2.5,
          life: 1,
        };
      }
      if (meteor) {
        const m = meteor;
        const tail = 14;
        const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * tail, m.y - m.vy * tail);
        grad.addColorStop(0, `hsl(${starColor} / ${m.life * (dark ? 0.9 : 0.5)})`);
        grad.addColorStop(1, `hsl(${accent} / 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * tail, m.y - m.vy * tail);
        ctx.stroke();
        m.x += m.vx;
        m.y += m.vy;
        m.life -= 0.012;
        if (m.life <= 0 || m.x < -200 || m.x > w + 200 || m.y > h + 200) {
          meteor = null;
          nextMeteor = t + 5000 + Math.random() * 7000;
        }
      }
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduceMotion) draw(0);
      else raf = requestAnimationFrame(loop);
    };

    init();
    start();

    const onResize = () => {
      init();
      if (reduceMotion) draw(0);
    };
    const onScroll = () => reduceMotion && draw(0);
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(raf) : start());
    const themeObserver = new MutationObserver(() => {
      starColor = readVar("--star");
      accent = readVar("--accent");
      dark = document.documentElement.classList.contains("dark");
      if (reduceMotion) draw(0);
    });

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default CosmicBackground;

import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/* Magnetic wrapper: the child drifts toward the cursor, springs back on leave. */
export const Magnetic = ({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.95 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

const btnBase =
  "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-[box-shadow,border-color,background-color] duration-300";
const btnVariants = {
  solid:
    "btn-shine bg-foreground text-background shadow-[0_8px_24px_-12px_hsl(var(--foreground)/0.5)] hover:shadow-[0_14px_34px_-10px_hsl(var(--accent)/0.65)]",
  outline: "border border-border bg-card/70 backdrop-blur text-foreground hover:border-accent/60 hover:bg-card",
};

interface ActionLinkProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: keyof typeof btnVariants;
}

/* Primary call-to-action: magnetic, shiny, with a press-down tap state. */
export const ActionLink = ({ children, to, href, variant = "solid" }: ActionLinkProps) => {
  const cls = `${btnBase} ${btnVariants[variant]}`;
  const external = href && /^https?:/.test(href);
  return (
    <Magnetic>
      {to ? (
        <Link to={to} className={cls}>
          {children}
        </Link>
      ) : (
        <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </a>
      )}
    </Magnetic>
  );
};

/* Counts up from 0 to the numeric part of `value` ("4.1B", "1550", "232") once scrolled into view. */
export const CountUp = ({ value, className = "" }: { value: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  const [display, setDisplay] = useState(match && !reduce ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!match || !inView || reduce) return;
    const [, prefix, num, suffix] = match;
    const decimals = (num.split(".")[1] ?? "").length;
    const controls = animate(0, parseFloat(num), {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
};

/* Splits text into letters that rise in one after another. */
export const LetterReveal = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => (
  <span className={className} aria-hidden>
    {text.split("").map((ch, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ opacity: 0, y: "0.45em", rotate: 8, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
        transition={{ delay: delay + i * 0.045, type: "spring", stiffness: 180, damping: 16 }}
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

/* One delegated listener feeds cursor position to every `.spotlight` card. */
export const usePointerSpotlight = () => {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(".spotlight") as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
};

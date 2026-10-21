import { MouseEvent, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const iconTransition = { duration: 0.25, ease: [0.16, 1, 0.3, 1] } as const;

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  /* The new theme spreads out from the button as a growing circle (View Transitions API).
     Browsers without it, or users who prefer reduced motion, get an instant switch. */
  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark";
    if (!document.startViewTransition || reduce) {
      setTheme(next);
      return;
    }

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  };

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      whileTap={reduce ? undefined : { scale: 0.88 }}
      className="relative w-9 h-9 inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
    >
      {/* Both icons stay mounted and cross-rotate, so the swap starts the instant you click. */}
      <motion.span
        className="absolute inline-flex"
        initial={false}
        animate={isDark ? { rotate: 0, scale: 1, opacity: 1 } : { rotate: -90, scale: 0, opacity: 0 }}
        transition={iconTransition}
      >
        <Sun size={16} />
      </motion.span>
      <motion.span
        className="absolute inline-flex"
        initial={false}
        animate={isDark ? { rotate: 90, scale: 0, opacity: 0 } : { rotate: 0, scale: 1, opacity: 1 }}
        transition={iconTransition}
      >
        <Moon size={16} />
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;

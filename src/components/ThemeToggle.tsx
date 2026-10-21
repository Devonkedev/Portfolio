import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      whileHover={reduce ? undefined : { scale: 1.08 }}
      whileTap={reduce ? undefined : { scale: 0.88 }}
      className="relative w-9 h-9 inline-flex items-center justify-center overflow-hidden rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
    >
      {/* Sun sets / moon rises: the outgoing icon spins down and out as the new one spins up into place. */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          className="inline-flex"
          initial={reduce ? { opacity: 0 } : { y: 14, rotate: -90, scale: 0.4, opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { y: 0, rotate: 0, scale: 1, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: -14, rotate: 90, scale: 0.4, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 20 }}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;

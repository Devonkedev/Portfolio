import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export const navItems = [
  { label: "Research", path: "/research" },
  { label: "Projects", path: "/projects" },
  { label: "Leadership", path: "/leadership" },
  { label: "Awards", path: "/awards" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
        scrolled || isOpen ? "bg-background/85 backdrop-blur-md border-border" : "bg-transparent border-transparent"
      }`}
    >
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute bottom-[-1px] left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-accent via-[hsl(275_75%_60%)] to-highlight"
      />
      <nav className="container-page flex items-center justify-between h-16" aria-label="Main">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Devyansh Garg, home">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_2px_hsl(var(--accent)/0.6)] group-hover:scale-150 transition-transform duration-300" />
          <span className="font-serif text-2xl leading-none text-foreground">Devyansh Garg</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-3 py-1.5 text-sm rounded-full transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
          <div className="w-px h-5 bg-border mx-2" />
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            className="w-9 h-9 inline-flex items-center justify-center rounded-full text-foreground hover:bg-secondary"
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="container-page py-3 flex flex-col">
              {[{ label: "Home", path: "/" }, ...navItems].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `py-3 text-lg font-serif border-b border-border last:border-0 ${
                      isActive ? "text-accent" : "text-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

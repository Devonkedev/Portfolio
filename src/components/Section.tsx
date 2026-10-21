import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`py-16 sm:py-24 scroll-mt-16 ${className}`}>
    <div className="container-page">{children}</div>
  </section>
);

interface SectionHeadingProps {
  index?: string;
  title: string;
  kicker?: string;
  action?: ReactNode;
}

export const SectionHeading = ({ index, title, kicker, action }: SectionHeadingProps) => (
  <div className="flex flex-wrap items-end justify-between gap-4 mb-10 sm:mb-12">
    <div>
      {index && <p className="eyebrow mb-3">§ {index}</p>}
      <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight text-foreground">{title}</h2>
      {kicker && <p className="mt-3 text-muted-foreground max-w-2xl">{kicker}</p>}
    </div>
    {action}
  </div>
);

export const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Section;

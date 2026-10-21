import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const PageHero = ({ eyebrow, title, description }: PageHeroProps) => (
  <div className="relative graph-paper border-b border-border">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    <div className="container-page relative pt-32 pb-14 sm:pt-40 sm:pb-20">
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-4">
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight text-foreground max-w-4xl"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  </div>
);

export default PageHero;

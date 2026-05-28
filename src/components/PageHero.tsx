import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
}

const PageHero = ({ title, subtitle, description }: PageHeroProps) => (
  <div className="bg-gradient-to-br from-primary via-navy-light to-navy py-20 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-accent text-sm font-medium uppercase tracking-widest mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-primary-foreground/70 max-w-2xl text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  </div>
);

export default PageHero;

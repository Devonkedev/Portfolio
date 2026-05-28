import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, FlaskConical, Users, PenTool, ArrowRight, MapPin, Mail, GraduationCap, BookOpen, Cpu } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";
import devyanshPhoto from "@/assets/devyansh.png";

const achievements = [
  { icon: Trophy, title: "SAT 1550", desc: "June 2025: 790 Math, 760 Reading & Writing", accent: "text-gold", bg: "from-gold/15 to-gold/0" },
  { icon: Cpu, title: "AP Scores", desc: "Statistics (5), Computer Science A (5), Calculus BC (May 2026)", accent: "text-accent", bg: "from-accent/15 to-accent/0" },
  { icon: BookOpen, title: "Money Mechanics", desc: "Authored a financial literacy book (Jan 2023 – Feb 2024)", accent: "text-primary", bg: "from-primary/15 to-primary/0" },
  { icon: GraduationCap, title: "Programs", desc: "Plaksha Young Tech Scholars, Inspirit AI, Summer @ Brown and more", accent: "text-navy-muted", bg: "from-navy-muted/15 to-navy-muted/0" },
];

const navTiles = [
  { icon: FlaskConical, label: "Research & Programs", path: "/research", color: "from-accent/20 to-accent/5" },
  { icon: Cpu, label: "Projects", path: "/extracurricular", color: "from-gold/20 to-gold/5" },
  { icon: Users, label: "Leadership & Volunteering", path: "/leadership", color: "from-primary/20 to-primary/5" },
  { icon: PenTool, label: "Competitions", path: "/extracurricular", color: "from-navy-muted/20 to-navy-muted/5" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" as const },
});

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-navy-light to-navy min-h-[85vh] flex items-center px-6 md:px-12">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10 py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 order-2 md:order-1">
          <motion.p {...fadeUp(0.1)} className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Portfolio
          </motion.p>
          <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-6 leading-[1.1] tracking-tight">
            Devyansh<br />Garg
          </motion.h1>
          <motion.p {...fadeUp(0.3)} className="text-xl md:text-2xl text-primary-foreground/60 font-light mb-6 max-w-xl">
            Mathematics, computer science, and building things that ship
          </motion.p>
          <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-sm text-primary-foreground/50">
            <span className="flex items-center gap-1.5"><MapPin size={14} /> Gurugram, India</span>
            <span className="flex items-center gap-1.5"><Mail size={14} /> gargdevyansh10@gmail.com</span>
          </motion.div>
        </div>
        <motion.div
          {...fadeUp(0.3)}
          className="order-1 md:order-2 flex-shrink-0"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
            <img
              src={devyanshPhoto}
              alt="Devyansh Garg"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </div>

    {/* Intro */}
    <Section>
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-6 tracking-tight">About Me</h2>
        <p className="text-muted-foreground leading-relaxed text-lg font-light">
          I’m Devyansh Garg, a student at The Shri Ram School (Moulsari Avenue), Gurugram. I enjoy mathematics and computer science, and I like building projects that are useful in the real world. Recent work includes a published Android app (MediPing), a math YouTube channel, and academic writing spanning financial literacy and data-driven research.
        </p>
      </div>
    </Section>

    {/* Achievements */}
    <Section className="bg-gradient-to-br from-muted/40 via-background to-accent/5">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground tracking-tight">Achievements at a Glance</h2>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Highlights</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 group hover:border-accent/40 hover:shadow-xl transition-all duration-300"
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${a.bg} group-hover:scale-110 transition-transform duration-500`} />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.bg} flex items-center justify-center ring-1 ring-border`}>
                  <a.icon size={22} className={a.accent} strokeWidth={1.75} />
                </div>
                <span className="text-xs font-medium text-muted-foreground/60 tabular-nums">0{i + 1}</span>
              </div>
              <h3 className="font-medium text-foreground mb-2 leading-snug">{a.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* Navigation tiles */}
    <Section>
      <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-10 tracking-tight">Explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {navTiles.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={t.path}
              className={`card-glass p-6 flex flex-col gap-4 group bg-gradient-to-br ${t.color} hover:scale-[1.02] transition-transform duration-300 block`}
            >
              <t.icon size={24} className="text-foreground" />
              <span className="font-medium text-foreground">{t.label}</span>
              <ArrowRight size={16} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default Index;

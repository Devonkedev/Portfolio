import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section, { Reveal, SectionHeading } from "@/components/Section";
import PrimeSpiral from "@/components/PrimeSpiral";
import { ProjectCard, PublicationItem } from "@/components/Cards";
import { education, featuredAwards, profile, projects, publications, stats, tests } from "@/data/profile";
import devyanshPhoto from "@/assets/devyansh.png";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" as const },
});

const SeeAll = ({ to, label }: { to: string; label: string }) => (
  <Link to={to} className="group inline-flex items-center gap-2 text-sm font-medium text-foreground">
    {label}
    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
  </Link>
);

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <div className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 graph-paper [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <div className="container-page relative pt-28 pb-16 sm:pt-36 md:pb-24 grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-8 items-center">
        <div>
          <motion.p {...fadeUp(0)} className="eyebrow mb-6">
            IB Diploma candidate · Class of 2027
          </motion.p>
          <motion.h1
            {...fadeUp(0.05)}
            className="font-serif text-[3.75rem] leading-[0.95] sm:text-8xl lg:text-[7.5rem] tracking-tight text-foreground"
          >
            Devyansh
            <br />
            <span className="italic text-accent">Garg</span>
          </motion.h1>
          <motion.p {...fadeUp(0.12)} className="mt-8 text-xl sm:text-2xl text-muted-foreground leading-snug max-w-lg">
            {profile.tagline}
          </motion.p>
          <motion.div {...fadeUp(0.18)} className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Read my research <ArrowRight size={15} />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors"
            >
              <Mail size={15} /> Contact
            </a>
          </motion.div>
          <motion.p {...fadeUp(0.22)} className="mt-8 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin size={14} /> {profile.school}, {profile.location}
          </motion.p>
        </div>

        <motion.figure {...fadeUp(0.1)} className="relative mx-auto w-full max-w-[420px]">
          <div className="aspect-square rounded-3xl border border-border bg-card/70 backdrop-blur-sm p-4 shadow-[0_1px_0_hsl(var(--border)),0_30px_60px_-30px_hsl(var(--foreground)/0.25)]">
            <PrimeSpiral className="w-full h-full" />
          </div>
          <figcaption className="mt-3 flex justify-between gap-4 font-mono text-[11px] text-muted-foreground">
            <span>Ulam spiral, n ≤ 6,561</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" /> prime
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </div>

    {/* Stats strip */}
    <div className="border-b border-border">
      <div className="container-page">
      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {stats.map((s) => (
          <div key={s.label} className="bg-background py-8 sm:py-10 px-4 sm:px-6 first:pl-0 [&:nth-child(3)]:pl-0 lg:[&:nth-child(3)]:pl-6">
            <dd className="font-serif text-5xl sm:text-6xl leading-none text-foreground">{s.value}</dd>
            <dt className="mt-3 text-sm font-medium text-foreground">{s.label}</dt>
            <dd className="text-xs text-muted-foreground mt-0.5">{s.note}</dd>
          </div>
        ))}
      </dl>
      </div>
    </div>

    {/* About */}
    <Section id="about">
      <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
        <Reveal>
          <div className="w-40 md:w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-card">
            <img src={devyanshPhoto} alt="Portrait of Devyansh Garg" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </Reveal>
        <div>
          <p className="eyebrow mb-3">§ 1</p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight text-foreground mb-8">About</h2>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85 max-w-2xl">
            {profile.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
            {education.map((e) => (
              <div key={e.stage} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-medium text-foreground">{e.stage}</h3>
                  <span className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">{e.years}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.subjects}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    {/* Research */}
    <Section className="border-t border-border">
      <SectionHeading
        index="2"
        title="Selected research"
        kicker="Number theory checked against billions of data points, plus one epidemiology study."
        action={<SeeAll to="/research" label="All publications & programs" />}
      />
      <div>
        {publications.slice(0, 3).map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <PublicationItem pub={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Projects */}
    <Section className="border-t border-border bg-secondary/40">
      <SectionHeading
        index="3"
        title="Things I've built"
        action={<SeeAll to="/projects" label="All projects" />}
      />
      <div className="grid lg:grid-cols-5 gap-5">
        <Reveal className="lg:col-span-3">
          <ProjectCard project={projects[0]} featured />
        </Reveal>
        <Reveal className="lg:col-span-2" delay={0.08}>
          <ProjectCard project={projects[1]} />
        </Reveal>
      </div>
    </Section>

    {/* Honors */}
    <Section className="border-t border-border">
      <SectionHeading index="4" title="Honors & scores" action={<SeeAll to="/awards" label="Full list" />} />
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
        <ol className="divide-y divide-border border-y border-border">
          {featuredAwards.map((a, i) => (
            <motion.li
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04 }}
              className="py-5 grid grid-cols-[2rem_1fr] gap-3"
            >
              <span className="font-mono text-xs text-muted-foreground pt-1">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-medium text-foreground">{a.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{a.detail}</p>
              </div>
            </motion.li>
          ))}
        </ol>
        <div className="grid grid-cols-2 gap-3 content-start">
          {tests.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04} className={i === 0 ? "col-span-2" : ""}>
              <div className="h-full rounded-xl border border-border bg-card p-5">
                <p className="eyebrow">{t.name}</p>
                <p className={`font-serif leading-none mt-3 text-foreground ${i === 0 ? "text-6xl" : "text-5xl"}`}>{t.score}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {t.detail} · {t.date}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  </PageLayout>
);

export default Index;

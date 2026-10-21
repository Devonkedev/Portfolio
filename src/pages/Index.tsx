import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section, { Reveal, SectionHeading } from "@/components/Section";
import PrimeSpiral from "@/components/PrimeSpiral";
import { ProjectCard, PublicationItem } from "@/components/Cards";
import { ActionLink, CountUp, LetterReveal } from "@/components/Motion";
import { education, featuredAwards, profile, projects, publications, stats, tests, threads, venues } from "@/data/profile";
import devyanshPhoto from "@/assets/devyansh.png";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
});

const SeeAll = ({ to, label }: { to: string; label: string }) => (
  <Link to={to} className="group inline-flex items-center gap-2 text-sm font-medium text-foreground">
    <span className="link-grow">{label}</span>
    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
  </Link>
);

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <div className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 graph-paper [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <div className="container-page relative pt-28 pb-16 sm:pt-36 md:pb-24 grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-8 items-center">
        <div>
          <motion.p {...fadeUp(0)} className="eyebrow mb-6 flex items-center gap-2">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-accent" />
            </span>
            Grade 12 · IB Diploma · {profile.location}
          </motion.p>
          <h1 className="font-serif text-[3.75rem] leading-[0.95] sm:text-8xl lg:text-[7.5rem] tracking-tight text-foreground">
            <span className="sr-only">{profile.name}</span>
            <LetterReveal text="Devyansh" delay={0.1} />
            <br />
            <LetterReveal text="Garg" delay={0.45} className="italic text-accent pr-2" />
          </h1>
          <motion.p {...fadeUp(0.7)} className="mt-8 font-serif text-2xl sm:text-[1.9rem] text-foreground leading-snug max-w-2xl text-balance">
            {profile.tagline}
          </motion.p>
          <motion.p {...fadeUp(0.8)} className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
            {profile.intro}
          </motion.p>
          <motion.div {...fadeUp(0.9)} className="mt-9 flex flex-wrap items-center gap-3">
            <ActionLink to="/research">
              Read my research <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </ActionLink>
            <ActionLink href={`mailto:${profile.email}`} variant="outline">
              <Mail size={15} className="group-hover:-rotate-12 transition-transform duration-300" /> Say hello
            </ActionLink>
          </motion.div>
          <motion.div {...fadeUp(1)} className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="eyebrow">Published in</span>
            {venues.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.05 + i * 0.08 }}
                className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border bg-card/60 backdrop-blur text-foreground/80"
              >
                {v}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle,hsl(var(--accent)/0.25),transparent_70%)] blur-2xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square rounded-3xl border border-border bg-card/70 backdrop-blur-md p-4 shadow-[0_1px_0_hsl(var(--border)),0_30px_60px_-30px_hsl(var(--foreground)/0.35)]"
          >
            <PrimeSpiral className="w-full h-full" />
          </motion.div>
          <figcaption className="relative mt-3 flex justify-between gap-4 font-mono text-[11px] text-muted-foreground">
            <span>Ulam spiral, n ≤ 6,561</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" /> prime
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </div>

    {/* Stats strip */}
    <div className="border-b border-border bg-background/40">
      <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="flex flex-col py-8 sm:py-10 px-4 sm:px-6 border-border [&:nth-child(even)]:border-l [&:nth-child(n+3)]:border-t lg:border-l lg:first:border-l-0 lg:[&:nth-child(n+3)]:border-t-0 first:pl-0 [&:nth-child(3)]:pl-0 lg:[&:nth-child(3)]:pl-6"
          >
            <dt className="order-2 mt-3 text-sm font-medium text-foreground">{s.label}</dt>
            <dd className="order-1 font-serif text-5xl sm:text-6xl leading-none text-foreground">
              <CountUp value={s.value} />
            </dd>
            <dd className="order-3 text-xs text-muted-foreground mt-0.5">{s.note}</dd>
          </Reveal>
        ))}
      </dl>
    </div>

    {/* About */}
    <Section id="about">
      <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
        <Reveal>
          <div className="md:sticky md:top-24">
            <motion.div
              whileHover={{ rotate: -2, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="relative w-44 md:w-full"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent via-[hsl(275_70%_60%)] to-highlight opacity-50 blur-md" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-card">
                <img src={devyanshPhoto} alt="Portrait of Devyansh Garg" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
            <p className="mt-4 font-mono text-[11px] text-muted-foreground">{profile.school}</p>
          </div>
        </Reveal>

        <div>
          <p className="eyebrow mb-3">§ 1 · About</p>
          <Reveal>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground mb-8 max-w-2xl">
              Where <span className="italic text-accent">theory</span> meets the{" "}
              <span className="italic text-highlight">real world</span>.
            </h2>
          </Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85 max-w-2xl">
            {profile.about.map((p, i) => (
              <Reveal key={p.slice(0, 20)} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {threads.map((t, i) => (
              <Reveal key={t.label} delay={i * 0.08}>
                <Link
                  to={t.path}
                  className="spotlight group h-full flex flex-col rounded-xl border border-border bg-card/80 backdrop-blur-md p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="eyebrow !text-accent">{t.label}</span>
                    <ArrowUpRight
                      size={15}
                      className="text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <h3 className="mt-3 font-serif text-2xl leading-tight text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-3 grid sm:grid-cols-2 gap-3">
            {education.map((e) => (
              <Reveal key={e.stage}>
                <div className="spotlight h-full rounded-xl border border-border bg-card/80 backdrop-blur-md p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-medium text-foreground">{e.stage}</h3>
                    <span className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">{e.years}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.subjects}</p>
                </div>
              </Reveal>
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
    <Section className="border-t border-border bg-secondary/30">
      <SectionHeading index="3" title="Things I've built" action={<SeeAll to="/projects" label="All projects" />} />
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
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className="group py-5 grid grid-cols-[2rem_1fr] gap-3"
            >
              <span className="font-mono text-xs text-muted-foreground pt-1 transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="transition-transform duration-300 group-hover:translate-x-1">
                <p className="font-medium text-foreground">{a.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{a.detail}</p>
              </div>
            </motion.li>
          ))}
        </ol>
        <div className="grid grid-cols-2 gap-3 content-start">
          {tests.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05} className={i === 0 ? "col-span-2" : ""}>
              <div className="spotlight h-full rounded-xl border border-border bg-card/80 backdrop-blur-md p-5">
                <p className="eyebrow">{t.name}</p>
                <p className={`font-serif leading-none mt-3 text-foreground ${i === 0 ? "text-6xl" : "text-5xl"}`}>
                  <CountUp value={t.score} />
                </p>
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

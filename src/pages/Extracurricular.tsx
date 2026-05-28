import { Code, Trophy, Languages, Youtube, Smartphone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const competitions = [
  { event: "AMC 10", date: "—", result: "Distinction", detail: "Mathematics competition distinction" },
  { event: "CEMC (CIMC, Cayley)", date: "—", result: "Distinction", detail: "Distinction across CEMC contests" },
  { event: "IOQM", date: "—", result: "Top 10%", detail: "Qualified in the top decile" },
  { event: "Infinity Math: Clash of Mathematicians", date: "—", result: "Gold", detail: "Won gold in the individual event" },
  { event: "Infinity Math: Pass the Baton", date: "—", result: "Runner-up", detail: "Team event runner-up" },
  { event: "Infinity Math: Math Challengers (Zonal)", date: "—", result: "Runner-up", detail: "Team event runner-up (zonal)" },
  { event: "Interschool Tech Competitions", date: "—", result: "Winner / Participant", detail: "Competitive coding and hackathons (ShriTeq, ShisTech, TechVViz, Tech Syndicate, Celestra)" },
];

const technical = ["Python", "Java", "C++", "Android Development", "Web Development"];
const spokenLanguages = [{ lang: "English", level: "Fluent" }, { lang: "Hindi", level: "Fluent" }, { lang: "French", level: "Academic" }];

const projects = [
  {
    icon: Smartphone,
    title: "MediPing",
    desc: "Medical reminder mobile app published on Google Play.",
    link: "https://play.google.com/store/search?q=MediPing&c=apps&hl=en_IN",
  },
  {
    icon: Youtube,
    title: "Math Magic and Mindsets",
    desc: "YouTube channel dedicated to sparking interest in mathematics.",
    link: "https://www.youtube.com/channel/UC7Dh2LP24J_oDnBc6l5OM2g",
  },
];

const Extracurricular = () => (
  <PageLayout>
    <PageHero title="Projects, Competitions & Skills" subtitle="Beyond Academics" description="Selected projects, competition highlights, and technical skills." />

    <Section>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-glass p-6 group hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <p.icon size={18} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">{p.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-4 text-sm text-accent font-medium group-hover:underline">Open →</div>
          </motion.a>
        ))}
      </div>
    </Section>

    <Section className="bg-muted/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Code size={18} className="text-accent" />
            <h3 className="font-semibold text-foreground">Technical Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {technical.map(s => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Languages size={18} className="text-accent" />
            <h3 className="font-semibold text-foreground">Languages</h3>
          </div>
          <div className="space-y-2">
            {spokenLanguages.map(l => (
              <div key={l.lang} className="flex justify-between text-sm">
                <span className="text-foreground">{l.lang}</span>
                <span className="text-muted-foreground">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">Competitions</h2>
      <div className="space-y-4">
        {competitions.map((c, i) => (
          <motion.div
            key={`${c.event}-${i}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="card-glass p-5 flex items-center gap-5"
          >
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
              <Trophy size={18} className="text-gold" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <h3 className="font-semibold text-foreground text-sm">{c.event}</h3>
                <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{c.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">{c.detail}</p>
            </div>
            <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">{c.result}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default Extracurricular;

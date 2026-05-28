import { Users, GraduationCap, HandHeart } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const roles = [
  { icon: GraduationCap, title: "Founder & Director — Leonhard Euler Chapter", org: "We Love Stem", date: "Ongoing", desc: "Teach competitive math weekly to a batch of 20 students at a global level; also support logistics and administration." },
  { icon: Users, title: "Secretary / Head of Society", org: "Megabyte Society (School)", date: "Ongoing", desc: "Conduct weekly tech sessions and help organize school events (ShriTeq, Crypt Hunt, AI Week)." },
  { icon: HandHeart, title: "Teaching Volunteer", org: "Sapno Ke Pankh (NGO)", date: "Ongoing", desc: "Teach students and support fundraising efforts for a new library." },
];

const initiatives = [
  { title: "STEAM IT Foundation Website", desc: "Built the organization website.", metric: "Web", metricLabel: "Build", link: "https://www.steamit.org/" },
  { title: "Teaching & Mentorship", desc: "Weekly competitive math teaching with structured problem sets and feedback loops.", metric: "20", metricLabel: "Students" },
  { title: "School Tech Events", desc: "Key role in organizing inter-school tech events and internal workshops.", metric: "3+", metricLabel: "Events" },
];

const stats = [
  { value: "20", label: "Students Taught" },
  { value: "Weekly", label: "Sessions Run" },
  { value: "4+", label: "School Events" },
  { value: "1", label: "Org Website Built" },
];

const Leadership = () => (
  <PageLayout>
    <PageHero title="Leadership & Volunteering" subtitle="Impact" description="Teaching, organizing, and building for communities." />

    {/* Stats */}
    <Section className="bg-gradient-to-r from-primary to-navy-light">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">{s.value}</div>
            <div className="text-sm text-primary-foreground/60">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">Leadership Roles</h2>
      <div className="space-y-6">
        {roles.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-glass p-6 flex gap-5">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <r.icon size={22} className="text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{r.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{r.org} • {r.date}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section className="bg-muted/50">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">Initiatives & Contributions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {initiatives.map((init, i) => (
          <motion.div key={init.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-glass p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">{init.title}</h3>
              <div className="text-right">
                <div className="text-xl font-bold text-accent">{init.metric}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{init.metricLabel}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{init.desc}</p>
            {init.link && (
              <a href={init.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent font-medium hover:underline">Open →</a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default Leadership;

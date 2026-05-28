import { BookOpen, GraduationCap, Microscope, FileText, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const research = [
  {
    icon: BookOpen,
    title: "Money Mechanics",
    date: "Jan 2023 – Feb 2024",
    desc: "Authored a book on financial literacy, available on Amazon and Flipkart.",
    linkLabel: "View on Amazon",
    link: "https://www.amazon.in/Money-Mechanics-Youthful-Financial-Freedom/dp/9332706298",
  },
  {
    icon: FileText,
    title: "Predicting COVID-19 Hotspots Using Google Trends: A Correlation Analysis of Search Terms and Case Data in India",
    date: "Apr 2025 – Jun 2025",
    desc: "Research paper published in IRJET.",
    linkLabel: "Read PDF",
    link: "https://www.irjet.net/archives/V12/i6/IRJET-V12I6182.pdf",
  },
  {
    icon: Microscope,
    title: "Computational Analysis of Prime Gaps: Testing Cramér’s and Hardy–Littlewood’s Conjectures on Finite Ranges",
    date: "Sept 2025 – Mar 2026",
    desc: "Research paper submitted to NHSJS.",
  },
];

const programs = [
  { title: "Young Technology Scholars (Plaksha University)", date: "June 2023", desc: "Learned game development, Python, Arduino, microcontrollers, and circuits; built 4 games (Tic Tac Toe, Ping Pong, Maze, Game of Nim).", tags: ["Python", "Arduino", "Game Dev"] },
  { title: "Lodha Tech4Change Challenge (Beginner Bootcamp)", date: "Nov 2023 – Jan 2024", desc: "Learned AI fundamentals and produced a team synopsis on forest-fire prediction.", tags: ["AI", "Teamwork"] },
  { title: "Lodha Tech4Change Challenge (Advance Bootcamp)", date: "Feb 2024 – May 2024", desc: "Built an AI statistical model (Intel AI for Youth curriculum) to predict forest fires.", tags: ["AI", "Modeling"] },
  { title: "AI Scholars Program (Inspirit AI)", date: "July 2024", desc: "Hands-on AI program with guided projects.", tags: ["AI"] },
  { title: "Transition to Proofs (Euler’s Circle)", date: "Sept 2024 – Dec 2024", desc: "Deepened proof-writing and mathematical reasoning.", tags: ["Math"] },
  { title: "Number Theory: An Introduction to Higher Mathematics (Summer @ Brown)", date: "June 2025", desc: "Pre-college course focused on higher mathematics and number theory.", tags: ["Number Theory"] },
];

const Research = () => (
  <PageLayout>
    <PageHero title="Research & Programs" subtitle="Academics" description="Academic writing, research projects, and enrichment programs." />

    <Section>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">Academic Research & Writing</h2>
      <div className="space-y-6">
        {research.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-glass p-6 flex gap-5">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <r.icon size={22} className="text-accent" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="font-semibold text-foreground">{r.title}</h3>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{r.date}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              {r.link && (
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:underline mt-3"
                >
                  {r.linkLabel ?? "Open"} <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section className="bg-muted/50">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">Academic Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-glass p-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} className="text-accent" />
              <span className="text-xs text-muted-foreground">{p.date}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default Research;

import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section, { Reveal, SectionHeading } from "@/components/Section";
import { PublicationItem } from "@/components/Cards";
import { programs, publications, skills } from "@/data/profile";

const Research = () => (
  <PageLayout title="Research & Programs">
    <PageHero
      eyebrow="Research · Writing · Programs"
      title="Research & Programs"
      description="Three published papers and a book: two papers test conjectures about prime numbers at scale, one uses search data to forecast COVID-19 cases, and the book teaches financial literacy to young readers."
    />

    <Section>
      <SectionHeading index="1" title="Publications" />
      <div>
        {publications.map((p, i) => (
          <Reveal key={p.title}>
            <PublicationItem pub={p} index={i} detailed />
          </Reveal>
        ))}
      </div>
    </Section>

    <Section className="border-t border-border bg-secondary/40">
      <SectionHeading index="2" title="Academic programs" kicker="Most recent first." />
      <ol className="space-y-10">
        {programs.map((p) => (
          <li key={p.title}>
            <Reveal>
              <p className="font-mono text-xs text-muted-foreground">{p.date}</p>
              <h3 className="mt-1 text-xl font-medium text-foreground">{p.title}</h3>
              <p className="text-sm text-accent">{p.org}</p>
              <p className="mt-2 text-muted-foreground leading-relaxed max-w-3xl">{p.desc}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>

    <Section className="border-t border-border">
      <SectionHeading index="3" title="Toolkit" />
      <div className="grid sm:grid-cols-3 gap-5">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="spotlight rounded-xl border border-border bg-card/80 backdrop-blur-md p-6">
            <p className="eyebrow mb-4">{group}</p>
            <ul className="space-y-2">
              {items.map((s) => (
                <li key={s} className="text-foreground">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default Research;

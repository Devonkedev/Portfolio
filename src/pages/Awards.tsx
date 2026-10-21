import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section, { Reveal, SectionHeading } from "@/components/Section";
import { featuredAwards, mathHonors, schoolHonors, techPodiums, tests } from "@/data/profile";

const placeLabel = { 1: "1st", 2: "2nd", 3: "3rd" } as const;
const placeStyle = {
  1: "bg-highlight/15 text-highlight",
  2: "bg-accent/10 text-accent",
  3: "bg-secondary text-muted-foreground",
} as const;

const Awards = () => (
  <PageLayout title="Awards & Scores">
    <PageHero
      eyebrow="Competitions · Tests · School honors"
      title="Awards & Scores"
      description="Math olympiads, coding contests, standardized tests, and school honors, with the most significant listed first."
    />

    <Section>
      <SectionHeading index="1" title="Top honors" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredAwards.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.04}>
            <div className="spotlight h-full rounded-xl border border-border bg-card/80 backdrop-blur-md p-6">
              <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-medium leading-snug text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section className="border-t border-border bg-secondary/40">
      <SectionHeading index="2" title="Standardized tests" />
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {tests.map((t) => (
          <div key={t.name} className="spotlight rounded-xl border border-border bg-card/80 backdrop-blur-md p-5">
            <p className="eyebrow">{t.name}</p>
            <p className="font-serif text-5xl leading-none mt-3 text-foreground">{t.score}</p>
            <p className="mt-2 text-xs text-muted-foreground">{t.detail}</p>
            <p className="text-xs text-muted-foreground">{t.date}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section className="border-t border-border">
      <div className="grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHeading index="3" title="Mathematics" />
          <ul className="divide-y divide-border border-y border-border">
            {mathHonors.map((m) => (
              <li key={m.event} className="group py-4 flex flex-wrap justify-between gap-x-6 gap-y-1 transition-[padding] duration-300 hover:pl-2">
                <span className="text-foreground">{m.event}</span>
                <span className="text-sm font-medium text-accent">{m.result}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading
            index="4"
            title="Tech competitions"
            kicker="I led teams of 1–5 at inter-school events against 30+ schools, and finished on the podium 10 times."
          />
          <ul className="divide-y divide-border border-y border-border">
            {techPodiums.map((t, i) => (
              <li key={`${t.event}-${i}`} className="group py-4 flex items-center gap-4 transition-[padding] duration-300 hover:pl-2">
                <span className={`font-mono text-xs w-11 text-center py-1 rounded-md transition-transform duration-300 group-hover:scale-110 ${placeStyle[t.place as 1 | 2 | 3]}`}>
                  {placeLabel[t.place as 1 | 2 | 3]}
                </span>
                <span className="text-foreground flex-1">{t.event}</span>
                {t.times && <span className="font-mono text-xs text-muted-foreground">×{t.times}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    <Section className="border-t border-border">
      <SectionHeading index="5" title="School honors" kicker="The Shri Ram School, Moulsari Avenue." />
      <div className="grid md:grid-cols-3 gap-4">
        {schoolHonors.map((y) => (
          <div key={y.year} className="spotlight rounded-xl border border-border bg-card/80 backdrop-blur-md p-6">
            <p className="font-mono text-xs text-muted-foreground">{y.year}</p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-foreground">Subject Topper</dt>
                <dd className="text-muted-foreground mt-0.5">{y.topper.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Subject Excellence</dt>
                <dd className="text-muted-foreground mt-0.5">{y.excellence.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Awards</dt>
                {y.awards.map((a) => (
                  <dd key={a} className="text-muted-foreground mt-0.5">{a}</dd>
                ))}
              </div>
            </dl>
          </div>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default Awards;

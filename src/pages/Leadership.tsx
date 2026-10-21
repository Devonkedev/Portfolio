import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section, { Reveal } from "@/components/Section";
import { leadership } from "@/data/profile";

const Leadership = () => (
  <PageLayout title="Leadership & Service">
    <PageHero
      eyebrow="Teaching · Organizing · Service"
      title="Leadership & Service"
      description="I teach olympiad math, run my school's tech society, and fundraise for STEM education."
    />
    <Section>
      <div className="space-y-5">
        {leadership.map((r, i) => (
          <Reveal key={r.org} delay={i * 0.05}>
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-8 grid md:grid-cols-[1fr_200px] gap-8">
              <div>
                <p className="font-mono text-xs text-muted-foreground">{r.period}</p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl leading-tight text-foreground">{r.org}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{r.orgNote}</p>
                <p className="mt-4 font-medium text-accent">{r.role}</p>
                <ul className="mt-4 space-y-2">
                  {r.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-foreground/85 leading-relaxed">
                      <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:border-l border-t md:border-t-0 border-border pt-6 md:pt-0 md:pl-8 flex md:flex-col md:justify-center gap-3 items-baseline md:items-start">
                <p className="font-serif text-5xl sm:text-6xl leading-none text-foreground">{r.metric.value}</p>
                <p className="text-sm text-muted-foreground">{r.metric.label}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default Leadership;

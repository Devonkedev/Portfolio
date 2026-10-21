import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section, { Reveal } from "@/components/Section";
import { ProjectCard } from "@/components/Cards";
import { projects } from "@/data/profile";

const Projects = () => (
  <PageLayout title="Projects">
    <PageHero
      eyebrow="Software · Performance"
      title="Projects"
      description="A health app used in rural clinics, and a math-magic act where every trick comes with a proof."
    />
    <Section>
      <div className="grid gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <ProjectCard project={p} featured />
          </Reveal>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default Projects;

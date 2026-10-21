import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section, { Reveal } from "@/components/Section";
import { ProjectCard } from "@/components/Cards";
import { projects } from "@/data/profile";

const Projects = () => (
  <PageLayout title="Projects">
    <PageHero
      eyebrow="Software · Performance · Web"
      title="Projects"
      description="A health app used in rural clinics, a math-magic act where every trick comes with a proof, and a nonprofit's first website."
    />
    <Section>
      <div className="grid lg:grid-cols-2 gap-5">
        <Reveal className="lg:col-span-2">
          <ProjectCard project={projects[0]} featured />
        </Reveal>
        {projects.slice(1).map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  </PageLayout>
);

export default Projects;

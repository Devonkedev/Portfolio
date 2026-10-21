import { ArrowUpRight } from "lucide-react";
import type { Project, Publication } from "@/data/profile";

export const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group/link inline-flex items-center gap-1 text-sm font-medium text-accent"
  >
    <span className="link-grow">{children}</span>
    <ArrowUpRight
      size={14}
      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:rotate-12"
    />
  </a>
);

export const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">{children}</span>
);

interface PublicationItemProps {
  pub: Publication;
  index: number;
  detailed?: boolean;
}

export const PublicationItem = ({ pub, index, detailed = false }: PublicationItemProps) => (
  <article className="group relative grid sm:grid-cols-[4.5rem_1fr] gap-x-6 gap-y-3 py-8 border-t border-border">
    <span
      aria-hidden
      className="absolute left-0 top-[-1px] h-px w-0 bg-accent transition-[width] duration-700 ease-out group-hover:w-full"
    />
    <div className="font-mono text-sm text-muted-foreground pt-1 transition-colors group-hover:text-accent">[{String(index + 1).padStart(2, "0")}]</div>
    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
        <span
          className={`font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-md ${
            pub.kind === "Book" ? "bg-highlight/15 text-highlight" : "bg-accent/10 text-accent"
          }`}
        >
          {pub.kind === "Book" ? "Book" : `Published · ${pub.venueShort}`}
        </span>
        <span className="text-xs text-muted-foreground">{pub.date}</span>
      </div>
      <h3 className="font-serif text-2xl sm:text-[1.75rem] leading-snug text-foreground transition-transform duration-500 group-hover:translate-x-1">{pub.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {pub.venue} · {pub.role}
      </p>
      <p className="mt-4 text-foreground/85 leading-relaxed max-w-3xl">{pub.summary}</p>
      {detailed && (
        <ul className="mt-4 space-y-1.5 max-w-3xl">
          {pub.findings.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-accent mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
        {pub.link && <ExternalLink href={pub.link}>{pub.linkLabel ?? "Open"}</ExternalLink>}
        <div className="flex flex-wrap gap-1.5">
          {pub.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </div>
  </article>
);

export const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean }) => (
  <article
    className={`spotlight h-full rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6 sm:p-8 flex flex-col ${
      featured ? "lg:p-10" : ""
    }`}
  >
    <p className="eyebrow mb-3">{project.role}</p>
    <h3 className={`font-serif leading-tight text-foreground ${featured ? "text-4xl sm:text-5xl" : "text-3xl"}`}>
      {project.name}
    </h3>
    <p className={`mt-4 text-muted-foreground leading-relaxed ${featured ? "text-lg max-w-2xl" : ""}`}>{project.summary}</p>

    <dl
      className={`mt-8 grid gap-px bg-border rounded-xl overflow-hidden border border-border ${
        project.impact.length >= 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2"
      }`}
    >
      {project.impact.map((m) => (
        <div key={m.label} className="bg-card p-4 transition-colors hover:bg-secondary">
          <dt className="sr-only">{m.label}</dt>
          <dd className={`font-serif leading-none text-foreground ${featured ? "text-4xl" : "text-3xl"}`}>{m.value}</dd>
          <dd className="mt-1.5 text-xs text-muted-foreground">{m.label}</dd>
        </div>
      ))}
    </dl>

    <div className="mt-auto pt-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {project.links.map((l) => (
          <ExternalLink key={l.href} href={l.href}>
            {l.label}
          </ExternalLink>
        ))}
      </div>
      {project.stack && (
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      )}
    </div>
  </article>
);

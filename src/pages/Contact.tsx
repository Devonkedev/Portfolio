import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { toast } from "sonner";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Section, { Reveal, SectionHeading } from "@/components/Section";
import { profile } from "@/data/profile";

const topics = ["Research", "Projects", "Teaching", "Something else"];

const channels = [
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Github, label: "GitHub", value: "Devonkedev", href: profile.github, external: true },
  { icon: Youtube, label: "YouTube", value: "Math Magic Mindsets", href: profile.youtube, external: true },
  { icon: MapPin, label: "Based in", value: profile.location },
];

const fieldCls =
  "w-full rounded-lg border border-border bg-background/70 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-colors";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState(topics[0]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email address copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy. The address is " + profile.email);
    }
  };

  /* The site is static, so the form drafts an email in the visitor's own mail app instead of posting anywhere. */
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `[${topic}] Hello from ${name || "your portfolio"}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <PageLayout title="Contact">
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        description="Questions about the research, a project you'd like to build together, or an olympiad student who needs a tutor: I read every message and usually reply within a few days."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading index="1" title="Reach me directly" />
            <Reveal>
              <div className="spotlight rounded-xl border border-border bg-card/80 backdrop-blur-md p-6">
                <p className="eyebrow mb-3">Email, the fastest way</p>
                <div className="flex flex-wrap items-center gap-3">
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-lg text-foreground break-all hover:text-accent transition-colors">
                    <Mail size={18} className="shrink-0" /> {profile.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-accent/60 transition-colors"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                </div>
              </div>
            </Reveal>

            <ul className="mt-4 grid sm:grid-cols-2 gap-4">
              {channels.map(({ icon: Icon, label, value, href, external }, i) => {
                const body = (
                  <>
                    <p className="eyebrow mb-2">{label}</p>
                    <p className="inline-flex items-center gap-2 text-foreground">
                      <Icon size={15} className="shrink-0 text-accent" /> {value}
                      {external && <ArrowUpRight size={13} className="text-muted-foreground" />}
                    </p>
                  </>
                );
                const cls = "spotlight block h-full rounded-xl border border-border bg-card/80 backdrop-blur-md p-5";
                return (
                  <li key={label}>
                    <Reveal delay={i * 0.04} className="h-full">
                      {href ? (
                        <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                          {body}
                        </a>
                      ) : (
                        <div className={cls}>{body}</div>
                      )}
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <SectionHeading index="2" title="Send a message" />
            <Reveal>
              <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card/80 backdrop-blur-md p-6 sm:p-8 space-y-5">
                <fieldset>
                  <legend className="eyebrow mb-3">What's it about?</legend>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        aria-pressed={topic === t}
                        className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
                          topic === t
                            ? "border-accent bg-accent/10 text-foreground"
                            : "border-border text-muted-foreground hover:text-foreground hover:border-accent/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="eyebrow mb-2 block">Your name</span>
                  <input name="name" autoComplete="name" required className={fieldCls} placeholder="Ada Lovelace" />
                </label>

                <label className="block">
                  <span className="eyebrow mb-2 block">Message</span>
                  <textarea name="message" required rows={6} className={`${fieldCls} resize-y`} placeholder="Hi Devyansh, …" />
                </label>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="group btn-shine inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-foreground text-background shadow-[0_8px_24px_-12px_hsl(var(--foreground)/0.5)] hover:shadow-[0_14px_34px_-10px_hsl(var(--accent)/0.65)] transition-shadow duration-300"
                  >
                    <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Open in my email app
                  </button>
                  <p className="text-xs text-muted-foreground">Opens a ready-to-send draft. Nothing is stored on this site.</p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Contact;

import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Mail, Phone, Youtube } from "lucide-react";
import { profile } from "@/data/profile";
import { navItems } from "./Navbar";
import { ActionLink } from "./Motion";

const Footer = () => (
  <footer className="border-t border-border mt-24 bg-background/60 backdrop-blur-sm">
    <div className="container-page py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <p className="font-serif text-3xl sm:text-4xl leading-tight text-foreground max-w-md">
          Want to talk about primes, proofs, or products?
        </p>
        <div className="mt-6">
          <ActionLink to="/contact">
            <Mail size={15} className="group-hover:-rotate-12 transition-transform" /> Get in touch
          </ActionLink>
        </div>
      </div>

      <div>
        <p className="eyebrow mb-4">Pages</p>
        <ul className="space-y-2.5 text-sm">
          <li><Link to="/" className="link-grow text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
          {navItems.map((n) => (
            <li key={n.path}>
              <Link to={n.path} className="link-grow text-muted-foreground hover:text-foreground transition-colors">{n.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="eyebrow mb-4">Contact</p>
        <ul className="space-y-2.5 text-sm">
          <li>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors break-all">
              <Mail size={14} className="shrink-0" /> {profile.email}
            </a>
          </li>
          <li>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={14} /> {profile.phone}
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Github size={14} /> GitHub <ArrowUpRight size={12} />
            </a>
          </li>
          <li>
            <a href={profile.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Youtube size={14} /> Math Magic Mindsets <ArrowUpRight size={12} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container-page py-6 border-t border-border flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>{profile.location}</span>
    </div>
  </footer>
);

export default Footer;

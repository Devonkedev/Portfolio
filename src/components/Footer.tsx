import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-display text-xl font-semibold mb-3">Devyansh Garg</h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Student focused on mathematics, computer science, and building projects with real-world impact.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/60">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
          <a href="/research" className="hover:text-primary-foreground transition-colors">Research & Programs</a>
          <a href="/leadership" className="hover:text-primary-foreground transition-colors">Leadership</a>
          <a href="/extracurricular" className="hover:text-primary-foreground transition-colors">Projects & Competitions</a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/60">Contact</h4>
        <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-2"><Mail size={14} /> gargdevyansh10@gmail.com</span>
          <span className="flex items-center gap-2"><Phone size={14} /> +91 81787 02563</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> Gurugram, India</span>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
      © {new Date().getFullYear()} Devyansh Garg. All rights reserved.
    </div>
  </footer>
);

export default Footer;

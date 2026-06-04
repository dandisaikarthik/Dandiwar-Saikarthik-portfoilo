import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold font-display tracking-tight text-foreground">
            Dandiwar Saikarthik<span className="text-primary">.</span>
          </span>
          <p className="text-sm text-muted-foreground mt-2">
            Software Engineer & AI/ML Specialist
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Dandikarthik"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="GitHub"
            data-testid="link-footer-github"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/dandiwar-saikarthik"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="LinkedIn"
            data-testid="link-footer-linkedin"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:dandisaikarthik@gmail.com"
            className="p-2 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="Email"
            data-testid="link-footer-email"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dandiwar Saikarthik.</p>
          <p className="text-xs text-muted-foreground/60 mt-1 flex items-center justify-center md:justify-end">
            Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

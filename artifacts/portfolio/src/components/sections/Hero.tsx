import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/use-typewriter";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export function Hero() {
  const typedText = useTypewriter(
    ["Software Engineer", "UI/UX Designer", "AI/ML Graduate"],
    80, 40, 2000
  );

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-primary/30 blur-[140px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-start text-left">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium text-primary mb-6 tracking-wide"
            data-testid="text-availability"
          >
            Available for Opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-foreground leading-[1.1] mb-6"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Dandiwar Saikarthik
            </span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl text-muted-foreground">
              I am a{" "}
              <span className="text-foreground min-w-[300px] inline-block">
                {typedText}
                <span className="animate-pulse">_</span>
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            I'm a B.Tech graduate in AI &amp; Machine Learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              className="h-14 px-8 text-base transition-all"
              onClick={() => scrollTo("#contact")}
              data-testid="btn-hero-contact"
            >
              Contact Me <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base bg-secondary/20 hover:bg-secondary/50 border-border"
              asChild
            >
              <a href="#" data-testid="btn-hero-resume">
                Download Resume <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}

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
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* Left — text */}
          <div className="flex-1 flex flex-col items-start text-left">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Dandiwar Saikarthik
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground mt-2 block">
                I am a{" "}
                <span className="text-foreground min-w-[260px] inline-block">
                  {typedText}
                  <span className="animate-pulse">_</span>
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
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

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl scale-110" />
              {/* Orange border ring */}
              <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-primary via-accent to-primary/50">
                <div className="rounded-2xl overflow-hidden bg-secondary w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px]">
                  <img
                    src="/saikarthik-profile.png"
                    alt="Dandiwar Saikarthik"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 8%" }}
                    data-testid="img-profile"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 bg-white border border-border rounded-xl px-3 py-2 shadow-lg text-xs font-semibold text-foreground flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                Open to Work
              </motion.div>
            </div>
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

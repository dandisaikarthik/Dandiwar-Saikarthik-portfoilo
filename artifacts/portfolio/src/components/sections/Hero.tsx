import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/use-typewriter";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { animate, createTimeline } from "animejs";

interface NNNode {
  x: number;
  y: number;
  layer: number;
  index: number;
  pulse: number;
}

interface NNEdge {
  from: NNNode;
  to: NNNode;
  progress: number;
  active: boolean;
  speed: number;
}

function NeuralNetCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      buildNetwork();
    };
    window.addEventListener("resize", onResize);

    const LAYERS = [4, 6, 6, 4, 2];
    const ORANGE = "249,115,22";
    const DEEP_ORANGE = "234,88,12";

    let nodes: NNNode[] = [];
    let edges: NNEdge[] = [];
    let animations: ReturnType<typeof animate>[] = [];

    function buildNetwork() {
      nodes = [];
      edges = [];
      animations.forEach(a => a.cancel());
      animations = [];

      const totalLayers = LAYERS.length;
      const xPad = width * 0.12;
      const yPad = height * 0.18;
      const xStep = (width - xPad * 2) / (totalLayers - 1);

      LAYERS.forEach((count, layerIdx) => {
        const x = xPad + layerIdx * xStep;
        const totalH = height - yPad * 2;
        const spacing = totalH / (count - 1 || 1);

        for (let i = 0; i < count; i++) {
          const y = count === 1 ? height / 2 : yPad + i * spacing;
          nodes.push({ x, y, layer: layerIdx, index: i, pulse: 0 });
        }
      });

      for (let l = 0; l < LAYERS.length - 1; l++) {
        const fromNodes = nodes.filter(n => n.layer === l);
        const toNodes = nodes.filter(n => n.layer === l + 1);
        for (const f of fromNodes) {
          for (const t of toNodes) {
            edges.push({ from: f, to: t, progress: -1, active: false, speed: 0.003 + Math.random() * 0.004 });
          }
        }
      }

      nodes.forEach((node, i) => {
        const tl = createTimeline({ loop: true, delay: i * 180 });
        tl.add(node, {
          pulse: [{ to: 1 }],
          duration: 1400,
          ease: "inOutSine",
        }).add(node, {
          pulse: [{ to: 0 }],
          duration: 1400,
          ease: "inOutSine",
        });
        animations.push(tl as unknown as ReturnType<typeof animate>);
      });

      function activateRandomEdges() {
        const inactive = edges.filter(e => !e.active);
        const toActivate = Math.floor(inactive.length * 0.12);
        for (let i = 0; i < toActivate; i++) {
          const pick = inactive[Math.floor(Math.random() * inactive.length)];
          if (pick) {
            pick.active = true;
            pick.progress = 0;
          }
        }
        setTimeout(activateRandomEdges, 600);
      }
      activateRandomEdges();
    }

    buildNetwork();

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const edge of edges) {
        const { from, to } = edge;
        const alpha = 0.09;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(${ORANGE},${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        if (edge.active) {
          edge.progress += edge.speed;
          if (edge.progress > 1.1) {
            edge.active = false;
            edge.progress = -1;
          } else {
            const t = Math.max(0, Math.min(1, edge.progress));
            const px = from.x + (to.x - from.x) * t;
            const py = from.y + (to.y - from.y) * t;

            const grad = ctx.createRadialGradient(px, py, 0, px, py, 5);
            grad.addColorStop(0, `rgba(${DEEP_ORANGE},0.9)`);
            grad.addColorStop(1, `rgba(${ORANGE},0)`);
            ctx.beginPath();
            ctx.arc(px, py, 5, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,0.9)`;
            ctx.fill();
          }
        }
      }

      for (const node of nodes) {
        const r = 5 + node.pulse * 3;
        const baseAlpha = 0.25 + node.pulse * 0.55;

        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 2.5);
        grad.addColorStop(0, `rgba(${DEEP_ORANGE},${baseAlpha})`);
        grad.addColorStop(0.5, `rgba(${ORANGE},${baseAlpha * 0.4})`);
        grad.addColorStop(1, `rgba(${ORANGE},0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${DEEP_ORANGE},${baseAlpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.5 + node.pulse * 0.4})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      animations.forEach(a => a.cancel());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
      data-testid="canvas-neural-net"
    />
  );
}

export function Hero() {
  const typedText = useTypewriter([
    "Software Engineer",
    "UI/UX Designer",
    "AI/ML Engineer"
  ], 80, 40, 2000);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      <NeuralNetCanvas />

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
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Dandiwar</span><br />
            <span className="text-4xl md:text-6xl lg:text-7xl text-muted-foreground">
              I am a <span className="text-foreground min-w-[300px] inline-block">{typedText}<span className="animate-pulse">_</span></span>
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
              className="h-14 px-8 text-base shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all"
              onClick={() => scrollTo('#contact')}
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

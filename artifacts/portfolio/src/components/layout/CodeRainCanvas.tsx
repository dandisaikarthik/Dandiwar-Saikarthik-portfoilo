import { useEffect, useRef } from "react";
import { animate } from "animejs";

const CODE_TOKENS = [
  "const", "import", "export", "function", "return",
  "async", "await", "=>", "{ }", "</>", "[ ]",
  "React", "Python", "TypeScript", "Flask",
  "useState", "useEffect", "render()",
  "def", "class", "if __name__",
  "git commit", "npm run dev",
  "API", "REST", "JSON",
  "model.fit()", "predict()",
  "SELECT *", "FROM", "WHERE",
  "0x1A3F", "0b1010", "null",
  "true", "false", "void",
  "<div>", "</div>", "props",
  "interface", "type", "enum",
];

interface Token {
  text: string;
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
}

export function CodeRainCanvas() {
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
    };
    window.addEventListener("resize", onResize);

    const COUNT = 40;

    const makeToken = (forceY?: number): Token => {
      const size = 12 + Math.random() * 10;
      return {
        text: CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)],
        x: 20 + Math.random() * (width - 100),
        y: forceY !== undefined ? forceY : Math.random() * height,
        size,
        alpha: 0.18 + Math.random() * 0.22,
        speed: 0.3 + Math.random() * 0.5,
      };
    };

    const tokens: Token[] = Array.from({ length: COUNT }, () => makeToken());

    const anims = tokens.map((t) =>
      animate(t, {
        alpha: [{ to: t.alpha * 0.35 }, { to: t.alpha }],
        duration: 2500 + Math.random() * 2500,
        ease: "inOutSine",
        loop: true,
        direction: "alternate",
        delay: Math.random() * 2500,
      })
    );

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.textBaseline = "middle";

      for (const t of tokens) {
        t.y -= t.speed;
        if (t.y < -30) {
          const fresh = makeToken(height + 30);
          t.text = fresh.text;
          t.x = fresh.x;
          t.y = fresh.y;
          t.size = fresh.size;
          t.alpha = fresh.alpha;
          t.speed = fresh.speed;
        }
        ctx.font = `600 ${t.size}px 'Space Grotesk', monospace`;
        ctx.fillStyle = `rgba(220,75,0,${t.alpha})`;
        ctx.fillText(t.text, t.x, t.y);
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      anims.forEach((a) => a.cancel());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999, mixBlendMode: "multiply" }}
      data-testid="canvas-code-rain-global"
    />
  );
}

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
    let height = (canvas.height = document.body.scrollHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = document.body.scrollHeight;
    };
    window.addEventListener("resize", onResize);

    const COUNT = 55;

    const makeToken = (forceY?: number): Token => {
      const size = 11 + Math.random() * 9;
      return {
        text: CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)],
        x: Math.random() * width,
        y: forceY !== undefined ? forceY : Math.random() * height,
        size,
        alpha: 0.06 + Math.random() * 0.11,
        speed: 0.22 + Math.random() * 0.4,
      };
    };

    const tokens: Token[] = Array.from({ length: COUNT }, () => makeToken());

    const anims = tokens.map((t) =>
      animate(t, {
        alpha: [{ to: t.alpha * 0.25 }, { to: t.alpha }],
        duration: 3000 + Math.random() * 3000,
        ease: "inOutSine",
        loop: true,
        direction: "alternate",
        delay: Math.random() * 3000,
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
        ctx.font = `${t.size}px 'Space Grotesk', monospace`;
        ctx.fillStyle = `rgba(234,88,12,${t.alpha})`;
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
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
      data-testid="canvas-code-rain-global"
    />
  );
}

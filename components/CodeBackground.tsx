
import React, { useEffect, useRef } from 'react';

const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const snippets = [
      'const club = new Hackathon();',
      'function solve() { return innovation; }',
      'import { Code } from "Life";',
      'git commit -m "changed world"',
      'while(learning) { code(); }',
      'npm install creativity',
      '01101000 01100001 01100011 01101011',
      '<div>Hackathon</div>',
      'for(let goal of goals) { achieve(goal); }',
      'await buildDream();',
      'status: 200 OK',
      'sudo rm -rf barriers',
    ];

    interface Particle {
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
      fontSize: number;
    }

    const particles: Particle[] = [];
    const count = 40;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: snippets[Math.floor(Math.random() * snippets.length)],
        speed: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.4,
        fontSize: 10 + Math.random() * 12,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = 'JetBrains Mono, monospace';

      particles.forEach((p) => {
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.font = `${p.fontSize}px 'JetBrains Mono'`;
        ctx.fillText(p.text, p.x, p.y);

        p.y += p.speed;
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ filter: 'blur(1px)' }}
    />
  );
};

export default CodeBackground;

import { useEffect, useRef, useState } from "react";

interface DotBackgroundProps {
  dotSize?: number;
  dotSpacing?: number;
  hoverRadius?: number;
  hoverScale?: number;
  parallaxFactor?: number;
}

export default function DotBackground({
  dotSize = 2,
  dotSpacing = 24,
  hoverRadius = 60,
  hoverScale = 1.15,
  parallaxFactor = 0.02,
}: DotBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const scrollRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    // Observe theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Scroll handler for parallax
    const handleScroll = () => {
      scrollRef.current = { x: window.scrollX, y: window.scrollY };
    };

    // Animation scales for each dot (for smooth transitions)
    const dotScales: Map<string, number> = new Map();

    // Draw function
    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // Colors based on theme (more visible)
      const dotColor = isDark ? "#1e3a5f" : "#cbd5e1";

      // Calculate parallax offset
      const parallaxX = (mouseRef.current.x - width / 2) * parallaxFactor;
      const parallaxY = (mouseRef.current.y - height / 2) * parallaxFactor;

      // Calculate number of dots
      const cols = Math.ceil(width / dotSpacing) + 2;
      const rows = Math.ceil(height / dotSpacing) + 2;

      // Starting offset for centering
      const startX = -dotSpacing;
      const startY = -dotSpacing;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = startX + i * dotSpacing;
          const baseY = startY + j * dotSpacing;

          // Apply parallax
          const x = baseX + parallaxX;
          const y = baseY + parallaxY;

          // Calculate distance to mouse
          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Target scale based on distance
          const targetScale = distance < hoverRadius ? hoverScale : 1;

          // Smooth scale transition
          const dotKey = `${i}-${j}`;
          const currentScale = dotScales.get(dotKey) || 1;
          const newScale = currentScale + (targetScale - currentScale) * 0.15;
          dotScales.set(dotKey, newScale);

          // Draw dot
          const radius = (dotSize / 2) * newScale;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
        }
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    // Start animation
    draw();

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isDark, dotSize, dotSpacing, hoverRadius, hoverScale, parallaxFactor]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}

'use client';
import Cursor from "@/app/components/Cursor"
import { useState, useEffect, useRef } from "react"

const Hero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!active || !heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [active]);

  useEffect(() => {
    if (!active && heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setPos({
        x: rect.width / 2,
        y: rect.height / 2
      });
    }
  }, [active]);

  return (
    <section className="relative h-dvh overflow-hidden">
      <div
        ref={heroRef}
        className="relative w-full h-full cursor-none"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <Cursor
          style={{
            position: "absolute",
            transform: `translate(${pos.x - 40}px, ${pos.y - 40}px)`
          }}
        />

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          poster="/poster.png"
        >
          <source src="/mixkit-monochromatic-visual-compositions-4974-full-hd.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </section>
  );
};

export default Hero;

'use client';

import Cursor from "@/app/components/ui/cursors/Cursor"
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { video } from "motion/react-client";
import { useState, useEffect, useRef } from "react"

gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [mouse, setMouse] = useState({x: 0, y: 0});
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
  const video = videoRef.current;

  if (isMobile && video) {
    if (video.paused) {
      video.muted = true;
      video.play().catch(() => {});
      return;
    }
  }

  gsap.to(window, {
    duration: 0.8,
    scrollTo: "#awards-section",
    ease: "power2.inOut",
  });
};
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!active || !heroRef.current || isMobile) return;

      setMouse({x: e.clientX, y: e.clientY});

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
  const handleScroll = () => {
    if (!active || !heroRef.current || isMobile) return;

    const rect = heroRef.current.getBoundingClientRect();
    setPos({
      x: mouse.x - rect.left,
      y: mouse.y - rect.top
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [active, mouse]);


// Center cursor
  useEffect(() => {
    if (!active && heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setPos({
        x: rect.width / 2,
        y: rect.height / 2
      });
    }
  }, [active]);

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener('resize', handleResize);
  handleResize(); // Set initial state

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <section className="relative h-dvh overflow-hidden">
      <div
        ref={heroRef}
        onClick={handleClick}
        className="relative w-full h-full cursor-none"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <Cursor
          style={{
            position: "absolute",
            transform: `translate(${pos.x - 50}px, ${pos.y - 50}px)`
          }}
        />

        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/video/lifestyle-2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </section>
  );
};

export default Hero;

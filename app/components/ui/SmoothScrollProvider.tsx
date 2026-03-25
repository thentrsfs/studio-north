'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LenisContext } from '@/app/context/LenisContext';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,     
  lerp: 0.08,           
  smoothWheel: true,  
  wheelMultiplier: 1,  
    });

    const updateLenis = () => {
    setLenis(instance);
  };

    instance.on('scroll', ScrollTrigger.update);
    instance.on('scroll', updateLenis);

    gsap.ticker.add((time) => {
      instance.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      instance.destroy();
    };
  }, []);

  

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
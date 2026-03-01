'use client';

import DraggingCursor from "../ui/cursors/DraggingCursor";
import { useEffect, useRef, useState } from "react";
import {motion, useMotionValue, useTransform, animate } from "motion/react";

const FeaturesSection = () => {

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorWrapperRef = useRef<HTMLDivElement>(null!);

  // States
  const [isDragging, setIsDragging] = useState(false);
  const [active, setActive] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const x = useMotionValue(0);  
  const lastX = useRef(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const scale = useTransform(x, [-200, 0, 200], [0.98, 1, 0.98]);
  const isMobile = windowWidth < 768;


  // Progress bar
  const maxDrag = Math.max(0, containerWidth - windowWidth + 200); 
  const progress = useTransform(x, [-maxDrag, 0], [1, 0]);
  const trackWidth = windowWidth - 96; //px padding
  const barWidth = isMobile ? 100 : 1100; //px
  const barX = useTransform(progress, p => p * (trackWidth - barWidth));


  // Drag handlers
   const handlePointerDown = (e: React.PointerEvent) => {
  setIsDragging(true)
  lastX.current = e.clientX
  e.currentTarget.setPointerCapture(e.pointerId)
}

const handlePointerMove = (e: React.PointerEvent) => {
  if (!isDragging) return

  const delta = e.clientX - lastX.current
  lastX.current = e.clientX

  const sensitivity = 20
  const maxDrag = containerWidth - windowWidth + 200

  let newX = x.get() + delta * sensitivity

  if (newX > 0) newX = 0
  if (newX < -maxDrag) newX = -maxDrag

  animate(x, newX, {
  type: "spring",
  stiffness: 800,
  damping: 60,
  mass: 0.6
})
}

const handlePointerUp = (e: React.PointerEvent) => {
  setIsDragging(false)
  e.currentTarget.releasePointerCapture(e.pointerId)
}

// Cursor handler on leave
const handleLeave = () => {
  setActive(false);

  const wrapper = cursorWrapperRef.current;
  if (!wrapper) return;

  const wrapperBounds = wrapper.getBoundingClientRect();

  setCursorPos({
    x: wrapperBounds.width - 120,
    y: wrapperBounds.height / 2 - 40
  });
};


  // Measure widths on mount and resize 
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth);
      }
      setWindowWidth(window.innerWidth);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Set initial cursor position
  useEffect(() => {
  const wrapper = cursorWrapperRef.current;
  if (!wrapper) return;

  const bounds = wrapper.getBoundingClientRect();

  setCursorPos({
    x: bounds.width - 120,
    y: bounds.height / 2 - 40
  });
}, []);

// Intersection observer to deactivate cursor when leaving section
useEffect(() => {
  const wrapper = cursorWrapperRef.current;
  if (!wrapper) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        setActive(false);

        const bounds = wrapper.getBoundingClientRect();
        setCursorPos({
          x: bounds.width - 120,
          y: bounds.height / 2 - 40,
        });
      }
    },
    {
      threshold: 0.5, // when less than 10% visible → hide
    }
  );

  observer.observe(wrapper);

  return () => observer.disconnect();
}, []);


  return (
    <section className='py-3 relative'>
 <header className='lg:px-24 px-6'>
 <div className="lg:mt-32 mt-24 h-px bg-ink" />
 <div className='lg:grid lg:grid-cols-3 flex text-xs font-plus font-semibold py-4'>
<span>00</span><span>/05</span><div className='w-2.5 h-2.5 bg-ink rounded-full ml-auto'></div>
 </div>
    <h2 className='lg:text-5xl text-2xl lg:leading-normal leading-tight font-black font-plus uppercase max-w-30 lg:mt-20 mt-10'>Featured Engagements</h2>
 </header>
 <div ref={cursorWrapperRef} data-cursor-wrapper className="relative" onMouseEnter={() => setActive(true)} onMouseLeave={handleLeave}>
 <motion.div ref={containerRef} 
 style={{ x, scale }}
  onPointerDown={handlePointerDown}
  onPointerMove={handlePointerMove}
  onPointerUp={handlePointerUp}
  onPointerLeave={handlePointerUp}
        className='flex select-none cursor-none lg:gap-26 gap-6 w-full lg:pl-24 pl-6 touch-none'>
<div className='lg:py-32 pt-14 pb-20 flex flex-col gap-16 shrink-0 lg:max-w-110 max-w-75'>
    <div>
     <h3 className="text-4xl font-bold font-space">NOVA</h3>
      <div className="mt-2 h-0.5 bg-ink w-5" />
      </div>
      <div className='flex flex-col gap-4'>
        <h4 className='font-bold font-plus text-xl'>NOVA</h4>
        <p className='font-medium'>We partnered with Nova Labs to design a next-generation AI productivity platform, building scalable systems and intuitive interaction models.</p>
      </div>
</div>
<div className='lg:py-32 py-16 flex flex-col gap-16 shrink-0 max-w-110'>
    <div>
     <h3 className="text-4xl font-bold font-space">NORTHFIELD</h3>
      <div className="mt-2 h-0.5 bg-ink w-5" />
      </div>
      <div className='flex flex-col gap-4'>
        <h4 className='font-bold font-plus text-xl'>NORTHFIELD</h4>
        <p className='font-medium'>A brand transformation for an outdoor goods company redefining modern exploration. A new website, mobile app, and identity system.</p>
      </div>
</div>
<div className='lg:py-32 py-16 flex flex-col gap-16 shrink-0 max-w-110'>
    <div>
     <h3 className="text-4xl font-bold font-space">OFFSET</h3>
      <div className="mt-2 h-0.5 bg-ink w-5" />
      </div>
      <div className='flex flex-col gap-4'>
        <h4 className='font-bold font-plus text-xl'>OFFSET</h4>
        <p className='font-medium'>A digital-first editorial experience designed to prioritize immersive storytelling. A new thing for a new generation of readers. Try it out, it&apos;s free.</p>
      </div>
</div>
<div className='lg:py-32 py-16 flex flex-col gap-16 shrink-0 max-w-110'>
    <div>
     <h3 className="text-4xl font-bold font-space">SIGNAL</h3>
      <div className="mt-2 h-0.5 bg-ink w-5" />
      </div>
      <div className='flex flex-col gap-4'>
        <h4 className='font-bold font-plus text-xl'>SIGNAL</h4>
        <p className='font-medium'>Reimagining a telecommunications brand for a frictionless, customer-first future. A new experience for a new generation of consumers. Good things come to those who wait.</p>
      </div>
</div>
<div className='lg:py-32 py-16 flex flex-col gap-16 shrink-0 max-w-110'>
    <div>
     <h3 className="text-4xl font-bold font-space">Razor AI</h3>
      <div className="mt-2 h-0.5 bg-ink w-5" />
      </div>
      <div className='flex flex-col gap-4'>
        <h4 className='font-bold font-plus text-xl'>Razor AI</h4>
        <p className='font-medium'>We partnered with Razor AI to design a next-generation AI productivity platform, building scalable systems and intuitive interaction models. New features for a new generation of users.</p>
      </div>
</div>
 </motion.div>
    <DraggingCursor
    cursorPos={cursorPos as { x: 0; y: 0; }}
      active={active}
      isDragging={isDragging}
      wrapperRef={cursorWrapperRef}
      />
 </div>
     
 <div className="lg:px-24 px-6">
<div className="relative h-0.5 bg-gray-300 dark:bg-white/25 w-full overflow-hidden">
  <motion.div
    className="absolute top-0 h-0.5 bg-ink dark:bg-rose lg:w-250 w-37"
    style={{
      x: barX 
    }}
  />
</div>
</div>
    </section>
  )
}

export default FeaturesSection
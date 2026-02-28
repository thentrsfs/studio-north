'use client'

import CloseX from "../ui/CloseX";
import { projects } from "@/app/data/projects";
import Image from "next/image";
import { motion, Variants, useMotionValue, useTransform, animate } from "motion/react";
import DraggingCursor from "../ui/cursors/DraggingCursor";
import { useState, useEffect, useRef } from "react";

const ProjectsPanel = ({ open, onClose }: { open: boolean; onClose: () => void }) => {

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorWrapperRef = useRef<HTMLDivElement>(null!);

  // States
  const [active, setActive] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const lastX = useRef(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const scale = useTransform(x, [-200, 0, 200], [0.98, 1, 0.98])


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

const handleLeave = () => {
  setActive(false);

  const wrapper = cursorWrapperRef.current;
  if (!wrapper) return;

  const wrapperBounds = wrapper.getBoundingClientRect();

  setCursorPos({
    x: wrapperBounds.width - 100,
    y: wrapperBounds.height / 2 - 40
  });
};

const handlePointerUp = (e: React.PointerEvent) => {
  setIsDragging(false)
  e.currentTarget.releasePointerCapture(e.pointerId)
}

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

  useEffect(() => {
    const wrapper = cursorWrapperRef.current;
    if (!wrapper) return;

    const bounds = wrapper.getBoundingClientRect();

    setCursorPos({
      x: bounds.width - 100,
      y: bounds.height / 2 - 40
    })
  }, [])

  const curtainVariants: Variants = {
    closed: {
      scaleX: 1,
      originX: 0,
    },
    open: {
      scaleX: [1, 0.9, 0],
      originX: 0,
      transition: {
        duration: 1.4,
        times: [0, 0.15, 1],
        ease: [
          [0.22, 1, 0.36, 1],
          [0.1, 0.8, 0.1, 1],
        ],
      },
    },
  };

  return (
    <div
      className={`fixed flex flex-col justify-between px-6 py-4 xl:py-10 xl:pl-24 h-dvh w-full z-20 bg-ink transition-opacity duration-600 ease-out inset-0 overflow-hidden ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* TOP BAR */}
      <div className="w-full flex justify-between items-center xl:pr-20">
        <div className="flex gap-12">
          <div className="rounded-full bg-rose w-2.5 h-2.5 mt-1"></div>
          <p className="text-xs uppercase font-semibold tracking-wide text-rose flex flex-col">
            <span>(5) INTERNAL WORKS</span>
            <span>©26 - STUDIO/NORTH®</span>
          </p>
          <p className="text-xs uppercase font-semibold tracking-wide text-rose">
            A COLLECTION OF INTERNAL PROJECTS AND CREATIVE EXPLORATIONS.
          </p>
        </div>
        <CloseX onClose={onClose} className="text-offwhite mt-1" />
      </div>

<div ref={cursorWrapperRef} data-cursor-wrapper className="relative w-full" onMouseEnter={() => setActive(true)} onMouseLeave={handleLeave}>
      {/* DRAG CONTAINER */}
      <motion.div
      ref={containerRef}
       style={{ x, scale }}
  onPointerDown={handlePointerDown}
  onPointerMove={handlePointerMove}
  onPointerUp={handlePointerUp}
  onPointerLeave={handlePointerUp}
        className="flex text-rose gap-2 cursor-none select-none bg-ink"
      >
        {projects.map((project) => (
          <div key={project.id} className="shrink-0 w-140">
            <div className="border-l border-rose pl-2 group overflow-hidden relative bg-ink">
                {/* IMAGE */}
                <div className="relative h-140 overflow-hidden mx-1">
                  <Image
                    src={project.image}
                    alt="project image"
                    className="w-full h-full object-cover pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] scale-110 group-hover:scale-100"
                    width={600}
                    height={600}
                  />
                </div>

                {/* META */}
                <div className="relative p-4 flex flex-col gap-2 bg-ink translate-y-0 group-hover:-translate-y-full h-25 transition-all duration-500 will-change-transform mt-px">
                  <div className="flex justify-between text-lg font-bold uppercase tracking-wide ">
                    <span>{project.title}</span>
                    <span>©{project.year}</span>
                  </div>
                  <div className="text-xs uppercase">
                    {project.category}
                  </div>
                </div>
                 <div className="absolute left-0 bottom-0 w-full translate-y-20 group-hover:translate-y-10 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
                <div className="p-6 pb-20 flex flex-col gap-6">
                  <p className="text-xs text-rose">
                    {project.description}
                  </p>
                  <a href="#" className="text-xs underline font-semibold">
                    Visit Project
                  </a>
                </div>
              </div>
              </div>

            <span className="text-xs tracking-wide pt-2 block">
              0{project.id}
            </span>
          </div>
        ))}

        <div className="shrink-0 w-0 border-l border-rose" />
      </motion.div>
      <DraggingCursor
        active={active}
        isDragging={isDragging}
        cursorPos={cursorPos as { x: 0; y: 0; }}
        wrapperRef={cursorWrapperRef}
      />
      </div>
      <div className="flex justify-between uppercase text-xs font-medium text-offwhite/30">
        <span>Studio/North®,inc</span>
        <span>10-26©</span>
      </div>

      <motion.div
        className="absolute inset-0 bg-ink"
        variants={curtainVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
      />
    </div>
  );
};

export default ProjectsPanel;

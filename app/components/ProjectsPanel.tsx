import CloseX from "./CloseX";
import { projects } from "../data/projects";
import Image from "next/image";
import { motion, Variants } from "motion/react"
import ProjectsCursor from "./ProjectsCursor";
import { useState, useEffect } from "react";

const ProjectsPanel = ({open, onClose} : {open: boolean, onClose: () => void}) => {

  const containerWidth = projects.length * 520;
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

   const [pos, setPos] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);

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

  
    useEffect(() => {
      const move = (e: MouseEvent) => {
        if(!active) return;
        setPos({x: e.clientX, y: e.clientY});
      }
  
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    }, [active]);
  

  return (
    <div className={`fixed flex flex-col justify-between px-6 py-4 xl:py-10 xl:pl-20 h-dvh w-full z-20 bg-brown transition-opacity duration-600 ease-out inset-0 overflow-hidden ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="w-full flex justify-between items-center xl:pr-17">
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
        <CloseX onClose={onClose} className="text-offwhite mt-1"/>
      </div>
      <motion.div drag="x" dragMomentum={false} dragConstraints={{right: 0, left: -containerWidth + windowWidth - 400}}
      className="flex text-rose gap-2
      scrollbar-none
      cursor-none"
      onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}
      >
        {projects.map((project) => (
          <div key={project.id} className="shrink-0 w-140 ">
           <div className=" border-l border-rose pl-2 group overflow-hidden">
  <div
    className="
      transition-all duration-800
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:-translate-y-26
    "
  >
    {/* IMAGE */}
    <div className="relative h-140 overflow-hidden">
      <Image
        src={project.image}
        alt="project image"
        className="
          w-full h-full object-cover pointer-events-none
          transition-transform duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          scale-120 group-hover:scale-100
        "
        width={400}
        height={300}
      />
    </div>

    {/* META */}
    <div className="relative p-4 flex flex-col gap-2 bg-brown ">
      <div className="flex justify-between text-lg font-bold uppercase tracking-wide">
        <span>{project.title}</span>
        <span>©{project.year}</span>
      </div>
      <div className="text-xs uppercase">
        {project.category}
      </div>
    </div>
    
  {/* DESCRIPTION (slides in from below, no reserved space) */}
  <div
  className="
    absolute left-0 bottom-0 top-full w-full opacity-0 group-hover:opacity-100
    transition-all duration-500 ease-in
  "
>
  <div className="p-4 pb-20 flex flex-col gap-6">
    <p className="text-xs text-rose">
      {project.description}
    </p>
    <a href="#" className="text-xs text-rose underline">
      Visit Project
    </a>
  </div>
</div>
</div>
  </div>


      <span className="text-xs text-rose tracking-wide pt-2">0{project.id}</span>
          </div>
        ))}
        <div className="shrink-0 w-0 border-l border-rose" />
      </motion.div>
      <ProjectsCursor style={{transform: active ? `translate(${pos.x - 40}px, ${pos.y - 40}px)` : 'translate(calc(100vw - 200px), calc(50vh - 50px))'}} />
      <div className="flex justify-between">
<span className="text-xs uppercase tracking-wide text-offwhite/32">STUDIO/NORTH®,INC</span>
      <motion.div
    className="absolute inset-0 bg-brown"
    variants={curtainVariants}
    initial="closed"
    animate={open ? "open" : "closed"}
  />
      </div>
    </div>
  )
}

export default ProjectsPanel
'use client';
import { useState } from "react";
import Logo from "./Logo"
import Dots from "./Dots"
import ProjectsPanel from "./ProjectsPanel";
import CloseX from "./CloseX";

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <>
    <nav className="absolute z-10 w-full text-offwhite flex justify-between px-6 py-4 xl:py-10 xl:px-20">
<Logo className={isMenuOpen ? 'text-rose' : 'text-offwhite'}/>
<div className="hidden lg:flex items-center gap-12 text-xs uppercase tracking-wider">
   <a
  href="#"
  className="group relative"
>
  Work
  <span
    className="
      absolute left-0 bottom-[0.5px] h-px w-full bg-offwhite
      scale-x-0 origin-left
      transition-transform duration-300
      group-hover:scale-x-100 group-hover:origin-left
      group-not-[&:hover]:origin-right
    "
  />
</a>
    <a
  href="#"
  className="group relative"
>
  About
  <span
    className="
      absolute left-0 bottom-[0.5px] h-px w-full bg-offwhite
      scale-x-0 origin-left
      transition-transform duration-300
      group-hover:scale-x-100 group-hover:origin-left
      group-not-[&:hover]:origin-right
    "
  />
</a> <a
  href="#"
  className="group relative"
>
  News
  <span
    className="
      absolute left-0 bottom-[0.5px] h-px w-full bg-offwhite
      scale-x-0 origin-left
      transition-transform duration-300
      group-hover:scale-x-100 group-hover:origin-left
      group-not-[&:hover]:origin-right
    "
  />
</a> <a
  href="#"
  className="group relative"
>
  Contact
  <span
    className="
      absolute left-0 bottom-[0.5px] h-px w-full bg-offwhite
      scale-x-0 origin-left
      transition-transform duration-300
      group-hover:scale-x-100 group-hover:origin-left
      group-not-[&:hover]:origin-right
    "
  />
</a>
   </div>
<Dots onClick={() => setIsProjectsOpen(true)} />
<span onClick={() => setIsMenuOpen(true)} className="lg:hidden uppercase tracking-wider font-medium">Menu</span>
<div className={`fixed inset-0 flex flex-col pt-30 pl-6 bg-brown transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}> 
  <nav className="flex flex-col gap-8 font-space text-lg text-rose uppercase tracking-widest">
    <a href="#">Work</a>
    <a href="#">About</a>
    <a href="#">News</a>
    <a href="#">Contact</a>
  </nav>
  <CloseX onClose={() => setIsMenuOpen(false)} className="absolute top-5 right-6 text-rose"/>
</div>
    </nav>
    <ProjectsPanel open={isProjectsOpen} onClose={() => setIsProjectsOpen(false)}/>
    </>
  )
}

export default Nav
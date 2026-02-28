'use client';
import { useState, useEffect } from "react";
import Logo from "./logos/Logo"
import Dots from "./Dots"
import ProjectsPanel from "../sections/ProjectsPanel"
import CloseX from "./CloseX";

const Nav = ({transparent} : {transparent: boolean}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
      let lastY = window.scrollY;

      const onScroll = () => {
        const currentY = window.scrollY;

        if(currentY > lastY && currentY > 50) {
          // scrolling down
          setHidden(true);
        } else {
          // scrolling up
          setHidden(false);
        }
        lastY = currentY;
      }

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  return (
    <>
    <nav className={`fixed z-20 w-full ${transparent
      ? 'bg-transparent text-offwhite'
      : 'bg-offwhite text-ink dark:bg-ink dark:text-rose'
    } flex justify-between px-6 py-4 xl:py-10 xl:px-24 transition-all duration-500 ease-in-out ${hidden && !isMenuOpen ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
<Logo className={isMenuOpen ? 'text-rose' : !transparent ? 'text-ink dark:text-rose' : 'text-offwhite dark:text-ink'}/>
<div className="hidden lg:flex items-center gap-12 text-xs uppercase tracking-wider font-plus font-semibold">
   <a
  href="#"
  className="group relative"
>
  Work
  <span
    className={`
      absolute left-0 bottom-[0.5px] h-px w-full ${!transparent ? 'bg-ink dark:bg-rose' : 'bg-offwhite'}
      scale-x-0 origin-left
      transition-transform duration-300
      group-hover:scale-x-100 group-hover:origin-left
      group-not-[&:hover]:origin-right
    `}
  />
</a>
    <a
  href="#"
  className="group relative"
>
  About
 <span
    className={`
      absolute left-0 bottom-[0.5px] h-px w-full ${!transparent ? 'bg-ink dark:bg-rose' : 'bg-offwhite'}
      scale-x-0 origin-left
      transition-transform duration-300
      group-hover:scale-x-100 group-hover:origin-left
      group-not-[&:hover]:origin-right
    `}
  />
</a>
 <a
  href="#"
  className="group relative"
>
  News
 <span
    className={`
      absolute left-0 bottom-[0.5px] h-px w-full ${!transparent ? 'bg-ink dark:bg-rose' : 'bg-offwhite'}
      scale-x-0 origin-left
      transition-transform duration-300
      group-hover:scale-x-100 group-hover:origin-left
      group-not-[&:hover]:origin-right
    `}
  />
</a> 
 <a
  href="#"
  className="group relative"
>
  Thinking
 <span
    className={`
      absolute left-0 bottom-[0.5px] h-px w-full ${!transparent ? 'bg-ink dark:bg-rose' : 'bg-offwhite'}
      scale-x-0 origin-left
      transition-transform duration-300
      group-hover:scale-x-100 group-hover:origin-left
      group-not-[&:hover]:origin-right
    `}
  />
</a> 
 <a
  href="#"
  className="group relative"
>
  Careers
 <span
    className={`
      absolute left-0 bottom-[0.5px] h-px w-full ${!transparent ? 'bg-ink dark:bg-rose' : 'bg-offwhite'}
      scale-x-0 origin-left
      transition-transform duration-300
      group-hover:scale-x-100 group-hover:origin-left
      group-not-[&:hover]:origin-right
    `}
  />
</a> 
<a
  href="#"
  className="group relative"
>
  Contact
 <span
    className={`
      absolute left-0 bottom-[0.5px] h-px w-full ${!transparent ? 'bg-ink dark:bg-rose' : 'bg-offwhite'}
      scale-x-0 origin-left
      transition-transform duration-300
      group-hover:scale-x-100 group-hover:origin-left
      group-not-[&:hover]:origin-right
    `}
  />
</a>
   </div>
<Dots bgColor={transparent ? 'bg-offwhite' : 'bg-ink dark:bg-rose'} onClick={() => setIsProjectsOpen(true)} />
<span onClick={() => setIsMenuOpen(true)} className="lg:hidden uppercase tracking-wider font-medium font-plus">Menu</span>
<div className={`fixed inset-0 flex flex-col justify-between pt-30 p-6 h-dvh bg-ink transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}> 
  <nav className="flex flex-col gap-8 font-plus font-medium text-lg text-rose uppercase tracking-wider">
    <a href="#">Work</a>
    <a href="#">About</a>
    <a href="#">News</a>
    <a href="#">Thinking</a>
    <a href="#">Careers</a>
    <a href="#">Contact</a>
  </nav>
  <CloseX onClose={() => setIsMenuOpen(false)} className="absolute top-5 right-6 text-rose"/>
    <div className="flex justify-between uppercase text-xs font-medium text-offwhite/30">
        <span>Studio/North®,inc</span>
        <span>10-26©</span>
      </div>
</div>
    </nav>
    <ProjectsPanel open={isProjectsOpen} onClose={() => setIsProjectsOpen(false)}/>
    </>
  )
}

export default Nav
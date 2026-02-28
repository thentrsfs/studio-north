'use client';

import gsap from "gsap" 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef} from "react";
import CustomButton from "../ui/CustomButton";

gsap.registerPlugin(ScrollTrigger, useGSAP)

const AdSection = () => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      if(!sectionRef.current || !leftRef.current) return;
      

      const mm = gsap.matchMedia();
     // Desktop pinning only
      mm.add("(min-width: 768px)", () => { 
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top+=100px",
            end: "bottom bottom-=130px",
            pin: leftRef.current,
            scrub: 0.5
        })
      }) 

      return () => mm.revert();
        
    }, {scope: sectionRef});
  return (
     <div ref={sectionRef} id="ad-section" className="relative lg:pt-50 pt-16 min-h-screen lg:grid grid-cols-2 flex flex-col-reverse max-md:gap-12 lg:px-24 px-6">
          <div ref={leftRef} className="flex flex-col lg:gap-4 gap-6 will-change-transform min-h-[300px]">
            <p className="lg:text-[100px] text-[38px] leading-10 lg:leading-24 tracking-tight max-w-3xl font-black uppercase font-plus">STUDIO/NORTH® helps <br className="max-md:hidden" /> brands <span className="dark:bg-rose bg-offwhite lg:w-18 lg:h-18 w-7 h-7 rounded-full inline-block"></span> connect w/ culture</p>
<div className="uppercase font-medium ">Adweek <span className="font-bold">Agency Spotlight</span> </div>
            <CustomButton text="About Us" />
          </div>
         <div className="bg-offwhite dark:bg-ink min-h-screen">
  <video
    className="w-full h-full object-cover block"
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
  >
    <source src="/video/woman_skateboarding.mp4" />
  </video>
</div>

        </div>
  )
}

export default AdSection
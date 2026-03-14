'use client'

import { useTheme } from "next-themes"
import { useEffect, useRef } from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Image from "next/image";

import CustomButton from "../components/ui/CustomButton";
import {work} from "../data/work";

gsap.registerPlugin(useGSAP,SplitText);

const WorkPage = () => {
  const { setTheme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
  SplitText.create(".split-heading", {
  type: "lines",
  autoSplit: true,
  mask: 'lines',
  onSplit: (self) => {
    return gsap.from(self.lines, {
      y: 100,
      stagger: 0.2,
      duration: 0.6,
      ease: "power4.out",
    });
  }
});

gsap.from('.reveal',{
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
})
  }, {scope: containerRef});
  
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <div ref={containerRef} className="lg:pt-50 lg:pl-24 pt-32 pl-6">
      <div className="flex flex-col gap-20 pr-6 lg:pr-24">
      <div className="heading-xl lg:w-1/2 split-heading">Simple to understand. <br /> <span className="dark:bg-rose bg-ink lg:w-18 lg:h-18 w-7 h-7 rounded-full inline-block lg:mr-8"/> Impossible to miss.</div>
      <div className="flex max-lg:flex-col lg:flex-row-reverse lg:justify-between lg:items-end gap-20">
      <p className="font-semibold text-sm max-w-80 text-ink/80 reveal ">We create work where clarity meets surprise, helping brands connect with culture through shared values and perspectives.</p>
      <div className="flex gap-4 text-xs uppercase tracking-wider font-plus font-semibold reveal">
         <a
  className="group relative cursor-pointer"
>
  Services
  <span
    className={`
      absolute left-0 bottom-[0.5px] h-px w-full bg-ink dark:bg-rose group-hover:scale-x-100 group-hover:origin-left
      scale-x-0 origin-left
      transition-transform duration-300
      group-not-[&:hover]:origin-right
    `}
  />
</a>
         <a
  className="group relative cursor-pointer"
>
  Industries
  <span
    className={`
      absolute left-0 bottom-[0.5px] h-px w-full bg-ink dark:bg-rose group-hover:scale-x-100 group-hover:origin-left
      scale-x-0 origin-left
      transition-transform duration-300
      group-not-[&:hover]:origin-right
    `}
  />
</a>
         <a
  className="group relative cursor-pointer"
>
  All work
  <span
    className={`
      absolute left-0 bottom-[0.5px] h-px w-full bg-ink dark:bg-rose group-hover:scale-x-100 group-hover:origin-left
      scale-x-0 origin-left
      transition-transform duration-300
      group-not-[&:hover]:origin-right
    `}
  />
</a>
      </div>
      </div>
</div>
<div className="flex flex-col gap-8 pt-8 pb-16 reveal">
<div className="flex flex-col gap-8">
  {work.map((item) => (
    <div key={item.id} className="flex flex-col gap-8 pb-12">
       <div className="pr-6 lg:pr-24">
<hr className="bg-ink" />
<div className="flex justify-between mt-2 text-sm font-semibold font-plus">
  <span>0{item.id}</span>
  <span>/0{work.length}</span>
</div>
</div>
<h3 className="text-2xl uppercase font-bold tracking-tight">{item.title}</h3>
<p className="text-sm font-semibold text-ink/80 w-[90%]">
{item.description}</p>
<CustomButton text="Learn more" />
    <div className="grid grid-cols-2 gap-5 max-lg:flex max-lg:overflow-x-auto max-lg:gap-4 max-lg:snap-x max-lg:snap-mandatory max-lg:scroll-smooth no-scrollbar">
      {item.images.map((image) => (
        <article key={image.id} className="group flex flex-col cursor-pointer gap-4 snap-start max-md:w-70 md:w-90 lg:w-full max-lg:shrink-0">
          <div className="relative overflow-hidden lg:h-180 md:h-120 h-90">
            <Image className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-300 ease-in-out" src={image.src} alt={image.alt} width={400} height={300} />
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase tracking-tight">{image.title}</h4>
            <p className="font-semibold text-xs uppercase max-w-[65%] text-ink/80">{image.description}</p>
          </div>
        </article>
      ))}
    </div>
    </div>
  ))}
</div>
</div>


    </div>
  )
}

export default WorkPage
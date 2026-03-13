'use client'

import { useTheme } from "next-themes"
import { useEffect, useRef } from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import CustomButton from "../components/ui/CustomButton";

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
    <div ref={containerRef} className="lg:pt-50 lg:px-24 pt-32 px-6">
      <div className="flex flex-col gap-20">
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
<div className="flex flex-col gap-8 mt-8 reveal">
  <div>
<hr className="bg-ink" />
<div className="flex justify-between mt-2 text-sm font-semibold font-plus">
  <span>01</span>
  <span>/03</span>
</div>
</div>
<h3 className="text-2xl uppercase font-bold tracking-tight">Branded Ecommerce</h3>
<p className="text-sm font-semibold text-ink/80 w-[90%]">
Branded ecommerce is more than just selling products online; it&apos;s about creating a unique and immersive shopping experience that reflects your brand&apos;s identity and values. </p>
<CustomButton text="Learn more" className="" />
</div>
    </div>
  )
}

export default WorkPage
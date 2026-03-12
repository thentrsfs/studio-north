'use client'

import { useTheme } from "next-themes"
import { useEffect } from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const WorkPage = () => {
  const { setTheme } = useTheme();

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
  })
  
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <div className="h-dvh lg:pt-50 lg:px-24 pt-32 px-6">
      <div className="heading-xl lg:w-1/2 split-heading">Simple to understand. <br /> <span className="dark:bg-rose bg-ink lg:w-18 lg:h-18 w-7 h-7 rounded-full inline-block lg:mr-8"/> Impossible to miss.</div>
    </div>
  )
}

export default WorkPage
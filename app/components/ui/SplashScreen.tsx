"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

gsap.registerPlugin(useGSAP);

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {

    const splashRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ onComplete: onFinish });

        tl.to(logoRef.current, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.6,
            ease: "power3.inOut",
            delay: 0.2
        })

           tl.to(splashRef.current, {
      y: '-100%',
      duration: 0.6,
      ease: "power3.inOut",
    })
        
    })

  return (
    <div ref={splashRef}
      className="fixed inset-0 z-999 flex items-center justify-center bg-offwhite"
    > <div ref={logoRef} className='font-plus flex flex-col text-ink select-none text-4xl font-black uppercase leading-8 lg:leading-28 lg:text-9xl hover:cursor-pointer '>
        <span>STUDIO</span><span><span className="mx-0.5">/</span>NORTH<span className="align-top text-xl">®
</span></span>
    </div>
    </div>
  )
}
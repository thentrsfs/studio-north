import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef} from "react";
import CustomButton from "../ui/CustomButton";

gsap.registerPlugin(ScrollTrigger);

const AdSection = () => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      const isMobile = window.innerWidth < 768;

      if(isMobile) return;
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top+=100",
            end: "bottom bottom-=130",
            pin: leftRef.current,
            pinSpacing: false,
            scrub: 0.5
        })
    }, {scope: sectionRef});
  return (
    <div className="relative lg:pt-50 pt-16">
     <div ref={sectionRef} id="ad-section" className="lg:grid grid-cols-2 flex flex-col-reverse max-md:gap-12 lg:px-24 px-6">
          <div ref={leftRef} className="flex flex-col lg:gap-4 gap-6 will-change-transform">
            <p className="lg:text-[100px] text-[38px] leading-10 lg:leading-24 tracking-tight max-w-3xl font-black uppercase font-plus">STUDIO/NORTH® helps <br className="max-md:hidden" /> brands <span className="dark:bg-rose bg-offwhite lg:w-18 lg:h-18 w-7 h-7 rounded-full inline-block"></span> connect w/ culture</p>
<div className="uppercase font-medium ">Adweek <span className="font-bold">Agency Spotlight</span> </div>
            <CustomButton text="About Us" />
          </div>
         <div className="bg-offwhite dark:bg-ink">
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
    </div>
  )
}

export default AdSection
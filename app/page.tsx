'use client';

import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTheme } from "next-themes";
import Hero from "./components/sections/Hero";
import AwardsSection from "./components/sections/AwardsSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import PromoSection from "./components/sections/PromoSection";
import NewsSection from "./components/sections/NewsSection";
import SplashScreen from "./components/ui/SplashScreen";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [loading, setLoading] = useState(true);
  // Dark and light theme
  const {setTheme } = useTheme();

    // Change theme on scroll
    useEffect(() => {
      const trigger = ScrollTrigger.create({
        trigger: "#promo-section",
        start: "top center",
        end: "bottom center-=200",
        onEnter: () => {
          setTheme("dark");
        },
        onEnterBack: () => {
          setTheme("dark");
        },
        onLeave: () => {
          setTheme("light");
        },
        onLeaveBack: () => {
          setTheme("light");
        },
      })
      ScrollTrigger.refresh();
      return () => trigger.kill();
    }, [ setTheme ]);

    // Set light theme on load
    useEffect(() => {
      setTheme("light");
    }, [])
  
  return (
  <>
  {loading && <SplashScreen onFinish={() => setLoading(false)}/>}
  <div
 >
    <Hero/>
    <div id="sections-below" className="relative overflow-hidden z-10">
    <AwardsSection/>
    <FeaturesSection/>
    <PromoSection/>
    <NewsSection/>
    </div>
   </div>
   </>
  );
}

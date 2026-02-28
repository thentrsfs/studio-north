'use client';

import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTheme } from "next-themes";
import Hero from "./components/sections/Hero";
import Nav from "./components/ui/Nav";
import AwardsSection from "./components/sections/AwardsSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import AdSection from "./components/sections/AdSection";
import NewsSection from "./components/sections/NewsSection";
import Footer from "./components/sections/Footer";
import SplashScreen from "./components/ui/SplashScreen";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [loading, setLoading] = useState(true);
  // State for transparent nav
  const [isTransparent, setIsTransparent] = useState(true);
  // Dark and light theme
  const {setTheme } = useTheme();

  // Transparent nav on scroll
    useEffect(() => {
     const trigger = ScrollTrigger.create({
        trigger: "#sections-below",
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setIsTransparent(false);
        },
        onLeaveBack: () => {
          setIsTransparent(true);
        },
      });
      return () => trigger.kill();
    }, []);

    // Change theme on scroll
   useEffect(() => {
  const timeout = setTimeout(() => {
    const el = document.querySelector("#ad-section");
    if (!el) return; // prevents hydration crash

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center-=200",
      onEnter: () => setTheme("dark"),
      onEnterBack: () => setTheme("dark"),
      onLeave: () => setTheme("light"),
      onLeaveBack: () => setTheme("light"),
    });

    return () => trigger.kill();
  }, 100); // give Next.js time to mount

  return () => clearTimeout(timeout);
}, [setTheme]);


    // Set light theme on load
    useEffect(() => {
      setTheme("light");
    }, [])
  
  return (
  <>
  {loading && <SplashScreen onFinish={() => setLoading(false)}/>}
  <div
 >
    <Nav transparent={isTransparent}/>
    <Hero/>
    <div id="sections-below" className="relative text-ink dark:text-rose transition-all duration-500 bg-offwhite dark:bg-ink z-10">
    <AwardsSection/>
    <FeaturesSection/>
    <AdSection/>
    <NewsSection/>
    <Footer/>
    </div>
   </div>
   </>
  );
}

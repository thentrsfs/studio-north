import Hero from "./pages/Hero";
import Nav from "./components/Nav";
import FeaturesSection from "./pages/FeaturesSection";


export default function Home() {
  
  return (
  <div>
    <Nav/>
    <Hero/>
    <div className="relative bg-offwhite overflow-hidden z-10">
      <div className="absolute inset-0 z-0 bg-black/5 noise" />
    <FeaturesSection/>
    </div>
   </div>
  );
}

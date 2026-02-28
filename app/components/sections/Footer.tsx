import { IoArrowForwardOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="lg:h-160 h-full bg-ink flex flex-col justify-between max-md:gap-16 w-full text-offwhite lg:pt-24 pt-12 font-plus" >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:pl-24 lg:pr-50 gap-10 lg:gap-12 px-6">
       <div className="lg:text-3xl text-xl font-black -tracking-wider select-none text-offwhite">
      S/N®
    </div>
    <div className="text-offwhite lg:text-3xl text-2xl font-medium leading-tightest">
        We collaborate with innovative brands and agencies. <a className="underline" href="mailto:filipstojkov54@gmail.com">Send us an email.</a>
    </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:pl-24 lg:pr-50 gap-10 lg:gap-12 px-6">
<div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
     <div className="w-3 h-3 rounded-full bg-offwhite" />
    <div className="uppercase text-offwhite font-bold">stay in the know</div>
    </div>
    <div className="lg:w-8/10 relative">
    <input type="email" placeholder="Email Address" className="text-offwhite w-full py-2 border-b-2 border-offwhite/50 outline-0 focus:border-offwhite placeholder:text-offwhite/60 bg-transparent" />
    <button type="submit" className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-ink p-1 rounded-l-xl">
    <IoArrowForwardOutline className="text-offwhite text-2xl" />
    </button>
    </div>
</div>

<div className="flex max-md:flex-col lg:justify-between max-md:gap-10 text-sm">
<div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-offwhite" />
    <h4 className="uppercase font-bold">Social</h4>
    </div>
    <ul className="flex flex-col">
<li><a className="hover:underline" href="">Instagram</a></li>
<li><a className="hover:underline" href="">Twitter</a></li>
<li><a className="hover:underline" href="">LinkedIn</a></li>
<li><a className="hover:underline" href="">Facebook</a></li>
    </ul>
</div>
<div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-offwhite" />
    <h4 className="uppercase font-bold">Initiatives</h4>
    </div>
    <ul className="flex flex-col">
<li><a className="hover:underline" href="">Hackathons</a></li>
<li><a className="hover:underline" href="">Workshops</a></li>
<li><a className="hover:underline" href="">Events</a></li>
<li><a className="hover:underline" href="">Collaborations</a></li>
    </ul>
</div>
<div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-offwhite" />
    <h4 className="uppercase font-bold">Offices</h4>
    </div>
    <ul className="flex flex-col">
<li><a className="hover:underline" href="">San Diego - CA</a></li>
<li><a className="hover:underline" href="">New York - NY</a></li>
<li><a className="hover:underline" href="">London - UK</a></li>
<li><a className="hover:underline" href="">Tokyo - JP</a></li>
<li><a className="hover:underline" href="">Sydney - AU</a></li>
<li><a className="hover:underline" href="">Melbourne - AU</a></li>
    </ul>
</div>
</div>
    </div>
    <div className="bg-black/30 w-full lg:h-15 py-6 max-md:gap-1.5 lg:px-24 flex max-md:flex-col justify-between items-center uppercase text-xs font-medium text-offwhite/30 ">
    <div className="flex gap-1">
        <span>Studio/North®,inc</span>
        <span>10-26©</span>
    </div>
    <p>Easy to understand, impossible to ignore.™</p>
    <p>Design inspired by BASIC/DEPT®</p>
    </div>
    </footer>
  )
}

export default Footer
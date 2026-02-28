
import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import RunetaskLogo from "../ui/logos/RunetaskLogo";
import NanopipeLogo from "../ui/logos/NanopipeLogo";
import GeodataLogo from "../ui/logos/GeodataLogo";

const AwardsSection = () => {
  return (
   <section className="lg:px-24 lg:py-20">
  <article className="flex justify-around lg:py-30 gap-4 py-12 max-md:px-6 font-plus">
    <div className="flex flex-col gap-4 items-center hover:scale-105 transition-transform duration-300 cursor-pointer lg:w-80" >
    <RunetaskLogo />
    <p className="text-xs text-center text-ink uppercase font-semibold">Development Agency of the Year</p>
    </div>
    <div className="flex flex-col gap-4 items-center hover:scale-105 transition-transform duration-300 cursor-pointer lg:w-80" >
    <NanopipeLogo />
    <p className="text-xs text-center text-ink uppercase font-semibold">Creative Agency of the Year</p>
    </div>
    <div className="flex flex-col gap-4 items-center hover:scale-105 transition-transform duration-300 cursor-pointer lg:w-80" >
    <GeodataLogo />
    <p className="text-xs text-center text-ink uppercase font-semibold">Design Studio of the Year</p>
    </div>
  </article>

  <div className="lg:mt-32 h-px bg-ink max-md:mx-6" />

  <article className="flex max-md:flex-col items-center justify-between gap-10 pt-12 max-md:px-6">
    <div className="flex flex-col lg:gap-12 gap-8">
    <p className="lg:text-3xl text-2xl max-w-3xl lg:leading-normal leading-tight font-medium">
      We are a multidisciplinary design studio crafting digital experiences,
      brand systems, and interactive products that connect culture and technology.
    </p>
    <CustomButton text="See the work" />
</div>
    <div className="lg:text-[20rem] text-8xl font-plus font-black -tracking-wider select-none self-end">
      S/N®
    </div>
  </article>
 <div className="
  grid grid-cols-3 gap-5 pt-20
  max-md:overflow-x-auto 
  max-md:flex 
  max-md:gap-4 
  max-md:snap-x 
  max-md:snap-mandatory 
  max-md:scroll-smooth
  no-scrollbar
">
  <article className="group flex flex-col cursor-pointer gap-4 snap-start max-md:w-70 max-md:shrink-0 max-md:pl-6">
    <div className="relative overflow-hidden lg:h-180 h-90">
      <Image className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-300 ease-in-out" src='/northfield.jpg' width={400} height={400} alt='Northfield Supply' />
    </div>
    <div className="flex flex-col gap-1">
      <h2 className="font-plus font-bold text-2xl uppercase text-ink group-hover:underline transition-all duration-300">Northfield Supply</h2>
      <p className="uppercase text-xs font-medium text-ink">Outdoor goods for modern exploration</p>
    </div>
  </article>

  <article className="group flex flex-col cursor-pointer gap-4 snap-start max-md:w-70 max-md:shrink-0">
    <div className="relative overflow-hidden lg:h-180 h-90">
      <Image className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-300 ease-in-out" src='/lume.jpg' width={400} height={400} alt='LUME' />
    </div>
    <div className="flex flex-col gap-1">
      <h2 className="font-plus font-bold text-2xl uppercase text-ink group-hover:underline transition-all duration-300">LUME</h2>
      <p className="uppercase text-xs font-medium text-ink">Wellness objects and rituals</p>
    </div>
  </article>

  <article className="group flex flex-col cursor-pointer gap-4 snap-start max-md:w-70 max-md:shrink-0">
    <div className="relative overflow-hidden lg:h-180 h-90">
      <video className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-300 ease-in-out" autoPlay loop muted playsInline>
        <source src="/video/startup-vid.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="flex flex-col gap-1">
      <h2 className="font-plus font-bold text-2xl uppercase text-ink group-hover:underline transition-all duration-300">OFFSET</h2>
      <p className="uppercase text-xs font-medium text-ink">Digital-first editorial platform</p>
    </div>
  </article>
</div>

</section>

  )
}

export default AwardsSection
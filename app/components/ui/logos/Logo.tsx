
const Logo = ({ className}: { className?: string}) => {
  return (
    <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={`font-plus z-20 select-none text-xl lg:text-2xl font-black uppercase tracking-wide hover:cursor-pointer ${className}`}>
        STUDIO<span className="mx-0.5">/</span>NORTH<span className="align-top text-xl">®
</span>
    </div>
  )
}

export default Logo
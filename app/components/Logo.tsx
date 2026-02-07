
const Logo = ({ className}: { className?: string}) => {
  return (
    <div className={`font-space z-10 text-xl lg:text-2xl font-black uppercase tracking-wide transition-all duration-500 ease-in hover:cursor-pointer ${className}`}>
        STUDIO<span className="mx-1">/</span>NORTH<span className="align-top text-xl">®
</span>
    </div>
  )
}

export default Logo
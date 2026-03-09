'use client'

import Link from "next/link"

const Logo = ({ className}: { className?: string}) => {
  return (
    <Link href="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={`font-plus z-20 select-none text-xl lg:text-2xl font-black uppercase tracking-wide hover:cursor-pointer ${className}`}>
        STUDIO<span className="mx-0.5">/</span>NORTH<span className="align-top text-xl">®
</span>
    </Link>
  )
}

export default Logo
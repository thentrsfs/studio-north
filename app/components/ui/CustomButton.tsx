
const CustomButton = ({text, className} : {text: string, className?: string}) => {
  return (
    <button className={`${className} group relative overflow-hidden self-start border border-ink rounded-2xl px-8 py-1.5 uppercase text-xs font-bold font-plus text-ink cursor-pointer dark:text-rose dark:border-rose`}>
      <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-offwhite dark:group-hover:text-ink">{text}</span>
      <span className="absolute inset-0 bg-ink dark:bg-rose translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"/>
    </button>
  )
}

export default CustomButton

const Dots = ({onClick, bgColor} : {onClick: () => void, bgColor: string}) => {
  return (
    <div onClick={onClick} className="hidden lg:flex items-center gap-1 cursor-pointer group p-4">
  <span className={`w-1.5 h-1.5 ${bgColor} rounded-full transition-transform duration-300 group-hover:-translate-x-1`}/>
  <span className={`w-1.5 h-1.5 ${bgColor} rounded-full transition-transform duration-300`}/>
  <span className={`w-1.5 h-1.5 ${bgColor} rounded-full transition-transform duration-300 group-hover:translate-x-1`}/>
</div>
  )
}

export default Dots
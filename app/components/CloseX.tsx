
const CloseX = ({onClose, className}: {onClose: () => void, className?: string}) => {
  return (
     <div onClick={onClose} className={`cursor-pointer text-offwhite border rounded-full p-1 ${className || ''}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>
  )
}

export default CloseX
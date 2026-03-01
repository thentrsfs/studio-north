'use client'

import { motion, useMotionValue } from "motion/react"
import { useEffect, useRef } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const DraggingCursor = ({className, cursorPos, active, isDragging, wrapperRef} : {className?: string, cursorPos: {x: 0, y: 0}, active?: boolean, isDragging?: boolean , wrapperRef?: React.RefObject<HTMLDivElement>}) => {

  // Cursor position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const lastMouseX = useRef(0); 
  const lastMouseY = useRef(0);

  // Update cursor position 
  useEffect(() => {
    const wrapper = wrapperRef?.current;
    
  const update = () => {
    if (!active || !wrapper) return;
 

    const bounds = wrapper.getBoundingClientRect();

    // Keep cursor aligned even when scrolling
    mouseX.set(lastMouseX.current - bounds.left);
    mouseY.set(lastMouseY.current - bounds.top);
  };

  const move = (e: MouseEvent) => {
    if (!active) return;

    lastMouseX.current = e.clientX;
    lastMouseY.current = e.clientY;

    update();
  };

  window.addEventListener("mousemove", move);
  window.addEventListener("scroll", update, { passive: true });

  return () => {
    window.removeEventListener("mousemove", move);
    window.removeEventListener("scroll", update);
  };
}, [active]);



  return (
     <motion.div className={`absolute top-0 left-0 lg:flex hidden justify-between items-center pointer-events-none transition-all duration-100 ease-out projects-cursor
 ${className}`} style={{ x: active ? mouseX : cursorPos.x, y: active ? mouseY : cursorPos.y, translateX: "-50%", translateY: "-50%", scale: active ? 1 : 0.9 }}>
 <IoMdArrowDropleft className={`text-3xl text-rose transition-all duration-300 ${isDragging ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`w-28 h-28 rounded-full text-sm bg-rose text-brown flex items-center justify-center font-plus font-black uppercase tracking-wider transition-all duration-300 ${isDragging && 'scale-75'}`}>
        <motion.div className={`transition-all duration-300 text-ink ${isDragging ? 'opacity-0' : 'opacity-100'}`}
animate={
    active
      ? { scale: 0.9, letterSpacing: "0.2em" }
      : { scale: 1, letterSpacing: "0em"}
  }
  transition={{ duration: 0.2, ease: "easeOut" }}>
        Drag
        </motion.div>
        
</div>
<IoMdArrowDropright className={`text-3xl text-rose transition-all duration-300 ${isDragging ? 'opacity-100' : 'opacity-0'}`} />
    </motion.div>
  )
}

export default DraggingCursor

const ProjectsCursor = ({className, style} : {className?: string, style?: React.CSSProperties}) => {
  return (
     <div className={`projects-cursor fixed top-0 left-0 z-9 flex flex-col gap-2 pointer-events-none transition-all duration-100 ease-out
 ${className}`} style={style}>
      <div className="projects-cursor w-25 h-25 rounded-full text-xs bg-rose text-brown flex items-center justify-center font-bold uppercase tracking-wide">
        Drag
</div>
    </div>
  )
}

export default ProjectsCursor
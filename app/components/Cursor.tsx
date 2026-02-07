const Cursor = ({ className, style } : { className?: string; style?: React.CSSProperties }) => {
  return (
    <div
      className={`z-9 flex flex-col gap-2 pointer-events-none transition-transform duration-100 ease-out ${className}`}
      style={style}
    >
      <div className="w-25 h-25 rounded-full text-sm border-2 border-offwhite text-offwhite flex items-center justify-center font-semibold uppercase tracking-widest">
        View
      </div>
      <div className="text-offwhite flex flex-col items-center text-xs font-semibold">
        <span>STUDIO/NORTH®</span>
        <span>2013-∞</span>
      </div>
    </div>
  );
};

export default Cursor;
